# Render `{"sync":"now"}`
```html
Sync: now
```

# Update
```html
Sync: nowAsync: async
```
## Change
```
INSERT: ::text@6 + :is(::text("Async: "), ::text("async"))
UPDATE: ::text@16 "" => "async"
```
