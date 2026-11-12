# Render `{"$global":{"brand":"a","serializedGlobals":["brand"]}}`
```html
<p
  data-log="[{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"a\"}]"
>
  0
</p>
<i>
  a
</i>
<div>
  <p
    data-log="[{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"own\"}]"
  >
    0
  </p>
  <i>
    own
  </i>
</div>
```

# Update `{"$global":{"brand":"b","serializedGlobals":["brand"]}}`
```html
<p
  data-log="[{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"a\"}][{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"b\"}]"
>
  0
</p>
<i>
  b
</i>
<div>
  <p
    data-log="[{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"own\"}]"
  >
    0
  </p>
  <i>
    own
  </i>
</div>
```
## Change
```
UPDATE: i::text "a" => "b"
UPDATE: p[data-log] "[{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"a\"}]" => "[{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"a\"}][{\"runtimeId\":\"M\",\"renderId\":\"_\",\"brand\":\"b\"}]"
```
