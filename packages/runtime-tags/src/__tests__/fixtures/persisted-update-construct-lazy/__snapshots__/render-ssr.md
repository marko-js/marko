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
       
    </span>
    <button
      class="gadget__tap"
    >
      taps 
    </button>
  </div>
</section>
```
## Change
```
INSERT: section > .title
REMOVE: section > p
UPDATE: .title::text " " => "Widget One"
INSERT: .title + .gadget
```

# Update
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
UPDATE: .gadget__tap::text@5 "" => "0"
UPDATE: .gadget__label::text " " => "alpha"
```

# Update
```js
_strict.default.equal(document.querySelector(".gadget__tap").textContent, "taps 0");
```

# Update
```js
document.querySelector(".gadget__tap").click();
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
INSERT: p + .title
REMOVE: section > p
UPDATE: .title::text " " => "Widget Two"
INSERT: .title + .gadget
UPDATE: .gadget__tap::text@5 "" => "0"
UPDATE: .gadget__label::text " " => "beta"
```

# Update
```js
document.querySelector(".gadget__tap").click();
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
