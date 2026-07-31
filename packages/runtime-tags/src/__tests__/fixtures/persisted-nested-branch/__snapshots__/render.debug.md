# Render `{"show":true,"detail":true,"kind":"a","text":"one"}`
```html
<div>
  <section
    title="a"
  >
    <p>
      one
    </p>
  </section>
</div>
```

# Update `{"show":true,"detail":true,"kind":"b","text":"two"}`
```html
<div>
  <section
    title="b"
  >
    <p>
      two
    </p>
  </section>
</div>
```
## Change
```
UPDATE: div > section[title] "a" => "b"
UPDATE: div > section > p::text "one" => "two"
```

# Update `{"show":true,"summary":"condensed"}`
```html
<div>
  <section>
    <p>
      two
    </p>
  </section>
</div>
```
## Change
```
UPDATE: div > section[title] "b" => null
```

*patch rejected: falling back to document navigation*
