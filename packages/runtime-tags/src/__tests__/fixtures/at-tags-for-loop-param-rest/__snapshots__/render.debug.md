# Render
```html
<button
  id="rename"
>
  rename
</button>
<p>
  1:x
</p>
<p>
  2:y
</p>
<b>
  ab
</b>
<b>
  cd
</b>
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
  1:x!
</p>
<p>
  2:y!
</p>
<b>
  ab
</b>
<b>
  cd
</b>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@2 "x" => "x!"
UPDATE: p:nth-of-type(2)::text@2 "y" => "y!"
```
