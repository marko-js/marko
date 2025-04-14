# Render
```html
<html>
  <head />
  <body>
    <button
      class="inc-child"
    >
      1
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <button
      class="inc-parent"
    >
      1
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <button
      class="reset"
    >
      reset
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.b={"#scopeOffset/1":3,count:1,"#childScope/0":_.a={x:1}},_.a],_.a["#TagVariableChange"]=_._["__tests__/tags/counter.marko_0/valueChange"](_.a),_.a["#TagVariable"]=_._["__tests__/template.marko_0_count/var"](_.b),_.c),"__tests__/tags/counter.marko_0_x",2,"__tests__/template.marko_0",1,"__tests__/template.marko_0_count",1];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button.inc-child").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="inc-child"
    >
      2
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <button
      class="inc-parent"
    >
      2
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <button
      class="reset"
    >
      reset
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.b={"#scopeOffset/1":3,count:1,"#childScope/0":_.a={x:1}},_.a],_.a["#TagVariableChange"]=_._["__tests__/tags/counter.marko_0/valueChange"](_.a),_.a["#TagVariable"]=_._["__tests__/template.marko_0_count/var"](_.b),_.c),"__tests__/tags/counter.marko_0_x",2,"__tests__/template.marko_0",1,"__tests__/template.marko_0_count",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "1" => "2"
UPDATE html/body/button1/#text "1" => "2"
```

# Render
```js
container.querySelector("button.inc-parent").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="inc-child"
    >
      3
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <button
      class="inc-parent"
    >
      3
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <button
      class="reset"
    >
      reset
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.b={"#scopeOffset/1":3,count:1,"#childScope/0":_.a={x:1}},_.a],_.a["#TagVariableChange"]=_._["__tests__/tags/counter.marko_0/valueChange"](_.a),_.a["#TagVariable"]=_._["__tests__/template.marko_0_count/var"](_.b),_.c),"__tests__/tags/counter.marko_0_x",2,"__tests__/template.marko_0",1,"__tests__/template.marko_0_count",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "2" => "3"
UPDATE html/body/button1/#text "2" => "3"
```

# Render
```js
container.querySelector("button.reset").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="inc-child"
    >
      0
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <button
      class="inc-parent"
    >
      0
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <button
      class="reset"
    >
      reset
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.b={"#scopeOffset/1":3,count:1,"#childScope/0":_.a={x:1}},_.a],_.a["#TagVariableChange"]=_._["__tests__/tags/counter.marko_0/valueChange"](_.a),_.a["#TagVariable"]=_._["__tests__/template.marko_0_count/var"](_.b),_.c),"__tests__/tags/counter.marko_0_x",2,"__tests__/template.marko_0",1,"__tests__/template.marko_0_count",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "3" => "0"
UPDATE html/body/button1/#text "3" => "0"
```