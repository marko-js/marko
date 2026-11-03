# Render `{"show":false}`

# Update `{"show":true}`
```html
<button
  class="r"
>
  0
</button>
<button
  class="r"
>
  0
</button>
<button
  class="r"
>
  0
</button>
```
## Change
```
INSERT: button, button, button
UPDATE: button:nth-of-type(1)::text " " => "0"
UPDATE: button:nth-of-type(2)::text " " => "0"
UPDATE: button:nth-of-type(3)::text " " => "0"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<button
  class="r"
>
  2
</button>
<button
  class="r"
>
  2
</button>
<button
  class="r"
>
  2
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "0" => "2"
UPDATE: button:nth-of-type(2)::text "0" => "2"
UPDATE: button:nth-of-type(3)::text "0" => "2"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<button
  class="r"
>
  3
</button>
<button
  class="r"
>
  3
</button>
<button
  class="r"
>
  3
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "2" => "3"
UPDATE: button:nth-of-type(2)::text "2" => "3"
UPDATE: button:nth-of-type(3)::text "2" => "3"
```
