# Render `{"$global":{"locale":"en","serializedGlobals":["locale"]}}`
```html
<main>
  <span>
    t
  </span>
  <p>
    en!
  </p>
</main>
```

# Update `{"$global":{"locale":"fr","serializedGlobals":["locale"]}}`
```html
<main>
  <span>
    t
  </span>
  <p>
    fr!
  </p>
</main>
```
## Change
```
UPDATE: main > p::text "en!" => "fr!"
```

# Update `{"$global":{"locale":"de","serializedGlobals":["locale"]}}`
```html
<main>
  <span>
    t
  </span>
  <p>
    de!
  </p>
</main>
```
## Change
```
UPDATE: main > p::text "fr!" => "de!"
```
