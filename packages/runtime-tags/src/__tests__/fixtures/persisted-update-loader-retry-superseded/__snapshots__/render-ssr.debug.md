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
  <button
    class="pin"
  >
    pin 0
  </button>
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
  <button
    class="pin"
  >
    pin 0
  </button>
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
  <button
    class="pin"
  >
    pin 0
  </button>
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
UPDATE: .headline::text@0 "2" => "3"
```

# Update
```js
assert.deepEqual(lineupItems(document), ["ada", "grace"]);
assert.equal(deferred(document).length, 1);
assert.equal(fallbacks(document).length, 0);
```

# Update `{"performers":["grace"],"$global":{"persisted":true}}`
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
    1 on stage
  </h2>
  <button
    class="pin"
  >
    pin 0
  </button>
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
UPDATE: .headline::text@0 "3" => "1"
```

# Update
```js
assert.deepEqual(lineupItems(document), ["ada", "grace"]);
assert.equal(deferred(document).length, 1);
assert.equal(fallbacks(document).length, 0);
```

# Update
```js
deferred(document)[0].fail("late chunk failure");
```

# Update
```js
assert.equal(deferred(document).length, 2);
assert.equal(fallbacks(document).length, 0);
```

# Update
```js
deferred(document)[1].release();
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
    1 on stage
  </h2>
  <button
    class="pin"
  >
    pin 0
  </button>
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
INSERT: .lineup > li
REMOVE: .lineup > li + li
REMOVE: .lineup > li + li
```

# Update
```js
assert.deepEqual(lineupItems(document), ["grace"]);
assert.equal(fallbacks(document).length, 0);
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
    1 on stage
  </h2>
  <button
    class="pin"
  >
    pin 0
  </button>
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
UPDATE: .count::text@8 "1" => "2"
```
