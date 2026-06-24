# Render
```html
<section
  id="wrapper"
>
  <div
    id="message"
  >
    Hello World
  </div>
  <button
    id="class"
  >
    0
  </button>
</section>
```

# Update
```js
container.querySelector("#class").click();
```
```html
<section
  id="wrapper"
>
  <div
    id="message"
  >
    Hello World
  </div>
  <button
    id="class"
  >
    1
  </button>
</section>
```
## Change
```
UPDATE: #class::text "0" => "1"
```

# Update
```js
container.querySelector("#class").click();
```
```html
<section
  id="wrapper"
>
  <div
    id="message"
  >
    Hello World
  </div>
  <button
    id="class"
  >
    2
  </button>
</section>
```
## Change
```
UPDATE: #class::text "1" => "2"
```
