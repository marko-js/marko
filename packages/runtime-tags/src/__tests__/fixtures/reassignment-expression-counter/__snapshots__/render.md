# Render
```html
<button
  id="addTwo"
>
  0
</button>
<button
  id="triple"
>
  0
</button>
<button
  id="cube"
>
  0
</button>
```

# Update
```js
container.querySelector("#addTwo").click();
```
```html
<button
  id="addTwo"
>
  2
</button>
<button
  id="triple"
>
  2
</button>
<button
  id="cube"
>
  2
</button>
```
## Change
```
UPDATE: #addTwo::text "0" => "2"
UPDATE: #triple::text "0" => "2"
UPDATE: #cube::text "0" => "2"
```

# Update
```js
container.querySelector("#triple").click();
```
```html
<button
  id="addTwo"
>
  6
</button>
<button
  id="triple"
>
  6
</button>
<button
  id="cube"
>
  6
</button>
```
## Change
```
UPDATE: #addTwo::text "2" => "6"
UPDATE: #triple::text "2" => "6"
UPDATE: #cube::text "2" => "6"
```

# Update
```js
container.querySelector("#cube").click();
```
```html
<button
  id="addTwo"
>
  216
</button>
<button
  id="triple"
>
  216
</button>
<button
  id="cube"
>
  216
</button>
```
## Change
```
UPDATE: #addTwo::text "6" => "216"
UPDATE: #triple::text "6" => "216"
UPDATE: #cube::text "6" => "216"
```
