# Render `{"title":"First","data":"pre-nav-data","tick":5,"$global":{"persisted":true}}`
```html
<h1>
  First
</h1>
<section>
  loading…
</section>
```

# Update update frame 1 of 2
```html
<h1>
  Second
</h1>
<section>
  loading…
</section>
```
## Change
```
UPDATE: h1::text "First" => "Second"
```

# Update `{"title":"Second","data":"post-nav-data","tick":6,"$global":{"persisted":true}}`
```html
<h1>
  Second
</h1>
<section>
  <p>
    post-nav-data
  </p>
</section>
```
## Change
```
REMOVE: section::text("loading…")
INSERT: section > p
```

# Update
```html
<h1>
  Second
</h1>
<section>
  <p>
    post-nav-data
  </p>
</section>
```
## Change
```
INSERT: t > p::text("pre-nav-data")
```
