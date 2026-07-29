# Render `{"$global":{"persisted":true,"mode":"ok"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section />
```

# Update
```html
<button
  class="count"
>
  clicked 0
</button>
<section>
  <p
    class="feed"
  >
    all systems go
  </p>
</section>
```
## Change
```
INSERT: section > .feed
INSERT: .feed::text("all systems go")
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
<section>
  <p
    class="feed"
  >
    all systems go
  </p>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update update frame 1 of 2

# Update `{"$global":{"persisted":true,"mode":"ok2"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<section>
  <p
    class="feed"
  >
    still ok
  </p>
</section>
```
## Change
```
UPDATE: .feed::text "all systems go" => "still ok"
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
<section>
  <p
    class="feed"
  >
    still ok
  </p>
</section>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update `{"$global":{"persisted":true,"mode":"broken"}}` failed: an <await> rejected during a persisted update; async catch delivery is reorder-based and not supported in patch responses yet

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
<section>
  <p
    class="feed"
  >
    still ok
  </p>
</section>
```
## Change
```
UPDATE: .count::text@8 "2" => "3"
```
