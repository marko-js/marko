# Render
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<input
  checked=""
  type="checkbox"
  value="b"
/>
<input
  type="checkbox"
  value="c"
/>
<span>
  a,b
</span>
```


# Render
```js
container.querySelectorAll(`input`)[1].click();
```
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<input
  default-checked=""
  type="checkbox"
  value="b"
/>
<input
  type="checkbox"
  value="c"
/>
<span>
  a
</span>
```


# Render
```js
container.querySelectorAll(`input`)[2].click();
```
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<input
  default-checked=""
  type="checkbox"
  value="b"
/>
<input
  checked=""
  type="checkbox"
  value="c"
/>
<span>
  a,c
</span>
```


# Render
```js
container.querySelectorAll(`input`)[0].click();
```
```html
<input
  default-checked=""
  type="checkbox"
  value="a"
/>
<input
  default-checked=""
  type="checkbox"
  value="b"
/>
<input
  checked=""
  type="checkbox"
  value="c"
/>
<span>
  c
</span>
```
