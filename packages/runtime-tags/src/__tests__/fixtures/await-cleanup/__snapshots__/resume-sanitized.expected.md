# Render
```html
<button />
<div
  id="one"
>
  Fail
</div>
<div
  id="two"
>
  Fail
</div>
loading...
```


# Render FLUSH
```html
<button />
<div
  id="one"
>
  Fail
</div>
<div
  id="two"
>
  Fail
</div>
1
```


# Render
```js
container.querySelector("button").click();
```
```html
<button />
<div
  id="one"
>
  Pass
</div>
<div
  id="two"
>
  Pass
</div>
```
