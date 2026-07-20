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
document.querySelector("#tags").click();
```
```html
<div
  id="class"
>
  ping:1
</div>
<button
  id="tags"
>
  1
</button>
```
## Change
```
REMOVE: #class::text("none")
INSERT: #class::text("ping:1")
UPDATE: #tags::text "0" => "1"
```

# Update
```js
document.querySelector("#tags").click();
```
```html
<div
  id="class"
>
  ping:2
</div>
<button
  id="tags"
>
  2
</button>
```
## Change
```
REMOVE: #class::text("ping:1")
INSERT: #class::text("ping:2")
UPDATE: #tags::text "1" => "2"
```
