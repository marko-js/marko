# Render `{"x":"first","color":"red"}`
```html
<b
  class="x"
>
  first
</b>
<button>
  toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: style
REMOVE: b
```

# Update `{"x":"second","color":"blue"}`
