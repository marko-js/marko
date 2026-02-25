# Render
```html
<textarea>
  hello
</textarea>
```


# Render
```js
const textarea = container.querySelector("textarea");
const window = textarea.ownerDocument.defaultView;
textarea.value = value;
textarea.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<textarea
  default-value="hello"
>
  w
</textarea>
```


# Render
```js
const textarea = container.querySelector("textarea");
const window = textarea.ownerDocument.defaultView;
textarea.value = value;
textarea.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<textarea
  default-value="hello"
>
  wor
</textarea>
```


# Render
```js
const textarea = container.querySelector("textarea");
const window = textarea.ownerDocument.defaultView;
textarea.value = value;
textarea.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<textarea
  default-value="hello"
>
  world
</textarea>
```
