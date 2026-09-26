# Render
```html
<button />
<div>
  <button>
    1:0
  </button>
</div>
```

# Update
```js
for (const button of document.querySelectorAll("button")) button.click();
```
```html
<button />
<div>
  <button>
    2:2
  </button>
</div>
```
## Change
```
UPDATE: div > button::text "1:0" => "2:2"
```

# Update
```js
for (const button of document.querySelectorAll("button")) button.click();
```
```html
<button />
<div>
  <button>
    3:4
  </button>
</div>
```
## Change
```
UPDATE: div > button::text "2:2" => "3:4"
```
