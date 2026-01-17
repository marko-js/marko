# Render
```html
<textarea>
  hello
</textarea>
<span>
  hello
</span>
```

# Mutations
```
INSERT textarea, span
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
<textarea>
  w
</textarea>
<span>
  w
</span>
```

# Mutations
```
UPDATE span/#text "hello" => "w"
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
<textarea>
  wor
</textarea>
<span>
  wor
</span>
```

# Mutations
```
UPDATE span/#text "w" => "wor"
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
<textarea>
  world
</textarea>
<span>
  world
</span>
```

# Mutations
```
UPDATE span/#text "wor" => "world"
```