# Render `{"c":true,"d":true,"e":true,"f":false,"g":true,"h":false}`
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
  class="active"
/>
<div
  class="base c d e g"
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

# Update `{"c":false,"d":false,"e":false,"f":false,"g":false,"h":false}`
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
<div />
<div
  class="base"
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
UPDATE: div:nth-of-type(4)[class] "active" => null
UPDATE: div:nth-of-type(1)[class] "a b d" => "a"
UPDATE: div:nth-of-type(1)[class] "a d" => "a"
UPDATE: div:nth-of-type(6)[class] "a b d" => "a"
UPDATE: div:nth-of-type(8)[class] "a b d" => "a"
UPDATE: .base[class] "base c d e g" => "base"
UPDATE: .base[class] "base d e g" => "base"
UPDATE: .base[class] "base e g" => "base"
UPDATE: .base[class] "base g" => "base"
UPDATE: #test[class] "a b d" => "a"
```
