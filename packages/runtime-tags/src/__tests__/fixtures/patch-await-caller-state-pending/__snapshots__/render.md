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
  a:0
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
  a:0
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
<p>
  waiting
</p>
```
## Change
```
INSERT: .settle + p
REMOVE: p + p
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
  b:42
</p>
```
## Change
```
INSERT: .settle + p
REMOVE: p + p
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
  c:42
</p>
```
## Change
```
UPDATE: p::text@0 "b" => "c"
```
