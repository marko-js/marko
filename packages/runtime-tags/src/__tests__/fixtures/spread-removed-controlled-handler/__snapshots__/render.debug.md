# Render
```html
<input
  value="init"
/>
<span>
  value=[init]
</span>
<button>
  drop
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<input
  type="text"
/>
<span>
  value=[init]
</span>
<button>
  drop
</button>
```
## Change
```
UPDATE: input[value] "init" => null
UPDATE: input[type] null => "text"
```

# Update
```js
const input = document.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
