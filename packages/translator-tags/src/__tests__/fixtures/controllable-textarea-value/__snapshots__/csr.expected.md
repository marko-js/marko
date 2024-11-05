# Render {}
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
inserted textarea0, span1
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

# Mutations
```
span1/#text0: "hello" => "w"
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

# Mutations
```
span1/#text0: "w" => "wor"
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

# Mutations
```
span1/#text0: "wor" => "world"
```