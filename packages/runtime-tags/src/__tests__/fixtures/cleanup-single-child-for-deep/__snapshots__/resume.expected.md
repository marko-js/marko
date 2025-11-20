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
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.q = [0, _.a = {
            items: [1, 2, 3]
          }, _.c = {
            outerItem: 1,
            _: _.a,
            "#childScope/0": _.b = {
              name: "1",
              "#ClosestBranchId": 2
            },
            "#LoopKey": 0
          }, _.b,
          {
            _: _.c,
            "#childScope/0": _.d = {
              name: "1.1",
              "#ClosestBranchId": 4
            },
            "#LoopKey": 0
          }, _.d,
          {
            _: _.c,
            "#childScope/0": _.e = {
              name: "1.2",
              "#ClosestBranchId": 6
            },
            "#LoopKey": 1
          }, _.e,
          {
            _: _.c,
            "#childScope/0": _.f = {
              name: "1.3",
              "#ClosestBranchId": 8
            },
            "#LoopKey": 2
          }, _.f, _.h = {
            outerItem: 2,
            _: _.a,
            "#childScope/0": _.g = {
              name: "2",
              "#ClosestBranchId": 10
            },
            "#LoopKey": 1
          }, _.g,
          {
            _: _.h,
            "#childScope/0": _.i = {
              name: "2.1",
              "#ClosestBranchId": 12
            },
            "#LoopKey": 0
          }, _.i,
          {
            _: _.h,
            "#childScope/0": _.j = {
              name: "2.2",
              "#ClosestBranchId": 14
            },
            "#LoopKey": 1
          }, _.j,
          {
            _: _.h,
            "#childScope/0": _.k = {
              name: "2.3",
              "#ClosestBranchId": 16
            },
            "#LoopKey": 2
          }, _.k, _.m = {
            outerItem: 3,
            _: _.a,
            "#childScope/0": _.l = {
              name: "3",
              "#ClosestBranchId": 18
            },
            "#LoopKey": 2
          }, _.l,
          {
            _: _.m,
            "#childScope/0": _.n = {
              name: "3.1",
              "#ClosestBranchId": 20
            },
            "#LoopKey": 0
          }, _.n,
          {
            _: _.m,
            "#childScope/0": _.o = {
              name: "3.2",
              "#ClosestBranchId": 22
            },
            "#LoopKey": 1
          }, _.o,
          {
            _: _.m,
            "#childScope/0": _.p = {
              name: "3.3",
              "#ClosestBranchId": 24
            },
            "#LoopKey": 2
          }, _.p], _.a.write = _.b.write = _.d.write = _.e.write = _.f.write =
          _.g.write = _.i.write = _.j.write = _.k.write = _.l.write = _.n
          .write = _.o.write = _.p.write = _._[
            "__tests__/template.marko_0/write"
            ](_.a), _.q),
        "__tests__/tags/child.marko_0_name_write 3 5 7 9 11 13 15 17 19 21 23 25 __tests__/template.marko_0_items 1"
      ];
      M._.w()
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
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.q = [0, _.a = {
            items: [1, 2, 3]
          }, _.c = {
            outerItem: 1,
            _: _.a,
            "#childScope/0": _.b = {
              name: "1",
              "#ClosestBranchId": 2
            },
            "#LoopKey": 0
          }, _.b,
          {
            _: _.c,
            "#childScope/0": _.d = {
              name: "1.1",
              "#ClosestBranchId": 4
            },
            "#LoopKey": 0
          }, _.d,
          {
            _: _.c,
            "#childScope/0": _.e = {
              name: "1.2",
              "#ClosestBranchId": 6
            },
            "#LoopKey": 1
          }, _.e,
          {
            _: _.c,
            "#childScope/0": _.f = {
              name: "1.3",
              "#ClosestBranchId": 8
            },
            "#LoopKey": 2
          }, _.f, _.h = {
            outerItem: 2,
            _: _.a,
            "#childScope/0": _.g = {
              name: "2",
              "#ClosestBranchId": 10
            },
            "#LoopKey": 1
          }, _.g,
          {
            _: _.h,
            "#childScope/0": _.i = {
              name: "2.1",
              "#ClosestBranchId": 12
            },
            "#LoopKey": 0
          }, _.i,
          {
            _: _.h,
            "#childScope/0": _.j = {
              name: "2.2",
              "#ClosestBranchId": 14
            },
            "#LoopKey": 1
          }, _.j,
          {
            _: _.h,
            "#childScope/0": _.k = {
              name: "2.3",
              "#ClosestBranchId": 16
            },
            "#LoopKey": 2
          }, _.k, _.m = {
            outerItem: 3,
            _: _.a,
            "#childScope/0": _.l = {
              name: "3",
              "#ClosestBranchId": 18
            },
            "#LoopKey": 2
          }, _.l,
          {
            _: _.m,
            "#childScope/0": _.n = {
              name: "3.1",
              "#ClosestBranchId": 20
            },
            "#LoopKey": 0
          }, _.n,
          {
            _: _.m,
            "#childScope/0": _.o = {
              name: "3.2",
              "#ClosestBranchId": 22
            },
            "#LoopKey": 1
          }, _.o,
          {
            _: _.m,
            "#childScope/0": _.p = {
              name: "3.3",
              "#ClosestBranchId": 24
            },
            "#LoopKey": 2
          }, _.p], _.a.write = _.b.write = _.d.write = _.e.write = _.f.write =
          _.g.write = _.i.write = _.j.write = _.k.write = _.l.write = _.n
          .write = _.o.write = _.p.write = _._[
            "__tests__/template.marko_0/write"
            ](_.a), _.q),
        "__tests__/tags/child.marko_0_name_write 3 5 7 9 11 13 15 17 19 21 23 25 __tests__/template.marko_0_items 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE div after html/body/div2
REMOVE div after html/body/div1/div2
REMOVE div after html/body/div2/div2
INSERT #text
REMOVE #text in html/body/div0
INSERT #text
REMOVE #text in html/body/div0
INSERT #text
REMOVE #text in html/body/div0
INSERT #text
REMOVE #text in html/body/div0
INSERT #text
REMOVE #text in html/body/div0
INSERT html/body/div0/#text
```