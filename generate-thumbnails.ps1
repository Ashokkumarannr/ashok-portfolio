Add-Type -AssemblyName System.Drawing

function Create-Thumb($srcPath, $destPath, $maxDim) {
  $img = $null
  $bmp = $null
  $g = $null
  try {
    $destDir = [System.IO.Path]::GetDirectoryName($destPath)
    if (-not (Test-Path $destDir)) {
      [System.IO.Directory]::CreateDirectory($destDir) | Out-Null
    }

    $img = [System.Drawing.Image]::FromFile($srcPath)
    $w = $img.Width
    $h = $img.Height

    if ($w -gt $maxDim -or $h -gt $maxDim) {
      if ($w -ge $h) {
        $newW = $maxDim
        $newH = [int](($h * $maxDim) / $w)
      } else {
        $newH = $maxDim
        $newW = [int](($w * $maxDim) / $h)
      }
    } else {
      $newW = $w
      $newH = $h
    }

    $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::White)
    $g.DrawImage($img, 0, 0, $newW, $newH)

    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]85)

    $bmp.Save($destPath, $codec, $encoderParams)
    return $true
  } catch {
    return $false
  } finally {
    if ($g) { $g.Dispose() }
    if ($bmp) { $bmp.Dispose() }
    if ($img) { $img.Dispose() }
  }
}

$folders = @('brand detail', 'p2', 'package', 'cricketer', 'theunioa', 'education', 'resturant', 'teal holidyas', 'presentation', 'kids cloth', 'stockmarket')
$totalCreated = 0

foreach ($f in $folders) {
  $dir = Join-Path "public/assets" $f
  if (Test-Path $dir) {
    $files = Get-ChildItem -Path $dir -File | Where-Object { $_.Extension -match "\.(png|jpg|jpeg|webp)$" }
    foreach ($file in $files) {
      $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
      $dest = Join-Path "public/assets/_thumbs" (Join-Path $f "$baseName.jpg")
      
      $needCreate = $true
      if (Test-Path -LiteralPath $dest) {
        if ((Get-Item -LiteralPath $dest).LastWriteTime -ge $file.LastWriteTime) {
          $needCreate = $false
        }
      }
      
      if ($needCreate) {
        $ok = Create-Thumb $file.FullName $dest 600
        if ($ok) { $totalCreated++ }
      }
    }
  }
}

Write-Host "Thumbnails ready in public/assets/_thumbs. Newly generated: $totalCreated"

