# Render
```html
<button>
  a
</button>
<button>
  b
</button>
<div
  id="log"
/>
```

# Update
```js
const buttons = document.querySelectorAll("button");
buttons[buttons.length - 1].click();
```
```html
<button>
  a
</button>
<button>
  b
</button>
<div
  id="log"
>
  b1
</div>
```
## Change
```
INSERT: #log::text("b1")
```
