# Render `{"bs":[1],"note":"a"}`
```html
<button
  class="reset"
>
  reset
</button>
<div>
  1:a
</div>
```

# Update
```js
for (const b of document.querySelectorAll(".reset")) {
b.click();
}
```

# Update `{"bs":[1,2],"note":"b"}`
```html
<button
  class="reset"
>
  reset
</button>
<div>
  1:b
</div>
<button
  class="reset"
>
  reset
</button>
<div>
  2:b
</div>
```
## Change
```
INSERT: div:nth-of-type(1) + :is(button, div)
UPDATE: div:nth-of-type(1)::text@2 "a" => "b"
UPDATE: div:nth-of-type(2)::text@2 "" => "b"
UPDATE: div:nth-of-type(2)::text@0 "" => "2"
```

# Update
```js
for (const b of document.querySelectorAll(".reset")) {
b.click();
}
```

# Update `{"bs":[2],"note":"c"}`
```html
<button
  class="reset"
>
  reset
</button>
<div>
  2:c
</div>
```
## Change
```
REMOVE: div + .reset
REMOVE: div + div
UPDATE: div::text@0 "1" => "2"
UPDATE: div::text@2 "b" => "c"
```
