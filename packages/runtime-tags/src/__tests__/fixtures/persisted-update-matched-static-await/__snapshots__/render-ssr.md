# Render `{"title":"First","$global":{"persisted":true}}`
```html
<h1>
  First
</h1>
<button>
  clicked 0
</button>
<section>
  loading deals…
</section>
<footer>
  loading reviews…
</footer>
```

# Update
```html
<h1>
  First
</h1>
<button>
  clicked 0
</button>
<section>
  <p>
    <strong>
      deals never change
    </strong>
  </p>
</section>
<footer>
  loading reviews…
</footer>
```
## Change
```
INSERT: section > p > strong
INSERT: section > p > strong::text("deals never change")
REMOVE: section::text("loading deals…")
INSERT: section > p
```

# Update
```html
<h1>
  First
</h1>
<button>
  clicked 0
</button>
<section>
  <p>
    <strong>
      deals never change
    </strong>
  </p>
</section>
<footer>
  <em>
    review 1 of First
  </em>
  <em>
    review 2 of First
  </em>
  <em>
    review 3 of First
  </em>
</footer>
```
## Change
```
INSERT: footer > em:nth-of-type(1)::text("review 1 of ")
INSERT: footer > em:nth-of-type(1)::text@0 + ::text("First")
INSERT: footer > em:nth-of-type(2)::text("review 2 of ")
INSERT: footer > em:nth-of-type(2)::text@0 + ::text("First")
INSERT: footer > em:nth-of-type(3)::text("review 3 of ")
INSERT: footer > em:nth-of-type(3)::text@0 + ::text("First")
REMOVE: footer::text("loading reviews…")
INSERT: footer > :is(em, em, em)
```

# Update
```js
document.querySelector("button").click();
```
```html
<h1>
  First
</h1>
<button>
  clicked 1
</button>
<section>
  <p>
    <strong>
      deals never change
    </strong>
  </p>
</section>
<footer>
  <em>
    review 1 of First
  </em>
  <em>
    review 2 of First
  </em>
  <em>
    review 3 of First
  </em>
</footer>
```
## Change
```
UPDATE: button::text@8 "0" => "1"
```

# Update update frame 1 of 3
```html
<h1>
  Second
</h1>
<button>
  clicked 1
</button>
<section>
  <p>
    <strong>
      deals never change
    </strong>
  </p>
</section>
<footer>
  <em>
    review 1 of First
  </em>
  <em>
    review 2 of First
  </em>
  <em>
    review 3 of First
  </em>
</footer>
```
## Change
```
UPDATE: h1::text "First" => "Second"
```

# Update update frame 2 of 3

# Update `{"title":"Second","$global":{"persisted":true}}`
```html
<h1>
  Second
</h1>
<button>
  clicked 1
</button>
<section>
  <p>
    <strong>
      deals never change
    </strong>
  </p>
</section>
<footer>
  <em>
    review 1 of Second
  </em>
  <em>
    review 2 of Second
  </em>
  <em>
    review 3 of Second
  </em>
</footer>
```
## Change
```
INSERT: footer > :is(em, em, em)
REMOVE: footer > em:nth-of-type(3) + em
REMOVE: footer > em:nth-of-type(3) + em
REMOVE: footer > em:nth-of-type(3) + em
```

# Update
```js
document.querySelector("button").click();
```
```html
<h1>
  Second
</h1>
<button>
  clicked 2
</button>
<section>
  <p>
    <strong>
      deals never change
    </strong>
  </p>
</section>
<footer>
  <em>
    review 1 of Second
  </em>
  <em>
    review 2 of Second
  </em>
  <em>
    review 3 of Second
  </em>
</footer>
```
## Change
```
UPDATE: button::text@8 "1" => "2"
```

# Update `{"title":"First","$global":{"persisted":true}}`
```html
<h1>
  First
</h1>
<button>
  clicked 2
</button>
<section>
  <p>
    <strong>
      deals never change
    </strong>
  </p>
</section>
<footer>
  <em>
    review 1 of First
  </em>
  <em>
    review 2 of First
  </em>
  <em>
    review 3 of First
  </em>
</footer>
```
## Change
```
UPDATE: h1::text "Second" => "First"
INSERT: footer > :is(em, em, em)
REMOVE: footer > em:nth-of-type(3) + em
REMOVE: footer > em:nth-of-type(3) + em
REMOVE: footer > em:nth-of-type(3) + em
```
