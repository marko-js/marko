# Render `{"label":"New","tone":"info","panel":{"title":"Shipping","body":"Ships in 2 days.","expanded":true},"name":"alerts","$global":{"persisted":true}}`
```html
<button>
  clicked 0
</button>
<span
  class="badge info"
  title="tone: info"
>
  New
</span>
<details
  open=""
>
  <summary>
    Shipping
  </summary>
  <p>
    Ships in 2 days.
  </p>
</details>
<button
  class="toggle"
>
  off
</button>
<em>
  alerts
</em>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  clicked 1
</button>
<span
  class="badge info"
  title="tone: info"
>
  New
</span>
<details
  open=""
>
  <summary>
    Shipping
  </summary>
  <p>
    Ships in 2 days.
  </p>
</details>
<button
  class="toggle"
>
  off
</button>
<em>
  alerts
</em>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@8 "0" => "1"
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<button>
  clicked 1
</button>
<span
  class="badge info"
  title="tone: info"
>
  New
</span>
<details
  open=""
>
  <summary>
    Shipping
  </summary>
  <p>
    Ships in 2 days.
  </p>
</details>
<button
  class="toggle"
>
  on
</button>
<em>
  alerts
</em>
```
## Change
```
UPDATE: .toggle::text "off" => "on"
```

# Update `{"label":"Sale","tone":"warn","panel":{"title":"Returns","body":"Free for 30 days.","expanded":false},"name":"digest","$global":{"persisted":true}}`
```html
<button>
  clicked 1
</button>
<span
  class="badge warn"
  title="tone: warn"
>
  Sale
</span>
<details>
  <summary>
    Returns
  </summary>
  <p>
    Free for 30 days.
  </p>
</details>
<button
  class="toggle"
>
  on
</button>
<em>
  digest
</em>
```
## Change
```
INSERT: button:nth-of-type(1) + .badge.warn
REMOVE: .badge.warn + span
UPDATE: details[open] "" => null
UPDATE: details > summary::text "Shipping" => "Returns"
UPDATE: details > p::text "Ships in 2 days." => "Free for 30 days."
UPDATE: em::text "alerts" => "digest"
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<button>
  clicked 1
</button>
<span
  class="badge warn"
  title="tone: warn"
>
  Sale
</span>
<details>
  <summary>
    Returns
  </summary>
  <p>
    Free for 30 days.
  </p>
</details>
<button
  class="toggle"
>
  off
</button>
<em>
  digest
</em>
```
## Change
```
UPDATE: .toggle::text "on" => "off"
```

# Update update frame 1 of 2

# Update `{"label":"New","tone":"info","panel":{"title":"Shipping","body":"Ships in 2 days.","expanded":true},"name":"alerts","$global":{"persisted":true}}`
```html
<button>
  clicked 1
</button>
<span
  class="badge info"
  title="tone: info"
>
  New
</span>
<details
  open=""
>
  <summary>
    Shipping
  </summary>
  <p>
    Ships in 2 days.
  </p>
</details>
<button
  class="toggle"
>
  off
</button>
<em>
  alerts
</em>
```
## Change
```
INSERT: button:nth-of-type(1) + .badge.info
REMOVE: .badge.info + span
UPDATE: details[open] null => ""
UPDATE: details > summary::text "Returns" => "Shipping"
UPDATE: details > p::text "Free for 30 days." => "Ships in 2 days."
UPDATE: em::text "digest" => "alerts"
```
