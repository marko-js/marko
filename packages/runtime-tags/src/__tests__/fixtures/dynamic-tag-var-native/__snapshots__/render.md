# Render
```html
<div />
<button
  id="swap"
>
  swap
</button>
<button
  id="read"
>
  read
</button>
<output />
```

# Update `click("#read")`
```html
<div />
<button
  id="swap"
>
  swap
</button>
<button
  id="read"
>
  read
</button>
<output>
  DIV
</output>
```
## Change
```
UPDATE: output::text "" => "DIV"
```

# Update `click("#swap")`
```html
<span />
<button
  id="swap"
>
  swap
</button>
<button
  id="read"
>
  read
</button>
<output>
  DIV
</output>
```
## Change
```
INSERT: span
REMOVE: span + div
```

# Update `click("#read")`
```html
<span />
<button
  id="swap"
>
  swap
</button>
<button
  id="read"
>
  read
</button>
<output>
  SPAN
</output>
```
## Change
```
UPDATE: output::text "DIV" => "SPAN"
```
