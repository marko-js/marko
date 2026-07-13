# Render `{"title":"First","note":"Ships tomorrow","$global":{"persisted":true}}`
```html
<h1>
  First
</h1>
<button>
  clicked 0
</button>
<section>
  loading…
</section>
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
    clicked 0 times -- Ships tomorrow
  </p>
</section>
```
## Change
```
INSERT: section > p::text("clicked ")
INSERT: section > p::text@0 + ::text("0")
INSERT: section > p::text@8 + ::text(" times -- ")
INSERT: section > p::text@9 + ::text("Ships tomorrow")
UPDATE: section > p > #comment "M_* b" => "M_*4 b"
REMOVE: section::text("loading…")
INSERT: section > p
```

# Update
```js
container.querySelector("button").click();
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
    clicked 1 times -- Ships tomorrow
  </p>
</section>
```
## Change
```
UPDATE: button::text@8 "0" => "1"
UPDATE: section > p::text@8 "0" => "1"
```

# Update update frame 1 of 2
```html
<h1>
  Second
</h1>
<button>
  clicked 1
</button>
<section>
  <p>
    clicked 1 times -- Ships tomorrow
  </p>
</section>
```
## Change
```
UPDATE: h1::text "First" => "Second"
```

# Update between frame 1 and 2
```html
<h1>
  Second
</h1>
<button>
  clicked 2
</button>
<section>
  <p>
    clicked 2 times -- Ships tomorrow
  </p>
</section>
```
## Change
```
UPDATE: button::text@8 "1" => "2"
UPDATE: section > p::text@8 "1" => "2"
```

# Update `{"title":"Second","note":"Backordered","$global":{"persisted":true}}`
```html
<h1>
  Second
</h1>
<button>
  clicked 2
</button>
<section>
  <p>
    clicked 2 times -- Backordered
  </p>
</section>
```
## Change
```
UPDATE: section > p::text@19 "Ships tomorrow" => "Backordered"
```

# Update
```js
container.querySelector("button").click();
```
```html
<h1>
  Second
</h1>
<button>
  clicked 3
</button>
<section>
  <p>
    clicked 3 times -- Backordered
  </p>
</section>
```
## Change
```
UPDATE: button::text@8 "2" => "3"
UPDATE: section > p::text@8 "2" => "3"
```
