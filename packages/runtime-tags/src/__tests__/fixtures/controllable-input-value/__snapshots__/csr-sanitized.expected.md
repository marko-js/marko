# Render {}
```html
<input
  type="text"
  value="hello"
/>
<span>
  hello
</span>
```


# Render 
const input = container.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}))

```html
<input
  type="text"
  value="w"
/>
<span>
  w
</span>
```


# Render 
const input = container.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}))

```html
<input
  type="text"
  value="wor"
/>
<span>
  wor
</span>
```


# Render 
const input = container.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}))

```html
<input
  type="text"
  value="world"
/>
<span>
  world
</span>
```