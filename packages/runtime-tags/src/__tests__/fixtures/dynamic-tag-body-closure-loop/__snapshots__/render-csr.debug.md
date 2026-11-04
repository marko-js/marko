# Render `{"n":1}`
```html
<button
  id="toggle"
>
  toggle
</button>
```

# Update `{"n":2}`
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
INSERT: #toggle + #toggle
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
item 0 of 2
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
INSERT: #toggle + :is(::text("item "), ::text("0"), ::text(" of "), ::text("2"))
UPDATE: ::text@10 "" => "2"
UPDATE: ::text@5 "" => "0"
```
