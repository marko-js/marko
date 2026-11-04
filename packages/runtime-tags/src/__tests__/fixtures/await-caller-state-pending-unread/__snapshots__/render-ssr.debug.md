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
