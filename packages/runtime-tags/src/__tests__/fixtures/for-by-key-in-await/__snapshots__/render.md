# Render `{"value":{"value":"x"}}`
```html
<button>
  add
</button>
<div />
```

# Update
```html
<button>
  add
</button>
<div>
  <em>
    a:x
  </em>
</div>
<div>
  <em>
    b:x
  </em>
</div>
```
## Change
```
INSERT: div:nth-of-type(1) > em
INSERT: div:nth-of-type(1) > em::text("a:x")
INSERT: div:nth-of-type(1) + div
INSERT: div:nth-of-type(2) > em
INSERT: div:nth-of-type(2) > em::text("b:x")
```
