# Render `{"a":"x","b":"m"}`
```html
<p>
  xm
</p>
<p>
  xm
</p>
<button
  class="l"
>
  l
</button>
```

# Update
```js
document.querySelector("button.l").click();
```
```html
<p>
  xm
</p>
<p>
  xm
</p>
<p>
  xm
</p>
<button
  class="l"
>
  l
</button>
```
## Change
```
INSERT: p:nth-of-type(2) + p
UPDATE: p:nth-of-type(3)::text " " => "xm"
```

# Update `{"a":"y","b":"m"}`
```html
<p>
  ym
</p>
<p>
  ym
</p>
<p>
  ym
</p>
<button
  class="l"
>
  l
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "xm" => "ym"
UPDATE: p:nth-of-type(2)::text "xm" => "ym"
UPDATE: p:nth-of-type(3)::text "xm" => "ym"
```

# Update `{"a":"y","b":"n"}`
```html
<p>
  yn
</p>
<p>
  yn
</p>
<p>
  yn
</p>
<button
  class="l"
>
  l
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "ym" => "yn"
UPDATE: p:nth-of-type(2)::text "ym" => "yn"
UPDATE: p:nth-of-type(3)::text "ym" => "yn"
```
