# Render
```html
<div>
  1 2 3 4 selected 1
</div>
<button
  id="update"
>
  update
</button>
<button
  id="reselect"
>
  reselect
</button>
```

# Update
```js
container.querySelector(selector).click();
```
```html
<div>
  2 3 selected 2
</div>
<button
  id="update"
>
  update
</button>
<button
  id="reselect"
>
  reselect
</button>
```
## Change
```
UPDATE: div::text@13 "1" => "2"
UPDATE: div::text@0 "1 2 3 4" => "2 3"
```

# Update
```js
container.querySelector(selector).click();
```
