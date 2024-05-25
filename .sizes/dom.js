function e(e) {
  return { p: 1, $global: e };
}
var t = e({});
function n(e) {
  return (t.a = t.b = e), t;
}
function r(e) {
  return (t, n) => {
    t.i ??= new Map();
    let r = t.i.get(n);
    return r || ((r = e(t, n)), t.i.set(n, r)), r;
  };
}
var o = r((e, t) => t && { ...t, j: e }),
  l = r((e, t) =>
    t.length
      ? function (...n) {
          return t.call(this, e, ...n);
        }
      : function () {
          return t.call(this, e);
        },
  );
function i(e) {
  f(e), e._?.g?.delete(e);
  let t = e.q?.c;
  if (t) for (let n of t) n.h?.(e);
  return e;
}
function f(e) {
  let t = e.g;
  if (t) for (let e of t) f(e);
  let n = e.k;
  if (n) for (let e of n.values()) e.abort();
}
function u(e) {
  i(e);
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
var c = 2147483647;
function s(e, t) {
  return t ? e : "";
}
var d = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function g(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !d.test(e) ? t + "px" : t}`
    : "";
}
function p(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          o = "";
        if (Array.isArray(e))
          for (let l of e) {
            let e = p(l, t, n);
            "" !== e && ((r += o + e), (o = t));
          }
        else
          for (let l in e) {
            let i = n(l, e[l]);
            "" !== i && ((r += o + i), (o = t));
          }
        return r;
      }
  }
  return "";
}
function h(e, t) {
  let n = e.k;
  if (n) {
    let e = n.get(t);
    e && (e.abort(), n.delete(t));
  }
}
function b(e, t) {
  let n = (e.k ??= new Map()),
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
var v = new Map(),
  y = new WeakMap(),
  m = { capture: !0 };
function w(e, t, n) {
  let r = v.get(t);
  r || v.set(t, (r = new WeakMap())),
    r.has(e) ||
      (function (e, t) {
        let n = e.getRootNode(),
          r = y.get(n);
        r || y.set(n, (r = new Set())),
          r.has(t) || (r.add(t), n.addEventListener(t, N, m));
      })(e, t),
    r.set(e, n || void 0);
}
function N(e) {
  let t = e.target;
  if (t) {
    let n = v.get(e.type);
    if ((n.get(t)?.(e, t), e.bubbles))
      for (; (t = t.parentElement) && !e.cancelBubble; ) n.get(t)?.(e, t);
  }
}
var S = /^on[A-Z-]/;
function x(e, t, n) {
  C(
    e,
    t,
    (function (e) {
      if (e || 0 === e) return !0 === e ? "" : e + "";
    })(n),
  );
}
function C(e, t, n) {
  void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function k(e, t) {
  C(
    e,
    "class",
    (function (e) {
      return p(e, " ", s);
    })(t) || void 0,
  );
}
function M(e, t) {
  C(
    e,
    "style",
    (function (e) {
      return p(e, ";", g);
    })(t) || void 0,
  );
}
function $(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
function A(e, t, n) {
  let r,
    o = e[t];
  for (let { name: e } of o.attributes) (n && e in n) || o.removeAttribute(e);
  for (let e in n) {
    let t = n[e];
    switch (e) {
      case "class":
        k(o, t);
        break;
      case "style":
        M(o, t);
        break;
      case "renderBody":
        break;
      default:
        S.test(e)
          ? ((r ??= {})["-" === e[2] ? e.slice(3) : e.slice(2).toLowerCase()] =
              t)
          : x(o, e, t);
    }
  }
  e[t + "~"] = r;
}
function T(e, t) {
  let n = e[t],
    r = e[t + "~"];
  for (let e in r) w(n, e, r[e]);
}
var B = document.createElement("template");
function _(e, t, n) {
  let r = e[n],
    o = e[n + "-"] || r,
    l = r.parentNode,
    i = o.nextSibling;
  B.innerHTML = t || 0 === t ? `${t}` : "<!>";
  let f = B.content;
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), l.insertBefore(f, r);
  let u = r;
  for (; u !== i; ) {
    let e = u.nextSibling;
    u.remove(), (u = e);
  }
}
function E(e, t, n) {
  let r = e[n],
    o = e[n + "-"],
    l = e[t];
  if (o) for (let e in o) e in r || (l[e] = void 0);
  for (let e in r) l[e] = r[e];
  e[n + "-"] = r;
}
function j(e, t, n) {
  let r = e[t];
  r
    ? (Object.assign(r, n), r.onUpdate?.())
    : ((e[t] = n),
      n.onMount?.(),
      (b(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var O = {},
  q = {},
  I = {};
function W(e, t) {
  let n = e + "#";
  return (e, r) => {
    r !== O && void 0 === e[n] && t(e, r);
  };
}
function L(e, t, n) {
  let r = e + "#";
  return (o, l) => {
    if (l === O) 1 === (o[r] = (o[r] ?? 0) + 1) && n?.(o, O);
    else if (l !== I) {
      let i = void 0 !== o[r];
      1 === (o[r] ||= 1) &&
        (l === q || (i && o[e] === l)
          ? n?.(o, q)
          : ((o[e] = l), t?.(o, l), n?.(o, I))),
        o[r]--;
    }
  };
}
var R = 0;
function D(e, t, n) {
  let r = "?" + R++,
    o = r + "#";
  return (l, i) => {
    i === O
      ? 1 === (l[o] = (l[o] ?? 0) + 1) && n?.(l, O)
      : void 0 === l[o]
        ? ((l[o] = e - 1), (l[r] = !0))
        : 0 == --l[o]
          ? i === I || l[r]
            ? ((l[r] = !1), t(l, 0), n?.(l, I))
            : n?.(l, q)
          : (l[r] ||= i === I);
  };
}
var F = (e) => e._;
function H(e, t, n, r) {
  let o = "?" + R++,
    l = o + 1,
    i = n || F,
    f = "function" == typeof e ? e : () => e;
  return (e, n) => {
    if (n === O) 1 === (e[l] = (e[l] ?? 0) + 1) && r?.(e, O);
    else {
      let u, a;
      if (void 0 === e[l]) {
        (u = i(e)), (a = f(e));
        let t = u[a + "#"],
          r = void 0 === t ? !u.p : 0 === t;
        (e[l] = r ? 1 : 2), (n = I);
      }
      0 == --e[l]
        ? n === I || e[o]
          ? ((e[o] = !1), (u ??= i(e)), (a ??= f(e)), t?.(e, u[a]), r?.(e, I))
          : r?.(e, q)
        : (e[o] ||= n === I);
    }
  };
}
function z(e, t, n, r) {
  let o = n || F,
    i = "function" == typeof e ? e : () => e,
    f = H(i, t, o, r);
  return (
    (f.e = (e) => {
      let t = o(e),
        n = i(e) + "*";
      (t[n] ??= new Set()), t[n].add(l(e, f));
    }),
    (f.h = (e) => {
      let t = o(e),
        n = i(e) + "*";
      t[n]?.delete(l(e, f));
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
function V(e, t, n) {
  e[t]["/"] = (t) => n(e, t);
}
var Z = (e, t) => e["/"]?.(t),
  G = (e, t, n) => {
    let r = e?.c;
    if (r) for (let e of r) e(t, n);
  },
  K = 0;
function P() {
  return "c" + K++;
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
var Y = document.createTreeWalker(document);
function ee(e) {
  let t = e.length;
  for (; e.charCodeAt(--t) > 47; );
  return e.slice(0, t + 1);
}
function te(e, t, n) {
  (Y.currentNode = e), ne(t, n, 0), (Y.currentNode = document.documentElement);
}
function ne(t, n, r) {
  let o,
    l = 0,
    i = 0,
    f = 0;
  for (; (o = t.charCodeAt(r++)); )
    if (((i = l), (l = 0), o >= 117)) l = 10 * i + o - 117;
    else if (o >= 107) {
      for (o = 10 * i + o - 107; o--; ) Y.parentNode();
      Y.nextSibling();
    } else if (o >= 97)
      for (o = 10 * i + o - 97; o--; ) !Y.nextSibling() && Y.nextNode();
    else if (o >= 67) for (o = 20 * i + o - 67; o--; ) Y.nextNode();
    else if (47 === o) r = ne(t, (n[f++] = e(n.$global)), r);
    else {
      if (38 === o) return r;
      if (32 === o) n[f++] = Y.currentNode;
      else {
        let e = (n[f++] = document.createTextNode("")),
          t = Y.currentNode,
          r = t.parentNode;
        33 === o
          ? r.insertBefore(e, t)
          : (35 === o ? r.insertBefore(e, t.nextSibling) : r.replaceChild(e, t),
            (Y.currentNode = e));
      }
    }
  return r;
}
function re(t, n, r) {
  let o = e(n);
  if (((o._ = t.j || r), (o.q = t), oe(t, o), t.c)) for (let e of t.c) e.e?.(o);
  return o;
}
function oe(e, t) {
  let n = "string" == typeof e ? document.createElement(e) : e.f();
  return (
    te(11 === n.nodeType ? n.firstChild : n, e.l ?? " ", t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.m && e.m(t),
    n
  );
}
function le(e, t, n) {
  return (r, l) => {
    let i = r[e + "("];
    if (!i || i === t || l === I) return;
    let f = r[e + "!"];
    if (l === O || l === q) return i.d?.(f, l);
    if ("string" == typeof i) A(f, 0, l()), ge(f, 0, t && o(r, t));
    else if (i.d) {
      let e = l();
      i.d(f, n ? e : [t ? { ...e, renderBody: o(r, t) } : e]);
    }
  };
}
function ie(e, t, n, r, o = 0, l) {
  return {
    n: e,
    l: t && ee(t),
    m: n,
    f: fe,
    c: new Set(r),
    r: o,
    o: void 0,
    d: l,
    j: void 0,
  };
}
function fe() {
  let e = this.o;
  if (!e) {
    let t = this.l,
      n = t && t.length < 4 && 32 !== t.charCodeAt(t.length - 1);
    this.o = e = (function (e, t) {
      let n;
      ae.innerHTML = e;
      let r = ae.content;
      return (
        t || (n = r.firstChild) !== r.lastChild || (n && 8 === n.nodeType)
          ? ((n = ue.createDocumentFragment()), n.appendChild(r))
          : n || (n = ue.createTextNode("")),
        n
      );
    })(this.n, n);
  }
  return e.cloneNode(!0);
}
var ue = document,
  ae = ue.createElement("template");
var ce = function (e, t, r) {
  let o = e + "(",
    l = e + "!";
  return (i, f) => {
    if (f === I) return;
    let c = i[o],
      s = f;
    if (f !== O && f !== q) {
      let r = f ? f._ || f.renderBody || f : void 0;
      r !== c
        ? ((c = i[o] = r),
          (function (e, t, r) {
            let o,
              l = e[t + "!"];
            r
              ? ((o = e[t + "!"] = re(r, e.$global, e)), (l = l || n(e[t])))
              : ((o = n(e[t])), (e[t + "!"] = void 0)),
              a(o, l.a.parentNode, l.a),
              u(l);
          })(i, e, r),
          t?.(i),
          (s = I))
        : (s = q);
    }
    r?.(i, s), G(c, i[l], s);
  };
};
function se(e, t) {
  let n = t + "!",
    r = t + "(";
  return (t, o) => {
    let l = t[n];
    if (l) {
      let n = t[r];
      (!n?.c || n.c.has(e)) && e(l, o);
    }
  };
}
var de = function (e, t, n) {
  let r = e + "(",
    o = e + "!";
  return (l, i) => {
    if (i === I) return;
    let f = l[r],
      u = i;
    if (i !== O && i !== q) {
      let n = i ? i._ || i.renderBody || i : void 0;
      n !== f ? ((f = l[r] = n), ge(l, e, n), t?.(l), (u = I)) : (u = q);
    }
    n?.(l, u), G(f, l[o], u);
  };
};
function ge(e, t, n) {
  let r = e[t + "!"],
    o = e[t];
  if (((o.textContent = ""), n)) {
    a((e[t + "!"] = re(n, e.$global, e)), o, null);
  }
  r && i(r);
}
var pe = new Map([[Symbol(), n(void 0)]]),
  he = [n(void 0)],
  be = new Map(),
  ve = [];
function ye(e, t) {
  return Ne(e, t, (e, t) => {
    let [n, r = xe] = e,
      o = 0;
    for (let e of n) t(r(e, o), [e, o, n]), o++;
  });
}
function me(e, t) {
  return Ne(e, t, (e, t) => {
    let [n, r = Ce] = e;
    for (let e in n) {
      let o = n[e];
      t(r(e, o), [e, o, n]);
    }
  });
}
function we(e, t) {
  return Ne(e, t, (e, t) => {
    let [n, r = 0, o = 1, l = Ce] = e,
      i = (n - r) / o;
    for (let e = 0; e <= i; e++) {
      let n = r + e * o;
      t(l(n), [n]);
    }
  });
}
function Ne(e, t, r) {
  let o = e + "!",
    l = t.c,
    f = t.d;
  return (s, d) => {
    if (d === I) return;
    if (d === O || d === q) {
      for (let e of s[o]) {
        f?.(e, d);
        for (let t of l) t(e, d);
      }
      return;
    }
    let g,
      p,
      h,
      b,
      v = s[e],
      y = 8 === v.nodeType || 3 === v.nodeType,
      m = s[e + "("] || (y ? pe : be),
      w = s[e + "!"] || Array.from(m.values()),
      N = !0;
    if (
      (r(d, (e, n) => {
        let r = m.get(e),
          o = q;
        if ((r || ((r = re(t, s.$global, s)), (o = I)), f && f(r, n), l))
          for (let e of l) e(r, o);
        g ? (g.set(e, r), p.push(r)) : ((g = new Map([[e, r]])), (p = [r]));
      }),
      !g)
    )
      if (y) (g = pe), (p = he), n(v);
      else {
        if (t.r) for (let e = 0; e < w.length; e++) i(w[e]);
        (v.textContent = ""), (g = be), (p = ve), (N = !1);
      }
    if (N) {
      if (y) {
        m === pe && n(v);
        let e = w[w.length - 1];
        (h = e.b.nextSibling), (b = e.a.parentNode);
      } else (h = null), (b = v);
      !(function (e, t, n, r) {
        let o,
          l,
          i,
          f,
          s,
          d,
          g = 0,
          p = 0,
          h = t.length - 1,
          b = n.length - 1,
          v = t[g],
          y = n[p],
          m = t[h],
          w = n[b];
        e: {
          for (; v === y; ) {
            if ((++g, ++p, g > h || p > b)) break e;
            (v = t[g]), (y = n[p]);
          }
          for (; m === w; ) {
            if ((--h, --b, g > h || p > b)) break e;
            (m = t[h]), (w = n[b]);
          }
        }
        if (g > h) {
          if (p <= b) {
            (i = b + 1), (f = i < n.length ? n[i].a : r);
            do {
              a(n[p++], e, f);
            } while (p <= b);
          }
        } else if (p > b)
          do {
            u(t[g++]);
          } while (g <= h);
        else {
          let v = h - g + 1,
            y = b - p + 1,
            m = t,
            w = new Array(y);
          for (o = 0; o < y; ++o) w[o] = -1;
          let N = 0,
            S = 0,
            x = new Map();
          for (l = p; l <= b; ++l) x.set(n[l], l);
          for (o = g; o <= h && S < y; ++o)
            (s = t[o]),
              (l = x.get(s)),
              void 0 !== l &&
                ((N = N > l ? c : l),
                ++S,
                (d = n[l]),
                (w[l - p] = o),
                (m[o] = null));
          if (v === t.length && 0 === S) {
            for (; p < y; ++p) a(n[p], e, r);
            for (; g < v; ++g) u(t[g]);
          } else {
            for (o = v - S; o > 0; ) (s = m[g++]), null !== s && (u(s), o--);
            if (N === c) {
              let t = (function (e) {
                let t,
                  n,
                  r = e.slice(),
                  o = [];
                o.push(0);
                for (let l = 0, i = e.length; l < i; ++l) {
                  if (-1 === e[l]) continue;
                  let i = o[o.length - 1];
                  if (e[i] < e[l]) (r[l] = i), o.push(l);
                  else {
                    for (t = 0, n = o.length - 1; t < n; ) {
                      let r = ((t + n) / 2) | 0;
                      e[o[r]] < e[l] ? (t = r + 1) : (n = r);
                    }
                    e[l] < e[o[t]] && (t > 0 && (r[l] = o[t - 1]), (o[t] = l));
                  }
                }
                for (t = o.length, n = o[t - 1]; t-- > 0; )
                  (o[t] = n), (n = r[n]);
                return o;
              })(w);
              for (l = t.length - 1, i = n.length, o = y - 1; o >= 0; --o)
                -1 === w[o] || l < 0 || o !== t[l]
                  ? ((N = o + p),
                    (d = n[N++]),
                    (f = N < i ? n[N].a : r),
                    a(d, e, f))
                  : --l;
            } else if (S !== y)
              for (i = n.length, o = y - 1; o >= 0; --o)
                -1 === w[o] &&
                  ((N = o + p),
                  (d = n[N++]),
                  (f = N < i ? n[N].a : r),
                  a(d, e, f));
          }
        }
      })(b, w, p, h);
    }
    (s[e + "("] = g), (s[e + "!"] = p);
  };
}
function Se(e, t) {
  let n = t + "!";
  return (r, o) => {
    let l = r[n] ?? r[t + "("]?.values() ?? [];
    for (let t of l) e(t, o);
  };
}
function xe(e, t) {
  return t;
}
function Ce(e) {
  return e;
}
var ke = {},
  Me = document;
function $e(e, t) {
  return (ke[e] = t), t;
}
function Ae(e, t) {
  return (ke[e] = (e) => (n) => t(e, n)), t;
}
function Te(e, t) {
  return (ke[e] = (e) => o(e, t)), t;
}
var Be = {};
function _e(e = "M") {
  let t,
    n,
    r = e.length,
    o = e + "$h",
    l = window[o],
    i = Me.createTreeWalker(Me, 128),
    f = (e) => Be[e] ?? (Be[e] = {}),
    u = [],
    a = { push: s },
    c = { _: ke };
  if (l) for (let e = 0; e < l.length; e += 2) s(l[e], l[e + 1]);
  else window[o] = a;
  function s(o, l) {
    "loading" !== Me.readyState && (i.currentNode = Me);
    let a = o(c);
    if (a) {
      Be.$global ||= a.$global || {};
      for (let e in a) {
        if ("$global" === e) continue;
        let t = parseInt(e),
          n = a[t],
          r = Be[t];
        (n.$global = a.$global), r !== n && (Be[t] = Object.assign(n, r));
      }
    }
    for (; (n = i.nextNode()); ) {
      let o = n.nodeValue;
      if (o.startsWith(e)) {
        let e = o[r],
          l = parseInt(o.slice(r + 1)),
          i = f(l),
          a = o.slice(o.indexOf(" ") + 1);
        if ("*" === e) i[a] = n.previousSibling;
        else if ("[" === e) u.push(t), (t = l), (i.a = n);
        else if ("]" === e) {
          if (((i[a] = n), l < t)) {
            let e = Be[t],
              r = n.parentNode,
              o = e.a;
            r !== o.parentNode && r.prepend(o),
              (e.b = n.previousSibling),
              (t = u.pop());
          }
        } else if ("|" === e) {
          i[parseInt(a)] = n;
          let e = JSON.parse("[" + a.slice(a.indexOf(" ") + 1) + "]");
          for (let t = e.length - 1; t >= 0; t--) {
            let r = f(e[t]);
            for (; 8 === (n = n.previousSibling).nodeType; );
            r.a = r.b = n;
          }
        }
      }
    }
    for (let e = 0; e < l.length; e += 2) ke[l[e + 1]](Be[l[e]]);
  }
}
function Ee(e, t) {
  return $e(e, t.e), t;
}
var je,
  Oe = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (je = !1), Fe();
      }),
      t
    );
  })();
function qe() {
  Fe(), requestAnimationFrame(Ie);
}
function Ie() {
  Oe.postMessage(0);
}
var We = [],
  Le = [];
function Re(e, t, n) {
  return je || ((je = !0), queueMicrotask(qe)), t(e, O), We.push(e, t, n), n;
}
function De(e, t) {
  Le.push(e, t);
}
function Fe() {
  try {
    Je();
  } finally {
    We = [];
  }
  try {
    ze();
  } finally {
    Le = [];
  }
}
function He(e) {
  let t = We,
    n = Le,
    r = (Le = []);
  We = [];
  try {
    e(), Je();
  } finally {
    (We = t), (Le = n);
  }
  return r;
}
function ze(e = Le) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function Je() {
  for (let e = 0; e < We.length; e += 3) {
    let t = We[e + 0];
    (0, We[e + 1])(t, We[e + 2]);
  }
}
var Ue = (e, t) => $e(t, new Ve(e)),
  Ve = class {
    _;
    constructor(e) {
      this._ = e;
    }
    mount(t = {}, n, r) {
      let o,
        l,
        { $global: i = {}, ...f } = t,
        a = this._.d,
        c = He(() => {
          (o = e(i)), (l = oe(this._, o)), a && a(o, [f]);
        });
      switch (r) {
        case "afterbegin":
          n.insertBefore(l, n.firstChild);
          break;
        case "afterend":
          n.parentElement.insertBefore(l, n.nextSibling);
          break;
        case "beforebegin":
          n.parentElement.insertBefore(l, n);
          break;
        default:
          n.appendChild(l);
      }
      return (
        ze(c),
        {
          update: (e) => {
            a &&
              (function (e) {
                let t = We,
                  n = Le;
                (We = []), (Le = []);
                try {
                  e(), Je(), (We = t), ze();
                } finally {
                  (We = t), (Le = n);
                }
              })(() => {
                a(o, O), a(o, [e]);
              });
          },
          destroy: () => {
            u(o);
          },
        }
      );
    }
  },
  Ze = {
    register: $e,
    patchConditionals: function (e) {
      (ce = e(ce)), (de = e(de));
    },
    queueEffect: De,
    isOp: (e) => e === O || e === q || e === I,
    isRenderer: (e) => void 0 !== e.f,
    getStartNode: (e) => e.a,
    setScopeNodes(e, t, n) {
      (e.a = t), (e.b = n);
    },
    runComponentEffects() {
      ze(this.effects);
    },
    resolveRenderer(e) {
      if (e && "object" == typeof e) {
        if (Array.isArray(e)) {
          let [t, n] = e;
          return (function (e, t) {
            let n = ke[e];
            return t && n ? (n.n ? o(t, n) : n(t)) : n;
          })(t, Be[n]);
        }
        if (e.f) return e;
      }
    },
    createRenderer(e, t, n) {
      let r = ie("", void 0, e, void 0, 1, n);
      return (r.f = t), r;
    },
    render(e, t, n, r, o) {
      let l = r.d || Ge,
        i = !1,
        f = e ? (n.scope = Be[t.global.componentIdToScopeId[n.id]]) : n.scope;
      if (
        ((n.effects = He(() => {
          if (f) l(f, O), (i = !0);
          else {
            f = n.scope = re(r, t.global);
            let e = r.c;
            if (e) for (let t of e) t(n.scope, q);
          }
          l(f, o);
        })),
        !i)
      )
        return f.a === f.b ? f.a : f.a.parentNode;
    },
  };
function Ge() {}
export {
  x as attr,
  A as attrs,
  T as attrsEvents,
  l as bindFunction,
  o as bindRenderer,
  J as childClosures,
  k as classAttr,
  H as closure,
  Ze as compat,
  ce as conditional,
  de as conditionalOnlyChild,
  ie as createRenderer,
  e as createScope,
  re as createScopeWithRenderer,
  Ue as createTemplate,
  $ as data,
  z as dynamicClosure,
  U as dynamicSubscribers,
  le as dynamicTagAttrs,
  b as getAbortSignal,
  _ as html,
  Q as inChild,
  se as inConditionalScope,
  Se as inLoopScope,
  _e as init,
  W as initValue,
  D as intersection,
  X as intersections,
  j as lifecycle,
  me as loopIn,
  ye as loopOf,
  we as loopTo,
  P as nextTagId,
  w as on,
  He as prepare,
  E as props,
  De as queueEffect,
  Re as queueSource,
  $e as register,
  Ae as registerBoundSignal,
  Te as registerRenderer,
  Ee as registerSubscriber,
  h as resetAbortSignal,
  Fe as run,
  ze as runEffects,
  Be as scopeLookup,
  V as setTagVar,
  M as styleAttr,
  Z as tagVarSignal,
  L as value,
};
