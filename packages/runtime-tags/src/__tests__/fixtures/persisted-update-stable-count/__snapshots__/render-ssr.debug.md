# Render `{"$global":{"persisted":true,"pick":"home"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<nav>
  <a
    class="chip active"
  >
    home
  </a>
  <a
    class="chip"
  >
    tools
  </a>
  <a
    class="chip"
  >
    toys
  </a>
</nav>
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
<nav>
  <a
    class="chip active"
  >
    home
  </a>
  <a
    class="chip"
  >
    tools
  </a>
  <a
    class="chip"
  >
    toys
  </a>
</nav>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"pick":"toys"}}` failed: A persisted update changed a stable <for> loop's item count; persisted pages expected this list to never add or remove items on its own.

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
<nav>
  <a
    class="chip active"
  >
    home
  </a>
  <a
    class="chip"
  >
    tools
  </a>
  <a
    class="chip"
  >
    toys
  </a>
</nav>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update `{"$global":{"persisted":true,"pick":"toys"}}`
```html
<button
  class="count"
>
  clicked 2
</button>
<nav>
  <a
    class="chip"
  >
    home
  </a>
  <a
    class="chip"
  >
    tools
  </a>
  <a
    class="chip active"
  >
    toys
  </a>
</nav>
```
## Change
```
UPDATE: nav > a:nth-of-type(1)[class] "chip active" => "chip"
UPDATE: .chip.active[class] "chip" => "chip active"
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 3
</button>
<nav>
  <a
    class="chip"
  >
    home
  </a>
  <a
    class="chip"
  >
    tools
  </a>
  <a
    class="chip active"
  >
    toys
  </a>
</nav>
```
## Change
```
UPDATE: .count::text@8 "2" => "3"
```
