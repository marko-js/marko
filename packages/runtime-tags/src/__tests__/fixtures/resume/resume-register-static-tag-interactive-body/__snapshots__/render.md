# Render
```html
<section>
  <button
    id="inc"
  >
    0
  </button>
  <span
    class="inner"
  >
    0
  </span>
  <span
    class="inner"
  >
    0
  </span>
  <button
    id="toggle"
  >
    toggle
  </button>
</section>
```

# Update `click("#inc")`
```html
<section>
  <button
    id="inc"
  >
    1
  </button>
  <span
    class="inner"
  >
    1
  </span>
  <span
    class="inner"
  >
    2
  </span>
  <button
    id="toggle"
  >
    toggle
  </button>
</section>
```
## Change
```
UPDATE: #inc::text "0" => "1"
UPDATE: section > span:nth-of-type(1)::text "0" => "1"
UPDATE: section > span:nth-of-type(2)::text "0" => "2"
```

# Update `click("#toggle")`
```html
<section>
  <button
    id="inc"
  >
    1
  </button>
  <button
    id="toggle"
  >
    toggle
  </button>
</section>
```
## Change
```
REMOVE: #inc + span
REMOVE: #inc + span
```

# Update `click("#inc")`
```html
<section>
  <button
    id="inc"
  >
    2
  </button>
  <button
    id="toggle"
  >
    toggle
  </button>
</section>
```
## Change
```
UPDATE: #inc::text "1" => "2"
```

# Update `click("#toggle")`
```html
<section>
  <button
    id="inc"
  >
    2
  </button>
  <span
    class="inner"
  >
    2
  </span>
  <span
    class="inner"
  >
    4
  </span>
  <button
    id="toggle"
  >
    toggle
  </button>
</section>
```
## Change
```
INSERT: #inc + span
INSERT: section > span:nth-of-type(1) + span
UPDATE: section > span:nth-of-type(1)::text " " => "2"
UPDATE: section > span:nth-of-type(2)::text " " => "4"
```
