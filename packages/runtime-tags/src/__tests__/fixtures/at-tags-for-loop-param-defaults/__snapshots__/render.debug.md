# Render
```html
<button
  id="rename"
>
  rename
</button>
<p>
  0:x
</p>
<span>
  x
</span>
<p>
  1:default
</p>
<span>
  default
</span>
<i>
  ady
</i>
<i>
  bc
</i>
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
  0:x!
</p>
<span>
  x!
</span>
<p>
  1:y!
</p>
<span>
  y!
</span>
<i>
  ady
</i>
<i>
  bc
</i>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@2 "x" => "x!"
UPDATE: p:nth-of-type(2)::text@2 "default" => "y!"
UPDATE: span:nth-of-type(1)::text "x" => "x!"
UPDATE: span:nth-of-type(2)::text "default" => "y!"
```
