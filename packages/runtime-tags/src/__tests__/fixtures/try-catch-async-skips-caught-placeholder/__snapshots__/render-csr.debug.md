# Render
```html
<button>
  count 5
</button>
```

# Update
```html
<button>
  count 5
</button>
loading
```
## Change
```
INSERT: button + ::text("loading")
```

# Update
```html
<button>
  count 5
</button>
caught ERROR!
```
## Change
```
INSERT: button + :is(::text("caught "), ::text("ERROR!"))
REMOVE: ::text@7 + ::text("loading")
```

# Update
```html
<button>
  count 5
</button>
caught ERROR!done
```
## Change
```
INSERT: ::text@7 + ::text("done")
UPDATE: ::text@13 " " => "done"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  count 6
</button>
caught ERROR!done
```
## Change
```
UPDATE: button::text@6 "5" => "6"
```
