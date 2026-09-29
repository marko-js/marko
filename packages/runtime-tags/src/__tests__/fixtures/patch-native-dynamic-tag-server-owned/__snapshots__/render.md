# Render `{"label":"one","on":true}`
```html
<section
  class="one"
>
  one
</section>
<button>
  0
</button>
```

# Update `{"label":"two","on":true}`
```html
<section
  class="two"
>
  two
</section>
<button>
  0
</button>
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
<button>
  0
</button>
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
<button>
  0
</button>
```
## Change
```
INSERT: .four
REMOVE: .four + article
INSERT: .four::text("four")
UPDATE: .four[class] null => "four"
UPDATE: .four::text " " => "four"
```
