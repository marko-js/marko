# Render `{"$global":{"persisted":true,"pid":1,"rev":"a","tick":1}}`
```html
<button
  class="clicks"
>
  clicked 0
</button>
<section>
  <p
    class="ph"
  >
    loading detail…
  </p>
</section>
```

# Update
```html
<button
  class="clicks"
>
  clicked 0
</button>
<section>
  <p
    class="detail"
  >
    detail 1: a
  </p>
</section>
```
## Change
```
INSERT: .detail::text("detail ")
INSERT: .detail::text@0 + ::text("1: a")
REMOVE: section > p
INSERT: section > .detail
```

# Update
```js
container.querySelector("button.clicks").click();
```
```html
<button
  class="clicks"
>
  clicked 1
</button>
<section>
  <p
    class="detail"
  >
    detail 1: a
  </p>
</section>
```
## Change
```
UPDATE: .clicks::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"pid":1,"rev":"b","tick":0}}`
```html
<button
  class="clicks"
>
  clicked 1
</button>
<section>
  <p
    class="detail"
  >
    detail 1: b
  </p>
</section>
```
## Change
```
UPDATE: .detail::text@7 "1: a" => "1: b"
```

# Update
```js
container.querySelector("button.clicks").click();
```
```html
<button
  class="clicks"
>
  clicked 2
</button>
<section>
  <p
    class="detail"
  >
    detail 1: b
  </p>
</section>
```
## Change
```
UPDATE: .clicks::text@8 "1" => "2"
```

# Update update frame 1 of 2
```html
<button
  class="clicks"
>
  clicked 2
</button>
<section>
  <p
    class="ph"
  >
    loading detail…
  </p>
</section>
```
## Change
```
REMOVE: section > p
INSERT: section > .ph
```

# Update between frame 1 and 2
```html
<button
  class="clicks"
>
  clicked 3
</button>
<section>
  <p
    class="ph"
  >
    loading detail…
  </p>
</section>
```
## Change
```
UPDATE: .clicks::text@8 "2" => "3"
```

# Update `{"$global":{"persisted":true,"pid":2,"rev":"a","tick":6}}`
```html
<button
  class="clicks"
>
  clicked 3
</button>
<section>
  <p
    class="detail"
  >
    detail 2: a
  </p>
</section>
```
## Change
```
INSERT: section > .detail
REMOVE: .detail + p
```

# Update `{"$global":{"persisted":true,"pid":3,"rev":"a","tick":0}}`
```html
<button
  class="clicks"
>
  clicked 3
</button>
<section>
  <p
    class="detail"
  >
    detail 3: a
  </p>
</section>
```
## Change
```
REMOVE: section > .detail
INSERT: section > .detail
```

# Update
```js
container.querySelector("button.clicks").click();
```
```html
<button
  class="clicks"
>
  clicked 4
</button>
<section>
  <p
    class="detail"
  >
    detail 3: a
  </p>
</section>
```
## Change
```
UPDATE: .clicks::text@8 "3" => "4"
```

# Update `{"$global":{"persisted":true,"pid":3,"rev":"b","tick":0}}`
```html
<button
  class="clicks"
>
  clicked 4
</button>
<section>
  <p
    class="detail"
  >
    detail 3: b
  </p>
</section>
```
## Change
```
UPDATE: .detail::text@7 "3: a" => "3: b"
```
