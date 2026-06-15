# Render
```html
<button>
  start
</button>
<input
  value="start"
/>
<input
  value="start"
/>
<input
  value="start"
/>
```

# Update
```js
const input = container.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<button>
  typed
</button>
<input
  default-value="start"
  value="typed"
/>
<input
  default-value="start"
  value="typed"
/>
<input
  default-value="start"
  value="typed"
/>
```
## Change
```
UPDATE: button::text "start" => "typed"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  typed!
</button>
<input
  default-value="start"
  value="typed!"
/>
<input
  default-value="start"
  value="typed!"
/>
<input
  default-value="start"
  value="typed!"
/>
```
## Change
```
UPDATE: button::text "typed" => "typed!"
```
