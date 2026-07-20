# Render
```html
<button>
  inc
</button>
<input
  placeholder="p"
/>
<input
  placeholder="p"
/>
<input
  placeholder="p"
  value="a"
/>
```

# Update
```js
document.querySelector("button").click();
```

# Update
```js
const input = document.querySelectorAll("input")[2];
const window = input.ownerDocument.defaultView;
input.value = "typed";
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
