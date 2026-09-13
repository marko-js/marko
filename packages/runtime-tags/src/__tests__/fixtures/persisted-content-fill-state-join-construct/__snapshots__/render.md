# Render `{"p":{"name":"n"},"items":[{"id":1,"title":"a"}]}`
```html
<main>
  <section>
    <h2>
      a
    </h2>
    <div>
      <span>
        n/0/1
      </span>
    </div>
  </section>
  <button>
    +
  </button>
</main>
```

# Update `{"p":{"name":"n"},"items":[{"id":1,"title":"a"},{"id":2,"title":"b"}]}`
```html
<main>
  <section>
    <h2>
      a
    </h2>
    <div>
      <span>
        n/0/1
      </span>
    </div>
  </section>
  <section>
    <h2>
      b
    </h2>
    <div>
      <span>
        n/0/2
      </span>
    </div>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section:nth-of-type(1) > h2::text "a" => "a"
UPDATE: main > section:nth-of-type(1) > div > span::text@0 "n" => "n"
UPDATE: main > section:nth-of-type(1) > div > span::text@4 "1" => "1"
INSERT: main > section:nth-of-type(1) + section
UPDATE: main > section:nth-of-type(2) > div > span::text@2 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <h2>
      a
    </h2>
    <div>
      <span>
        n/1/1
      </span>
    </div>
  </section>
  <section>
    <h2>
      b
    </h2>
    <div>
      <span>
        n/1/2
      </span>
    </div>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section:nth-of-type(1) > div > span::text@2 "0" => "1"
UPDATE: main > section:nth-of-type(2) > div > span::text@2 "0" => "1"
```

# Update `{"p":{"name":"m"},"items":[{"id":2,"title":"b"}]}`
```html
<main>
  <section>
    <h2>
      b
    </h2>
    <div>
      <span>
        m/1/2
      </span>
    </div>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > h2::text "a" => "b"
UPDATE: main > section > div > span::text@0 "n" => "m"
UPDATE: main > section > div > span::text@4 "1" => "2"
REMOVE: main > section + section
```
