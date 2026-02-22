# Render
```html
<input
  checked=""
  type="radio"
  value="0"
/>
<input
  type="radio"
  value="1"
/>
<input
  type="radio"
  value="2"
/>
<span>
  0
</span>
```


# Render
```js
container.querySelectorAll(`input`)[1].click();
```
```html
<input
  type="radio"
  value="0"
/>
<input
  checked=""
  type="radio"
  value="1"
/>
<input
  type="radio"
  value="2"
/>
<span>
  1
</span>
```


# Render
```js
container.querySelectorAll(`input`)[2].click();
```
```html
<input
  type="radio"
  value="0"
/>
<input
  type="radio"
  value="1"
/>
<input
  checked=""
  type="radio"
  value="2"
/>
<span>
  2
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
  value="0"
/>
<input
  type="radio"
  value="1"
/>
<input
  type="radio"
  value="2"
/>
<span>
  0
</span>
```
