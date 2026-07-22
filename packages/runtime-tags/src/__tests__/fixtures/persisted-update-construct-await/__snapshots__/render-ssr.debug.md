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

# Update update frame 1 of 2
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
  <p
    class="loading"
  >
    crunching numbers…
  </p>
  <p
    class="footer"
  >
    updated today
  </p>
</section>
```
## Change
```
INSERT: section > :is(.greeting, .footer)
REMOVE: section > p
UPDATE: .greeting::text " " => "hello ada"
UPDATE: .footer::text@8 "" => "today"
INSERT: .greeting + .loading
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"reports","user":"ada","range":"day","focus":"views","stamp":"today"}}`
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
    class="widget"
  >
    pro clicked 
  </button>
  <ul
    class="reports"
  >
    <li
      class="focus"
    >
      views: 10
    </li>
  </ul>
  <p
    class="footer"
  >
    updated today
  </p>
</section>
```
## Change
```
INSERT: .greeting + :is(.widget, .reports)
REMOVE: .reports + p
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
    class="widget"
  >
    pro clicked 1
  </button>
  <ul
    class="reports"
  >
    <li
      class="focus"
    >
      views: 10
    </li>
  </ul>
  <p
    class="footer"
  >
    updated today
  </p>
</section>
```
## Change
```
UPDATE: .widget::text@12 "" => "1"
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
    class="widget"
  >
    pro clicked 1
  </button>
  <ul
    class="reports"
  >
    <li
      class="focus"
    >
      views: 10
    </li>
  </ul>
  <p
    class="footer"
  >
    updated today
  </p>
</section>
```
## Change
```
UPDATE: .toggle::text "expand" => "collapse"
```

# Update `{"$global":{"persisted":true,"view":"reports","user":"grace","range":"week","focus":"clicks","stamp":"tomorrow"}}`
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
    class="widget"
  >
    free clicked 1
  </button>
  <ul
    class="reports"
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
    class="footer"
  >
    updated tomorrow
  </p>
</section>
```
## Change
```
UPDATE: .greeting::text "hello ada" => "hello grace"
UPDATE: .footer::text@8 "today" => "tomorrow"
UPDATE: .widget::text@0 "pro" => "free"
INSERT: .reports > :is(li, .focus, li)
REMOVE: .reports > li:nth-of-type(3) + .focus
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
    class="widget"
  >
    free clicked 2
  </button>
  <ul
    class="reports"
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
    class="footer"
  >
    updated tomorrow
  </p>
</section>
```
## Change
```
UPDATE: .widget::text@13 "1" => "2"
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
INSERT: p + .home
REMOVE: section > h2
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
