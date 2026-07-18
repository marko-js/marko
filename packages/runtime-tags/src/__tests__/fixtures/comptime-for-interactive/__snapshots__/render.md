# Render
```html
<section>
  <h2>
    kitchen
  </h2>
  <button>
    on
  </button>
</section>
<section>
  <h2>
    porch
  </h2>
  <button>
    on
  </button>
</section>
```

# Update
```js
container.querySelectorAll("button")[i].click();
```
```html
<section>
  <h2>
    kitchen
  </h2>
  <button>
    off
  </button>
</section>
<section>
  <h2>
    porch
  </h2>
  <button>
    on
  </button>
</section>
```
## Change
```
UPDATE: section:nth-of-type(1) > button::text "on" => "off"
```

# Update
```js
container.querySelectorAll("button")[i].click();
```
```html
<section>
  <h2>
    kitchen
  </h2>
  <button>
    off
  </button>
</section>
<section>
  <h2>
    porch
  </h2>
  <button>
    off
  </button>
</section>
```
## Change
```
UPDATE: section:nth-of-type(2) > button::text "on" => "off"
```

# Update
```js
container.querySelectorAll("button")[i].click();
```
```html
<section>
  <h2>
    kitchen
  </h2>
  <button>
    on
  </button>
</section>
<section>
  <h2>
    porch
  </h2>
  <button>
    off
  </button>
</section>
```
## Change
```
UPDATE: section:nth-of-type(1) > button::text "off" => "on"
```
