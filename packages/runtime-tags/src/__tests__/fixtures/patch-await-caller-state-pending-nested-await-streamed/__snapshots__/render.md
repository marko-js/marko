# Render `{"label":"a","inner":{}}`
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
<em>
  a
</em>
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
<em>
  a
</em>
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
REMOVE: .settle + em
```

# Update `{"label":"b","inner":{}}`

# Update `{"label":"c","inner":{"value":"c"}}`

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
  b
</em>
```
## Change
```
INSERT: .settle + :is(p, i)
INSERT: p + em
REMOVE: em + i
```

# Update `{"label":"c","inner":{"value":"c"}}`
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
UPDATE: em::text "b" => "c"
```
