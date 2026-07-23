# Render `{"$global":{"persisted":true}}`
```html
<main>
  <b
    class="widget"
  >
    count 0
  </b>
  <span
    class="static"
  >
    static
  </span>
</main>
```

# Update
```js
document.defaultView.widgetBump();
```
```html
<main>
  <b
    class="widget"
  >
    count 1
  </b>
  <span
    class="static"
  >
    static
  </span>
</main>
```
## Change
```
UPDATE: .widget::text@6 "0" => "1"
```

# Update
```js
_strict.default.equal(widgetText(document), "count 1");
```

# Update `{"$global":{"persisted":true}}`
```html
<main>
  <b
    class="widget"
  >
    count 1
  </b>
  <span
    class="static"
  >
    static
  </span>
</main>
```
## Change
```
INSERT: .widget + .static
REMOVE: .static + .static
```

# Update
```js
_strict.default.equal(widgetText(document), "count 1");
```

# Update
```js
document.defaultView.widgetBump();
```
```html
<main>
  <b
    class="widget"
  >
    count 2
  </b>
  <span
    class="static"
  >
    static
  </span>
</main>
```
## Change
```
UPDATE: .widget::text@6 "1" => "2"
```

# Update
```js
_strict.default.equal(widgetText(document), "count 2");
```
