# Render `{"$global":{"persisted":true,"view":"plain","topic":"sales"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="shell"
>
  <blockquote
    class="hop"
  >
    plain: sales notes
  </blockquote>
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
<section
  class="shell"
>
  <blockquote
    class="hop"
  >
    plain: sales notes
  </blockquote>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"view":"widget","topic":"sales"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<section
  class="shell"
>
  <p
    class="widget"
  >
    widget: sales notes
  </p>
</section>
```
## Change
```
INSERT: blockquote + .widget
REMOVE: .shell > blockquote
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
<section
  class="shell"
>
  <p
    class="widget"
  >
    widget: sales notes
  </p>
</section>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update `{"$global":{"persisted":true,"view":"plain","topic":"growth"}}`
```html
<button
  class="count"
>
  clicked 2
</button>
<section
  class="shell"
>
  <blockquote
    class="hop"
  >
    plain: growth notes
  </blockquote>
</section>
```
## Change
```
INSERT: .shell > .hop
REMOVE: .shell > p
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
<section
  class="shell"
>
  <blockquote
    class="hop"
  >
    plain: growth notes
  </blockquote>
</section>
```
## Change
```
UPDATE: .count::text@8 "2" => "3"
```

# Update `{"$global":{"persisted":true,"view":"plain","topic":"trends"}}`
