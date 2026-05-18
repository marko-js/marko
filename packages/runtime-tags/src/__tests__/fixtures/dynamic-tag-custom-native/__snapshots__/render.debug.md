# Render
```html
<button />
<div>
  Id is dynamic
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button />
<div
  id="dynamic"
/>
```
## Change
```
INSERT: button + #dynamic
REMOVE: #dynamic + div
UPDATE: #dynamic[id] null => "dynamic"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button />
<div>
  Id is dynamic
</div>
```
## Change
```
INSERT: button + div
REMOVE: div + #dynamic
UPDATE: div::text@6 "" => "dynamic"
```
