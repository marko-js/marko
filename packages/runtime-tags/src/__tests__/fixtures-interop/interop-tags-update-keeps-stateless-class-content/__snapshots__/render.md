# Render
```html
<button
  id="tags"
>
  0
</button>
<b
  id="body"
>
  class body
</b>
```

# Update
```js
(document.querySelector("#tags")).click();
```
```html
<button
  id="tags"
>
  1
</button>
<b
  id="body"
>
  class body
</b>
```
## Change
```
UPDATE: #tags::text "0" => "1"
```

# Update
```js
(document.querySelector("#tags")).click();
```
```html
<button
  id="tags"
>
  2
</button>
<b
  id="body"
>
  class body
</b>
```
## Change
```
UPDATE: #tags::text "1" => "2"
```
