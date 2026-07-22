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
document.querySelector("button.count").click();
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
UPDATE: .widget::text@8 "" => "sales notes"
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
## Console
```
ERROR "navigate() document fallback: Error: blockquote"
```

# Update
```js
document.querySelector("button.count").click();
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
  <p
    class="widget"
  >
    widget: sales notes
  </p>
</section>
```
## Change
```
UPDATE: .count::text@8 "2" => "3"
```

# Update `{"$global":{"persisted":true,"view":"plain","topic":"trends"}}`
## Console
```
ERROR "navigate() document fallback: Error: blockquote"
```
