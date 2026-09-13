# Render `{"show":false,"down":false}`

# Update `{"show":true,"down":false}`
```html
<section>
  <h2>
    Panel
  </h2>
  <div
    class="aside"
  >
    <span>
      a
    </span>
  </div>
</section>
<section>
  <h2>
    Panel
  </h2>
  <div
    class="aside"
  >
    <span>
      b
    </span>
    <p>
      up
    </p>
  </div>
</section>
```
## Change
```
INSERT: section, section
```

# Update `{"show":true,"down":true}`
```html
<section>
  <h2>
    Panel
  </h2>
  <div
    class="aside"
  >
    <span>
      a
    </span>
  </div>
</section>
<section>
  <h2>
    Panel
  </h2>
  <div
    class="aside"
  >
    <span>
      b
    </span>
    <p>
      down
    </p>
  </div>
</section>
```
## Change
```
UPDATE: section:nth-of-type(1) > div > span::text "a" => "a"
UPDATE: section:nth-of-type(2) > div > span::text "b" => "b"
REMOVE: section:nth-of-type(2) > div > span + p
INSERT: section:nth-of-type(2) > div > span + p
```
