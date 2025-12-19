# Render
```html
<html>
  <head />
  <body>
    <button>
      Clear
    </button>
    <!--M_*1 #button/2-->
    <ul>
      <li>
        Learn Marko
        <!--M_*4 #text/0-->
      </li>
      <li>
        Make a Website
        <!--M_*5 #text/0-->
      </li>
      <!--M_}1 #ul/3 5 4-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "#scopeOffset/1": 3,
          clear: _.b = {},
          "#childScope/0": _.b
        }, _.b, 1,
        {},
        {}], _.a.clear = _._[
          "__tests__/tags/store.marko_0/_return2"
          ](_.b), _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_store/var"
          ](_.a), _.c),
        "__tests__/template.marko_0_clear 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      Clear
    </button>
    <!--M_*1 #button/2-->
    <ul>
      <!--M_}1 #ul/3 5 4-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "#scopeOffset/1": 3,
          clear: _.b = {},
          "#childScope/0": _.b
        }, _.b, 1,
        {},
        {}], _.a.clear = _._[
          "__tests__/tags/store.marko_0/_return2"
          ](_.b), _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_store/var"
          ](_.a), _.c),
        "__tests__/template.marko_0_clear 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE li before li
REMOVE li before html/body/ul/#comment
```