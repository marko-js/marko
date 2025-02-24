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
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <!--M_[3-->
    <!--M_]1 #text/3-->
    <button
      class="twice"
    >
      0
      <!--M_*1 #text/5-->
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.a={Once:_.b={},clickOnceCount:0,onClickOnce:_.c={call:1},Twice:_.d={},clickTwiceCount:0,onClickTwice:_.e={call:2},"#text/0!":_.c,"#text/3!":_.e},2:_.c,3:_.e},_.b.content=_.a["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.c["/"]=_._["__tests__/template.marko_0_onClickOnce/var"](_.a),_.c.value=_._["__tests__/template.marko_0/onClickOnce"](_.a),_.a.onClickOnce=_._["__tests__/template.marko_1/_return"](_.c),_.d.content=_.a["#text/3("]=_._["__tests__/template.marko_2_renderer"](_.a),_.e["/"]=_._["__tests__/template.marko_0_onClickTwice/var"](_.a),_.e.value=_._["__tests__/template.marko_0/onClickTwice"](_.a),_.a.onClickTwice=_._["__tests__/template.marko_2/_return"](_.e),_.f),1,"__tests__/template.marko_0_onClickTwice",1,"__tests__/template.marko_0_onClickOnce",0];M._.w()
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
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <!--M_[3-->
    <!--M_]1 #text/3-->
    <button
      class="twice"
    >
      0
      <!--M_*1 #text/5-->
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.a={Once:_.b={},clickOnceCount:0,onClickOnce:_.c={call:1},Twice:_.d={},clickTwiceCount:0,onClickTwice:_.e={call:2},"#text/0!":_.c,"#text/3!":_.e},2:_.c,3:_.e},_.b.content=_.a["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.c["/"]=_._["__tests__/template.marko_0_onClickOnce/var"](_.a),_.c.value=_._["__tests__/template.marko_0/onClickOnce"](_.a),_.a.onClickOnce=_._["__tests__/template.marko_1/_return"](_.c),_.d.content=_.a["#text/3("]=_._["__tests__/template.marko_2_renderer"](_.a),_.e["/"]=_._["__tests__/template.marko_0_onClickTwice/var"](_.a),_.e.value=_._["__tests__/template.marko_0/onClickTwice"](_.a),_.a.onClickTwice=_._["__tests__/template.marko_2/_return"](_.e),_.f),1,"__tests__/template.marko_0_onClickTwice",1,"__tests__/template.marko_0_onClickOnce",0];M._.w()
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
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <!--M_[3-->
    <!--M_]1 #text/3-->
    <button
      class="twice"
    >
      0
      <!--M_*1 #text/5-->
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.a={Once:_.b={},clickOnceCount:0,onClickOnce:_.c={call:1},Twice:_.d={},clickTwiceCount:0,onClickTwice:_.e={call:2},"#text/0!":_.c,"#text/3!":_.e},2:_.c,3:_.e},_.b.content=_.a["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.c["/"]=_._["__tests__/template.marko_0_onClickOnce/var"](_.a),_.c.value=_._["__tests__/template.marko_0/onClickOnce"](_.a),_.a.onClickOnce=_._["__tests__/template.marko_1/_return"](_.c),_.d.content=_.a["#text/3("]=_._["__tests__/template.marko_2_renderer"](_.a),_.e["/"]=_._["__tests__/template.marko_0_onClickTwice/var"](_.a),_.e.value=_._["__tests__/template.marko_0/onClickTwice"](_.a),_.a.onClickTwice=_._["__tests__/template.marko_2/_return"](_.e),_.f),1,"__tests__/template.marko_0_onClickTwice",1,"__tests__/template.marko_0_onClickOnce",0];M._.w()
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
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <!--M_[3-->
    <!--M_]1 #text/3-->
    <button
      class="twice"
    >
      1
      <!--M_*1 #text/5-->
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.a={Once:_.b={},clickOnceCount:0,onClickOnce:_.c={call:1},Twice:_.d={},clickTwiceCount:0,onClickTwice:_.e={call:2},"#text/0!":_.c,"#text/3!":_.e},2:_.c,3:_.e},_.b.content=_.a["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.c["/"]=_._["__tests__/template.marko_0_onClickOnce/var"](_.a),_.c.value=_._["__tests__/template.marko_0/onClickOnce"](_.a),_.a.onClickOnce=_._["__tests__/template.marko_1/_return"](_.c),_.d.content=_.a["#text/3("]=_._["__tests__/template.marko_2_renderer"](_.a),_.e["/"]=_._["__tests__/template.marko_0_onClickTwice/var"](_.a),_.e.value=_._["__tests__/template.marko_0/onClickTwice"](_.a),_.a.onClickTwice=_._["__tests__/template.marko_2/_return"](_.e),_.f),1,"__tests__/template.marko_0_onClickTwice",1,"__tests__/template.marko_0_onClickOnce",0];M._.w()
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
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <!--M_[3-->
    <!--M_]1 #text/3-->
    <button
      class="twice"
    >
      2
      <!--M_*1 #text/5-->
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.a={Once:_.b={},clickOnceCount:0,onClickOnce:_.c={call:1},Twice:_.d={},clickTwiceCount:0,onClickTwice:_.e={call:2},"#text/0!":_.c,"#text/3!":_.e},2:_.c,3:_.e},_.b.content=_.a["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.c["/"]=_._["__tests__/template.marko_0_onClickOnce/var"](_.a),_.c.value=_._["__tests__/template.marko_0/onClickOnce"](_.a),_.a.onClickOnce=_._["__tests__/template.marko_1/_return"](_.c),_.d.content=_.a["#text/3("]=_._["__tests__/template.marko_2_renderer"](_.a),_.e["/"]=_._["__tests__/template.marko_0_onClickTwice/var"](_.a),_.e.value=_._["__tests__/template.marko_0/onClickTwice"](_.a),_.a.onClickTwice=_._["__tests__/template.marko_2/_return"](_.e),_.f),1,"__tests__/template.marko_0_onClickTwice",1,"__tests__/template.marko_0_onClickOnce",0];M._.w()
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
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <!--M_[3-->
    <!--M_]1 #text/3-->
    <button
      class="twice"
    >
      2
      <!--M_*1 #text/5-->
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.a={Once:_.b={},clickOnceCount:0,onClickOnce:_.c={call:1},Twice:_.d={},clickTwiceCount:0,onClickTwice:_.e={call:2},"#text/0!":_.c,"#text/3!":_.e},2:_.c,3:_.e},_.b.content=_.a["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.c["/"]=_._["__tests__/template.marko_0_onClickOnce/var"](_.a),_.c.value=_._["__tests__/template.marko_0/onClickOnce"](_.a),_.a.onClickOnce=_._["__tests__/template.marko_1/_return"](_.c),_.d.content=_.a["#text/3("]=_._["__tests__/template.marko_2_renderer"](_.a),_.e["/"]=_._["__tests__/template.marko_0_onClickTwice/var"](_.a),_.e.value=_._["__tests__/template.marko_0/onClickTwice"](_.a),_.a.onClickTwice=_._["__tests__/template.marko_2/_return"](_.e),_.f),1,"__tests__/template.marko_0_onClickTwice",1,"__tests__/template.marko_0_onClickOnce",0];M._.w()
    </script>
  </body>
</html>
```
