# Render
```html
<div
  id="sM_B"
>
  sM_A sM_C sM_B
</div>
```

# Update `{}`

# Update `{"z":"explicit"}`
```html
<div
  id="explicit"
>
  sM_A sM_C explicit
</div>
```
## Change
```
UPDATE: #explicit[id] "sM_B" => "explicit"
UPDATE: #explicit::text@8 "sM_B" => "explicit"
```

# Update `{}`
```html
<div
  id="sM_B"
>
  sM_A sM_C sM_B
</div>
```
## Change
```
UPDATE: #sM_B[id] "explicit" => "sM_B"
UPDATE: #sM_B::text@8 "explicit" => "sM_B"
```
