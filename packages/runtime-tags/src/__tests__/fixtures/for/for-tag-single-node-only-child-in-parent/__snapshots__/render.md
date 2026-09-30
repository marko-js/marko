# Render
```html
<div
  data-children="1"
>
  <div />
</div>
```

# Update
```html
<div
  data-children="2"
>
  <div />
  <div />
</div>
```
## Change
```
UPDATE: div[data-children] "1" => "2"
INSERT: div > div:nth-of-type(1) + div
```
