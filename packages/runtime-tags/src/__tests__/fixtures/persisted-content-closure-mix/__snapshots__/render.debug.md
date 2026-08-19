# Render `{"prefix":"p","items":["a","b"],"$global":{"brand":"Acme","serializedGlobals":["brand"]}}`
```html
<main>
  <section>
    <i>
      Acme:p:a
    </i>
  </section>
  <section>
    <i>
      Acme:p:b
    </i>
  </section>
</main>
```

# Update `{"prefix":"q","items":["a","b"],"$global":{"brand":"Acme","serializedGlobals":["brand"]}}`
```html
<main>
  <section>
    <i>
      Acme:q:a
    </i>
  </section>
  <section>
    <i>
      Acme:q:b
    </i>
  </section>
</main>
```
## Change
```
UPDATE: main > section:nth-of-type(1) > i::text@0 "Acme" => "Acme"
UPDATE: main > section:nth-of-type(1) > i::text@5 "p" => "q"
UPDATE: main > section:nth-of-type(1) > i::text@7 "a" => "a"
UPDATE: main > section:nth-of-type(2) > i::text@0 "Acme" => "Acme"
UPDATE: main > section:nth-of-type(2) > i::text@5 "p" => "q"
UPDATE: main > section:nth-of-type(2) > i::text@7 "b" => "b"
```

# Update `{"prefix":"q","items":["a","c","d"],"$global":{"brand":"Zed","serializedGlobals":["brand"]}}`
```html
<main>
  <section>
    <i>
      Zed:q:a
    </i>
  </section>
  <section>
    <i>
      Zed:q:c
    </i>
  </section>
  <section>
    <i>
      Zed:q:d
    </i>
  </section>
</main>
```
## Change
```
UPDATE: main > section:nth-of-type(1) > i::text@0 "Acme" => "Zed"
UPDATE: main > section:nth-of-type(1) > i::text@4 "q" => "q"
UPDATE: main > section:nth-of-type(1) > i::text@6 "a" => "a"
UPDATE: main > section:nth-of-type(2) > i::text@0 "Acme" => "Zed"
UPDATE: main > section:nth-of-type(2) > i::text@4 "q" => "q"
UPDATE: main > section:nth-of-type(2) > i::text@6 "b" => "c"
INSERT: main > section:nth-of-type(2) + section
```
