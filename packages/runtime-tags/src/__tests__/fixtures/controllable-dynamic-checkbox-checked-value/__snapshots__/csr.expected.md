# Render
```html
<input
  checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  type="radio"
  value="c"
/>
<span>
  a
</span>
<button>
  Toggle
</button>
```

# Mutations
```
INSERT input0, input1, input2, span, button
```

# Render
```js
container.querySelector(`input[value=b]`).click();
```
```html
<input
  type="radio"
  value="a"
/>
<input
  checked=""
  type="radio"
  value="b"
/>
<input
  type="radio"
  value="c"
/>
<span>
  b
</span>
<button>
  Toggle
</button>
```

# Mutations
```
UPDATE span/#text "a" => "b"
```

# Render
```js
container.querySelector("button").click();
```
```html
<input
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="c"
/>
<span>
  b
</span>
<button>
  Toggle
</button>
```

# Mutations
```
INSERT #text
REMOVE input after #text
```

# Render
```js
container.querySelector("button").click();
```
```html
<input
  type="radio"
  value="a"
/>
<input
  checked=""
  type="radio"
  value="b"
/>
<input
  type="radio"
  value="c"
/>
<span>
  b
</span>
<button>
  Toggle
</button>
```

# Mutations
```
INSERT input1
REMOVE #text after input1
UPDATE input1[value] null => "b"
```

# Render
```js
container.querySelector(`input[value=a]`).click();
```
```html
<input
  checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  type="radio"
  value="c"
/>
<span>
  a
</span>
<button>
  Toggle
</button>
```

# Mutations
```
UPDATE span/#text "b" => "a"
```