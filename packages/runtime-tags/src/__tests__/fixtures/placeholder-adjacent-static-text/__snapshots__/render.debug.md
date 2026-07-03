# Render
```html
<div
  id="only-placeholders"
>
  abX
</div>
<div
  id="text-placeholder-text"
>
  mnoY
</div>
<button>
  update
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div
  id="only-placeholders"
>
  abX2
</div>
<div
  id="text-placeholder-text"
>
  mnoY2
</div>
<button>
  update
</button>
```
## Change
```
UPDATE: #only-placeholders::text@2 "X" => "X2"
UPDATE: #text-placeholder-text::text@3 "Y" => "Y2"
```
