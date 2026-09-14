# Render `{"show":true,"inner":true,"title":"a","suffix":"."}`
```html
<main
  data-label="a!."
>
  <p>
    a!
  </p>
  <span>
    inner
  </span>
</main>
```

# Update `{"show":true,"inner":true,"title":"b","suffix":"."}`
```html
<main
  data-label="b!."
>
  <p>
    b!
  </p>
  <span>
    inner
  </span>
</main>
```
## Change
```
UPDATE: main > p::text "a!" => "b!"
UPDATE: main[data-label] "a!." => "b!."
```

# Update `{"show":true,"inner":true,"title":"b","suffix":"?"}`
```html
<main
  data-label="b!?"
>
  <p>
    b!
  </p>
  <span>
    inner
  </span>
</main>
```
## Change
```
UPDATE: main > p::text "b!" => "b!"
UPDATE: main[data-label] "b!." => "b!?"
```
