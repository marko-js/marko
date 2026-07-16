# Render `{"$global":{"persisted":true,"view":"home","title":"","label":""}}`
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
container.querySelector("button.count").click();
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

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"detail","title":"Widget One","label":"alpha"}}`
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
    class="title"
  >
    Widget One
  </h2>
  <div
    class="gadget"
  >
    <span
      class="gadget__label"
    >
      alpha
    </span>
    <button
      class="gadget__tap"
    >
      taps 0
    </button>
  </div>
</section>
```
## Change
```
INSERT: section > :is(.title, .gadget)
REMOVE: section > p
```

# Update
```js
container.querySelector(".gadget__tap").click();
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
    class="title"
  >
    Widget One
  </h2>
  <div
    class="gadget"
  >
    <span
      class="gadget__label"
    >
      alpha
    </span>
    <button
      class="gadget__tap"
    >
      taps 1
    </button>
  </div>
</section>
```
## Change
```
UPDATE: .gadget__tap::text@5 "0" => "1"
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"home","title":"","label":""}}`
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
INSERT: section > .home
REMOVE: section > h2
REMOVE: section > div
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"detail","title":"Widget Two","label":"beta"}}`
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
    class="title"
  >
    Widget Two
  </h2>
  <div
    class="gadget"
  >
    <span
      class="gadget__label"
    >
      beta
    </span>
    <button
      class="gadget__tap"
    >
      taps 0
    </button>
  </div>
</section>
```
## Change
```
INSERT: section > :is(.title, .gadget)
REMOVE: section > p
```

# Update
```js
container.querySelector(".gadget__tap").click();
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
    class="title"
  >
    Widget Two
  </h2>
  <div
    class="gadget"
  >
    <span
      class="gadget__label"
    >
      beta
    </span>
    <button
      class="gadget__tap"
    >
      taps 1
    </button>
  </div>
</section>
```
## Change
```
UPDATE: .gadget__tap::text@5 "0" => "1"
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
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <h2
    class="title"
  >
    Widget Two
  </h2>
  <div
    class="gadget"
  >
    <span
      class="gadget__label"
    >
      beta
    </span>
    <button
      class="gadget__tap"
    >
      taps 1
    </button>
  </div>
</section>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```
