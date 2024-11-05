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

# Mutations
```
inserted input0, span1
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

# Mutations
```
span1/#text0: "hello" => "w"
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

# Mutations
```
span1/#text0: "w" => "wor"
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

# Mutations
```
span1/#text0: "wor" => "world"
```