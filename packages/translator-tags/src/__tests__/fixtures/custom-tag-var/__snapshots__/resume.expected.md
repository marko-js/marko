# Render {}
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <div>
      1
      <!--M_*0 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.c={0:_.a={"#childScope/0":_.b={x:1}},1:_.b},_.b["/"]=_._["packages/translator-tags/src/__tests__/fixtures/custom-tag-var/template.marko_0_data"](_.a),_.c)];M._.e=[1,"packages/translator-tags/src/__tests__/fixtures/custom-tag-var/components/child.marko_0_x"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button.inc").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      2
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <div>
      2
      <!--M_*0 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.c={0:_.a={"#childScope/0":_.b={x:1}},1:_.b},_.b["/"]=_._["packages/translator-tags/src/__tests__/fixtures/custom-tag-var/template.marko_0_data"](_.a),_.c)];M._.e=[1,"packages/translator-tags/src/__tests__/fixtures/custom-tag-var/components/child.marko_0_x"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "1" => "2"
#document/html0/body1/div2/#text0: "1" => "2"
```


# Render 
container.querySelector("button.inc").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      3
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <div>
      3
      <!--M_*0 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.c={0:_.a={"#childScope/0":_.b={x:1}},1:_.b},_.b["/"]=_._["packages/translator-tags/src/__tests__/fixtures/custom-tag-var/template.marko_0_data"](_.a),_.c)];M._.e=[1,"packages/translator-tags/src/__tests__/fixtures/custom-tag-var/components/child.marko_0_x"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "2" => "3"
#document/html0/body1/div2/#text0: "2" => "3"
```


# Render 
container.querySelector("button.inc").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      4
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <div>
      4
      <!--M_*0 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.c={0:_.a={"#childScope/0":_.b={x:1}},1:_.b},_.b["/"]=_._["packages/translator-tags/src/__tests__/fixtures/custom-tag-var/template.marko_0_data"](_.a),_.c)];M._.e=[1,"packages/translator-tags/src/__tests__/fixtures/custom-tag-var/components/child.marko_0_x"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "3" => "4"
#document/html0/body1/div2/#text0: "3" => "4"
```