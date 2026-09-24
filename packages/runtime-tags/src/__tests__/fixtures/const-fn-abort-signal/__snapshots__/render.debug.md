# Render
```html
<button
  id="start"
>
  start
</button>
<button
  id="next"
>
  next
</button>
<p>
  idle
</p>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  id="start"
>
  start
</button>
<button
  id="next"
>
  next
</button>
<p>
  started 1
</p>
```
## Change
```
UPDATE: p::text "idle" => "started 1"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  id="start"
>
  start
</button>
<button
  id="next"
>
  next
</button>
<p>
  aborted 1
</p>
```
## Change
```
UPDATE: p::text "started 1" => "aborted 1"
```
