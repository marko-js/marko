# Render `{"label":"a"}`
```html
<section>
  <p>
    a: 0
  </p>
</section>
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <p>
    a: 1
  </p>
</section>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: section > p::text "a: 0" => "a: 1"
```

# Update `{"label":"b"}`
```html
<section>
  <p>
    b: 1
  </p>
</section>
<button>
  1
</button>
```
## Change
```
UPDATE: section > p::text "a: 1" => "b: 1"
UPDATE: body[data-label] "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <p>
    b: 2
  </p>
</section>
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: section > p::text "b: 1" => "b: 2"
```

# Update `{"label":"c"}`
```html
<section>
  <p>
    c: 2
  </p>
</section>
<button>
  2
</button>
```
## Change
```
UPDATE: section > p::text "b: 2" => "c: 2"
UPDATE: body[data-label] "b" => "c"
```
