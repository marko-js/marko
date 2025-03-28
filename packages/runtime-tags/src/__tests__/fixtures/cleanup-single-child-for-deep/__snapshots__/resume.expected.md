# Render
```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*1 #button/0-->
    <div />
    <!--M_*1 #div/1-->
    <div>
      <div>
        1
        <!--M_*3 #text/0-->
      </div>
      <div>
        <div>
          1.1
          <!--M_*5 #text/0-->
        </div>
      </div>
      <div>
        <div>
          1.2
          <!--M_*7 #text/0-->
        </div>
      </div>
      <div>
        <div>
          1.3
          <!--M_*9 #text/0-->
        </div>
      </div>
      <!--M_|2 #text/1 8 6 4-->
    </div>
    <div>
      <div>
        2
        <!--M_*11 #text/0-->
      </div>
      <div>
        <div>
          2.1
          <!--M_*13 #text/0-->
        </div>
      </div>
      <div>
        <div>
          2.2
          <!--M_*15 #text/0-->
        </div>
      </div>
      <div>
        <div>
          2.3
          <!--M_*17 #text/0-->
        </div>
      </div>
      <!--M_|10 #text/1 16 14 12-->
    </div>
    <div>
      <div>
        3
        <!--M_*19 #text/0-->
      </div>
      <div>
        <div>
          3.1
          <!--M_*21 #text/0-->
        </div>
      </div>
      <div>
        <div>
          3.2
          <!--M_*23 #text/0-->
        </div>
      </div>
      <div>
        <div>
          3.3
          <!--M_*25 #text/0-->
        </div>
      </div>
      <!--M_|18 #text/1 24 22 20-->
    </div>
    <!--M_|1 #text/2 18 10 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.D=[0,_.c={"LoopScopeMap:#text/2":new Map(_.a=[[0,_.e={"LoopScopeMap:#text/1":new Map(_.b=[[0,_.f={"#childScope/0":_.d={name:"1.1","#ClosestBranchId":4}}],[1,_.h={"#childScope/0":_.g={name:"1.2","#ClosestBranchId":6}}],[2,_.j={"#childScope/0":_.i={name:"1.3","#ClosestBranchId":8}}]]),outerItem:1,"#childScope/0":_.k={name:"1","#ClosestBranchId":2}}],[1,_.n={"LoopScopeMap:#text/1":new Map(_.l=[[0,_.o={"#childScope/0":_.m={name:"2.1","#ClosestBranchId":12}}],[1,_.q={"#childScope/0":_.p={name:"2.2","#ClosestBranchId":14}}],[2,_.s={"#childScope/0":_.r={name:"2.3","#ClosestBranchId":16}}]]),outerItem:2,"#childScope/0":_.t={name:"2","#ClosestBranchId":10}}],[2,_.w={"LoopScopeMap:#text/1":new Map(_.u=[[0,_.x={"#childScope/0":_.v={name:"3.1","#ClosestBranchId":20}}],[1,_.z={"#childScope/0":_.y={name:"3.2","#ClosestBranchId":22}}],[2,_.B={"#childScope/0":_.A={name:"3.3","#ClosestBranchId":24}}]]),outerItem:3,"#childScope/0":_.C={name:"3","#ClosestBranchId":18}}]]),items:[1,2,3]},_.e,_.k,_.f,_.d,_.h,_.g,_.j,_.i,_.n,_.t,_.o,_.m,_.q,_.p,_.s,_.r,_.w,_.C,_.x,_.v,_.z,_.y,_.B,_.A],_.d.write=_.g.write=_.i.write=_.k.write=_.m.write=_.p.write=_.r.write=_.t.write=_.v.write=_.y.write=_.A.write=_.C.write=_.c.write=_._["__tests__/template.marko_0/write"](_.c),_.f._=_.h._=_.j._=_.e,_.e._=_.n._=_.w._=_.c,_.o._=_.q._=_.s._=_.n,_.x._=_.z._=_.B._=_.w,_.D),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",9,"__tests__/tags/child.marko_0_name_write",11,"__tests__/tags/child.marko_0_name_write",13,"__tests__/tags/child.marko_0_name_write",15,"__tests__/tags/child.marko_0_name_write",17,"__tests__/tags/child.marko_0_name_write",19,"__tests__/tags/child.marko_0_name_write",21,"__tests__/tags/child.marko_0_name_write",23,"__tests__/tags/child.marko_0_name_write",25,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_items"];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*1 #button/0-->
    <div>
      
destroyed 3.1
destroyed 3.2
destroyed 3.3
destroyed 3
destroyed 1.3
destroyed 2.3
    </div>
    <!--M_*1 #div/1-->
    <div>
      <div>
        1
        <!--M_*3 #text/0-->
      </div>
      <div>
        <div>
          1.1
          <!--M_*5 #text/0-->
        </div>
      </div>
      <div>
        <div>
          1.2
          <!--M_*7 #text/0-->
        </div>
      </div>
      <!--M_|2 #text/1 8 6 4-->
    </div>
    <div>
      <div>
        2
        <!--M_*11 #text/0-->
      </div>
      <div>
        <div>
          2.1
          <!--M_*13 #text/0-->
        </div>
      </div>
      <div>
        <div>
          2.2
          <!--M_*15 #text/0-->
        </div>
      </div>
      <!--M_|10 #text/1 16 14 12-->
    </div>
    <!--M_|1 #text/2 18 10 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.D=[0,_.c={"LoopScopeMap:#text/2":new Map(_.a=[[0,_.e={"LoopScopeMap:#text/1":new Map(_.b=[[0,_.f={"#childScope/0":_.d={name:"1.1","#ClosestBranchId":4}}],[1,_.h={"#childScope/0":_.g={name:"1.2","#ClosestBranchId":6}}],[2,_.j={"#childScope/0":_.i={name:"1.3","#ClosestBranchId":8}}]]),outerItem:1,"#childScope/0":_.k={name:"1","#ClosestBranchId":2}}],[1,_.n={"LoopScopeMap:#text/1":new Map(_.l=[[0,_.o={"#childScope/0":_.m={name:"2.1","#ClosestBranchId":12}}],[1,_.q={"#childScope/0":_.p={name:"2.2","#ClosestBranchId":14}}],[2,_.s={"#childScope/0":_.r={name:"2.3","#ClosestBranchId":16}}]]),outerItem:2,"#childScope/0":_.t={name:"2","#ClosestBranchId":10}}],[2,_.w={"LoopScopeMap:#text/1":new Map(_.u=[[0,_.x={"#childScope/0":_.v={name:"3.1","#ClosestBranchId":20}}],[1,_.z={"#childScope/0":_.y={name:"3.2","#ClosestBranchId":22}}],[2,_.B={"#childScope/0":_.A={name:"3.3","#ClosestBranchId":24}}]]),outerItem:3,"#childScope/0":_.C={name:"3","#ClosestBranchId":18}}]]),items:[1,2,3]},_.e,_.k,_.f,_.d,_.h,_.g,_.j,_.i,_.n,_.t,_.o,_.m,_.q,_.p,_.s,_.r,_.w,_.C,_.x,_.v,_.z,_.y,_.B,_.A],_.d.write=_.g.write=_.i.write=_.k.write=_.m.write=_.p.write=_.r.write=_.t.write=_.v.write=_.y.write=_.A.write=_.C.write=_.c.write=_._["__tests__/template.marko_0/write"](_.c),_.f._=_.h._=_.j._=_.e,_.e._=_.n._=_.w._=_.c,_.o._=_.q._=_.s._=_.n,_.x._=_.z._=_.B._=_.w,_.D),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",9,"__tests__/tags/child.marko_0_name_write",11,"__tests__/tags/child.marko_0_name_write",13,"__tests__/tags/child.marko_0_name_write",15,"__tests__/tags/child.marko_0_name_write",17,"__tests__/tags/child.marko_0_name_write",19,"__tests__/tags/child.marko_0_name_write",21,"__tests__/tags/child.marko_0_name_write",23,"__tests__/tags/child.marko_0_name_write",25,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_items"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #text
REMOVE #text in html/body/div0
INSERT #text
REMOVE #text in html/body/div0
INSERT #text
REMOVE #text in html/body/div0
INSERT #text
REMOVE div after html/body/div2
REMOVE #text in html/body/div0
INSERT #text
REMOVE div after html/body/div1/div2
REMOVE #text in html/body/div0
INSERT html/body/div0/#text
REMOVE div after html/body/div2/div2
```