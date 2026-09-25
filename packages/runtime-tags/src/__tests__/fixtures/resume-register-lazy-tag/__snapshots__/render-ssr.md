# Render
```html
<button
  id="inc"
>
  0
</button>
<h1>
  lazy child: registered
</h1>
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
<h2>
  lazy child: registered
</h2>
```
## Change
```
UPDATE: #inc::text "0" => "1"
INSERT: #inc + h2
REMOVE: h2 + h1
INSERT: h2::text("lazy child: registered")
```

# Update
```js
document.querySelector("#inc").click();
```
```html
<button
  id="inc"
>
  2
</button>
<h1>
  lazy child: registered
</h1>
```
## Change
```
UPDATE: #inc::text "1" => "2"
INSERT: #inc + h1
REMOVE: h1 + h2
INSERT: h1::text("lazy child: registered")
```
