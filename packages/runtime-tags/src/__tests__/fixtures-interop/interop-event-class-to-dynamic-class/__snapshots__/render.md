# Render
```html
<div
  id="count"
>
  0
</div>
<button
  id="child"
>
  child
</button>
```

# Update
```js
(document.querySelector("#child")).click();
```
```html
<div
  id="count"
>
  1
</div>
<button
  id="child"
>
  child
</button>
```
## Change
```
UPDATE: #count::text "0" => "1"
```

# Update
```js
(document.querySelector("#child")).click();
```
```html
<div
  id="count"
>
  2
</div>
<button
  id="child"
>
  child
</button>
```
## Change
```
UPDATE: #count::text "1" => "2"
```
