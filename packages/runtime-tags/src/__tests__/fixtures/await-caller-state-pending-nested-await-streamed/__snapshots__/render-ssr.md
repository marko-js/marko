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
