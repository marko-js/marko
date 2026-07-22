# Render `{"$global":{"persisted":true,"view":"home"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <p
    class="home"
  >
    welcome home
  </p>
</section>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <p
    class="home"
  >
    welcome home
  </p>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"dashboard","user":"ada","range":"day","focus":"views","admin":false,"seed":5,"step":2,"serializedGlobals":{"seed":true,"step":true}}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <h2
    class="greeting"
  >
    hello ada
  </h2>
  <button
    class="bump"
  >
    tally 
  </button>
  <button
    class="widget"
  >
    pro clicked 
  </button>
  <ul
    class="metrics"
  >
    <li
      class="focus"
    >
      views: 10
    </li>
    <li>
      clicks: 3
    </li>
  </ul>
</section>
```
## Change
```
INSERT: section > :is(.greeting, .bump, .widget, .metrics)
REMOVE: section > p
UPDATE: .greeting::text " " => "hello ada"
UPDATE: .widget::text@0 "" => "pro"
INSERT: .metrics > :is(.focus, li)
```

# Update
```js
document.querySelector("button.widget").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <h2
    class="greeting"
  >
    hello ada
  </h2>
  <button
    class="bump"
  >
    tally 
  </button>
  <button
    class="widget"
  >
    pro clicked 1
  </button>
  <ul
    class="metrics"
  >
    <li
      class="focus"
    >
      views: 10
    </li>
    <li>
      clicks: 3
    </li>
  </ul>
</section>
```
## Change
```
UPDATE: .widget::text@12 "" => "1"
```

# Update
```js
document.querySelector("button.bump").click();
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<aside>
  <button
    class="toggle"
  >
    collapse
  </button>
</aside>
<section>
  <h2
    class="greeting"
  >
    hello ada
  </h2>
  <button
    class="bump"
  >
    tally 
  </button>
  <button
    class="widget"
  >
    pro clicked 1
  </button>
  <ul
    class="metrics"
  >
    <li
      class="focus"
    >
      views: 10
    </li>
    <li>
      clicks: 3
    </li>
  </ul>
</section>
```
## Change
```
UPDATE: .toggle::text "expand" => "collapse"
```

# Update `{"$global":{"persisted":true,"view":"dashboard","user":"grace","range":"week","focus":"clicks","admin":true,"seed":5,"step":2,"serializedGlobals":{"seed":true,"step":true}}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<aside>
  <button
    class="toggle"
  >
    collapse
  </button>
</aside>
<section>
  <h2
    class="greeting"
  >
    hello grace
  </h2>
  <button
    class="bump"
  >
    tally 
  </button>
  <button
    class="widget"
  >
    free clicked 1
  </button>
  <ul
    class="metrics"
  >
    <li>
      views: 70
    </li>
    <li
      class="focus"
    >
      clicks: 21
    </li>
    <li>
      sales: 7
    </li>
  </ul>
  <p
    class="admin"
  >
    admin tools enabled
  </p>
</section>
```
## Change
```
UPDATE: .greeting::text "hello ada" => "hello grace"
UPDATE: .widget::text@0 "pro" => "free"
INSERT: .metrics > :is(li, .focus, li)
REMOVE: .metrics > li:nth-of-type(3) + .focus
REMOVE: .metrics > li:nth-of-type(3) + li
INSERT: .metrics + .admin
```

# Update
```js
document.querySelector("button.widget").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<aside>
  <button
    class="toggle"
  >
    collapse
  </button>
</aside>
<section>
  <h2
    class="greeting"
  >
    hello grace
  </h2>
  <button
    class="bump"
  >
    tally 
  </button>
  <button
    class="widget"
  >
    free clicked 2
  </button>
  <ul
    class="metrics"
  >
    <li>
      views: 70
    </li>
    <li
      class="focus"
    >
      clicks: 21
    </li>
    <li>
      sales: 7
    </li>
  </ul>
  <p
    class="admin"
  >
    admin tools enabled
  </p>
</section>
```
## Change
```
UPDATE: .widget::text@13 "1" => "2"
```

# Update
```js
document.querySelector("button.bump").click();
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"home"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<aside>
  <button
    class="toggle"
  >
    collapse
  </button>
</aside>
<section>
  <p
    class="home"
  >
    welcome home
  </p>
</section>
```
## Change
```
INSERT: section > .home
REMOVE: section > h2
REMOVE: section > button
REMOVE: section > button
REMOVE: section > ul
REMOVE: section > p
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<aside>
  <button
    class="toggle"
  >
    collapse
  </button>
</aside>
<section>
  <p
    class="home"
  >
    welcome home
  </p>
</section>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <p
    class="home"
  >
    welcome home
  </p>
</section>
```
## Change
```
UPDATE: .toggle::text "collapse" => "expand"
```
