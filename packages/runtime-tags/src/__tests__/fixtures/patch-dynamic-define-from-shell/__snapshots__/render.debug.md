# Render `{"useA":false,"user":{"name":"ONE","passwordHash":"SECRET_hash_ONE","address":{"city":"CityONE","street":"SECRET_street_ONE"}}}`
```html
<main>
  <h5>
    ONE
  </h5>
  <output />
</main>
```

# Update `{"useA":true,"user":{"name":"TWO","passwordHash":"SECRET_hash_TWO","address":{"city":"CityTWO","street":"SECRET_street_TWO"}}}`
```html
<main>
  <h4>
    TWO
  </h4>
  <p>
    CityTWO
  </p>
  <button
    class="pick"
  >
    pick
  </button>
  <output />
</main>
```
## Change
```
INSERT: main > :is(h4, p, .pick)
REMOVE: .pick + h5
UPDATE: main > h4::text " " => "TWO"
UPDATE: main > p::text " " => "CityTWO"
```

# Update
```js
container.querySelector(".pick").click();
```
```html
<main>
  <h4>
    TWO
  </h4>
  <p>
    CityTWO
  </p>
  <button
    class="pick"
  >
    pick
  </button>
  <output>
    TWO
  </output>
</main>
```
## Change
```
UPDATE: main > output::text "" => "TWO"
```

# Update `{"useA":true,"user":{"name":"THREE","passwordHash":"SECRET_hash_THREE","address":{"city":"CityTHREE","street":"SECRET_street_THREE"}}}`
```html
<main>
  <h4>
    THREE
  </h4>
  <p>
    CityTHREE
  </p>
  <button
    class="pick"
  >
    pick
  </button>
  <output>
    TWO
  </output>
</main>
```
## Change
```
UPDATE: main > h4::text "TWO" => "THREE"
UPDATE: main > p::text "CityTWO" => "CityTHREE"
```

# Update
```js
container.querySelector(".pick").click();
```
```html
<main>
  <h4>
    THREE
  </h4>
  <p>
    CityTHREE
  </p>
  <button
    class="pick"
  >
    pick
  </button>
  <output>
    THREE
  </output>
</main>
```
## Change
```
UPDATE: main > output::text "TWO" => "THREE"
```
