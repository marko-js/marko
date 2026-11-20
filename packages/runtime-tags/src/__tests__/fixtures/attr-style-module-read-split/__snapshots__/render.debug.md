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
```
## Change
```
UPDATE: div:nth-of-type(1)[style] "display:block" => "display: block; color: green;"
UPDATE: div:nth-of-type(2)[style] "font-family:\"Helvetica Neue\", sans-serif;background-image:url(/tile.svg?size=2&tone=light);margin:0" => "font-family: Helvetica Neue, sans-serif; background-image: url(\"/tile.svg?size=2&tone=light\"); margin: 0px; color: green;"
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
```
## Change
```
UPDATE: div:nth-of-type(1)[style] "display: block; color: green;" => "display: block;"
UPDATE: div:nth-of-type(2)[style] "font-family: Helvetica Neue, sans-serif; background-image: url(\"/tile.svg?size=2&tone=light\"); margin: 0px; color: green;" => "font-family: Helvetica Neue, sans-serif; background-image: url(\"/tile.svg?size=2&tone=light\"); margin: 0px;"
```
