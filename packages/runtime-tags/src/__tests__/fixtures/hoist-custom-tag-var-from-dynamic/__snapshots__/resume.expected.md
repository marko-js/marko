# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <div>
      Hoist from custom tag
    </div>
    <!--M_*4 #div/0-->
    <div>
      Hoist from custom tag
    </div>
    <!--M_*6 #div/0-->
    <div>
      Hoist from dynamic tag
    </div>
    <!--M_*11 #div/0-->
    <div />
    <!--M_*13 #div/0-->
    <div />
    <!--M_*17 #div/0-->
    <div />
    <!--M_*19 #div/0-->
    <section>
      <div>
        Hoist from dynamic tag
      </div>
      <!--M_*22 #div/0-->
    </section>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.a={"ClosureScopes:1":_.j=new Set,"ClosureScopes:2":_.p=new Set,"ClosureScopes:4":_.v=new Set},1,_.k={setHtml:_._["__tests__/tags/child.marko_0/_return"](_.b={})},_.b,_.l={setHtml:_._["__tests__/tags/child.marko_0/_return"](_.c={})},_.c,1,_.q={"ClosureScopes:3":_.m=new Set},1,_.n={setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.d={})},_.d,_.o={setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.e={})},_.e,_.u={"ClosureScopes:3":_.r=new Set},1,_.s={setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.f={})},_.f,_.t={setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.g={})},_.g,1,_.w={setHtml3:_._["__tests__/tags/child.marko_0/_return"](_.h={})},_.h],_.a.$hoisted_setHtml=_._["__tests__/template.marko_0_$hoisted_setHtml/hoist"](_.a),(_.j).add(_.k),(_.j).add(_.l),(_.m).add(_.n),(_.m).add(_.o),(_.p).add(_.q),(_.r).add(_.s),(_.r).add(_.t),(_.p).add(_.u),(_.v).add(_.w),_.i),"__tests__/template.marko_0",1,"__tests__/template.marko_0_$hoisted_setHtml",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div2/#text
INSERT html/body/section/div/#text
INSERT html/body/div0/#text
INSERT html/body/div1/#text
```