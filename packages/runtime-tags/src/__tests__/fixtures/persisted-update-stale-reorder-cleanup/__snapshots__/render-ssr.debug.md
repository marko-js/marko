# Render `{"heading":"First","value":"pre-nav-data","tick":5,"$global":{"persisted":true}}`
```html
<h1>
  First
</h1>
<main>
  fetching…
</main>
```

# Update `{"heading":"Second","value":"post-nav-data","tick":6,"$global":{"persisted":true}}`
```html
<h1>
  Second
</h1>
<main>
  fetching…
</main>
```
## Change
```
UPDATE: h1::text "First" => "Second"
REMOVE: main::text("fetching…")
INSERT: main::text("fetching…")
```

# Update
```html
<h1>
  Second
</h1>
<main>
  fetching…
</main>
```
## Change
```
INSERT: t > b::text("pre-nav-data")
```
