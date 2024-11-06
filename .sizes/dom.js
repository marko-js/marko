var e = [],
  t = Symbol();
function n(n) {
  return (n[Symbol.iterator] = i), (n[t] = e), n;
}
function r(r, i) {
  return r ? (r[t] === e ? (r[t] = [i]) : r[t].push(i), r) : n(i);
}
function* i() {
  yield this, yield* this[t];
}
function l(e, t) {
  for (let n in e) t(n, e[n]);
}
function o(e, t) {
  if (e) {
    let n = 0;
    for (let r of e) t(r, n++);
  }
}
function f(e, t, n, r) {
  let i = t || 0,
    l = n || 1;
  for (let t = (e - i) / l, n = 0; n <= t; n++) r(i + n * l);
}
var u,
  a = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (u = !1), Q();
      }),
      t
    );
  })();
function c() {
  Q(), requestAnimationFrame(s);
}
function s() {
  a.postMessage(0);
}
function d(e) {
  return { u: 1, $global: e };
}
var h = d({});
function g(e) {
  return (h.a = h.b = e), h;
}
function p(e) {
  v(e), e.d?.h?.delete(e);
  let t = e.x?.c;
  if (t) for (let n of t) n.j?.(e);
  return e;
}
function v(e) {
  let t = e.h;
  if (t) for (let e of t) v(e);
  let n = e.l;
  if (n) for (let e of n.values()) e.abort();
}
function b(e) {
  let t = e.d;
  for (; t && !t.h?.has(e); ) (t.h ||= new Set()).add(e), (t = (e = t).d);
}
function m(e) {
  p(e);
  let t = e.a,
    n = e.b.nextSibling;
  for (; t !== n; ) {
    let e = t.nextSibling;
    t.remove(), (t = e);
  }
}
function y(e, t, n) {
  let r = e.a,
    i = e.b.nextSibling;
  for (; r !== i; ) {
    let e = r.nextSibling;
    t.insertBefore(r, n), (r = e);
  }
}
var k = {},
  w = class {
    m = [];
    n = {};
    y = { _: k };
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
        i = new Map();
      if (r.length) {
        let t = e.i.length,
          l = new Map();
        e.v = [];
        let o = (e, t = this.f, r = e) => {
          let o = (n[t] ||= {}),
            f = r;
          for (; 8 === (f = f.previousSibling).nodeType; );
          o.b = f;
          let u = (o.a ||= f),
            a = l.size;
          for (let [e, n] of l) {
            if (!a--) break;
            e !== t &&
              4 & u.compareDocumentPosition(n) &&
              2 & r.compareDocumentPosition(n) &&
              (i.set("" + e, t), l.delete(e));
          }
          return l.set(t, e), o;
        };
        for (let e of r) {
          let r = e.data,
            i = r[t],
            f = parseInt(r.slice(t + 1)),
            u = (n[f] ||= {}),
            a = r.indexOf(" ") + 1,
            c = a ? r.slice(a) : "";
          if ("*" === i) u[c] = e.previousSibling;
          else if ("$" === i) l.set(f, e);
          else if ("[" === i)
            this.f && (c && o(e), this.m.push(this.f)), (this.f = f), (u.a = e);
          else if ("]" === i) {
            if (((u[c] = e), f < this.f)) {
              let t = e.parentNode,
                n = o(e).a;
              t && t !== n.parentNode && t.prepend(n), (this.f = this.m.pop());
            }
          } else if ("|" === i) {
            u[parseInt(c)] = e;
            let t = JSON.parse("[" + c.slice(c.indexOf(" ") + 1) + "]"),
              n = e;
            for (let r = t.length - 1; r >= 0; r--) n = o(e, t[r], n).b;
          }
        }
      }
      let l = e.r;
      if (l) {
        e.r = [];
        let r = l.length,
          o = 0;
        try {
          for (C = !0; o < r; ) {
            let e = l[o++];
            if ("function" == typeof e) {
              let r = e(t),
                { $global: l } = n;
              l ||
                ((n.$global = l = r.$ || {}),
                (l.runtimeId = this.A),
                (l.renderId = this.o));
              for (let e in r)
                if ("$" !== e) {
                  let t = r[e],
                    o = n[e];
                  (t.$global = l), o !== t && (n[e] = Object.assign(t, o));
                  let f = i.get(e);
                  f && ((t.d = r[f]), b(t));
                }
            } else
              o === r || "string" != typeof l[o]
                ? delete this.z[this.o]
                : k[l[o++]](n[e]);
          }
        } finally {
          C = !1;
        }
      }
    }
  },
  C = !1;
function A(e, t) {
  return (k[e] = t), t;
}
function S(e, t) {
  return (k[e] = (e) => (n) => t(e, n)), t;
}
function N(e = "M") {
  let t,
    n = (r) => (n[r] = t[r] = new w(t, e, r));
  function r(r) {
    t = r;
    for (let e in r) n(e);
    Object.defineProperty(window, e, { configurable: !0, value: n });
  }
  window[e]
    ? r(window[e])
    : Object.defineProperty(window, e, { configurable: !0, set: r });
}
function x(e, t) {
  return A(e, t.g), t;
}
function $(e, t) {
  return A(e, (e) => () => e[t]);
}
var M = {},
  I = {},
  E = {};
function T(e, t, n) {
  let r = _(e, t, n),
    i = e + "#";
  return (e, t, n) => (
    H
      ? r(e, t === M || t === I || t === E || n || void 0 === e[i] ? t : I)
      : n
        ? n(t)
        : (function (e, t, n) {
            u || ((u = !0), queueMicrotask(c)),
              (H = !0),
              t(e, M),
              (H = !1),
              X.push(e, t, n);
          })(e, r, t),
    t
  );
}
function _(e, t, n) {
  let r = e + "#",
    i = n && ((e, t) => (i = n())(e, t));
  return (n, l) => {
    if (l === M) 1 === (n[r] = (n[r] ?? 0) + 1) && i?.(n, M);
    else if (l !== E) {
      let o = void 0 !== n[r];
      1 === (n[r] ||= 1) &&
        (l === I || (o && n[e] === l)
          ? i?.(n, I)
          : ((n[e] = l), t && t(n, l), i?.(n, E))),
        n[r]--;
    }
  };
}
var O = 0;
function B(e, t, n) {
  let r = "?" + O++,
    i = r + "#",
    l = n && ((e, t) => (l = n())(e, t));
  return (n, o) => {
    o === M
      ? 1 === (n[i] = (n[i] ?? 0) + 1) && l?.(n, M)
      : void 0 === n[i]
        ? ((n[i] = e - 1), (n[r] = !0))
        : 0 == --n[i]
          ? o === E || n[r]
            ? ((n[r] = !1), t(n, 0), l?.(n, E))
            : l?.(n, I)
          : (n[r] ||= o === E);
  };
}
var V = (e) => e._;
function j(e, t, n = V, r) {
  let i = "?" + O++,
    l = i + 1,
    o = "function" == typeof e ? e : () => e,
    f = r && ((e, t) => (f = r())(e, t));
  return (e, r) => {
    if (r === M) 1 === (e[l] = (e[l] ?? 0) + 1) && f?.(e, M);
    else {
      let u, a;
      if (void 0 === e[l]) {
        (u = n(e)), (a = o(e));
        let t = u[a + "#"],
          i = void 0 === t ? !u.u : 0 === t;
        (e[l] = i ? 1 : 2), (r = E);
      }
      0 == --e[l]
        ? r === E || e[i]
          ? ((e[i] = !1),
            (u ||= n(e)),
            (a ||= o(e)),
            t && t(e, u[a]),
            f?.(e, E))
          : f?.(e, I)
        : (e[i] ||= r === E);
    }
  };
}
function R(e, t, n = V, r) {
  let i = "function" == typeof e ? e : () => e,
    l = j(i, t, n, r),
    o = new WeakMap();
  return (
    (l.g = (e) => {
      let t = (t) => l(e, t),
        r = n(e),
        f = i(e) + "*";
      o.set(e, t), (r[f] ||= new Set()).add(t);
    }),
    (l.j = (e) => {
      let t = n(e),
        r = i(e) + "*";
      t[r]?.delete(o.get(e)), o.delete(e);
    }),
    l
  );
}
function q(e, t) {
  let n = (n, r) => {
    let i = n[t];
    for (let t of e) t(i, r);
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
function D(e) {
  let t = e + "*";
  return (e, n) => {
    let r = e[t];
    if (r) for (let e of r) e(n);
  };
}
function P(e, t, n) {
  e[t]["/"] = (t) => n(e, t);
}
var W = (e, t) => e["/"]?.(t),
  L = (e, t, n) => {
    let r = e?.c;
    if (r) for (let e of r) e(t, n);
  },
  F = new WeakMap();
function z({ $global: e }) {
  let t = F.get(e) || 0;
  return F.set(e, t + 1), "c" + e.runtimeId + e.renderId + t.toString(36);
}
function U(e, t) {
  return (n, r) => {
    t(n[e], r);
  };
}
function G(e) {
  return (t, n) => {
    for (let r of e) r(t, n);
  };
}
function J(e, t) {
  return (
    A(e, t),
    (e) => {
      K(e, t);
    }
  );
}
var X = [],
  Z = [],
  H = !1;
function K(e, t) {
  Z.push(e, t);
}
function Q() {
  let e = X,
    t = Z;
  try {
    (H = !0), (X = []), te(e);
  } finally {
    H = !1;
  }
  (Z = []), ee(t);
}
function Y(e) {
  let t = X,
    n = Z,
    r = (Z = []),
    i = (X = []);
  try {
    (H = !0), e(), (X = t), te(i);
  } finally {
    (H = !1), (X = t), (Z = n);
  }
  return r;
}
function ee(e = Z) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function te(e) {
  for (let t = 0; t < e.length; t += 3) {
    let n = e[t + 0];
    (0, e[t + 1])(n, e[t + 2]);
  }
}
function ne(e, t) {
  let n = e.l;
  if (n) {
    let e = n.get(t);
    e && (K(null, () => e.abort()), n.delete(t));
  }
}
function re(e, t) {
  let n = (e.l ||= new Map()),
    r = n.get(t);
  return r || (b(e), n.set(t, (r = new AbortController()))), r.signal;
}
function ie(e, t) {
  return t ? e : "";
}
var le = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function oe(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !le.test(e) ? t + "px" : t}`
    : "";
}
function fe(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          i = "";
        if (Array.isArray(e))
          for (let l of e) {
            let e = fe(l, t, n);
            "" !== e && ((r += i + e), (i = t));
          }
        else
          for (let l in e) {
            let o = n(l, e[l]);
            "" !== o && ((r += i + o), (i = t));
          }
        return r;
      }
  }
  return "";
}
function ue(e) {
  if (e) return e.renderBody || e.default || e;
}
var ae = 2147483647;
var ce = new Map(),
  se = he();
function de(e, t, n) {
  let r = ce.get(t);
  r || ce.set(t, (r = new WeakMap())),
    r.has(e) || se(e, t, ge),
    r.set(e, n || void 0);
}
function he() {
  let e = new WeakMap();
  return function (t, n, r) {
    let i = t.getRootNode(),
      l = e.get(i);
    l || e.set(i, (l = new Set())),
      l.has(n) || (l.add(n), i.addEventListener(n, r, !0));
  };
}
function ge(e) {
  let t = e.target;
  if (t) {
    let n = ce.get(e.type);
    if ((n.get(t)?.(e, t), e.bubbles))
      for (; (t = t.parentElement) && !e.cancelBubble; ) n.get(t)?.(e, t);
  }
}
function pe(e) {
  return e.replace(/[^\p{L}\p{N}]/gu, "");
}
function ve(e, t, n, r) {
  Ie(e, t, 0, Pe(n), r);
}
function be(e, t) {
  let n = e[t];
  _e(n, "input", je, () => {
    let r = e[t + ";"];
    r &&
      ((e[t + "="] = 6),
      r(n.checked),
      Q(),
      6 === e[t + "="] && (n.checked = !n.checked));
  });
}
function me(e, t, n, r, i) {
  (e[t + ":"] = n),
    Ge(e[t], "value", i),
    Ie(e, t, 1, Array.isArray(n) ? n.includes(i) : n === i, r);
}
function ye(e, t) {
  let n = e[t];
  _e(n, "input", je, () => {
    let r = e[t + ";"];
    if (r) {
      let i = e[t + ":"];
      (e[t + "="] = 6),
        r(
          Array.isArray(i)
            ? (function (e, t, n) {
                let r = e.indexOf(t);
                return (
                  (n
                    ? !~r && [...e, t]
                    : ~r && e.slice(0, r).concat(e.slice(r + 1))) || e
                );
              })(i, n.value, n.checked)
            : n.checked
              ? n.value
              : void 0,
        ),
        Q(),
        6 === e[t + "="] && (n.checked = !n.checked);
    }
  });
}
function ke(e, t, n, r) {
  let i = e[t],
    l = De(n);
  (e[t + ";"] = r),
    r
      ? ((e[t + "="] = 0),
        (e[t + ":"] = n),
        i.isConnected ? Me(i, l) : (i.defaultValue = l))
      : ((e[t + "="] = 5), (i.defaultValue = l));
}
function we(e, t) {
  let n = e[t];
  C && (e[t + ":"] = n.defaultValue),
    _e(n, "input", Ve, (r) => {
      let i = e[t + ";"];
      i &&
        ((e[t + "="] = 6),
        r && ($e = r.inputType),
        i(n.value),
        Q(),
        6 === e[t + "="] && Me(n, e[t + ":"]),
        ($e = ""));
    });
}
function Ce(e, t, n, r) {
  (e[t + ";"] = r),
    r ? ((e[t + "="] = 3), (e[t + ":"] = n)) : (e[t + "="] = 5),
    Se(e[t], n, r);
}
function Ae(e, t) {
  let n = e[t];
  _e(n, "input", Re, () => {
    let r = e[t + ";"];
    r &&
      ((e[t + "="] = 6),
      r(
        Array.isArray(e[t + ":"]) ? Array.from(n.selectedOptions, We) : n.value,
      ),
      Q(),
      6 === e[t + "="] && Se(n, e[t + ":"], r));
  });
}
function Se(e, t, n) {
  if (Array.isArray(t))
    for (let r of e.options) {
      let e = t.includes(r.value);
      n ? (r.selected = e) : (r.defaultSelected = e);
    }
  else {
    let r = De(t);
    if (n) e.value = r;
    else for (let t of e.options) t.defaultSelected = t.value === r;
  }
}
function Ne(e, t, n, r) {
  (e[t + ";"] = r), (e[t + "="] = r ? 4 : 5), (e[t].open = Pe(n));
}
function xe(e, t) {
  let n = e[t];
  _e(
    n,
    "DIALOG" === n.tagName ? "close" : "toggle",
    () => e[t + ";"] && n.open !== e[t + ":"],
    () => {
      let r = e[t + ";"];
      r &&
        ((e[t + "="] = 6),
        r(n.open),
        Q(),
        6 === e[t + "="] && (n.open = !n.open));
    },
  );
}
var $e = "";
function Me(e, t) {
  let n = e.value;
  if (n !== t)
    if (e.getRootNode().activeElement === e) {
      let r = e.selectionStart;
      e.value = t;
      let i = (function (e, t, n, r) {
        if (n !== t.length || /kw/.test(r)) {
          let r = t.slice(0, n),
            i = t.slice(n);
          if (e.startsWith(r)) return n;
          if (e.endsWith(i)) return e.length - i.length;
          {
            let t = pe(r).length,
              n = 0,
              i = 0;
            for (; i < t; ) pe(e[n]) && i++, n++;
            return n;
          }
        }
        return -1;
      })(e.value, n, r, $e);
      ~i && e.setSelectionRange(i, i);
    } else e.value = t;
}
function Ie(e, t, n, r, i) {
  (e[t + ";"] = i),
    i
      ? ((e[t + "="] = n), (e[t].checked = r))
      : ((e[t + "="] = 5), (e[t].defaultChecked = r));
}
var Ee = he(),
  Te = new WeakMap();
function _e(e, t, n, r) {
  Te.set(e, r),
    Ee(e, t, Oe),
    e.form && Ee(e.form, "reset", Be),
    C && n(e) && queueMicrotask(r);
}
function Oe(e) {
  Te.get(e.target)?.(e);
}
function Be(e) {
  let t = [];
  for (let n of e.target.elements) {
    let e = Te.get(n);
    e && qe(n) && t.push(e);
  }
  requestAnimationFrame(() => {
    if (!e.defaultPrevented) for (let e of t) e();
  });
}
function Ve(e) {
  return e.value !== e.defaultValue;
}
function je(e) {
  return e.checked !== e.defaultChecked;
}
function Re(e) {
  for (let t of e.options) if (t.selected !== t.defaultSelected) return !0;
}
function qe(e) {
  return e.options ? Re(e) : Ve(e) || je(e);
}
function De(e) {
  return it(e) || "";
}
function Pe(e) {
  return null != e && !1 !== e;
}
function We(e) {
  return e.value;
}
var Le = document.createTextNode(""),
  Fe = new Range();
function ze(e) {
  return Fe.createContextualFragment(e);
}
var Ue = /^on[A-Z-]/;
function Ge(e, t, n) {
  Je(e, t, it(n));
}
function Je(e, t, n) {
  e.getAttribute(t) != n &&
    (void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n));
}
function Xe(e, t) {
  Je(
    e,
    "class",
    (function (e) {
      return fe(e, " ", ie);
    })(t) || void 0,
  );
}
function Ze(e, t) {
  Je(
    e,
    "style",
    (function (e) {
      return fe(e, ";", oe);
    })(t) || void 0,
  );
}
function He(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
function Ke(e, t, n) {
  let r = e[t];
  for (let { name: e } of r.attributes)
    (n && (e in n || Qe(r, e, n))) || r.removeAttribute(e);
  et(e, t, n);
}
function Qe(e, t, n) {
  return "checked" === t && "INPUT" === e.tagName && "checkedValue" in n;
}
function Ye(e, t, n, r) {
  let i = e[t],
    l = {};
  for (let { name: e } of i.attributes)
    !r[e] && (!n || !(e in n)) && i.removeAttribute(e);
  for (let e in n) r[e] || (l[e] = n[e]);
  et(e, t, l);
}
function et(e, t, n) {
  let r,
    i,
    l = e[t];
  switch (l.tagName) {
    case "INPUT":
      if ("checked" in n || "checkedChange" in n)
        ve(e, t, n.checked, n.checkedChange);
      else if ("checkedValue" in n || "checkedValueChange" in n)
        me(e, t, n.checkedValue, n.checkedValueChange, n.value);
      else {
        if (!("value" in n) && !("valueChange" in n)) break;
        ke(e, t, n.value, n.valueChange);
      }
      i = /^(?:value|checked(?:Value)?)(?:Change)?$/;
      break;
    case "SELECT":
      ("value" in n || "valueChange" in n) &&
        (Ce(e, t, n.value, n.valueChange), (i = /^value(?:Change)?$/));
      break;
    case "TEXTAREA":
      ("value" in n || "valueChange" in n) &&
        (ke(e, t, n.value, n.valueChange), (i = /^value(?:Change)?$/));
      break;
    case "DETAILS":
    case "DIALOG":
      ("open" in n || "openChange" in n) &&
        (Ne(e, t, n.open, n.openChange), (i = /^open(?:Change)?$/));
  }
  for (let o in n) {
    let f = n[o];
    switch (o) {
      case "class":
        Xe(l, f);
        break;
      case "style":
        Ze(l, f);
        break;
      case "renderBody":
        break;
      default:
        Ue.test(o)
          ? ((r ||= e[t + "~"] = {})[
              "-" === o[2] ? o.slice(3) : o.slice(2).toLowerCase()
            ] = f)
          : i?.test(o) || Ge(l, o, f);
    }
  }
}
function tt(e, t) {
  let n = e[t],
    r = e[t + "~"];
  switch (e[t + "="]) {
    case 0:
      be(e, t);
      break;
    case 1:
      ye(e, t);
      break;
    case 2:
      we(e, t);
      break;
    case 3:
      Ae(e, t);
      break;
    case 4:
      xe(e, t);
  }
  for (let e in r) de(n, e, r[e]);
}
function nt(e, t, n) {
  let r = e[n],
    i = e[n + "-"] || r,
    l = r.parentNode,
    o = i.nextSibling,
    f = ze(t || 0 === t ? t + "" : "<!>");
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), l.insertBefore(f, r);
  let u = r;
  for (; u !== o; ) {
    let e = u.nextSibling;
    u.remove(), (u = e);
  }
}
function rt(e, t, n) {
  let r = e[n],
    i = e[n + "-"],
    l = e[t];
  if (i) for (let e in i) e in r || (l[e] = void 0);
  for (let e in r) l[e] = r[e];
  e[n + "-"] = r;
}
function it(e) {
  if (e || 0 === e) return !0 === e ? "" : e + "";
}
function lt(e, t, n) {
  let r = e[t];
  r
    ? (Object.assign(r, n), r.onUpdate?.())
    : ((e[t] = n),
      n.onMount?.(),
      (re(e, "-" + t).onabort = () => n.onDestroy?.()));
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
  let i,
    l = 0,
    o = 0,
    f = 0;
  for (n !== t && (t.d = n); (i = e.charCodeAt(r++)); )
    if (((o = l), (l = 0), i >= 117)) l = 10 * o + i - 117;
    else if (i >= 107) {
      for (i = 10 * o + i - 107; i--; ) ot.parentNode();
      ot.nextSibling();
    } else if (i >= 97) for (i = 10 * o + i - 97; i--; ) ot.nextSibling();
    else if (i >= 67) for (i = 20 * o + i - 67; i--; ) ot.nextNode();
    else if (47 === i) r = at(e, (t[f++] = d(t.$global)), n, r);
    else {
      if (38 === i) return r;
      if (32 === i) t[f++] = ot.currentNode;
      else {
        let e = (t[f++] = document.createTextNode("")),
          n = ot.currentNode;
        n.parentNode.replaceChild(e, n), (ot.currentNode = e);
      }
    }
  return r;
}
function ct(e, t, n) {
  let r = d(t);
  if (((r._ = r.d = e.B || n), (r.x = e), dt(e, r), e.c))
    for (let t of e.c) t.g?.(r);
  return r;
}
function st(e, t, n) {
  if ("string" != typeof e) return ct(e, t, n);
  let r = d(t);
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
  return (r, i) => {
    let l = r[e + "("];
    if (!l || i === E) return;
    let o = r[e + "!"];
    if (i === M || i === I) return l.e?.(o, i);
    let f = t?.(r);
    if ("string" == typeof l) kt(o, 0, f), Ke(o, 0, i());
    else if (l.e) {
      let e = i();
      l.e(o, n ? e : [f ? { ...e, renderBody: f } : e]);
    }
  };
}
function gt(e, t, n, r, i, l) {
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
    E: i,
    F: void 0,
    get e() {
      return (o ||= l?.());
    },
    get c() {
      return (f ||= new Set(r?.()));
    },
  });
}
function pt(e, t, n, r, i, l) {
  return gt(e, t, n, r, i, l)();
}
function vt() {
  return (this.F ||= (function (e) {
    let t = ze(e);
    return t.firstChild === t.lastChild ? t.firstChild || Le : t;
  })(this.D)).cloneNode(!0);
}
var bt = function (e, t, n) {
  let r = e + "(",
    i = e + "!",
    l = n && ((e, t) => (l = n())(e, t));
  return (n, o) => {
    if (o === E) return;
    let f = n[r],
      u = o;
    if (o !== M && o !== I) {
      let i = ue(o);
      _t(i, f)
        ? ((f = n[r] = i),
          (function (e, t, n) {
            let r,
              i = e[t + "!"];
            n
              ? ((r = e[t + "!"] = st(n, e.$global, e)), (i = i || g(e[t])))
              : ((r = g(e[t])), (e[t + "!"] = void 0)),
              y(r, i.a.parentNode, i.a),
              m(i);
          })(n, e, i),
          t && t(n),
          (u = E))
        : (u = I);
    }
    l?.(n, u), L(f, n[i], u);
  };
};
function mt(e, t) {
  let n = t + "!",
    r = t + "(";
  return (t, i) => {
    let l = t[n];
    if (l) {
      let n = t[r];
      (!n?.c || n.c.has(e)) && e(l, i);
    }
  };
}
var yt = function (e, t, n) {
  let r = e + "(",
    i = e + "!",
    l = n && ((e, t) => (l = n())(e, t));
  return (n, o) => {
    if (o === E) return;
    let f = n[r],
      u = o;
    if (o !== M && o !== I) {
      let i = ue(o);
      _t(i, f) ? ((f = n[r] = i), kt(n, e, i), t && t(n), (u = E)) : (u = I);
    }
    l?.(n, u), L(f, n[i], u);
  };
};
function kt(e, t, n) {
  let r = e[t + "!"],
    i = e[t];
  if (((i.textContent = ""), n)) {
    y((e[t + "!"] = st(n, e.$global, e)), i, null);
  }
  r && p(r);
}
var wt = new Map([[Symbol(), g(void 0)]]),
  Ct = [g(void 0)],
  At = new Map(),
  St = [];
function Nt(e, t) {
  return Mt(e, t, ([e, t = Et], n) => {
    o(
      e,
      "string" == typeof t
        ? (e, r) => n(e[t], [e, r])
        : (e, r) => n(t(e, r), [e, r]),
    );
  });
}
function xt(e, t) {
  return Mt(e, t, ([e, t = Tt], n) => l(e, (e, r) => n(t(e, r), [e, r])));
}
function $t(e, t) {
  return Mt(e, t, ([e, t, n, r = Tt], i) => f(e, t, n, (e) => i(r(e), [e])));
}
function Mt(e, t, n) {
  let r = e + "!",
    i = t.c,
    l = t.e;
  return (o, f) => {
    if (f === E) return;
    if (f === M || f === I) {
      let t = o[r] ?? o[e + "("]?.values() ?? [];
      if (t !== Ct)
        for (let e of t) {
          l?.(e, f);
          for (let t of i) t(e, f);
        }
      return;
    }
    let u,
      a,
      c,
      s,
      d = o[e],
      h = 8 === d.nodeType || 3 === d.nodeType,
      v = o[e + "("] || (h ? wt : At),
      b = o[e + "!"] || Array.from(v.values()),
      k = !0;
    if (
      (n(f, (e, n) => {
        let r = v.get(e),
          f = I;
        if ((r || ((r = ct(t, o.$global, o)), (f = E)), l && l(r, n), i))
          for (let e of i) e(r, f);
        u ? (u.set(e, r), a.push(r)) : ((u = new Map([[e, r]])), (a = [r]));
      }),
      !u)
    )
      if (h) (u = wt), (a = Ct), g(d);
      else {
        if (t.E) for (let e = 0; e < b.length; e++) p(b[e]);
        (d.textContent = ""), (u = At), (a = St), (k = !1);
      }
    if (k) {
      if (h) {
        v === wt && g(d);
        let e = b[b.length - 1];
        (c = e.b.nextSibling), (s = e.a.parentNode);
      } else (c = null), (s = d);
      !(function (e, t, n, r) {
        let i,
          l,
          o,
          f,
          u,
          a,
          c = 0,
          s = 0,
          d = t.length - 1,
          h = n.length - 1,
          g = t[c],
          p = n[s],
          v = t[d],
          b = n[h];
        e: {
          for (; g === p; ) {
            if ((++c, ++s, c > d || s > h)) break e;
            (g = t[c]), (p = n[s]);
          }
          for (; v === b; ) {
            if ((--d, --h, c > d || s > h)) break e;
            (v = t[d]), (b = n[h]);
          }
        }
        if (c > d) {
          if (s <= h) {
            (o = h + 1), (f = o < n.length ? n[o].a : r);
            do {
              y(n[s++], e, f);
            } while (s <= h);
          }
        } else if (s > h)
          do {
            m(t[c++]);
          } while (c <= d);
        else {
          let g = d - c + 1,
            p = h - s + 1,
            v = t,
            b = new Array(p);
          for (i = 0; i < p; ++i) b[i] = -1;
          let k = 0,
            w = 0,
            C = new Map();
          for (l = s; l <= h; ++l) C.set(n[l], l);
          for (i = c; i <= d && w < p; ++i)
            (u = t[i]),
              (l = C.get(u)),
              void 0 !== l &&
                ((k = k > l ? ae : l),
                ++w,
                (a = n[l]),
                (b[l - s] = i),
                (v[i] = null));
          if (g === t.length && 0 === w) {
            for (; s < p; ++s) y(n[s], e, r);
            for (; c < g; ++c) m(t[c]);
          } else {
            for (i = g - w; i > 0; ) (u = v[c++]), null !== u && (m(u), i--);
            if (k === ae) {
              let t = (function (e) {
                let t,
                  n,
                  r = e.slice(),
                  i = [];
                i.push(0);
                for (let l = 0, o = e.length; l < o; ++l) {
                  if (-1 === e[l]) continue;
                  let o = i[i.length - 1];
                  if (e[o] < e[l]) (r[l] = o), i.push(l);
                  else {
                    for (t = 0, n = i.length - 1; t < n; ) {
                      let r = ((t + n) / 2) | 0;
                      e[i[r]] < e[l] ? (t = r + 1) : (n = r);
                    }
                    e[l] < e[i[t]] && (t > 0 && (r[l] = i[t - 1]), (i[t] = l));
                  }
                }
                for (t = i.length, n = i[t - 1]; t-- > 0; )
                  (i[t] = n), (n = r[n]);
                return i;
              })(b);
              for (l = t.length - 1, o = n.length, i = p - 1; i >= 0; --i)
                -1 === b[i] || l < 0 || i !== t[l]
                  ? ((k = i + s),
                    (a = n[k++]),
                    (f = k < o ? n[k].a : r),
                    y(a, e, f))
                  : --l;
            } else if (w !== p)
              for (o = n.length, i = p - 1; i >= 0; --i)
                -1 === b[i] &&
                  ((k = i + s),
                  (a = n[k++]),
                  (f = k < o ? n[k].a : r),
                  y(a, e, f));
          }
        }
      })(s, b, a, c);
    }
    (o[e + "("] = u), (o[e + "!"] = a);
  };
}
function It(e, t) {
  let n = t + "!";
  return (r, i) => {
    let l = r[n] ?? r[t + "("]?.values() ?? [];
    if (l !== Ct) for (let t of l) e(t, i);
  };
}
function Et(e, t) {
  return t;
}
function Tt(e) {
  return e;
}
function _t(e, t) {
  return e !== t && (e?.t || 0) !== t?.t;
}
var Ot = new Map(),
  Bt = {
    patchConditionals: function (e) {
      (bt = e(bt)), (yt = e(yt));
    },
    queueEffect: K,
    init() {
      A("$C_s", (e) => {
        Ot.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      A("$C_r", e);
    },
    isOp: (e) => e === M || e === I || e === E,
    isRenderer: (e) => void 0 !== e.k,
    getStartNode: (e) => e.a,
    setScopeNodes(e, t, n) {
      (e.a = t), (e.b = n);
    },
    runComponentEffects() {
      ee(this.effects);
    },
    resolveRegistered: (e, { runtimeId: t, componentIdPrefix: n }) =>
      Array.isArray(e) && "string" == typeof e[0]
        ? (function (e, t) {
            let n = k[e];
            return t ? n(t) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.n[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = pt("", void 0, e, void 0, 1, n && (() => n));
      return (r.k = t), r;
    },
    render(e, t, n, r) {
      let i = t.scope;
      i || ((i = Ot.get(t.id)), i && ((t.scope = i), Ot.delete(t.id)));
      let l = n.e || Vt,
        o = !1;
      if (
        ((t.effects = Y(() => {
          if (i) l(i, M), (o = !0);
          else {
            i = t.scope = ct(n, e.global);
            let r = n.c;
            if (r) for (let e of r) e(t.scope, I);
          }
          l(i, r);
        })),
        !o)
      )
        return i.a === i.b ? i.a : i.a.parentNode;
    },
  };
function Vt() {}
var jt = (e, t) => ((e.mount = Rt), (e._ = e), A(t, e));
function Rt(e = {}, t, n) {
  let r,
    i,
    { $global: l } = e;
  l
    ? (({ $global: l, ...e } = e),
      (l = { runtimeId: "M", renderId: "_", ...l }))
    : (l = { runtimeId: "M", renderId: "_" });
  let o = this.e,
    f = Y(() => {
      (r = d(l)), (i = dt(this, r)), o && o(r, [e]);
    });
  switch (n) {
    case "afterbegin":
      t.insertBefore(i, t.firstChild);
      break;
    case "afterend":
      t.parentElement.insertBefore(i, t.nextSibling);
      break;
    case "beforebegin":
      t.parentElement.insertBefore(i, t);
      break;
    default:
      t.appendChild(i);
  }
  return (
    ee(f),
    {
      update: (e) => {
        o &&
          ee(
            Y(() => {
              o(r, M), o(r, [e]);
            }),
          );
      },
      destroy: () => {
        m(r);
      },
    }
  );
}
export {
  Ge as attr,
  n as attrTag,
  r as attrTags,
  Ke as attrs,
  tt as attrsEvents,
  q as childClosures,
  Xe as classAttr,
  j as closure,
  Bt as compat,
  bt as conditional,
  yt as conditionalOnlyChild,
  Ne as controllable_detailsOrDialog_open,
  xe as controllable_detailsOrDialog_open_effect,
  ve as controllable_input_checked,
  me as controllable_input_checkedValue,
  ye as controllable_input_checkedValue_effect,
  be as controllable_input_checked_effect,
  ke as controllable_input_value,
  we as controllable_input_value_effect,
  Ce as controllable_select_value,
  Ae as controllable_select_value_effect,
  ke as controllable_textarea_value,
  we as controllable_textarea_value_effect,
  pt as createRenderer,
  gt as createRendererWithOwner,
  d as createScope,
  jt as createTemplate,
  He as data,
  R as dynamicClosure,
  D as dynamicSubscribers,
  ht as dynamicTagAttrs,
  J as effect,
  l as forIn,
  o as forOf,
  f as forTo,
  re as getAbortSignal,
  nt as html,
  U as inChild,
  mt as inConditionalScope,
  It as inLoopScope,
  N as init,
  B as intersection,
  G as intersections,
  lt as lifecycle,
  xt as loopIn,
  Nt as loopOf,
  $t as loopTo,
  z as nextTagId,
  $ as nodeRef,
  de as on,
  Ye as partialAttrs,
  rt as props,
  A as register,
  S as registerBoundSignal,
  x as registerSubscriber,
  ne as resetAbortSignal,
  Q as run,
  P as setTagVar,
  T as state,
  Ze as styleAttr,
  W as tagVarSignal,
  _ as value,
};
