# Render `{"x":"1","pick":true}`
```html
<main
  data-a="1"
  data-last="new"
>
  <span>
    1
  </span>
  <p>
    0
  </p>
</main>
```

# Update `{"x":"2","pick":false}`
```html
<main
  data-a="1"
  data-b="1"
  data-last="new"
>
  <span>
    2
  </span>
  <p>
    1
  </p>
</main>
```
## Change
```
UPDATE: main > p::text "0" => "1"
UPDATE: main > span::text "1" => "2"
UPDATE: main[data-last] "new" => "new"
UPDATE: main[data-b] null => "1"
```

# Update `{"x":"3","pick":true}`
```html
<main
  data-a="2"
  data-b="1"
  data-last="same"
>
  <span>
    3
  </span>
  <p>
    2
  </p>
</main>
```
## Change
```
UPDATE: main > span::text "2" => "3"
UPDATE: main > p::text "1" => "2"
UPDATE: main[data-last] "new" => "same"
UPDATE: main[data-a] "1" => "2"
```

# Update `{"x":"4","pick":true}`
```html
<main
  data-a="2"
  data-b="1"
  data-last="same"
>
  <span>
    4
  </span>
  <p>
    1
  </p>
</main>
```
## Change
```
UPDATE: main > span::text "3" => "4"
UPDATE: main > p::text "2" => "1"
```
