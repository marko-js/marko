# Render
```html
<!--M_[2-->
<!--M_]1 #text/0-->
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
    <!--M_[4-->
    <!--M_]1 #text/4-->
    <button
      class="twice"
    >
      0
      <!--M_*1 #text/7-->
    </button>
    <!--M_*1 #button/6-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,_.a={"ConditionalScope:#text/0":_.b={call:1},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer","#scopeOffset/1":3,"ConditionalScope:#text/4":_.c={call:2},"ConditionalRenderer:#text/4":"__tests__/template.marko_2_renderer","#scopeOffset/5":5,Once:_.d={},clickOnceCount:0,Twice:_.e={},clickTwiceCount:0},_.b,1,_.c],_.b.value=_._["__tests__/template.marko_0/onClickOnce"](_.a),_.b["#TagVariable"]=_._["__tests__/template.marko_0_onClickOnce/var"](_.a),_.c.value=_._["__tests__/template.marko_0/onClickTwice"](_.a),_.c["#TagVariable"]=_._["__tests__/template.marko_0_onClickTwice/var"](_.a),_.d.content=_._["__tests__/template.marko_1_renderer"](_.a),_.a.onClickOnce=_._["__tests__/template.marko_1/_return"](_.b),_.e.content=_._["__tests__/template.marko_2_renderer"](_.a),_.a.onClickTwice=_._["__tests__/template.marko_2/_return"](_.c),_.f),1,"__tests__/template.marko_0_onClickTwice",1,"__tests__/template.marko_0_onClickOnce"];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button.once").click();
```
```html
<!--M_[2-->
<!--M_]1 #text/0-->
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
    <!--M_[4-->
    <!--M_]1 #text/4-->
    <button
      class="twice"
    >
      0
      <!--M_*1 #text/7-->
    </button>
    <!--M_*1 #button/6-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,_.a={"ConditionalScope:#text/0":_.b={call:1},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer","#scopeOffset/1":3,"ConditionalScope:#text/4":_.c={call:2},"ConditionalRenderer:#text/4":"__tests__/template.marko_2_renderer","#scopeOffset/5":5,Once:_.d={},clickOnceCount:0,Twice:_.e={},clickTwiceCount:0},_.b,1,_.c],_.b.value=_._["__tests__/template.marko_0/onClickOnce"](_.a),_.b["#TagVariable"]=_._["__tests__/template.marko_0_onClickOnce/var"](_.a),_.c.value=_._["__tests__/template.marko_0/onClickTwice"](_.a),_.c["#TagVariable"]=_._["__tests__/template.marko_0_onClickTwice/var"](_.a),_.d.content=_._["__tests__/template.marko_1_renderer"](_.a),_.a.onClickOnce=_._["__tests__/template.marko_1/_return"](_.b),_.e.content=_._["__tests__/template.marko_2_renderer"](_.a),_.a.onClickTwice=_._["__tests__/template.marko_2/_return"](_.c),_.f),1,"__tests__/template.marko_0_onClickTwice",1,"__tests__/template.marko_0_onClickOnce"];M._.w()
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
<!--M_[2-->
<!--M_]1 #text/0-->
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
    <!--M_[4-->
    <!--M_]1 #text/4-->
    <button
      class="twice"
    >
      0
      <!--M_*1 #text/7-->
    </button>
    <!--M_*1 #button/6-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,_.a={"ConditionalScope:#text/0":_.b={call:1},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer","#scopeOffset/1":3,"ConditionalScope:#text/4":_.c={call:2},"ConditionalRenderer:#text/4":"__tests__/template.marko_2_renderer","#scopeOffset/5":5,Once:_.d={},clickOnceCount:0,Twice:_.e={},clickTwiceCount:0},_.b,1,_.c],_.b.value=_._["__tests__/template.marko_0/onClickOnce"](_.a),_.b["#TagVariable"]=_._["__tests__/template.marko_0_onClickOnce/var"](_.a),_.c.value=_._["__tests__/template.marko_0/onClickTwice"](_.a),_.c["#TagVariable"]=_._["__tests__/template.marko_0_onClickTwice/var"](_.a),_.d.content=_._["__tests__/template.marko_1_renderer"](_.a),_.a.onClickOnce=_._["__tests__/template.marko_1/_return"](_.b),_.e.content=_._["__tests__/template.marko_2_renderer"](_.a),_.a.onClickTwice=_._["__tests__/template.marko_2/_return"](_.c),_.f),1,"__tests__/template.marko_0_onClickTwice",1,"__tests__/template.marko_0_onClickOnce"];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button.twice").click();
```
```html
<!--M_[2-->
<!--M_]1 #text/0-->
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
    <!--M_[4-->
    <!--M_]1 #text/4-->
    <button
      class="twice"
    >
      1
      <!--M_*1 #text/7-->
    </button>
    <!--M_*1 #button/6-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,_.a={"ConditionalScope:#text/0":_.b={call:1},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer","#scopeOffset/1":3,"ConditionalScope:#text/4":_.c={call:2},"ConditionalRenderer:#text/4":"__tests__/template.marko_2_renderer","#scopeOffset/5":5,Once:_.d={},clickOnceCount:0,Twice:_.e={},clickTwiceCount:0},_.b,1,_.c],_.b.value=_._["__tests__/template.marko_0/onClickOnce"](_.a),_.b["#TagVariable"]=_._["__tests__/template.marko_0_onClickOnce/var"](_.a),_.c.value=_._["__tests__/template.marko_0/onClickTwice"](_.a),_.c["#TagVariable"]=_._["__tests__/template.marko_0_onClickTwice/var"](_.a),_.d.content=_._["__tests__/template.marko_1_renderer"](_.a),_.a.onClickOnce=_._["__tests__/template.marko_1/_return"](_.b),_.e.content=_._["__tests__/template.marko_2_renderer"](_.a),_.a.onClickTwice=_._["__tests__/template.marko_2/_return"](_.c),_.f),1,"__tests__/template.marko_0_onClickTwice",1,"__tests__/template.marko_0_onClickOnce"];M._.w()
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
<!--M_[2-->
<!--M_]1 #text/0-->
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
    <!--M_[4-->
    <!--M_]1 #text/4-->
    <button
      class="twice"
    >
      2
      <!--M_*1 #text/7-->
    </button>
    <!--M_*1 #button/6-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,_.a={"ConditionalScope:#text/0":_.b={call:1},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer","#scopeOffset/1":3,"ConditionalScope:#text/4":_.c={call:2},"ConditionalRenderer:#text/4":"__tests__/template.marko_2_renderer","#scopeOffset/5":5,Once:_.d={},clickOnceCount:0,Twice:_.e={},clickTwiceCount:0},_.b,1,_.c],_.b.value=_._["__tests__/template.marko_0/onClickOnce"](_.a),_.b["#TagVariable"]=_._["__tests__/template.marko_0_onClickOnce/var"](_.a),_.c.value=_._["__tests__/template.marko_0/onClickTwice"](_.a),_.c["#TagVariable"]=_._["__tests__/template.marko_0_onClickTwice/var"](_.a),_.d.content=_._["__tests__/template.marko_1_renderer"](_.a),_.a.onClickOnce=_._["__tests__/template.marko_1/_return"](_.b),_.e.content=_._["__tests__/template.marko_2_renderer"](_.a),_.a.onClickTwice=_._["__tests__/template.marko_2/_return"](_.c),_.f),1,"__tests__/template.marko_0_onClickTwice",1,"__tests__/template.marko_0_onClickOnce"];M._.w()
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
<!--M_[2-->
<!--M_]1 #text/0-->
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
    <!--M_[4-->
    <!--M_]1 #text/4-->
    <button
      class="twice"
    >
      2
      <!--M_*1 #text/7-->
    </button>
    <!--M_*1 #button/6-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,_.a={"ConditionalScope:#text/0":_.b={call:1},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer","#scopeOffset/1":3,"ConditionalScope:#text/4":_.c={call:2},"ConditionalRenderer:#text/4":"__tests__/template.marko_2_renderer","#scopeOffset/5":5,Once:_.d={},clickOnceCount:0,Twice:_.e={},clickTwiceCount:0},_.b,1,_.c],_.b.value=_._["__tests__/template.marko_0/onClickOnce"](_.a),_.b["#TagVariable"]=_._["__tests__/template.marko_0_onClickOnce/var"](_.a),_.c.value=_._["__tests__/template.marko_0/onClickTwice"](_.a),_.c["#TagVariable"]=_._["__tests__/template.marko_0_onClickTwice/var"](_.a),_.d.content=_._["__tests__/template.marko_1_renderer"](_.a),_.a.onClickOnce=_._["__tests__/template.marko_1/_return"](_.b),_.e.content=_._["__tests__/template.marko_2_renderer"](_.a),_.a.onClickTwice=_._["__tests__/template.marko_2/_return"](_.c),_.f),1,"__tests__/template.marko_0_onClickTwice",1,"__tests__/template.marko_0_onClickOnce"];M._.w()
    </script>
  </body>
</html>
```
