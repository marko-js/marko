# Render `{"value":"Hello"}`

```html
<div>
  <span>
    Hello
  </span>
</div>
<input
  value="Hello"
/>
```


# Render
```js
const input = container.querySelector("input");
input.value = value;
input.dispatchEvent(new input.ownerDocument.defaultView.Event("input", {
  bubbles: true
}));
```
```html
<div />
<input />
```


# Render
```js
const input = container.querySelector("input");
input.value = value;
input.dispatchEvent(new input.ownerDocument.defaultView.Event("input", {
  bubbles: true
}));
```
```html
<div>
  <span>
    World
  </span>
</div>
<input
  value="World"
/>
```


# Render
```js
const input = container.querySelector("input");
input.value = value;
input.dispatchEvent(new input.ownerDocument.defaultView.Event("input", {
  bubbles: true
}));
```
```html
<div>
  <span>
    !
  </span>
</div>
<input
  value="!"
/>
```
