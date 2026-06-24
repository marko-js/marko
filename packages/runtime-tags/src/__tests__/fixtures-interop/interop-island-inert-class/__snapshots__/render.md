# Render
```html
<button
  id="tags"
>
  Tags 0
</button>
<div
  id="class"
>
  Hello from class
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
  Tags 1
</button>
<div
  id="class"
>
  Hello from class
</div>
```
## Change
```
UPDATE: #tags::text@5 "0" => "1"
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  Tags 2
</button>
<div
  id="class"
>
  Hello from class
</div>
```
## Change
```
UPDATE: #tags::text@5 "1" => "2"
```
