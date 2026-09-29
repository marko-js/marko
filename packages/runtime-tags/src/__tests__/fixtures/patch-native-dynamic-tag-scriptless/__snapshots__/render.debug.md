# Render `{"label":"one","on":true}`
```html
<section
  class="one"
>
  one
</section>
```

# Update `{"label":"two","on":true}`
```html
<section
  class="two"
>
  two
</section>
```
## Change
```
UPDATE: .two[class] "one" => "two"
UPDATE: .two::text "one" => "two"
```

# Update `{"label":"three","on":false}`
```html
<article
  class="three"
>
  three
</article>
```
## Change
```
INSERT: .three
REMOVE: .three + section
INSERT: .three::text("three")
UPDATE: .three[class] null => "three"
UPDATE: .three::text " " => "three"
```

# Update `{"label":"four","on":true}`
```html
<section
  class="four"
>
  four
</section>
```
## Change
```
INSERT: .four
REMOVE: .four + article
INSERT: .four::text("four")
UPDATE: .four[class] null => "four"
UPDATE: .four::text " " => "four"
```
