# Render `{"label":"a","tag":"span","rows":[]}`

# Update `{"label":"b","tag":"span","rows":[{"id":1,"label":"r1"},{"id":2,"label":"r2"},{"id":3,"label":"r3"}]}`
```html
<section>
  <button>
    clear
  </button>
  <span>
    <b>
      r1b
    </b>
  </span>
  <span>
    r1
  </span>
</section>
<section>
  <button>
    clear
  </button>
  <span>
    <b>
      r2b
    </b>
  </span>
  <span>
    r2
  </span>
</section>
<section>
  <button>
    clear
  </button>
  <span>
    <b>
      r3b
    </b>
  </span>
  <span>
    r3
  </span>
</section>
```
## Change
```
INSERT: section
INSERT: section:nth-of-type(1) + section
INSERT: section:nth-of-type(2) + section
INSERT: section:nth-of-type(1) > button + span
INSERT: section:nth-of-type(1) > span:nth-of-type(1) > b
UPDATE: section:nth-of-type(1) > span:nth-of-type(1) > b::text@0 "" => "r1"
UPDATE: section:nth-of-type(1) > span:nth-of-type(1) > b::text@2 "" => "b"
INSERT: section:nth-of-type(1) > span:nth-of-type(1) + span
UPDATE: section:nth-of-type(1) > span:nth-of-type(2)::text " " => "r1"
INSERT: section:nth-of-type(2) > button + span
INSERT: section:nth-of-type(2) > span:nth-of-type(1) > b
UPDATE: section:nth-of-type(2) > span:nth-of-type(1) > b::text@0 "" => "r2"
UPDATE: section:nth-of-type(2) > span:nth-of-type(1) > b::text@2 "" => "b"
INSERT: section:nth-of-type(2) > span:nth-of-type(1) + span
UPDATE: section:nth-of-type(2) > span:nth-of-type(2)::text " " => "r2"
INSERT: section:nth-of-type(3) > button + span
INSERT: section:nth-of-type(3) > span:nth-of-type(1) > b
UPDATE: section:nth-of-type(3) > span:nth-of-type(1) > b::text@0 "" => "r3"
UPDATE: section:nth-of-type(3) > span:nth-of-type(1) > b::text@2 "" => "b"
INSERT: section:nth-of-type(3) > span:nth-of-type(1) + span
UPDATE: section:nth-of-type(3) > span:nth-of-type(2)::text " " => "r3"
```

# Update
```js
d.querySelectorAll("section > *:not(button)").forEach((e) =>
e.click(),
  );
```
## Console
```
LOG "direct" "r1"
LOG "direct" "r2"
LOG "direct" "r3"
```

# Update `{"label":"c","tag":"i","rows":[{"id":3,"label":"r3"},{"id":1,"label":"r1"}]}`
```html
<section>
  <button>
    clear
  </button>
  <i>
    <b>
      r3c
    </b>
  </i>
  <i>
    r3
  </i>
</section>
<section>
  <button>
    clear
  </button>
  <i>
    <b>
      r1c
    </b>
  </i>
  <i>
    r1
  </i>
</section>
```
## Change
```
REMOVE: section:nth-of-type(2) + section
REMOVE: section:nth-of-type(2) + section
INSERT: section
INSERT: section:nth-of-type(2) > i:nth-of-type(1) + i
REMOVE: section:nth-of-type(2) > i:nth-of-type(2) + span
INSERT: section:nth-of-type(2) > button + i
REMOVE: section:nth-of-type(2) > i:nth-of-type(1) + span
INSERT: section:nth-of-type(2) > i:nth-of-type(1) > b
INSERT: section:nth-of-type(1) > i:nth-of-type(1) + i
REMOVE: section:nth-of-type(1) > i:nth-of-type(2) + span
INSERT: section:nth-of-type(1) > button + i
REMOVE: section:nth-of-type(1) > i:nth-of-type(1) + span
INSERT: section:nth-of-type(1) > i:nth-of-type(1) > b
UPDATE: section:nth-of-type(2) > i:nth-of-type(2)::text " " => "r1"
UPDATE: section:nth-of-type(2) > i:nth-of-type(1) > b::text@2 "" => "c"
UPDATE: section:nth-of-type(2) > i:nth-of-type(1) > b::text@0 "" => "r1"
UPDATE: section:nth-of-type(1) > i:nth-of-type(2)::text " " => "r3"
UPDATE: section:nth-of-type(1) > i:nth-of-type(1) > b::text@2 "" => "c"
UPDATE: section:nth-of-type(1) > i:nth-of-type(1) > b::text@0 "" => "r3"
```

# Update
```js
d.querySelectorAll("section > *:not(button)").forEach((e) =>
e.click(),
  );
```
## Console
```
LOG "direct" "r3"
LOG "direct" "r1"
```

# Update `{"label":"d","tag":"i","rows":[{"id":2,"label":"r2"},{"id":3,"label":"r3"},{"id":1,"label":"r1"},{"id":4,"label":"r4"}]}`
```html
<section>
  <button>
    clear
  </button>
  <i>
    <b>
      r2d
    </b>
  </i>
  <i>
    r2
  </i>
</section>
<section>
  <button>
    clear
  </button>
  <i>
    <b>
      r3d
    </b>
  </i>
  <i>
    r3
  </i>
</section>
<section>
  <button>
    clear
  </button>
  <i>
    <b>
      r1d
    </b>
  </i>
  <i>
    r1
  </i>
</section>
<section>
  <button>
    clear
  </button>
  <i>
    <b>
      r4d
    </b>
  </i>
  <i>
    r4
  </i>
</section>
```
## Change
```
INSERT: section:nth-of-type(3) + section
INSERT: section
INSERT: section:nth-of-type(1) > button + i
INSERT: section:nth-of-type(1) > i:nth-of-type(1) > b
UPDATE: section:nth-of-type(1) > i:nth-of-type(1) > b::text@0 "" => "r2"
UPDATE: section:nth-of-type(1) > i:nth-of-type(1) > b::text@2 "" => "d"
INSERT: section:nth-of-type(1) > i:nth-of-type(1) + i
UPDATE: section:nth-of-type(1) > i:nth-of-type(2)::text " " => "r2"
INSERT: section:nth-of-type(4) > button + i
INSERT: section:nth-of-type(4) > i:nth-of-type(1) > b
UPDATE: section:nth-of-type(4) > i:nth-of-type(1) > b::text@0 "" => "r4"
UPDATE: section:nth-of-type(4) > i:nth-of-type(1) > b::text@2 "" => "d"
INSERT: section:nth-of-type(4) > i:nth-of-type(1) + i
UPDATE: section:nth-of-type(4) > i:nth-of-type(2)::text " " => "r4"
UPDATE: section:nth-of-type(3) > i:nth-of-type(1) > b::text@2 "c" => "d"
UPDATE: section:nth-of-type(2) > i:nth-of-type(1) > b::text@2 "c" => "d"
```

# Update
```js
d.querySelectorAll("section > *:not(button)").forEach((e) =>
e.click(),
  );
```
## Console
```
LOG "direct" "r2"
LOG "direct" "r3"
LOG "direct" "r1"
LOG "direct" "r4"
```

# Update `{"label":"e","tag":"b","rows":[]}`
## Change
```
REMOVE: section
REMOVE: section
REMOVE: section
REMOVE: section
```

# Update `{"label":"f","tag":"b","rows":[{"id":5,"label":"r5"}]}`
```html
<section>
  <button>
    clear
  </button>
  <b>
    <b>
      r5f
    </b>
  </b>
  <b>
    r5
  </b>
</section>
```
## Change
```
INSERT: section
INSERT: section > button + b
INSERT: section > b:nth-of-type(1) > b
UPDATE: section > b:nth-of-type(1) > b::text@0 "" => "r5"
UPDATE: section > b:nth-of-type(1) > b::text@2 "" => "f"
INSERT: section > b:nth-of-type(1) + b
UPDATE: section > b:nth-of-type(2)::text " " => "r5"
```

# Update
```js
d.querySelectorAll("section > *:not(button)").forEach((e) =>
e.click(),
  );
```
## Console
```
LOG "direct" "r5"
```
