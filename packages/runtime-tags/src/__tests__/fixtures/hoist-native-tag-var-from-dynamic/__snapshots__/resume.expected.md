# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <!--M_[3-->
    <span>
      Hoist from custom tag
    </span>
    <!--M_*3 #span/0-->
    <!--M_]2 #text/0-->
    <!--M_[4-->
    <span>
      Hoist from custom tag
    </span>
    <!--M_*4 #span/0-->
    <!--M_]2 #text/1-->
    <!--M_[5-->
    <!--M_[6-->
    <!--M_[8-->
    <div
      class="inner outer"
    />
    <!--M_*8 #div/0-->
    <!--M_]7 #text/0-->
    <!--M_[9-->
    <div
      class="inner outer"
    />
    <!--M_*9 #div/0-->
    <!--M_]7 #text/1-->
    <!--M_]5 #text/0-->
    <!--M_[10-->
    <!--M_[12-->
    <div
      class="inner outer"
    />
    <!--M_*12 #div/0-->
    <!--M_]11 #text/0-->
    <!--M_[13-->
    <div
      class="inner outer"
    />
    <!--M_*13 #div/0-->
    <!--M_]11 #text/1-->
    <!--M_]5 #text/1-->
    <!--M_]1 #text/1-->
    <section>
      <p>
        Hoist from dynamic tag
      </p>
      <!--M_*15 #p/0-->
    </section>
    <!--M_|1 #text/2 14-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.l=[0,_.b={"ConditionalScope:#text/1":_.f={"ConditionalScope:#text/0":_.a={"ClosureScopes:3":_.n=new Set},"ConditionalRenderer:#text/0":"__tests__/template.marko_2_renderer","ConditionalScope:#text/1":_.c={"ClosureScopes:3":_.p=new Set},"ConditionalRenderer:#text/1":"__tests__/template.marko_2_renderer"},"ConditionalRenderer:#text/1":"__tests__/tags/child.marko","ConditionalScope:#text/2":_.k={},"ConditionalRenderer:#text/2":"section","ClosureScopes:1":_.m=new Set,"ClosureScopes:2":_.o=new Set,"ClosureScopes:4":_.q=new Set},{"ConditionalScope:#text/0":_.d={},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer","ConditionalScope:#text/1":_.e={},"ConditionalRenderer:#text/1":"__tests__/template.marko_1_renderer"},_.d,_.e,_.f,_.a,{"ConditionalScope:#text/0":_.g={},"ConditionalRenderer:#text/0":"__tests__/template.marko_3_renderer","ConditionalScope:#text/1":_.h={},"ConditionalRenderer:#text/1":"__tests__/template.marko_3_renderer"},_.g,_.h,_.c,{"ConditionalScope:#text/0":_.i={},"ConditionalRenderer:#text/0":"__tests__/template.marko_3_renderer","ConditionalScope:#text/1":_.j={},"ConditionalRenderer:#text/1":"__tests__/template.marko_3_renderer"},_.i,_.j,_.k,_.r={}],_.a.$hoisted_el2=_._["__tests__/template.marko_2_$hoisted_el2/hoist"](_.a),_.a._=_.c._=_.b,_.c.$hoisted_el2=_._["__tests__/template.marko_2_$hoisted_el2/hoist"](_.c),_.b.$hoisted_el=_._["__tests__/template.marko_0_$hoisted_el/hoist"](_.b),_.b.$hoisted_el3=_._["__tests__/template.marko_0_$hoisted_el3/hoist"](_.b),(_.m).add(_.d),(_.m).add(_.e),(_.n).add(_.g),(_.n).add(_.h),(_.o).add(_.a),(_.p).add(_.i),(_.p).add(_.j),(_.o).add(_.c),(_.q).add(_.r),_.l),6,"__tests__/template.marko_2_$hoisted_el2",10,"__tests__/template.marko_2_$hoisted_el2",1,"__tests__/template.marko_0",1,"__tests__/template.marko_0_$hoisted_el3",1,"__tests__/template.marko_0_$hoisted_el"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
INSERT html/body/#text0
INSERT html/body/#text1
INSERT html/body/#text2
UPDATE html/body/div0[class] null => "inner outer"
UPDATE html/body/div1[class] null => "inner outer"
UPDATE html/body/div2[class] null => "inner outer"
UPDATE html/body/div3[class] null => "inner outer"
INSERT html/body/section/p/#text
UPDATE html/body/div0[class] "inner" => "inner outer"
UPDATE html/body/div1[class] "inner" => "inner outer"
UPDATE html/body/div2[class] "inner" => "inner outer"
UPDATE html/body/div3[class] "inner" => "inner outer"
INSERT html/body/span0/#text
INSERT html/body/span1/#text
```