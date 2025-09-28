$old_string = "'$(?:$|\\/)'"
$new_string = "'($|\\/)'"
$targets = Get-ChildItem -Recurse .\node_modules\ -Filter ast.js | Where-Object { (Get-Content -Raw $_.FullName) -match [regex]::Escape($old_string) }

foreach ($f in $targets) {
  Write-Host "Found target: $($f.FullName)"
  $content = Get-Content -Raw $f.FullName
  $new_content = $content.Replace($old_string, $new_string)
  Set-Content -Path $f.FullName -Value $new_content -NoNewline
  Write-Host "Patched: $($f.FullName)"
}