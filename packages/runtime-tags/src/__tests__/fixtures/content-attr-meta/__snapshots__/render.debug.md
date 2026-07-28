# Render
```html
<meta
  content="1200"
  property="og:image:width"
/>
<meta
  content="630"
  property="og:image:height"
/>
<button>
  resize
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<meta
  content="1200"
  property="og:image:width"
/>
<meta
  content="1080"
  property="og:image:height"
/>
<button>
  resize
</button>
```
## Change
```
UPDATE: meta:nth-of-type(2)[content] "630" => "1080"
```
