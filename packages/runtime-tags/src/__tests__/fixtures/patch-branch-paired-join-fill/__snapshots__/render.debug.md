# Render `{"show":true,"x":"x1"}`
```html
<p>
  x1a0
</p>
<p>
  y0b0
</p>
<em>
  x1ay0b
</em>
<button>
  +
</button>
<p>
  y0a0
</p>
<p>
  x1b0
</p>
<em>
  y0ax1b
</em>
<button>
  +
</button>
<button>
  y
</button>
```

# Update
```js
document.querySelector(sel).click();
```
```html
<p>
  x1a0
</p>
<p>
  y0!b0
</p>
<em>
  x1ay0!b
</em>
<button>
  +
</button>
<p>
  y0!a0
</p>
<p>
  x1b0
</p>
<em>
  y0!ax1b
</em>
<button>
  +
</button>
<button>
  y
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "y0b0" => "y0!b0"
UPDATE: em:nth-of-type(1)::text "x1ay0b" => "x1ay0!b"
UPDATE: p:nth-of-type(3)::text "y0a0" => "y0!a0"
UPDATE: em:nth-of-type(2)::text "y0ax1b" => "y0!ax1b"
```

# Update `{"show":true,"x":"x2"}`
```html
<p>
  x2a0
</p>
<p>
  y0!b0
</p>
<em>
  x2ay0!b
</em>
<button>
  +
</button>
<p>
  y0!a0
</p>
<p>
  x2b0
</p>
<em>
  y0!ax2b
</em>
<button>
  +
</button>
<button>
  y
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "x1a0" => "x2a0"
UPDATE: em:nth-of-type(1)::text "x1ay0!b" => "x2ay0!b"
UPDATE: p:nth-of-type(4)::text "x1b0" => "x2b0"
UPDATE: em:nth-of-type(2)::text "y0!ax1b" => "y0!ax2b"
```
