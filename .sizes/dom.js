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
  a,
  c = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (u = !1), ne();
      }),
      t
    );
  })();
function s() {
  ne(), requestAnimationFrame(d);
}
function d() {
  c.postMessage(0);
}
function h(e) {
  return { u: 1, $global: e };
}
var g = h({});
function p(e) {
  return (g.a = g.b = e), g;
}
function v(e) {
  b(e), e.d?.h?.delete(e);
  let t = e.x?.c;
  if (t) for (let n of t) n.j?.(e);
  return e;
}
function b(e) {
  e.h?.forEach(b);
  let t = e.l;
  if (t) for (let e of t.values()) e.abort();
}
function m(e) {
  let t = e.d;
  for (; t && !t.h?.has(e); ) (t.h ||= new Set()).add(e), (t = (e = t).d);
}
function k(e) {
  v(e);
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
function w(e, t, n, r) {
  let i = a;
  a = e;
  let l = t(n, r);
  return (a = i), l;
}
function C(e, t, n, r) {
  let i = a;
  for (a of e) t(n, r);
  a = i;
}
var A = {},
  S = class {
    m = [];
    n = {};
    y = { _: A };
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
          for (N = !0; o < r; ) {
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
                  f && ((t.d = r[f]), m(t));
                }
            } else if (o === r || "string" != typeof l[o])
              delete this.z[this.o];
            else {
              let t = n[e];
              w(t, A[l[o++]], t, t);
            }
          }
        } finally {
          N = !1;
        }
      }
    }
  },
  N = !1;
function x(e, t) {
  return (A[e] = t), t;
}
function $(e, t) {
  return (
    (A[e] =
      (e = a) =>
      (n) =>
        w(e, t, n)),
    t
  );
}
function M(e = "M") {
  let t,
    n = (r) => (n[r] = t[r] = new S(t, e, r));
  function r(r) {
    t = r;
    for (let e in r) n(e);
    Object.defineProperty(window, e, { configurable: !0, value: n });
  }
  window[e]
    ? r(window[e])
    : Object.defineProperty(window, e, { configurable: !0, set: r });
}
function E(e, t) {
  return x(e, t.g), t;
}
function I(e, t) {
  return x(e, (e) => () => e[t]);
}
var T = {},
  _ = {},
  O = {};
function B(e, t, n) {
  let r = j(e, t, n),
    i = e + "#";
  return (e, t, n) => {
    return (
      n
        ? t
          ? t(e)
          : ((l = n),
            (o = r),
            (f = e),
            u || ((u = !0), queueMicrotask(s)),
            w(l, o, T),
            Y.push(l, o, f))
        : r(e === T || e === _ || e === O || t || void 0 === a[i] ? e : _),
      e
    );
    var l, o, f;
  };
}
function V(e, t, n) {
  let r = j(e, t, n);
  return (e, t) => {
    t ? w(a[t], r, e) : r(e);
  };
}
function j(e, t, n) {
  let r = e + "#",
    i = n && ((e) => (i = n())(e));
  return (n) => {
    if (n === T) 1 === (a[r] = (a[r] ?? 0) + 1) && i?.(T);
    else if (n !== O) {
      let l = void 0 !== a[r];
      1 === (a[r] ||= 1) &&
        (n === _ || (l && a[e] === n)
          ? i?.(_)
          : ((a[e] = n), t && t(n), i?.(O))),
        a[r]--;
    }
  };
}
var R = 0;
function q(e, t, n) {
  let r = "?" + R++,
    i = r + "#",
    l = n && ((e) => (l = n())(e));
  return (n) => {
    n === T
      ? 1 === (a[i] = (a[i] ?? 0) + 1) && l?.(T)
      : void 0 === a[i]
        ? ((a[i] = e - 1), (a[r] = !0))
        : 0 == --a[i]
          ? n === O || a[r]
            ? ((a[r] = !1), t(a), l?.(O))
            : l?.(_)
          : (a[r] ||= n === O);
  };
}
var D = (e) => e._;
function P(e, t, n = D, r) {
  let i = "?" + R++,
    l = i + 1,
    o = "function" == typeof e ? e : () => e,
    f = r && ((e) => (f = r())(e));
  return (e) => {
    if (e === T) 1 === (a[l] = (a[l] ?? 0) + 1) && f?.(T);
    else {
      let r, u;
      if (void 0 === a[l]) {
        (r = n(a)), (u = o(a));
        let t = r[u + "#"],
          i = void 0 === t ? !r.u : 0 === t;
        (a[l] = i ? 1 : 2), (e = O);
      }
      0 == --a[l]
        ? e === O || a[i]
          ? ((a[i] = !1), (r ||= n(a)), (u ||= o(a)), t && t(r[u]), f?.(O))
          : f?.(_)
        : (a[i] ||= e === O);
    }
  };
}
function W(e, t, n = D, r) {
  let i = "function" == typeof e ? e : () => e,
    l = P(i, t, n, r),
    o = new WeakMap();
  return (
    (l.g = (e) => {
      let t = (t) => w(e, l, t),
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
function L(e, t) {
  let n = (n) => {
    w(a[t], () => {
      for (let t of e) t(n);
    });
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
function z(e) {
  let t = e + "*";
  return (e) => {
    let n = a[t];
    if (n) for (let t of n) t(e);
  };
}
function F(e, t) {
  let n = a;
  a[e]["/"] = (e) => w(n, t, e);
}
var U = (e) => a["/"]?.(e),
  G = (e, t, n) => {
    let r = e?.c;
    r &&
      w(t, () => {
        for (let e of r) e(n);
      });
  },
  J = new WeakMap();
function X({ $global: e }) {
  let t = J.get(e) || 0;
  return J.set(e, t + 1), "c" + e.runtimeId + e.renderId + t.toString(36);
}
function Z(e, t) {
  return (n) => {
    w(a[e], t, n);
  };
}
function H(e) {
  return (t) => {
    for (let n of e) n(t);
  };
}
function K(e, t) {
  return x(e, t), () => te(t);
}
function Q(e) {
  return (t, n = t ? a[t] : a) => {
    w(n, e, n);
  };
}
var Y = [],
  ee = [];
function te(e) {
  ee.push(a, e);
}
function ne() {
  let e = Y,
    t = ee;
  (Y = []), le(e), (ee = []), ie(t);
}
function re(e) {
  let t = Y,
    n = ee,
    r = (ee = []),
    i = (Y = []);
  try {
    e(), (Y = t), le(i);
  } finally {
    (Y = t), (ee = n);
  }
  return r;
}
function ie(e = ee) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    w(n, e[t + 1], n, n);
  }
}
function le(e) {
  for (let t = 0; t < e.length; t += 3) {
    w(e[t + 0], e[t + 1], e[t + 2]);
  }
}
function oe(e) {
  let t = a.l;
  if (t) {
    let n = t.get(e);
    n && (te(() => n.abort()), t.delete(e));
  }
}
function fe(e) {
  let t = (a.l ||= new Map()),
    n = t.get(e);
  return n || (m(a), t.set(e, (n = new AbortController()))), n.signal;
}
function ue(e, t) {
  return t ? e : "";
}
var ae = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function ce(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !ae.test(e) ? t + "px" : t}`
    : "";
}
function se(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          i = "";
        if (Array.isArray(e))
          for (let l of e) {
            let e = se(l, t, n);
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
function de(e) {
  if (e) return e.renderBody || e.default || e;
}
var he = 2147483647;
var ge = new Map(),
  pe = be();
function ve(e, t, n) {
  let r = ge.get(t);
  r || ge.set(t, (r = new WeakMap())),
    r.has(e) || pe(e, t, me),
    r.set(e, n || void 0);
}
function be() {
  let e = new WeakMap();
  return function (t, n, r) {
    let i = t.getRootNode(),
      l = e.get(i);
    l || e.set(i, (l = new Set())),
      l.has(n) || (l.add(n), i.addEventListener(n, r, !0));
  };
}
function me(e) {
  let t = e.target;
  if (t) {
    let n = ge.get(e.type);
    if ((n.get(t)?.(e, t), e.bubbles))
      for (; (t = t.parentElement) && !e.cancelBubble; ) n.get(t)?.(e, t);
  }
}
function ke(e) {
  return e.replace(/[^\p{L}\p{N}]/gu, "");
}
function ye(e, t, n) {
  Oe(e, 0, Fe(t), n);
}
function we(e) {
  let t = a[e];
  je(t, "input", Pe, () => {
    let n = a[e + ";"];
    n &&
      ((a[e + "="] = 6),
      n(t.checked),
      ne(),
      6 === a[e + "="] && (t.checked = !t.checked));
  });
}
function Ce(e, t, n, r) {
  (a[e + ":"] = t),
    He(a[e], "value", r),
    Oe(e, 1, Array.isArray(t) ? t.includes(r) : t === r, n);
}
function Ae(e) {
  let t = a[e];
  je(t, "input", Pe, () => {
    let n = a[e + ";"];
    if (n) {
      let r = a[e + ":"];
      (a[e + "="] = 6),
        n(
          Array.isArray(r)
            ? (function (e, t, n) {
                let r = e.indexOf(t);
                return (
                  (n
                    ? !~r && [...e, t]
                    : ~r && e.slice(0, r).concat(e.slice(r + 1))) || e
                );
              })(r, t.value, t.checked)
            : t.checked
              ? t.value
              : void 0,
        ),
        ne(),
        6 === a[e + "="] && (t.checked = !t.checked);
    }
  });
}
function Se(e, t, n) {
  let r = a[e],
    i = ze(t);
  (a[e + ";"] = n),
    n
      ? ((a[e + "="] = 0),
        (a[e + ":"] = t),
        r.isConnected ? _e(r, i) : (r.defaultValue = i))
      : ((a[e + "="] = 5), (r.defaultValue = i));
}
function Ne(e) {
  let t = a[e];
  N && (a[e + ":"] = t.defaultValue),
    je(t, "input", De, (n) => {
      let r = a[e + ";"];
      r &&
        ((a[e + "="] = 6),
        n && (Te = n.inputType),
        r(t.value),
        ne(),
        6 === a[e + "="] && _e(t, a[e + ":"]),
        (Te = ""));
    });
}
function xe(e, t, n) {
  (a[e + ";"] = n),
    n ? ((a[e + "="] = 3), (a[e + ":"] = t)) : (a[e + "="] = 5),
    Me(a[e], t, n);
}
function $e(e) {
  let t = a[e];
  je(t, "input", We, () => {
    let n = a[e + ";"];
    n &&
      ((a[e + "="] = 6),
      n(
        Array.isArray(a[e + ":"]) ? Array.from(t.selectedOptions, Ue) : t.value,
      ),
      ne(),
      6 === a[e + "="] && Me(t, a[e + ":"], n));
  });
}
function Me(e, t, n) {
  if (Array.isArray(t))
    for (let r of e.options) {
      let e = t.includes(r.value);
      n ? (r.selected = e) : (r.defaultSelected = e);
    }
  else {
    let r = ze(t);
    if (n) e.value = r;
    else for (let t of e.options) t.defaultSelected = t.value === r;
  }
}
function Ee(e, t, n) {
  (a[e + ";"] = n), (a[e + "="] = n ? 4 : 5), (a[e].open = Fe(t));
}
function Ie(e) {
  let t = a[e];
  je(
    t,
    "DIALOG" === t.tagName ? "close" : "toggle",
    () => a[e + ";"] && t.open !== a[e + ":"],
    () => {
      let n = a[e + ";"];
      n &&
        ((a[e + "="] = 6),
        n(t.open),
        ne(),
        6 === a[e + "="] && (t.open = !t.open));
    },
  );
}
var Te = "";
function _e(e, t) {
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
            let t = ke(r).length,
              n = 0,
              i = 0;
            for (; i < t; ) ke(e[n]) && i++, n++;
            return n;
          }
        }
        return -1;
      })(e.value, n, r, Te);
      ~i && e.setSelectionRange(i, i);
    } else e.value = t;
}
function Oe(e, t, n, r) {
  (a[e + ";"] = r),
    r
      ? ((a[e + "="] = t), (a[e].checked = n))
      : ((a[e + "="] = 5), (a[e].defaultChecked = n));
}
var Be = be(),
  Ve = new WeakMap();
function je(e, t, n, r) {
  Ve.set(e, r),
    Be(e, t, Re),
    e.form && Be(e.form, "reset", qe),
    N && n(e) && queueMicrotask(r);
}
function Re(e) {
  Ve.get(e.target)?.(e);
}
function qe(e) {
  let t = [];
  for (let n of e.target.elements) {
    let e = Ve.get(n);
    e && Le(n) && t.push(e);
  }
  requestAnimationFrame(() => {
    if (!e.defaultPrevented) for (let e of t) e();
  });
}
function De(e) {
  return e.value !== e.defaultValue;
}
function Pe(e) {
  return e.checked !== e.defaultChecked;
}
function We(e) {
  for (let t of e.options) if (t.selected !== t.defaultSelected) return !0;
}
function Le(e) {
  return e.options ? We(e) : De(e) || Pe(e);
}
function ze(e) {
  return ut(e) || "";
}
function Fe(e) {
  return null != e && !1 !== e;
}
function Ue(e) {
  return e.value;
}
var Ge = document.createTextNode(""),
  Je = new Range();
function Xe(e) {
  return Je.createContextualFragment(e);
}
var Ze = /^on[A-Z-]/;
function He(e, t, n) {
  Ke(e, t, ut(n));
}
function Ke(e, t, n) {
  e.getAttribute(t) != n &&
    (void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n));
}
function Qe(e, t) {
  Ke(
    e,
    "class",
    (function (e) {
      return se(e, " ", ue);
    })(t) || void 0,
  );
}
function Ye(e, t) {
  Ke(
    e,
    "style",
    (function (e) {
      return se(e, ";", ce);
    })(t) || void 0,
  );
}
function et(e, t) {
  let n = a[e],
    r = (function (e) {
      return e || 0 === e ? e + "" : "‍";
    })(t);
  n.data !== r && (n.data = r);
}
function tt(e, t) {
  let n = a[e];
  for (let { name: e } of n.attributes)
    (t && (e in t || nt(n, e, t))) || n.removeAttribute(e);
  it(e, t);
}
function nt(e, t, n) {
  return "checked" === t && "INPUT" === e.tagName && "checkedValue" in n;
}
function rt(e, t, n) {
  let r = a[e],
    i = {};
  for (let { name: e } of r.attributes)
    !n[e] && (!t || !(e in t)) && r.removeAttribute(e);
  for (let e in t) n[e] || (i[e] = t[e]);
  it(e, i);
}
function it(e, t) {
  let n,
    r,
    i = a[e];
  switch (i.tagName) {
    case "INPUT":
      if ("checked" in t || "checkedChange" in t)
        ye(e, t.checked, t.checkedChange);
      else if ("checkedValue" in t || "checkedValueChange" in t)
        Ce(e, t.checkedValue, t.checkedValueChange, t.value);
      else {
        if (!("value" in t) && !("valueChange" in t)) break;
        Se(e, t.value, t.valueChange);
      }
      r = /^(?:value|checked(?:Value)?)(?:Change)?$/;
      break;
    case "SELECT":
      ("value" in t || "valueChange" in t) &&
        (xe(e, t.value, t.valueChange), (r = /^value(?:Change)?$/));
      break;
    case "TEXTAREA":
      ("value" in t || "valueChange" in t) &&
        (Se(e, t.value, t.valueChange), (r = /^value(?:Change)?$/));
      break;
    case "DETAILS":
    case "DIALOG":
      ("open" in t || "openChange" in t) &&
        (Ee(e, t.open, t.openChange), (r = /^open(?:Change)?$/));
  }
  for (let l in t) {
    let o = t[l];
    switch (l) {
      case "class":
        Qe(i, o);
        break;
      case "style":
        Ye(i, o);
        break;
      case "renderBody":
        break;
      default:
        Ze.test(l)
          ? ((n ||= a[e + "~"] = {})[
              "-" === l[2] ? l.slice(3) : l.slice(2).toLowerCase()
            ] = o)
          : r?.test(l) || He(i, l, o);
    }
  }
}
function lt(e) {
  let t = a[e],
    n = a[e + "~"];
  switch (a[e + "="]) {
    case 0:
      we(e);
      break;
    case 1:
      Ae(e);
      break;
    case 2:
      Ne(e);
      break;
    case 3:
      $e(e);
      break;
    case 4:
      Ie(e);
  }
  for (let e in n) ve(t, e, n[e]);
}
function ot(e, t) {
  let n = a[t],
    r = a[t + "-"] || n,
    i = n.parentNode,
    l = r.nextSibling,
    o = Xe(e || 0 === e ? e + "" : "<!>");
  (a[t] = o.firstChild), (a[t + "-"] = o.lastChild), i.insertBefore(o, n);
  let f = n;
  for (; f !== l; ) {
    let e = f.nextSibling;
    f.remove(), (f = e);
  }
}
function ft(e, t) {
  let n = a[t],
    r = a[t + "-"],
    i = a[e];
  if (r) for (let e in r) e in n || (i[e] = void 0);
  for (let e in n) i[e] = n[e];
  a[t + "-"] = n;
}
function ut(e) {
  if (e || 0 === e) return !0 === e ? "" : e + "";
}
function at(e, t) {
  let n = a[e];
  n
    ? (Object.assign(n, t), n.onUpdate?.())
    : ((a[e] = t),
      t.onMount?.(),
      (fe("-" + e).onabort = () => t.onDestroy?.()));
}
var ct = document.createTreeWalker(document);
function st(e) {
  let t = e.length;
  for (; e.charCodeAt(--t) > 47; );
  return e.slice(0, t + 1);
}
function dt(e, t, n) {
  (ct.currentNode = e),
    ht(t, n, n, 0),
    (ct.currentNode = document.documentElement);
}
function ht(e, t, n, r) {
  let i,
    l = 0,
    o = 0,
    f = 0;
  for (n !== t && (t.d = n); (i = e.charCodeAt(r++)); )
    if (((o = l), (l = 0), i >= 117)) l = 10 * o + i - 117;
    else if (i >= 107) {
      for (i = 10 * o + i - 107; i--; ) ct.parentNode();
      ct.nextSibling();
    } else if (i >= 97) for (i = 10 * o + i - 97; i--; ) ct.nextSibling();
    else if (i >= 67) for (i = 20 * o + i - 67; i--; ) ct.nextNode();
    else if (47 === i) r = ht(e, (t[f++] = h(t.$global)), n, r);
    else {
      if (38 === i) return r;
      if (32 === i) t[f++] = ct.currentNode;
      else {
        let e = (t[f++] = document.createTextNode("")),
          n = ct.currentNode;
        n.parentNode.replaceChild(e, n), (ct.currentNode = e);
      }
    }
  return r;
}
function gt(e, t, n) {
  let r = h(t);
  if (((r._ = r.d = e.B || n), (r.x = e), vt(e, r), e.c))
    for (let t of e.c) t.g?.(r);
  return r;
}
function pt(e, t, n) {
  if ("string" != typeof e) return gt(e, t, n);
  let r = h(t);
  return (r._ = r.d = n), (r[0] = r.a = r.b = document.createElement(e)), r;
}
function vt(e, t) {
  let n = e.k();
  return (
    dt(11 === n.nodeType ? n.firstChild : n, e.C, t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.s && w(t, e.s, t, t),
    n
  );
}
function bt(e, t, n) {
  return (r) => {
    let i = a[e + "("];
    if (!i || r === O) return;
    let l = a[e + "!"],
      o = r === T || r === _,
      f = !o && t?.(a);
    return w(l, () => {
      if (o) return i.e?.(r);
      if ("string" == typeof i) St(0, f), tt(0, r());
      else if (i.e) {
        let e = r();
        i.e(n ? e : [f ? { ...e, renderBody: f } : e]);
      }
    });
  };
}
function mt(e, t, n, r, i) {
  let l,
    o,
    f = {},
    u = t ? st(t) : " ";
  return (t) => ({
    t: f,
    D: e,
    C: u,
    s: n,
    k: yt,
    B: t,
    E: void 0,
    get e() {
      return (l ||= i?.());
    },
    get c() {
      return (o ||= new Set(r?.()));
    },
  });
}
function kt(e, t, n, r, i) {
  return mt(e, t, n, r, i)();
}
function yt() {
  return (this.E ||= (function (e) {
    let t = Xe(e);
    return t.firstChild === t.lastChild ? t.firstChild || Ge : t;
  })(this.D)).cloneNode(!0);
}
var wt = function (e, t, n) {
  let r = e + "(",
    i = e + "!",
    l = n && ((e) => (l = n())(e));
  return (n) => {
    if (n === O) return;
    let o = a[r],
      f = n;
    if (n !== T && n !== _) {
      let i = de(n);
      jt(i, o)
        ? ((o = a[r] = i),
          (function (e, t) {
            let n,
              r = a[e + "!"];
            t
              ? ((n = a[e + "!"] = pt(t, a.$global, a)), (r = r || p(a[e])))
              : ((n = p(a[e])), (a[e + "!"] = void 0)),
              y(n, r.a.parentNode, r.a),
              k(r);
          })(e, i),
          t && t(a),
          (f = O))
        : (f = _);
    }
    l?.(f), G(o, a[i], f);
  };
};
function Ct(e, t) {
  let n = t + "!",
    r = t + "(";
  return (t) => {
    let i = a[n];
    if (i) {
      let n = a[r];
      (!n?.c || n.c.has(e)) && w(i, e, t);
    }
  };
}
var At = function (e, t, n) {
  let r = e + "(",
    i = e + "!",
    l = n && ((e) => (l = n())(e));
  return (n) => {
    if (n === O) return;
    let o = a[r],
      f = n;
    if (n !== T && n !== _) {
      let i = de(n);
      jt(i, o) ? ((o = a[r] = i), St(e, i), t && t(a), (f = O)) : (f = _);
    }
    l?.(f), G(o, a[i], f);
  };
};
function St(e, t) {
  let n = a[e + "!"],
    r = a[e];
  if (((r.textContent = ""), t)) {
    y((a[e + "!"] = pt(t, a.$global, a)), r, null);
  }
  n && v(n);
}
var Nt = new Map([[Symbol(), p(void 0)]]),
  xt = [p(void 0)],
  $t = new Map(),
  Mt = [];
function Et(e, t) {
  return _t(e, t, ([e, t = Bt], n) => {
    o(
      e,
      "string" == typeof t
        ? (e, r) => n(e[t], [e, r])
        : (e, r) => n(t(e, r), [e, r]),
    );
  });
}
function It(e, t) {
  return _t(e, t, ([e, t = Vt], n) => l(e, (e, r) => n(t(e, r), [e, r])));
}
function Tt(e, t) {
  return _t(e, t, ([e, t, n, r = Vt], i) => f(e, t, n, (e) => i(r(e), [e])));
}
function _t(e, t, n) {
  let r = e + "!",
    i = t.c,
    l = t.e;
  return (o) => {
    if (o === O) return;
    if (o === T || o === _) {
      let t = a[r] ?? a[e + "("]?.values() ?? [];
      return void (
        t !== xt &&
        C(t, () => {
          l?.(o);
          for (let e of i) e(o);
        })
      );
    }
    let f,
      u,
      c,
      s,
      d = a[e],
      h = 8 === d.nodeType || 3 === d.nodeType,
      g = a[e + "("] || (h ? Nt : $t),
      b = a[e + "!"] || Array.from(g.values()),
      m = !0;
    if (
      (n(o, (e, n) => {
        let r = g.get(e),
          o = _;
        r || ((r = gt(t, a.$global, a)), (o = O)),
          w(r, () => {
            if ((l && l(n), i)) for (let e of i) e(o);
          }),
          f ? (f.set(e, r), u.push(r)) : ((f = new Map([[e, r]])), (u = [r]));
      }),
      f ||
        (h
          ? ((f = Nt), (u = xt), p(d))
          : (b.forEach(v), (d.textContent = ""), (f = $t), (u = Mt), (m = !1))),
      m)
    ) {
      if (h) {
        g === Nt && p(d);
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
            k(t[c++]);
          } while (c <= d);
        else {
          let g = d - c + 1,
            p = h - s + 1,
            v = t,
            b = new Array(p);
          for (i = 0; i < p; ++i) b[i] = -1;
          let m = 0,
            w = 0,
            C = new Map();
          for (l = s; l <= h; ++l) C.set(n[l], l);
          for (i = c; i <= d && w < p; ++i)
            (u = t[i]),
              (l = C.get(u)),
              void 0 !== l &&
                ((m = m > l ? he : l),
                ++w,
                (a = n[l]),
                (b[l - s] = i),
                (v[i] = null));
          if (g === t.length && 0 === w) {
            for (; s < p; ++s) y(n[s], e, r);
            for (; c < g; ++c) k(t[c]);
          } else {
            for (i = g - w; i > 0; ) (u = v[c++]), null !== u && (k(u), i--);
            if (m === he) {
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
                  ? ((m = i + s),
                    (a = n[m++]),
                    (f = m < o ? n[m].a : r),
                    y(a, e, f))
                  : --l;
            } else if (w !== p)
              for (o = n.length, i = p - 1; i >= 0; --i)
                -1 === b[i] &&
                  ((m = i + s),
                  (a = n[m++]),
                  (f = m < o ? n[m].a : r),
                  y(a, e, f));
          }
        }
      })(s, b, u, c);
    }
    (a[e + "("] = f), (a[e + "!"] = u);
  };
}
function Ot(e, t) {
  let n = t + "!";
  return (r) => {
    let i = a[n] ?? a[t + "("]?.values() ?? [];
    i !== xt && C(i, e, r);
  };
}
function Bt(e, t) {
  return t;
}
function Vt(e) {
  return e;
}
function jt(e, t) {
  return e !== t && (e?.t || 0) !== t?.t;
}
var Rt = new Map(),
  qt = {
    patchConditionals: function (e) {
      (wt = e(wt)), (At = e(At));
    },
    queueEffect: te,
    init() {
      x("$C_s", (e) => {
        Rt.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      x("$C_r", e);
    },
    isOp: (e) => e === T || e === _ || e === O,
    isRenderer: (e) => void 0 !== e.k,
    getStartNode: (e) => e.a,
    setScopeNodes(e, t, n) {
      (e.a = t), (e.b = n);
    },
    runComponentEffects() {
      ie(this.effects);
    },
    resolveRegistered: (e, { runtimeId: t, componentIdPrefix: n }) =>
      Array.isArray(e) && "string" == typeof e[0]
        ? (function (e, t) {
            let n = A[e];
            return t ? n(t, t) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.n[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = kt("", void 0, e, void 0, n && (() => n));
      return (r.k = t), r;
    },
    render(e, t, n, r) {
      let i = t.scope;
      i || ((i = Rt.get(t.id)), i && ((t.scope = i), Rt.delete(t.id)));
      let l = n.e || Dt,
        o = !1;
      if (
        ((t.effects = re(() => {
          let f = !i;
          (i ||= t.scope ||= gt(n, e.global)),
            w(i, () => {
              if (f) {
                let e = n.c;
                if (e) for (let t of e) t(_);
              } else l(T), (o = !0);
              l(r);
            });
        })),
        !o)
      )
        return i.a === i.b ? i.a : i.a.parentNode;
    },
  };
function Dt() {}
var Pt = (e, ...t) => {
  let n = kt(...t);
  return (n.mount = Wt), (n._ = n), x(e, n);
};
function Wt(e = {}, t, n) {
  let r,
    i,
    { $global: l } = e;
  l
    ? (({ $global: l, ...e } = e),
      (l = { runtimeId: "M", renderId: "_", ...l }))
    : (l = { runtimeId: "M", renderId: "_" });
  let o = this.e,
    f = re(() => {
      (r = h(l)), (i = vt(this, r)), o && w(r, o, [e]);
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
    ie(f),
    {
      update: (e) => {
        o &&
          ie(
            w(r, re, () => {
              o(T), o([e]);
            }),
          );
      },
      destroy: () => {
        k(r);
      },
    }
  );
}
export {
  He as attr,
  n as attrTag,
  r as attrTags,
  tt as attrs,
  lt as attrsEvents,
  L as childClosures,
  Qe as classAttr,
  P as closure,
  qt as compat,
  wt as conditional,
  At as conditionalOnlyChild,
  Ee as controllable_detailsOrDialog_open,
  Ie as controllable_detailsOrDialog_open_effect,
  ye as controllable_input_checked,
  Ce as controllable_input_checkedValue,
  Ae as controllable_input_checkedValue_effect,
  we as controllable_input_checked_effect,
  Se as controllable_input_value,
  Ne as controllable_input_value_effect,
  xe as controllable_select_value,
  $e as controllable_select_value_effect,
  Se as controllable_textarea_value,
  Ne as controllable_textarea_value_effect,
  kt as createRenderer,
  mt as createRendererWithOwner,
  h as createScope,
  Pt as createTemplate,
  et as data,
  W as dynamicClosure,
  z as dynamicSubscribers,
  bt as dynamicTagAttrs,
  K as effect,
  l as forIn,
  o as forOf,
  f as forTo,
  fe as getAbortSignal,
  ot as html,
  Z as inChild,
  Ct as inConditionalScope,
  Ot as inLoopScope,
  M as init,
  q as intersection,
  H as intersections,
  at as lifecycle,
  It as loopIn,
  Et as loopOf,
  Tt as loopTo,
  X as nextTagId,
  I as nodeRef,
  ve as on,
  V as param,
  rt as partialAttrs,
  ft as props,
  x as register,
  $ as registerBoundSignal,
  E as registerSubscriber,
  oe as resetAbortSignal,
  ne as run,
  F as setTagVar,
  Q as setup,
  B as state,
  Ye as styleAttr,
  U as tagVarSignal,
  j as value,
};
