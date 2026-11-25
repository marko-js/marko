# Render
```html
<button
  id="toggle"
>
  toggle
</button>
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="inc"
>
  count 0
</button>
```
## Change
```
INSERT: #inc
```

# Update
```js
document.querySelector("#inc").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="inc"
>
  count 1
</button>
```
## Change
```
UPDATE: #inc::text@6 "0" => "1"
```

# Update
```js
document.querySelector("#inc").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="inc"
>
  count 2
</button>
```
## Change
```
UPDATE: #inc::text@6 "1" => "2"
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: #inc
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="inc"
>
  count 2
</button>
```
## Change
```
INSERT: #inc
```
