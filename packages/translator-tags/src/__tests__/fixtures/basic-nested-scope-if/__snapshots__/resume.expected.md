# Render {}
```html
<html>
  <head />
  <body>
    <div>
      <button>
        0
        <!--M_*1 #text/1-->
      </button>
      <!--M_*1 #button/0-->
      <!--M_|0 #text/0 1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.c={0:_.a={clickCount:0,"#text/0!":_.b={}},1:_.b},_.a["#text/0("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_renderer"](_.a),_.b._=_.a,_.c)];M._.e=[1,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_clickCount"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      <button>
        1
      </button>
      <!--M_*1 #button/0-->
      <!--M_|0 #text/0 1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.c={0:_.a={clickCount:0,"#text/0!":_.b={}},1:_.b},_.a["#text/0("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_renderer"](_.a),_.b._=_.a,_.c)];M._.e=[1,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_clickCount"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0/button0
removed button after #document/html0/body1/div0/button0
#document/html0/body1/div0/button0/#text0: " " => "1"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      <button>
        2
      </button>
      <!--M_*1 #button/0-->
      <!--M_|0 #text/0 1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.c={0:_.a={clickCount:0,"#text/0!":_.b={}},1:_.b},_.a["#text/0("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_renderer"](_.a),_.b._=_.a,_.c)];M._.e=[1,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_clickCount"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/button0/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      <span>
        The button was clicked 3 times.
      </span>
      <!--M_*1 #button/0-->
      <!--M_|0 #text/0 1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.c={0:_.a={clickCount:0,"#text/0!":_.b={}},1:_.b},_.a["#text/0("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_renderer"](_.a),_.b._=_.a,_.c)];M._.e=[1,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_clickCount"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0/span0
removed button after #document/html0/body1/div0/span0
#document/html0/body1/div0/span0/#text1: "" => "3"
```