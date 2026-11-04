# Render `{"show":false}`
```html
<button
  class="l"
>
  l
</button>
```

# Update `{"show":true}`
```html
<em>
  a1
</em>
<em>
  a2
</em>
<button
  class="l"
>
  l
</button>
```
## Change
```
INSERT: em, em
UPDATE: em:nth-of-type(1)::text " " => "a1"
UPDATE: em:nth-of-type(2)::text " " => "a2"
```

# Update
```js
document.querySelector(".l").click();
```
```html
<em>
  a!1
</em>
<em>
  a!2
</em>
<button
  class="l"
>
  l
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "a1" => "a!1"
UPDATE: em:nth-of-type(2)::text "a2" => "a!2"
```

# Update `{"show":true}`
