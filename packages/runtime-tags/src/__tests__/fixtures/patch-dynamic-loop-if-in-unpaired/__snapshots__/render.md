# Render `{"label":"one","on":true,"items":["a","b"]}`
```html
<section>
  <em>
    0
  </em>
  <ul>
    <li>
      a:one
    </li>
    <li>
      b:one
    </li>
  </ul>
</section>
<button>
  +
</button>
```

# Update `{"label":"two","on":true,"items":["a","b","c"]}`
```html
<section>
  <em>
    0
  </em>
  <ul>
    <li>
      a:two
    </li>
    <li>
      b:two
    </li>
    <li>
      c:two
    </li>
  </ul>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > ul > li:nth-of-type(1)::text@0 "a" => "a"
UPDATE: section > ul > li:nth-of-type(1)::text@2 "one" => "two"
UPDATE: section > ul > li:nth-of-type(2)::text@0 "b" => "b"
UPDATE: section > ul > li:nth-of-type(2)::text@2 "one" => "two"
INSERT: section > ul > li:nth-of-type(2) + li
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <em>
    1
  </em>
  <ul>
    <li>
      a:two
    </li>
    <li>
      b:two
    </li>
    <li>
      c:two
    </li>
  </ul>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > em::text "0" => "1"
```

# Update `{"label":"three","on":false,"items":["b"]}`
```html
<section>
  <em>
    1
  </em>
</section>
<button>
  +
</button>
```
## Change
```
REMOVE: section > em + ul
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <em>
    2
  </em>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > em::text "1" => "2"
```

# Update `{"label":"four","on":true,"items":["a"]}`
```html
<section>
  <em>
    2
  </em>
  <ul>
    <li>
      a:four
    </li>
  </ul>
</section>
<button>
  +
</button>
```
## Change
```
INSERT: section > em + ul
```
