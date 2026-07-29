# Render `{"heading":"Shipping","tone":"info","meta":"Ships in 2 days.","flagged":false,"widget":"alerts","$global":{"persisted":true}}`
```html
<button
  class="bump"
>
  clicked 0
</button>
<section
  class="card"
>
  <span
    class="badge info"
  >
    Shipping
  </span>
  <h2>
    Shipping
  </h2>
  <p
    class="meta"
  >
    Ships in 2 days.
  </p>
</section>
<div
  class="widget"
>
  <em>
    alerts
  </em>
  <button
    class="counter"
  >
    0
  </button>
</div>
```

# Update
```js
document.querySelector("button.bump").click();
```
```html
<button
  class="bump"
>
  clicked 1
</button>
<section
  class="card"
>
  <span
    class="badge info"
  >
    Shipping
  </span>
  <h2>
    Shipping
  </h2>
  <p
    class="meta"
  >
    Ships in 2 days.
  </p>
</section>
<div
  class="widget"
>
  <em>
    alerts
  </em>
  <button
    class="counter"
  >
    0
  </button>
</div>
```
## Change
```
UPDATE: .bump::text@8 "0" => "1"
```

# Update
```js
document.querySelector("button.counter").click();
```
```html
<button
  class="bump"
>
  clicked 1
</button>
<section
  class="card"
>
  <span
    class="badge info"
  >
    Shipping
  </span>
  <h2>
    Shipping
  </h2>
  <p
    class="meta"
  >
    Ships in 2 days.
  </p>
</section>
<div
  class="widget"
>
  <em>
    alerts
  </em>
  <button
    class="counter"
  >
    1
  </button>
</div>
```
## Change
```
UPDATE: .counter::text "0" => "1"
```

# Update `{"heading":"Returns","tone":"warn","meta":"Free for 30 days.","flagged":true,"widget":"digest","$global":{"persisted":true}}`
```html
<button
  class="bump"
>
  clicked 1
</button>
<section
  class="card"
>
  <span
    class="badge warn"
  >
    Returns
  </span>
  <h2>
    Returns
  </h2>
  <p
    class="meta flagged"
  >
    Free for 30 days.
  </p>
</section>
<div
  class="widget"
>
  <em>
    digest
  </em>
  <button
    class="counter"
  >
    1
  </button>
</div>
```
## Change
```
INSERT: .bump + .card
REMOVE: .card + .card
UPDATE: .widget > em::text "alerts" => "digest"
```

# Update
```js
document.querySelector("button.counter").click();
```
```html
<button
  class="bump"
>
  clicked 1
</button>
<section
  class="card"
>
  <span
    class="badge warn"
  >
    Returns
  </span>
  <h2>
    Returns
  </h2>
  <p
    class="meta flagged"
  >
    Free for 30 days.
  </p>
</section>
<div
  class="widget"
>
  <em>
    digest
  </em>
  <button
    class="counter"
  >
    2
  </button>
</div>
```
## Change
```
UPDATE: .counter::text "1" => "2"
```

# Update update frame 1 of 2

# Update `{"heading":"Shipping","tone":"info","meta":"Ships in 2 days.","flagged":false,"widget":"alerts","$global":{"persisted":true}}`
```html
<button
  class="bump"
>
  clicked 1
</button>
<section
  class="card"
>
  <span
    class="badge info"
  >
    Shipping
  </span>
  <h2>
    Shipping
  </h2>
  <p
    class="meta"
  >
    Ships in 2 days.
  </p>
</section>
<div
  class="widget"
>
  <em>
    alerts
  </em>
  <button
    class="counter"
  >
    2
  </button>
</div>
```
## Change
```
INSERT: .bump + .card
REMOVE: .card + .card
UPDATE: .widget > em::text "digest" => "alerts"
```
