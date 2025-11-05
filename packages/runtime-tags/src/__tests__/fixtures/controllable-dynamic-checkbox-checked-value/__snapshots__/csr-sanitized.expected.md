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
