# Render `{"$global":{"persisted":true,"items":[]}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul>
  <li
    class="trailing"
  >
    end
  </li>
</ul>
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
<ul>
  <li
    class="trailing"
  >
    end
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"items":[{"id":"one","label":"a"},{"id":"two","label":"a"}]}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<ul>
  <li>
    one:a
  </li>
  <li>
    two:a
  </li>
  <li
    class="trailing"
  >
    end
  </li>
</ul>
```
## Change
```
INSERT: ul > li
INSERT: ul > li:nth-of-type(1) + li
```

# Update `{"$global":{"persisted":true,"items":[{"id":"one","label":"b"},{"id":"two","label":"b"}]}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<ul>
  <li>
    one:b
  </li>
  <li>
    two:b
  </li>
  <li
    class="trailing"
  >
    end
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@4 "a" => "b"
UPDATE: ul > li:nth-of-type(2)::text@4 "a" => "b"
```

# Update `{"$global":{"persisted":true,"items":[{"id":"two","label":"c"},{"id":"one","label":"c"}]}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<ul>
  <li>
    two:c
  </li>
  <li>
    one:c
  </li>
  <li
    class="trailing"
  >
    end
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@4 "b" => "c"
UPDATE: ul > li:nth-of-type(2)::text@4 "b" => "c"
REMOVE: ul > li:nth-of-type(2) + li
INSERT: ul > li
```

# Update `{"$global":{"persisted":true,"items":[{"id":"two","label":"d"}]}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<ul>
  <li>
    two:d
  </li>
  <li
    class="trailing"
  >
    end
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@4 "c" => "d"
REMOVE: ul > li:nth-of-type(1) + li
```
