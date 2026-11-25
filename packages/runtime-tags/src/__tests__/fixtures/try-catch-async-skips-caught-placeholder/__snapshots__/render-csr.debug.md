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
INSERT: ::text("loading")
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
REMOVE: ::text("loading")
INSERT: ::text("caught "), ::text("ERROR!")
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
INSERT: ::text("done")
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
