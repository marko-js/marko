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

# Update
```js
container.querySelector(`input[value=b]`).click();
```
```html
<input
  default-checked=""
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
## Change
```
UPDATE: span::text "a" => "b"
```

# Update
```js
container.querySelector("button").click();
```
```html
<input
  default-checked=""
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
## Change
```
REMOVE: input:nth-of-type(1) + input
```

# Update
```js
container.querySelector("button").click();
```
```html
<input
  default-checked=""
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
## Change
```
INSERT: input:nth-of-type(1) + input
UPDATE: input:nth-of-type(2)[value] null => "b"
UPDATE: input:nth-of-type(2)[checked] null => ""
```

# Update
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
  default-checked=""
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
## Change
```
UPDATE: span::text "b" => "a"
```
