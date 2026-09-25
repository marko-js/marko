# Render
```html
<button
  id="inc"
>
  0
</button>
<h1>
  define body: not registered
</h1>
<h3>
  define body: not registered
</h3>
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
  define body: not registered
</h1>
<h2>
  define body: not registered
</h2>
```
## Change
```
UPDATE: #inc::text "0" => "1"
INSERT: h1 + h2
REMOVE: h2 + h3
INSERT: h2::text("define body: not registered")
```
