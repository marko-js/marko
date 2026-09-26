# Render `{"svg":{"xmlns":"http://www.w3.org/2000/svg"},"use":{"xlink:href":"#a"},"div":{"xml:lang":"en"}}`
```html
<svg
  xmlns="http://www.w3.org/2000/svg"
>
  <use
    xlink:href="#a"
  />
</svg>
<div
  xml:lang="en"
/>
```
## Console
```
WARN "`xlink:href` loses its namespace when set by a spread or dynamic tag, so browsers may ignore it; write it on a native tag, after any spread."
```

# Update `{"svg":{"xmlns":"http://www.w3.org/2000/svg"},"use":{"xlink:href":"#b"},"div":{"xml:lang":"fr"}}`
```html
<svg
  xmlns="http://www.w3.org/2000/svg"
>
  <use
    xlink:href="#b"
  />
</svg>
<div
  xml:lang="fr"
/>
```
## Change
```
UPDATE: svg > use[xlink:href] "#a" => "#b"
UPDATE: div[xml:lang] "en" => "fr"
```
