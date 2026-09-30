# Render
```html
<button>
  Inc
</button>
<div>
  <div>
    <div>
      1.2
    </div>
  </div>
</div>
```

# Update `click("button")`
```html
<button>
  Inc
</button>
<div>
  <div>
    <div>
      2.2
    </div>
  </div>
</div>
```
## Change
```
UPDATE: div > div > div::text@0 "1" => "2"
```

# Update `click("button")`
```html
<button>
  Inc
</button>
<div>
  <div>
    <div>
      3.2
    </div>
  </div>
</div>
```
## Change
```
UPDATE: div > div > div::text@0 "2" => "3"
```

# Update `click("button")`
```html
<button>
  Inc
</button>
<div>
  <div>
    <div>
      4.2
    </div>
  </div>
</div>
```
## Change
```
UPDATE: div > div > div::text@0 "3" => "4"
```
