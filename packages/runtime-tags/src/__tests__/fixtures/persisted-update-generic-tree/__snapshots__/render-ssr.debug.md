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
container.querySelector("button.bump").click();
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
container.querySelector("button.counter").click();
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
UPDATE: .card > h2::text "Shipping" => "Returns"
UPDATE: .meta.flagged[class] "meta" => "meta flagged"
UPDATE: .meta.flagged::text "Ships in 2 days." => "Free for 30 days."
UPDATE: .badge.warn[class] "badge info" => "badge warn"
UPDATE: .badge.warn::text "Shipping" => "Returns"
UPDATE: .widget > em::text "alerts" => "digest"
```

# Update
```js
container.querySelector("button.counter").click();
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
UPDATE: .card > h2::text "Returns" => "Shipping"
UPDATE: .meta[class] "meta flagged" => "meta"
UPDATE: .meta::text "Free for 30 days." => "Ships in 2 days."
UPDATE: .badge.info[class] "badge warn" => "badge info"
UPDATE: .badge.info::text "Returns" => "Shipping"
UPDATE: .widget > em::text "digest" => "alerts"
```
