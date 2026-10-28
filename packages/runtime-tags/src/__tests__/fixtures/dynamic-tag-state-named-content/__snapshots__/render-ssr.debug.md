# Render `{"bs":[1],"note":"a"}`
```html
<button
  class="reset"
>
  reset
</button>
<div>
  1:a
</div>
```

# Update
```js
for (const b of document.querySelectorAll(".reset")) {
b.click();
}
```
