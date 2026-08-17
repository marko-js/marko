# Render
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
## Console
```
LOG "child mounted" "a"
LOG "shell mounted" "ready" "ready"
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
