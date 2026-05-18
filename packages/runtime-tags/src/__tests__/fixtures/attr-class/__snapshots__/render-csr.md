# Render `{"c":true,"d":true}`
```html
<div
  class="a b d"
/>
<div
  class="a b"
/>
<div
  class="a b c"
/>
<div
  class="a b d"
/>
<div
  class="a b"
/>
<div
  class="a b d"
/>
<div
  class="a b d"
  id="test"
>
  Hello
</div>
```

# Update `{"c":false,"d":false}`
```html
<div
  class="a"
/>
<div
  class="a b"
/>
<div
  class="a b c"
/>
<div
  class="a"
/>
<div
  class="a b"
/>
<div
  class="a"
/>
<div
  class="a"
  id="test"
>
  Hello
</div>
```
## Change
```
UPDATE: div:nth-of-type(1)[class] "a b d" => "a"
UPDATE: div:nth-of-type(1)[class] "a d" => "a"
UPDATE: div:nth-of-type(4)[class] "a b d" => "a"
UPDATE: div:nth-of-type(6)[class] "a b d" => "a"
UPDATE: #test[class] "a b d" => "a"
```
