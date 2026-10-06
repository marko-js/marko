# Render
```html
<p>
  1 1
</p>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  1 undefined
</p>
<button />
```
## Change
```
UPDATE: p::text@2 "1" => "undefined"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  1 1
</p>
<button />
```
## Change
```
UPDATE: p::text@2 "undefined" => "1"
```
