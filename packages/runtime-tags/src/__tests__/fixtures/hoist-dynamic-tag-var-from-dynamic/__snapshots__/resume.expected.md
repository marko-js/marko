# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <!--M_[3-->
    <!--M_[4-->
    <div>
      Hoist from custom tag
    </div>
    <!--M_*4 #div/0-->
    <!--M_]3 #text/0-->
    <!--M_]2 #text/0-->
    <!--M_[6-->
    <!--M_[7-->
    <div>
      Hoist from custom tag
    </div>
    <!--M_*7 #div/0-->
    <!--M_]6 #text/0-->
    <!--M_]2 #text/1-->
    <!--M_[9-->
    <!--M_[10-->
    <!--M_[12-->
    <!--M_[13-->
    <div>
      Hoist from dynamic tag
    </div>
    <!--M_*13 #div/0-->
    <!--M_]12 #text/0-->
    <!--M_]11 #text/0-->
    <!--M_[15-->
    <!--M_[16-->
    <div />
    <!--M_*16 #div/0-->
    <!--M_]15 #text/0-->
    <!--M_]11 #text/1-->
    <!--M_]9 #text/0-->
    <!--M_[18-->
    <!--M_[20-->
    <!--M_[21-->
    <div />
    <!--M_*21 #div/0-->
    <!--M_]20 #text/0-->
    <!--M_]19 #text/0-->
    <!--M_[23-->
    <!--M_[24-->
    <div />
    <!--M_*24 #div/0-->
    <!--M_]23 #text/0-->
    <!--M_]19 #text/1-->
    <!--M_]9 #text/1-->
    <!--M_]1 #text/1-->
    <section>
      <!--M_[28-->
      <div>
        Hoist from dynamic tag
      </div>
      <!--M_*28 #div/0-->
      <!--M_]27 #text/0-->
    </section>
    <!--M_|1 #text/2 26-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.w={1:_.a={"1?":_.x=new Set,"2?":_.z=new Set,"#text/1!":_.b={"#text/0!":_.h={"3?":_.y=new Set},"#text/1!":_.n={"3?":_.A=new Set}},"#text/1(":_._["__tests__/tags/thing.marko"],"4?":_.B=new Set,"#text/2!":_.t={},"#text/2(":"section"},2:{"#text/0!":_.c={"#scopeOffset/1":5,"#text/0!":_.d={},"#text/0(":_._["__tests__/tags/child.marko"],setHtml:_._["__tests__/tags/child.marko_0/_return"](_.d)},"#text/0(":_.g=_._["__tests__/template.marko_1_renderer"](_.a),"#text/1!":_.e={"#scopeOffset/1":8,"#text/0!":_.f={},"#text/0(":_._["__tests__/tags/child.marko"],setHtml:_._["__tests__/tags/child.marko_0/_return"](_.f)},"#text/1(":_.g},3:_.c,4:_.d,6:_.e,7:_.f,9:_.b,10:_.h,11:{"#text/0!":_.i={"#scopeOffset/1":14,"#text/0!":_.j={},"#text/0(":_._["__tests__/tags/child.marko"],setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.j)},"#text/0(":_.m=_._["__tests__/template.marko_3_renderer"](_.h),"#text/1!":_.k={"#scopeOffset/1":17,"#text/0!":_.l={},"#text/0(":_._["__tests__/tags/child.marko"],setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.l)},"#text/1(":_.m},12:_.i,13:_.j,15:_.k,16:_.l,18:_.n,19:{"#text/0!":_.o={"#scopeOffset/1":22,"#text/0!":_.p={},"#text/0(":_._["__tests__/tags/child.marko"],setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.p)},"#text/0(":_.s=_._["__tests__/template.marko_3_renderer"](_.n),"#text/1!":_.q={"#scopeOffset/1":25,"#text/0!":_.r={},"#text/0(":_._["__tests__/tags/child.marko"],setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.r)},"#text/1(":_.s},20:_.o,21:_.p,23:_.q,24:_.r,26:_.t,27:_.u={"#scopeOffset/1":29,"#text/0!":_.v={},"#text/0(":_._["__tests__/tags/child.marko"],setHtml3:_._["__tests__/tags/child.marko_0/_return"](_.v)},28:_.v},_.a._hoisted_setHtml=_._["__tests__/template.marko_0__hoisted_setHtml/hoist"](_.a),_.b["#text/0("]=_.b["#text/1("]=_._["__tests__/template.marko_2_renderer"](_.a),_.d["/"]=_._["__tests__/template.marko_1_setHtml/var"](_.c),_.f["/"]=_._["__tests__/template.marko_1_setHtml/var"](_.e),_.j["/"]=_._["__tests__/template.marko_3_setHtml2/var"](_.i),_.l["/"]=_._["__tests__/template.marko_3_setHtml2/var"](_.k),_.p["/"]=_._["__tests__/template.marko_3_setHtml2/var"](_.o),_.r["/"]=_._["__tests__/template.marko_3_setHtml2/var"](_.q),_.v["/"]=_._["__tests__/template.marko_4_setHtml3/var"](_.u),(_.x).add(_.c),(_.x).add(_.e),(_.y).add(_.i),(_.y).add(_.k),(_.z).add(_.h),(_.A).add(_.o),(_.A).add(_.q),(_.z).add(_.n),(_.B).add(_.u),_.w),1,"__tests__/template.marko_0",1,"__tests__/template.marko_0__hoisted_setHtml",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment1 after html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/#text0
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
INSERT html/body/#text1
INSERT html/body/#text2
INSERT html/body/#text3
INSERT html/body/#text4
INSERT html/body/#text5
INSERT html/body/#text6
INSERT html/body/#text7
INSERT html/body/#text8
INSERT html/body/div2/#text
INSERT html/body/section/div/#text
INSERT html/body/div0/#text
INSERT html/body/div1/#text
```