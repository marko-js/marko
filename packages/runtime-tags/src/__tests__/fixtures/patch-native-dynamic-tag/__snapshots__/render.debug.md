# Render `{"label":"one","on":true}`
```html
<section
  class="one"
  data-count="0"
>
  one 0
</section>
<button>
  +
</button>
```

# Update `{"label":"two","on":true}`
```html
<section
  class="two"
  data-count="0"
>
  two 0
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: .two[class] "one" => "two"
UPDATE: .two::text@0 "one" => "two"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section
  class="two"
  data-count="1"
>
  two 1
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: .two[data-count] "0" => "1"
UPDATE: .two::text@4 "0" => "1"
```

# Update `{"label":"three","on":false}`
```html
<article
  class="three"
  data-count="1"
>
  three 1
</article>
<button>
  +
</button>
```
## Change
```
INSERT: .three
REMOVE: .three + section
INSERT: .three > :is(::text("three"), ::text(" "), ::text("1"))
UPDATE: .three[class] null => "three"
UPDATE: .three[data-count] null => "1"
UPDATE: .three::text@0 "" => "three"
UPDATE: .three::text@6 "" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<article
  class="three"
  data-count="2"
>
  three 2
</article>
<button>
  +
</button>
```
## Change
```
UPDATE: .three[data-count] "1" => "2"
UPDATE: .three::text@6 "1" => "2"
```

# Update `{"label":"four","on":true}`
```html
<section
  class="four"
  data-count="2"
>
  four 2
</section>
<button>
  +
</button>
```
## Change
```
INSERT: .four
REMOVE: .four + article
INSERT: .four > :is(::text("four"), ::text(" "), ::text("2"))
UPDATE: .four[class] null => "four"
UPDATE: .four[data-count] null => "2"
UPDATE: .four::text@0 "" => "four"
UPDATE: .four::text@5 "" => "2"
```
