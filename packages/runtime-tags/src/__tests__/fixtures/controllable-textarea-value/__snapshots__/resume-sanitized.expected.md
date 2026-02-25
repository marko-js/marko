# Render
```html
<textarea>
  hello
</textarea>
<span>
  hello
</span>
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
<span>
  w
</span>
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
<span>
  wor
</span>
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
<span>
  world
</span>
```
