# Render
```html
<button
  class="whole"
>
  whole
</button>
<button
  class="hoisted"
>
  hoisted
</button>
<div />
```

# Update
```js
document.querySelector(".hoisted").click();
```
```html
<button
  class="whole"
>
  whole
</button>
<button
  class="hoisted"
>
  hoisted
</button>
<div>
  [1]
</div>
```
## Change
```
UPDATE: div::text "" => "[1]"
```
