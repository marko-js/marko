# Write
```html
  <button class=once>0<!--M_*1 #text/3--></button><!--M_*1 #button/2--><button class=twice>0<!--M_*1 #text/7--></button><!--M_*1 #button/6--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.a={"#scopeOffset/1":3,"#scopeOffset/5":5,clickOnceCount:0,onClickOnce:_.b={call:1},clickTwiceCount:0,onClickTwice:_.c={call:2},"#childScope/0":_.b,"#childScope/4":_.c},_.b,1,_.c],_.b.value=_._["__tests__/template.marko_0/onClickOnce"](_.a),_.a.onClickOnce=_._["__tests__/template.marko_1/_return"](_.b),_.b["#TagVariable"]=_._["__tests__/template.marko_0_onClickOnce/var"](_.a),_.c.value=_._["__tests__/template.marko_0/onClickTwice"](_.a),_.a.onClickTwice=_._["__tests__/template.marko_2/_return2"](_.c),_.c["#TagVariable"]=_._["__tests__/template.marko_0_onClickTwice/var"](_.a),_.d),"__tests__/template.marko_0_onClickTwice",1,"__tests__/template.marko_0_onClickOnce",1];M._.w()</script>
```

# Render End
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
          ](_.a), _.a.onClickOnce = _._[
          "__tests__/template.marko_1/_return"
          ](_.b), _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_onClickOnce/var"
          ](_.a), _.c.value = _._[
          "__tests__/template.marko_0/onClickTwice"
          ](_.a), _.a.onClickTwice = _._[
          "__tests__/template.marko_2/_return2"
          ](_.c), _.c["#TagVariable"] = _._[
          "__tests__/template.marko_0_onClickTwice/var"
          ](_.a), _.d),
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
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/button0
INSERT html/body/button0/#text
INSERT html/body/button0/#comment
INSERT html/body/#comment0
INSERT html/body/button1
INSERT html/body/button1/#text
INSERT html/body/button1/#comment
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```