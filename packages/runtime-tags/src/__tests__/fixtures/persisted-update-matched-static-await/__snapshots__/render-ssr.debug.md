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
    review 1 of 
  </em>
  <em>
    review 2 of 
  </em>
  <em>
    review 3 of 
  </em>
</footer>
```
## Change
```
INSERT: footer > em:nth-of-type(1)::text("review ")
INSERT: footer > em:nth-of-type(1)::text@0 + ::text("1")
INSERT: footer > em:nth-of-type(1)::text@7 + ::text(" of ")
INSERT: footer > em:nth-of-type(2)::text("review ")
INSERT: footer > em:nth-of-type(2)::text@0 + ::text("2")
INSERT: footer > em:nth-of-type(2)::text@7 + ::text(" of ")
INSERT: footer > em:nth-of-type(3)::text("review ")
INSERT: footer > em:nth-of-type(3)::text@0 + ::text("3")
INSERT: footer > em:nth-of-type(3)::text@7 + ::text(" of ")
REMOVE: footer::text("loading reviews…")
INSERT: footer > :is(em, em, em)
UPDATE: footer > em:nth-of-type(1)::text "First" => ""
UPDATE: footer > em:nth-of-type(2)::text "First" => ""
UPDATE: footer > em:nth-of-type(3)::text "First" => ""
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
    review 1 of 
  </em>
  <em>
    review 2 of 
  </em>
  <em>
    review 3 of 
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
    review 1 of 
  </em>
  <em>
    review 2 of 
  </em>
  <em>
    review 3 of 
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
UPDATE: footer > em:nth-of-type(1)::text@12 "" => "Second"
UPDATE: footer > em:nth-of-type(2)::text@12 "" => "Second"
UPDATE: footer > em:nth-of-type(3)::text@12 "" => "Second"
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
UPDATE: footer > em:nth-of-type(1)::text@12 "Second" => "First"
UPDATE: footer > em:nth-of-type(2)::text@12 "Second" => "First"
UPDATE: footer > em:nth-of-type(3)::text@12 "Second" => "First"
```
