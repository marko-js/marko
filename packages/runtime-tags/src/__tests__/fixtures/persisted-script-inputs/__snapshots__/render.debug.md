# Render `{"title":"Store","a":"x","b":"y"}`
```html
<main
  data-pair="xy"
  data-runs="1"
>
  <h1>
    Store
  </h1>
</main>
```

# Update `{"title":"Store!","a":"x","b":"y"}`
```html
<main
  data-pair="xy"
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

# Update `{"title":"Store!","a":"z","b":"w"}`
```html
<main
  data-pair="zw"
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
UPDATE: main[data-pair] "xy" => "zw"
UPDATE: main[data-runs] "1" => "2"
```

# Update `{"title":"Store!","a":"x","b":"w"}`
```html
<main
  data-pair="xw"
  data-runs="3"
>
  <h1>
    Store!
  </h1>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Store!"
UPDATE: main[data-pair] "zw" => "xw"
UPDATE: main[data-runs] "2" => "3"
```
