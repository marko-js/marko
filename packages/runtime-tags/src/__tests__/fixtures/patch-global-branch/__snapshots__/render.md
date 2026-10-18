# Render `{"msg":"home","$global":{"meta":{}}}`
```html
<main>
  home
</main>
<footer>
  foot
</footer>
```

# Update `{"msg":"docs","$global":{"meta":{"headings":true}}}`
```html
<a
  href="#main"
>
  Skip to content
</a>
<main>
  docs
</main>
<footer>
  foot
</footer>
```
## Change
```
UPDATE: main::text "home" => "docs"
INSERT: a
```

# Update `{"msg":"bare","$global":{"meta":{"headings":true,"hideFooter":true}}}`
```html
<a
  href="#main"
>
  Skip to content
</a>
<main>
  bare
</main>
```
## Change
```
UPDATE: main::text "docs" => "bare"
REMOVE: main + footer
```

# Update `{"msg":"home","$global":{"meta":{}}}`
```html
<main>
  home
</main>
<footer>
  foot
</footer>
```
## Change
```
UPDATE: main::text "bare" => "home"
REMOVE: a
INSERT: main + footer
```
