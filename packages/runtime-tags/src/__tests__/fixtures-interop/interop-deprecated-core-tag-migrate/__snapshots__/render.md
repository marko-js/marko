# Render `{"greeting":"hi"}`
```html
<button
  id="inc"
>
  inc
</button>
<div
  id="out"
>
  hi 0
</div>
```

# Update
```js
(document.querySelector("#inc")).click();
```
```html
<button
  id="inc"
>
  inc
</button>
<div
  id="out"
>
  hi 1
</div>
```
## Change
```
REMOVE: #out::text("hi 0")
INSERT: #out::text("hi 1")
```
