# Render `{"x":"1","pick":true,"show":false}`
```html
<main>
  <p>
    0
  </p>
</main>
```

# Update `{"x":"2","pick":true,"show":true}`
```html
<main
  data-a="1"
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
INSERT: main > span
UPDATE: main[data-a] null => "1"
UPDATE: main > p::text "0" => "1"
```

# Update `{"x":"3","pick":true,"show":true}`
```html
<main
  data-a="1"
>
  <span>
    3
  </span>
  <p>
    1
  </p>
</main>
```
## Change
```
UPDATE: main > span::text "2" => "3"
```

# Update `{"x":"4","pick":false,"show":true}`
```html
<main
  data-a="1"
  data-b="1"
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
UPDATE: main[data-b] null => "1"
```
