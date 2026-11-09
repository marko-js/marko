# Render
```html
<button
  id="class"
>
  toggle
</button>
<b
  id="item"
>
  a
</b>
<i>
  body
</i>
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  toggle
</button>
<b
  id="item"
>
  b
</b>
<i>
  body
</i>
```
## Change
```
UPDATE: #item::text "a" => "b"
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  toggle
</button>
<b
  id="item"
>
  a
</b>
<i>
  body
</i>
```
## Change
```
UPDATE: #item::text "b" => "a"
```
