# Render
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="assign"
>
  assign
</button>
<div>
  a
</div>
```

# Update
```js
document.querySelector("#assign").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="assign"
>
  assign
</button>
<div>
  a!
</div>
```
## Change
```
UPDATE: div::text "a" => "a!"
```

# Update
```js
document.querySelector("#toggle").click();
```

# Update
```js
clickAssign(document);
```
## Error
```
val is a readonly tag variable.
```
