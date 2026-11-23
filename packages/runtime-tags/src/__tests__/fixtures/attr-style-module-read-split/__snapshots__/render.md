# Render
```html
<div
  style="display:block"
/>
<div
  style="backgroundImage:url(/tile.svg?size=2&tone=light);fontFamily:\"Helvetica Neue\", sans-serif;margin:0"
/>
<div
  style="display:block"
/>
<button />
<div
  style="display:-webkit-box;display:flex"
/>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  style="color:green;display:block"
/>
<div
  style="backgroundImage:url(\"/tile.svg?size=2&tone=light\");color:green;fontFamily:Helvetica Neue, sans-serif;margin:0px"
/>
<div
  style="display:block"
/>
<button />
<div
  style="color:green;display:flex"
/>
```
## Change
```
UPDATE: div:nth-of-type(1)[style] "display:block" => "display: block; color: green;"
UPDATE: div:nth-of-type(2)[style] "font-family:\"Helvetica Neue\", sans-serif;background-image:url(/tile.svg?size=2&tone=light);margin:0" => "font-family: Helvetica Neue, sans-serif; background-image: url(\"/tile.svg?size=2&tone=light\"); margin: 0px; color: green;"
UPDATE: div:nth-of-type(4)[style] "display:-webkit-box;display:flex" => "display: flex; color: green;"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  style="display:block"
/>
<div
  style="backgroundImage:url(\"/tile.svg?size=2&tone=light\");fontFamily:Helvetica Neue, sans-serif;margin:0px"
/>
<div
  style="display:block"
/>
<button />
<div
  style="display:flex"
/>
```
## Change
```
UPDATE: div:nth-of-type(1)[style] "display: block; color: green;" => "display: block;"
UPDATE: div:nth-of-type(2)[style] "font-family: Helvetica Neue, sans-serif; background-image: url(\"/tile.svg?size=2&tone=light\"); margin: 0px; color: green;" => "font-family: Helvetica Neue, sans-serif; background-image: url(\"/tile.svg?size=2&tone=light\"); margin: 0px;"
UPDATE: div:nth-of-type(4)[style] "display: flex; color: green;" => "display: flex;"
```
