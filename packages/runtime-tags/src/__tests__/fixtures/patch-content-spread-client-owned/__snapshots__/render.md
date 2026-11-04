# Render `{"b":"b1"}`
```html
<button>
  toggle
</button>
<section>
  <strong>
    b1
  </strong>
</section>
<div
  id="partial"
>
  <em>
    one
  </em>
</div>
```

# Update `{"b":"b2"}`
```html
<button>
  toggle
</button>
<section>
  <strong>
    b2
  </strong>
</section>
<div
  id="partial"
>
  <em>
    one
  </em>
</div>
```
## Change
```
UPDATE: section > strong::text "b1" => "b2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<section>
  <em>
    one
  </em>
</section>
<div
  id="partial"
>
  <strong>
    b2
  </strong>
</div>
```
## Change
```
REMOVE: section > strong
INSERT: section > em
REMOVE: #partial > em
INSERT: #partial > strong
UPDATE: #partial > strong::text " " => "b2"
```

# Update `{"b":"b3"}`
```html
<button>
  toggle
</button>
<section>
  <em>
    one
  </em>
</section>
<div
  id="partial"
>
  <strong>
    b3
  </strong>
</div>
```
## Change
```
UPDATE: #partial > strong::text "b2" => "b3"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<section>
  <strong>
    b3
  </strong>
</section>
<div
  id="partial"
>
  <em>
    one
  </em>
</div>
```
## Change
```
REMOVE: section > em
INSERT: section > strong
REMOVE: #partial > strong
INSERT: #partial > em
UPDATE: section > strong::text " " => "b3"
```
