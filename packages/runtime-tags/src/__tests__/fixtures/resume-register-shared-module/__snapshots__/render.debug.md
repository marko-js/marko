# Render
```html
<button
  id="t"
>
  t
</button>
<button
  id="t"
>
  t
</button>
```

# Update
```js
document.querySelector("#t").click();
```
```html
<button
  id="t"
>
  t
</button>
shared body: registered once
<button
  id="t"
>
  t
</button>
```
## Change
```
INSERT: #t + ::text("shared body: registered once")
```
