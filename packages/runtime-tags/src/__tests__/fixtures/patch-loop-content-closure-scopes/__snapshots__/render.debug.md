# Render `{"panels":[{"id":0,"label":"L0a","text":"T0a"},{"id":1,"label":"L1a","text":"T1a"},{"id":2,"label":"L2a","text":"T2a"}]}`
```html
<div
  class="panel"
>
  <h4>
    L0a
  </h4>
  <div
    class="body"
  >
    <p>
      T0a
    </p>
  </div>
</div>
<div
  class="panel"
>
  <h4>
    L1a
  </h4>
  <div
    class="body"
  >
    <p>
      T1a
    </p>
  </div>
</div>
<div
  class="panel"
>
  <h4>
    L2a
  </h4>
  <div
    class="body"
  >
    <p>
      T2a
    </p>
  </div>
</div>
```

# Update `{"panels":[{"id":0,"label":"L0b","text":"T0b"},{"id":1,"label":"L1b","text":"T1b"},{"id":2,"label":"L2b","text":"T2b"}]}`
```html
<div
  class="panel"
>
  <h4>
    L0b
  </h4>
  <div
    class="body"
  >
    <p>
      T0b
    </p>
  </div>
</div>
<div
  class="panel"
>
  <h4>
    L1b
  </h4>
  <div
    class="body"
  >
    <p>
      T1b
    </p>
  </div>
</div>
<div
  class="panel"
>
  <h4>
    L2b
  </h4>
  <div
    class="body"
  >
    <p>
      T2b
    </p>
  </div>
</div>
```
## Change
```
UPDATE: div:nth-of-type(1) > h4::text "L0a" => "L0b"
UPDATE: div:nth-of-type(1) > div > p::text "T0a" => "T0b"
UPDATE: div:nth-of-type(2) > h4::text "L1a" => "L1b"
UPDATE: div:nth-of-type(2) > div > p::text "T1a" => "T1b"
UPDATE: div:nth-of-type(3) > h4::text "L2a" => "L2b"
UPDATE: div:nth-of-type(3) > div > p::text "T2a" => "T2b"
```
