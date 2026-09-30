# Render
```html
<button>
  count 5
</button>
loading
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
INSERT: button + ::text("caught ERROR!")
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
INSERT: ::text@0 + ::text("done")
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
