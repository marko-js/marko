# Render
```html
<button
  class="item"
>
  One 0
</button>
<button
  class="item"
>
  Two
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button
  class="item"
>
  One 1
</button>
<button
  class="item"
>
  Two
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@4 "0" => "1"
```
