# Render `{"rows":[{"id":1,"card":true,"label":"a","tags":["x"]}]}`
```html
<section>
  <button>
    0
  </button>
  <p>
    direct
    <i>
      a 0
    </i>
  </p>
  <p>
    dynamic
    <b>
      a 0
    </b>
  </p>
  <p>
    x
    <em>
      a 0
    </em>
  </p>
</section>
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <button>
    1
  </button>
  <p>
    direct
    <i>
      a 1
    </i>
  </p>
  <p>
    dynamic
    <b>
      a 1
    </b>
  </p>
  <p>
    x
    <em>
      a 1
    </em>
  </p>
</section>
```
## Change
```
UPDATE: section > button::text "0" => "1"
UPDATE: section > p:nth-of-type(1) > i::text@2 "0" => "1"
UPDATE: section > p:nth-of-type(2) > b::text@2 "0" => "1"
UPDATE: section > p:nth-of-type(3) > em::text@2 "0" => "1"
```

# Update `{"rows":[{"id":1,"card":false,"label":"b","tags":[]},{"id":2,"card":true,"label":"c","tags":["y","z"]}]}`
```html
<section>
  <button>
    1
  </button>
  <p>
    direct
    <i>
      b 1
    </i>
  </p>
  <span
    label="dynamic"
  >
    <b>
      b 1
    </b>
  </span>
</section>
<section>
  <button>
    0
  </button>
  <p>
    direct
    <i>
      c 0
    </i>
  </p>
  <p>
    dynamic
    <b>
      c 0
    </b>
  </p>
  <p>
    y
    <em>
      c 0
    </em>
  </p>
  <p>
    z
    <em>
      c 0
    </em>
  </p>
</section>
```
## Change
```
INSERT: section:nth-of-type(1) > p + span
REMOVE: section:nth-of-type(1) > span + p
UPDATE: section:nth-of-type(1) > span[label] null => "dynamic"
UPDATE: section:nth-of-type(1) > p > i::text@0 "a" => "b"
UPDATE: section:nth-of-type(1) > span > b::text@0 "" => "b"
REMOVE: section:nth-of-type(1) > span + p
INSERT: section:nth-of-type(1) + section
UPDATE: section:nth-of-type(1) > span > b::text@2 "" => "1"
UPDATE: section:nth-of-type(2) > p:nth-of-type(1) > i::text@2 "" => "0"
UPDATE: section:nth-of-type(2) > p:nth-of-type(2) > b::text@2 "" => "0"
UPDATE: section:nth-of-type(2) > p:nth-of-type(3) > em::text@2 "" => "0"
UPDATE: section:nth-of-type(2) > p:nth-of-type(4) > em::text@2 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <button>
    2
  </button>
  <p>
    direct
    <i>
      b 2
    </i>
  </p>
  <span
    label="dynamic"
  >
    <b>
      b 2
    </b>
  </span>
</section>
<section>
  <button>
    0
  </button>
  <p>
    direct
    <i>
      c 0
    </i>
  </p>
  <p>
    dynamic
    <b>
      c 0
    </b>
  </p>
  <p>
    y
    <em>
      c 0
    </em>
  </p>
  <p>
    z
    <em>
      c 0
    </em>
  </p>
</section>
```
## Change
```
UPDATE: section:nth-of-type(1) > button::text "1" => "2"
UPDATE: section:nth-of-type(1) > p > i::text@2 "1" => "2"
UPDATE: section:nth-of-type(1) > span > b::text@2 "1" => "2"
```

# Update `{"rows":[{"id":2,"card":false,"label":"d","tags":["z"]},{"id":1,"card":true,"label":"e","tags":["x"]}]}`
```html
<section>
  <button>
    0
  </button>
  <p>
    direct
    <i>
      d 0
    </i>
  </p>
  <span
    label="dynamic"
  >
    <b>
      d 0
    </b>
  </span>
  <span
    label="z"
  >
    <em>
      d 0
    </em>
  </span>
</section>
<section>
  <button>
    2
  </button>
  <p>
    direct
    <i>
      e 2
    </i>
  </p>
  <p>
    dynamic
    <b>
      e 2
    </b>
  </p>
  <p>
    x
    <em>
      e 2
    </em>
  </p>
</section>
```
## Change
```
INSERT: section:nth-of-type(1) > p + span
REMOVE: section:nth-of-type(1) > span:nth-of-type(1) + p
UPDATE: section:nth-of-type(1) > span:nth-of-type(1)[label] null => "dynamic"
UPDATE: section:nth-of-type(1) > p > i::text@0 "c" => "d"
UPDATE: section:nth-of-type(1) > span:nth-of-type(1) > b::text@0 "" => "d"
INSERT: section:nth-of-type(1) > span:nth-of-type(1) + span
REMOVE: section:nth-of-type(1) > span:nth-of-type(2) + p
UPDATE: section:nth-of-type(1) > span:nth-of-type(2)[label] null => "z"
INSERT: section:nth-of-type(1) > span:nth-of-type(2) > em
UPDATE: section:nth-of-type(1) > span:nth-of-type(2) > em::text@0 "" => "d"
REMOVE: section:nth-of-type(1) > span:nth-of-type(2) + p
INSERT: section:nth-of-type(2) > p:nth-of-type(1) + p
REMOVE: section:nth-of-type(2) > p:nth-of-type(2) + span
UPDATE: section:nth-of-type(2) > p:nth-of-type(1) > i::text@0 "b" => "e"
UPDATE: section:nth-of-type(2) > p:nth-of-type(2)::text "" => "dynamic"
INSERT: section:nth-of-type(2) > p:nth-of-type(2)::text + b
INSERT: section:nth-of-type(2) > p:nth-of-type(2) + p
REMOVE: section:nth-of-type(2) + section
INSERT: section
UPDATE: section:nth-of-type(1) > span:nth-of-type(1) > b::text@2 "" => "0"
UPDATE: section:nth-of-type(1) > span:nth-of-type(2) > em::text@2 "" => "0"
UPDATE: section:nth-of-type(2) > p:nth-of-type(2) > b::text@2 "" => "2"
UPDATE: section:nth-of-type(2) > p:nth-of-type(3) > em::text@2 "" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <button>
    1
  </button>
  <p>
    direct
    <i>
      d 1
    </i>
  </p>
  <span
    label="dynamic"
  >
    <b>
      d 1
    </b>
  </span>
  <span
    label="z"
  >
    <em>
      d 1
    </em>
  </span>
</section>
<section>
  <button>
    2
  </button>
  <p>
    direct
    <i>
      e 2
    </i>
  </p>
  <p>
    dynamic
    <b>
      e 2
    </b>
  </p>
  <p>
    x
    <em>
      e 2
    </em>
  </p>
</section>
```
## Change
```
UPDATE: section:nth-of-type(1) > button::text "0" => "1"
UPDATE: section:nth-of-type(1) > p > i::text@2 "0" => "1"
UPDATE: section:nth-of-type(1) > span:nth-of-type(1) > b::text@2 "0" => "1"
UPDATE: section:nth-of-type(1) > span:nth-of-type(2) > em::text@2 "0" => "1"
```
