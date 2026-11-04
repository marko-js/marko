# Render `{"$global":{"serializedGlobals":{"data":true},"data":{"title":"one"}}}`
```html
<main
  data-runs="1"
>
  <p>
    one
  </p>
</main>
<button>
  0
</button>
```

# Update `{"$global":{"serializedGlobals":{"data":true},"data":{"title":"two"}}}`
```html
<main
  data-runs="2"
>
  <p>
    two
  </p>
</main>
<button>
  0
</button>
```
## Change
```
UPDATE: main > p::text "one" => "two"
UPDATE: main[data-runs] "1" => "2"
```

# Update `{"$global":{"serializedGlobals":{"data":true},"data":{"title":"two"}}}`
```html
<main
  data-runs="3"
>
  <p>
    two
  </p>
</main>
<button>
  0
</button>
```
## Change
```
UPDATE: main[data-runs] "2" => "3"
```
