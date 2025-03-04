import assert from "node:assert/strict";
import { inspect } from "node:util";

import {
  register,
  registerGetter,
  Serializer,
  stringify,
} from "../html/serializer";
import type { Boundary } from "../html/writer";

describe("serializer", () => {
  it("example", () => {
    const data = {
      strings: "hello\nworld",
      numbers: [1, NaN, Infinity],
      booleans: [true, false],
      void: [null, undefined],
      regexps: /abc/g,
      maps: new Map([[1, 2]]),
      sets: new Set([1, 2]),
      nested: {
        object: {
          "special-keys": 1,
        },
      },
    };

    (data.nested.object as any).cyclical = data;

    assertStringify(
      data,
      `{strings:"hello\\nworld",numbers:[1,NaN,Infinity],booleans:[!0,!1],void:[null,],regexps:/abc/g,maps:new Map(_.a=[[1,2]]),sets:new Set(_.b=[1,2]),nested:{object:_.d={"special-keys":1}}},_.d.cyclical=_.c`,
    );
  });

  describe("primitives", () => {
    describe("undefined", () => {
      it("literal", () => assertStringify(undefined, ``));
      it("in object", () => assertStringify({ x: undefined }, `{}`));
    });

    it("null", () => {
      assertStringify(null, `null`);
    });

    describe("booleans", () => {
      it("true", () => assertStringify(true, `!0`));
      it("false", () => assertStringify(false, `!1`));
    });

    describe("string", () => {
      it("empty", () => assertStringify("", `""`));
      it("normal", () => assertStringify("test", `"test"`));
      it("special characters", () =>
        assertStringify(
          '"\b\t\n\f\r\v\0</script\u2028\u2029some other content',
          `"\\"\b\t\\n\f\\r\x0B\x00\\x3C/script\\u2028\\u2029some other content"`,
        ));
    });

    describe("number", () => {
      it("zero", () => assertStringify(0, `0`));
      it("positive", () => assertStringify(1, `1`));
      it("negative", () => assertStringify(-1, `-1`));
      it("decimal", () => assertStringify(0.1, `0.1`));
      it("negative decimal", () => assertStringify(-0.1, `-0.1`));
      it("NaN", () => assertStringify(NaN, `NaN`));
      it("Infinity", () => assertStringify(Infinity, `Infinity`));
      it("negative Infinity", () => assertStringify(-Infinity, `-Infinity`));
    });

    describe("bigint", () => {
      it("zero", () => assertStringify(BigInt(0), `0n`));
      it("positive", () => assertStringify(BigInt(1), `1n`));
      it("negative", () => assertStringify(BigInt(-1), `-1n`));
      it("max safe integer", () =>
        assertStringify(
          BigInt(Number.MAX_SAFE_INTEGER),
          `${Number.MAX_SAFE_INTEGER}n`,
        ));
    });
  });

  describe("symbol", () => {
    it("unknown", () => assertStringify({ s: Symbol() }, `{s:Symbol()}`));
    it("unknown duplicated", () => {
      const a = Symbol();
      const b = Symbol();
      assertStringify(
        { a: [a, a], b: [b, b] },
        `{a:[_.a=Symbol(),_.a],b:[_.b=Symbol(),_.b]}`,
      );
    });
    it("for", () => assertStringify(Symbol.for("test"), `Symbol.for("test")`));
    it("iterator", () => assertStringify(Symbol.iterator, `Symbol.iterator`));
    it("asyncIterator", () =>
      assertStringify(Symbol.asyncIterator, `Symbol.asyncIterator`));
    it("hasInstance", () =>
      assertStringify(Symbol.hasInstance, `Symbol.hasInstance`));
    it("isConcatSpreadable", () =>
      assertStringify(Symbol.isConcatSpreadable, `Symbol.isConcatSpreadable`));
    it("match", () => assertStringify(Symbol.match, `Symbol.match`));
    it("matchAll", () => assertStringify(Symbol.matchAll, `Symbol.matchAll`));
    it("replace", () => assertStringify(Symbol.replace, `Symbol.replace`));
    it("search", () => assertStringify(Symbol.search, `Symbol.search`));
    it("species", () => assertStringify(Symbol.species, `Symbol.species`));
    it("split", () => assertStringify(Symbol.split, `Symbol.split`));
    it("toPrimitive", () =>
      assertStringify(Symbol.toPrimitive, `Symbol.toPrimitive`));
    it("toStringTag", () =>
      assertStringify(Symbol.toStringTag, `Symbol.toStringTag`));
    it("unscopables", () =>
      assertStringify(Symbol.unscopables, `Symbol.unscopables`));
  });

  describe("weakmap", () => {
    it("empty", () => assertStringify(new WeakMap(), `new WeakMap`));
    it("values ignored", () =>
      assertStringify(new WeakMap([[{}, 1]]), `new WeakMap`));
  });

  describe("weakset", () => {
    it("empty", () => assertStringify(new WeakSet(), `new WeakSet`));
    it("values ignored", () =>
      assertStringify(new WeakSet([{}]), `new WeakSet`));
  });

  describe("date", () => {
    it("epoch", () =>
      assertStringify(new Date(0), `new Date("1970-01-01T00:00:00.000Z")`));
    it("now", () =>
      assertStringify(new Date(), `new Date("${new Date().toISOString()}")`));
  });

  describe("map", () => {
    it("empty", () => assertStringify(new Map(), `new Map`));
    it("nested", () =>
      assertStringify(new Map([[1, new Map()]]), `new Map(_.a=[[1,new Map]])`));
    it("circular key", () => {
      const map = new Map();
      map.set(map, 1);
      assertStringify(
        map,
        `((m,i)=>(i[0][0]=m,i.forEach(i=>m.set(i[0],i[1])),m))(new Map,_.a=[[,1]])`,
      );
    });
    it("circular value", () => {
      const map = new Map();
      map.set(1, map);
      assertStringify(
        map,
        `((m,i)=>(i[0][1]=m,i.forEach(i=>m.set(i[0],i[1])),m))(new Map,_.a=[[1]])`,
      );
    });
    it("circular key and value", () => {
      const map = new Map();
      map.set(map, map);
      assertStringify(
        map,
        `((m,i)=>(i[0][0]=i[0][1]=m,i.forEach(i=>m.set(i[0],i[1])),m))(new Map,_.a=[[]])`,
      );
    });
    it("circular mixed", () => {
      const map = new Map<unknown, unknown>([[1, 2]]);
      map.set(map, map);
      map.set(3, 4);
      assertStringify(
        map,
        `((m,i)=>(i[1][0]=i[1][1]=m,i.forEach(i=>m.set(i[0],i[1])),m))(new Map,_.a=[[1,2],[],[3,4]])`,
      );
    });
    it("circular nested", () => {
      const map = new Map<unknown, unknown>([[1, 2]]);
      map.set(3, { nested: map });

      assertStringify(map, `new Map(_.a=[[1,2],[3,_.c={}]]),_.c.nested=_.b`);
    });
    it("dedupe value and keys across flushes", () => {
      const serializer = assertSerializer();
      const objA = { a: 1 };
      const objB = { b: 2 };
      const map = new Map<unknown, unknown>([[objA, objB]]);

      serializer.assertStringify(map, `new Map(_.a=[[{a:1},{b:2}]])`);
      serializer.assertStringify({ c: objA }, `{c:_.c=_.a[0][0]}`);
      serializer.assertStringify({ d: objB }, `{d:_.e=_.a[0][1]}`);
      serializer.assertStringify(
        { e: map, f: objA, g: objB },
        `{e:_.b,f:_.c,g:_.e}`,
      );
    });
  });

  describe("set", () => {
    it("empty", () => assertStringify(new Set(), `new Set`));
    it("nested", () =>
      assertStringify(new Set([new Set(), 1]), `new Set(_.a=[new Set,1])`));
    it("circular", () => {
      const set = new Set();
      set.add(set);
      assertStringify(
        set,
        `((s,i)=>(i[0]=s,i.forEach(i=>s.add(i)),s))(new Set,_.a=[])`,
      );
    });
    it("circular nested", () => {
      const set = new Set<unknown>([1]);
      set.add({ nested: set });

      assertStringify(set, `new Set(_.a=[1,_.c={}]),_.c.nested=_.b`);
    });
    it("dedupe values across flushes", () => {
      const serializer = assertSerializer();
      const objA = { a: 1 };
      const objB = { b: 2 };
      const set = new Set<unknown>([objA, objB]);
      serializer.assertStringify(set, `new Set(_.a=[{a:1},{b:2}])`);
      serializer.assertStringify({ c: objA }, `{c:_.c=_.a[0]}`);
      serializer.assertStringify({ d: objB }, `{d:_.e=_.a[1]}`);
      serializer.assertStringify(
        { e: set, f: objA, g: objB },
        `{e:_.b,f:_.c,g:_.e}`,
      );
    });
  });

  describe("object", () => {
    it("empty", () => assertStringify({}, `{}`));
    it("nested", () => assertStringify({ a: { b: 1 } }, `{a:{b:1}}`));
    it("dashed-keys", () => assertStringify({ "a-b": 1 }, `{"a-b":1}`));
    it("invalid-keys", () =>
      assertStringify({ "0": 1, "a:": 2, "[": 3 }, `{0:1,"a:":2,"[":3}`));
    it("circular", () => {
      const obj: any = { a: 1 };
      obj.obj = obj;
      assertStringify(obj, `{a:1},_.a.obj=_.a`);
    });
    it("circular nested", () => {
      const obj: any = { a: 1 };
      obj.b = { nested: obj };
      assertStringify(obj, `{a:1,b:_.b={}},_.b.nested=_.a`);
    });
    it("circular object", () => {
      const parent = {
        name: "parent",
      } as any;

      const child = {
        parent,
      };

      parent.firstChild = child;
      parent.children = [child];

      assertStringify(
        { parent },
        `{parent:_.a={name:"parent",firstChild:_.b={},children:[_.b]}},_.b.parent=_.a`,
      );
    });
    it("circular object combined assignments", () => {
      const parent = {
        name: "parent",
      } as any;

      const child = {
        parentA: parent,
        parentB: parent,
        "parent-c": parent,
      };

      parent.children = [child];

      assertStringify(
        { parent },
        `{parent:_.a={name:"parent",children:[_.b={}]}},_.b.parentA=_.b.parentB=_.b["parent-c"]=_.a`,
      );
    });

    it("circular assignments > 100 (deopt for chrome :crying-emoji:)", () => {
      const parent = {
        name: "parent",
        children: [],
      } as any;

      for (let i = 0; i < 101; i++) {
        parent.children.push({
          parent,
        });
      }

      assertStringify(
        { parent },
        `{parent:_.a={name:"parent",children:[_.b={},_.c={},_.d={},_.e={},_.f={},_.g={},_.h={},_.i={},_.j={},_.k={},_.l={},_.m={},_.n={},_.o={},_.p={},_.q={},_.r={},_.s={},_.t={},_.u={},_.v={},_.w={},_.x={},_.y={},_.z={},_.A={},_.B={},_.C={},_.D={},_.E={},_.F={},_.G={},_.H={},_.I={},_.J={},_.K={},_.L={},_.M={},_.N={},_.O={},_.P={},_.Q={},_.R={},_.S={},_.T={},_.U={},_.V={},_.W={},_.X={},_.Y={},_.Z={},_.$={},_.ab={},_.bb={},_.cb={},_.db={},_.eb={},_.fb={},_.gb={},_.hb={},_.ib={},_.jb={},_.kb={},_.lb={},_.mb={},_.nb={},_.ob={},_.pb={},_.qb={},_.rb={},_.sb={},_.tb={},_.ub={},_.vb={},_.wb={},_.xb={},_.yb={},_.zb={},_.Ab={},_.Bb={},_.Cb={},_.Db={},_.Eb={},_.Fb={},_.Gb={},_.Hb={},_.Ib={},_.Jb={},_.Kb={},_.Lb={},_.Mb={},_.Nb={},_.Ob={},_.Pb={},_.Qb={},_.Rb={},_.Sb={},_.Tb={},_.Ub={},_.Vb={},_.Wb={}]}},($=>(_.b.parent=$,_.c.parent=$,_.d.parent=$,_.e.parent=$,_.f.parent=$,_.g.parent=$,_.h.parent=$,_.i.parent=$,_.j.parent=$,_.k.parent=$,_.l.parent=$,_.m.parent=$,_.n.parent=$,_.o.parent=$,_.p.parent=$,_.q.parent=$,_.r.parent=$,_.s.parent=$,_.t.parent=$,_.u.parent=$,_.v.parent=$,_.w.parent=$,_.x.parent=$,_.y.parent=$,_.z.parent=$,_.A.parent=$,_.B.parent=$,_.C.parent=$,_.D.parent=$,_.E.parent=$,_.F.parent=$,_.G.parent=$,_.H.parent=$,_.I.parent=$,_.J.parent=$,_.K.parent=$,_.L.parent=$,_.M.parent=$,_.N.parent=$,_.O.parent=$,_.P.parent=$,_.Q.parent=$,_.R.parent=$,_.S.parent=$,_.T.parent=$,_.U.parent=$,_.V.parent=$,_.W.parent=$,_.X.parent=$,_.Y.parent=$,_.Z.parent=$,_.$.parent=$,_.ab.parent=$,_.bb.parent=$,_.cb.parent=$,_.db.parent=$,_.eb.parent=$,_.fb.parent=$,_.gb.parent=$,_.hb.parent=$,_.ib.parent=$,_.jb.parent=$,_.kb.parent=$,_.lb.parent=$,_.mb.parent=$,_.nb.parent=$,_.ob.parent=$,_.pb.parent=$,_.qb.parent=$,_.rb.parent=$,_.sb.parent=$,_.tb.parent=$,_.ub.parent=$,_.vb.parent=$,_.wb.parent=$,_.xb.parent=$,_.yb.parent=$,_.zb.parent=$,_.Ab.parent=$,_.Bb.parent=$,_.Cb.parent=$,_.Db.parent=$,_.Eb.parent=$,_.Fb.parent=$,_.Gb.parent=$,_.Hb.parent=$,_.Ib.parent=$,_.Jb.parent=$,_.Kb.parent=$,_.Lb.parent=$,_.Mb.parent=$,_.Nb.parent=$,_.Ob.parent=$,_.Pb.parent=$,_.Qb.parent=$,_.Rb.parent=$,_.Sb.parent=$,_.Tb.parent=$,_.Ub.parent=$,_.Vb.parent=$,_.Wb.parent=$))(_.a)`,
      );
    });

    it("known objects", () => {
      assertStringify(
        [console, Math, JSON, globalThis],
        `[console,Math,JSON,globalThis]`,
      );
    });
  });

  describe("array", () => {
    it("empty", () => assertStringify([], `[]`));
    it("nested", () => assertStringify([1, [2]], `[1,[2]]`));
    // eslint-disable-next-line no-sparse-arrays
    it("sparse", () => assertStringify([, 1, 2], `[,1,2]`));
    it("undefined", () => assertStringify([undefined, 1, 2], `[,1,2]`));
    it("circular", () => {
      const arr: any = [1];
      arr.push(arr);
      assertStringify(arr, `[1,],_.a[1]=_.a`);
    });
    it("circular nested", () => {
      const arr: any = [1];
      arr.push({ nested: arr });
      assertStringify(arr, `[1,_.b={}],_.b.nested=_.a`);
    });
    it("circular combined assignments", () => {
      const a: any = [];
      const b: any = [a, 1, a];
      a.push(b);
      a.push(2);
      a.push(b);

      assertStringify(a, `[_.b=[,1,],2,_.b],_.b[0]=_.b[2]=_.a`);
    });

    it("circular with empty", () => {
      const a: any = [];
      const b: any = [a, 1, a];
      a.push(b);
      a.push(2);
      a.push(undefined);

      assertStringify(a, `[_.b=[,1,],2,],_.b[0]=_.b[2]=_.a`);
    });
  });

  describe("null prototype", () => {
    it("empty", () => {
      const obj = Object.create(null);
      assertStringify(obj, `{__proto__:null}`);
    });

    it("nested", () => {
      const obj = Object.create(null);
      obj.a = Object.create(null);
      obj.a.b = 1;
      assertStringify(obj, `{a:{b:1,__proto__:null},__proto__:null}`);
    });
  });

  describe("misc", () => {
    it("nested", () =>
      assertStringify(
        {
          array: [
            {
              a: 1,
              b: ["c"],
            },
            2,
          ],
        },
        `{array:[{a:1,b:["c"]},2]}`,
      ));

    it("shared", () => {
      const registered = new Date(0);
      const pattern = /test/;
      const child = { name: "Henry" };
      const children = [child];

      const mother = {
        name: "Jane",
        registered,
        pattern,
        firstChild: child,
        children,
      };

      const father = {
        name: "Frank",
        registered,
        pattern,
        firstChild: child,
        children,
      };

      assertStringify(
        {
          mother,
          father,
        },
        `{mother:{name:"Jane",registered:_.b=new Date("1970-01-01T00:00:00.000Z"),pattern:_.c=/test/,firstChild:_.a={name:"Henry"},children:_.d=[_.a]},father:{name:"Frank",registered:_.b,pattern:_.c,firstChild:_.a,children:_.d}}`,
      );
    });

    it("unsupported constructor", () => {
      class Thing {}
      assertStringify({ thing: new Thing() }, `{}`);
    });

    it("unsupported prototype", () => {
      const obj = Object.create({ x: 1 });
      obj.y = 2;
      assertStringify(obj, `{y:2}`);
    });

    it("unsupported prototype with nested", () => {
      const obj = Object.create({ x: 1 });
      obj.y = { z: 2 };
      assertStringify(obj, `{y:{z:2}}`);
    });

    it("Symbol.iterator inline", () => {
      const obj = {
        x: 1,
        *[Symbol.iterator]() {
          yield 1;
          yield 2;
          yield 3;
        },
      };

      assertStringify(
        obj,
        `{x:1,*[(_.a=[1,2,3],Symbol.iterator)](){yield*_.a}}`,
      );
    });

    it("Symbol.iterator circular", () => {
      const obj = {
        x: 1,
        *[Symbol.iterator]() {
          yield 1;
          yield 2;
          yield obj;
        },
      };

      assertStringify(
        obj,
        `{x:1,*[(_.a=[1,2,],Symbol.iterator)](){yield*_.a}},_.a[2]=_.b`,
      );
    });

    it.skip("Symbol.iterator registered", () => {
      // Unsupported for now since we share the reference for iterators on attribute tags.
      const obj = {
        y: 2,
        [Symbol.iterator]: iterate,
      };

      function* iterate() {
        yield 1;
        yield 2;
        yield 3;
      }

      register("iterate", iterate);

      assertStringify(obj, `{y:2,[Symbol.iterator]:_._.iterate}`, {
        _: { iterate },
      });
    });
  });

  describe("typed arrays", () => {
    it("ArrayBuffer", () =>
      assertStringify(new ArrayBuffer(32), `new ArrayBuffer(32)`));
    it("Empty ArrayBuffer", () =>
      assertStringify(new ArrayBuffer(0), `new ArrayBuffer`));
    it("Uint8Array empty", () =>
      assertStringify(new Uint8Array(), `new Uint8Array`));
    it("Uint8Array", () =>
      assertStringify(new Uint8Array([1, 2, 3]), `new Uint8Array([1,2,3])`));
    it("Uint8ClampedArray", () =>
      assertStringify(
        new Uint8ClampedArray([1, 2, 3]),
        `new Uint8ClampedArray([1,2,3])`,
      ));
    it("Uint16Array", () =>
      assertStringify(new Uint16Array([1, 2, 3]), `new Uint16Array([1,2,3])`));
    it("Uint32Array", () =>
      assertStringify(new Uint32Array([1, 2, 3]), `new Uint32Array([1,2,3])`));
    it("Int8Array", () =>
      assertStringify(new Int8Array([1, 2, 3]), `new Int8Array([1,2,3])`));
    it("Int16Array", () =>
      assertStringify(new Int16Array([1, 2, 3]), `new Int16Array([1,2,3])`));
    it("Int32Array", () =>
      assertStringify(new Int32Array([1, 2, 3]), `new Int32Array([1,2,3])`));
    it("Float32Array", () =>
      assertStringify(
        new Float32Array([1, 2, 3]),
        `new Float32Array([1,2,3])`,
      ));
    it("Float64Array", () =>
      assertStringify(
        new Float64Array([1, 2, 3]),
        `new Float64Array([1,2,3])`,
      ));

    it("shared buffer, multiple views", () => {
      const buffer = new ArrayBuffer(32);
      const view1 = new Uint8Array(buffer);
      const view2 = new Uint16Array(buffer);
      const view3 = new Uint32Array(buffer);

      assertStringify(
        { view1, view2, view3 },
        `{view1:_.b=new Uint8Array(32),view2:new Uint16Array(_.a=_.b.buffer),view3:new Uint32Array(_.a)}`,
      );
    });

    it("shared buffer with content, multiple views", () => {
      const buffer = new ArrayBuffer(32);
      const view1 = new Uint8Array(buffer);
      const view2 = new Uint16Array(buffer);
      const view3 = new Uint32Array(buffer);

      view1[0] = 1;
      view2[1] = 2;
      view3[2] = 3;

      assertStringify(
        { view1, view2, view3 },
        `{view1:_.b=new Uint8Array([1,0,2,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),view2:new Uint16Array(_.a=_.b.buffer),view3:new Uint32Array(_.a)}`,
      );
    });

    it("shared buffer with content, multiple views, buffer first", () => {
      const buffer = new ArrayBuffer(32);
      const view1 = new Uint8Array(buffer);
      const view2 = new Uint16Array(buffer);
      const view3 = new Uint32Array(buffer);

      view1[0] = 1;
      view2[1] = 2;
      view3[2] = 3;

      assertStringify(
        { buffer, view1, view2, view3 },
        `{buffer:_.a=new Int8Array([1,0,2,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]).buffer,view1:new Uint8Array(_.a),view2:new Uint16Array(_.a),view3:new Uint32Array(_.a)}`,
      );
    });

    it("shared buffer with content, multiple views, buffer last", () => {
      const buffer = new ArrayBuffer(32);
      const view1 = new Uint8Array(buffer);
      const view2 = new Uint16Array(buffer);
      const view3 = new Uint32Array(buffer);

      view1[0] = 1;
      view2[1] = 2;
      view3[2] = 3;

      assertStringify(
        { view1, view2, view3, buffer },
        `{view1:_.b=new Uint8Array([1,0,2,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),view2:new Uint16Array(_.a=_.b.buffer),view3:new Uint32Array(_.a),buffer:_.a}`,
      );
    });

    it("shared empty array buffer, multiple views", () => {
      const buffer = new ArrayBuffer(0);
      const view1 = new Uint8Array(buffer);
      const view2 = new Uint16Array(buffer);
      const view3 = new Uint32Array(buffer);

      assertStringify(
        { view1, view2, view3 },
        `{view1:_.b=new Uint8Array,view2:new Uint16Array(_.a=_.b.buffer),view3:new Uint32Array(_.a)}`,
      );
    });

    it("with byte offset", () => {
      const buffer = new ArrayBuffer(32);
      const view1 = new Uint8Array(buffer, 8);
      const view2 = new Uint16Array(buffer, 8);
      const view3 = new Uint32Array(buffer, 8);

      assertStringify(
        { view1, view2, view3 },
        `{view1:new Uint8Array(_.a=new ArrayBuffer(32),8),view2:new Uint16Array(_.a,8),view3:new Uint32Array(_.a,8)}`,
      );
    });

    it("with byte offset and data", () => {
      const buffer = new ArrayBuffer(32);
      const view1 = new Uint8Array(buffer, 8);
      const view2 = new Uint16Array(buffer, 8);
      const view3 = new Uint32Array(buffer, 8);

      view1[0] = 1;
      view2[1] = 2;
      view3[2] = 3;

      assertStringify(
        { view1, view2, view3 },
        `{view1:new Uint8Array(_.a=new Int8Array([0,0,0,0,0,0,0,0,1,0,2,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]).buffer,8),view2:new Uint16Array(_.a,8),view3:new Uint32Array(_.a,8)}`,
      );
    });

    // it("BigInt64Array", () =>
    //   assertStringify(new BigInt64Array([1n, 2n, 3n]), `new BigInt64Array([1n,2n,3n])`));
    // it("BigUint64Array", () =>
    //   assertStringify(new BigUint64Array([1n, 2n, 3n]), `new BigUint64Array([1n,2n,3n])`));
  });

  describe("URL", () => {
    it("value", () =>
      assertStringify(
        new URL("https://example.com/?a=1&b=2"),
        `new URL("https://example.com/?a=1&b=2")`,
      ));
    it("duplicated", () => {
      const url = new URL("https://example.com");
      assertStringify(url, `new URL("https://example.com/")`);
      assertStringify([url, url], `[_.a=new URL("https://example.com/"),_.a]`);
    });
  });

  describe("URLSearchParams", () => {
    it("empty", () =>
      assertStringify(new URLSearchParams(), `new URLSearchParams`));
    it("value", () =>
      assertStringify(
        new URLSearchParams("a=1&b=2"),
        `new URLSearchParams("a=1&b=2")`,
      ));
    it("duplicated", () => {
      const url = new URLSearchParams("a=1&b=2");
      assertStringify(url, `new URLSearchParams("a=1&b=2")`);
      assertStringify([url, url], `[_.a=new URLSearchParams("a=1&b=2"),_.a]`);
    });
  });

  describe("Headers", () => {
    it("empty", () => assertStringify(new Headers(), `new Headers`));
    it("value", () =>
      assertStringify(
        new Headers({ a: "1", b: "2" }),
        `new Headers({a:"1",b:"2"})`,
      ));
    it("duplicated", () => {
      const headers = new Headers({ a: "1", b: "2" });
      assertStringify(headers, `new Headers({a:"1",b:"2"})`);
      assertStringify(
        [headers, headers],
        `[_.a=new Headers({a:"1",b:"2"}),_.a]`,
      );
    });
  });

  describe("FormData", () => {
    it("empty", () => assertStringify(new FormData(), `new FormData`));
    it("value", () => {
      const formData = new FormData();
      formData.append("a", "1");
      formData.append("b", "2");
      assertStringify(
        formData,
        `((f,i)=>(f,i.forEach(i=>f.append(i[0],i[1])),f))(new FormData,[["a","1"],["b","2"]])`,
      );
    });
    it("duplicated", () => {
      const formData = new FormData();
      formData.append("a", "1");
      formData.append("b", "2");
      assertStringify(
        formData,
        `((f,i)=>(f,i.forEach(i=>f.append(i[0],i[1])),f))(new FormData,[["a","1"],["b","2"]])`,
      );
      assertStringify(
        [formData, formData],
        `[_.a=((f,i)=>(f,i.forEach(i=>f.append(i[0],i[1])),f))(new FormData,[["a","1"],["b","2"]]),_.a]`,
      );
    });
  });

  describe("generator", () => {
    it("empty", () =>
      assertStringify((function* () {})(), `(function*(){})()`));
    it("single", () =>
      assertStringify(
        (function* () {
          yield 1;
        })(),
        `(function*(){yield 1})()`,
      ));
    it("multiple", () =>
      assertStringify(
        (function* () {
          yield 1;
          yield 2;
          yield 3;
        })(),
        `(function*(){yield 1;yield 2;yield 3})()`,
      ));
    it("nested", () =>
      assertStringify(
        (function* () {
          yield* (function* () {
            yield 1;
          })();
        })(),
        `(function*(){yield 1})()`,
      ));

    it("yield undefined", () => {
      const gen = (function* () {
        yield 1;
        yield undefined;
        yield 2;
        yield undefined;
      })();
      assertStringify(gen, `(function*(){yield 1;yield;yield 2;yield})()`);
    });
  });

  describe("errors", () => {
    it("Error", () => assertStringify(new Error("test"), `new Error("test")`));
    it("EvalError", () =>
      assertStringify(new EvalError("test"), `new EvalError("test")`));
    it("RangeError", () =>
      assertStringify(new RangeError("test"), `new RangeError("test")`));
    it("ReferenceError", () =>
      assertStringify(
        new ReferenceError("test"),
        `new ReferenceError("test")`,
      ));
    it("SyntaxError", () =>
      assertStringify(new SyntaxError("test"), `new SyntaxError("test")`));
    it("TypeError", () =>
      assertStringify(new TypeError("test"), `new TypeError("test")`));
    it("URIError", () =>
      assertStringify(new URIError("test"), `new URIError("test")`));

    describe("AggregateError", () => {
      it("empty", () =>
        assertStringify(new AggregateError([]), `new AggregateError([])`));
      it("single", () =>
        assertStringify(
          new AggregateError(["test"]),
          `new AggregateError(["test"])`,
        ));
      it("multiple", () =>
        assertStringify(
          new AggregateError(["test", "test2"]),
          `new AggregateError(["test","test2"])`,
        ));
      it("duplicate", () => {
        const error = new Error("test");
        assertStringify(
          new AggregateError([error, error], "test"),
          `new AggregateError([_.a=new Error("test"),_.a],"test")`,
        );
      });
      it("errors array referenced", () => {
        const agg = new AggregateError([new Error("test")], "test");
        assertStringify(
          { errors: agg.errors, agg },
          `{errors:_.a=[new Error("test")],agg:new AggregateError(_.a,"test")}`,
        );
      });
    });
  });

  describe("function", () => {
    it("known functions", () => {
      assertStringify(
        [console.log, Object, Math.pow, JSON.stringify],
        `[console.log,Object,Math.pow,JSON.stringify]`,
      );
    });

    it("unknown functions", () => {
      const fn = () => 1;
      assertStringify([fn, "a"], `[,"a"]`);
    });
  });

  describe("registry", () => {
    it("reference object", () => {
      const obj = { a: 1 };
      register("obj", obj);
      assertStringify(obj, `_._.obj`, { _: { obj } });
    });

    it("reference function", () => {
      const fn = () => 1;
      register("fn", fn);
      assertStringify(fn, `_._.fn`, { _: { fn } });
    });

    it("reference non object key id", () => {
      const obj = { a: 1 };
      register("a-b-c", obj);
      assertStringify(obj, `_._["a-b-c"]`, { _: { "a-b-c": obj } });
    });

    it("scoped reference", () => {
      const builder = (s: typeof scope) => () => s.value;
      const scope = { value: 1 };
      const obj = { fn: builder(scope) };
      register("fn", obj.fn, scope);
      assertStringify(obj, `{fn:_._.fn(_.a={value:1})}`, {
        _: { fn: builder },
      });
    });

    it("circular scoped reference", () => {
      const scope = { value: 1 } as any;
      const builder =
        ({ value }: typeof scope) =>
        () =>
          value;
      scope.fn = builder(scope);
      register("fn", scope.fn, scope);
      assertStringify(scope, `{value:1},_.a.fn=_._.fn(_.a)`, {
        _: { fn: builder },
      });
    });

    it("read after circular scoped reference", () => {
      const scope = { value: 1 } as any;
      const builder =
        ({ value }: typeof scope) =>
        () =>
          value;
      scope.fn = builder(scope);
      register("fn", scope.fn, scope);
      assertStringify(
        {
          scope,
          fn: scope.fn,
        },
        `{scope:_.a={value:1}},_.a.fn=_.b.fn=_._.fn(_.a)`,
        {
          _: { fn: builder },
        },
      );
    });

    it("getter", () => {
      const scope = { value: 1 } as any;
      const fn = () => scope.value;
      fn.toString = () => "()=>s.value";
      const obj = { a: 1, fn };
      registerGetter("value", fn, scope);
      assertStringify(obj, `{a:1,fn:(s=>()=>s.value)(_.a={value:1})}`);
    });
  });

  describe("serializer", () => {
    it("multiple flushes", () => {
      const serializer = assertSerializer();
      serializer.assertStringify({ a: 1 }, `{a:1}`);
      serializer.assertStringify({ a: 2 }, `{a:2}`);
    });

    it("multiple flushes with shared references", () => {
      const serializer = assertSerializer();
      const obj = { a: 1 };
      serializer.assertStringify(obj, `{a:1}`);
      serializer.assertStringify(obj, `_.a`);
    });

    it("multiple flushes with shared references and nested", () => {
      const serializer = assertSerializer();
      const nested = { b: 1 };
      const obj = { a: nested };
      serializer.assertStringify(obj, `{a:{b:1}}`);
      serializer.assertStringify({ c: nested }, `{c:_.b=_.a.a}`);
      serializer.assertStringify({ d: nested }, `{d:_.b}`);
    });
  });

  describe("promise", () => {
    it("resolves", async () => {
      const serializer = assertSerializer();
      const obj = { x: 1 };
      const promise = Promise.resolve(obj);
      const [result] = await serializer.assertStringify(
        promise,
        `new Promise((f,r)=>_.a={f,r})`,
        `_.a.f(_.a={x:1})`,
      );
      assert.deepEqual(serializer.get("a"), obj);
      assert.deepEqual(await result, obj);
    });

    it("rejects", async () => {
      const serializer = assertSerializer();
      const error = new Error("test");
      const promise = Promise.reject(error);
      const [result] = await serializer.assertStringify(
        promise,
        `new Promise((f,r)=>_.a={f,r})`,
        `_.a.r(_.a=new Error("test"))`,
      );
      assert.deepEqual(serializer.get("a"), error);
      await assert.rejects(result, error);
    });
  });

  describe("async generator", () => {
    it("resolves", async () => {
      const serializer = assertSerializer();
      const yielded = [{ x: 1 }, { y: 2 }];
      const returned = { z: 3 };
      const [result] = await serializer.assertStringify(
        (async function* () {
          yield* yielded;
          return returned;
        })(),
        `(async function*(_,f,v,l,i,p=a=>l=new Promise((r,j)=>{f=_.r=r;_.j=j}),a=((_.f=v=>{f(v);a.push(p())}),[p()])){for(i of a)v=await i,i!=l&&(yield v);return v})(_.a={})`,
        `_.a.f(_.c={x:1})`,
        `_.a.f(_.d={y:2})`,
        `_.a.r(_.e={z:3})`,
      );

      assert.deepEqual(await consumeIterator(result), {
        yielded,
        returned,
        errored: undefined,
      });
    });

    it("rejects", async () => {
      const serializer = assertSerializer();
      const yielded = [{ x: 1 }, { y: 2 }];
      const errored = new Error("boom");
      const [result] = await serializer.assertStringify(
        (async function* () {
          yield* yielded;
          throw errored;
        })(),
        `(async function*(_,f,v,l,i,p=a=>l=new Promise((r,j)=>{f=_.r=r;_.j=j}),a=((_.f=v=>{f(v);a.push(p())}),[p()])){for(i of a)v=await i,i!=l&&(yield v);return v})(_.a={})`,
        `_.a.f(_.c={x:1})`,
        `_.a.f(_.d={y:2})`,
        `_.a.j(_.e=new Error("boom"))`,
      );

      assert.deepEqual(await consumeIterator(result), {
        yielded,
        errored,
        returned: undefined,
      });
    });
  });

  describe("readable stream", () => {
    it("resolves with sync flushes", async () => {
      const serializer = assertSerializer();
      const yielded = [{ x: 1 }, { y: 2 }];
      const stream = new ReadableStream({
        start(ctrl) {
          for (const value of yielded) {
            ctrl.enqueue(value);
          }
          ctrl.close();
        },
      });
      const [result] = await serializer.assertStringify(
        stream,
        `new ReadableStream({start(c){(async(_,f,v,l,i,p=a=>l=new Promise((r,j)=>{f=_.r=r;_.j=j}),a=((_.f=v=>{f(v);a.push(p())}),[p()]))=>{for(i of a)v=await i,i==l?c.close():c.enqueue(v)})(_.a={}).catch(e=>c.error(e))}})`,
        `_.a.f(_.c={x:1}),_.a.f(_.d={y:2})`,
        `_.a.r()`,
      );

      assert.deepEqual(await consumeReader(result.getReader()), {
        yielded,
        returned: undefined,
        errored: undefined,
      });
    });

    it("resolves with async flushes", async () => {
      const serializer = assertSerializer();
      const yielded = [{ x: 1 }, { y: 2 }];
      const stream = new ReadableStream({
        async start(ctrl) {
          for (const value of yielded) {
            ctrl.enqueue(value);
            await new Promise((r) => setTimeout(r, 0));
          }
          ctrl.close();
        },
      });
      const [result] = await serializer.assertStringify(
        stream,
        `new ReadableStream({start(c){(async(_,f,v,l,i,p=a=>l=new Promise((r,j)=>{f=_.r=r;_.j=j}),a=((_.f=v=>{f(v);a.push(p())}),[p()]))=>{for(i of a)v=await i,i==l?c.close():c.enqueue(v)})(_.a={}).catch(e=>c.error(e))}})`,
        `_.a.f(_.c={x:1})`,
        `_.a.f(_.d={y:2})`,
        `_.a.r()`,
      );

      assert.deepEqual(await consumeReader(result.getReader()), {
        yielded,
        returned: undefined,
        errored: undefined,
      });
    });

    it("rejects sync", async () => {
      const serializer = assertSerializer();
      const yielded = [{ x: 1 }, { y: 2 }];
      const errored = new Error("boom");
      const stream = new ReadableStream({
        start(ctrl) {
          for (const value of yielded) {
            ctrl.enqueue(value);
          }
          ctrl.error(errored);
        },
      });
      const [result] = await serializer.assertStringify(
        stream,
        `new ReadableStream({start(c){(async(_,f,v,l,i,p=a=>l=new Promise((r,j)=>{f=_.r=r;_.j=j}),a=((_.f=v=>{f(v);a.push(p())}),[p()]))=>{for(i of a)v=await i,i==l?c.close():c.enqueue(v)})(_.a={}).catch(e=>c.error(e))}})`,
        `_.a.j(_.c=new Error("boom"))`,
      );

      assert.deepEqual(await consumeReader(result.getReader()), {
        yielded: [],
        returned: undefined,
        errored,
      });
    });

    it("rejects async", async () => {
      const serializer = assertSerializer();
      const yielded = [{ x: 1 }];
      const errored = new Error("boom");
      const stream = new ReadableStream({
        async start(ctrl) {
          for (const value of yielded) {
            ctrl.enqueue(value);
            await new Promise((r) => setTimeout(r, 0));
          }
          ctrl.error(errored);
        },
      });
      const [result] = await serializer.assertStringify(
        stream,
        `new ReadableStream({start(c){(async(_,f,v,l,i,p=a=>l=new Promise((r,j)=>{f=_.r=r;_.j=j}),a=((_.f=v=>{f(v);a.push(p())}),[p()]))=>{for(i of a)v=await i,i==l?c.close():c.enqueue(v)})(_.a={}).catch(e=>c.error(e))}})`,
        `_.a.f(_.c={x:1})`,
        `_.a.j(_.d=new Error("boom"))`,
      );

      assert.deepEqual(await consumeReader(result.getReader()), {
        yielded,
        returned: undefined,
        errored,
      });
    });
  });

  describe("request", () => {
    it("url only", () =>
      assertStringify(
        new Request("https://ebay.com/"),
        `new Request("https://ebay.com/")`,
      ));
    it("method", () =>
      assertStringify(
        new Request("https://ebay.com/", { method: "POST" }),
        `new Request("https://ebay.com/",{method:"POST"})`,
      ));

    it("headers", () => {
      const req = new Request("https://ebay.com/", {
        headers: { "content-type": "text/plain" },
        method: "POST",
      });
      assertStringify(
        req,
        `new Request("https://ebay.com/",{headers:{"content-type":"text/plain"},method:"POST"})`,
      );

      assertStringify(
        { req: req, headers: req.headers },
        `{req:_.b=new Request("https://ebay.com/",{headers:{"content-type":"text/plain"},method:"POST"}),headers:_.a=_.b.headers}`,
      );
    });

    it("cache", () =>
      assertStringify(
        new Request("https://ebay.com/", { cache: "no-store" }),
        `new Request("https://ebay.com/",{cache:"no-store"})`,
      ));

    it("credentials", () =>
      assertStringify(
        new Request("https://ebay.com/", { credentials: "omit" }),
        `new Request("https://ebay.com/",{credentials:"omit"})`,
      ));

    it("integrity", () =>
      assertStringify(
        new Request("https://ebay.com/", { integrity: "sha-256" }),
        `new Request("https://ebay.com/",{integrity:"sha-256"})`,
      ));

    it("keepalive", () =>
      assertStringify(
        new Request("https://ebay.com/", { keepalive: true }),
        `new Request("https://ebay.com/",{keepalive:true})`,
      ));

    it("mode", () =>
      assertStringify(
        new Request("https://ebay.com/", { mode: "no-cors" }),
        `new Request("https://ebay.com/",{mode:"no-cors"})`,
      ));

    it("redirect", () =>
      assertStringify(
        new Request("https://ebay.com/", { redirect: "manual" }),
        `new Request("https://ebay.com/",{redirect:"manual"})`,
      ));

    it("referrer", () =>
      assertStringify(
        new Request("https://ebay.com/", { referrer: "https://google.com/" }),
        `new Request("https://ebay.com/",{referrer:"https://google.com/"})`,
      ));

    it("referrerPolicy", () =>
      assertStringify(
        new Request("https://ebay.com/", { referrerPolicy: "no-referrer" }),
        `new Request("https://ebay.com/",{referrerPolicy:"no-referrer"})`,
      ));

    it("body", async () => {
      const serializer = assertSerializer();
      const obj = { a: 1 };
      const request = new Request("https://ebay.com/", {
        method: "POST",
        duplex: "half",
        body: JSON.stringify(obj),
      } as any);
      const [result] = await serializer.assertStringify(
        request,
        `new Request("https://ebay.com/",{body:new ReadableStream({start(c){(async(_,f,v,l,i,p=a=>l=new Promise((r,j)=>{f=_.r=r;_.j=j}),a=((_.f=v=>{f(v);a.push(p())}),[p()]))=>{for(i of a)v=await i,i==l?c.close():c.enqueue(v)})(_.a={}).catch(e=>c.error(e))}}),duplex:"half",headers:{"content-type":"text/plain;charset=UTF-8"},method:"POST"})`,
        `_.a.f(_.c=new Uint8Array([123,34,97,34,58,49,125]))`,
        `_.a.r()`,
      );

      assert.deepEqual(await result.json(), obj);
    });
  });

  describe("response", () => {
    it("empty", () => assertStringify(new Response(), `new Response`));
    it("status", () =>
      assertStringify(
        new Response(null, { status: 301 }),
        `new Response(null,{status:301})`,
      ));
    it("statusText", () =>
      assertStringify(
        new Response(null, { statusText: "Moved Permanently" }),
        `new Response(null,{statusText:"Moved Permanently"})`,
      ));
    it("headers", () => {
      const res = new Response(null, { headers: { a: "1", b: "2" } });
      assertStringify(res, `new Response(null,{headers:{a:"1",b:"2"}})`);

      assertStringify(
        { res: res, headers: res.headers },
        `{res:_.b=new Response(null,{headers:{a:"1",b:"2"}}),headers:_.a=_.b.headers}`,
      );
    });

    it("buffer", async () => {
      const serializer = assertSerializer();
      const response = new Response(new Int8Array([116, 101, 115, 116]));
      const [result] = await serializer.assertStringify(
        response,
        `new Response(new ReadableStream({start(c){(async(_,f,v,l,i,p=a=>l=new Promise((r,j)=>{f=_.r=r;_.j=j}),a=((_.f=v=>{f(v);a.push(p())}),[p()]))=>{for(i of a)v=await i,i==l?c.close():c.enqueue(v)})(_.a={}).catch(e=>c.error(e))}}))`,
        `_.a.f(_.c=new Uint8Array([116,101,115,116]))`,
        `_.a.r()`,
      );

      assert.deepEqual(await consumeReader(result.body!.getReader()), {
        yielded: [new Uint8Array([116, 101, 115, 116])],
        errored: undefined,
        returned: undefined,
      });
    });

    it("ReadableStream string encoded", async () => {
      const serializer = assertSerializer();
      const encoder = new TextEncoder();
      const response = new Response(
        new ReadableStream({
          async start(ctrl) {
            ctrl.enqueue(encoder.encode("first"));
            await new Promise((r) => setTimeout(r, 0));
            ctrl.enqueue(encoder.encode("second"));
            await new Promise((r) => setTimeout(r, 0));
            ctrl.enqueue(encoder.encode("third"));
            ctrl.close();
          },
        }),
      );

      const [result] = await serializer.assertStringify(
        response,
        `new Response(new ReadableStream({start(c){(async(_,f,v,l,i,p=a=>l=new Promise((r,j)=>{f=_.r=r;_.j=j}),a=((_.f=v=>{f(v);a.push(p())}),[p()]))=>{for(i of a)v=await i,i==l?c.close():c.enqueue(v)})(_.a={}).catch(e=>c.error(e))}}))`,
        `_.a.f(_.c=new Uint8Array([102,105,114,115,116]))`,
        `_.a.f(_.d=new Uint8Array([115,101,99,111,110,100]))`,
        `_.a.f(_.e=new Uint8Array([116,104,105,114,100])),_.a.r()`,
      );

      assert.equal(await result.text(), "firstsecondthird");
    });

    it("json", async () => {
      const serializer = assertSerializer();
      const response = new Response(JSON.stringify({ a: 1 }), {
        headers: { "content-type": "application/json" },
      });
      const [result] = await serializer.assertStringify(
        response,
        `new Response(new ReadableStream({start(c){(async(_,f,v,l,i,p=a=>l=new Promise((r,j)=>{f=_.r=r;_.j=j}),a=((_.f=v=>{f(v);a.push(p())}),[p()]))=>{for(i of a)v=await i,i==l?c.close():c.enqueue(v)})(_.a={}).catch(e=>c.error(e))}}),{headers:{"content-type":"application/json"}})`,
        `_.a.f(_.c=new Uint8Array([123,34,97,34,58,49,125]))`,
        `_.a.r()`,
      );

      assert.deepEqual(await result.json(), { a: 1 });
    });
  });
});

function assertSerializer(ctx: Record<PropertyKey, unknown> = {}) {
  const serializer = new Serializer();
  return {
    get<T = any>(key: string) {
      return ctx[key] as T;
    },
    assertStringify<T>(
      val: T,
      first: string,
      ...flushes: string[]
    ): [T] | Promise<[T]> {
      const createDeferred = () => {
        let resolve!: () => void;
        let reject!: (err: unknown) => void;
        const promise = new Promise<void>((res, rej) => {
          resolve = res;
          reject = rej;
        });
        return Object.assign(promise, { resolve, reject });
      };

      let promiseIndex = 0;
      const promises: ReturnType<typeof createDeferred>[] = [];
      const boundary = {
        signal: {
          aborted: false,
        },
        startAsync() {
          promises.push(createDeferred());
        },
        endAsync() {
          promises[promiseIndex++].resolve();
        },
      } as any as Boundary;
      const result = assertSerializedIsActual(
        val,
        serializer.stringify(val, boundary),
        first,
        ctx,
      );

      if (flushes.length) {
        return (async () => {
          let promiseIndex = 0;
          for (const flush of flushes) {
            await promises[promiseIndex++];
            const actual = serializer.stringify(undefined, boundary);
            assert.equal(actual?.replace(/^_=>[({](.*?)[})]$/, "$1"), flush);
            (0, eval)(actual)(ctx);
          }

          return [result];
        })();
      } else {
        return [result];
      }
    },
  };
}

function assertStringify(
  val: unknown,
  serialized: string,
  ctx?: Record<PropertyKey, unknown>,
) {
  assertSerializedIsActual(val, stringify(val), serialized, ctx);
}

function assertSerializedIsActual(
  val: unknown,
  actual: string,
  serialized: string,
  ctx: Record<PropertyKey, unknown> = {},
) {
  assert.equal(
    actual.replace(/^_=>[({](?:(_\.[^=]+)=)?(.*?)(?:,\1)?[})]$/, "$2"),
    serialized,
  );
  const actualValue = (0, eval)(actual)(ctx);
  assertIsDeepSubset(actualValue, val);
  return actualValue;
}

function assertIsDeepSubset(
  subset: unknown,
  superset: unknown,
  accessor: string = "",
  seen = new Set<unknown>(),
) {
  if (Object.is(subset, superset)) return;

  if (typeof subset === "symbol") {
    assertEqualAtAccessor(String(subset), String(superset), accessor);
    return;
  }

  if (typeof subset === "function") {
    assertEqualAtAccessor(String(subset), String(superset), accessor);
    assertIsDeepSubset(subset(), (superset as any)(), `${accessor}()`, seen);
    return;
  }

  if (typeof subset !== "object" || subset === null) {
    assertEqualAtAccessor(subset, superset, accessor);
    return;
  }

  if (seen.has(subset)) return;
  seen.add(subset);

  const aConstructor = subset.constructor?.name || "Null Prototype";
  const bConstructor =
    (superset as object).constructor?.name || "Null Prototype";
  assert.equal(
    aConstructor,
    bConstructor,
    `${aConstructor} !== ${bConstructor} at ${accessor}`,
  );

  if (aConstructor === "Promise") {
    (subset as Promise<unknown>).catch(() => {});
  }

  for (const key of Reflect.ownKeys(subset)) {
    switch (key) {
      case "stack":
        break;
      case "length":
        assert.equal(
          (subset as any).length <= (superset as any).length,
          true,
          `${accessor} length mismatch: ${(subset as any).length} > ${(superset as any).length}`,
        );
        break;
      case Symbol.iterator: {
        assert.equal(
          hasSymbolIterator(superset),
          true,
          `${accessor}[Symbol.iterator]`,
        );
        const subsetArr = [...(subset as Iterable<unknown>)];
        const superSetArr = [...(superset as Iterable<unknown>)];
        for (let i = 0; i < subsetArr.length; i++) {
          assertIsDeepSubset(
            subsetArr[i],
            superSetArr[i],
            `${accessor}[${i}]`,
            seen,
          );
        }
        break;
      }
      default:
        if (typeof key !== "symbol") {
          assertIsDeepSubset(
            (subset as any)[key],
            (superset as any)[key],
            `${accessor}.${key}`,
            seen,
          );
        }
        break;
    }
  }
}

function assertEqualAtAccessor<T>(
  a: unknown,
  b: T,
  accessor: string | number,
): asserts a is T {
  assert.deepEqual(a, b, `${inspect(a)} !== ${inspect(b)} at ${accessor}`);
}

async function consumeIterator(iter: AsyncIterator<unknown>) {
  const yielded: unknown[] = [];
  let errored: unknown = undefined;
  let returned: unknown = undefined;

  while (true) {
    try {
      const next = await iter.next();
      if (next.done) {
        returned = next.value;
        break;
      }
      yielded.push(next.value);
    } catch (err) {
      errored = err;
      break;
    }
  }

  return { yielded, errored, returned };
}

async function consumeReader(reader: ReadableStreamDefaultReader) {
  const yielded: unknown[] = [];
  let errored: unknown = undefined;
  let returned: unknown = undefined;

  while (true) {
    try {
      const next = await reader.read();
      if (next.done) {
        returned = next.value;
        break;
      }
      yielded.push(next.value);
    } catch (err) {
      errored = err;
      break;
    }
  }

  return { yielded, errored, returned };
}

function hasSymbolIterator(
  value: unknown,
): value is { [Symbol.iterator](): IterableIterator<unknown> } {
  return Symbol.iterator in (value as any);
}
