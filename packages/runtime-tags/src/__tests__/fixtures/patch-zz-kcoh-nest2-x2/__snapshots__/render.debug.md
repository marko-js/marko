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
    <section>
      <button>
        clear
      </button>
      <span>
        <u>
          b!?b!
        </u>
      </span>
      <span>
        <b>
          b!
        </b>
      </span>
    </section>
  </section>
</section>
```
## Change
```
INSERT: section
```

# Update
```js
d.querySelectorAll("section b, section i, section u").forEach(e => e.click());
```
## Console
```
LOG "b!"
LOG "b!?" "b!"
LOG "b!"
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
    <section>
      <button>
        clear
      </button>
      <i>
        <u>
          c!?c!
        </u>
      </i>
      <i>
        <b>
          c!
        </b>
      </i>
    </section>
  </section>
</section>
```
## Change
```
INSERT: section > section > button + i
REMOVE: section > section > i + span
INSERT: section > section > i > b
UPDATE: section > section > i > b::text " " => "c!"
INSERT: section > section > section > button + i
REMOVE: section > section > section > i:nth-of-type(1) + span
INSERT: section > section > section > i:nth-of-type(1) > u
UPDATE: section > section > section > i:nth-of-type(1) > u::text@0 "" => "c!?"
UPDATE: section > section > section > i:nth-of-type(1) > u::text@3 "" => "c!"
INSERT: section > section > section > i:nth-of-type(1) + i
REMOVE: section > section > section > i:nth-of-type(2) + span
INSERT: section > section > section > i:nth-of-type(2) > b
UPDATE: section > section > section > i:nth-of-type(2) > b::text " " => "c!"
```

# Update
```js
d.querySelectorAll("section b, section i, section u").forEach(e => e.click());
```
## Console
```
LOG "c!"
LOG "c!?" "c!"
LOG "c!"
```
