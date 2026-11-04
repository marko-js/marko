# Render `{"label":"a"}`
```html
<div>
  <em>
    static a
  </em>
</div>
```

# Update
```html
<div>
  <em>
    static a
  </em>
</div>
<section>
  <em>
    static a
  </em>
</section>
```
## Change
```
INSERT: div + section
INSERT: section > em
INSERT: section > em::text("static ")
INSERT: section > em::text@0 + ::text("a")
```

# Update `{"label":"b"}`
```html
<div>
  <em>
    static b
  </em>
</div>
<section>
  <em>
    static b
  </em>
</section>
```
## Change
```
UPDATE: div > em::text@7 "a" => "b"
UPDATE: section > em::text@7 "a" => "b"
```
