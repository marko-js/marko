# Render `{"msg":"home","$global":{"meta":{}}}`
```html
<main>
  home
</main>
<footer>
  foot
</footer>
<p>
  home
</p>
```

# Update `{"msg":"docs","$global":{"meta":{"headings":true}}}`
```html
<a
  href="#main"
  title="docs"
>
  Skip to content
</a>
<main>
  docs
</main>
<footer>
  foot
</footer>
<p>
  docs
</p>
```
## Change
```
INSERT: a
UPDATE: main::text "home" => "docs"
UPDATE: a[title] null => "docs"
REMOVE: p::text("home")
INSERT: p::text("docs")
```

# Update `{"msg":"bare","$global":{"meta":{"headings":true,"hideFooter":true}}}`
```html
<a
  href="#main"
  title="bare"
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
REMOVE: main + p
UPDATE: a[title] "docs" => "bare"
```

# Update `{"msg":"home","$global":{"meta":{}}}`
```html
<main>
  home
</main>
<footer>
  foot
</footer>
<p>
  home
</p>
```
## Change
```
REMOVE: a
UPDATE: main::text "bare" => "home"
INSERT: main + footer
INSERT: footer + p
INSERT: p::text("home")
```
