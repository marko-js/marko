# Render `{"label":"a","title":"x"}`
```html
<section>
  <p>
    a: 0
  </p>
</section>
<section>
  <p>
    a: 0
  </p>
</section>
<section>
  <p>
    x: 0
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
<section>
  <p>
    a: 1
  </p>
</section>
<section>
  <p>
    x: 1
  </p>
</section>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: section:nth-of-type(1) > p::text "a: 0" => "a: 1"
UPDATE: section:nth-of-type(2) > p::text "a: 0" => "a: 1"
UPDATE: section:nth-of-type(3) > p::text "x: 0" => "x: 1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <p>
    a: 2
  </p>
</section>
<section>
  <p>
    a: 2
  </p>
</section>
<section>
  <p>
    x: 2
  </p>
</section>
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: section:nth-of-type(1) > p::text "a: 1" => "a: 2"
UPDATE: section:nth-of-type(2) > p::text "a: 1" => "a: 2"
UPDATE: section:nth-of-type(3) > p::text "x: 1" => "x: 2"
```
