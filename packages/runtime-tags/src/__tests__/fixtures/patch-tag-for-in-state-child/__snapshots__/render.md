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
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  6y
</span>
<button />
```
## Change
```
UPDATE: span::text@0 "5" => "6"
```
