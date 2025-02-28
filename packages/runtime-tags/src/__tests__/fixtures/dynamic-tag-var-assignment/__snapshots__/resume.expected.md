# Render
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <button
      class="inc"
    >
      1
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_]1 #text/0-->
    <button
      class="reset"
    >
      reset
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.b={"#scopeOffset/1":3,"#text/0!":_.a={"x/2":1},"#text/0(":_._["__tests__/tags/counter.marko"]},2:_.a},_.a["@"]=_._["__tests__/tags/counter.marko_0/valueChange"](_.a),_.a["/"]=_._["__tests__/template.marko_0_count/var"](_.b),_.c),2,"__tests__/tags/counter.marko_0_x",1,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <button
      class="inc"
    >
      2
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_]1 #text/0-->
    <button
      class="reset"
    >
      reset
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.b={"#scopeOffset/1":3,"#text/0!":_.a={"x/2":1},"#text/0(":_._["__tests__/tags/counter.marko"]},2:_.a},_.a["@"]=_._["__tests__/tags/counter.marko_0/valueChange"](_.a),_.a["/"]=_._["__tests__/template.marko_0_count/var"](_.b),_.c),2,"__tests__/tags/counter.marko_0_x",1,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "1" => "2"
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <button
      class="inc"
    >
      3
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_]1 #text/0-->
    <button
      class="reset"
    >
      reset
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.b={"#scopeOffset/1":3,"#text/0!":_.a={"x/2":1},"#text/0(":_._["__tests__/tags/counter.marko"]},2:_.a},_.a["@"]=_._["__tests__/tags/counter.marko_0/valueChange"](_.a),_.a["/"]=_._["__tests__/template.marko_0_count/var"](_.b),_.c),2,"__tests__/tags/counter.marko_0_x",1,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "2" => "3"
```

# Render
```js
container.querySelector("button.reset").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <button
      class="inc"
    >
      0
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_]1 #text/0-->
    <button
      class="reset"
    >
      reset
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.b={"#scopeOffset/1":3,"#text/0!":_.a={"x/2":1},"#text/0(":_._["__tests__/tags/counter.marko"]},2:_.a},_.a["@"]=_._["__tests__/tags/counter.marko_0/valueChange"](_.a),_.a["/"]=_._["__tests__/template.marko_0_count/var"](_.b),_.c),2,"__tests__/tags/counter.marko_0_x",1,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "3" => "0"
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <button
      class="inc"
    >
      1
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_]1 #text/0-->
    <button
      class="reset"
    >
      reset
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.b={"#scopeOffset/1":3,"#text/0!":_.a={"x/2":1},"#text/0(":_._["__tests__/tags/counter.marko"]},2:_.a},_.a["@"]=_._["__tests__/tags/counter.marko_0/valueChange"](_.a),_.a["/"]=_._["__tests__/template.marko_0_count/var"](_.b),_.c),2,"__tests__/tags/counter.marko_0_x",1,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "0" => "1"
```