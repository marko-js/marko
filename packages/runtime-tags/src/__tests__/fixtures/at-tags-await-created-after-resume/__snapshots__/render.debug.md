# Render
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="show"
>
  show
</button>
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="show"
>
  show
</button>
Item 0
```
## Change
```
INSERT: #show + :is(::text("Item "), ::text("0"))
UPDATE: ::text@5 "" => "0"
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="show"
>
  show
</button>
Item 1
```
## Change
```
UPDATE: ::text@5 "0" => "1"
```
