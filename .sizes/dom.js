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
    i = e.b.nextSibling;
  for (; r !== i; ) {
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
function y(e, t) {
  return t ? e : "";
}
var m = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function k(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !m.test(e) ? t + "px" : t}`
    : "";
}
function w(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          i = "";
        if (Array.isArray(e))
          for (let l of e) {
            let e = w(l, t, n);
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
function C(e) {
  if (e) return e.renderBody || e.default || e;
}
var A = 2147483647;
var S = new Map(),
  N = M();
function x(e, t, n) {
  let r = S.get(t);
  r || S.set(t, (r = new WeakMap())),
    r.has(e) || N(e, t, $),
    r.set(e, n || void 0);
}
function M() {
  let e = new WeakMap();
  return function (t, n, r) {
    let i = t.getRootNode(),
      l = e.get(i);
    l || e.set(i, (l = new Set())),
      l.has(n) || (l.add(n), i.addEventListener(n, r, !0));
  };
}
function $(e) {
  let t = e.target;
  if (t) {
    let n = S.get(e.type);
    if ((n.get(t)?.(e, t), e.bubbles))
      for (; (t = t.parentElement) && !e.cancelBubble; ) n.get(t)?.(e, t);
  }
}
var I,
  E = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (I = !1), ie();
      }),
      t
    );
  })();
function T() {
  ie(), requestAnimationFrame(O);
}
function O() {
  E.postMessage(0);
}
var B = {},
  V = {},
  _ = {};
function j(e, t) {
  let n = e + "#";
  return (e, r) => {
    r !== B && void 0 === e[n] && t(e, r);
  };
}
function P(e, t) {
  return (e, n) => {
    t(e, n);
  };
}
function q(e, t, n) {
  let r = e + "#",
    i = n && ((e, t) => (i = n())(e, t));
  return (n, l) => {
    if (l === B) 1 === (n[r] = (n[r] ?? 0) + 1) && i?.(n, B);
    else if (l !== _) {
      let o = void 0 !== n[r];
      1 === (n[r] ||= 1) &&
        (l === V || (o && n[e] === l)
          ? i?.(n, V)
          : ((n[e] = l), t?.(n, l), i?.(n, _))),
        n[r]--;
    }
  };
}
var D = 0;
function L(e, t, n) {
  let r = "?" + D++,
    i = r + "#",
    l = n && ((e, t) => (l = n())(e, t));
  return (n, o) => {
    o === B
      ? 1 === (n[i] = (n[i] ?? 0) + 1) && l?.(n, B)
      : void 0 === n[i]
        ? ((n[i] = e - 1), (n[r] = !0))
        : 0 == --n[i]
          ? o === _ || n[r]
            ? ((n[r] = !1), t(n, 0), l?.(n, _))
            : l?.(n, V)
          : (n[r] ||= o === _);
  };
}
var R = (e) => e._;
function W(e, t, n = R, r) {
  let i = "?" + D++,
    l = i + 1,
    o = "function" == typeof e ? e : () => e,
    f = r && ((e, t) => (f = r())(e, t));
  return (e, r) => {
    if (r === B) 1 === (e[l] = (e[l] ?? 0) + 1) && f?.(e, B);
    else {
      let u, a;
      if (void 0 === e[l]) {
        (u = n(e)), (a = o(e));
        let t = u[a + "#"],
          i = void 0 === t ? !u.u : 0 === t;
        (e[l] = i ? 1 : 2), (r = _);
      }
      0 == --e[l]
        ? r === _ || e[i]
          ? ((e[i] = !1), (u ||= n(e)), (a ||= o(e)), t?.(e, u[a]), f?.(e, _))
          : f?.(e, V)
        : (e[i] ||= r === _);
    }
  };
}
function F(e, t, n = R, r) {
  let i = "function" == typeof e ? e : () => e,
    l = W(i, t, n, r),
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
function z(e, t) {
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
function ie() {
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
function le(e, t) {
  let n = Y,
    r = ee;
  (Y = []), (ee = []);
  try {
    e(t), ue(), (Y = n), fe();
  } finally {
    (Y = n), (ee = r);
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
          for (de = !0; o < r; ) {
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
                  f && ((t.d = r[f]), h(t));
                }
            } else
              o === r || "string" != typeof l[o]
                ? delete this.z[this.o]
                : ce[l[o++]](n[e]);
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
function ye(e, t, n, r) {
  Te(e, t, 0, We(n), r);
}
function me(e, t) {
  let n = e[t];
  Ve(n, "input", qe, () => {
    let r = e[t + ";"];
    r &&
      ((e[t + "="] = 6),
      le(r, n.checked),
      6 === e[t + "="] && (n.checked = !n.checked));
  });
}
function ke(e, t, n, r, i) {
  (e[t + ":"] = n),
    Ze(e[t], "value", i),
    Te(e, t, 1, Array.isArray(n) ? n.includes(i) : n === i, r);
}
function we(e, t) {
  let n = e[t];
  Ve(n, "input", qe, () => {
    let r = e[t + ";"];
    if (r) {
      let i = e[t + ":"];
      (e[t + "="] = 6),
        le(
          r,
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
        6 === e[t + "="] && (n.checked = !n.checked);
    }
  });
}
function Ce(e, t, n, r) {
  let i = e[t],
    l = Re(n);
  (e[t + ";"] = r),
    r
      ? ((e[t + "="] = 0),
        (e[t + ":"] = n),
        i.isConnected ? Ee(i, l) : (i.defaultValue = l))
      : ((e[t + "="] = 5), (i.defaultValue = l));
}
function Ae(e, t) {
  let n = e[t];
  de && (e[t + ":"] = n.defaultValue),
    Ve(n, "input", Pe, (r) => {
      let i = e[t + ";"];
      i &&
        ((e[t + "="] = 6),
        r && (Ie = r.inputType),
        le(i, n.value),
        6 === e[t + "="] && Ee(n, e[t + ":"]),
        (Ie = ""));
    });
}
function Se(e, t, n, r) {
  (e[t + ";"] = r),
    r ? ((e[t + "="] = 3), (e[t + ":"] = n)) : (e[t + "="] = 5),
    xe(e[t], n, r);
}
function Ne(e, t) {
  let n = e[t];
  Ve(n, "input", De, () => {
    let r = e[t + ";"];
    r &&
      ((e[t + "="] = 6),
      le(
        r,
        Array.isArray(e[t + ":"]) ? Array.from(n.selectedOptions, Fe) : n.value,
      ),
      6 === e[t + "="] && xe(n, e[t + ":"], r));
  });
}
function xe(e, t, n) {
  if (Array.isArray(t))
    for (let r of e.options) {
      let e = t.includes(r.value);
      n ? (r.selected = e) : (r.defaultSelected = e);
    }
  else {
    let r = Re(t);
    if (n) e.value = r;
    else for (let t of e.options) t.defaultSelected = t.value === r;
  }
}
function Me(e, t, n, r) {
  (e[t + ";"] = r), (e[t + "="] = r ? 4 : 5), (e[t].open = We(n));
}
function $e(e, t) {
  let n = e[t];
  Ve(
    n,
    "DIALOG" === n.tagName ? "close" : "toggle",
    () => e[t + ";"] && n.open !== e[t + ":"],
    () => {
      let r = e[t + ";"];
      r &&
        ((e[t + "="] = 6),
        le(r, n.open),
        6 === e[t + "="] && (n.open = !n.open));
    },
  );
}
var Ie = "";
function Ee(e, t) {
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
            let t = ae(r).length,
              n = 0,
              i = 0;
            for (; i < t; ) ae(e[n]) && i++, n++;
            return n;
          }
        }
        return -1;
      })(e.value, n, r, Ie);
      ~i && e.setSelectionRange(i, i);
    } else e.value = t;
}
function Te(e, t, n, r, i) {
  (e[t + ";"] = i),
    i
      ? ((e[t + "="] = n), (e[t].checked = r))
      : ((e[t + "="] = 5), (e[t].defaultChecked = r));
}
var Oe = M(),
  Be = new WeakMap();
function Ve(e, t, n, r) {
  Be.set(e, r),
    Oe(e, t, _e),
    e.form && Oe(e.form, "reset", je),
    de && n(e) && queueMicrotask(r);
}
function _e(e) {
  Be.get(e.target)?.(e);
}
function je(e) {
  let t = [];
  for (let n of e.target.elements) {
    let e = Be.get(n);
    e && Le(n) && t.push(e);
  }
  requestAnimationFrame(() => {
    if (!e.defaultPrevented) for (let e of t) e();
  });
}
function Pe(e) {
  return e.value !== e.defaultValue;
}
function qe(e) {
  return e.checked !== e.defaultChecked;
}
function De(e) {
  for (let t of e.options) if (t.selected !== t.defaultSelected) return !0;
}
function Le(e) {
  switch (e.tagName) {
    case "INPUT":
      return Pe(e) || qe(e);
    case "SELECT":
      return De(e);
  }
}
function Re(e) {
  return ot(e) || "";
}
function We(e) {
  return null != e && !1 !== e;
}
function Fe(e) {
  return e.value;
}
var ze = document.createTextNode(""),
  Ue = new Range();
function Ge(e) {
  return Ue.createContextualFragment(e);
}
var Je = /^on[A-Z-]/;
function Ze(e, t, n) {
  He(e, t, ot(n));
}
function He(e, t, n) {
  e.getAttribute(t) != n &&
    (void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n));
}
function Ke(e, t) {
  He(
    e,
    "class",
    (function (e) {
      return w(e, " ", y);
    })(t) || void 0,
  );
}
function Qe(e, t) {
  He(
    e,
    "style",
    (function (e) {
      return w(e, ";", k);
    })(t) || void 0,
  );
}
function Xe(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
function Ye(e, t, n) {
  let r = e[t];
  for (let { name: e } of r.attributes)
    (n && (e in n || et(r, e, n))) || r.removeAttribute(e);
  nt(e, t, n);
}
function et(e, t, n) {
  return "checked" === t && "INPUT" === e.tagName && "checkedValue" in n;
}
function tt(e, t, n, r) {
  let i = e[t],
    l = {};
  for (let { name: e } of i.attributes)
    !r[e] && (!n || !(e in n)) && i.removeAttribute(e);
  for (let e in n) r[e] || (l[e] = n[e]);
  nt(e, t, l);
}
function nt(e, t, n) {
  let r,
    i,
    l = e[t];
  switch (l.tagName) {
    case "INPUT":
      if (n.checkedChange) ye(e, t, n.checked, n.checkedChange);
      else if (n.checkedValue || n.checkedValueChange)
        ke(e, t, n.checkedValue, n.checkedValueChange, n.value);
      else {
        if (!n.valueChange) break;
        Ce(e, t, n.value, n.valueChange);
      }
      i = /^(?:value|checked(?:Value)?)(?:Change)?$/;
      break;
    case "SELECT":
      (n.value || n.valueChange) &&
        (Se(e, t, n.value, n.valueChange), (i = /^value(?:Change)?$/));
      break;
    case "DETAILS":
    case "DIALOG":
      n.openChange &&
        (Me(e, t, n.open, n.openChange), (i = /^open(?:Change)?$/));
  }
  for (let o in n) {
    let f = n[o];
    switch (o) {
      case "class":
        Ke(l, f);
        break;
      case "style":
        Qe(l, f);
        break;
      case "renderBody":
        break;
      default:
        Je.test(o)
          ? ((r ||= e[t + "~"] = {})[
              "-" === o[2] ? o.slice(3) : o.slice(2).toLowerCase()
            ] = f)
          : i?.test(o) || Ze(l, o, f);
    }
  }
}
function rt(e, t) {
  let n = e[t],
    r = e[t + "~"];
  switch (e[t + "="]) {
    case 0:
      me(e, t);
      break;
    case 1:
      we(e, t);
      break;
    case 2:
      Ae(e, t);
      break;
    case 3:
      Ne(e, t);
      break;
    case 4:
      $e(e, t);
  }
  for (let e in r) x(n, e, r[e]);
}
function it(e, t, n) {
  let r = e[n],
    i = e[n + "-"] || r,
    l = r.parentNode,
    o = i.nextSibling,
    f = Ge(t || 0 === t ? t + "" : "<!>");
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), l.insertBefore(f, r);
  let u = r;
  for (; u !== o; ) {
    let e = u.nextSibling;
    u.remove(), (u = e);
  }
}
function lt(e, t, n) {
  let r = e[n],
    i = e[n + "-"],
    l = e[t];
  if (i) for (let e in i) e in r || (l[e] = void 0);
  for (let e in r) l[e] = r[e];
  e[n + "-"] = r;
}
function ot(e) {
  if (e || 0 === e) return !0 === e ? "" : e + "";
}
function ft(e, t, n) {
  let r = e[t];
  r
    ? (Object.assign(r, n), r.onUpdate?.())
    : ((e[t] = n),
      n.onMount?.(),
      (b(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var ut = document.createTreeWalker(document);
function at(e) {
  let t = e.length;
  for (; e.charCodeAt(--t) > 47; );
  return e.slice(0, t + 1);
}
function ct(e, t, n) {
  (ut.currentNode = e),
    st(t, n, n, 0),
    (ut.currentNode = document.documentElement);
}
function st(e, t, n, r) {
  let i,
    l = 0,
    o = 0,
    f = 0;
  for (n !== t && (t.d = n); (i = e.charCodeAt(r++)); )
    if (((o = l), (l = 0), i >= 117)) l = 10 * o + i - 117;
    else if (i >= 107) {
      for (i = 10 * o + i - 107; i--; ) ut.parentNode();
      ut.nextSibling();
    } else if (i >= 97) for (i = 10 * o + i - 97; i--; ) ut.nextSibling();
    else if (i >= 67) for (i = 20 * o + i - 67; i--; ) ut.nextNode();
    else if (47 === i) r = st(e, (t[f++] = u(t.$global)), n, r);
    else {
      if (38 === i) return r;
      if (32 === i) t[f++] = ut.currentNode;
      else {
        let e = (t[f++] = document.createTextNode("")),
          n = ut.currentNode;
        n.parentNode.replaceChild(e, n), (ut.currentNode = e);
      }
    }
  return r;
}
function dt(e, t, n) {
  let r = u(t);
  if (((r._ = r.d = e.B || n), (r.x = e), gt(e, r), e.c))
    for (let t of e.c) t.g?.(r);
  return r;
}
function ht(e, t, n) {
  if ("string" != typeof e) return dt(e, t, n);
  let r = u(t);
  return (r._ = r.d = n), (r[0] = r.a = r.b = document.createElement(e)), r;
}
function gt(e, t) {
  let n = e.k();
  return (
    ct(11 === n.nodeType ? n.firstChild : n, e.C, t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.s && e.s(t),
    n
  );
}
function pt(e, t, n) {
  return (r, i) => {
    let l = r[e + "("];
    if (!l || i === _) return;
    let o = r[e + "!"];
    if (i === B || i === V) return l.e?.(o, i);
    let f = t?.(r);
    if ("string" == typeof l) Ct(o, 0, f), Ye(o, 0, i());
    else if (l.e) {
      let e = i();
      l.e(o, n ? e : [f ? { ...e, renderBody: f } : e]);
    }
  };
}
function vt(e, t, n, r, i = 0, l) {
  let o,
    f,
    u = {},
    a = t ? at(t) : " ";
  return (t) => ({
    t: u,
    D: e,
    C: a,
    s: n,
    k: yt,
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
function bt(e, t, n, r, i, l) {
  return vt(e, t, n, r, i, l)();
}
function yt() {
  return (this.F ||= (function (e) {
    let t = Ge(e);
    return t.firstChild === t.lastChild ? t.firstChild || ze : t;
  })(this.D)).cloneNode(!0);
}
var mt = function (e, t, n) {
  let r = e + "(",
    i = e + "!",
    l = n && ((e, t) => (l = n())(e, t));
  return (n, o) => {
    if (o === _) return;
    let f = n[r],
      u = o;
    if (o !== B && o !== V) {
      let i = C(o);
      Vt(i, f)
        ? ((f = n[r] = i),
          (function (e, t, n) {
            let r,
              i = e[t + "!"];
            n
              ? ((r = e[t + "!"] = ht(n, e.$global, e)), (i = i || c(e[t])))
              : ((r = c(e[t])), (e[t + "!"] = void 0)),
              p(r, i.a.parentNode, i.a),
              g(i);
          })(n, e, i),
          t?.(n),
          (u = _))
        : (u = V);
    }
    l?.(n, u), Z(f, n[i], u);
  };
};
function kt(e, t) {
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
var wt = function (e, t, n) {
  let r = e + "(",
    i = e + "!",
    l = n && ((e, t) => (l = n())(e, t));
  return (n, o) => {
    if (o === _) return;
    let f = n[r],
      u = o;
    if (o !== B && o !== V) {
      let i = C(o);
      Vt(i, f) ? ((f = n[r] = i), Ct(n, e, i), t?.(n), (u = _)) : (u = V);
    }
    l?.(n, u), Z(f, n[i], u);
  };
};
function Ct(e, t, n) {
  let r = e[t + "!"],
    i = e[t];
  if (((i.textContent = ""), n)) {
    p((e[t + "!"] = ht(n, e.$global, e)), i, null);
  }
  r && s(r);
}
var At = new Map([[Symbol(), c(void 0)]]),
  St = [c(void 0)],
  Nt = new Map(),
  xt = [];
function Mt(e, t) {
  return Et(e, t, ([e, t = Ot], n) => {
    o(
      e,
      "string" == typeof t
        ? (e, r) => n(e[t], [e, r])
        : (e, r) => n(t(e, r), [e, r]),
    );
  });
}
function $t(e, t) {
  return Et(e, t, ([e, t = Bt], n) => l(e, (e, r) => n(t(e, r), [e, r])));
}
function It(e, t) {
  return Et(e, t, ([e, t, n, r = Bt], i) => f(e, t, n, (e) => i(r(e), [e])));
}
function Et(e, t, n) {
  let r = e + "!",
    i = t.c,
    l = t.e;
  return (o, f) => {
    if (f === _) return;
    if (f === B || f === V) {
      let t = o[r] ?? o[e + "("]?.values() ?? [];
      if (t !== St)
        for (let e of t) {
          l?.(e, f);
          for (let t of i) t(e, f);
        }
      return;
    }
    let u,
      a,
      d,
      h,
      v = o[e],
      b = 8 === v.nodeType || 3 === v.nodeType,
      y = o[e + "("] || (b ? At : Nt),
      m = o[e + "!"] || Array.from(y.values()),
      k = !0;
    if (
      (n(f, (e, n) => {
        let r = y.get(e),
          f = V;
        if ((r || ((r = dt(t, o.$global, o)), (f = _)), l && l(r, n), i))
          for (let e of i) e(r, f);
        u ? (u.set(e, r), a.push(r)) : ((u = new Map([[e, r]])), (a = [r]));
      }),
      !u)
    )
      if (b) (u = At), (a = St), c(v);
      else {
        if (t.E) for (let e = 0; e < m.length; e++) s(m[e]);
        (v.textContent = ""), (u = Nt), (a = xt), (k = !1);
      }
    if (k) {
      if (b) {
        y === At && c(v);
        let e = m[m.length - 1];
        (d = e.b.nextSibling), (h = e.a.parentNode);
      } else (d = null), (h = v);
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
          v = t[c],
          b = n[s],
          y = t[d],
          m = n[h];
        e: {
          for (; v === b; ) {
            if ((++c, ++s, c > d || s > h)) break e;
            (v = t[c]), (b = n[s]);
          }
          for (; y === m; ) {
            if ((--d, --h, c > d || s > h)) break e;
            (y = t[d]), (m = n[h]);
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
            y = t,
            m = new Array(b);
          for (i = 0; i < b; ++i) m[i] = -1;
          let k = 0,
            w = 0,
            C = new Map();
          for (l = s; l <= h; ++l) C.set(n[l], l);
          for (i = c; i <= d && w < b; ++i)
            (u = t[i]),
              (l = C.get(u)),
              void 0 !== l &&
                ((k = k > l ? A : l),
                ++w,
                (a = n[l]),
                (m[l - s] = i),
                (y[i] = null));
          if (v === t.length && 0 === w) {
            for (; s < b; ++s) p(n[s], e, r);
            for (; c < v; ++c) g(t[c]);
          } else {
            for (i = v - w; i > 0; ) (u = y[c++]), null !== u && (g(u), i--);
            if (k === A) {
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
              })(m);
              for (l = t.length - 1, o = n.length, i = b - 1; i >= 0; --i)
                -1 === m[i] || l < 0 || i !== t[l]
                  ? ((k = i + s),
                    (a = n[k++]),
                    (f = k < o ? n[k].a : r),
                    p(a, e, f))
                  : --l;
            } else if (w !== b)
              for (o = n.length, i = b - 1; i >= 0; --i)
                -1 === m[i] &&
                  ((k = i + s),
                  (a = n[k++]),
                  (f = k < o ? n[k].a : r),
                  p(a, e, f));
          }
        }
      })(h, m, a, d);
    }
    (o[e + "("] = u), (o[e + "!"] = a);
  };
}
function Tt(e, t) {
  let n = t + "!";
  return (r, i) => {
    let l = r[n] ?? r[t + "("]?.values() ?? [];
    if (l !== St) for (let t of l) e(t, i);
  };
}
function Ot(e, t) {
  return t;
}
function Bt(e) {
  return e;
}
function Vt(e, t) {
  return e !== t && (e?.t || 0) !== t?.t;
}
var _t = new Map(),
  jt = {
    patchConditionals: function (e) {
      (mt = e(mt)), (wt = e(wt));
    },
    queueEffect: re,
    init() {
      he("$C_s", (e) => {
        _t.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      he("$C_r", e);
    },
    isOp: (e) => e === B || e === V || e === _,
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
      let r = bt("", void 0, e, void 0, 1, n && (() => n));
      return (r.k = t), r;
    },
    render(e, t, n, r) {
      let i = t.scope;
      i || ((i = _t.get(t.id)), i && ((t.scope = i), _t.delete(t.id)));
      let l = n.e || Pt,
        o = !1;
      if (
        ((t.effects = oe(() => {
          if (i) l(i, B), (o = !0);
          else {
            i = t.scope = dt(n, e.global);
            let r = n.c;
            if (r) for (let e of r) e(t.scope, V);
          }
          l(i, r);
        })),
        !o)
      )
        return i.a === i.b ? i.a : i.a.parentNode;
    },
  };
function Pt() {}
var qt = (e, t) => ((e.mount = Dt), (e._ = e), he(t, e));
function Dt(e = {}, t, n) {
  let r,
    i,
    { $global: l } = e;
  l
    ? (({ $global: l, ...e } = e),
      (l = { runtimeId: "M", renderId: "_", ...l }))
    : (l = { runtimeId: "M", renderId: "_" });
  let o = this.e,
    f = oe(() => {
      (r = u(l)), (i = gt(this, r)), o && o(r, [e]);
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
    fe(f),
    {
      update: (e) => {
        o &&
          le(() => {
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
  Ze as attr,
  n as attrTag,
  r as attrTags,
  Ye as attrs,
  rt as attrsEvents,
  P as changeHandler,
  z as childClosures,
  Ke as classAttr,
  W as closure,
  jt as compat,
  mt as conditional,
  wt as conditionalOnlyChild,
  Me as controllable_detailsOrDialog_open,
  $e as controllable_detailsOrDialog_open_effect,
  ye as controllable_input_checked,
  ke as controllable_input_checkedValue,
  we as controllable_input_checkedValue_effect,
  me as controllable_input_checked_effect,
  Ce as controllable_input_value,
  Ae as controllable_input_value_effect,
  Se as controllable_select_value,
  Ne as controllable_select_value_effect,
  bt as createRenderer,
  vt as createRendererWithOwner,
  u as createScope,
  qt as createTemplate,
  Xe as data,
  F as dynamicClosure,
  U as dynamicSubscribers,
  pt as dynamicTagAttrs,
  l as forIn,
  o as forOf,
  f as forTo,
  b as getAbortSignal,
  it as html,
  Q as inChild,
  kt as inConditionalScope,
  Tt as inLoopScope,
  pe as init,
  j as initValue,
  L as intersection,
  X as intersections,
  ft as lifecycle,
  $t as loopIn,
  Mt as loopOf,
  It as loopTo,
  K as nextTagId,
  be as nodeRef,
  x as on,
  tt as partialAttrs,
  oe as prepare,
  lt as props,
  te as queueControllableSource,
  re as queueEffect,
  ne as queueSource,
  he as register,
  ge as registerBoundSignal,
  ve as registerSubscriber,
  v as resetAbortSignal,
  ie as run,
  fe as runEffects,
  G as setTagVar,
  Qe as styleAttr,
  J as tagVarSignal,
  q as value,
};
