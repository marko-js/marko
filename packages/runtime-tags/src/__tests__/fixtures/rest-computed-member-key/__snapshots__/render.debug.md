# Render `{"key":{"name":"k"}}`
```html
<div>
  1------
</div>
<button
  class="mutate"
>
  mutate
</button>
```

# Update
```js
document.querySelector(".mutate").click();
```
```html
<div>
  1-3-2--
</div>
<button
  class="mutate"
>
  mutate
</button>
```
## Change
```
UPDATE: div::text@2 "-" => "3"
UPDATE: div::text@4 "-" => "2"
```
