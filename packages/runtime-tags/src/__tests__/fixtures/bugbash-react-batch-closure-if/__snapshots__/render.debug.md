# Render
```html
<div
  id="a"
>
  <span>
    a:0
  </span>
</div>
<div
  id="b"
/>
<button
  id="both"
>
  both
</button>
```

# Update
```js
container.querySelector("#both").click();
```
```html
<div
  id="a"
/>
<div
  id="b"
>
  <span>
    b:1
  </span>
</div>
<button
  id="both"
>
  both
</button>
```
## Change
```
REMOVE: #a > span
INSERT: #b > span
UPDATE: #b > span::text@2 "" => "1"
```

# Update
```js
container.querySelector("#both").click();
```
```html
<div
  id="a"
>
  <span>
    a:2
  </span>
</div>
<div
  id="b"
/>
<button
  id="both"
>
  both
</button>
```
## Change
```
INSERT: #a > span
REMOVE: #b > span
UPDATE: #a > span::text@2 "" => "2"
```
