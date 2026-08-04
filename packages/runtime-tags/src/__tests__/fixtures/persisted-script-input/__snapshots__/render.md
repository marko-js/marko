# Render `{"title":"Store","announce":"sale"}`
```html
<main
  data-announce="sale"
  data-runs="1"
>
  <h1>
    Store
  </h1>
</main>
```

# Update `{"title":"Store!","announce":"sale"}`
```html
<main
  data-announce="sale"
  data-runs="1"
>
  <h1>
    Store!
  </h1>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
```

# Update `{"title":"Store!","announce":"clearance"}`
```html
<main
  data-announce="clearance"
  data-runs="2"
>
  <h1>
    Store!
  </h1>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Store!"
UPDATE: main[data-announce] "sale" => "clearance"
UPDATE: main[data-runs] "1" => "2"
```
