# Render
```html
<button
  id="tags"
>
  inc
</button>
<div
  id="class-api"
>
  0
</div>
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  inc
</button>
<div
  id="class-api"
>
  1
</div>
```
## Change
```
UPDATE: #class-api::text "0" => "1"
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  inc
</button>
<div
  id="class-api"
>
  2
</div>
```
## Change
```
UPDATE: #class-api::text "1" => "2"
```
