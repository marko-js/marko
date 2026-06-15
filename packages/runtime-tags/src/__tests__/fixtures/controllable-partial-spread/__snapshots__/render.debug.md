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
container.querySelector("button").click();
```

# Update
```js
const input = container.querySelectorAll("input")[2];
const window = input.ownerDocument.defaultView;
input.value = "typed";
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
