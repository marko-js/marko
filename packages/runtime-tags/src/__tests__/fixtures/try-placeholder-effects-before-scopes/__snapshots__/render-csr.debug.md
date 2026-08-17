# Render

# Update
```html
<div
  data-status="loading"
>
  <a
    href="#b"
  >
    open b
  </a>
  <section
    class="on"
  >
    A
  </section>
</div>
```
## Change
```
INSERT: div
UPDATE: div[data-status] null => "loading"
INSERT: div > a + .on
UPDATE: .on::text " " => "A"
UPDATE: .on[class] null => "on"
```
## Console
```
LOG "shell mounted" "loading"
LOG "child mounted" "a"
```

# Update
```html
<div
  data-status="ready"
>
  <a
    href="#b"
  >
    open b
  </a>
  <section
    class="on"
  >
    A
  </section>
</div>
```
## Change
```
INSERT: div
REMOVE: div + div
UPDATE: div[data-status] null => "ready"
INSERT: div > a + .on
UPDATE: .on::text " " => "A"
UPDATE: .on[class] null => "on"
```
## Console
```
LOG "child destroyed" "a"
LOG "shell destroyed" "loading"
LOG "shell mounted" "ready"
LOG "child mounted" "a"
```

# Update
```js
document.querySelector("a").click();
```
```html
<div
  data-status="ready"
>
  <a
    href="#b"
  >
    open b
  </a>
  <section
    class="off"
  >
    A
  </section>
  <section
    class="on"
  >
    B
  </section>
</div>
```
## Change
```
UPDATE: .off[class] "on" => "off"
INSERT: .off + .on
UPDATE: .on::text " " => "B"
UPDATE: .on[class] null => "on"
```
## Console
```
LOG "child mounted" "b"
```
