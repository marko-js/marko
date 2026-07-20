# Render
```html
<button
  id="o"
>
  O
</button>
<button
  id="n"
>
  N
</button>
```

# Update
```js
document.querySelector("#n").click();
```
```html
<button
  id="o"
>
  O
</button>
<button
  id="n"
>
  N
</button>
<div>
  n is 1
</div>
```
## Change
```
INSERT: #n + div
UPDATE: div::text@5 "" => "1"
```

# Update
```js
document.querySelector("#o").click();
```
```html
<button
  id="o"
>
  O
</button>
<button
  id="n"
>
  N
</button>
```
## Change
```
REMOVE: #n + div
```

# Update
```js
document.querySelector("#n").click();
```
