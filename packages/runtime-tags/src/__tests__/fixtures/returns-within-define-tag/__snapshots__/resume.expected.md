# Render
```html
<html>
  <head />
  <body>
    <button
      class="once"
    >
      0
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <button
      class="twice"
    >
      0
      <!--M_*1 #text/7-->
    </button>
    <!--M_*1 #button/6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "#scopeOffset/1": 3,
          "#scopeOffset/5": 5,
          clickOnceCount: 0,
          onClickOnce: _.b = {
            call: 1
          },
          clickTwiceCount: 0,
          onClickTwice: _.c = {
            call: 2
          },
          "#childScope/0": _.b,
          "#childScope/4": _.c
        }, _.b, 1, _.c], _.b.value = _._[
          "__tests__/template.marko_0/onClickOnce"
          ](_.a), _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_onClickOnce/var"
          ](_.a), _.a.onClickOnce = _._[
          "__tests__/template.marko_1/_return"
          ](_.b), _.c.value = _._[
          "__tests__/template.marko_0/onClickTwice"
          ](_.a), _.c["#TagVariable"] = _._[
          "__tests__/template.marko_0_onClickTwice/var"
          ](_.a), _.a.onClickTwice = _._[
          "__tests__/template.marko_2/_return2"
          ](_.c), _.d),
        "__tests__/template.marko_0_onClickTwice",
        1,
        "__tests__/template.marko_0_onClickOnce",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button.once").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="once"
    >
      1
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <button
      class="twice"
    >
      0
      <!--M_*1 #text/7-->
    </button>
    <!--M_*1 #button/6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "#scopeOffset/1": 3,
          "#scopeOffset/5": 5,
          clickOnceCount: 0,
          onClickOnce: _.b = {
            call: 1
          },
          clickTwiceCount: 0,
          onClickTwice: _.c = {
            call: 2
          },
          "#childScope/0": _.b,
          "#childScope/4": _.c
        }, _.b, 1, _.c], _.b.value = _._[
          "__tests__/template.marko_0/onClickOnce"
          ](_.a), _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_onClickOnce/var"
          ](_.a), _.a.onClickOnce = _._[
          "__tests__/template.marko_1/_return"
          ](_.b), _.c.value = _._[
          "__tests__/template.marko_0/onClickTwice"
          ](_.a), _.c["#TagVariable"] = _._[
          "__tests__/template.marko_0_onClickTwice/var"
          ](_.a), _.a.onClickTwice = _._[
          "__tests__/template.marko_2/_return2"
          ](_.c), _.d),
        "__tests__/template.marko_0_onClickTwice",
        1,
        "__tests__/template.marko_0_onClickOnce",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "0" => "1"
```

# Render
```js
container.querySelector("button.once").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="once"
    >
      1
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <button
      class="twice"
    >
      0
      <!--M_*1 #text/7-->
    </button>
    <!--M_*1 #button/6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "#scopeOffset/1": 3,
          "#scopeOffset/5": 5,
          clickOnceCount: 0,
          onClickOnce: _.b = {
            call: 1
          },
          clickTwiceCount: 0,
          onClickTwice: _.c = {
            call: 2
          },
          "#childScope/0": _.b,
          "#childScope/4": _.c
        }, _.b, 1, _.c], _.b.value = _._[
          "__tests__/template.marko_0/onClickOnce"
          ](_.a), _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_onClickOnce/var"
          ](_.a), _.a.onClickOnce = _._[
          "__tests__/template.marko_1/_return"
          ](_.b), _.c.value = _._[
          "__tests__/template.marko_0/onClickTwice"
          ](_.a), _.c["#TagVariable"] = _._[
          "__tests__/template.marko_0_onClickTwice/var"
          ](_.a), _.a.onClickTwice = _._[
          "__tests__/template.marko_2/_return2"
          ](_.c), _.d),
        "__tests__/template.marko_0_onClickTwice",
        1,
        "__tests__/template.marko_0_onClickOnce",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button.twice").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="once"
    >
      1
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <button
      class="twice"
    >
      1
      <!--M_*1 #text/7-->
    </button>
    <!--M_*1 #button/6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "#scopeOffset/1": 3,
          "#scopeOffset/5": 5,
          clickOnceCount: 0,
          onClickOnce: _.b = {
            call: 1
          },
          clickTwiceCount: 0,
          onClickTwice: _.c = {
            call: 2
          },
          "#childScope/0": _.b,
          "#childScope/4": _.c
        }, _.b, 1, _.c], _.b.value = _._[
          "__tests__/template.marko_0/onClickOnce"
          ](_.a), _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_onClickOnce/var"
          ](_.a), _.a.onClickOnce = _._[
          "__tests__/template.marko_1/_return"
          ](_.b), _.c.value = _._[
          "__tests__/template.marko_0/onClickTwice"
          ](_.a), _.c["#TagVariable"] = _._[
          "__tests__/template.marko_0_onClickTwice/var"
          ](_.a), _.a.onClickTwice = _._[
          "__tests__/template.marko_2/_return2"
          ](_.c), _.d),
        "__tests__/template.marko_0_onClickTwice",
        1,
        "__tests__/template.marko_0_onClickOnce",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button1/#text "0" => "1"
```

# Render
```js
container.querySelector("button.twice").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="once"
    >
      1
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <button
      class="twice"
    >
      2
      <!--M_*1 #text/7-->
    </button>
    <!--M_*1 #button/6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "#scopeOffset/1": 3,
          "#scopeOffset/5": 5,
          clickOnceCount: 0,
          onClickOnce: _.b = {
            call: 1
          },
          clickTwiceCount: 0,
          onClickTwice: _.c = {
            call: 2
          },
          "#childScope/0": _.b,
          "#childScope/4": _.c
        }, _.b, 1, _.c], _.b.value = _._[
          "__tests__/template.marko_0/onClickOnce"
          ](_.a), _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_onClickOnce/var"
          ](_.a), _.a.onClickOnce = _._[
          "__tests__/template.marko_1/_return"
          ](_.b), _.c.value = _._[
          "__tests__/template.marko_0/onClickTwice"
          ](_.a), _.c["#TagVariable"] = _._[
          "__tests__/template.marko_0_onClickTwice/var"
          ](_.a), _.a.onClickTwice = _._[
          "__tests__/template.marko_2/_return2"
          ](_.c), _.d),
        "__tests__/template.marko_0_onClickTwice",
        1,
        "__tests__/template.marko_0_onClickOnce",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button1/#text "1" => "2"
```

# Render
```js
container.querySelector("button.twice").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="once"
    >
      1
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <button
      class="twice"
    >
      2
      <!--M_*1 #text/7-->
    </button>
    <!--M_*1 #button/6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "#scopeOffset/1": 3,
          "#scopeOffset/5": 5,
          clickOnceCount: 0,
          onClickOnce: _.b = {
            call: 1
          },
          clickTwiceCount: 0,
          onClickTwice: _.c = {
            call: 2
          },
          "#childScope/0": _.b,
          "#childScope/4": _.c
        }, _.b, 1, _.c], _.b.value = _._[
          "__tests__/template.marko_0/onClickOnce"
          ](_.a), _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_onClickOnce/var"
          ](_.a), _.a.onClickOnce = _._[
          "__tests__/template.marko_1/_return"
          ](_.b), _.c.value = _._[
          "__tests__/template.marko_0/onClickTwice"
          ](_.a), _.c["#TagVariable"] = _._[
          "__tests__/template.marko_0_onClickTwice/var"
          ](_.a), _.a.onClickTwice = _._[
          "__tests__/template.marko_2/_return2"
          ](_.c), _.d),
        "__tests__/template.marko_0_onClickTwice",
        1,
        "__tests__/template.marko_0_onClickOnce",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```
