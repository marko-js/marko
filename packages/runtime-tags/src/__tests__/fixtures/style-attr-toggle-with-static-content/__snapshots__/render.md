# Render
```html
<button />
<div
  style="border:1px solid black"
>
  foo bar
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button />
<div
  style="border:1px solid black;display:none"
>
  foo bar
</div>
```
## Change
```
UPDATE: div[style] "border:1px solid black" => "border: 1px solid black; display: none;"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button />
<div
  style="border:1px solid black"
>
  foo bar
</div>
```
## Change
```
UPDATE: div[style] "border: 1px solid black; display: none;" => "border: 1px solid black;"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button />
<div
  style="border:1px solid black;display:none"
>
  foo bar
</div>
```
## Change
```
UPDATE: div[style] "border: 1px solid black;" => "border: 1px solid black; display: none;"
```
