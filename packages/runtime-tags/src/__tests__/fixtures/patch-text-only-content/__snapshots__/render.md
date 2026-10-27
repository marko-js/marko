# Render `{"title":"a","color":"red"}`
```html
<!--a-->
<button>
  +
</button>
```

# Update `{"title":"b","color":"blue"}`
```html
<!--b-->
<button>
  +
</button>
```
## Change
```
REMOVE: style::text(".a { color: red }")
INSERT: style::text(".a { color: blue }")
REMOVE: title::text("a | site")
INSERT: title::text("b | site")
UPDATE: #comment "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"title":"c","color":"green"}`
```html
<!--c-->
<button>
  +
</button>
```
## Change
```
REMOVE: style::text(".a { color: blue }")
INSERT: style::text(".a { color: green }")
REMOVE: title::text("b | site")
INSERT: title::text("c | site")
UPDATE: #comment "b" => "c"
```
