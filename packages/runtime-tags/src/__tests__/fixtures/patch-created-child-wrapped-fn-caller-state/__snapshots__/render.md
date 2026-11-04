# Render `{"show":false,"open":true}`
```html
<button
  class="l"
>
  l
</button>
```

# Update `{"show":true,"open":true}`
```html
<em>
  A1M
</em>
<button
  class="l"
>
  l
</button>
```
## Change
```
INSERT: em
UPDATE: em::text " " => "A1M"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<em>
  A!1
</em>
<button
  class="l"
>
  l
</button>
```
## Change
```
UPDATE: em::text "A1M" => "A!1"
```

# Update `{"show":true,"open":true}`

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<em>
  A!!1K
</em>
<button
  class="l"
>
  l
</button>
```
## Change
```
UPDATE: em::text "A!1" => "A!!1K"
```
