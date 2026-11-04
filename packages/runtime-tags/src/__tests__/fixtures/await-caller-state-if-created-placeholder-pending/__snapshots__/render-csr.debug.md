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
  waiting
</p>
```
## Change
```
INSERT: .settle + p
```

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
```
## Change
```
INSERT: .settle + p
REMOVE: p + p
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
```
