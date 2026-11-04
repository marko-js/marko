# Render `{"$global":{"brand":"a","serializedGlobals":["brand"]}}`
```html
<button>
  0a
</button>
<pre>
  {"runtimeId":"M","renderId":"_","brand":"a"}
</pre>
```

# Update `{"$global":{"brand":"b","serializedGlobals":["brand"]}}`
```html
<button>
  0b
</button>
<pre>
  {"runtimeId":"M","renderId":"_","brand":"b"}
</pre>
```
## Change
```
UPDATE: button::text "0a" => "0b"
REMOVE: pre::text("{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"a\"}")
INSERT: pre::text("{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"b\"}")
```
