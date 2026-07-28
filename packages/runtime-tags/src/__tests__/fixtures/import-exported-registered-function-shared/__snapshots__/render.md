# Render
```html
<button>
  page
</button>
<div>
  page
</div>
<button>
  panel
</button>
<div>
  panel
</div>
```

# Update
```js
document.querySelectorAll("button").forEach((button) => button.click());
```
```html
<button>
  page
</button>
<div>
  PAGE!
</div>
<button>
  panel
</button>
<div>
  PANEL!
</div>
```
## Change
```
UPDATE: div:nth-of-type(1)::text "page" => "PAGE!"
UPDATE: div:nth-of-type(2)::text "panel" => "PANEL!"
```
