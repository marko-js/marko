# Render
```html
<button />
<div>
  Id is dynamic
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button />
<div
  id="dynamic"
/>
```
## Change
```
REMOVE: div
INSERT: #dynamic
UPDATE: #dynamic[id] null => "dynamic"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button />
<div>
  Id is dynamic
</div>
```
## Change
```
REMOVE: #dynamic
INSERT: div
UPDATE: div::text@6 "" => "dynamic"
```
