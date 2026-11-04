# Render `{"title":"First","body":"one"}`
```html
<div
  class="card"
>
  <h1>
    First
  </h1>
  <p>
    one
  </p>
</div>
```

# Update `{"title":"Second","body":"two"}`
```html
<div
  class="card"
>
  <h1>
    Second
  </h1>
  <p>
    two
  </p>
</div>
```
## Change
```
UPDATE: .card > h1::text "First" => "Second"
UPDATE: .card > p::text "one" => "two"
```

# Update `{"title":0,"body":null}`
```html
<div
  class="card"
>
  <h1>
    0
  </h1>
  <p />
</div>
```
## Change
```
UPDATE: .card > h1::text "Second" => "0"
UPDATE: .card > p::text "two" => ""
```
