# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<section>
  <button>
    clear
  </button>
  <span>
    b
  </span>
  <span>
    b
  </span>
</section>
```
## Change
```
INSERT: section
UPDATE: section > span:nth-of-type(1)::text " " => "b"
UPDATE: section > span:nth-of-type(2)::text " " => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<section>
  <button>
    clear
  </button>
  <span>
    c
  </span>
  <span>
    c
  </span>
</section>
```
## Change
```
UPDATE: section > span:nth-of-type(1)::text "b" => "c"
UPDATE: section > span:nth-of-type(2)::text "b" => "c"
```
