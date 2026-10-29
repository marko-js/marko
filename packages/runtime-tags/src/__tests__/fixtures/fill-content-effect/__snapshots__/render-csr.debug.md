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
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: section > p::text "a: 1" => "a: 2"
```
