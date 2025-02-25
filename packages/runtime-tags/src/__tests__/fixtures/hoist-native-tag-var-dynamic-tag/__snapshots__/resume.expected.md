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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.o={1:_.a={"#childScope/0?":_.p=new Set,"#text/1?":_.r=new Set,"#text/1!":_.c={"#text/0!":_.b={"#childScope/0?":_.q=new Set},"#text/1!":_.d={"#childScope/0?":_.s=new Set}},"#text/1(":_._["__tests__/tags/child.marko"],"#text/2?":_.t=new Set,"#text/2!":_.n={},"#text/2(":"section"},2:{"#text/0!":_.f={},"#text/0(":_.e=_._["__tests__/template.marko_1_renderer"](_.a),"#text/1!":_.g={},"#text/1(":_.e},3:_.f,4:_.g,5:_.c,6:_.b,7:{"#text/0!":_.i={},"#text/0(":_.h=_._["__tests__/template.marko_3_renderer"](_.b),"#text/1!":_.j={},"#text/1(":_.h},8:_.i,9:_.j,10:_.d,11:{"#text/0!":_.l={},"#text/0(":_.k=_._["__tests__/template.marko_3_renderer"](_.d),"#text/1!":_.m={},"#text/1(":_.k},12:_.l,13:_.m,14:_.n,15:_.u={}},_.b._=_.d._=_.a,_.a._hoisted_el=_._["__tests__/template.marko_0/_hoisted_el"](_.a),_.a._hoisted_el3=_._["__tests__/template.marko_0/_hoisted_el3"](_.a),_.a._hoisted_el4=_._["__tests__/template.marko_0/_hoisted_el4"](_.a),_.b._hoisted_el2=_._["__tests__/template.marko_2/_hoisted_el2"](_.b),_.c["#text/0("]=_.c["#text/1("]=_._["__tests__/template.marko_2_renderer"](_.a),_.d._hoisted_el2=_._["__tests__/template.marko_2/_hoisted_el2"](_.d),(_.p).add(_.f),(_.p).add(_.g),(_.q).add(_.i),(_.q).add(_.j),(_.r).add(_.b),(_.s).add(_.l),(_.s).add(_.m),(_.r).add(_.d),(_.t).add(_.u),_.o),6,"__tests__/template.marko_2__hoisted_el2",10,"__tests__/template.marko_2__hoisted_el2",1,"__tests__/template.marko_0__hoisted_el4",1,"__tests__/template.marko_0__hoisted_el3",1,"__tests__/template.marko_0__hoisted_el",0];M._.w()
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