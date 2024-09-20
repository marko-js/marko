function e(e) {
  return { A: 1, $global: e };
}
var t = e({});
function n(e) {
  return (t.a = t.b = e), t;
}
function r(e) {
  return (t, n) => {
    t.l ??= new Map();
    let r = t.l.get(n);
    return r || ((r = e(t, n)), t.l.set(n, r)), r;
  };
}
var o = r((e, t) => t && { ...t, m: e }),
  i = r((e, t) =>
    t.length
      ? function (...n) {
          return t.call(this, e, ...n);
        }
      : function () {
          return t.call(this, e);
        },
  );
function l(e) {
  f(e), e.e?.h?.delete(e);
  let t = e.B?.c;
  if (t) for (let n of t) n.j?.(e);
  return e;
}
function f(e) {
  let t = e.h;
  if (t) for (let e of t) f(e);
  let n = e.n;
  if (n) for (let e of n.values()) e.abort();
}
function u(e) {
  let t = e.e;
  for (; t && !t.h?.has(e); ) (t.h ||= new Set()).add(e), (t = (e = t).e);
}
function a(e) {
  l(e);
  let t = e.a,
    n = e.b.nextSibling;
  for (; t !== n; ) {
    let e = t.nextSibling;
    t.remove(), (t = e);
  }
}
function c(e, t, n) {
  let r = e.a,
    o = e.b.nextSibling;
  for (; r !== o; ) {
    let e = r.nextSibling;
    t.insertBefore(r, n), (r = e);
  }
}
function s(e, t) {
  let n = e.n;
  if (n) {
    let e = n.get(t);
    e && (e.abort(), n.delete(t));
  }
}
function d(e, t) {
  let n = (e.n ??= new Map()),
    r = n.get(t);
  return r || (u(e), n.set(t, (r = new AbortController()))), r.signal;
}
var h = 2147483647;
function g(e, t) {
  return t ? e : "";
}
var p = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function b(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !p.test(e) ? t + "px" : t}`
    : "";
}
function v(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          o = "";
        if (Array.isArray(e))
          for (let i of e) {
            let e = v(i, t, n);
            "" !== e && ((r += o + e), (o = t));
          }
        else
          for (let i in e) {
            let l = n(i, e[i]);
            "" !== l && ((r += o + l), (o = t));
          }
        return r;
      }
  }
  return "";
}
var m = new Map(),
  w = new WeakMap(),
  y = { capture: !0 };
function C(e, t, n) {
  let r = m.get(t);
  r || m.set(t, (r = new WeakMap())),
    r.has(e) ||
      (function (e, t) {
        let n = e.getRootNode(),
          r = w.get(n);
        r || w.set(n, (r = new Set())),
          r.has(t) || (r.add(t), n.addEventListener(t, $, y));
      })(e, t),
    r.set(e, n || void 0);
}
function $(e) {
  let t = e.target;
  if (t) {
    let n = m.get(e.type);
    if ((n.get(t)?.(e, t), e.bubbles))
      for (; (t = t.parentElement) && !e.cancelBubble; ) n.get(t)?.(e, t);
  }
}
var x = /^on[A-Z-]/;
function M(e, t, n) {
  S(
    e,
    t,
    (function (e) {
      if (e || 0 === e) return !0 === e ? "" : e + "";
    })(n),
  );
}
function S(e, t, n) {
  void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function N(e, t) {
  S(
    e,
    "class",
    (function (e) {
      return v(e, " ", g);
    })(t) || void 0,
  );
}
function k(e, t) {
  S(
    e,
    "style",
    (function (e) {
      return v(e, ";", b);
    })(t) || void 0,
  );
}
function A(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
function _(e, t, n) {
  let r,
    o = e[t];
  for (let { name: e } of o.attributes) (n && e in n) || o.removeAttribute(e);
  for (let e in n) {
    let t = n[e];
    switch (e) {
      case "class":
        N(o, t);
        break;
      case "style":
        k(o, t);
        break;
      case "renderBody":
        break;
      default:
        x.test(e)
          ? ((r ??= {})["-" === e[2] ? e.slice(3) : e.slice(2).toLowerCase()] =
              t)
          : M(o, e, t);
    }
  }
  e[t + "~"] = r;
}
function E(e, t) {
  let n = e[t],
    r = e[t + "~"];
  for (let e in r) C(n, e, r[e]);
}
var B = document.createElement("template");
function I(e, t, n) {
  let r = e[n],
    o = e[n + "-"] || r,
    i = r.parentNode,
    l = o.nextSibling;
  B.innerHTML = t || 0 === t ? `${t}` : "<!>";
  let f = B.content;
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), i.insertBefore(f, r);
  let u = r;
  for (; u !== l; ) {
    let e = u.nextSibling;
    u.remove(), (u = e);
  }
}
function T(e, t, n) {
  let r = e[n],
    o = e[n + "-"],
    i = e[t];
  if (o) for (let e in o) e in r || (i[e] = void 0);
  for (let e in r) i[e] = r[e];
  e[n + "-"] = r;
}
function j(e, t, n) {
  let r = e[t];
  r
    ? (Object.assign(r, n), r.onUpdate?.())
    : ((e[t] = n),
      n.onMount?.(),
      (d(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var O = {},
  q = {},
  D = {};
function z(e, t) {
  let n = e + "#";
  return (e, r) => {
    r !== O && void 0 === e[n] && t(e, r);
  };
}
function P(e, t) {
  let n = e + "#";
  return (r, o) => {
    if (o !== O && o !== q && o !== D) {
      if (null != o && "function" != typeof o)
        throw new Error(`Invalid value ${o} for change handler '${e}'`);
      if (void 0 !== r[n]) {
        let t = r[e];
        if (t && !o)
          throw new Error(
            `Change handler '${e}' cannot change from a function to ${o}`,
          );
        if (!t && o)
          throw new Error(
            `Change handler '${e}' cannot change from a nullish to a function`,
          );
      }
    }
    t(r, o);
  };
}
function R(e, t, n) {
  let r = e + "#";
  return (o, i) => {
    if (i === O) 1 === (o[r] = (o[r] ?? 0) + 1) && n?.(o, O);
    else if (i !== D) {
      let l = void 0 !== o[r];
      1 === (o[r] ||= 1) &&
        (i === q || (l && o[e] === i)
          ? n?.(o, q)
          : ((o[e] = i), t?.(o, i), n?.(o, D))),
        o[r]--;
    }
  };
}
var F = 0;
function L(e, t, n) {
  let r = "?" + F++,
    o = r + "#";
  return (i, l) => {
    l === O
      ? 1 === (i[o] = (i[o] ?? 0) + 1) && n?.(i, O)
      : void 0 === i[o]
        ? ((i[o] = e - 1), (i[r] = !0))
        : 0 == --i[o]
          ? l === D || i[r]
            ? ((i[r] = !1), t(i, 0), n?.(i, D))
            : n?.(i, q)
          : (i[r] ||= l === D);
  };
}
var W = (e) => e._;
function H(e, t, n, r) {
  let o = "?" + F++,
    i = o + 1,
    l = n || W,
    f = "function" == typeof e ? e : () => e;
  return (e, n) => {
    if (n === O) 1 === (e[i] = (e[i] ?? 0) + 1) && r?.(e, O);
    else {
      let u, a;
      if (void 0 === e[i]) {
        (u = l(e)), (a = f(e));
        let t = u[a + "#"],
          r = void 0 === t ? !u.A : 0 === t;
        (e[i] = r ? 1 : 2), (n = D);
      }
      0 == --e[i]
        ? n === D || e[o]
          ? ((e[o] = !1), (u ??= l(e)), (a ??= f(e)), t?.(e, u[a]), r?.(e, D))
          : r?.(e, q)
        : (e[o] ||= n === D);
    }
  };
}
function J(e, t, n, r) {
  let o = n || W,
    l = "function" == typeof e ? e : () => e,
    f = H(l, t, o, r);
  return (
    (f.g = (e) => {
      let t = o(e),
        n = l(e) + "*";
      (t[n] ??= new Set()), t[n].add(i(e, f));
    }),
    (f.j = (e) => {
      let t = o(e),
        n = l(e) + "*";
      t[n]?.delete(i(e, f));
    }),
    f
  );
}
function U(e, t) {
  let n = (n, r) => {
    let o = n[t];
    for (let t of e) t(o, r);
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
function Z(e) {
  let t = e + "*";
  return (e, n) => {
    let r = e[t];
    if (r) for (let e of r) e(n);
  };
}
function G(e, t, n) {
  e[t]["/"] = (t) => n(e, t);
}
var K = (e, t) => e["/"]?.(t),
  Q = (e, t, n) => {
    let r = e?.c;
    if (r) for (let e of r) e(t, n);
  },
  V = new WeakMap();
function X({ $global: e }) {
  let t = V.get(e) || 0;
  return V.set(e, t + 1), "c" + e.runtimeId + e.renderId + t.toString(36);
}
function Y(e, t) {
  return (n, r) => {
    t(n[e], r);
  };
}
function ee(e) {
  return (t, n) => {
    for (let r of e) r(t, n);
  };
}
var te = document.createTreeWalker(document);
function ne(e) {
  let t = e.length;
  for (; e.charCodeAt(--t) > 47; );
  return e.slice(0, t + 1);
}
function re(e, t, n) {
  (te.currentNode = e),
    oe(t, n, n, 0),
    (te.currentNode = document.documentElement);
}
function oe(t, n, r, o) {
  let i,
    l = 0,
    f = 0,
    u = 0;
  for (r !== n && (n.e = r); (i = t.charCodeAt(o++)); )
    if (((f = l), (l = 0), i >= 117)) l = 10 * f + i - 117;
    else if (i >= 107) {
      for (i = 10 * f + i - 107; i--; ) te.parentNode();
      te.nextSibling();
    } else if (i >= 97) for (i = 10 * f + i - 97; i--; ) te.nextSibling();
    else if (i >= 67) for (i = 20 * f + i - 67; i--; ) te.nextNode();
    else if (47 === i) o = oe(t, (n[u++] = e(n.$global)), r, o);
    else {
      if (38 === i) return o;
      if (32 === i) n[u++] = te.currentNode;
      else {
        let e = (n[u++] = document.createTextNode("")),
          t = te.currentNode,
          r = t.parentNode;
        33 === i
          ? r.insertBefore(e, t)
          : (35 === i ? r.insertBefore(e, t.nextSibling) : r.replaceChild(e, t),
            (te.currentNode = e));
      }
    }
  return o;
}
function ie(t, n, r) {
  let o = e(n);
  if (((o._ = o.e = t.m || r), (o.B = t), le(t, o), t.c))
    for (let e of t.c) e.g?.(o);
  return o;
}
function le(e, t) {
  let n = "string" == typeof e ? document.createElement(e) : e.k();
  return (
    re(11 === n.nodeType ? n.firstChild : n, e.o ?? " ", t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.p && e.p(t),
    n
  );
}
function fe(e, t, n) {
  return (r, i) => {
    let l = r[e + "("];
    if (!l || l === t || i === D) return;
    let f = r[e + "!"];
    if (i === O || i === q) return l.d?.(f, i);
    if ("string" == typeof l) _(f, 0, i()), pe(f, 0, t && o(r, t));
    else if (((l = l.default ? l.default._ : l._ || l), l.d)) {
      let e = i();
      l.d(f, n ? e : [t ? { ...e, renderBody: o(r, t) } : e]);
    }
  };
}
function ue(e, t, n, r, o = 0, i) {
  return {
    q: e,
    o: t && ne(t),
    p: n,
    k: ae,
    c: new Set(r),
    C: o,
    s: void 0,
    d: i,
    m: void 0,
  };
}
function ae() {
  let e = this.s;
  if (!e) {
    let t = this.o,
      n = t && t.length < 4 && 32 !== t.charCodeAt(t.length - 1);
    this.s = e = (function (e, t) {
      let n;
      se.innerHTML = e;
      let r = se.content;
      return (
        t || (n = r.firstChild) !== r.lastChild || (n && 8 === n.nodeType)
          ? ((n = ce.createDocumentFragment()), n.appendChild(r))
          : n || (n = ce.createTextNode("")),
        n
      );
    })(this.q, n);
  }
  return e.cloneNode(!0);
}
var ce = document,
  se = ce.createElement("template");
var de = function (e, t, r) {
  let o = e + "(",
    i = e + "!";
  return (l, f) => {
    if (f === D) return;
    let u = l[o],
      s = f;
    if (f !== O && f !== q) {
      let r = f ? f._ || f.renderBody || f : void 0;
      r !== u
        ? ((u = l[o] = r),
          (function (e, t, r) {
            let o,
              i = e[t + "!"];
            r
              ? ((o = e[t + "!"] = ie(r, e.$global, e)), (i = i || n(e[t])))
              : ((o = n(e[t])), (e[t + "!"] = void 0)),
              c(o, i.a.parentNode, i.a),
              a(i);
          })(l, e, r),
          t?.(l),
          (s = D))
        : (s = q);
    }
    r?.(l, s), Q(u, l[i], s);
  };
};
function he(e, t) {
  let n = t + "!",
    r = t + "(";
  return (t, o) => {
    let i = t[n];
    if (i) {
      let n = t[r];
      (!n?.c || n.c.has(e)) && e(i, o);
    }
  };
}
var ge = function (e, t, n) {
  let r = e + "(",
    o = e + "!";
  return (i, l) => {
    if (l === D) return;
    let f = i[r],
      u = l;
    if (l !== O && l !== q) {
      let n = l ? l._ || l.renderBody || l : void 0;
      n !== f ? ((f = i[r] = n), pe(i, e, n), t?.(i), (u = D)) : (u = q);
    }
    n?.(i, u), Q(f, i[o], u);
  };
};
function pe(e, t, n) {
  let r = e[t + "!"],
    o = e[t];
  if (((o.textContent = ""), n)) {
    c((e[t + "!"] = ie(n, e.$global, e)), o, null);
  }
  r && l(r);
}
var be = new Map([[Symbol(), n(void 0)]]),
  ve = [n(void 0)],
  me = new Map(),
  we = [];
function ye(e, t) {
  return xe(e, t, (e, t) => {
    let [n, r = Se] = e,
      o = 0;
    for (let e of n) t(r(e, o), [e, o, n]), o++;
  });
}
function Ce(e, t) {
  return xe(e, t, (e, t) => {
    let [n, r = Ne] = e;
    for (let e in n) {
      let o = n[e];
      t(r(e, o), [e, o, n]);
    }
  });
}
function $e(e, t) {
  return xe(e, t, (e, t) => {
    let [n, r = 0, o = 1, i = Ne] = e,
      l = (n - r) / o;
    for (let e = 0; e <= l; e++) {
      let n = r + e * o;
      t(i(n), [n]);
    }
  });
}
function xe(e, t, r) {
  let o = e + "!",
    i = t.c,
    f = t.d;
  return (u, s) => {
    if (s === D) return;
    if (s === O || s === q) {
      let t = u[o] ?? u[e + "("]?.values() ?? [];
      if (t !== ve)
        for (let e of t) {
          f?.(e, s);
          for (let t of i) t(e, s);
        }
      return;
    }
    let d,
      g,
      p,
      b,
      v = u[e],
      m = 8 === v.nodeType || 3 === v.nodeType,
      w = u[e + "("] || (m ? be : me),
      y = u[e + "!"] || Array.from(w.values()),
      C = !0;
    if (
      (r(s, (e, n) => {
        let r = w.get(e),
          o = q;
        if ((r || ((r = ie(t, u.$global, u)), (o = D)), f && f(r, n), i))
          for (let e of i) e(r, o);
        d ? (d.set(e, r), g.push(r)) : ((d = new Map([[e, r]])), (g = [r]));
      }),
      !d)
    )
      if (m) (d = be), (g = ve), n(v);
      else {
        if (t.C) for (let e = 0; e < y.length; e++) l(y[e]);
        (v.textContent = ""), (d = me), (g = we), (C = !1);
      }
    if (C) {
      if (m) {
        w === be && n(v);
        let e = y[y.length - 1];
        (p = e.b.nextSibling), (b = e.a.parentNode);
      } else (p = null), (b = v);
      !(function (e, t, n, r) {
        let o,
          i,
          l,
          f,
          u,
          s,
          d = 0,
          g = 0,
          p = t.length - 1,
          b = n.length - 1,
          v = t[d],
          m = n[g],
          w = t[p],
          y = n[b];
        e: {
          for (; v === m; ) {
            if ((++d, ++g, d > p || g > b)) break e;
            (v = t[d]), (m = n[g]);
          }
          for (; w === y; ) {
            if ((--p, --b, d > p || g > b)) break e;
            (w = t[p]), (y = n[b]);
          }
        }
        if (d > p) {
          if (g <= b) {
            (l = b + 1), (f = l < n.length ? n[l].a : r);
            do {
              c(n[g++], e, f);
            } while (g <= b);
          }
        } else if (g > b)
          do {
            a(t[d++]);
          } while (d <= p);
        else {
          let v = p - d + 1,
            m = b - g + 1,
            w = t,
            y = new Array(m);
          for (o = 0; o < m; ++o) y[o] = -1;
          let C = 0,
            $ = 0,
            x = new Map();
          for (i = g; i <= b; ++i) x.set(n[i], i);
          for (o = d; o <= p && $ < m; ++o)
            (u = t[o]),
              (i = x.get(u)),
              void 0 !== i &&
                ((C = C > i ? h : i),
                ++$,
                (s = n[i]),
                (y[i - g] = o),
                (w[o] = null));
          if (v === t.length && 0 === $) {
            for (; g < m; ++g) c(n[g], e, r);
            for (; d < v; ++d) a(t[d]);
          } else {
            for (o = v - $; o > 0; ) (u = w[d++]), null !== u && (a(u), o--);
            if (C === h) {
              let t = (function (e) {
                let t,
                  n,
                  r = e.slice(),
                  o = [];
                o.push(0);
                for (let i = 0, l = e.length; i < l; ++i) {
                  if (-1 === e[i]) continue;
                  let l = o[o.length - 1];
                  if (e[l] < e[i]) (r[i] = l), o.push(i);
                  else {
                    for (t = 0, n = o.length - 1; t < n; ) {
                      let r = ((t + n) / 2) | 0;
                      e[o[r]] < e[i] ? (t = r + 1) : (n = r);
                    }
                    e[i] < e[o[t]] && (t > 0 && (r[i] = o[t - 1]), (o[t] = i));
                  }
                }
                for (t = o.length, n = o[t - 1]; t-- > 0; )
                  (o[t] = n), (n = r[n]);
                return o;
              })(y);
              for (i = t.length - 1, l = n.length, o = m - 1; o >= 0; --o)
                -1 === y[o] || i < 0 || o !== t[i]
                  ? ((C = o + g),
                    (s = n[C++]),
                    (f = C < l ? n[C].a : r),
                    c(s, e, f))
                  : --i;
            } else if ($ !== m)
              for (l = n.length, o = m - 1; o >= 0; --o)
                -1 === y[o] &&
                  ((C = o + g),
                  (s = n[C++]),
                  (f = C < l ? n[C].a : r),
                  c(s, e, f));
          }
        }
      })(b, y, g, p);
    }
    (u[e + "("] = d), (u[e + "!"] = g);
  };
}
function Me(e, t) {
  let n = t + "!";
  return (r, o) => {
    let i = r[n] ?? r[t + "("]?.values() ?? [];
    if (i !== ve) for (let t of i) e(t, o);
  };
}
function Se(e, t) {
  return t;
}
function Ne(e) {
  return e;
}
var ke,
  Ae = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (ke = !1), qe();
      }),
      t
    );
  })();
function _e() {
  qe(), requestAnimationFrame(Ee);
}
function Ee() {
  Ae.postMessage(0);
}
var Be = [],
  Ie = [];
function Te(e, t, n, r) {
  return n ? (n(r), r) : je(e, t, r);
}
function je(e, t, n) {
  return ke || ((ke = !0), queueMicrotask(_e)), t(e, O), Be.push(e, t, n), n;
}
function Oe(e, t) {
  Ie.push(e, t);
}
function qe() {
  try {
    Pe();
  } finally {
    Be = [];
  }
  try {
    ze();
  } finally {
    Ie = [];
  }
}
function De(e) {
  let t = Be,
    n = Ie,
    r = (Ie = []);
  Be = [];
  try {
    e(), Pe();
  } finally {
    (Be = t), (Ie = n);
  }
  return r;
}
function ze(e = Ie) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function Pe() {
  for (let e = 0; e < Be.length; e += 3) {
    let t = Be[e + 0];
    (0, Be[e + 1])(t, Be[e + 2]);
  }
}
var Re = {},
  Fe = class {
    t = [];
    u = {};
    D = { _: Re };
    constructor(e, t, n) {
      (this.E = e), (this.F = t), (this.x = n), (this.y = e[n]), this.z();
    }
    w() {
      this.y.w(), this.z();
    }
    z() {
      let e = this.y,
        t = this.D,
        n = this.u,
        r = e.v,
        o = new Map();
      if (r.length) {
        let t = e.i.length,
          i = new Map();
        e.v = [];
        let l = (e, t = this.f, r = e) => {
          let l = (n[t] ??= {}),
            f = r;
          for (; 8 === (f = f.previousSibling).nodeType; );
          l.b = f;
          let u = (l.a ??= f),
            a = i.size;
          for (let [e, n] of i) {
            if (!a--) break;
            e !== t &&
              4 & u.compareDocumentPosition(n) &&
              2 & r.compareDocumentPosition(n) &&
              (o.set("" + e, t), i.delete(e));
          }
          return i.set(t, e), l;
        };
        for (let e of r) {
          let r = e.data,
            o = r[t],
            f = parseInt(r.slice(t + 1)),
            u = (n[f] ??= {}),
            a = r.indexOf(" ") + 1,
            c = a ? r.slice(a) : "";
          if ("*" === o) u[c] = e.previousSibling;
          else if ("$" === o) i.set(f, e);
          else if ("[" === o)
            this.f && (c && l(e), this.t.push(this.f)), (this.f = f), (u.a = e);
          else if ("]" === o) {
            if (((u[c] = e), f < this.f)) {
              let t = e.parentNode,
                n = l(e).a;
              t && t !== n.parentNode && t.prepend(n), (this.f = this.t.pop());
            }
          } else if ("|" === o) {
            u[parseInt(c)] = e;
            let t = JSON.parse("[" + c.slice(c.indexOf(" ") + 1) + "]"),
              n = e;
            for (let r = t.length - 1; r >= 0; r--) n = l(e, t[r], n).b;
          }
        }
      }
      let i = e.r;
      if (i) {
        e.r = [];
        let r = i.length,
          l = 0;
        for (; l < r; ) {
          let e = i[l++];
          if ("function" == typeof e) {
            let r = e(t),
              { $global: i } = n;
            i ||
              ((n.$global = i = r.$ || {}),
              (i.runtimeId = this.F),
              (i.renderId = this.x));
            for (let e in r)
              if ("$" !== e) {
                let t = r[e],
                  l = n[e];
                (t.$global = i), l !== t && (n[e] = Object.assign(t, l));
                let f = o.get(e);
                f && ((t.e = r[f]), u(t));
              }
          } else
            l === r || "string" != typeof i[l]
              ? delete this.E[this.x]
              : Re[i[l++]](n[e]);
        }
      }
    }
  };
function Le(e, t) {
  return (Re[e] = t), t;
}
function We(e, t) {
  return (Re[e] = (e) => (n) => t(e, n)), t;
}
function He(e, t) {
  return (Re[e] = (e) => o(e, t)), t;
}
function Je(e = "M") {
  let t,
    n = (r) => (n[r] = t[r] = new Fe(t, e, r));
  function r(r) {
    t = r;
    for (let e in r) n(e);
    Object.defineProperty(window, e, { configurable: !0, value: n });
  }
  window[e]
    ? r(window[e])
    : Object.defineProperty(window, e, { configurable: !0, set: r });
}
function Ue(e, t) {
  return Le(e, t.g), t;
}
var Ze = new Map(),
  Ge = {
    patchConditionals: function (e) {
      (de = e(de)), (ge = e(ge));
    },
    queueEffect: Oe,
    init() {
      Le("$C_s", (e) => {
        Ze.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      Le("$C_r", e);
    },
    isOp: (e) => e === O || e === q || e === D,
    isRenderer: (e) => void 0 !== e.k,
    getStartNode: (e) => e.a,
    setScopeNodes(e, t, n) {
      (e.a = t), (e.b = n);
    },
    runComponentEffects() {
      ze(this.effects);
    },
    resolveRegistered: (e, { runtimeId: t, componentIdPrefix: n }) =>
      Array.isArray(e) && "string" == typeof e[0]
        ? (function (e, t) {
            let n = Re[e];
            return t && n ? (n.q ? o(t, n) : n(t)) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.u[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = ue("", void 0, e, void 0, 1, n);
      return (r.k = t), r;
    },
    render(e, t, n, r) {
      let o = t.scope;
      o || ((o = Ze.get(t.id)), o && ((t.scope = o), Ze.delete(t.id)));
      let i = n.d || Ke,
        l = !1;
      if (
        ((t.effects = De(() => {
          if (o) i(o, O), (l = !0);
          else {
            o = t.scope = ie(n, e.global);
            let r = n.c;
            if (r) for (let e of r) e(t.scope, q);
          }
          i(o, r);
        })),
        !l)
      )
        return o.a === o.b ? o.a : o.a.parentNode;
    },
  };
function Ke() {}
var Qe = (e, t) => Le(t, new Ve(e)),
  Ve = class {
    _;
    constructor(e) {
      this._ = e;
    }
    mount(t = {}, n, r) {
      let o,
        i,
        { $global: l } = t;
      l
        ? (({ $global: l, ...t } = t),
          (l = { runtimeId: "M", renderId: "_", ...l }))
        : (l = { runtimeId: "M", renderId: "_" });
      let f = this._.d,
        u = De(() => {
          (o = e(l)), (i = le(this._, o)), f && f(o, [t]);
        });
      switch (r) {
        case "afterbegin":
          n.insertBefore(i, n.firstChild);
          break;
        case "afterend":
          n.parentElement.insertBefore(i, n.nextSibling);
          break;
        case "beforebegin":
          n.parentElement.insertBefore(i, n);
          break;
        default:
          n.appendChild(i);
      }
      return (
        ze(u),
        {
          update: (e) => {
            f &&
              (function (e) {
                let t = Be,
                  n = Ie;
                (Be = []), (Ie = []);
                try {
                  e(), Pe(), (Be = t), ze();
                } finally {
                  (Be = t), (Ie = n);
                }
              })(() => {
                f(o, O), f(o, [e]);
              });
          },
          destroy: () => {
            a(o);
          },
        }
      );
    }
  };
export {
  M as attr,
  _ as attrs,
  E as attrsEvents,
  i as bindFunction,
  o as bindRenderer,
  P as changeHandler,
  U as childClosures,
  N as classAttr,
  H as closure,
  Ge as compat,
  de as conditional,
  ge as conditionalOnlyChild,
  ue as createRenderer,
  e as createScope,
  ie as createScopeWithRenderer,
  Qe as createTemplate,
  A as data,
  J as dynamicClosure,
  Z as dynamicSubscribers,
  fe as dynamicTagAttrs,
  d as getAbortSignal,
  I as html,
  Y as inChild,
  he as inConditionalScope,
  Me as inLoopScope,
  Je as init,
  z as initValue,
  L as intersection,
  ee as intersections,
  j as lifecycle,
  Ce as loopIn,
  ye as loopOf,
  $e as loopTo,
  X as nextTagId,
  C as on,
  De as prepare,
  T as props,
  Te as queueControllableSource,
  Oe as queueEffect,
  je as queueSource,
  Le as register,
  We as registerBoundSignal,
  He as registerRenderer,
  Ue as registerSubscriber,
  s as resetAbortSignal,
  qe as run,
  ze as runEffects,
  G as setTagVar,
  k as styleAttr,
  K as tagVarSignal,
  R as value,
};
