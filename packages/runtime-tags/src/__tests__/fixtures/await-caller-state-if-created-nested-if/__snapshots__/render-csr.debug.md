# Render `{"show":false,"label":"a"}`
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

# Update `{"show":true,"label":"b"}`

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
  b:42
</p>
<em>
  b
</em>
```
## Change
```
INSERT: .settle + p
UPDATE: p::text@2 "" => "42"
UPDATE: p::text@0 "" => "b"
INSERT: p + em
UPDATE: em::text " " => "b"
```

# Update `{"show":true,"label":"c"}`
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
```
## Change
```
UPDATE: p::text@0 "b" => "c"
REMOVE: p + em
```
