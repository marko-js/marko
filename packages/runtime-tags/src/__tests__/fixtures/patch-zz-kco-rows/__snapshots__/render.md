# Render `{"tag":"span","rows":[]}`

# Update `{"tag":"span","rows":[{"id":1,"label":"a"},{"id":2,"label":"b"}]}`
```html
<section>
  <button>
    clear
  </button>
  <span>
    <b>
      a
    </b>
  </span>
</section>
<section>
  <button>
    clear
  </button>
  <span>
    <b>
      b
    </b>
  </span>
</section>
```
## Change
```
INSERT: section
INSERT: section:nth-of-type(1) + section
INSERT: section:nth-of-type(1) > button + span
INSERT: section:nth-of-type(1) > span > b
UPDATE: section:nth-of-type(1) > span > b::text " " => "a"
INSERT: section:nth-of-type(2) > button + span
INSERT: section:nth-of-type(2) > span > b
UPDATE: section:nth-of-type(2) > span > b::text " " => "b"
```

# Update `{"tag":"i","rows":[{"id":2,"label":"c"},{"id":3,"label":"d"}]}`
```html
<section>
  <button>
    clear
  </button>
  <i>
    <b>
      c
    </b>
  </i>
</section>
<section>
  <button>
    clear
  </button>
  <i>
    <b>
      d
    </b>
  </i>
</section>
```
## Change
```
REMOVE: section
INSERT: section:nth-of-type(1) + section
INSERT: section:nth-of-type(1) > button + i
REMOVE: section:nth-of-type(1) > i + span
INSERT: section:nth-of-type(1) > i > b
UPDATE: section:nth-of-type(1) > i > b::text " " => "c"
INSERT: section:nth-of-type(2) > button + i
INSERT: section:nth-of-type(2) > i > b
UPDATE: section:nth-of-type(2) > i > b::text " " => "d"
```
