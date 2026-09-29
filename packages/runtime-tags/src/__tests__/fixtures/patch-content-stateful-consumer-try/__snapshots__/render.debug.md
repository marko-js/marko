# Render `{"fail":false,"x":"one"}`
```html
<button>
  toggle
</button>
<div>
  <p>
    one
  </p>
</div>
```

# Update `{"fail":true,"x":"two"}`
```html
<button>
  toggle
</button>
<div>
  <b>
    boom two
  </b>
</div>
```
## Change
```
INSERT: div > b
REMOVE: div > b + p
UPDATE: div > b::text " " => "boom two"
```
