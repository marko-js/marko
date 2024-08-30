function e(e) {
  return { z: 1, $global: e };
}
var t = e({});
function n(e) {
  return (t.a = t.b = e), t;
}
function r(e) {
  return (t, n) => {
    t.k ??= new Map();
    let r = t.k.get(n);
    return r || ((r = e(t, n)), t.k.set(n, r)), r;
  };
}
var o = r((e, t) => t && { ...t, l: e }),
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
  f(e), e._?.g?.delete(e);
  let t = e.A?.c;
  if (t) for (let n of t) n.h?.(e);
  return e;
}
function f(e) {
  let t = e.g;
  if (t) for (let e of t) f(e);
  let n = e.m;
  if (n) for (let e of n.values()) e.abort();
}
function u(e) {
  l(e);
  let t = e.a,
    n = e.b.nextSibling;
  for (; t !== n; ) {
    let e = t.nextSibling;
    t.remove(), (t = e);
  }
}
function a(e, t, n) {
  let r = e.a,
    o = e.b.nextSibling;
  for (; r !== o; ) {
    let e = r.nextSibling;
    t.insertBefore(r, n), (r = e);
  }
}
function c(e, t) {
  let n = e.m;
  if (n) {
    let e = n.get(t);
    e && (e.abort(), n.delete(t));
  }
}
function s(e, t) {
  let n = (e.m ??= new Map()),
    r = n.get(t);
  return (
    r ||
      ((function (e) {
        let t = e._;
        for (; t && !t.g?.has(e); ) (t.g ||= new Set()).add(e), (t = (e = t)._);
      })(e),
      n.set(t, (r = new AbortController()))),
    r.signal
  );
}
var d = 2147483647;
function h(e, t) {
  return t ? e : "";
}
var g = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function p(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !g.test(e) ? t + "px" : t}`
    : "";
}
function b(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          o = "";
        if (Array.isArray(e))
          for (let i of e) {
            let e = b(i, t, n);
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
var v = new Map(),
  w = new WeakMap(),
  y = { capture: !0 };
function m(e, t, n) {
  let r = v.get(t);
  r || v.set(t, (r = new WeakMap())),
    r.has(e) ||
      (function (e, t) {
        let n = e.getRootNode(),
          r = w.get(n);
        r || w.set(n, (r = new Set())),
          r.has(t) || (r.add(t), n.addEventListener(t, C, y));
      })(e, t),
    r.set(e, n || void 0);
}
function C(e) {
  let t = e.target;
  if (t) {
    let n = v.get(e.type);
    if ((n.get(t)?.(e, t), e.bubbles))
      for (; (t = t.parentElement) && !e.cancelBubble; ) n.get(t)?.(e, t);
  }
}
var x = /^on[A-Z-]/;
function $(e, t, n) {
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
      return b(e, " ", h);
    })(t) || void 0,
  );
}
function M(e, t) {
  S(
    e,
    "style",
    (function (e) {
      return b(e, ";", p);
    })(t) || void 0,
  );
}
function _(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
function k(e, t, n) {
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
        M(o, t);
        break;
      case "renderBody":
        break;
      default:
        x.test(e)
          ? ((r ??= {})["-" === e[2] ? e.slice(3) : e.slice(2).toLowerCase()] =
              t)
          : $(o, e, t);
    }
  }
  e[t + "~"] = r;
}
function A(e, t) {
  let n = e[t],
    r = e[t + "~"];
  for (let e in r) m(n, e, r[e]);
}
var E = document.createElement("template");
function B(e, t, n) {
  let r = e[n],
    o = e[n + "-"] || r,
    i = r.parentNode,
    l = o.nextSibling;
  E.innerHTML = t || 0 === t ? `${t}` : "<!>";
  let f = E.content;
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), i.insertBefore(f, r);
  let u = r;
  for (; u !== l; ) {
    let e = u.nextSibling;
    u.remove(), (u = e);
  }
}
function I(e, t, n) {
  let r = e[n],
    o = e[n + "-"],
    i = e[t];
  if (o) for (let e in o) e in r || (i[e] = void 0);
  for (let e in r) i[e] = r[e];
  e[n + "-"] = r;
}
function T(e, t, n) {
  let r = e[t];
  r
    ? (Object.assign(r, n), r.onUpdate?.())
    : ((e[t] = n),
      n.onMount?.(),
      (s(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var j = {},
  O = {},
  q = {};
function R(e, t) {
  let n = e + "#";
  return (e, r) => {
    r !== j && void 0 === e[n] && t(e, r);
  };
}
function D(e, t) {
  let n = e + "#";
  return (r, o) => {
    if (o !== j && o !== O && o !== q) {
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
function L(e, t, n) {
  let r = e + "#";
  return (o, i) => {
    if (i === j) 1 === (o[r] = (o[r] ?? 0) + 1) && n?.(o, j);
    else if (i !== q) {
      let l = void 0 !== o[r];
      1 === (o[r] ||= 1) &&
        (i === O || (l && o[e] === i)
          ? n?.(o, O)
          : ((o[e] = i), t?.(o, i), n?.(o, q))),
        o[r]--;
    }
  };
}
var W = 0;
function z(e, t, n) {
  let r = "?" + W++,
    o = r + "#";
  return (i, l) => {
    l === j
      ? 1 === (i[o] = (i[o] ?? 0) + 1) && n?.(i, j)
      : void 0 === i[o]
        ? ((i[o] = e - 1), (i[r] = !0))
        : 0 == --i[o]
          ? l === q || i[r]
            ? ((i[r] = !1), t(i, 0), n?.(i, q))
            : n?.(i, O)
          : (i[r] ||= l === q);
  };
}
var P = (e) => e._;
function F(e, t, n, r) {
  let o = "?" + W++,
    i = o + 1,
    l = n || P,
    f = "function" == typeof e ? e : () => e;
  return (e, n) => {
    if (n === j) 1 === (e[i] = (e[i] ?? 0) + 1) && r?.(e, j);
    else {
      let u, a;
      if (void 0 === e[i]) {
        (u = l(e)), (a = f(e));
        let t = u[a + "#"],
          r = void 0 === t ? !u.z : 0 === t;
        (e[i] = r ? 1 : 2), (n = q);
      }
      0 == --e[i]
        ? n === q || e[o]
          ? ((e[o] = !1), (u ??= l(e)), (a ??= f(e)), t?.(e, u[a]), r?.(e, q))
          : r?.(e, O)
        : (e[o] ||= n === q);
    }
  };
}
function H(e, t, n, r) {
  let o = n || P,
    l = "function" == typeof e ? e : () => e,
    f = F(l, t, o, r);
  return (
    (f.e = (e) => {
      let t = o(e),
        n = l(e) + "*";
      (t[n] ??= new Set()), t[n].add(i(e, f));
    }),
    (f.h = (e) => {
      let t = o(e),
        n = l(e) + "*";
      t[n]?.delete(i(e, f));
    }),
    f
  );
}
function J(e, t) {
  let n = (n, r) => {
    let o = n[t];
    for (let t of e) t(o, r);
  };
  return (
    (n.e = (n) => {
      let r = n[t];
      for (let t of e) t.e?.(r);
    }),
    (n.h = (n) => {
      let r = n[t];
      for (let t of e) t.h?.(r);
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
function Z(e, t, n) {
  e[t]["/"] = (t) => n(e, t);
}
var G = (e, t) => e["/"]?.(t),
  K = (e, t, n) => {
    let r = e?.c;
    if (r) for (let e of r) e(t, n);
  },
  Q = new WeakMap();
function V({ $global: e }) {
  let t = Q.get(e) || 0;
  return Q.set(e, t + 1), "c" + e.runtimeId + e.renderId + t.toString(36);
}
function X(e, t) {
  return (n, r) => {
    t(n[e], r);
  };
}
function Y(e) {
  return (t, n) => {
    for (let r of e) r(t, n);
  };
}
var ee = document.createTreeWalker(document);
function te(e) {
  let t = e.length;
  for (; e.charCodeAt(--t) > 47; );
  return e.slice(0, t + 1);
}
function ne(e, t, n) {
  (ee.currentNode = e),
    re(t, n, 0),
    (ee.currentNode = document.documentElement);
}
function re(t, n, r) {
  let o,
    i = 0,
    l = 0,
    f = 0;
  for (; (o = t.charCodeAt(r++)); )
    if (((l = i), (i = 0), o >= 117)) i = 10 * l + o - 117;
    else if (o >= 107) {
      for (o = 10 * l + o - 107; o--; ) ee.parentNode();
      ee.nextSibling();
    } else if (o >= 97)
      for (o = 10 * l + o - 97; o--; ) !ee.nextSibling() && ee.nextNode();
    else if (o >= 67) for (o = 20 * l + o - 67; o--; ) ee.nextNode();
    else if (47 === o) r = re(t, (n[f++] = e(n.$global)), r);
    else {
      if (38 === o) return r;
      if (32 === o) n[f++] = ee.currentNode;
      else {
        let e = (n[f++] = document.createTextNode("")),
          t = ee.currentNode,
          r = t.parentNode;
        33 === o
          ? r.insertBefore(e, t)
          : (35 === o ? r.insertBefore(e, t.nextSibling) : r.replaceChild(e, t),
            (ee.currentNode = e));
      }
    }
  return r;
}
function oe(t, n, r) {
  let o = e(n);
  if (((o._ = t.l || r), (o.A = t), ie(t, o), t.c)) for (let e of t.c) e.e?.(o);
  return o;
}
function ie(e, t) {
  let n = "string" == typeof e ? document.createElement(e) : e.j();
  return (
    ne(11 === n.nodeType ? n.firstChild : n, e.n ?? " ", t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.o && e.o(t),
    n
  );
}
function le(e, t, n) {
  return (r, i) => {
    let l = r[e + "("];
    if (!l || l === t || i === q) return;
    let f = r[e + "!"];
    if (i === j || i === O) return l.d?.(f, i);
    if ("string" == typeof l) k(f, 0, i()), ge(f, 0, t ? o(r, t) : null);
    else if (((l = l.default ? l.default._ : l._ || l), l.d)) {
      let e = i();
      l.d(f, n ? e : [t ? { ...e, renderBody: o(r, t) } : e]);
    }
  };
}
function fe(e, t, n, r, o = 0, i) {
  return {
    p: e,
    n: t && te(t),
    o: n,
    j: ue,
    c: new Set(r),
    B: o,
    q: void 0,
    d: i,
    l: void 0,
  };
}
function ue() {
  let e = this.q;
  if (!e) {
    let t = this.n,
      n = t && t.length < 4 && 32 !== t.charCodeAt(t.length - 1);
    this.q = e = (function (e, t) {
      let n;
      ce.innerHTML = e;
      let r = ce.content;
      return (
        t || (n = r.firstChild) !== r.lastChild || (n && 8 === n.nodeType)
          ? ((n = ae.createDocumentFragment()), n.appendChild(r))
          : n || (n = ae.createTextNode("")),
        n
      );
    })(this.p, n);
  }
  return e.cloneNode(!0);
}
var ae = document,
  ce = ae.createElement("template");
var se = function (e, t, r) {
  let o = e + "(",
    i = e + "!";
  return (l, f) => {
    if (f === q) return;
    let c = l[o] || null,
      s = f;
    if (f !== j && f !== O) {
      let r = f ? f._ || f.renderBody || f : null;
      r !== c
        ? ((c = l[o] = r),
          (function (e, t, r) {
            let o,
              i = e[t + "!"];
            r
              ? ((o = e[t + "!"] = oe(r, e.$global, e)), (i = i || n(e[t])))
              : ((o = n(e[t])), (e[t + "!"] = void 0)),
              a(o, i.a.parentNode, i.a),
              u(i);
          })(l, e, r),
          t?.(l),
          (s = q))
        : (s = O);
    }
    r?.(l, s), K(c, l[i], s);
  };
};
function de(e, t) {
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
var he = function (e, t, n) {
  let r = e + "(",
    o = e + "!";
  return (i, l) => {
    if (l === q) return;
    let f = i[r] || null,
      u = l;
    if (l !== j && l !== O) {
      let n = l ? l._ || l.renderBody || l : null;
      n !== f ? ((f = i[r] = n), ge(i, e, n), t?.(i), (u = q)) : (u = O);
    }
    n?.(i, u), K(f, i[o], u);
  };
};
function ge(e, t, n) {
  let r = e[t + "!"],
    o = e[t];
  if (((o.textContent = ""), n)) {
    a((e[t + "!"] = oe(n, e.$global, e)), o, null);
  }
  r && l(r);
}
var pe = new Map([[Symbol(), n(void 0)]]),
  be = [n(void 0)],
  ve = new Map(),
  we = [];
function ye(e, t) {
  return xe(e, t, (e, t) => {
    let [n, r = Se] = e,
      o = 0;
    for (let e of n) t(r(e, o), [e, o, n]), o++;
  });
}
function me(e, t) {
  return xe(e, t, (e, t) => {
    let [n, r = Ne] = e;
    for (let e in n) {
      let o = n[e];
      t(r(e, o), [e, o, n]);
    }
  });
}
function Ce(e, t) {
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
  return (c, s) => {
    if (s === q) return;
    if (s === j || s === O) {
      for (let t of c[o] ?? c[e + "("].values()) {
        f?.(t, s);
        for (let e of i) e(t, s);
      }
      return;
    }
    let h,
      g,
      p,
      b,
      v = c[e],
      w = 8 === v.nodeType || 3 === v.nodeType,
      y = c[e + "("] || (w ? pe : ve),
      m = c[e + "!"] || Array.from(y.values()),
      C = !0;
    if (
      (r(s, (e, n) => {
        let r = y.get(e),
          o = O;
        if ((r || ((r = oe(t, c.$global, c)), (o = q)), f && f(r, n), i))
          for (let e of i) e(r, o);
        h ? (h.set(e, r), g.push(r)) : ((h = new Map([[e, r]])), (g = [r]));
      }),
      !h)
    )
      if (w) (h = pe), (g = be), n(v);
      else {
        if (t.B) for (let e = 0; e < m.length; e++) l(m[e]);
        (v.textContent = ""), (h = ve), (g = we), (C = !1);
      }
    if (C) {
      if (w) {
        y === pe && n(v);
        let e = m[m.length - 1];
        (p = e.b.nextSibling), (b = e.a.parentNode);
      } else (p = null), (b = v);
      !(function (e, t, n, r) {
        let o,
          i,
          l,
          f,
          c,
          s,
          h = 0,
          g = 0,
          p = t.length - 1,
          b = n.length - 1,
          v = t[h],
          w = n[g],
          y = t[p],
          m = n[b];
        e: {
          for (; v === w; ) {
            if ((++h, ++g, h > p || g > b)) break e;
            (v = t[h]), (w = n[g]);
          }
          for (; y === m; ) {
            if ((--p, --b, h > p || g > b)) break e;
            (y = t[p]), (m = n[b]);
          }
        }
        if (h > p) {
          if (g <= b) {
            (l = b + 1), (f = l < n.length ? n[l].a : r);
            do {
              a(n[g++], e, f);
            } while (g <= b);
          }
        } else if (g > b)
          do {
            u(t[h++]);
          } while (h <= p);
        else {
          let v = p - h + 1,
            w = b - g + 1,
            y = t,
            m = new Array(w);
          for (o = 0; o < w; ++o) m[o] = -1;
          let C = 0,
            x = 0,
            $ = new Map();
          for (i = g; i <= b; ++i) $.set(n[i], i);
          for (o = h; o <= p && x < w; ++o)
            (c = t[o]),
              (i = $.get(c)),
              void 0 !== i &&
                ((C = C > i ? d : i),
                ++x,
                (s = n[i]),
                (m[i - g] = o),
                (y[o] = null));
          if (v === t.length && 0 === x) {
            for (; g < w; ++g) a(n[g], e, r);
            for (; h < v; ++h) u(t[h]);
          } else {
            for (o = v - x; o > 0; ) (c = y[h++]), null !== c && (u(c), o--);
            if (C === d) {
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
              })(m);
              for (i = t.length - 1, l = n.length, o = w - 1; o >= 0; --o)
                -1 === m[o] || i < 0 || o !== t[i]
                  ? ((C = o + g),
                    (s = n[C++]),
                    (f = C < l ? n[C].a : r),
                    a(s, e, f))
                  : --i;
            } else if (x !== w)
              for (l = n.length, o = w - 1; o >= 0; --o)
                -1 === m[o] &&
                  ((C = o + g),
                  (s = n[C++]),
                  (f = C < l ? n[C].a : r),
                  a(s, e, f));
          }
        }
      })(b, m, g, p);
    }
    (c[e + "("] = h), (c[e + "!"] = g);
  };
}
function $e(e, t) {
  let n = t + "!";
  return (r, o) => {
    let i = r[n] ?? r[t + "("]?.values() ?? [];
    for (let t of i) e(t, o);
  };
}
function Se(e, t) {
  return t;
}
function Ne(e) {
  return e;
}
var Me,
  _e = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (Me = !1), Oe();
      }),
      t
    );
  })();
function ke() {
  Oe(), requestAnimationFrame(Ae);
}
function Ae() {
  _e.postMessage(0);
}
var Ee = [],
  Be = [];
function Ie(e, t, n, r) {
  return n ? (n(r), r) : Te(e, t, r);
}
function Te(e, t, n) {
  return Me || ((Me = !0), queueMicrotask(ke)), t(e, j), Ee.push(e, t, n), n;
}
function je(e, t) {
  Be.push(e, t);
}
function Oe() {
  try {
    De();
  } finally {
    Ee = [];
  }
  try {
    Re();
  } finally {
    Be = [];
  }
}
function qe(e) {
  let t = Ee,
    n = Be,
    r = (Be = []);
  Ee = [];
  try {
    e(), De();
  } finally {
    (Ee = t), (Be = n);
  }
  return r;
}
function Re(e = Be) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function De() {
  for (let e = 0; e < Ee.length; e += 3) {
    let t = Ee[e + 0];
    (0, Ee[e + 1])(t, Ee[e + 2]);
  }
}
var Le = {},
  We = class {
    s = [];
    t = {};
    C = { _: Le };
    constructor(e, t, n) {
      (this.D = e), (this.E = t), (this.u = n), (this.x = e[n]), this.y();
    }
    w() {
      this.x.w(), this.y();
    }
    y() {
      let e = this.x,
        t = this.C,
        n = this.t,
        r = e.v;
      if (r.length) {
        let t = e.i.length;
        e.v = [];
        for (let e of r) {
          let r = e.data,
            o = r[t],
            i = parseInt(r.slice(t + 1)),
            l = (n[i] ??= {}),
            f = r.slice(r.indexOf(" ") + 1);
          if ("*" === o) l[f] = e.previousSibling;
          else if ("[" === o) this.s.push(this.f), (this.f = i), (l.a = e);
          else if ("]" === o) {
            if (((l[f] = e), i < this.f)) {
              let t = n[this.f],
                r = e.parentNode,
                o = t.a;
              r !== o.parentNode && r.prepend(o),
                (t.b = e.previousSibling),
                (this.f = this.s.pop());
            }
          } else if ("|" === o) {
            l[parseInt(f)] = e;
            let t = JSON.parse("[" + f.slice(f.indexOf(" ") + 1) + "]"),
              r = e;
            for (let e = t.length - 1; e >= 0; e--) {
              let o = (n[t[e]] ??= {});
              for (; 8 === (r = r.previousSibling).nodeType; );
              o.a = o.b = r;
            }
          }
        }
      }
      let o = e.r;
      if (o) {
        e.r = [];
        let r = o.length,
          i = 0;
        for (; i < r; ) {
          let e = o[i++];
          if ("function" == typeof e) {
            let r = e(t),
              { $global: o } = n;
            o ||
              ((n.$global = o = r.$ || {}),
              (o.runtimeId = this.E),
              (o.renderId = this.u));
            for (let e in r)
              if ("$" !== e) {
                let t = r[e],
                  i = n[e];
                (t.$global = o), i !== t && (n[e] = Object.assign(t, i));
              }
          } else
            i === r || "string" != typeof o[i]
              ? delete this.D[this.u]
              : Le[o[i++]](n[e]);
        }
      }
    }
  };
function ze(e, t) {
  return (Le[e] = t), t;
}
function Pe(e, t) {
  return (Le[e] = (e) => (n) => t(e, n)), t;
}
function Fe(e, t) {
  return (Le[e] = (e) => o(e, t)), t;
}
function He(e = "M") {
  let t,
    n = (r) => (n[r] = t[r] = new We(t, e, r));
  function r(r) {
    t = r;
    for (let e in r) n(e);
    Object.defineProperty(window, e, { configurable: !0, value: n });
  }
  window[e]
    ? r(window[e])
    : Object.defineProperty(window, e, { configurable: !0, set: r });
}
function Je(e, t) {
  return ze(e, t.e), t;
}
var Ue = new Map(),
  Ze = {
    patchConditionals: function (e) {
      (se = e(se)), (he = e(he));
    },
    queueEffect: je,
    init() {
      ze("$C_s", (e) => {
        Ue.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      ze("$C_r", e);
    },
    isOp: (e) => e === j || e === O || e === q,
    isRenderer: (e) => void 0 !== e.j,
    getStartNode: (e) => e.a,
    setScopeNodes(e, t, n) {
      (e.a = t), (e.b = n);
    },
    runComponentEffects() {
      Re(this.effects);
    },
    resolveRegistered: (e, { runtimeId: t, componentIdPrefix: n }) =>
      Array.isArray(e) && "string" == typeof e[0]
        ? (function (e, t) {
            let n = Le[e];
            return t && n ? (n.p ? o(t, n) : n(t)) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.t[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = fe("", void 0, e, void 0, 1, n);
      return (r.j = t), r;
    },
    render(e, t, n, r) {
      let o = t.scope;
      o || ((o = Ue.get(t.id)), o && ((t.scope = o), Ue.delete(t.id)));
      let i = n.d || Ge,
        l = !1;
      if (
        ((t.effects = qe(() => {
          if (o) i(o, j), (l = !0);
          else {
            o = t.scope = oe(n, e.global);
            let r = n.c;
            if (r) for (let e of r) e(t.scope, O);
          }
          i(o, r);
        })),
        !l)
      )
        return o.a === o.b ? o.a : o.a.parentNode;
    },
  };
function Ge() {}
var Ke = (e, t) => ze(t, new Qe(e)),
  Qe = class {
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
        a = qe(() => {
          (o = e(l)), (i = ie(this._, o)), f && f(o, [t]);
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
        Re(a),
        {
          update: (e) => {
            f &&
              (function (e) {
                let t = Ee,
                  n = Be;
                (Ee = []), (Be = []);
                try {
                  e(), De(), (Ee = t), Re();
                } finally {
                  (Ee = t), (Be = n);
                }
              })(() => {
                f(o, j), f(o, [e]);
              });
          },
          destroy: () => {
            u(o);
          },
        }
      );
    }
  };
export {
  $ as attr,
  k as attrs,
  A as attrsEvents,
  i as bindFunction,
  o as bindRenderer,
  D as changeHandler,
  J as childClosures,
  N as classAttr,
  F as closure,
  Ze as compat,
  se as conditional,
  he as conditionalOnlyChild,
  fe as createRenderer,
  e as createScope,
  oe as createScopeWithRenderer,
  Ke as createTemplate,
  _ as data,
  H as dynamicClosure,
  U as dynamicSubscribers,
  le as dynamicTagAttrs,
  s as getAbortSignal,
  B as html,
  X as inChild,
  de as inConditionalScope,
  $e as inLoopScope,
  He as init,
  R as initValue,
  z as intersection,
  Y as intersections,
  T as lifecycle,
  me as loopIn,
  ye as loopOf,
  Ce as loopTo,
  V as nextTagId,
  m as on,
  qe as prepare,
  I as props,
  Ie as queueControllableSource,
  je as queueEffect,
  Te as queueSource,
  ze as register,
  Pe as registerBoundSignal,
  Fe as registerRenderer,
  Je as registerSubscriber,
  c as resetAbortSignal,
  Oe as run,
  Re as runEffects,
  Z as setTagVar,
  M as styleAttr,
  G as tagVarSignal,
  L as value,
};
