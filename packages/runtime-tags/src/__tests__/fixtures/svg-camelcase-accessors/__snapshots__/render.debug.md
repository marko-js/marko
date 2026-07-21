# Render
```html
<svg>
  <lineargradient
    id="grad"
  >
    <stop
      offset="0%"
      stop-color="gold"
    />
  </lineargradient>
  <clippath>
    <rect
      height="10"
      width="10"
    />
  </clippath>
</svg>
<button>
  toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<svg>
  <lineargradient
    id="grad2"
  >
    <stop
      offset="0%"
      stop-color="gold"
    />
  </lineargradient>
  <clippath />
</svg>
<button>
  toggle
</button>
```
## Change
```
UPDATE: #grad2[id] "grad" => "grad2"
REMOVE: svg > clippath > rect
```
