# Render
```html
<div
  style="color:red';content:'a"
/>
<div
  style="background:url(data;color:x)"
/>
<div
  style="-Note:a\\;color:b"
/>
<div
  style="-Frame:4;-Ratio:16"
/>
<div
  style="display:-webkit-box;display:flex"
/>
```

# Update `{"tint":"green"}`
```html
<div
  style="color:green;color:red\";content:\"a"
/>
<div
  style="background:url(\"data;color:green;color:x\")"
/>
<div
  style="-Note:a\\;color:b;color:green"
/>
<div
  style="-Frame:4;-Ratio:16;color:green"
/>
<div
  style="display:-webkit-box;display:flex"
/>
```
## Change
```
UPDATE: div:nth-of-type(1)[style] "content:'a;color:red'" => "content: \"a;color:red\"; color: green;"
UPDATE: div:nth-of-type(2)[style] "background:url(data:image/png;color:x)" => "background: url(\"data:image/png;color:x\"); color: green;"
UPDATE: div:nth-of-type(3)[style] "--note:a\\;color:b" => "--note: a\\;color:b; color: green;"
UPDATE: div:nth-of-type(4)[style] "--ratio: 16:9;--frame: 4:3" => "--ratio: 16:9; --frame: 4:3; color: green;"
```
