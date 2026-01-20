# Render
```html
<input
  type="checkbox"
/>
<input
  type="checkbox"
/>
<input
  type="checkbox"
/>
<div>
  false,false,false
</div>
```


# Render
```js
container.querySelectorAll("input").item(0).click();
```
```html
<input
  checked=""
  type="checkbox"
/>
<input
  type="checkbox"
/>
<input
  type="checkbox"
/>
<div>
  true,false,false
</div>
```


# Render
```js
container.querySelectorAll("input").item(1).click();
```
```html
<input
  checked=""
  type="checkbox"
/>
<input
  checked=""
  type="checkbox"
/>
<input
  type="checkbox"
/>
<div>
  true,true,false
</div>
```


# Render
```js
container.querySelectorAll("input").item(1).click();
```
```html
<input
  checked=""
  type="checkbox"
/>
<input
  type="checkbox"
/>
<input
  type="checkbox"
/>
<div>
  true,false,false
</div>
```
