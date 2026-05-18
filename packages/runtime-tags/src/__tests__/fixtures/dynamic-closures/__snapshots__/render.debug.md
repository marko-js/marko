# Render
```html
<button />
<div>
  1 2 3
</div>
<div>
  1 2 3
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button />
<div>
  1 2 4
</div>
<div>
  1 2 4
</div>
```
## Change
```
UPDATE: div:nth-of-type(1)::text@4 "3" => "4"
UPDATE: div:nth-of-type(2)::text@4 "3" => "4"
```
