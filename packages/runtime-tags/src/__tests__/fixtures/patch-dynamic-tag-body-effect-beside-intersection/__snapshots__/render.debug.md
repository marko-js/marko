# Render `{"tag":"div","a":"a1","b":"b1"}`
```html
<div>
  <button>
    a10
  </button>
  <p>
    a1b1
  </p>
</div>
```

# Update `{"tag":"div","a":"a2","b":"b1"}`
```html
<div>
  <button>
    a20
  </button>
  <p>
    a2b1
  </p>
</div>
```
## Change
```
UPDATE: div > p::text "a1b1" => "a2b1"
UPDATE: div > button::text "a10" => "a20"
UPDATE: body[data-a] "a1" => "a2"
```

# Update `{"tag":"div","a":"a2","b":"b2"}`
```html
<div>
  <button>
    a20
  </button>
  <p>
    a2b2
  </p>
</div>
```
## Change
```
UPDATE: div > p::text "a2b1" => "a2b2"
```

# Update `{"tag":null,"a":"a3","b":"b3"}`
```html
<button>
  a30
</button>
<p>
  a3b3
</p>
```
## Change
```
INSERT: button, p
REMOVE: p + div
UPDATE: p::text " " => "a3b3"
UPDATE: button::text " " => "a30"
UPDATE: body[data-a] "a2" => "a3"
```
