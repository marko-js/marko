# Render `{"$global":{"persisted":true,"lane":"active","day":"mon"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ol
  class="lane"
>
  <li>
    <em>
      TASK_ROW_MARKUP
    </em>
    server-only task sentinel
    <span
      class="name"
    >
      brew
    </span>
    : 
    <span
      class="eta"
    >
      5m
    </span>
  </li>
  <li>
    <em>
      TASK_ROW_MARKUP
    </em>
    server-only task sentinel
    <span
      class="name"
    >
      grind
    </span>
    : 
    <span
      class="eta"
    >
      2m
    </span>
  </li>
</ol>
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<ol
  class="lane"
>
  <li>
    <em>
      TASK_ROW_MARKUP
    </em>
    server-only task sentinel
    <span
      class="name"
    >
      brew
    </span>
    : 
    <span
      class="eta"
    >
      5m
    </span>
  </li>
  <li>
    <em>
      TASK_ROW_MARKUP
    </em>
    server-only task sentinel
    <span
      class="name"
    >
      grind
    </span>
    : 
    <span
      class="eta"
    >
      2m
    </span>
  </li>
</ol>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"lane":"active","day":"tue"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<ol
  class="lane"
>
  <li>
    <em>
      TASK_ROW_MARKUP
    </em>
    server-only task sentinel
    <span
      class="name"
    >
      roast
    </span>
    : 
    <span
      class="eta"
    >
      45m
    </span>
  </li>
  <li>
    <em>
      TASK_ROW_MARKUP
    </em>
    server-only task sentinel
    <span
      class="name"
    >
      grind
    </span>
    : 
    <span
      class="eta"
    >
      3m
    </span>
  </li>
  <li>
    <em>
      TASK_ROW_MARKUP
    </em>
    server-only task sentinel
    <span
      class="name"
    >
      brew
    </span>
    : 
    <span
      class="eta"
    >
      6m
    </span>
  </li>
</ol>
```
## Change
```
UPDATE: .lane > li:nth-of-type(2) > span:nth-of-type(2)::text "2m" => "3m"
UPDATE: .lane > li:nth-of-type(3) > span:nth-of-type(2)::text "5m" => "6m"
INSERT: .lane > li
REMOVE: .lane > li:nth-of-type(3) + li
INSERT: .lane > li:nth-of-type(1) + li
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<ol
  class="lane"
>
  <li>
    <em>
      TASK_ROW_MARKUP
    </em>
    server-only task sentinel
    <span
      class="name"
    >
      roast
    </span>
    : 
    <span
      class="eta"
    >
      45m
    </span>
  </li>
  <li>
    <em>
      TASK_ROW_MARKUP
    </em>
    server-only task sentinel
    <span
      class="name"
    >
      grind
    </span>
    : 
    <span
      class="eta"
    >
      3m
    </span>
  </li>
  <li>
    <em>
      TASK_ROW_MARKUP
    </em>
    server-only task sentinel
    <span
      class="name"
    >
      brew
    </span>
    : 
    <span
      class="eta"
    >
      6m
    </span>
  </li>
</ol>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update `{"$global":{"persisted":true,"lane":"active","day":"wed"}}`
```html
<button
  class="count"
>
  clicked 2
</button>
<ol
  class="lane"
>
  <li>
    <em>
      TASK_ROW_MARKUP
    </em>
    server-only task sentinel
    <span
      class="name"
    >
      grind
    </span>
    : 
    <span
      class="eta"
    >
      4m
    </span>
  </li>
  <li>
    <em>
      TASK_ROW_MARKUP
    </em>
    server-only task sentinel
    <span
      class="name"
    >
      brew
    </span>
    : 
    <span
      class="eta"
    >
      7m
    </span>
  </li>
</ol>
```
## Change
```
UPDATE: .lane > li:nth-of-type(1) > span:nth-of-type(2)::text "3m" => "4m"
UPDATE: .lane > li:nth-of-type(2) > span:nth-of-type(2)::text "6m" => "7m"
REMOVE: .lane > li
```
