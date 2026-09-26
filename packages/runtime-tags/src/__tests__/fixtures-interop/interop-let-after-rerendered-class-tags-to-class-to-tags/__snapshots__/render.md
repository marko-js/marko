# Render
```html
<button />
<div>
  <span>
    1
  </span>
</div>
<p>
  1
</p>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button />
<div>
  <span>
    2
  </span>
</div>
<p>
  1
</p>
```
## Change
```
UPDATE: div > span::text "1" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button />
<div>
  <span>
    3
  </span>
</div>
<p>
  1
</p>
```
## Change
```
UPDATE: div > span::text "2" => "3"
```
