# Render
```html
<button
  id="rename"
>
  rename
</button>
<p>
  a|1
</p>
<p>
  b|1
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
  a!|1
</p>
<p>
  b!|1
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@0 "a" => "a!"
UPDATE: p:nth-of-type(2)::text@0 "b" => "b!"
```
