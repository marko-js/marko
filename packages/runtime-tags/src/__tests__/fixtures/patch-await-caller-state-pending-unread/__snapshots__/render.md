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
<p>
  a
</p>
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
<p>
  a
</p>
```
## Change
```
UPDATE: .settle[disabled] "" => null
```

# Update
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
REMOVE: .settle + p
```

# Update `{"label":"b"}`

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
  b
</p>
```
## Change
```
INSERT: .settle + p
```

# Update `{"label":"c"}`
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
  c
</p>
```
## Change
```
UPDATE: p::text "b" => "c"
```
