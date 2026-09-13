# Render `{"href":"/first","label":"First","title":"one"}`
```html
<a
  href="/first"
  title="one"
>
  First
</a>
```

# Update `{"href":"/second","label":"Second","hidden":true}`
```html
<a
  hidden=""
  href="/second"
>
  Second
</a>
```
## Change
```
UPDATE: a[href] "/first" => "/second"
UPDATE: a[title] "one" => null
UPDATE: a[hidden] null => ""
UPDATE: a::text "First" => "Second"
```

# Update `{"href":"/third","label":"Third","title":0}`
```html
<a
  href="/third"
  title="0"
>
  Third
</a>
```
## Change
```
UPDATE: a[href] "/second" => "/third"
UPDATE: a[title] null => "0"
UPDATE: a[hidden] "" => null
UPDATE: a::text "Second" => "Third"
```
