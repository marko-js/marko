# Render
```html
<button
  id="guess"
>
  0
</button>
<button
  id="set"
>
  set
</button>
```

# Update
```js
document.querySelector("#guess").click();
```
```html
<button
  id="guess"
>
  5
</button>
<button
  id="set"
>
  set
</button>
```
## Change
```
UPDATE: #guess::text "0" => "5"
```

# Update
```js
document.querySelector("#set").click();
```
```html
<button
  id="guess"
>
  3
</button>
<button
  id="set"
>
  set
</button>
```
## Change
```
UPDATE: #guess::text "5" => "3"
```
