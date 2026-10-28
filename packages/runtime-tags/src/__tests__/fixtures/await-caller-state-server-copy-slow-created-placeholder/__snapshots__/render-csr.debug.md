# Render `{"show":false,"label":"a","promise":{}}`
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

# Update `{"show":true,"label":"b","promise":{"value":"SECRET_server"}}`

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
<em>
  waiting
</em>
```
## Change
```
INSERT: .settle + em
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
  b:client
</p>
```
## Change
```
INSERT: .settle + p
REMOVE: p + em
```
