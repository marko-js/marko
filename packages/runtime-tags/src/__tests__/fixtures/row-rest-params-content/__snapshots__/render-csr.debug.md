# Render `{"to":1}`
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
```

# Update `{"to":3}`
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
<button
  class="r"
>
  0
</button>
```
## Change
```
INSERT: button:nth-of-type(2) + button
INSERT: button:nth-of-type(3) + button
UPDATE: button:nth-of-type(3)::text " " => "0"
UPDATE: button:nth-of-type(4)::text " " => "0"
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
<button
  class="r"
>
  3
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "0" => "3"
UPDATE: button:nth-of-type(2)::text "0" => "3"
UPDATE: button:nth-of-type(3)::text "0" => "3"
UPDATE: button:nth-of-type(4)::text "0" => "3"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<button
  class="r"
>
  5
</button>
<button
  class="r"
>
  5
</button>
<button
  class="r"
>
  5
</button>
<button
  class="r"
>
  5
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "3" => "5"
UPDATE: button:nth-of-type(2)::text "3" => "5"
UPDATE: button:nth-of-type(3)::text "3" => "5"
UPDATE: button:nth-of-type(4)::text "3" => "5"
```
