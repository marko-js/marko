# Render
```html
<button
  id="class"
>
  0
</button>
<div
  id="forwarded"
>
  Hello 0
</div>
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  1
</button>
<div
  id="forwarded"
>
  Hello 1
</div>
```
## Change
```
REMOVE: #forwarded > :is(::text("Hello "), ::text("0"))
UPDATE: #class::text "0" => "1"
INSERT: #forwarded::text("Hello ")
INSERT: #forwarded::text@0 + ::text("1")
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  2
</button>
<div
  id="forwarded"
>
  Hello 2
</div>
```
## Change
```
REMOVE: #forwarded > :is(::text("Hello "), ::text("1"))
UPDATE: #class::text "1" => "2"
INSERT: #forwarded::text("Hello ")
INSERT: #forwarded::text@0 + ::text("2")
```
