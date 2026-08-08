# Render `{"note":"n1"}`
```html
<main>
  <em>
    n1
  </em>
  <em>
    n1
  </em>
  <button>
    t
  </button>
</main>
```

# Update `{"note":"n2"}`
```html
<main>
  <em>
    n2
  </em>
  <em>
    n2
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em:nth-of-type(1)::text "n1" => "n2"
UPDATE: main > em:nth-of-type(2)::text "n1" => "n2"
```
