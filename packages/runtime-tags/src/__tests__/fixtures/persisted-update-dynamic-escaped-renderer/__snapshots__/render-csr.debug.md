# Render `{"performers":["ada","grace"],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="stage"
>
  <h2
    class="headline"
  >
    2 on stage
  </h2>
  <ol
    class="lineup"
  >
    <li>
      ada
    </li>
    <li>
      grace
    </li>
  </ol>
</section>
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
<section
  class="stage"
>
  <h2
    class="headline"
  >
    2 on stage
  </h2>
  <ol
    class="lineup"
  >
    <li>
      ada
    </li>
    <li>
      grace
    </li>
  </ol>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"performers":["ada","grace","alan"],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<section
  class="stage"
>
  <h2
    class="headline"
  >
    3 on stage
  </h2>
  <ol
    class="lineup"
  >
    <li>
      ada
    </li>
    <li>
      grace
    </li>
    <li>
      alan
    </li>
  </ol>
</section>
```
## Change
```
UPDATE: .headline::text@0 "2" => "3"
INSERT: .lineup > li:nth-of-type(2) + li
```

# Update `{"performers":["ada","grace","alan"],"$global":{"persisted":true}}`

# Update
```js
_strict.default.deepEqual(lineupItems(document), expected);
_strict.default.equal(document.querySelector("h2.headline").textContent, `${expected.length} on stage`);
```

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
<section
  class="stage"
>
  <h2
    class="headline"
  >
    3 on stage
  </h2>
  <ol
    class="lineup"
  >
    <li>
      ada
    </li>
    <li>
      grace
    </li>
    <li>
      alan
    </li>
  </ol>
</section>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update `{"performers":["grace"],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 2
</button>
<section
  class="stage"
>
  <h2
    class="headline"
  >
    1 on stage
  </h2>
  <ol
    class="lineup"
  >
    <li>
      grace
    </li>
  </ol>
</section>
```
## Change
```
UPDATE: .headline::text@0 "3" => "1"
REMOVE: .lineup > li
REMOVE: .lineup > li + li
```

# Update `{"performers":["grace"],"$global":{"persisted":true}}`

# Update
```js
_strict.default.deepEqual(lineupItems(document), expected);
_strict.default.equal(document.querySelector("h2.headline").textContent, `${expected.length} on stage`);
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 3
</button>
<section
  class="stage"
>
  <h2
    class="headline"
  >
    1 on stage
  </h2>
  <ol
    class="lineup"
  >
    <li>
      grace
    </li>
  </ol>
</section>
```
## Change
```
UPDATE: .count::text@8 "2" => "3"
```
