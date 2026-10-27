# Render `{"obj":{"p":1,"q":2},"sel":"p","b":"x"}`
```html
<span>
  1x
</span>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  2x
</span>
<button />
```
## Change
```
UPDATE: span::text@0 "1" => "2"
```

# Update `{"obj":{"p":3,"q":4},"sel":"q","b":"y"}`
```html
<span>
  5y
</span>
<button />
```
## Change
```
REMOVE: span
INSERT: span
UPDATE: span::text@0 "" => "5"
UPDATE: span::text@1 "" => "y"
UPDATE: body[data-b] "x" => "y"
```

# Update `{"obj":{"p":3,"q":4},"sel":"q","b":"z"}`
```html
<span>
  5z
</span>
<button />
```
## Change
```
UPDATE: span::text@1 "y" => "z"
UPDATE: body[data-b] "y" => "z"
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  6z
</span>
<button />
```
## Change
```
UPDATE: span::text@0 "5" => "6"
```

# Update `{"obj":{"p":3,"q":4},"sel":"q","b":"w"}`
```html
<span>
  6w
</span>
<button />
```
## Change
```
UPDATE: span::text@1 "z" => "w"
UPDATE: body[data-b] "z" => "w"
```
