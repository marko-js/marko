# Render
```html
<div
  id="class"
>
  none
</div>
<button
  id="tags"
>
  0
</button>
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<div
  id="class"
>
  1
</div>
<button
  id="tags"
>
  1
</button>
```
## Change
```
UPDATE: #tags::text "0" => "1"
UPDATE: #class::text "none" => "1"
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<div
  id="class"
>
  2
</div>
<button
  id="tags"
>
  2
</button>
```
## Change
```
UPDATE: #tags::text "1" => "2"
UPDATE: #class::text "1" => "2"
```
