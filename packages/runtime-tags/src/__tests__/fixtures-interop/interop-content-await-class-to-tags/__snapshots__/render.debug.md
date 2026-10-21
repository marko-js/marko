# Render

# Update
```html
<div>
  <b>
    hi
  </b>
</div>
<section>
  <b>
    hi
  </b>
</section>
```
## Change
```
INSERT: div
INSERT: div > b
INSERT: div > b::text("hi")
INSERT: div + section
INSERT: section > b
INSERT: section > b::text("hi")
```
