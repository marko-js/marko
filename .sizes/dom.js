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
        (u = !1), Y();
      }),
      t
    );
  })();
function c() {
  Y(), requestAnimationFrame(s);
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
function T(e, t) {
  return (e, n) => {
    t(e, n);
  };
}
function _(e, t, n) {
  let r = O(e, t, n),
    i = e + "#";
  return (e, t, n) => (
    K
      ? r(e, t === M || t === I || t === E || n || void 0 === e[i] ? t : I)
      : n
        ? n(t)
        : (function (e, t, n) {
            u || ((u = !0), queueMicrotask(c)),
              (K = !0),
              t(e, M),
              (K = !1),
              Z.push(e, t, n);
          })(e, r, t),
    t
  );
}
function O(e, t, n) {
  let r = e + "#",
    i = n && ((e, t) => (i = n())(e, t));
  return (n, l) => {
    if (l === M) 1 === (n[r] = (n[r] ?? 0) + 1) && i?.(n, M);
    else if (l !== E) {
      let o = void 0 !== n[r];
      1 === (n[r] ||= 1) &&
        (l === I || (o && n[e] === l)
          ? i?.(n, I)
          : ((n[e] = l), t?.(n, l), i?.(n, E))),
        n[r]--;
    }
  };
}
var B = 0;
function V(e, t, n) {
  let r = "?" + B++,
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
var j = (e) => e._;
function R(e, t, n = j, r) {
  let i = "?" + B++,
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
          ? ((e[i] = !1), (u ||= n(e)), (a ||= o(e)), t?.(e, u[a]), f?.(e, E))
          : f?.(e, I)
        : (e[i] ||= r === E);
    }
  };
}
function q(e, t, n = j, r) {
  let i = "function" == typeof e ? e : () => e,
    l = R(i, t, n, r),
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
function D(e, t) {
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
function P(e) {
  let t = e + "*";
  return (e, n) => {
    let r = e[t];
    if (r) for (let e of r) e(n);
  };
}
function W(e, t, n) {
  e[t]["/"] = (t) => n(e, t);
}
var L = (e, t) => e["/"]?.(t),
  F = (e, t, n) => {
    let r = e?.c;
    if (r) for (let e of r) e(t, n);
  },
  z = new WeakMap();
function U({ $global: e }) {
  let t = z.get(e) || 0;
  return z.set(e, t + 1), "c" + e.runtimeId + e.renderId + t.toString(36);
}
function G(e, t) {
  return (n, r) => {
    t(n[e], r);
  };
}
function J(e) {
  return (t, n) => {
    for (let r of e) r(t, n);
  };
}
function X(e, t) {
  return (
    A(e, t),
    (e) => {
      Q(e, t);
    }
  );
}
var Z = [],
  H = [],
  K = !1;
function Q(e, t) {
  H.push(e, t);
}
function Y() {
  let e = Z,
    t = H;
  try {
    (K = !0), (Z = []), ne(e);
  } finally {
    K = !1;
  }
  (H = []), te(t);
}
function ee(e) {
  let t = Z,
    n = H,
    r = (H = []),
    i = (Z = []);
  try {
    (K = !0), e(), (Z = t), ne(i);
  } finally {
    (K = !1), (Z = t), (H = n);
  }
  return r;
}
function te(e = H) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function ne(e) {
  for (let t = 0; t < e.length; t += 3) {
    let n = e[t + 0];
    (0, e[t + 1])(n, e[t + 2]);
  }
}
function re(e, t) {
  let n = e.l;
  if (n) {
    let e = n.get(t);
    e && (Q(null, () => e.abort()), n.delete(t));
  }
}
function ie(e, t) {
  let n = (e.l ||= new Map()),
    r = n.get(t);
  return r || (b(e), n.set(t, (r = new AbortController()))), r.signal;
}
function le(e, t) {
  return t ? e : "";
}
var oe = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function fe(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !oe.test(e) ? t + "px" : t}`
    : "";
}
function ue(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          i = "";
        if (Array.isArray(e))
          for (let l of e) {
            let e = ue(l, t, n);
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
function ae(e) {
  if (e) return e.renderBody || e.default || e;
}
var ce = 2147483647;
var se = new Map(),
  de = ge();
function he(e, t, n) {
  let r = se.get(t);
  r || se.set(t, (r = new WeakMap())),
    r.has(e) || de(e, t, pe),
    r.set(e, n || void 0);
}
function ge() {
  let e = new WeakMap();
  return function (t, n, r) {
    let i = t.getRootNode(),
      l = e.get(i);
    l || e.set(i, (l = new Set())),
      l.has(n) || (l.add(n), i.addEventListener(n, r, !0));
  };
}
function pe(e) {
  let t = e.target;
  if (t) {
    let n = se.get(e.type);
    if ((n.get(t)?.(e, t), e.bubbles))
      for (; (t = t.parentElement) && !e.cancelBubble; ) n.get(t)?.(e, t);
  }
}
function ve(e) {
  return e.replace(/[^\p{L}\p{N}]/gu, "");
}
function be(e, t, n, r) {
  Ee(e, t, 0, We(n), r);
}
function me(e, t) {
  let n = e[t];
  Oe(n, "input", Re, () => {
    let r = e[t + ";"];
    r &&
      ((e[t + "="] = 6),
      r(n.checked),
      Y(),
      6 === e[t + "="] && (n.checked = !n.checked));
  });
}
function ye(e, t, n, r, i) {
  (e[t + ":"] = n),
    Je(e[t], "value", i),
    Ee(e, t, 1, Array.isArray(n) ? n.includes(i) : n === i, r);
}
function ke(e, t) {
  let n = e[t];
  Oe(n, "input", Re, () => {
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
        Y(),
        6 === e[t + "="] && (n.checked = !n.checked);
    }
  });
}
function we(e, t, n, r) {
  let i = e[t],
    l = Pe(n);
  (e[t + ";"] = r),
    r
      ? ((e[t + "="] = 0),
        (e[t + ":"] = n),
        i.isConnected ? Ie(i, l) : (i.defaultValue = l))
      : ((e[t + "="] = 5), (i.defaultValue = l));
}
function Ce(e, t) {
  let n = e[t];
  C && (e[t + ":"] = n.defaultValue),
    Oe(n, "input", je, (r) => {
      let i = e[t + ";"];
      i &&
        ((e[t + "="] = 6),
        r && (Me = r.inputType),
        i(n.value),
        Y(),
        6 === e[t + "="] && Ie(n, e[t + ":"]),
        (Me = ""));
    });
}
function Ae(e, t, n, r) {
  (e[t + ";"] = r),
    r ? ((e[t + "="] = 3), (e[t + ":"] = n)) : (e[t + "="] = 5),
    Ne(e[t], n, r);
}
function Se(e, t) {
  let n = e[t];
  Oe(n, "input", qe, () => {
    let r = e[t + ";"];
    r &&
      ((e[t + "="] = 6),
      r(
        Array.isArray(e[t + ":"]) ? Array.from(n.selectedOptions, Le) : n.value,
      ),
      Y(),
      6 === e[t + "="] && Ne(n, e[t + ":"], r));
  });
}
function Ne(e, t, n) {
  if (Array.isArray(t))
    for (let r of e.options) {
      let e = t.includes(r.value);
      n ? (r.selected = e) : (r.defaultSelected = e);
    }
  else {
    let r = Pe(t);
    if (n) e.value = r;
    else for (let t of e.options) t.defaultSelected = t.value === r;
  }
}
function xe(e, t, n, r) {
  (e[t + ";"] = r), (e[t + "="] = r ? 4 : 5), (e[t].open = We(n));
}
function $e(e, t) {
  let n = e[t];
  Oe(
    n,
    "DIALOG" === n.tagName ? "close" : "toggle",
    () => e[t + ";"] && n.open !== e[t + ":"],
    () => {
      let r = e[t + ";"];
      r &&
        ((e[t + "="] = 6),
        r(n.open),
        Y(),
        6 === e[t + "="] && (n.open = !n.open));
    },
  );
}
var Me = "";
function Ie(e, t) {
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
            let t = ve(r).length,
              n = 0,
              i = 0;
            for (; i < t; ) ve(e[n]) && i++, n++;
            return n;
          }
        }
        return -1;
      })(e.value, n, r, Me);
      ~i && e.setSelectionRange(i, i);
    } else e.value = t;
}
function Ee(e, t, n, r, i) {
  (e[t + ";"] = i),
    i
      ? ((e[t + "="] = n), (e[t].checked = r))
      : ((e[t + "="] = 5), (e[t].defaultChecked = r));
}
var Te = ge(),
  _e = new WeakMap();
function Oe(e, t, n, r) {
  _e.set(e, r),
    Te(e, t, Be),
    e.form && Te(e.form, "reset", Ve),
    C && n(e) && queueMicrotask(r);
}
function Be(e) {
  _e.get(e.target)?.(e);
}
function Ve(e) {
  let t = [];
  for (let n of e.target.elements) {
    let e = _e.get(n);
    e && De(n) && t.push(e);
  }
  requestAnimationFrame(() => {
    if (!e.defaultPrevented) for (let e of t) e();
  });
}
function je(e) {
  return e.value !== e.defaultValue;
}
function Re(e) {
  return e.checked !== e.defaultChecked;
}
function qe(e) {
  for (let t of e.options) if (t.selected !== t.defaultSelected) return !0;
}
function De(e) {
  return e.options ? qe(e) : je(e) || Re(e);
}
function Pe(e) {
  return lt(e) || "";
}
function We(e) {
  return null != e && !1 !== e;
}
function Le(e) {
  return e.value;
}
var Fe = document.createTextNode(""),
  ze = new Range();
function Ue(e) {
  return ze.createContextualFragment(e);
}
var Ge = /^on[A-Z-]/;
function Je(e, t, n) {
  Xe(e, t, lt(n));
}
function Xe(e, t, n) {
  e.getAttribute(t) != n &&
    (void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n));
}
function Ze(e, t) {
  Xe(
    e,
    "class",
    (function (e) {
      return ue(e, " ", le);
    })(t) || void 0,
  );
}
function He(e, t) {
  Xe(
    e,
    "style",
    (function (e) {
      return ue(e, ";", fe);
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
    (n && (e in n || Ye(r, e, n))) || r.removeAttribute(e);
  tt(e, t, n);
}
function Ye(e, t, n) {
  return "checked" === t && "INPUT" === e.tagName && "checkedValue" in n;
}
function et(e, t, n, r) {
  let i = e[t],
    l = {};
  for (let { name: e } of i.attributes)
    !r[e] && (!n || !(e in n)) && i.removeAttribute(e);
  for (let e in n) r[e] || (l[e] = n[e]);
  tt(e, t, l);
}
function tt(e, t, n) {
  let r,
    i,
    l = e[t];
  switch (l.tagName) {
    case "INPUT":
      if ("checked" in n || "checkedChange" in n)
        be(e, t, n.checked, n.checkedChange);
      else if ("checkedValue" in n || "checkedValueChange" in n)
        ye(e, t, n.checkedValue, n.checkedValueChange, n.value);
      else {
        if (!("value" in n) && !("valueChange" in n)) break;
        we(e, t, n.value, n.valueChange);
      }
      i = /^(?:value|checked(?:Value)?)(?:Change)?$/;
      break;
    case "SELECT":
      ("value" in n || "valueChange" in n) &&
        (Ae(e, t, n.value, n.valueChange), (i = /^value(?:Change)?$/));
      break;
    case "TEXTAREA":
      ("value" in n || "valueChange" in n) &&
        (we(e, t, n.value, n.valueChange), (i = /^value(?:Change)?$/));
      break;
    case "DETAILS":
    case "DIALOG":
      ("open" in n || "openChange" in n) &&
        (xe(e, t, n.open, n.openChange), (i = /^open(?:Change)?$/));
  }
  for (let o in n) {
    let f = n[o];
    switch (o) {
      case "class":
        Ze(l, f);
        break;
      case "style":
        He(l, f);
        break;
      case "renderBody":
        break;
      default:
        Ge.test(o)
          ? ((r ||= e[t + "~"] = {})[
              "-" === o[2] ? o.slice(3) : o.slice(2).toLowerCase()
            ] = f)
          : i?.test(o) || Je(l, o, f);
    }
  }
}
function nt(e, t) {
  let n = e[t],
    r = e[t + "~"];
  switch (e[t + "="]) {
    case 0:
      me(e, t);
      break;
    case 1:
      ke(e, t);
      break;
    case 2:
      Ce(e, t);
      break;
    case 3:
      Se(e, t);
      break;
    case 4:
      $e(e, t);
  }
  for (let e in r) he(n, e, r[e]);
}
function rt(e, t, n) {
  let r = e[n],
    i = e[n + "-"] || r,
    l = r.parentNode,
    o = i.nextSibling,
    f = Ue(t || 0 === t ? t + "" : "<!>");
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), l.insertBefore(f, r);
  let u = r;
  for (; u !== o; ) {
    let e = u.nextSibling;
    u.remove(), (u = e);
  }
}
function it(e, t, n) {
  let r = e[n],
    i = e[n + "-"],
    l = e[t];
  if (i) for (let e in i) e in r || (l[e] = void 0);
  for (let e in r) l[e] = r[e];
  e[n + "-"] = r;
}
function lt(e) {
  if (e || 0 === e) return !0 === e ? "" : e + "";
}
function ot(e, t, n) {
  let r = e[t];
  r
    ? (Object.assign(r, n), r.onUpdate?.())
    : ((e[t] = n),
      n.onMount?.(),
      (ie(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var ft = document.createTreeWalker(document);
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
  let i,
    l = 0,
    o = 0,
    f = 0;
  for (n !== t && (t.d = n); (i = e.charCodeAt(r++)); )
    if (((o = l), (l = 0), i >= 117)) l = 10 * o + i - 117;
    else if (i >= 107) {
      for (i = 10 * o + i - 107; i--; ) ft.parentNode();
      ft.nextSibling();
    } else if (i >= 97) for (i = 10 * o + i - 97; i--; ) ft.nextSibling();
    else if (i >= 67) for (i = 20 * o + i - 67; i--; ) ft.nextNode();
    else if (47 === i) r = ct(e, (t[f++] = d(t.$global)), n, r);
    else {
      if (38 === i) return r;
      if (32 === i) t[f++] = ft.currentNode;
      else {
        let e = (t[f++] = document.createTextNode("")),
          n = ft.currentNode;
        n.parentNode.replaceChild(e, n), (ft.currentNode = e);
      }
    }
  return r;
}
function st(e, t, n) {
  let r = d(t);
  if (((r._ = r.d = e.B || n), (r.x = e), ht(e, r), e.c))
    for (let t of e.c) t.g?.(r);
  return r;
}
function dt(e, t, n) {
  if ("string" != typeof e) return st(e, t, n);
  let r = d(t);
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
  return (r, i) => {
    let l = r[e + "("];
    if (!l || i === E) return;
    let o = r[e + "!"];
    if (i === M || i === I) return l.e?.(o, i);
    let f = t?.(r);
    if ("string" == typeof l) wt(o, 0, f), Qe(o, 0, i());
    else if (l.e) {
      let e = i();
      l.e(o, n ? e : [f ? { ...e, renderBody: f } : e]);
    }
  };
}
function pt(e, t, n, r, i = 0, l) {
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
function vt(e, t, n, r, i, l) {
  return pt(e, t, n, r, i, l)();
}
function bt() {
  return (this.F ||= (function (e) {
    let t = Ue(e);
    return t.firstChild === t.lastChild ? t.firstChild || Fe : t;
  })(this.D)).cloneNode(!0);
}
var mt = function (e, t, n) {
  let r = e + "(",
    i = e + "!",
    l = n && ((e, t) => (l = n())(e, t));
  return (n, o) => {
    if (o === E) return;
    let f = n[r],
      u = o;
    if (o !== M && o !== I) {
      let i = ae(o);
      Ot(i, f)
        ? ((f = n[r] = i),
          (function (e, t, n) {
            let r,
              i = e[t + "!"];
            n
              ? ((r = e[t + "!"] = dt(n, e.$global, e)), (i = i || g(e[t])))
              : ((r = g(e[t])), (e[t + "!"] = void 0)),
              y(r, i.a.parentNode, i.a),
              m(i);
          })(n, e, i),
          t?.(n),
          (u = E))
        : (u = I);
    }
    l?.(n, u), F(f, n[i], u);
  };
};
function yt(e, t) {
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
var kt = function (e, t, n) {
  let r = e + "(",
    i = e + "!",
    l = n && ((e, t) => (l = n())(e, t));
  return (n, o) => {
    if (o === E) return;
    let f = n[r],
      u = o;
    if (o !== M && o !== I) {
      let i = ae(o);
      Ot(i, f) ? ((f = n[r] = i), wt(n, e, i), t?.(n), (u = E)) : (u = I);
    }
    l?.(n, u), F(f, n[i], u);
  };
};
function wt(e, t, n) {
  let r = e[t + "!"],
    i = e[t];
  if (((i.textContent = ""), n)) {
    y((e[t + "!"] = dt(n, e.$global, e)), i, null);
  }
  r && p(r);
}
var Ct = new Map([[Symbol(), g(void 0)]]),
  At = [g(void 0)],
  St = new Map(),
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
function $t(e, t) {
  return It(e, t, ([e, t = _t], n) => l(e, (e, r) => n(t(e, r), [e, r])));
}
function Mt(e, t) {
  return It(e, t, ([e, t, n, r = _t], i) => f(e, t, n, (e) => i(r(e), [e])));
}
function It(e, t, n) {
  let r = e + "!",
    i = t.c,
    l = t.e;
  return (o, f) => {
    if (f === E) return;
    if (f === M || f === I) {
      let t = o[r] ?? o[e + "("]?.values() ?? [];
      if (t !== At)
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
      v = o[e + "("] || (h ? Ct : St),
      b = o[e + "!"] || Array.from(v.values()),
      k = !0;
    if (
      (n(f, (e, n) => {
        let r = v.get(e),
          f = I;
        if ((r || ((r = st(t, o.$global, o)), (f = E)), l && l(r, n), i))
          for (let e of i) e(r, f);
        u ? (u.set(e, r), a.push(r)) : ((u = new Map([[e, r]])), (a = [r]));
      }),
      !u)
    )
      if (h) (u = Ct), (a = At), g(d);
      else {
        if (t.E) for (let e = 0; e < b.length; e++) p(b[e]);
        (d.textContent = ""), (u = St), (a = Nt), (k = !1);
      }
    if (k) {
      if (h) {
        v === Ct && g(d);
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
                ((k = k > l ? ce : l),
                ++w,
                (a = n[l]),
                (b[l - s] = i),
                (v[i] = null));
          if (g === t.length && 0 === w) {
            for (; s < p; ++s) y(n[s], e, r);
            for (; c < g; ++c) m(t[c]);
          } else {
            for (i = g - w; i > 0; ) (u = v[c++]), null !== u && (m(u), i--);
            if (k === ce) {
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
function Et(e, t) {
  let n = t + "!";
  return (r, i) => {
    let l = r[n] ?? r[t + "("]?.values() ?? [];
    if (l !== At) for (let t of l) e(t, i);
  };
}
function Tt(e, t) {
  return t;
}
function _t(e) {
  return e;
}
function Ot(e, t) {
  return e !== t && (e?.t || 0) !== t?.t;
}
var Bt = new Map(),
  Vt = {
    patchConditionals: function (e) {
      (mt = e(mt)), (kt = e(kt));
    },
    queueEffect: Q,
    init() {
      A("$C_s", (e) => {
        Bt.set(e.m5c, e);
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
      te(this.effects);
    },
    resolveRegistered: (e, { runtimeId: t, componentIdPrefix: n }) =>
      Array.isArray(e) && "string" == typeof e[0]
        ? (function (e, t) {
            let n = k[e];
            return t ? n(t) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.n[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = vt("", void 0, e, void 0, 1, n && (() => n));
      return (r.k = t), r;
    },
    render(e, t, n, r) {
      let i = t.scope;
      i || ((i = Bt.get(t.id)), i && ((t.scope = i), Bt.delete(t.id)));
      let l = n.e || jt,
        o = !1;
      if (
        ((t.effects = ee(() => {
          if (i) l(i, M), (o = !0);
          else {
            i = t.scope = st(n, e.global);
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
function jt() {}
var Rt = (e, t) => ((e.mount = qt), (e._ = e), A(t, e));
function qt(e = {}, t, n) {
  let r,
    i,
    { $global: l } = e;
  l
    ? (({ $global: l, ...e } = e),
      (l = { runtimeId: "M", renderId: "_", ...l }))
    : (l = { runtimeId: "M", renderId: "_" });
  let o = this.e,
    f = ee(() => {
      (r = d(l)), (i = ht(this, r)), o && o(r, [e]);
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
    te(f),
    {
      update: (e) => {
        o &&
          te(
            ee(() => {
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
  Je as attr,
  n as attrTag,
  r as attrTags,
  Qe as attrs,
  nt as attrsEvents,
  T as changeHandler,
  D as childClosures,
  Ze as classAttr,
  R as closure,
  Vt as compat,
  mt as conditional,
  kt as conditionalOnlyChild,
  xe as controllable_detailsOrDialog_open,
  $e as controllable_detailsOrDialog_open_effect,
  be as controllable_input_checked,
  ye as controllable_input_checkedValue,
  ke as controllable_input_checkedValue_effect,
  me as controllable_input_checked_effect,
  we as controllable_input_value,
  Ce as controllable_input_value_effect,
  Ae as controllable_select_value,
  Se as controllable_select_value_effect,
  we as controllable_textarea_value,
  Ce as controllable_textarea_value_effect,
  vt as createRenderer,
  pt as createRendererWithOwner,
  d as createScope,
  Rt as createTemplate,
  Ke as data,
  q as dynamicClosure,
  P as dynamicSubscribers,
  gt as dynamicTagAttrs,
  X as effect,
  l as forIn,
  o as forOf,
  f as forTo,
  ie as getAbortSignal,
  rt as html,
  G as inChild,
  yt as inConditionalScope,
  Et as inLoopScope,
  N as init,
  V as intersection,
  J as intersections,
  ot as lifecycle,
  $t as loopIn,
  xt as loopOf,
  Mt as loopTo,
  U as nextTagId,
  $ as nodeRef,
  he as on,
  et as partialAttrs,
  it as props,
  A as register,
  S as registerBoundSignal,
  x as registerSubscriber,
  re as resetAbortSignal,
  Y as run,
  W as setTagVar,
  _ as state,
  He as styleAttr,
  L as tagVarSignal,
  O as value,
};
