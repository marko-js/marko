# Render
```html
<button>
  inc
</button>
value 0
```
## Console
```
LOG "script n=0"
```

# Update `click("button")`

# Update `click("button")`

# Update
```html
<button>
  inc
</button>
LOADING
```
## Change
```
INSERT: button + ::text("LOADING")
REMOVE: ::text + ::text("value ")
REMOVE: ::text + ::text("0")
```

# Update
```html
<button>
  inc
</button>
value 2
```
## Change
```
INSERT: button + :is(::text("value "), ::text("2"))
REMOVE: ::text@6 + ::text("LOADING")
```
## Console
```
LOG "script n=2"
```
