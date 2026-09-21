# Render
```html
<button
  id="inc"
>
  0
</button>
<h1>
  static content: not registered
</h1>
<h2>
  also static: not registered
</h2>
```

# Update
```js
document.querySelector("#inc").click();
```
```html
<button
  id="inc"
>
  1
</button>
<h1>
  static content: not registered
</h1>
<h2>
  also static: not registered
</h2>
```
## Change
```
UPDATE: #inc::text "0" => "1"
```
