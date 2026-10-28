# Render `{"panels":[{"id":0,"text":"T0a"},{"id":1,"text":"T1a"}]}`
```html
<button>
  toggle
</button>
<div
  class="panel"
>
  <p>
    T0a
  </p>
</div>
<div
  class="panel"
>
  <p>
    T1a
  </p>
</div>
```

# Update `{"panels":[{"id":0,"text":"T0b"},{"id":1,"text":"T1b"}]}`
```html
<button>
  toggle
</button>
<div
  class="panel"
>
  <p>
    T0b
  </p>
</div>
<div
  class="panel"
>
  <p>
    T1b
  </p>
</div>
```
## Change
```
UPDATE: div:nth-of-type(1) > p::text "T0a" => "T0b"
UPDATE: div:nth-of-type(2) > p::text "T1a" => "T1b"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div
  class="panel"
/>
<div
  class="panel"
/>
```
## Change
```
REMOVE: div:nth-of-type(1) > p
REMOVE: div:nth-of-type(2) > p
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div
  class="panel"
>
  <p>
    T0b
  </p>
</div>
<div
  class="panel"
>
  <p>
    T1b
  </p>
</div>
```
## Change
```
INSERT: div:nth-of-type(1) > p
INSERT: div:nth-of-type(2) > p
UPDATE: div:nth-of-type(1) > p::text " " => "T0b"
UPDATE: div:nth-of-type(2) > p::text " " => "T1b"
```
