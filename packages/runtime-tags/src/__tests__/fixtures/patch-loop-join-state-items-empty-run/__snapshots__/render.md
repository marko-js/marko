# Render `{"a":"x","b":"m"}`
```html
<p>
  xmp
</p>
<p>
  xmq
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
  xmp
</p>
<p>
  xmq
</p>
<p>
  xmr
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
UPDATE: p:nth-of-type(3)::text " " => "xmr"
```

# Update `{"a":"x","b":"n"}`
```html
<p>
  xnp
</p>
<p>
  xnq
</p>
<p>
  xnr
</p>
<button
  class="l"
>
  l
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "xmp" => "xnp"
UPDATE: p:nth-of-type(2)::text "xmq" => "xnq"
UPDATE: p:nth-of-type(3)::text "xmr" => "xnr"
```

# Update `{"a":"y","b":"n"}`
```html
<p>
  ynp
</p>
<p>
  ynq
</p>
<p>
  ynr
</p>
<button
  class="l"
>
  l
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "xnp" => "ynp"
UPDATE: p:nth-of-type(2)::text "xnq" => "ynq"
UPDATE: p:nth-of-type(3)::text "xnr" => "ynr"
```
