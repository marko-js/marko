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
```


# Render
```js
container.querySelectorAll(`input`)[1].click();
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
```


# Render
```js
container.querySelectorAll(`input`)[2].click();
```
```html
<input
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  checked=""
  type="radio"
  value="c"
/>
<span>
  c
</span>
```


# Render
```js
container.querySelectorAll(`input`)[0].click();
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
```
