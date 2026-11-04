# Render
```html
<button>
  a1
</button>
<button>
  a2
</button>
<button>
  b1
</button>
<button>
  b2
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
  a1
</button>
<button>
  a2
</button>
<button>
  b1
</button>
<button>
  b2
</button>
<div
  id="log"
>
  b2
</div>
```
## Change
```
INSERT: #log::text("b2")
```
