# Render `{"$global":{"persisted":true,"cfg":[{"options":[{"key":"rel","id":"relevance","label":"Relevance"},{"key":"price","id":"price-up","label":"Price"}]}],"serializedGlobals":{"cfg":true}}}`
```html
<button>
  clicked 0
</button>
<select
  name="sort"
>
  <option
    selected=""
    value="relevance"
  >
    Relevance
  </option>
  <option
    value="price-up"
  >
    Price
  </option>
</select>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  clicked 1
</button>
<select
  name="sort"
>
  <option
    selected=""
    value="relevance"
  >
    Relevance
  </option>
  <option
    value="price-up"
  >
    Price
  </option>
</select>
```
## Change
```
UPDATE: button::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"cfg":[{"options":[{"key":"rel","id":"best-match","label":"Best match"},{"key":"price","id":"price-up","label":"Price"},{"key":"rating","id":"rating-down","label":"Rating"}]}],"serializedGlobals":{"cfg":true}}}`
```html
<button>
  clicked 1
</button>
<select
  name="sort"
>
  <option
    selected=""
    value="best-match"
  >
    Best match
  </option>
  <option
    value="price-up"
  >
    Price
  </option>
  <option
    value="rating-down"
  >
    Rating
  </option>
</select>
```
## Change
```
UPDATE: select > option:nth-of-type(1)[value] "relevance" => "best-match"
UPDATE: select > option:nth-of-type(1)::text "Relevance" => "Best match"
INSERT: select > option:nth-of-type(2) + option
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  clicked 2
</button>
<select
  name="sort"
>
  <option
    selected=""
    value="best-match"
  >
    Best match
  </option>
  <option
    value="price-up"
  >
    Price
  </option>
  <option
    value="rating-down"
  >
    Rating
  </option>
</select>
```
## Change
```
UPDATE: button::text@8 "1" => "2"
```
