# Render
```html
<div
  style="backgroundColor:blue;display:block"
/>
<div
  style="borderColor:blue"
/>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  style="backgroundColor:blue;color:green;display:block"
/>
<div
  style="borderColor:blue;color:green"
/>
<button />
```
## Change
```
UPDATE: div:nth-of-type(1)[style] "display:block;background-color:blue" => "display: block; background-color: blue; color: green;"
UPDATE: div:nth-of-type(2)[style] "border-color:blue" => "border-color: blue; color: green;"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  style="backgroundColor:blue;display:block"
/>
<div
  style="borderColor:blue"
/>
<button />
```
## Change
```
UPDATE: div:nth-of-type(1)[style] "display: block; background-color: blue; color: green;" => "display: block; background-color: blue;"
UPDATE: div:nth-of-type(2)[style] "border-color: blue; color: green;" => "border-color: blue;"
```
