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

# Update
```js
(document.querySelector("#read")).click();
```
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

# Update
```js
(document.querySelector("#swap")).click();
```
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

# Update
```js
(document.querySelector("#read")).click();
```
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
