# Render `{"title":"Hero"}`
```html
<section
  class="hero hero--launch"
>
  <h1>
    Meet Comptime
  </h1>
  <button>
    clap 0
  </button>
</section>
<section
  class="hero hero--live"
>
  <h1>
    runtime Hero
  </h1>
  <p>
    still a component
  </p>
</section>
```

# Update
```js
container.querySelector("button").click();
```
```html
<section
  class="hero hero--launch"
>
  <h1>
    Meet Comptime
  </h1>
  <button>
    clap 1
  </button>
</section>
<section
  class="hero hero--live"
>
  <h1>
    runtime Hero
  </h1>
  <p>
    still a component
  </p>
</section>
```
## Change
```
UPDATE: .hero.hero--launch > button::text@5 "0" => "1"
```
