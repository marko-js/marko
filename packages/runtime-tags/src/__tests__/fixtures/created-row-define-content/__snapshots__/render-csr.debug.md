# Render `{"rows":[{"id":1,"card":true,"label":"a","tags":["x"]},{"id":2,"card":true,"label":"c","tags":["y"]}]}`
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
</section>
```

# Update `{"rows":[{"id":2,"card":false,"label":"d","tags":["z"]},{"id":3,"card":false,"label":"n","tags":["q"]},{"id":1,"card":true,"label":"e","tags":["x"]}]}`
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
    0
  </button>
  <p>
    direct
    <i>
      n 0
    </i>
  </p>
  <span
    label="dynamic"
  >
    <b>
      n 0
    </b>
  </span>
  <span
    label="q"
  >
    <em>
      n 0
    </em>
  </span>
</section>
<section>
  <button>
    0
  </button>
  <p>
    direct
    <i>
      e 0
    </i>
  </p>
  <p>
    dynamic
    <b>
      e 0
    </b>
  </p>
  <p>
    x
    <em>
      e 0
    </em>
  </p>
</section>
```
## Change
```
INSERT: section
REMOVE: section:nth-of-type(3) + section
INSERT: section
INSERT: section:nth-of-type(1) > p + span
REMOVE: section:nth-of-type(1) > span:nth-of-type(1) + p
UPDATE: section:nth-of-type(1) > span:nth-of-type(1)[label] null => "dynamic"
INSERT: section:nth-of-type(1) > span:nth-of-type(1) + span
REMOVE: section:nth-of-type(1) > span:nth-of-type(2) + p
UPDATE: section:nth-of-type(1) > span:nth-of-type(2)[label] null => "z"
INSERT: section:nth-of-type(1) > span:nth-of-type(2) > em
UPDATE: section:nth-of-type(3) > p:nth-of-type(1) > i::text@0 "a" => "e"
UPDATE: section:nth-of-type(1) > p > i::text@0 "c" => "d"
UPDATE: section:nth-of-type(3) > p:nth-of-type(2) > b::text@0 "a" => "e"
UPDATE: section:nth-of-type(3) > p:nth-of-type(3) > em::text@0 "a" => "e"
INSERT: section:nth-of-type(2) > p + span
UPDATE: section:nth-of-type(2) > span:nth-of-type(1)[label] null => "dynamic"
INSERT: section:nth-of-type(2) > p::text + i
INSERT: section:nth-of-type(2) > span:nth-of-type(1) + span
UPDATE: section:nth-of-type(2) > span:nth-of-type(2)[label] null => "q"
INSERT: section:nth-of-type(2) > span:nth-of-type(2) > em
UPDATE: section:nth-of-type(1) > span:nth-of-type(1) > b::text@2 "" => "0"
UPDATE: section:nth-of-type(1) > span:nth-of-type(1) > b::text@0 "" => "d"
UPDATE: section:nth-of-type(1) > span:nth-of-type(2) > em::text@2 "" => "0"
UPDATE: section:nth-of-type(1) > span:nth-of-type(2) > em::text@0 "" => "d"
UPDATE: section:nth-of-type(2) > span:nth-of-type(1) > b::text@0 "" => "n"
UPDATE: section:nth-of-type(2) > span:nth-of-type(1) > b::text@2 "" => "0"
UPDATE: section:nth-of-type(2) > p > i::text@0 "" => "n"
UPDATE: section:nth-of-type(2) > p > i::text@2 "" => "0"
UPDATE: section:nth-of-type(2) > span:nth-of-type(2) > em::text@0 "" => "n"
UPDATE: section:nth-of-type(2) > span:nth-of-type(2) > em::text@2 "" => "0"
```

# Update
```js
for (const b of document.querySelectorAll("button"))
b.click();
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
    1
  </button>
  <p>
    direct
    <i>
      n 1
    </i>
  </p>
  <span
    label="dynamic"
  >
    <b>
      n 1
    </b>
  </span>
  <span
    label="q"
  >
    <em>
      n 1
    </em>
  </span>
</section>
<section>
  <button>
    1
  </button>
  <p>
    direct
    <i>
      e 1
    </i>
  </p>
  <p>
    dynamic
    <b>
      e 1
    </b>
  </p>
  <p>
    x
    <em>
      e 1
    </em>
  </p>
</section>
```
## Change
```
UPDATE: section:nth-of-type(3) > button::text "0" => "1"
UPDATE: section:nth-of-type(1) > button::text "0" => "1"
UPDATE: section:nth-of-type(3) > p:nth-of-type(1) > i::text@2 "0" => "1"
UPDATE: section:nth-of-type(1) > p > i::text@2 "0" => "1"
UPDATE: section:nth-of-type(3) > p:nth-of-type(2) > b::text@2 "0" => "1"
UPDATE: section:nth-of-type(3) > p:nth-of-type(3) > em::text@2 "0" => "1"
UPDATE: section:nth-of-type(2) > button::text "0" => "1"
UPDATE: section:nth-of-type(1) > span:nth-of-type(1) > b::text@2 "0" => "1"
UPDATE: section:nth-of-type(1) > span:nth-of-type(2) > em::text@2 "0" => "1"
UPDATE: section:nth-of-type(2) > span:nth-of-type(1) > b::text@2 "0" => "1"
UPDATE: section:nth-of-type(2) > p > i::text@2 "0" => "1"
UPDATE: section:nth-of-type(2) > span:nth-of-type(2) > em::text@2 "0" => "1"
```

# Update `{"rows":[{"id":3,"card":false,"label":"m","tags":["q","r"]},{"id":2,"card":false,"label":"f","tags":["z","w"]}]}`
```html
<section>
  <button>
    1
  </button>
  <p>
    direct
    <i>
      m 1
    </i>
  </p>
  <span
    label="dynamic"
  >
    <b>
      m 1
    </b>
  </span>
  <span
    label="q"
  >
    <em>
      m 1
    </em>
  </span>
  <span
    label="r"
  >
    <em>
      m 1
    </em>
  </span>
</section>
<section>
  <button>
    1
  </button>
  <p>
    direct
    <i>
      f 1
    </i>
  </p>
  <span
    label="dynamic"
  >
    <b>
      f 1
    </b>
  </span>
  <span
    label="z"
  >
    <em>
      f 1
    </em>
  </span>
  <span
    label="w"
  >
    <em>
      f 1
    </em>
  </span>
</section>
```
## Change
```
REMOVE: section:nth-of-type(1) + section
REMOVE: section:nth-of-type(2) + section
INSERT: section
UPDATE: section:nth-of-type(2) > p > i::text@0 "d" => "f"
UPDATE: section:nth-of-type(2) > span:nth-of-type(1) > b::text@0 "d" => "f"
UPDATE: section:nth-of-type(2) > span:nth-of-type(2) > em::text@0 "d" => "f"
UPDATE: section:nth-of-type(1) > span:nth-of-type(1) > b::text@0 "n" => "m"
UPDATE: section:nth-of-type(1) > p > i::text@0 "n" => "m"
UPDATE: section:nth-of-type(1) > span:nth-of-type(2) > em::text@0 "n" => "m"
INSERT: section:nth-of-type(1) > span:nth-of-type(2) + span
UPDATE: section:nth-of-type(1) > span:nth-of-type(3)[label] null => "r"
INSERT: section:nth-of-type(1) > span:nth-of-type(3) > em
INSERT: section:nth-of-type(2) > span:nth-of-type(2) + span
UPDATE: section:nth-of-type(2) > span:nth-of-type(3)[label] null => "w"
INSERT: section:nth-of-type(2) > span:nth-of-type(3) > em
UPDATE: section:nth-of-type(1) > span:nth-of-type(3) > em::text@0 "" => "m"
UPDATE: section:nth-of-type(1) > span:nth-of-type(3) > em::text@2 "" => "1"
UPDATE: section:nth-of-type(2) > span:nth-of-type(3) > em::text@0 "" => "f"
UPDATE: section:nth-of-type(2) > span:nth-of-type(3) > em::text@2 "" => "1"
```

# Update
```js
for (const b of document.querySelectorAll("button"))
b.click();
```
```html
<section>
  <button>
    2
  </button>
  <p>
    direct
    <i>
      m 2
    </i>
  </p>
  <span
    label="dynamic"
  >
    <b>
      m 2
    </b>
  </span>
  <span
    label="q"
  >
    <em>
      m 2
    </em>
  </span>
  <span
    label="r"
  >
    <em>
      m 2
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
      f 2
    </i>
  </p>
  <span
    label="dynamic"
  >
    <b>
      f 2
    </b>
  </span>
  <span
    label="z"
  >
    <em>
      f 2
    </em>
  </span>
  <span
    label="w"
  >
    <em>
      f 2
    </em>
  </span>
</section>
```
## Change
```
UPDATE: section:nth-of-type(2) > button::text "1" => "2"
UPDATE: section:nth-of-type(2) > p > i::text@2 "1" => "2"
UPDATE: section:nth-of-type(1) > button::text "1" => "2"
UPDATE: section:nth-of-type(2) > span:nth-of-type(1) > b::text@2 "1" => "2"
UPDATE: section:nth-of-type(2) > span:nth-of-type(2) > em::text@2 "1" => "2"
UPDATE: section:nth-of-type(1) > span:nth-of-type(1) > b::text@2 "1" => "2"
UPDATE: section:nth-of-type(1) > p > i::text@2 "1" => "2"
UPDATE: section:nth-of-type(1) > span:nth-of-type(2) > em::text@2 "1" => "2"
UPDATE: section:nth-of-type(1) > span:nth-of-type(3) > em::text@2 "1" => "2"
UPDATE: section:nth-of-type(2) > span:nth-of-type(3) > em::text@2 "1" => "2"
```
