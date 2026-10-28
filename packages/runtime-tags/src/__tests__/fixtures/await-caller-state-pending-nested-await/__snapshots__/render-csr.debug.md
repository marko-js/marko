# Render `{"label":"a"}`
```html
<button
  class="open"
>
  pend
</button>
<button
  class="settle"
  disabled=""
>
  settle
</button>
```

# Update
```js
document.querySelector("button.open").click();
```
```html
<button
  class="open"
>
  pend
</button>
<button
  class="settle"
>
  settle
</button>
```
## Change
```
UPDATE: .settle[disabled] "" => null
```

# Update `{"label":"b"}`

# Update `{"label":"c"}`

# Update
```js
document.querySelector("button.settle").click();
```
```html
<button
  class="open"
>
  pend
</button>
<button
  class="settle"
>
  settle
</button>
<p>
  c:42
</p>
<em>
  c
</em>
```
## Change
```
INSERT: .settle + p
UPDATE: p::text@2 "" => "42"
UPDATE: p::text@0 "" => "c"
INSERT: p + em
UPDATE: em::text " " => "c"
```
