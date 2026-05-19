# Render
```html
<div>
  <button
    id="count"
  >
    0
  </button>
</div>
<button
  id="changeTag"
/>
```

# Update
```js
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="count"
  >
    1
  </button>
</div>
<button
  id="changeTag"
/>
```
## Change
```
UPDATE: #count::text "0" => "1"
```

# Update
```js
container.querySelector("#changeTag").click();
```
```html
<span>
  <button
    id="count"
  >
    0
  </button>
</span>
<button
  id="changeTag"
/>
```
## Change
```
INSERT: span
REMOVE: span + div
INSERT: span > #count
UPDATE: #count::text " " => "0"
```

# Update
```js
container.querySelector("#count").click();
```
```html
<span>
  <button
    id="count"
  >
    1
  </button>
</span>
<button
  id="changeTag"
/>
```
## Change
```
UPDATE: #count::text "0" => "1"
```
