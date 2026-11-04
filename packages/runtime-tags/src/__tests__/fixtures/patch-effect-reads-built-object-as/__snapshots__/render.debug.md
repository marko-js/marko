# Render `{"title":"a"}`
```html
<output>
  {"t":"a"}
</output>
```
## Console
```
LOG "run" "{\"t\":\"a\"}"
```

# Update `{"title":"b"}`
```html
<output>
  {"t":"b"}
</output>
```
## Change
```
REMOVE: output::text("{\"t\":\"a\"}")
INSERT: output::text("{\"t\":\"b\"}")
```
## Console
```
LOG "run" "{\"t\":\"b\"}"
```

# Update `{"title":"b"}`
