# Render `{"show":false,"title":"a"}`
```html
<button>
  0
</button>
<main />
```

# Update `{"show":true,"title":"b"}`
```html
<button>
  0
</button>
<main
  data-label="b!"
>
  <p>
    shown
  </p>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main[data-label] null => "b!"
```

# Update `{"show":true,"title":"c"}`
```html
<button>
  0
</button>
<main
  data-label="c!"
>
  <p>
    shown
  </p>
</main>
```
## Change
```
UPDATE: main[data-label] "b!" => "c!"
```
