# Render
```html
<div
  id="page"
>
  <div
    id="class"
  >
    <button>
      0
    </button>
  </div>
</div>
```
## Console
```
LOG "child effect"
```

# Update
```html
<div
  id="page"
>
  caught ERROR!
</div>
```
## Change
```
INSERT: #page > :is(::text("caught "), ::text("ERROR!"))
REMOVE: #page::text@7 + #class
UPDATE: #page::text@7 "" => "ERROR!"
```
