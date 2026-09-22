# Render
```html
<button
  id="rename"
>
  rename
</button>
<p>
  a|{"text":"a"}
</p>
<p>
  b|{"text":"b"}
</p>
```

# Update
```js
document.querySelector("#rename").click();
```
```html
<button
  id="rename"
>
  rename
</button>
<p>
  a!|{"text":"a!"}
</p>
<p>
  b!|{"text":"b!"}
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@0 "a" => "a!"
UPDATE: p:nth-of-type(1)::text@3 "{\"text\":\"a\"}" => "{\"text\":\"a!\"}"
UPDATE: p:nth-of-type(2)::text@0 "b" => "b!"
UPDATE: p:nth-of-type(2)::text@3 "{\"text\":\"b\"}" => "{\"text\":\"b!\"}"
```
