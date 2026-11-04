# Render `{"show":false,"label":"a","tag":"span"}`

# Update `{"show":true,"label":"b","tag":"span"}`
```html
<section>
  <button>
    clear
  </button>
  <section>
    <button>
      clear
    </button>
    <span>
      <b>
        b!
      </b>
    </span>
    <span>
      <i>
        b
      </i>
    </span>
  </section>
</section>
```
## Change
```
INSERT: section
INSERT: section > section > button + span
INSERT: section > section > span:nth-of-type(1) > b
INSERT: section > section > span:nth-of-type(1) + span
INSERT: section > section > span:nth-of-type(2) > i
UPDATE: section > section > span:nth-of-type(1) > b::text " " => "b!"
UPDATE: section > section > span:nth-of-type(2) > i::text " " => "b"
```

# Update `{"show":true,"label":"c","tag":"i"}`
```html
<section>
  <button>
    clear
  </button>
  <section>
    <button>
      clear
    </button>
    <i>
      <b>
        c!
      </b>
    </i>
    <i>
      <i>
        c
      </i>
    </i>
  </section>
</section>
```
## Change
```
INSERT: section > section > button + i
REMOVE: section > section > i:nth-of-type(1) + span
INSERT: section > section > i:nth-of-type(1) > b
INSERT: section > section > i:nth-of-type(1) + i
REMOVE: section > section > i:nth-of-type(2) + span
INSERT: section > section > i:nth-of-type(2) > i
UPDATE: section > section > i:nth-of-type(1) > b::text " " => "c!"
UPDATE: section > section > i:nth-of-type(2) > i::text " " => "c"
```
