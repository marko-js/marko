# Render `{"tag":"linearGradient"}`
```html
<svg
  height="20"
  width="20"
>
  <lineargradient
    id="g"
  >
    <stop
      offset="0%"
    />
  </lineargradient>
</svg>
<div>
  0
</div>
```

# Update
```js
document
.getElementById("g") 
.dispatchEvent(
  new (document.defaultView).MouseEvent("click", { bubbles: true }),
);
```
```html
<svg
  height="20"
  width="20"
>
  <lineargradient
    id="g"
  >
    <stop
      offset="0%"
    />
  </lineargradient>
</svg>
<div>
  1
</div>
```
## Change
```
UPDATE: div::text "0" => "1"
```
