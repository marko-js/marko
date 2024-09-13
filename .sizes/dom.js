var e = [],
  t = Symbol();
function n(n) {
  return (n[Symbol.iterator] = l), (n[t] = e), n;
}
function r(r, l) {
  return r ? (r[t] === e ? (r[t] = [l]) : r[t].push(l), r) : n(l);
}
function* l() {
  yield this, yield* this[t];
}
function i(e, t) {
  for (let n in e) t(n, e[n]);
}
function o(e, t) {
  if (e) {
    let n = 0;
    for (let r of e) t(r, n++);
  }
}
function f(e, t, n, r) {
  let l = t || 0,
    i = n || 1;
  for (let t = (e - l) / i, n = 0; n <= t; n++) r(l + n * i);
}
function u(e) {
  return { u: 1, $global: e };
}
var a = u({});
function c(e) {
  return (a.a = a.b = e), a;
}
function s(e) {
  d(e), e.d?.h?.delete(e);
  let t = e.x?.c;
  if (t) for (let n of t) n.j?.(e);
  return e;
}
function d(e) {
  let t = e.h;
  if (t) for (let e of t) d(e);
  let n = e.l;
  if (n) for (let e of n.values()) e.abort();
}
function h(e) {
  let t = e.d;
  for (; t && !t.h?.has(e); ) (t.h ||= new Set()).add(e), (t = (e = t).d);
}
function g(e) {
  s(e);
  let t = e.a,
    n = e.b.nextSibling;
  for (; t !== n; ) {
    let e = t.nextSibling;
    t.remove(), (t = e);
  }
}
function p(e, t, n) {
  let r = e.a,
    l = e.b.nextSibling;
  for (; r !== l; ) {
    let e = r.nextSibling;
    t.insertBefore(r, n), (r = e);
  }
}
function v(e, t) {
  let n = e.l;
  if (n) {
    let e = n.get(t);
    e && (e.abort(), n.delete(t));
  }
}
function b(e, t) {
  let n = (e.l ||= new Map()),
    r = n.get(t);
  return r || (h(e), n.set(t, (r = new AbortController()))), r.signal;
}
function k(e, t) {
  return t ? e : "";
}
var y = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function m(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !y.test(e) ? t + "px" : t}`
    : "";
}
function w(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          l = "";
        if (Array.isArray(e))
          for (let i of e) {
            let e = w(i, t, n);
            "" !== e && ((r += l + e), (l = t));
          }
        else
          for (let i in e) {
            let o = n(i, e[i]);
            "" !== o && ((r += l + o), (l = t));
          }
        return r;
      }
  }
  return "";
}
function C(e) {
  if (e) return e.renderBody || e.default || e;
}
var S = 2147483647;
var A = new Map(),
  N = new WeakMap(),
  x = { capture: !0 };
function M(e, t, n) {
  let r = A.get(t);
  r || A.set(t, (r = new WeakMap())),
    r.has(e) ||
      (function (e, t) {
        let n = e.getRootNode(),
          r = N.get(n);
        r || N.set(n, (r = new Set())),
          r.has(t) || (r.add(t), n.addEventListener(t, $, x));
      })(e, t),
    r.set(e, n || void 0);
}
function $(e) {
  let t = e.target;
  if (t) {
    let n = A.get(e.type);
    if ((n.get(t)?.(e, t), e.bubbles))
      for (; (t = t.parentElement) && !e.cancelBubble; ) n.get(t)?.(e, t);
  }
}
var I,
  E = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (I = !1), le();
      }),
      t
    );
  })();
function T() {
  le(), requestAnimationFrame(V);
}
function V() {
  E.postMessage(0);
}
var B = {},
  W = {},
  _ = {};
function j(e, t) {
  let n = e + "#";
  return (e, r) => {
    r !== B && void 0 === e[n] && t(e, r);
  };
}
function O(e, t) {
  return (e, n) => {
    t(e, n);
  };
}
function q(e, t, n) {
  let r = e + "#",
    l = n && ((e, t) => (l = n())(e, t));
  return (n, i) => {
    if (i === B) 1 === (n[r] = (n[r] ?? 0) + 1) && l?.(n, B);
    else if (i !== _) {
      let o = void 0 !== n[r];
      1 === (n[r] ||= 1) &&
        (i === W || (o && n[e] === i)
          ? l?.(n, W)
          : ((n[e] = i), t?.(n, i), l?.(n, _))),
        n[r]--;
    }
  };
}
var D = 0;
function P(e, t, n) {
  let r = "?" + D++,
    l = r + "#",
    i = n && ((e, t) => (i = n())(e, t));
  return (n, o) => {
    o === B
      ? 1 === (n[l] = (n[l] ?? 0) + 1) && i?.(n, B)
      : void 0 === n[l]
        ? ((n[l] = e - 1), (n[r] = !0))
        : 0 == --n[l]
          ? o === _ || n[r]
            ? ((n[r] = !1), t(n, 0), i?.(n, _))
            : i?.(n, W)
          : (n[r] ||= o === _);
  };
}
var R = (e) => e._;
function L(e, t, n = R, r) {
  let l = "?" + D++,
    i = l + 1,
    o = "function" == typeof e ? e : () => e,
    f = r && ((e, t) => (f = r())(e, t));
  return (e, r) => {
    if (r === B) 1 === (e[i] = (e[i] ?? 0) + 1) && f?.(e, B);
    else {
      let u, a;
      if (void 0 === e[i]) {
        (u = n(e)), (a = o(e));
        let t = u[a + "#"],
          l = void 0 === t ? !u.u : 0 === t;
        (e[i] = l ? 1 : 2), (r = _);
      }
      0 == --e[i]
        ? r === _ || e[l]
          ? ((e[l] = !1), (u ||= n(e)), (a ||= o(e)), t?.(e, u[a]), f?.(e, _))
          : f?.(e, W)
        : (e[l] ||= r === _);
    }
  };
}
function z(e, t, n = R, r) {
  let l = "function" == typeof e ? e : () => e,
    i = L(l, t, n, r),
    o = new WeakMap();
  return (
    (i.g = (e) => {
      let t = (t) => i(e, t),
        r = n(e),
        f = l(e) + "*";
      o.set(e, t), (r[f] ||= new Set()).add(t);
    }),
    (i.j = (e) => {
      let t = n(e),
        r = l(e) + "*";
      t[r]?.delete(o.get(e)), o.delete(e);
    }),
    i
  );
}
function F(e, t) {
  let n = (n, r) => {
    let l = n[t];
    for (let t of e) t(l, r);
  };
  return (
    (n.g = (n) => {
      let r = n[t];
      for (let t of e) t.g?.(r);
    }),
    (n.j = (n) => {
      let r = n[t];
      for (let t of e) t.j?.(r);
    }),
    n
  );
}
function U(e) {
  let t = e + "*";
  return (e, n) => {
    let r = e[t];
    if (r) for (let e of r) e(n);
  };
}
function G(e, t, n) {
  e[t]["/"] = (t) => n(e, t);
}
var J = (e, t) => e["/"]?.(t),
  Z = (e, t, n) => {
    let r = e?.c;
    if (r) for (let e of r) e(t, n);
  },
  H = new WeakMap();
function K({ $global: e }) {
  let t = H.get(e) || 0;
  return H.set(e, t + 1), "c" + e.runtimeId + e.renderId + t.toString(36);
}
function Q(e, t) {
  return (n, r) => {
    t(n[e], r);
  };
}
function X(e) {
  return (t, n) => {
    for (let r of e) r(t, n);
  };
}
var Y = [],
  ee = [];
function te(e, t, n, r) {
  return n ? (n(r), r) : ne(e, t, r);
}
function ne(e, t, n) {
  return I || ((I = !0), queueMicrotask(T)), t(e, B), Y.push(e, t, n), n;
}
function re(e, t) {
  ee.push(e, t);
}
function le() {
  try {
    ue();
  } finally {
    Y = [];
  }
  try {
    fe();
  } finally {
    ee = [];
  }
}
function ie(e) {
  let t = Y,
    n = ee;
  (Y = []), (ee = []);
  try {
    e(), ue(), (Y = t), fe();
  } finally {
    (Y = t), (ee = n);
  }
}
function oe(e) {
  let t = Y,
    n = ee,
    r = (ee = []);
  Y = [];
  try {
    e(), ue();
  } finally {
    (Y = t), (ee = n);
  }
  return r;
}
function fe(e = ee) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function ue() {
  for (let e = 0; e < Y.length; e += 3) {
    let t = Y[e + 0];
    (0, Y[e + 1])(t, Y[e + 2]);
  }
}
function ae(e) {
  return e.replace(/[^\p{L}\p{N}]/gu, "");
}
var ce = {},
  se = class {
    m = [];
    n = {};
    y = { _: ce };
    constructor(e, t, n) {
      (this.z = e), (this.A = t), (this.o = n), (this.p = e[n]), this.q();
    }
    w() {
      this.p.w(), this.q();
    }
    q() {
      let e = this.p,
        t = this.y,
        n = this.n,
        r = e.v,
        l = new Map();
      if (r.length) {
        let t = e.i.length,
          i = new Map();
        e.v = [];
        let o = (e, t = this.f, r = e) => {
          let o = (n[t] ||= {}),
            f = r;
          for (; 8 === (f = f.previousSibling).nodeType; );
          o.b = f;
          let u = (o.a ||= f),
            a = i.size;
          for (let [e, n] of i) {
            if (!a--) break;
            e !== t &&
              4 & u.compareDocumentPosition(n) &&
              2 & r.compareDocumentPosition(n) &&
              (l.set("" + e, t), i.delete(e));
          }
          return i.set(t, e), o;
        };
        for (let e of r) {
          let r = e.data,
            l = r[t],
            f = parseInt(r.slice(t + 1)),
            u = (n[f] ||= {}),
            a = r.indexOf(" ") + 1,
            c = a ? r.slice(a) : "";
          if ("*" === l) u[c] = e.previousSibling;
          else if ("$" === l) i.set(f, e);
          else if ("[" === l)
            this.f && (c && o(e), this.m.push(this.f)), (this.f = f), (u.a = e);
          else if ("]" === l) {
            if (((u[c] = e), f < this.f)) {
              let t = e.parentNode,
                n = o(e).a;
              t && t !== n.parentNode && t.prepend(n), (this.f = this.m.pop());
            }
          } else if ("|" === l) {
            u[parseInt(c)] = e;
            let t = JSON.parse("[" + c.slice(c.indexOf(" ") + 1) + "]"),
              n = e;
            for (let r = t.length - 1; r >= 0; r--) n = o(e, t[r], n).b;
          }
        }
      }
      let i = e.r;
      if (i) {
        e.r = [];
        let r = i.length,
          o = 0;
        try {
          for (de = !0; o < r; ) {
            let e = i[o++];
            if ("function" == typeof e) {
              let r = e(t),
                { $global: i } = n;
              i ||
                ((n.$global = i = r.$ || {}),
                (i.runtimeId = this.A),
                (i.renderId = this.o));
              for (let e in r)
                if ("$" !== e) {
                  let t = r[e],
                    o = n[e];
                  (t.$global = i), o !== t && (n[e] = Object.assign(t, o));
                  let f = l.get(e);
                  f && ((t.d = r[f]), h(t));
                }
            } else
              o === r || "string" != typeof i[o]
                ? delete this.z[this.o]
                : ce[i[o++]](n[e]);
          }
        } finally {
          de = !1;
        }
      }
    }
  },
  de = !1;
function he(e, t) {
  return (ce[e] = t), t;
}
function ge(e, t) {
  return (ce[e] = (e) => (n) => t(e, n)), t;
}
function pe(e = "M") {
  let t,
    n = (r) => (n[r] = t[r] = new se(t, e, r));
  function r(r) {
    t = r;
    for (let e in r) n(e);
    Object.defineProperty(window, e, { configurable: !0, value: n });
  }
  window[e]
    ? r(window[e])
    : Object.defineProperty(window, e, { configurable: !0, set: r });
}
function ve(e, t) {
  return he(e, t.g), t;
}
function be(e, t) {
  return he(e, (e) => () => e[t]);
}
function ke(e, t, n, r) {
  Be(e[t], "checked", n, r), We(e, t, 0, n, r);
}
var ye = _e("change", "checked", "defaultChecked");
function me(e, t, n, r, l) {
  let i = e[t];
  Ge(i, "value", l), Be(i, "checked", n === l, r), We(e, t, 1, n, r);
}
var we = _e("change", "checked", "defaultChecked", (e) => e.value);
function Ce(e, t, n, r, l) {
  let i = e[t];
  Ge(i, "value", l),
    Oe(n, i),
    Be(i, "checked", Array.isArray(n) && n.includes(l), r),
    We(e, t, 2, n, r);
}
var Se = De(
  "change",
  "checked",
  "defaultChecked",
  (e, t) => [...(je.get(t) || [e])],
  (e, t, n) => {
    let r = new Set(n);
    for (let e of t) e.checked ? r.add(e.value) : r.delete(e.value);
    return Array.from(r);
  },
);
function Ae(e, t, n, r) {
  let l = e[t];
  Re(l, () => {
    Be(l, "value", n, r), We(e, t, 3, n, r);
  });
}
var Ne = _e("input", "value", "defaultValue", void 0, Re);
function xe(e, t, n, r) {
  let l = e[t].options;
  for (let e = 0; e < l.length; e++)
    Be(
      l[e],
      "selected",
      Array.isArray(n) ? n.includes(l[e].value) : n === l[e].value,
      r,
    );
  We(e, t, 4, n, r);
}
var Me = De(
  "change",
  "selected",
  "defaultSelected",
  (e) => e.options,
  (e, t, n) => {
    if (e.multiple) {
      let e = new Set(n);
      for (let n of t) n.selected ? e.add(n.value) : e.delete(n.value);
      return Array.from(e);
    }
    return e.value;
  },
  (e, t, n) => (Array.isArray(n) ? n.includes(t.value) : n === t.value),
);
function $e(e, t, n, r) {
  Be(e[t], "open", n, r), We(e, t, 5, n, r);
}
var Ie = _e("toggle", "open", "open");
function Ee(e, t, n, r) {
  Be(e[t], "open", n, r), We(e, t, 6, n, r);
}
var Te = _e("close", "open", "open"),
  Ve = new WeakMap();
function Be(e, t, n, r) {
  r ? ((e[t] = n), Ve.set(e, (Ve.get(e) ?? 0) + 1)) : Je(e, t, lt(n));
}
function We(e, t, n, r, l) {
  (e[t + ":"] = r), (e[t + ";"] = l), (e[t + "="] = n);
}
function _e(e, t, n, r = (e) => e[t], l = (e, t) => t()) {
  return (i, o) => {
    let f = i[o],
      u = (e) => {
        let n = i[o + ";"];
        n &&
          l(
            f,
            () => {
              let e = Ve.get(f);
              if ((ie(() => n(r(f))), Ve.get(f) === e))
                return (f[t] = i[o + ":"]), !0;
            },
            e,
          );
      };
    M(f, e, u), de && f[t] !== f[n] && u();
  };
}
var je = new WeakMap();
function Oe(e, t) {
  if (Array.isArray(e)) {
    let n = je.get(e);
    n || je.set(e, (n = new Set())), n.add(t);
  }
}
var qe = new WeakSet();
function De(e, t, n, r, l, i = (e) => e) {
  return (o, f) => {
    let u = o[f],
      a = o[f + ":"],
      c = o[f + ";"],
      s = () => {
        let e = r(u, a),
          n = Ve.get(e[0]);
        ie(() => c(l(u, e, a)));
        for (let r = 0; r < e.length; r++)
          Ve.get(e[r]) === n && (e[r][t] = i(u, e[r], a));
      };
    if ((M(u, e, s), de)) {
      if (!a) return;
      if ((Oe(a, u), !qe.has(a))) {
        let e = !1,
          l = r(u, a);
        for (let r = 0; r < l.length; r++) l[r][n] !== l[r][t] && (e = !0);
        e && (queueMicrotask(s), qe.add(a));
      }
    }
  };
}
var Pe = !1;
function Re(e, t, n) {
  if (Pe || document.activeElement !== e) t();
  else {
    let r = e.value,
      l = e.selectionStart;
    (Pe = !0), t(), (Pe = !1);
    let i = (function (e, t, n, r) {
      if ((r && /kw/.test(r)) || n !== t.length) {
        let r = t.slice(0, n),
          l = t.slice(n);
        if (e.startsWith(r)) return n;
        if (e.endsWith(l)) return e.length - l.length;
        {
          let t = ae(r),
            n = 0,
            l = 0;
          for (; l < t.length; ) ae(e[n]) && l++, n++;
          return n;
        }
      }
    })(e.value, r, l, n?.inputType);
    void 0 !== i && e.setSelectionRange(i, i);
  }
}
var Le = document.createTextNode(""),
  ze = new Range();
function Fe(e) {
  return ze.createContextualFragment(e);
}
var Ue = /^on[A-Z-]/;
function Ge(e, t, n) {
  Je(e, t, lt(n));
}
function Je(e, t, n) {
  e.getAttribute(t) != n &&
    (void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n));
}
function Ze(e, t) {
  Je(
    e,
    "class",
    (function (e) {
      return w(e, " ", k);
    })(t) || void 0,
  );
}
function He(e, t) {
  Je(
    e,
    "style",
    (function (e) {
      return w(e, ";", m);
    })(t) || void 0,
  );
}
function Ke(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
function Qe(e, t, n) {
  let r = e[t];
  for (let { name: e } of r.attributes)
    (n && (e in n || Xe(r, e, n))) || r.removeAttribute(e);
  et(e, t, n);
}
function Xe(e, t, n) {
  if ("checked" === t && "INPUT" === e.tagName)
    return "checkedValue" in n || "checkedValues" in n;
}
function Ye(e, t, n, r) {
  let l = e[t],
    i = {};
  for (let { name: e } of l.attributes)
    !r[e] && (!n || !(e in n)) && l.removeAttribute(e);
  for (let e in n) r[e] || (i[e] = n[e]);
  et(e, t, i);
}
function et(e, t, n) {
  let r,
    l,
    i = e[t];
  switch (i.tagName) {
    case "INPUT":
      if (n.checkedChange) ke(e, t, n.checked, n.checkedChange);
      else if (n.checkedValue || n.checkedValueChange)
        me(e, t, n.checkedValue, n.checkedValueChange, n.value);
      else if (n.checkedValues || n.checkedValuesChange)
        Ce(e, t, n.checkedValues, n.checkedValuesChange, n.value);
      else {
        if (!n.valueChange) break;
        Ae(e, t, n.value, n.valueChange);
      }
      l = /^(?:value|checked(?:Values?)?)(?:Change)?$/;
      break;
    case "SELECT":
      (n.value || n.valueChange) &&
        (xe(e, t, n.value, n.valueChange), (l = /^value(?:Change)?$/));
      break;
    case "DETAILS":
      n.openChange &&
        ($e(e, t, n.open, n.openChange), (l = /^open(?:Change)?$/));
      break;
    case "DIALOG":
      n.openChange &&
        (Ee(e, t, n.open, n.openChange), (l = /^open(?:Change)?$/));
  }
  for (let o in n) {
    let f = n[o];
    switch (o) {
      case "class":
        Ze(i, f);
        break;
      case "style":
        He(i, f);
        break;
      case "renderBody":
        break;
      default:
        Ue.test(o)
          ? ((r ||= e[t + "~"] = {})[
              "-" === o[2] ? o.slice(3) : o.slice(2).toLowerCase()
            ] = f)
          : l?.test(o) || Ge(i, o, f);
    }
  }
}
function tt(e, t) {
  let n = e[t],
    r = e[t + "~"];
  switch (e[t + "="]) {
    case 0:
      ye(e, t);
      break;
    case 1:
      we(e, t);
      break;
    case 2:
      Se(e, t);
      break;
    case 3:
      Ne(e, t);
      break;
    case 4:
      Me(e, t);
      break;
    case 5:
      Ie(e, t);
      break;
    case 6:
      Te(e, t);
  }
  for (let e in r) M(n, e, r[e]);
}
function nt(e, t, n) {
  let r = e[n],
    l = e[n + "-"] || r,
    i = r.parentNode,
    o = l.nextSibling,
    f = Fe(t || 0 === t ? t + "" : "<!>");
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), i.insertBefore(f, r);
  let u = r;
  for (; u !== o; ) {
    let e = u.nextSibling;
    u.remove(), (u = e);
  }
}
function rt(e, t, n) {
  let r = e[n],
    l = e[n + "-"],
    i = e[t];
  if (l) for (let e in l) e in r || (i[e] = void 0);
  for (let e in r) i[e] = r[e];
  e[n + "-"] = r;
}
function lt(e) {
  if (e || 0 === e) return !0 === e ? "" : e + "";
}
function it(e, t, n) {
  let r = e[t];
  r
    ? (Object.assign(r, n), r.onUpdate?.())
    : ((e[t] = n),
      n.onMount?.(),
      (b(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var ot = document.createTreeWalker(document);
function ft(e) {
  let t = e.length;
  for (; e.charCodeAt(--t) > 47; );
  return e.slice(0, t + 1);
}
function ut(e, t, n) {
  (ot.currentNode = e),
    at(t, n, n, 0),
    (ot.currentNode = document.documentElement);
}
function at(e, t, n, r) {
  let l,
    i = 0,
    o = 0,
    f = 0;
  for (n !== t && (t.d = n); (l = e.charCodeAt(r++)); )
    if (((o = i), (i = 0), l >= 117)) i = 10 * o + l - 117;
    else if (l >= 107) {
      for (l = 10 * o + l - 107; l--; ) ot.parentNode();
      ot.nextSibling();
    } else if (l >= 97) for (l = 10 * o + l - 97; l--; ) ot.nextSibling();
    else if (l >= 67) for (l = 20 * o + l - 67; l--; ) ot.nextNode();
    else if (47 === l) r = at(e, (t[f++] = u(t.$global)), n, r);
    else {
      if (38 === l) return r;
      if (32 === l) t[f++] = ot.currentNode;
      else {
        let e = (t[f++] = document.createTextNode("")),
          n = ot.currentNode;
        n.parentNode.replaceChild(e, n), (ot.currentNode = e);
      }
    }
  return r;
}
function ct(e, t, n) {
  let r = u(t);
  if (((r._ = r.d = e.B || n), (r.x = e), dt(e, r), e.c))
    for (let t of e.c) t.g?.(r);
  return r;
}
function st(e, t, n) {
  if ("string" != typeof e) return ct(e, t, n);
  let r = u(t);
  return (r._ = r.d = n), (r[0] = r.a = r.b = document.createElement(e)), r;
}
function dt(e, t) {
  let n = e.k();
  return (
    ut(11 === n.nodeType ? n.firstChild : n, e.C, t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.s && e.s(t),
    n
  );
}
function ht(e, t, n) {
  return (r, l) => {
    let i = r[e + "("];
    if (!i || l === _) return;
    let o = r[e + "!"];
    if (l === B || l === W) return i.e?.(o, l);
    let f = t?.(r);
    if ("string" == typeof i) mt(o, 0, f), Qe(o, 0, l());
    else if (i.e) {
      let e = l();
      i.e(o, n ? e : [f ? { ...e, renderBody: f } : e]);
    }
  };
}
function gt(e, t, n, r, l = 0, i) {
  let o,
    f,
    u = {},
    a = t ? ft(t) : " ";
  return (t) => ({
    t: u,
    D: e,
    C: a,
    s: n,
    k: vt,
    B: t,
    E: l,
    F: void 0,
    get e() {
      return (o ||= i?.());
    },
    get c() {
      return (f ||= new Set(r?.()));
    },
  });
}
function pt(e, t, n, r, l, i) {
  return gt(e, t, n, r, l, i)();
}
function vt() {
  return (this.F ||= (function (e) {
    let t = Fe(e);
    return t.firstChild === t.lastChild ? t.firstChild || Le : t;
  })(this.D)).cloneNode(!0);
}
var bt = function (e, t, n) {
  let r = e + "(",
    l = e + "!",
    i = n && ((e, t) => (i = n())(e, t));
  return (n, o) => {
    if (o === _) return;
    let f = n[r],
      u = o;
    if (o !== B && o !== W) {
      let l = C(o);
      Vt(l, f)
        ? ((f = n[r] = l),
          (function (e, t, n) {
            let r,
              l = e[t + "!"];
            n
              ? ((r = e[t + "!"] = st(n, e.$global, e)), (l = l || c(e[t])))
              : ((r = c(e[t])), (e[t + "!"] = void 0)),
              p(r, l.a.parentNode, l.a),
              g(l);
          })(n, e, l),
          t?.(n),
          (u = _))
        : (u = W);
    }
    i?.(n, u), Z(f, n[l], u);
  };
};
function kt(e, t) {
  let n = t + "!",
    r = t + "(";
  return (t, l) => {
    let i = t[n];
    if (i) {
      let n = t[r];
      (!n?.c || n.c.has(e)) && e(i, l);
    }
  };
}
var yt = function (e, t, n) {
  let r = e + "(",
    l = e + "!",
    i = n && ((e, t) => (i = n())(e, t));
  return (n, o) => {
    if (o === _) return;
    let f = n[r],
      u = o;
    if (o !== B && o !== W) {
      let l = C(o);
      Vt(l, f) ? ((f = n[r] = l), mt(n, e, l), t?.(n), (u = _)) : (u = W);
    }
    i?.(n, u), Z(f, n[l], u);
  };
};
function mt(e, t, n) {
  let r = e[t + "!"],
    l = e[t];
  if (((l.textContent = ""), n)) {
    p((e[t + "!"] = st(n, e.$global, e)), l, null);
  }
  r && s(r);
}
var wt = new Map([[Symbol(), c(void 0)]]),
  Ct = [c(void 0)],
  St = new Map(),
  At = [];
function Nt(e, t) {
  return $t(e, t, ([e, t = Et], n) => {
    o(
      e,
      "string" == typeof t
        ? (e, r) => n(e[t], [e, r])
        : (e, r) => n(t(e, r), [e, r]),
    );
  });
}
function xt(e, t) {
  return $t(e, t, ([e, t = Tt], n) => i(e, (e, r) => n(t(e, r), [e, r])));
}
function Mt(e, t) {
  return $t(e, t, ([e, t, n, r = Tt], l) => f(e, t, n, (e) => l(r(e), [e])));
}
function $t(e, t, n) {
  let r = e + "!",
    l = t.c,
    i = t.e;
  return (o, f) => {
    if (f === _) return;
    if (f === B || f === W) {
      let t = o[r] ?? o[e + "("]?.values() ?? [];
      if (t !== Ct)
        for (let e of t) {
          i?.(e, f);
          for (let t of l) t(e, f);
        }
      return;
    }
    let u,
      a,
      d,
      h,
      v = o[e],
      b = 8 === v.nodeType || 3 === v.nodeType,
      k = o[e + "("] || (b ? wt : St),
      y = o[e + "!"] || Array.from(k.values()),
      m = !0;
    if (
      (n(f, (e, n) => {
        let r = k.get(e),
          f = W;
        if ((r || ((r = ct(t, o.$global, o)), (f = _)), i && i(r, n), l))
          for (let e of l) e(r, f);
        u ? (u.set(e, r), a.push(r)) : ((u = new Map([[e, r]])), (a = [r]));
      }),
      !u)
    )
      if (b) (u = wt), (a = Ct), c(v);
      else {
        if (t.E) for (let e = 0; e < y.length; e++) s(y[e]);
        (v.textContent = ""), (u = St), (a = At), (m = !1);
      }
    if (m) {
      if (b) {
        k === wt && c(v);
        let e = y[y.length - 1];
        (d = e.b.nextSibling), (h = e.a.parentNode);
      } else (d = null), (h = v);
      !(function (e, t, n, r) {
        let l,
          i,
          o,
          f,
          u,
          a,
          c = 0,
          s = 0,
          d = t.length - 1,
          h = n.length - 1,
          v = t[c],
          b = n[s],
          k = t[d],
          y = n[h];
        e: {
          for (; v === b; ) {
            if ((++c, ++s, c > d || s > h)) break e;
            (v = t[c]), (b = n[s]);
          }
          for (; k === y; ) {
            if ((--d, --h, c > d || s > h)) break e;
            (k = t[d]), (y = n[h]);
          }
        }
        if (c > d) {
          if (s <= h) {
            (o = h + 1), (f = o < n.length ? n[o].a : r);
            do {
              p(n[s++], e, f);
            } while (s <= h);
          }
        } else if (s > h)
          do {
            g(t[c++]);
          } while (c <= d);
        else {
          let v = d - c + 1,
            b = h - s + 1,
            k = t,
            y = new Array(b);
          for (l = 0; l < b; ++l) y[l] = -1;
          let m = 0,
            w = 0,
            C = new Map();
          for (i = s; i <= h; ++i) C.set(n[i], i);
          for (l = c; l <= d && w < b; ++l)
            (u = t[l]),
              (i = C.get(u)),
              void 0 !== i &&
                ((m = m > i ? S : i),
                ++w,
                (a = n[i]),
                (y[i - s] = l),
                (k[l] = null));
          if (v === t.length && 0 === w) {
            for (; s < b; ++s) p(n[s], e, r);
            for (; c < v; ++c) g(t[c]);
          } else {
            for (l = v - w; l > 0; ) (u = k[c++]), null !== u && (g(u), l--);
            if (m === S) {
              let t = (function (e) {
                let t,
                  n,
                  r = e.slice(),
                  l = [];
                l.push(0);
                for (let i = 0, o = e.length; i < o; ++i) {
                  if (-1 === e[i]) continue;
                  let o = l[l.length - 1];
                  if (e[o] < e[i]) (r[i] = o), l.push(i);
                  else {
                    for (t = 0, n = l.length - 1; t < n; ) {
                      let r = ((t + n) / 2) | 0;
                      e[l[r]] < e[i] ? (t = r + 1) : (n = r);
                    }
                    e[i] < e[l[t]] && (t > 0 && (r[i] = l[t - 1]), (l[t] = i));
                  }
                }
                for (t = l.length, n = l[t - 1]; t-- > 0; )
                  (l[t] = n), (n = r[n]);
                return l;
              })(y);
              for (i = t.length - 1, o = n.length, l = b - 1; l >= 0; --l)
                -1 === y[l] || i < 0 || l !== t[i]
                  ? ((m = l + s),
                    (a = n[m++]),
                    (f = m < o ? n[m].a : r),
                    p(a, e, f))
                  : --i;
            } else if (w !== b)
              for (o = n.length, l = b - 1; l >= 0; --l)
                -1 === y[l] &&
                  ((m = l + s),
                  (a = n[m++]),
                  (f = m < o ? n[m].a : r),
                  p(a, e, f));
          }
        }
      })(h, y, a, d);
    }
    (o[e + "("] = u), (o[e + "!"] = a);
  };
}
function It(e, t) {
  let n = t + "!";
  return (r, l) => {
    let i = r[n] ?? r[t + "("]?.values() ?? [];
    if (i !== Ct) for (let t of i) e(t, l);
  };
}
function Et(e, t) {
  return t;
}
function Tt(e) {
  return e;
}
function Vt(e, t) {
  return e !== t && (e?.t || 0) !== t?.t;
}
var Bt = new Map(),
  Wt = {
    patchConditionals: function (e) {
      (bt = e(bt)), (yt = e(yt));
    },
    queueEffect: re,
    init() {
      he("$C_s", (e) => {
        Bt.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      he("$C_r", e);
    },
    isOp: (e) => e === B || e === W || e === _,
    isRenderer: (e) => void 0 !== e.k,
    getStartNode: (e) => e.a,
    setScopeNodes(e, t, n) {
      (e.a = t), (e.b = n);
    },
    runComponentEffects() {
      fe(this.effects);
    },
    resolveRegistered: (e, { runtimeId: t, componentIdPrefix: n }) =>
      Array.isArray(e) && "string" == typeof e[0]
        ? (function (e, t) {
            let n = ce[e];
            return t ? n(t) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.n[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = pt("", void 0, e, void 0, 1, n && (() => n));
      return (r.k = t), r;
    },
    render(e, t, n, r) {
      let l = t.scope;
      l || ((l = Bt.get(t.id)), l && ((t.scope = l), Bt.delete(t.id)));
      let i = n.e || _t,
        o = !1;
      if (
        ((t.effects = oe(() => {
          if (l) i(l, B), (o = !0);
          else {
            l = t.scope = ct(n, e.global);
            let r = n.c;
            if (r) for (let e of r) e(t.scope, W);
          }
          i(l, r);
        })),
        !o)
      )
        return l.a === l.b ? l.a : l.a.parentNode;
    },
  };
function _t() {}
var jt = (e, t) => ((e.mount = Ot), (e._ = e), he(t, e));
function Ot(e = {}, t, n) {
  let r,
    l,
    { $global: i } = e;
  i
    ? (({ $global: i, ...e } = e),
      (i = { runtimeId: "M", renderId: "_", ...i }))
    : (i = { runtimeId: "M", renderId: "_" });
  let o = this.e,
    f = oe(() => {
      (r = u(i)), (l = dt(this, r)), o && o(r, [e]);
    });
  switch (n) {
    case "afterbegin":
      t.insertBefore(l, t.firstChild);
      break;
    case "afterend":
      t.parentElement.insertBefore(l, t.nextSibling);
      break;
    case "beforebegin":
      t.parentElement.insertBefore(l, t);
      break;
    default:
      t.appendChild(l);
  }
  return (
    fe(f),
    {
      update: (e) => {
        o &&
          ie(() => {
            o(r, B), o(r, [e]);
          });
      },
      destroy: () => {
        g(r);
      },
    }
  );
}
export {
  Ge as attr,
  n as attrTag,
  r as attrTags,
  Qe as attrs,
  tt as attrsEvents,
  O as changeHandler,
  F as childClosures,
  Ze as classAttr,
  L as closure,
  Wt as compat,
  bt as conditional,
  yt as conditionalOnlyChild,
  $e as controllable_details_open,
  Ie as controllable_details_open_effect,
  Ee as controllable_dialog_open,
  Te as controllable_dialog_open_effect,
  ke as controllable_input_checked,
  me as controllable_input_checkedValue,
  we as controllable_input_checkedValue_effect,
  Ce as controllable_input_checkedValues,
  Se as controllable_input_checkedValues_effect,
  ye as controllable_input_checked_effect,
  Ae as controllable_input_value,
  Ne as controllable_input_value_effect,
  xe as controllable_select_value,
  Me as controllable_select_value_effect,
  pt as createRenderer,
  gt as createRendererWithOwner,
  u as createScope,
  jt as createTemplate,
  Ke as data,
  z as dynamicClosure,
  U as dynamicSubscribers,
  ht as dynamicTagAttrs,
  i as forIn,
  o as forOf,
  f as forTo,
  b as getAbortSignal,
  nt as html,
  Q as inChild,
  kt as inConditionalScope,
  It as inLoopScope,
  pe as init,
  j as initValue,
  P as intersection,
  X as intersections,
  it as lifecycle,
  xt as loopIn,
  Nt as loopOf,
  Mt as loopTo,
  K as nextTagId,
  be as nodeRef,
  M as on,
  Ye as partialAttrs,
  oe as prepare,
  rt as props,
  te as queueControllableSource,
  re as queueEffect,
  ne as queueSource,
  he as register,
  ge as registerBoundSignal,
  ve as registerSubscriber,
  v as resetAbortSignal,
  le as run,
  fe as runEffects,
  G as setTagVar,
  He as styleAttr,
  J as tagVarSignal,
  q as value,
};
