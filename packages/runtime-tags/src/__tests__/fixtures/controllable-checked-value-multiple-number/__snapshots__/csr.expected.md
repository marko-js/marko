# Render
```html
<input
  type="checkbox"
  value="0"
/>
<input
  checked=""
  type="checkbox"
  value="1"
/>
<input
  type="checkbox"
  value="2"
/>
<span>
  1
</span>
<button>
  Reset
</button>
```

# Mutations
```
INSERT input0, input1, input2, span, button
```

# Render
```js
container.querySelectorAll(`input`)[0].click();
```
```html
<input
  checked=""
  type="checkbox"
  value="0"
/>
<input
  checked=""
  type="checkbox"
  value="1"
/>
<input
  type="checkbox"
  value="2"
/>
<span>
  1,0
</span>
<button>
  Reset
</button>
```

# Mutations
```
UPDATE span/#text "1" => "1,0"
```

# Render
```js
container.querySelectorAll(`input`)[1].click();
```
```html
<input
  checked=""
  type="checkbox"
  value="0"
/>
<input
  default-checked=""
  type="checkbox"
  value="1"
/>
<input
  type="checkbox"
  value="2"
/>
<span>
  0
</span>
<button>
  Reset
</button>
```

# Mutations
```
UPDATE span/#text "1,0" => "0"
```

# Render
```js
container.querySelectorAll(`input`)[2].click();
```
```html
<input
  checked=""
  type="checkbox"
  value="0"
/>
<input
  default-checked=""
  type="checkbox"
  value="1"
/>
<input
  checked=""
  type="checkbox"
  value="2"
/>
<span>
  0,2
</span>
<button>
  Reset
</button>
```

# Mutations
```
UPDATE span/#text "0" => "0,2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<input
  type="checkbox"
  value="0"
/>
<input
  checked=""
  type="checkbox"
  value="1"
/>
<input
  type="checkbox"
  value="2"
/>
<span>
  1
</span>
<button>
  Reset
</button>
```

# Mutations
```
UPDATE span/#text "0,2" => "1"
```