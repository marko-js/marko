# Render `{"show":false,"label":"a","tag":"span"}`
```html
<p>
  a
</p>
```

# Update `{"show":true,"label":"a label long enough to share","tag":"span"}`
```html
<section>
  <button>
    clear
  </button>
  <span>
    <b>
      a label long enough to share
    </b>
  </span>
</section>
<p>
  a label long enough to share
</p>
```
## Change
```
INSERT: section
UPDATE: p::text "a" => "a label long enough to share"
```

# Update `{"show":true,"label":"another label long enough","tag":"i"}`
```html
<section>
  <button>
    clear
  </button>
  <i>
    <b>
      another label long enough
    </b>
  </i>
</section>
<p>
  another label long enough
</p>
```
## Change
```
INSERT: section > button + i
REMOVE: section > i + span
INSERT: section > i > b
UPDATE: section > i > b::text " " => "another label long enough"
UPDATE: p::text "a label long enough to share" => "another label long enough"
```
