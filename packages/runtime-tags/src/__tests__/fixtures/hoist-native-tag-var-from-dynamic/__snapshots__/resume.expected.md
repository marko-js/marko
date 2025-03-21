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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.l={1:_.a={"ClosureScopes:1":_.m=new Set,"ClosureScopes:2":_.o=new Set,"ConditionalScope:#text/1":_.f={"ConditionalScope:#text/0":_.b={"ClosureScopes:3":_.n=new Set},"ConditionalRenderer:#text/0":"__tests__/template.marko_2_renderer","ConditionalScope:#text/1":_.c={"ClosureScopes:3":_.p=new Set},"ConditionalRenderer:#text/1":"__tests__/template.marko_2_renderer"},"ConditionalRenderer:#text/1":"__tests__/tags/child.marko","ClosureScopes:4":_.q=new Set,"ConditionalScope:#text/2":_.k={},"ConditionalRenderer:#text/2":"section"},2:{"ConditionalScope:#text/0":_.d={},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer","ConditionalScope:#text/1":_.e={},"ConditionalRenderer:#text/1":"__tests__/template.marko_1_renderer"},3:_.d,4:_.e,5:_.f,6:_.b,7:{"ConditionalScope:#text/0":_.g={},"ConditionalRenderer:#text/0":"__tests__/template.marko_3_renderer","ConditionalScope:#text/1":_.h={},"ConditionalRenderer:#text/1":"__tests__/template.marko_3_renderer"},8:_.g,9:_.h,10:_.c,11:{"ConditionalScope:#text/0":_.i={},"ConditionalRenderer:#text/0":"__tests__/template.marko_3_renderer","ConditionalScope:#text/1":_.j={},"ConditionalRenderer:#text/1":"__tests__/template.marko_3_renderer"},12:_.i,13:_.j,14:_.k,15:_.r={}},_.b._=_.c._=_.a,_.a._hoisted_el=_._["__tests__/template.marko_0__hoisted_el/hoist"](_.a),_.a._hoisted_el3=_._["__tests__/template.marko_0__hoisted_el3/hoist"](_.a),_.b._hoisted_el2=_._["__tests__/template.marko_2__hoisted_el2/hoist"](_.b),_.c._hoisted_el2=_._["__tests__/template.marko_2__hoisted_el2/hoist"](_.c),(_.m).add(_.d),(_.m).add(_.e),(_.n).add(_.g),(_.n).add(_.h),(_.o).add(_.b),(_.p).add(_.i),(_.p).add(_.j),(_.o).add(_.c),(_.q).add(_.r),_.l),6,"__tests__/template.marko_2__hoisted_el2",10,"__tests__/template.marko_2__hoisted_el2",1,"__tests__/template.marko_0",1,"__tests__/template.marko_0__hoisted_el3",1,"__tests__/template.marko_0__hoisted_el"];M._.w()
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