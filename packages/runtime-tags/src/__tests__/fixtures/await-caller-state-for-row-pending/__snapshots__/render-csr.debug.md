# Render `{"items":["r"],"label":"a"}`
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

# Update `{"items":["r"],"label":"b"}`

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
  rb:42
</p>
```
## Change
```
INSERT: .settle + p
UPDATE: p::text@3 "" => "42"
UPDATE: p::text@1 "" => "b"
UPDATE: p::text@0 "" => "r"
```

# Update `{"items":["r"],"label":"c"}`
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
  rc:42
</p>
```
## Change
```
UPDATE: p::text@1 "b" => "c"
```
