# Render `{"value":1}`
```html
<button>
  Inc
</button>
<div
  class="a"
/>
<div
  class="b"
/>
```

# Update
```html
<button>
  Inc
</button>
<div
  class="a"
>
  <span
    class="a"
  >
     
  </span>
</div>
<div
  class="b"
>
  <span
    class="b"
  >
     
  </span>
</div>
```
## Change
```
INSERT: div:nth-of-type(1) > span
INSERT: div:nth-of-type(2) > span
```

# Update
```html
<button>
  Inc
</button>
<div
  class="a"
>
  <span
    class="a"
  >
    1
  </span>
</div>
<div
  class="b"
>
  <span
    class="b"
  >
    2
  </span>
</div>
```
## Change
```
UPDATE: div:nth-of-type(1) > span::text " " => "1"
UPDATE: div:nth-of-type(2) > span::text " " => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<div
  class="a"
>
  <span
    class="a"
  >
    2
  </span>
</div>
<div
  class="b"
>
  <span
    class="b"
  >
    4
  </span>
</div>
```
## Change
```
UPDATE: div:nth-of-type(1) > span::text "1" => "2"
UPDATE: div:nth-of-type(2) > span::text "2" => "4"
```
