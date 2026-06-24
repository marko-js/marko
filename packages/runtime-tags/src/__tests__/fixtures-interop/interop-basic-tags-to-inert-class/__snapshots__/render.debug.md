# Render
```html
<button
  id="tags"
>
  0
</button>
<div>
  Hello World
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
  1
</button>
<div>
  Hello World
</div>
```
## Change
```
UPDATE: #tags::text "0" => "1"
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  2
</button>
<div>
  Hello World
</div>
```
## Change
```
UPDATE: #tags::text "1" => "2"
```
