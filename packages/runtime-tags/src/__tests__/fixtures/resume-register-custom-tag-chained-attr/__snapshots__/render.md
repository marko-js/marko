# Render
```html
<button
  id="inc"
>
  0
</button>
<h1>
  chained string: not registered
</h1>
<h1>
  chained state string: not registered
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
<h1>
  chained string: not registered
</h1>
<h2>
  chained state string: not registered
</h2>
```
## Change
```
UPDATE: #inc::text "0" => "1"
INSERT: h1 + h2
REMOVE: h2 + h1
INSERT: h2::text("chained state string: not registered")
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
  chained string: not registered
</h1>
<h1>
  chained state string: not registered
</h1>
```
## Change
```
UPDATE: #inc::text "1" => "2"
INSERT: h1:nth-of-type(1) + h1
REMOVE: h1:nth-of-type(2) + h2
INSERT: h1:nth-of-type(2)::text("chained state string: not registered")
```
