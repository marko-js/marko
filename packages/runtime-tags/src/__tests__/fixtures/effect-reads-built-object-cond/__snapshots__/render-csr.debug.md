# Render `{"flag":true,"title":"a"}`
```html
<output>
  {"t":"a"}
</output>
```
## Console
```
LOG "run" "{\"t\":\"a\"}"
```

# Update `{"flag":true,"title":"b"}`
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

# Update `{"flag":true,"title":"b"}`
