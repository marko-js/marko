# Render `{"sort":"relevance","options":[{"key":"rel","id":"relevance","label":"Relevance"},{"key":"price","id":"price-up","label":"Price"}],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<select
  class="sort"
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
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<select
  class="sort"
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
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"sort":"rating-down","options":[{"key":"rel","id":"best-match","label":"Best match"},{"key":"price","id":"price-up","label":"Price"},{"key":"rating","id":"rating-down","label":"Rating"}],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<select
  class="sort"
>
  <option
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
    selected=""
    value="rating-down"
  >
    Rating
  </option>
</select>
```
## Change
```
UPDATE: .sort > option:nth-of-type(1)[value] "relevance" => "best-match"
UPDATE: .sort > option:nth-of-type(1)::text "Relevance" => "Best match"
REMOVE: .sort > option:nth-of-type(3) + option
INSERT: .sort > option:nth-of-type(1) + option
INSERT: .sort > option:nth-of-type(2) + option
UPDATE: .sort > option:nth-of-type(1)[selected] "" => null
UPDATE: .sort > option:nth-of-type(3)[selected] null => ""
```

# Update
```js
const select = document.querySelector("select.sort");
const window = select.ownerDocument.defaultView;
select.value = value;
select.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```

# Update `{"sort":"rating-down","options":[{"key":"rel","id":"best-match","label":"Best match"},{"key":"price","id":"price-up","label":"Price"},{"key":"rating","id":"rating-down","label":"Rating"}],"$global":{"persisted":true}}`

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<select
  class="sort"
>
  <option
    value="best-match"
  >
    Best match
  </option>
  <option
    selected=""
    value="price-up"
  >
    Price
  </option>
  <option
    default-selected=""
    value="rating-down"
  >
    Rating
  </option>
</select>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```
