# Render `{"title":"First","missing":true,"$global":{"persisted":true}}`
```html
<h1>
  First
</h1>
<button>
  clicked 0
</button>
<p>
  gone
</p>
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
<p>
  gone
</p>
```
## Change
```
UPDATE: button::text@8 "0" => "1"
```

# Update update frame 1 of 2
```html
<h1>
  Second
</h1>
<button>
  clicked 1
</button>
5&gt;
<h2>
  long Second
</h2>
<section>
  loading extras…
</section>
```
## Change
```
UPDATE: h1::text "First" => "Second"
INSERT: section
REMOVE: button + p
INSERT: button + :is(::text(" 5> "), h2)
INSERT: section::text("loading extras…")
```

# Update `{"title":"Second","$global":{"persisted":true}}`
```html
<h1>
  Second
</h1>
<button>
  clicked 1
</button>
5&gt;
<h2>
  long Second
</h2>
<section>
  <p>
    extras for Second
  </p>
</section>
```
## Change
```
INSERT: section > p
REMOVE: section > p + ::text("loading extras…")
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
5&gt;
<h2>
  long Second
</h2>
<section>
  <p>
    extras for Second
  </p>
</section>
```
## Change
```
UPDATE: button::text@8 "1" => "2"
```

# Update update frame 1 of 2

# Update `{"title":"Deluxe","$global":{"persisted":true}}`
```html
<h1>
  Deluxe
</h1>
<button>
  clicked 2
</button>
5&gt;
<h2>
  long Deluxe
</h2>
<section>
  <p>
    extras for Deluxe
  </p>
</section>
```
## Change
```
UPDATE: h1::text "Second" => "Deluxe"
INSERT: button + :is(::text(" 5> "), h2)
REMOVE: h2 + ::text(" 5> ")
REMOVE: h2 + h2
UPDATE: section > p::text@11 "Second" => "Deluxe"
```
