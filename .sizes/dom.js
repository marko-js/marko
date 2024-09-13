function e(e) {
  return { B: 1, $global: e };
}
var t = e({});
function n(e) {
  return (t.a = t.b = e), t;
}
function r(e) {
  return (t, n) => {
    t.m ??= new Map();
    let r = t.m.get(n);
    return r || ((r = e(t, n)), t.m.set(n, r)), r;
  };
}
var l = r((e, t) => t && { ...t, n: e }),
  o = r((e, t) =>
    t.length
      ? function (...n) {
          return t.call(this, e, ...n);
        }
      : function () {
          return t.call(this, e);
        },
  );
function i(e) {
  f(e), e._?.j?.delete(e);
  let t = e.C?.c;
  if (t) for (let n of t) n.k?.(e);
  return e;
}
function f(e) {
  let t = e.j;
  if (t) for (let e of t) f(e);
  let n = e.o;
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
    l = e.b.nextSibling;
  for (; r !== l; ) {
    let e = r.nextSibling;
    t.insertBefore(r, n), (r = e);
  }
}
var c = 2147483647;
function s(e, t) {
  return t ? e : "";
}
var d = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function h(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !d.test(e) ? t + "px" : t}`
    : "";
}
function g(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          l = "";
        if (Array.isArray(e))
          for (let o of e) {
            let e = g(o, t, n);
            "" !== e && ((r += l + e), (l = t));
          }
        else
          for (let o in e) {
            let i = n(o, e[o]);
            "" !== i && ((r += l + i), (l = t));
          }
        return r;
      }
  }
  return "";
}
function p(e, t) {
  let n = e.o;
  if (n) {
    let e = n.get(t);
    e && (e.abort(), n.delete(t));
  }
}
function v(e, t) {
  let n = (e.o ??= new Map()),
    r = n.get(t);
  return (
    r ||
      ((function (e) {
        let t = e._;
        for (; t && !t.j?.has(e); ) (t.j ||= new Set()).add(e), (t = (e = t)._);
      })(e),
      n.set(t, (r = new AbortController()))),
    r.signal
  );
}
var b = new Map(),
  m = new WeakMap(),
  y = { capture: !0 };
function w(e, t, n) {
  let r = b.get(t);
  r || b.set(t, (r = new WeakMap())),
    r.has(e) ||
      (function (e, t) {
        let n = e.getRootNode(),
          r = m.get(n);
        r || m.set(n, (r = new Set())),
          r.has(t) || (r.add(t), n.addEventListener(t, C, y));
      })(e, t),
    r.set(e, n || void 0);
}
function C(e) {
  let t = e.target;
  if (t) {
    let n = b.get(e.type);
    if ((n.get(t)?.(e, t), e.bubbles))
      for (; (t = t.parentElement) && !e.cancelBubble; ) n.get(t)?.(e, t);
  }
}
var k,
  N = !1,
  S = (e, t, n) => {
    if (N || document.activeElement !== e) t();
    else {
      let r = e.value,
        l = e.selectionStart;
      (N = !0), t(), (N = !1);
      let o = e.value,
        i = $(o, r, l, n?.inputType);
      void 0 !== i && e.setSelectionRange(i, i);
    }
  },
  $ = (e, t, n, r = "") => {
    if (/delete.*Backwards/.test(r) || n !== t.length) {
      let r = t.slice(0, n),
        l = t.slice(n);
      if (e.startsWith(r)) return n;
      if (e.endsWith(l)) return e.length - l.length;
      {
        let t = x(r),
          n = 0,
          l = 0;
        for (; l < t.length; ) x(e[n]) && l++, n++;
        return n;
      }
    }
  },
  x = (e) => e.replace(/[^\p{L}\p{N}]/gu, ""),
  A = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (k = !1), te();
      }),
      t
    );
  })();
function M() {
  te(), requestAnimationFrame(E);
}
function E() {
  A.postMessage(0);
}
var T = {},
  I = {},
  _ = {};
function B(e, t) {
  let n = e + "#";
  return (e, r) => {
    r !== T && void 0 === e[n] && t(e, r);
  };
}
function V(e, t) {
  let n = e + "#";
  return (r, l) => {
    if (l !== T && l !== I && l !== _) {
      if (null != l && "function" != typeof l)
        throw new Error(`Invalid value ${l} for change handler '${e}'`);
      if (void 0 !== r[n]) {
        let t = r[e];
        if (t && !l)
          throw new Error(
            `Change handler '${e}' cannot change from a function to ${l}`,
          );
        if (!t && l)
          throw new Error(
            `Change handler '${e}' cannot change from a nullish to a function`,
          );
      }
    }
    t(r, l);
  };
}
function O(e, t, n) {
  let r = e + "#";
  return (l, o) => {
    if (o === T) 1 === (l[r] = (l[r] ?? 0) + 1) && n?.(l, T);
    else if (o !== _) {
      let i = void 0 !== l[r];
      1 === (l[r] ||= 1) &&
        (o === I || (i && l[e] === o)
          ? n?.(l, I)
          : ((l[e] = o), t?.(l, o), n?.(l, _))),
        l[r]--;
    }
  };
}
var j = 0;
function L(e, t, n) {
  let r = "?" + j++,
    l = r + "#";
  return (o, i) => {
    i === T
      ? 1 === (o[l] = (o[l] ?? 0) + 1) && n?.(o, T)
      : void 0 === o[l]
        ? ((o[l] = e - 1), (o[r] = !0))
        : 0 == --o[l]
          ? i === _ || o[r]
            ? ((o[r] = !1), t(o, 0), n?.(o, _))
            : n?.(o, I)
          : (o[r] ||= i === _);
  };
}
var W = (e) => e._;
function q(e, t, n, r) {
  let l = "?" + j++,
    o = l + 1,
    i = n || W,
    f = "function" == typeof e ? e : () => e;
  return (e, n) => {
    if (n === T) 1 === (e[o] = (e[o] ?? 0) + 1) && r?.(e, T);
    else {
      let u, a;
      if (void 0 === e[o]) {
        (u = i(e)), (a = f(e));
        let t = u[a + "#"],
          r = void 0 === t ? !u.B : 0 === t;
        (e[o] = r ? 1 : 2), (n = _);
      }
      0 == --e[o]
        ? n === _ || e[l]
          ? ((e[l] = !1), (u ??= i(e)), (a ??= f(e)), t?.(e, u[a]), r?.(e, _))
          : r?.(e, I)
        : (e[l] ||= n === _);
    }
  };
}
function D(e, t, n, r) {
  let l = n || W,
    i = "function" == typeof e ? e : () => e,
    f = q(i, t, l, r);
  return (
    (f.g = (e) => {
      let t = l(e),
        n = i(e) + "*";
      (t[n] ??= new Set()), t[n].add(o(e, f));
    }),
    (f.k = (e) => {
      let t = l(e),
        n = i(e) + "*";
      t[n]?.delete(o(e, f));
    }),
    f
  );
}
function R(e, t) {
  let n = (n, r) => {
    let l = n[t];
    for (let t of e) t(l, r);
  };
  return (
    (n.g = (n) => {
      let r = n[t];
      for (let t of e) t.g?.(r);
    }),
    (n.k = (n) => {
      let r = n[t];
      for (let t of e) t.k?.(r);
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
function z(e, t, n) {
  e[t]["/"] = (t) => n(e, t);
}
var F = (e, t) => e["/"]?.(t),
  G = (e, t, n) => {
    let r = e?.c;
    if (r) for (let e of r) e(t, n);
  },
  U = new WeakMap();
function H({ $global: e }) {
  let t = U.get(e) || 0;
  return U.set(e, t + 1), "c" + e.runtimeId + e.renderId + t.toString(36);
}
function J(e, t) {
  return (n, r) => {
    t(n[e], r);
  };
}
function Z(e) {
  return (t, n) => {
    for (let r of e) r(t, n);
  };
}
var K = [],
  Q = [];
function X(e, t, n, r) {
  return n ? (n(r), r) : Y(e, t, r);
}
function Y(e, t, n) {
  return k || ((k = !0), queueMicrotask(M)), t(e, T), K.push(e, t, n), n;
}
function ee(e, t) {
  Q.push(e, t);
}
function te() {
  try {
    oe();
  } finally {
    K = [];
  }
  try {
    le();
  } finally {
    Q = [];
  }
}
function ne(e) {
  let t = K,
    n = Q;
  (K = []), (Q = []);
  try {
    e(), oe(), (K = t), le();
  } finally {
    (K = t), (Q = n);
  }
}
function re(e) {
  let t = K,
    n = Q,
    r = (Q = []);
  K = [];
  try {
    e(), oe();
  } finally {
    (K = t), (Q = n);
  }
  return r;
}
function le(e = Q) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function oe() {
  for (let e = 0; e < K.length; e += 3) {
    let t = K[e + 0];
    (0, K[e + 1])(t, K[e + 2]);
  }
}
var ie = {},
  fe = class {
    p = [];
    q = {};
    D = { _: ie };
    constructor(e, t, n) {
      (this.E = e), (this.F = t), (this.r = n), (this.t = e[n]), this.u();
    }
    w() {
      this.t.w(), this.u();
    }
    u() {
      let e = this.t,
        t = this.D,
        n = this.q,
        r = e.v;
      if (r.length) {
        let t = e.i.length;
        e.v = [];
        for (let e of r) {
          let r = e.data,
            l = r[t],
            o = parseInt(r.slice(t + 1)),
            i = (n[o] ??= {}),
            f = r.slice(r.indexOf(" ") + 1);
          if ("*" === l) i[f] = e.previousSibling;
          else if ("[" === l) this.p.push(this.h), (this.h = o), (i.a = e);
          else if ("]" === l) {
            if (((i[f] = e), o < this.h)) {
              let t = n[this.h],
                r = e.parentNode,
                l = t.a;
              r !== l.parentNode && r.prepend(l),
                (t.b = e.previousSibling),
                (this.h = this.p.pop());
            }
          } else if ("|" === l) {
            i[parseInt(f)] = e;
            let t = JSON.parse("[" + f.slice(f.indexOf(" ") + 1) + "]"),
              r = e;
            for (let e = t.length - 1; e >= 0; e--) {
              let l = (n[t[e]] ??= {});
              for (; 8 === (r = r.previousSibling).nodeType; );
              l.a = l.b = r;
            }
          }
        }
      }
      let l = e.s;
      if (l) {
        e.s = [];
        for (let e of l) {
          let r = e(t),
            { $global: l } = n;
          l ||
            ((n.$global = l = r.$ || {}),
            (l.runtimeId = this.F),
            (l.renderId = this.r));
          for (let e in r)
            if ("$" !== e) {
              let t = r[e],
                o = n[e];
              (t.$global = l), o !== t && (n[e] = Object.assign(t, o));
            }
        }
      }
      let o = e.e;
      if (o) {
        e.e = [];
        try {
          ue = !0;
          for (let e = 0; e < o.length; e += 2) ie[o[e + 1]](n[o[e]]);
        } finally {
          ue = !1;
        }
      }
      e.d && delete this.E[this.r];
    }
  },
  ue = !1;
function ae(e, t) {
  return (ie[e] = t), t;
}
function ce(e, t) {
  return (ie[e] = (e) => (n) => t(e, n)), t;
}
function se(e, t) {
  return (ie[e] = (e) => l(e, t)), t;
}
function de(e = "M") {
  let t,
    n = (r) => (n[r] = t[r] = new fe(t, e, r));
  function r(r) {
    t = r;
    for (let e in r) n(e);
    Object.defineProperty(window, e, { configurable: !0, value: n });
  }
  window[e]
    ? r(window[e])
    : Object.defineProperty(window, e, { configurable: !0, set: r });
}
function he(e, t) {
  return ae(e, t.g), t;
}
var ge = /^on[A-Z-]/;
function pe(e, t, n) {
  ve(e, t, xe(n));
}
function ve(e, t, n) {
  void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function be(e, t) {
  ve(
    e,
    "class",
    (function (e) {
      return g(e, " ", s);
    })(t) || void 0,
  );
}
function me(e, t) {
  ve(
    e,
    "style",
    (function (e) {
      return g(e, ";", h);
    })(t) || void 0,
  );
}
function ye(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
var we = {
  selected: (e) => "selectedValue" in e || "selectedValues" in e,
  checked: (e) => "checkedValue" in e || "checkedValues" in e,
};
function Ce(e, t, n) {
  let r,
    l = e[t];
  for (let { name: e } of l.attributes)
    (!n || !(e in n)) && !we[e]?.(n) && l.removeAttribute(e);
  for (let e in n) {
    let t = n[e],
      o = Re[e];
    o
      ? o(l, t, n)
      : e in Pe
        ? ((r ??= {})[e] = t)
        : ge.test(e)
          ? ((r ??= {})["-" === e[2] ? e.slice(3) : e.slice(2).toLowerCase()] =
              t)
          : pe(l, e, t);
  }
  e[t + "~"] = r;
}
function ke(e, t) {
  let n = e[t],
    r = e[t + "~"];
  for (let e in r) {
    let t = Pe[e];
    t ? t(n, r[e]) : w(n, e, r[e]);
  }
}
var Ne = document.createElement("template");
function Se(e, t, n) {
  let r = e[n],
    l = e[n + "-"] || r,
    o = r.parentNode,
    i = l.nextSibling;
  Ne.innerHTML = t || 0 === t ? `${t}` : "<!>";
  let f = Ne.content;
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), o.insertBefore(f, r);
  let u = r;
  for (; u !== i; ) {
    let e = u.nextSibling;
    u.remove(), (u = e);
  }
}
function $e(e, t, n) {
  let r = e[n],
    l = e[n + "-"],
    o = e[t];
  if (l) for (let e in l) e in r || (o[e] = void 0);
  for (let e in r) o[e] = r[e];
  e[n + "-"] = r;
}
function xe(e) {
  if (e || 0 === e) return !0 === e ? "" : e + "";
}
function Ae(e, t, n) {
  let r = e[t];
  r
    ? (Object.assign(r, n), r.onUpdate?.())
    : ((e[t] = n),
      n.onMount?.(),
      (v(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var Me = new WeakMap(),
  Ee = new WeakMap();
function Te(e, t, n, r) {
  r
    ? ((e[t] = n), Me.set(e, n), Ee.set(e, (Ee.get(e) ?? 0) + 1))
    : ve(e, t, xe(n));
}
function Ie(e, t, n, r = (e) => e[t], l = (e, t) => t()) {
  return (o, i) => {
    let f = (e) => {
      l(
        o,
        () => {
          let e = Ee.get(o);
          if ((ne(() => i(r(o))), Ee.get(o) === e))
            return (o[t] = Me.get(o)), !0;
        },
        e,
      );
    };
    w(o, e, f), ue && (Me.set(o, o[n]), o[t] !== o[n] && f());
  };
}
function _e(e, t, n, r, l) {
  return (o, i) => {
    let f = () => {
      let e = r(o),
        n = Ee.get(e[0]);
      ne(() => i(l(o)));
      for (let r = 0; r < e.length; r++)
        Ee.get(e[r]) === n && (e[r][t] = Me.get(e[r]));
    };
    if ((w(o, e, f), ue && !Me.has(o))) {
      let e = !1,
        l = r(o);
      for (let r = 0; r < l.length; r++) {
        let o = l[r][n];
        o !== l[r][t] && (Me.set(l[r], o), (e = !0));
      }
      e && f();
    }
  };
}
var Be = Ie("input", "value", "defaultValue", void 0, S);
var Ve = Ie("change", "checked", "defaultChecked");
var Oe = Ie("change", "checked", "defaultChecked", (e) => e.value);
var je = (e, t = "") =>
    (e.closest("form") || document).querySelectorAll(
      `input[name="${e.name}"]${t}`,
    ),
  Le = _e("change", "checked", "defaultChecked", je, (e) =>
    Array.from(je(e, ":checked")).map((e) => e.value),
  );
var We = _e(
  "change",
  "selected",
  "defaultSelected",
  (e) => e.options,
  (e) =>
    e.multiple ? Array.from(e.selectedOptions).map((e) => e.value) : e.value,
);
var qe = Ie("close", "open", "open"),
  De = Ie("toggle", "open", "open"),
  Re = {
    class: be,
    style: me,
    renderBody: () => {},
    value: (e, t, n) => {
      "INPUT" === e.tagName
        ? (function (e, t, n) {
            S(e, () => {
              Te(e, "value", t, n);
            });
          })(e, t, n.valueChange)
        : "SELECT" === e.tagName &&
          (function (e, t, n, r) {
            let l = e.options;
            for (let e = 0; e < l.length; e++)
              Te(
                l[e],
                "selected",
                r ? t.includes(l[e].value) : t === l[e].value,
                n,
              );
          })(e, t, n.valueChange, !!n.multiple);
    },
    checked: (e, t, n) =>
      (function (e, t, n) {
        Te(e, "checked", t, n);
      })(e, t, n.checkedChange),
    checkedValue: (e, t, n) =>
      (function (e, t, n, r) {
        Te(e, "checked", t === r, n);
      })(e, t, n.checkedValueChange, n.value),
    checkedValues: (e, t, n) =>
      (function (e, t, n, r) {
        Te(e, "checked", t.includes(r), n);
      })(e, t, n.checkedValuesChange, n.value),
    open: (e, t, n) =>
      (function (e, t, n) {
        Te(e, "open", t, n);
      })(e, t, n.openChange),
  },
  Pe = {
    valueChange: (e, t) => {
      "INPUT" === e.tagName ? Be(e, t) : "SELECT" === e.tagName && We(e, t);
    },
    checkedChange: Ve,
    checkedValueChange: Oe,
    checkedValuesChange: Le,
    openChange: (e, t) => {
      "DIALOG" === e.tagName ? qe(e, t) : "DETAILS" === e.tagName && De(e, t);
    },
  },
  ze = document.createTreeWalker(document);
function Fe(e) {
  let t = e.length;
  for (; e.charCodeAt(--t) > 47; );
  return e.slice(0, t + 1);
}
function Ge(e, t, n) {
  (ze.currentNode = e),
    Ue(t, n, 0),
    (ze.currentNode = document.documentElement);
}
function Ue(t, n, r) {
  let l,
    o = 0,
    i = 0,
    f = 0;
  for (; (l = t.charCodeAt(r++)); )
    if (((i = o), (o = 0), l >= 117)) o = 10 * i + l - 117;
    else if (l >= 107) {
      for (l = 10 * i + l - 107; l--; ) ze.parentNode();
      ze.nextSibling();
    } else if (l >= 97)
      for (l = 10 * i + l - 97; l--; ) !ze.nextSibling() && ze.nextNode();
    else if (l >= 67) for (l = 20 * i + l - 67; l--; ) ze.nextNode();
    else if (47 === l) r = Ue(t, (n[f++] = e(n.$global)), r);
    else {
      if (38 === l) return r;
      if (32 === l) n[f++] = ze.currentNode;
      else {
        let e = (n[f++] = document.createTextNode("")),
          t = ze.currentNode,
          r = t.parentNode;
        33 === l
          ? r.insertBefore(e, t)
          : (35 === l ? r.insertBefore(e, t.nextSibling) : r.replaceChild(e, t),
            (ze.currentNode = e));
      }
    }
  return r;
}
function He(t, n, r) {
  let l = e(n);
  if (((l._ = t.n || r), (l.C = t), Je(t, l), t.c)) for (let e of t.c) e.g?.(l);
  return l;
}
function Je(e, t) {
  let n = "string" == typeof e ? document.createElement(e) : e.l();
  return (
    Ge(11 === n.nodeType ? n.firstChild : n, e.y ?? " ", t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.z && e.z(t),
    n
  );
}
function Ze(e, t, n) {
  return (r, o) => {
    let i = r[e + "("];
    if (!i || i === t || o === _) return;
    let f = r[e + "!"];
    if (o === T || o === I) return i.f?.(f, o);
    if ("string" == typeof i) Ce(f, 0, o()), rt(f, 0, t && l(r, t));
    else if (i.f) {
      let e = o();
      i.f(f, n ? e : [t ? { ...e, renderBody: l(r, t) } : e]);
    }
  };
}
function Ke(e, t, n, r, l = 0, o) {
  return {
    x: e,
    y: t && Fe(t),
    z: n,
    l: Qe,
    c: new Set(r),
    G: l,
    A: void 0,
    f: o,
    n: void 0,
  };
}
function Qe() {
  let e = this.A;
  if (!e) {
    let t = this.y,
      n = t && t.length < 4 && 32 !== t.charCodeAt(t.length - 1);
    this.A = e = (function (e, t) {
      let n;
      Ye.innerHTML = e;
      let r = Ye.content;
      return (
        t || (n = r.firstChild) !== r.lastChild || (n && 8 === n.nodeType)
          ? ((n = Xe.createDocumentFragment()), n.appendChild(r))
          : n || (n = Xe.createTextNode("")),
        n
      );
    })(this.x, n);
  }
  return e.cloneNode(!0);
}
var Xe = document,
  Ye = Xe.createElement("template");
var et = function (e, t, r) {
  let l = e + "(",
    o = e + "!";
  return (i, f) => {
    if (f === _) return;
    let c = i[l],
      s = f;
    if (f !== T && f !== I) {
      let r = f ? f._ || f.renderBody || f : void 0;
      r !== c
        ? ((c = i[l] = r),
          (function (e, t, r) {
            let l,
              o = e[t + "!"];
            r
              ? ((l = e[t + "!"] = He(r, e.$global, e)), (o = o || n(e[t])))
              : ((l = n(e[t])), (e[t + "!"] = void 0)),
              a(l, o.a.parentNode, o.a),
              u(o);
          })(i, e, r),
          t?.(i),
          (s = _))
        : (s = I);
    }
    r?.(i, s), G(c, i[o], s);
  };
};
function tt(e, t) {
  let n = t + "!",
    r = t + "(";
  return (t, l) => {
    let o = t[n];
    if (o) {
      let n = t[r];
      (!n?.c || n.c.has(e)) && e(o, l);
    }
  };
}
var nt = function (e, t, n) {
  let r = e + "(",
    l = e + "!";
  return (o, i) => {
    if (i === _) return;
    let f = o[r],
      u = i;
    if (i !== T && i !== I) {
      let n = i ? i._ || i.renderBody || i : void 0;
      n !== f ? ((f = o[r] = n), rt(o, e, n), t?.(o), (u = _)) : (u = I);
    }
    n?.(o, u), G(f, o[l], u);
  };
};
function rt(e, t, n) {
  let r = e[t + "!"],
    l = e[t];
  if (((l.textContent = ""), n)) {
    a((e[t + "!"] = He(n, e.$global, e)), l, null);
  }
  r && i(r);
}
var lt = new Map([[Symbol(), n(void 0)]]),
  ot = [n(void 0)],
  it = new Map(),
  ft = [];
function ut(e, t) {
  return st(e, t, (e, t) => {
    let [n, r = ht] = e,
      l = 0;
    for (let e of n) t(r(e, l), [e, l, n]), l++;
  });
}
function at(e, t) {
  return st(e, t, (e, t) => {
    let [n, r = gt] = e;
    for (let e in n) {
      let l = n[e];
      t(r(e, l), [e, l, n]);
    }
  });
}
function ct(e, t) {
  return st(e, t, (e, t) => {
    let [n, r = 0, l = 1, o = gt] = e,
      i = (n - r) / l;
    for (let e = 0; e <= i; e++) {
      let n = r + e * l;
      t(o(n), [n]);
    }
  });
}
function st(e, t, r) {
  let l = e + "!",
    o = t.c,
    f = t.f;
  return (s, d) => {
    if (d === _) return;
    if (d === T || d === I) {
      for (let t of s[l] ?? s[e + "("].values()) {
        f?.(t, d);
        for (let e of o) e(t, d);
      }
      return;
    }
    let h,
      g,
      p,
      v,
      b = s[e],
      m = 8 === b.nodeType || 3 === b.nodeType,
      y = s[e + "("] || (m ? lt : it),
      w = s[e + "!"] || Array.from(y.values()),
      C = !0;
    if (
      (r(d, (e, n) => {
        let r = y.get(e),
          l = I;
        if ((r || ((r = He(t, s.$global, s)), (l = _)), f && f(r, n), o))
          for (let e of o) e(r, l);
        h ? (h.set(e, r), g.push(r)) : ((h = new Map([[e, r]])), (g = [r]));
      }),
      !h)
    )
      if (m) (h = lt), (g = ot), n(b);
      else {
        if (t.G) for (let e = 0; e < w.length; e++) i(w[e]);
        (b.textContent = ""), (h = it), (g = ft), (C = !1);
      }
    if (C) {
      if (m) {
        y === lt && n(b);
        let e = w[w.length - 1];
        (p = e.b.nextSibling), (v = e.a.parentNode);
      } else (p = null), (v = b);
      !(function (e, t, n, r) {
        let l,
          o,
          i,
          f,
          s,
          d,
          h = 0,
          g = 0,
          p = t.length - 1,
          v = n.length - 1,
          b = t[h],
          m = n[g],
          y = t[p],
          w = n[v];
        e: {
          for (; b === m; ) {
            if ((++h, ++g, h > p || g > v)) break e;
            (b = t[h]), (m = n[g]);
          }
          for (; y === w; ) {
            if ((--p, --v, h > p || g > v)) break e;
            (y = t[p]), (w = n[v]);
          }
        }
        if (h > p) {
          if (g <= v) {
            (i = v + 1), (f = i < n.length ? n[i].a : r);
            do {
              a(n[g++], e, f);
            } while (g <= v);
          }
        } else if (g > v)
          do {
            u(t[h++]);
          } while (h <= p);
        else {
          let b = p - h + 1,
            m = v - g + 1,
            y = t,
            w = new Array(m);
          for (l = 0; l < m; ++l) w[l] = -1;
          let C = 0,
            k = 0,
            N = new Map();
          for (o = g; o <= v; ++o) N.set(n[o], o);
          for (l = h; l <= p && k < m; ++l)
            (s = t[l]),
              (o = N.get(s)),
              void 0 !== o &&
                ((C = C > o ? c : o),
                ++k,
                (d = n[o]),
                (w[o - g] = l),
                (y[l] = null));
          if (b === t.length && 0 === k) {
            for (; g < m; ++g) a(n[g], e, r);
            for (; h < b; ++h) u(t[h]);
          } else {
            for (l = b - k; l > 0; ) (s = y[h++]), null !== s && (u(s), l--);
            if (C === c) {
              let t = (function (e) {
                let t,
                  n,
                  r = e.slice(),
                  l = [];
                l.push(0);
                for (let o = 0, i = e.length; o < i; ++o) {
                  if (-1 === e[o]) continue;
                  let i = l[l.length - 1];
                  if (e[i] < e[o]) (r[o] = i), l.push(o);
                  else {
                    for (t = 0, n = l.length - 1; t < n; ) {
                      let r = ((t + n) / 2) | 0;
                      e[l[r]] < e[o] ? (t = r + 1) : (n = r);
                    }
                    e[o] < e[l[t]] && (t > 0 && (r[o] = l[t - 1]), (l[t] = o));
                  }
                }
                for (t = l.length, n = l[t - 1]; t-- > 0; )
                  (l[t] = n), (n = r[n]);
                return l;
              })(w);
              for (o = t.length - 1, i = n.length, l = m - 1; l >= 0; --l)
                -1 === w[l] || o < 0 || l !== t[o]
                  ? ((C = l + g),
                    (d = n[C++]),
                    (f = C < i ? n[C].a : r),
                    a(d, e, f))
                  : --o;
            } else if (k !== m)
              for (i = n.length, l = m - 1; l >= 0; --l)
                -1 === w[l] &&
                  ((C = l + g),
                  (d = n[C++]),
                  (f = C < i ? n[C].a : r),
                  a(d, e, f));
          }
        }
      })(v, w, g, p);
    }
    (s[e + "("] = h), (s[e + "!"] = g);
  };
}
function dt(e, t) {
  let n = t + "!";
  return (r, l) => {
    let o = r[n] ?? r[t + "("]?.values() ?? [];
    for (let t of o) e(t, l);
  };
}
function ht(e, t) {
  return t;
}
function gt(e) {
  return e;
}
var pt = (e, t) => ae(t, new vt(e)),
  vt = class {
    _;
    constructor(e) {
      this._ = e;
    }
    mount(t = {}, n, r) {
      let l,
        o,
        { $global: i } = t;
      i
        ? (({ $global: i, ...t } = t),
          (i = { runtimeId: "M", renderId: "_", ...i }))
        : (i = { runtimeId: "M", renderId: "_" });
      let f = this._.f,
        a = re(() => {
          (l = e(i)), (o = Je(this._, l)), f && f(l, [t]);
        });
      switch (r) {
        case "afterbegin":
          n.insertBefore(o, n.firstChild);
          break;
        case "afterend":
          n.parentElement.insertBefore(o, n.nextSibling);
          break;
        case "beforebegin":
          n.parentElement.insertBefore(o, n);
          break;
        default:
          n.appendChild(o);
      }
      return (
        le(a),
        {
          update: (e) => {
            f &&
              ne(() => {
                f(l, T), f(l, [e]);
              });
          },
          destroy: () => {
            u(l);
          },
        }
      );
    }
  },
  bt = new Map(),
  mt = {
    patchConditionals: function (e) {
      (et = e(et)), (nt = e(nt));
    },
    queueEffect: ee,
    init() {
      ae("$C_s", (e) => {
        bt.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      ae("$C_r", e);
    },
    isOp: (e) => e === T || e === I || e === _,
    isRenderer: (e) => void 0 !== e.l,
    getStartNode: (e) => e.a,
    setScopeNodes(e, t, n) {
      (e.a = t), (e.b = n);
    },
    runComponentEffects() {
      le(this.effects);
    },
    resolveRegistered: (e, { runtimeId: t, componentIdPrefix: n }) =>
      Array.isArray(e) && "string" == typeof e[0]
        ? (function (e, t) {
            let n = ie[e];
            return t && n ? (n.x ? l(t, n) : n(t)) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.q[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = Ke("", void 0, e, void 0, 1, n);
      return (r.l = t), r;
    },
    render(e, t, n, r) {
      let l = t.scope;
      l || ((l = bt.get(t.id)), l && ((t.scope = l), bt.delete(t.id)));
      let o = n.f || yt,
        i = !1;
      if (
        ((t.effects = re(() => {
          if (l) o(l, T), (i = !0);
          else {
            l = t.scope = He(n, e.global);
            let r = n.c;
            if (r) for (let e of r) e(t.scope, I);
          }
          o(l, r);
        })),
        !i)
      )
        return l.a === l.b ? l.a : l.a.parentNode;
    },
  };
function yt() {}
export {
  pe as attr,
  Ce as attrs,
  ke as attrsEvents,
  o as bindFunction,
  l as bindRenderer,
  V as changeHandler,
  R as childClosures,
  be as classAttr,
  q as closure,
  mt as compat,
  et as conditional,
  nt as conditionalOnlyChild,
  Ke as createRenderer,
  e as createScope,
  He as createScopeWithRenderer,
  pt as createTemplate,
  ye as data,
  D as dynamicClosure,
  P as dynamicSubscribers,
  Ze as dynamicTagAttrs,
  v as getAbortSignal,
  Se as html,
  J as inChild,
  tt as inConditionalScope,
  dt as inLoopScope,
  de as init,
  B as initValue,
  L as intersection,
  Z as intersections,
  Ae as lifecycle,
  at as loopIn,
  ut as loopOf,
  ct as loopTo,
  H as nextTagId,
  w as on,
  re as prepare,
  $e as props,
  X as queueControllableSource,
  ee as queueEffect,
  Y as queueSource,
  ae as register,
  ce as registerBoundSignal,
  se as registerRenderer,
  he as registerSubscriber,
  p as resetAbortSignal,
  te as run,
  le as runEffects,
  z as setTagVar,
  me as styleAttr,
  F as tagVarSignal,
  O as value,
};
