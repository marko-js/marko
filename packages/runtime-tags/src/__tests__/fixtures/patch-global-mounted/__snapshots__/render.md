# Render `{"$global":{"brand":"a","serializedGlobals":["brand"]}}`
```html
<p
  data-log="[{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"a\"}]"
>
  0a
</p>
<div>
  <p
    data-log="[{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"own\"}]"
  >
    0own
  </p>
</div>
```

# Update `{"$global":{"brand":"b","serializedGlobals":["brand"]}}`
```html
<p
  data-log="[{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"a\"}][{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"b\"}]"
>
  0b
</p>
<div>
  <p
    data-log="[{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"own\"}]"
  >
    0own
  </p>
</div>
```
## Change
```
UPDATE: p::text "0a" => "0b"
UPDATE: p[data-log] "[{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"a\"}]" => "[{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"a\"}][{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"b\"}]"
```
