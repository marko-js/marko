# Render `{"show":false,"open":true,"items":[1,2]}`
```html
<button
  class="l"
>
  l
</button>
```

# Update `{"show":true,"open":true,"items":[1,2]}`
```html
<em>
  A1M
</em>
<em>
  A2M
</em>
<b>
  a
</b>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="l"
>
  l
</button>
```
## Change
```
INSERT: b, .toggle
UPDATE: b::text " " => "a"
INSERT: em
INSERT: em:nth-of-type(1) + em
UPDATE: em:nth-of-type(1)::text " " => "A1M"
UPDATE: em:nth-of-type(2)::text " " => "A2M"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<em>
  A!1
</em>
<em>
  A!2
</em>
<b>
  a!
</b>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="l"
>
  l
</button>
```
## Change
```
UPDATE: b::text "a" => "a!"
UPDATE: em:nth-of-type(1)::text "A1M" => "A!1"
UPDATE: em:nth-of-type(2)::text "A2M" => "A!2"
```

# Update `{"show":true,"open":true,"items":[1,2]}`

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<em>
  A!1
</em>
<em>
  A!2
</em>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="l"
>
  l
</button>
```
## Change
```
REMOVE: em:nth-of-type(2) + b
```
