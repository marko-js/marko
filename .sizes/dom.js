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
var I = document.createTextNode(""),
  E = new Range();
function T(e) {
  return E.createContextualFragment(e);
}
var B,
  V = !1,
  W = (e, t, n) => {
    if (V || document.activeElement !== e) t();
    else {
      let r = e.value,
        l = e.selectionStart;
      (V = !0), t(), (V = !1);
      let i = e.value,
        o = _(i, r, l, n?.inputType);
      void 0 !== o && e.setSelectionRange(o, o);
    }
  },
  _ = (e, t, n, r = "") => {
    if (/delete.*Backwards/.test(r) || n !== t.length) {
      let r = t.slice(0, n),
        l = t.slice(n);
      if (e.startsWith(r)) return n;
      if (e.endsWith(l)) return e.length - l.length;
      {
        let t = j(r),
          n = 0,
          l = 0;
        for (; l < t.length; ) j(e[n]) && l++, n++;
        return n;
      }
    }
  },
  j = (e) => e.replace(/[^\p{L}\p{N}]/gu, ""),
  O = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (B = !1), se();
      }),
      t
    );
  })();
function q() {
  se(), requestAnimationFrame(D);
}
function D() {
  O.postMessage(0);
}
var P = {},
  R = {},
  L = {};
function z(e, t) {
  let n = e + "#";
  return (e, r) => {
    r !== P && void 0 === e[n] && t(e, r);
  };
}
function F(e, t) {
  return (e, n) => {
    t(e, n);
  };
}
function U(e, t, n) {
  let r = e + "#",
    l = n && ((e, t) => (l = n())(e, t));
  return (n, i) => {
    if (i === P) 1 === (n[r] = (n[r] ?? 0) + 1) && l?.(n, P);
    else if (i !== L) {
      let o = void 0 !== n[r];
      1 === (n[r] ||= 1) &&
        (i === R || (o && n[e] === i)
          ? l?.(n, R)
          : ((n[e] = i), t?.(n, i), l?.(n, L))),
        n[r]--;
    }
  };
}
var G = 0;
function J(e, t, n) {
  let r = "?" + G++,
    l = r + "#",
    i = n && ((e, t) => (i = n())(e, t));
  return (n, o) => {
    o === P
      ? 1 === (n[l] = (n[l] ?? 0) + 1) && i?.(n, P)
      : void 0 === n[l]
        ? ((n[l] = e - 1), (n[r] = !0))
        : 0 == --n[l]
          ? o === L || n[r]
            ? ((n[r] = !1), t(n, 0), i?.(n, L))
            : i?.(n, R)
          : (n[r] ||= o === L);
  };
}
var Z = (e) => e._;
function H(e, t, n = Z, r) {
  let l = "?" + G++,
    i = l + 1,
    o = "function" == typeof e ? e : () => e,
    f = r && ((e, t) => (f = r())(e, t));
  return (e, r) => {
    if (r === P) 1 === (e[i] = (e[i] ?? 0) + 1) && f?.(e, P);
    else {
      let u, a;
      if (void 0 === e[i]) {
        (u = n(e)), (a = o(e));
        let t = u[a + "#"],
          l = void 0 === t ? !u.u : 0 === t;
        (e[i] = l ? 1 : 2), (r = L);
      }
      0 == --e[i]
        ? r === L || e[l]
          ? ((e[l] = !1), (u ||= n(e)), (a ||= o(e)), t?.(e, u[a]), f?.(e, L))
          : f?.(e, R)
        : (e[l] ||= r === L);
    }
  };
}
function K(e, t, n = Z, r) {
  let l = "function" == typeof e ? e : () => e,
    i = H(l, t, n, r),
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
function Q(e, t) {
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
function X(e) {
  let t = e + "*";
  return (e, n) => {
    let r = e[t];
    if (r) for (let e of r) e(n);
  };
}
function Y(e, t, n) {
  e[t]["/"] = (t) => n(e, t);
}
var ee = (e, t) => e["/"]?.(t),
  te = (e, t, n) => {
    let r = e?.c;
    if (r) for (let e of r) e(t, n);
  },
  ne = new WeakMap();
function re({ $global: e }) {
  let t = ne.get(e) || 0;
  return ne.set(e, t + 1), "c" + e.runtimeId + e.renderId + t.toString(36);
}
function le(e, t) {
  return (n, r) => {
    t(n[e], r);
  };
}
function ie(e) {
  return (t, n) => {
    for (let r of e) r(t, n);
  };
}
var oe = [],
  fe = [];
function ue(e, t, n, r) {
  return n ? (n(r), r) : ae(e, t, r);
}
function ae(e, t, n) {
  return B || ((B = !0), queueMicrotask(q)), t(e, P), oe.push(e, t, n), n;
}
function ce(e, t) {
  fe.push(e, t);
}
function se() {
  try {
    pe();
  } finally {
    oe = [];
  }
  try {
    ge();
  } finally {
    fe = [];
  }
}
function de(e) {
  let t = oe,
    n = fe;
  (oe = []), (fe = []);
  try {
    e(), pe(), (oe = t), ge();
  } finally {
    (oe = t), (fe = n);
  }
}
function he(e) {
  let t = oe,
    n = fe,
    r = (fe = []);
  oe = [];
  try {
    e(), pe();
  } finally {
    (oe = t), (fe = n);
  }
  return r;
}
function ge(e = fe) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function pe() {
  for (let e = 0; e < oe.length; e += 3) {
    let t = oe[e + 0];
    (0, oe[e + 1])(t, oe[e + 2]);
  }
}
var ve = {},
  be = class {
    m = [];
    n = {};
    y = { _: ve };
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
          for (ke = !0; o < r; ) {
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
                : ve[i[o++]](n[e]);
          }
        } finally {
          ke = !1;
        }
      }
    }
  },
  ke = !1;
function ye(e, t) {
  return (ve[e] = t), t;
}
function me(e, t) {
  return (ve[e] = (e) => (n) => t(e, n)), t;
}
function we(e = "M") {
  let t,
    n = (r) => (n[r] = t[r] = new be(t, e, r));
  function r(r) {
    t = r;
    for (let e in r) n(e);
    Object.defineProperty(window, e, { configurable: !0, value: n });
  }
  window[e]
    ? r(window[e])
    : Object.defineProperty(window, e, { configurable: !0, set: r });
}
function Ce(e, t) {
  return ye(e, t.g), t;
}
function Se(e, t) {
  return ye(e, (e) => () => e[t]);
}
var Ae = /^on[A-Z-]/;
function Ne(e, t, n) {
  xe(e, t, Oe(n));
}
function xe(e, t, n) {
  e.getAttribute(t) != n &&
    (void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n));
}
function Me(e, t) {
  xe(
    e,
    "class",
    (function (e) {
      return w(e, " ", k);
    })(t) || void 0,
  );
}
function $e(e, t) {
  xe(
    e,
    "style",
    (function (e) {
      return w(e, ";", m);
    })(t) || void 0,
  );
}
function Ie(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
function Ee(e, t, n) {
  let r = e[t];
  for (let { name: e } of r.attributes)
    (n && (e in n || Te(r, e, n))) || r.removeAttribute(e);
  Ve(e, t, n);
}
function Te(e, t, n) {
  if ("checked" === t && "INPUT" === e.tagName)
    return "checkedValue" in n || "checkedValues" in n;
}
function Be(e, t, n, r) {
  let l = e[t],
    i = {};
  for (let { name: e } of l.attributes)
    !r[e] && (!n || !(e in n)) && l.removeAttribute(e);
  for (let e in n) r[e] || (i[e] = n[e]);
  Ve(e, t, i);
}
function Ve(e, t, n) {
  let r,
    l,
    i = e[t];
  switch (i.tagName) {
    case "INPUT":
      if (n.checkedChange) Je(e, t, n.checked, n.checkedChange);
      else if (n.checkedValue || n.checkedValueChange)
        He(e, t, n.checkedValue, n.checkedValueChange, n.value);
      else if (n.checkedValues || n.checkedValuesChange)
        Qe(e, t, n.checkedValues, n.checkedValuesChange, n.value);
      else {
        if (!n.valueChange) break;
        Ye(e, t, n.value, n.valueChange);
      }
      l = /^(?:value|checked(?:Values?)?)(?:Change)?$/;
      break;
    case "SELECT":
      (n.value || n.valueChange) &&
        (tt(e, t, n.value, n.valueChange), (l = /^value(?:Change)?$/));
      break;
    case "DETAILS":
      n.openChange &&
        (rt(e, t, n.open, n.openChange), (l = /^open(?:Change)?$/));
      break;
    case "DIALOG":
      n.openChange &&
        (it(e, t, n.open, n.openChange), (l = /^open(?:Change)?$/));
  }
  for (let o in n) {
    let f = n[o];
    switch (o) {
      case "class":
        Me(i, f);
        break;
      case "style":
        $e(i, f);
        break;
      case "renderBody":
        break;
      default:
        Ae.test(o)
          ? ((r ||= e[t + "~"] = {})[
              "-" === o[2] ? o.slice(3) : o.slice(2).toLowerCase()
            ] = f)
          : l?.test(o) || Ne(i, o, f);
    }
  }
}
function We(e, t) {
  let n = e[t],
    r = e[t + "~"];
  switch (e[t + "="]) {
    case 0:
      Ze(e, t);
      break;
    case 1:
      Ke(e, t);
      break;
    case 2:
      Xe(e, t);
      break;
    case 3:
      et(e, t);
      break;
    case 4:
      nt(e, t);
      break;
    case 5:
      lt(e, t);
      break;
    case 6:
      ot(e, t);
  }
  for (let e in r) M(n, e, r[e]);
}
function _e(e, t, n) {
  let r = e[n],
    l = e[n + "-"] || r,
    i = r.parentNode,
    o = l.nextSibling,
    f = T(t || 0 === t ? t + "" : "<!>");
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), i.insertBefore(f, r);
  let u = r;
  for (; u !== o; ) {
    let e = u.nextSibling;
    u.remove(), (u = e);
  }
}
function je(e, t, n) {
  let r = e[n],
    l = e[n + "-"],
    i = e[t];
  if (l) for (let e in l) e in r || (i[e] = void 0);
  for (let e in r) i[e] = r[e];
  e[n + "-"] = r;
}
function Oe(e) {
  if (e || 0 === e) return !0 === e ? "" : e + "";
}
function qe(e, t, n) {
  let r = e[t];
  r
    ? (Object.assign(r, n), r.onUpdate?.())
    : ((e[t] = n),
      n.onMount?.(),
      (b(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var De = new WeakMap();
function Pe(e, t, n, r) {
  r ? ((e[t] = n), De.set(e, (De.get(e) ?? 0) + 1)) : xe(e, t, Oe(n));
}
function Re(e, t, n, r, l) {
  (e[t + ":"] = r), (e[t + ";"] = l), (e[t + "="] = n);
}
function Le(e, t, n, r = (e) => e[t], l = (e, t) => t()) {
  return (i, o) => {
    let f = i[o],
      u = (e) => {
        let n = i[o + ";"];
        n &&
          l(
            f,
            () => {
              let e = De.get(f);
              if ((de(() => n(r(f))), De.get(f) === e))
                return (f[t] = i[o + ":"]), !0;
            },
            e,
          );
      };
    M(f, e, u), ke && f[t] !== f[n] && u();
  };
}
var ze = new WeakMap();
function Fe(e, t) {
  if (Array.isArray(e)) {
    let n = ze.get(e);
    n || ze.set(e, (n = new Set())), n.add(t);
  }
}
var Ue = new WeakSet();
function Ge(e, t, n, r, l, i = (e) => e) {
  return (o, f) => {
    let u = o[f],
      a = o[f + ":"],
      c = o[f + ";"],
      s = () => {
        let e = r(u, a),
          n = De.get(e[0]);
        de(() => c(l(u, e, a)));
        for (let r = 0; r < e.length; r++)
          De.get(e[r]) === n && (e[r][t] = i(u, e[r], a));
      };
    if ((M(u, e, s), ke)) {
      if (!a) return;
      if ((Fe(a, u), !Ue.has(a))) {
        let e = !1,
          l = r(u, a);
        for (let r = 0; r < l.length; r++) l[r][n] !== l[r][t] && (e = !0);
        e && (queueMicrotask(s), Ue.add(a));
      }
    }
  };
}
function Je(e, t, n, r) {
  Pe(e[t], "checked", n, r), Re(e, t, 0, n, r);
}
var Ze = Le("change", "checked", "defaultChecked");
function He(e, t, n, r, l) {
  let i = e[t];
  Ne(i, "value", l), Pe(i, "checked", n === l, r), Re(e, t, 1, n, r);
}
var Ke = Le("change", "checked", "defaultChecked", (e) => e.value);
function Qe(e, t, n, r, l) {
  let i = e[t];
  Ne(i, "value", l),
    Fe(n, i),
    Pe(i, "checked", Array.isArray(n) && n.includes(l), r),
    Re(e, t, 2, n, r);
}
var Xe = Ge(
  "change",
  "checked",
  "defaultChecked",
  (e, t) => [...(ze.get(t) || [e])],
  (e, t, n) => {
    let r = new Set(n);
    for (let e of t) e.checked ? r.add(e.value) : r.delete(e.value);
    return Array.from(r);
  },
);
function Ye(e, t, n, r) {
  let l = e[t];
  W(l, () => {
    Pe(l, "value", n, r), Re(e, t, 3, n, r);
  });
}
var et = Le("input", "value", "defaultValue", void 0, W);
function tt(e, t, n, r) {
  let l = e[t].options;
  for (let e = 0; e < l.length; e++)
    Pe(
      l[e],
      "selected",
      Array.isArray(n) ? n.includes(l[e].value) : n === l[e].value,
      r,
    );
  Re(e, t, 4, n, r);
}
var nt = Ge(
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
function rt(e, t, n, r) {
  Pe(e[t], "open", n, r), Re(e, t, 5, n, r);
}
var lt = Le("toggle", "open", "open");
function it(e, t, n, r) {
  Pe(e[t], "open", n, r), Re(e, t, 6, n, r);
}
var ot = Le("close", "open", "open"),
  ft = document.createTreeWalker(document);
function ut(e) {
  let t = e.length;
  for (; e.charCodeAt(--t) > 47; );
  return e.slice(0, t + 1);
}
function at(e, t, n) {
  (ft.currentNode = e),
    ct(t, n, n, 0),
    (ft.currentNode = document.documentElement);
}
function ct(e, t, n, r) {
  let l,
    i = 0,
    o = 0,
    f = 0;
  for (n !== t && (t.d = n); (l = e.charCodeAt(r++)); )
    if (((o = i), (i = 0), l >= 117)) i = 10 * o + l - 117;
    else if (l >= 107) {
      for (l = 10 * o + l - 107; l--; ) ft.parentNode();
      ft.nextSibling();
    } else if (l >= 97) for (l = 10 * o + l - 97; l--; ) ft.nextSibling();
    else if (l >= 67) for (l = 20 * o + l - 67; l--; ) ft.nextNode();
    else if (47 === l) r = ct(e, (t[f++] = u(t.$global)), n, r);
    else {
      if (38 === l) return r;
      if (32 === l) t[f++] = ft.currentNode;
      else {
        let e = (t[f++] = document.createTextNode("")),
          n = ft.currentNode;
        n.parentNode.replaceChild(e, n), (ft.currentNode = e);
      }
    }
  return r;
}
function st(e, t, n) {
  let r = u(t);
  if (((r._ = r.d = e.B || n), (r.x = e), ht(e, r), e.c))
    for (let t of e.c) t.g?.(r);
  return r;
}
function dt(e, t, n) {
  if ("string" != typeof e) return st(e, t, n);
  let r = u(t);
  return (r._ = r.d = n), (r[0] = r.a = r.b = document.createElement(e)), r;
}
function ht(e, t) {
  let n = e.k();
  return (
    at(11 === n.nodeType ? n.firstChild : n, e.C, t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.s && e.s(t),
    n
  );
}
function gt(e, t, n) {
  return (r, l) => {
    let i = r[e + "("];
    if (!i || l === L) return;
    let o = r[e + "!"];
    if (l === P || l === R) return i.e?.(o, l);
    let f = t?.(r);
    if ("string" == typeof i) wt(o, 0, f), Ee(o, 0, l());
    else if (i.e) {
      let e = l();
      i.e(o, n ? e : [f ? { ...e, renderBody: f } : e]);
    }
  };
}
function pt(e, t, n, r, l = 0, i) {
  let o,
    f,
    u = {},
    a = t ? ut(t) : " ";
  return (t) => ({
    t: u,
    D: e,
    C: a,
    s: n,
    k: bt,
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
function vt(e, t, n, r, l, i) {
  return pt(e, t, n, r, l, i)();
}
function bt() {
  return (this.F ||= (function (e) {
    let t = T(e);
    return t.firstChild === t.lastChild ? t.firstChild || I : t;
  })(this.D)).cloneNode(!0);
}
var kt = function (e, t, n) {
  let r = e + "(",
    l = e + "!",
    i = n && ((e, t) => (i = n())(e, t));
  return (n, o) => {
    if (o === L) return;
    let f = n[r],
      u = o;
    if (o !== P && o !== R) {
      let l = C(o);
      Vt(l, f)
        ? ((f = n[r] = l),
          (function (e, t, n) {
            let r,
              l = e[t + "!"];
            n
              ? ((r = e[t + "!"] = dt(n, e.$global, e)), (l = l || c(e[t])))
              : ((r = c(e[t])), (e[t + "!"] = void 0)),
              p(r, l.a.parentNode, l.a),
              g(l);
          })(n, e, l),
          t?.(n),
          (u = L))
        : (u = R);
    }
    i?.(n, u), te(f, n[l], u);
  };
};
function yt(e, t) {
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
var mt = function (e, t, n) {
  let r = e + "(",
    l = e + "!",
    i = n && ((e, t) => (i = n())(e, t));
  return (n, o) => {
    if (o === L) return;
    let f = n[r],
      u = o;
    if (o !== P && o !== R) {
      let l = C(o);
      Vt(l, f) ? ((f = n[r] = l), wt(n, e, l), t?.(n), (u = L)) : (u = R);
    }
    i?.(n, u), te(f, n[l], u);
  };
};
function wt(e, t, n) {
  let r = e[t + "!"],
    l = e[t];
  if (((l.textContent = ""), n)) {
    p((e[t + "!"] = dt(n, e.$global, e)), l, null);
  }
  r && s(r);
}
var Ct = new Map([[Symbol(), c(void 0)]]),
  St = [c(void 0)],
  At = new Map(),
  Nt = [];
function xt(e, t) {
  return It(e, t, ([e, t = Tt], n) => {
    o(
      e,
      "string" == typeof t
        ? (e, r) => n(e[t], [e, r])
        : (e, r) => n(t(e, r), [e, r]),
    );
  });
}
function Mt(e, t) {
  return It(e, t, ([e, t = Bt], n) => i(e, (e, r) => n(t(e, r), [e, r])));
}
function $t(e, t) {
  return It(e, t, ([e, t, n, r = Bt], l) => f(e, t, n, (e) => l(r(e), [e])));
}
function It(e, t, n) {
  let r = e + "!",
    l = t.c,
    i = t.e;
  return (o, f) => {
    if (f === L) return;
    if (f === P || f === R) {
      let t = o[r] ?? o[e + "("]?.values() ?? [];
      if (t !== St)
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
      k = o[e + "("] || (b ? Ct : At),
      y = o[e + "!"] || Array.from(k.values()),
      m = !0;
    if (
      (n(f, (e, n) => {
        let r = k.get(e),
          f = R;
        if ((r || ((r = st(t, o.$global, o)), (f = L)), i && i(r, n), l))
          for (let e of l) e(r, f);
        u ? (u.set(e, r), a.push(r)) : ((u = new Map([[e, r]])), (a = [r]));
      }),
      !u)
    )
      if (b) (u = Ct), (a = St), c(v);
      else {
        if (t.E) for (let e = 0; e < y.length; e++) s(y[e]);
        (v.textContent = ""), (u = At), (a = Nt), (m = !1);
      }
    if (m) {
      if (b) {
        k === Ct && c(v);
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
function Et(e, t) {
  let n = t + "!";
  return (r, l) => {
    let i = r[n] ?? r[t + "("]?.values() ?? [];
    if (i !== St) for (let t of i) e(t, l);
  };
}
function Tt(e, t) {
  return t;
}
function Bt(e) {
  return e;
}
function Vt(e, t) {
  return e !== t && (e?.t || 0) !== t?.t;
}
var Wt = new Map(),
  _t = {
    patchConditionals: function (e) {
      (kt = e(kt)), (mt = e(mt));
    },
    queueEffect: ce,
    init() {
      ye("$C_s", (e) => {
        Wt.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      ye("$C_r", e);
    },
    isOp: (e) => e === P || e === R || e === L,
    isRenderer: (e) => void 0 !== e.k,
    getStartNode: (e) => e.a,
    setScopeNodes(e, t, n) {
      (e.a = t), (e.b = n);
    },
    runComponentEffects() {
      ge(this.effects);
    },
    resolveRegistered: (e, { runtimeId: t, componentIdPrefix: n }) =>
      Array.isArray(e) && "string" == typeof e[0]
        ? (function (e, t) {
            let n = ve[e];
            return t ? n(t) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.n[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = vt("", void 0, e, void 0, 1, n && (() => n));
      return (r.k = t), r;
    },
    render(e, t, n, r) {
      let l = t.scope;
      l || ((l = Wt.get(t.id)), l && ((t.scope = l), Wt.delete(t.id)));
      let i = n.e || jt,
        o = !1;
      if (
        ((t.effects = he(() => {
          if (l) i(l, P), (o = !0);
          else {
            l = t.scope = st(n, e.global);
            let r = n.c;
            if (r) for (let e of r) e(t.scope, R);
          }
          i(l, r);
        })),
        !o)
      )
        return l.a === l.b ? l.a : l.a.parentNode;
    },
  };
function jt() {}
var Ot = (e, t) => ((e.mount = qt), (e._ = e), ye(t, e));
function qt(e = {}, t, n) {
  let r,
    l,
    { $global: i } = e;
  i
    ? (({ $global: i, ...e } = e),
      (i = { runtimeId: "M", renderId: "_", ...i }))
    : (i = { runtimeId: "M", renderId: "_" });
  let o = this.e,
    f = he(() => {
      (r = u(i)), (l = ht(this, r)), o && o(r, [e]);
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
    ge(f),
    {
      update: (e) => {
        o &&
          de(() => {
            o(r, P), o(r, [e]);
          });
      },
      destroy: () => {
        g(r);
      },
    }
  );
}
export {
  Ne as attr,
  n as attrTag,
  r as attrTags,
  Ee as attrs,
  We as attrsEvents,
  F as changeHandler,
  Q as childClosures,
  Me as classAttr,
  H as closure,
  _t as compat,
  kt as conditional,
  mt as conditionalOnlyChild,
  rt as controllable_details_open,
  lt as controllable_details_open_effect,
  it as controllable_dialog_open,
  ot as controllable_dialog_open_effect,
  Je as controllable_input_checked,
  He as controllable_input_checkedValue,
  Ke as controllable_input_checkedValue_effect,
  Qe as controllable_input_checkedValues,
  Xe as controllable_input_checkedValues_effect,
  Ze as controllable_input_checked_effect,
  Ye as controllable_input_value,
  et as controllable_input_value_effect,
  tt as controllable_select_value,
  nt as controllable_select_value_effect,
  vt as createRenderer,
  pt as createRendererWithOwner,
  u as createScope,
  Ot as createTemplate,
  Ie as data,
  K as dynamicClosure,
  X as dynamicSubscribers,
  gt as dynamicTagAttrs,
  i as forIn,
  o as forOf,
  f as forTo,
  b as getAbortSignal,
  _e as html,
  le as inChild,
  yt as inConditionalScope,
  Et as inLoopScope,
  we as init,
  z as initValue,
  J as intersection,
  ie as intersections,
  qe as lifecycle,
  Mt as loopIn,
  xt as loopOf,
  $t as loopTo,
  re as nextTagId,
  Se as nodeRef,
  M as on,
  Be as partialAttrs,
  he as prepare,
  je as props,
  ue as queueControllableSource,
  ce as queueEffect,
  ae as queueSource,
  ye as register,
  me as registerBoundSignal,
  Ce as registerSubscriber,
  v as resetAbortSignal,
  se as run,
  ge as runEffects,
  Y as setTagVar,
  $e as styleAttr,
  ee as tagVarSignal,
  U as value,
};
