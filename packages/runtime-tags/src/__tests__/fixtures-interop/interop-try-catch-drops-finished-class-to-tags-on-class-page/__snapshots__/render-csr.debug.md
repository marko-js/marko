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
REMOVE: #page > #class
INSERT: #page::text("caught "), #page::text("ERROR!")
UPDATE: #page::text@7 "" => "ERROR!"
```
