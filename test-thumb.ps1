Add-Type -AssemblyName System.Drawing

function Create-Thumb($srcPath, $destPath, $maxDim) {
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
    $g.DrawImage($img, 0, 0, $newW, $newH)

    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]85)

    $bmp.Save($destPath, $codec, $encoderParams)
    $g.Dispose()
    $bmp.Dispose()
    $img.Dispose()
    return $true
  } catch {
    if ($img) { $img.Dispose() }
    if ($bmp) { $bmp.Dispose() }
    return $false
  }
}

$sampleFile = (Get-ChildItem -Path "public/brand detail" -File | Where-Object { $_.Extension -match "png|jpg" })[0].FullName
$targetThumb = "public/_thumbs/brand detail/test.jpg"
$res = Create-Thumb $sampleFile $targetThumb 640
$size = (Get-Item $targetThumb).Length
Write-Host "Created sample thumbnail: $res, Size: $size bytes"

