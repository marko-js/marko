# Render `{"label":"a"}`
```html
<div
  data-x="a"
>
  box
</div>
```

# Update `{"label":"b"}`
```html
<div
  data-x="b"
>
  box
</div>
```
## Change
```
UPDATE: div[data-x] "a" => "b"
```

# Update `{"label":"c"}`
```html
<div
  data-x="c"
>
  box
</div>
```
## Change
```
UPDATE: div[data-x] "b" => "c"
```
