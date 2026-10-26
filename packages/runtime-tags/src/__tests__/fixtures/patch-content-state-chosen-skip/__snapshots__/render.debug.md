# Render `{"b":"b1"}`
```html
<button>
  toggle
</button>
<section>
  <strong>
    two b1
  </strong>
</section>
<section
  class="b1"
>
  <strong>
    two b1
  </strong>
</section>
<section
  class="b1"
  id="partial"
>
  <strong>
    two b1
  </strong>
</section>
```
## Console
```
LOG "b1: 3 content renders"
```

# Update `{"b":"b2"}`
```html
<button>
  toggle
</button>
<section>
  <strong>
    two b2
  </strong>
</section>
<section
  class="b2"
>
  <strong>
    two b2
  </strong>
</section>
<section
  class="b2"
  id="partial"
>
  <strong>
    two b2
  </strong>
</section>
```
## Change
```
UPDATE: section:nth-of-type(2)[class] "b1" => "b2"
UPDATE: #partial[class] "b1" => "b2"
UPDATE: section:nth-of-type(1) > strong::text@4 "b1" => "b2"
UPDATE: section:nth-of-type(2) > strong::text@4 "b1" => "b2"
UPDATE: #partial > strong::text@4 "b1" => "b2"
```
## Console
```
LOG "b2: 0 content renders"
```

# Update `{"b":"b3"}`
```html
<button>
  toggle
</button>
<section>
  <strong>
    two b3
  </strong>
</section>
<section
  class="b3"
>
  <strong>
    two b3
  </strong>
</section>
<section
  class="b3"
  id="partial"
>
  <strong>
    two b3
  </strong>
</section>
```
## Change
```
UPDATE: section:nth-of-type(2)[class] "b2" => "b3"
UPDATE: #partial[class] "b2" => "b3"
UPDATE: section:nth-of-type(1) > strong::text@4 "b2" => "b3"
UPDATE: section:nth-of-type(2) > strong::text@4 "b2" => "b3"
UPDATE: #partial > strong::text@4 "b2" => "b3"
```
## Console
```
LOG "b3: 0 content renders"
```
