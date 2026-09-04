# Render
```html
<div
  id="sM_2"
>
  sM_1 sM_3 sM_2
</div>
```

# Update `{}`
```html
<div
  id="sM_2"
>
  sM_1 sM_3 sM_2
</div>
```
## Change
```
UPDATE: #sM_2::text@10 "sM_2" => "sM_2"
```

# Update `{"z":"explicit"}`
```html
<div
  id="explicit"
>
  sM_1 sM_3 explicit
</div>
```
## Change
```
UPDATE: #explicit[id] "sM_2" => "explicit"
UPDATE: #explicit::text@10 "sM_2" => "explicit"
```

# Update `{}`
```html
<div
  id="sM_2"
>
  sM_1 sM_3 sM_2
</div>
```
## Change
```
UPDATE: #sM_2[id] "explicit" => "sM_2"
UPDATE: #sM_2::text@10 "explicit" => "sM_2"
```
