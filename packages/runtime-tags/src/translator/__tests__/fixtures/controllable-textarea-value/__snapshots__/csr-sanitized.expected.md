# Render {}
```html
<textarea>
  hello
</textarea>
<span>
  hello
</span>
```


# Render 
const textarea = container.querySelector("textarea");
const window = textarea.ownerDocument.defaultView;
textarea.value = value;
textarea.dispatchEvent(new window.Event("input", {
  bubbles: true
}))

```html
<textarea>
  w
</textarea>
<span>
  w
</span>
```


# Render 
const textarea = container.querySelector("textarea");
const window = textarea.ownerDocument.defaultView;
textarea.value = value;
textarea.dispatchEvent(new window.Event("input", {
  bubbles: true
}))

```html
<textarea>
  wor
</textarea>
<span>
  wor
</span>
```


# Render 
const textarea = container.querySelector("textarea");
const window = textarea.ownerDocument.defaultView;
textarea.value = value;
textarea.dispatchEvent(new window.Event("input", {
  bubbles: true
}))

```html
<textarea>
  world
</textarea>
<span>
  world
</span>
```