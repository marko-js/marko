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
var l = r((e, t) => t && { ...t, l: e }),
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
function v(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          l = "";
        if (Array.isArray(e))
          for (let o of e) {
            let e = v(o, t, n);
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
var _ = {},
  T = {},
  I = {};
function B(e, t) {
  let n = e + "#";
  return (e, r) => {
    r !== _ && void 0 === e[n] && t(e, r);
  };
}
function V(e, t) {
  let n = e + "#";
  return (r, l) => {
    if (l !== _ && l !== T && l !== I) {
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
    if (o === _) 1 === (l[r] = (l[r] ?? 0) + 1) && n?.(l, _);
    else if (o !== I) {
      let i = void 0 !== l[r];
      1 === (l[r] ||= 1) &&
        (o === T || (i && l[e] === o)
          ? n?.(l, T)
          : ((l[e] = o), t?.(l, o), n?.(l, I))),
        l[r]--;
    }
  };
}
var j = 0;
function L(e, t, n) {
  let r = "?" + j++,
    l = r + "#";
  return (o, i) => {
    i === _
      ? 1 === (o[l] = (o[l] ?? 0) + 1) && n?.(o, _)
      : void 0 === o[l]
        ? ((o[l] = e - 1), (o[r] = !0))
        : 0 == --o[l]
          ? i === I || o[r]
            ? ((o[r] = !1), t(o, 0), n?.(o, I))
            : n?.(o, T)
          : (o[r] ||= i === I);
  };
}
var W = (e) => e._;
function q(e, t, n, r) {
  let l = "?" + j++,
    o = l + 1,
    i = n || W,
    f = "function" == typeof e ? e : () => e;
  return (e, n) => {
    if (n === _) 1 === (e[o] = (e[o] ?? 0) + 1) && r?.(e, _);
    else {
      let u, a;
      if (void 0 === e[o]) {
        (u = i(e)), (a = f(e));
        let t = u[a + "#"],
          r = void 0 === t ? !u.z : 0 === t;
        (e[o] = r ? 1 : 2), (n = I);
      }
      0 == --e[o]
        ? n === I || e[l]
          ? ((e[l] = !1), (u ??= i(e)), (a ??= f(e)), t?.(e, u[a]), r?.(e, I))
          : r?.(e, T)
        : (e[l] ||= n === I);
    }
  };
}
function D(e, t, n, r) {
  let l = n || W,
    i = "function" == typeof e ? e : () => e,
    f = q(i, t, l, r);
  return (
    (f.e = (e) => {
      let t = l(e),
        n = i(e) + "*";
      (t[n] ??= new Set()), t[n].add(o(e, f));
    }),
    (f.h = (e) => {
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
var U = (e, t) => e["/"]?.(t),
  F = (e, t, n) => {
    let r = e?.c;
    if (r) for (let e of r) e(t, n);
  },
  H = new WeakMap();
function G({ $global: e }) {
  let t = H.get(e) || 0;
  return H.set(e, t + 1), "c" + e.runtimeId + e.renderId + t.toString(36);
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
  return k || ((k = !0), queueMicrotask(M)), t(e, _), K.push(e, t, n), n;
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
    n = [];
    o = {};
    B = { _: ie };
    constructor(e, t, n) {
      (this.C = e), (this.D = t), (this.p = n), (this.q = e[n]), this.s();
    }
    w() {
      this.q.w(), this.s();
    }
    s() {
      let e = this.q,
        t = this.B,
        n = this.o,
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
          else if ("[" === l) this.n.push(this.f), (this.f = o), (i.a = e);
          else if ("]" === l) {
            if (((i[f] = e), o < this.f)) {
              let t = n[this.f],
                r = e.parentNode,
                l = t.a;
              r !== l.parentNode && r.prepend(l),
                (t.b = e.previousSibling),
                (this.f = this.n.pop());
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
      let l = e.r;
      if (l) {
        e.r = [];
        let r = l.length,
          o = 0;
        try {
          for (ue = !0; o < r; ) {
            let e = l[o++];
            if ("function" == typeof e) {
              let r = e(t),
                { $global: l } = n;
              l ||
                ((n.$global = l = r.$ || {}),
                (l.runtimeId = this.D),
                (l.renderId = this.p));
              for (let e in r)
                if ("$" !== e) {
                  let t = r[e],
                    o = n[e];
                  (t.$global = l), o !== t && (n[e] = Object.assign(t, o));
                }
            } else
              o === r || "string" != typeof l[o]
                ? delete this.C[this.p]
                : ie[l[o++]](n[e]);
          }
        } finally {
          ue = !1;
        }
      }
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
  return ae(e, t.e), t;
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
      return v(e, " ", h);
    })(t) || void 0,
  );
}
function me(e, t) {
  ve(
    e,
    "style",
    (function (e) {
      return v(e, ";", p);
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
      o = Ge[e];
    o
      ? o(l, t, n)
      : e in Je
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
    let t = Je[e];
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
      (s(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var Me = new WeakMap(),
  Ee = new WeakMap();
function _e(e, t, n, r) {
  r
    ? ((e[t] = n), Me.set(e, n), Ee.set(e, (Ee.get(e) ?? 0) + 1))
    : ve(e, t, xe(n));
}
function Te(e, t, n, r = (e) => e[t], l = (e, t) => t()) {
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
function Ie(e, t, n, r, l) {
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
function Be(e, t, n) {
  S(e, () => {
    _e(e, "value", t, n);
  });
}
var Ve = Te("input", "value", "defaultValue", void 0, S);
function Oe(e, t, n) {
  _e(e, "checked", t, n);
}
var je = Te("change", "checked", "defaultChecked");
function Le(e, t, n, r) {
  _e(e, "checked", t === r, n);
}
var We = Te("change", "checked", "defaultChecked", (e) => e.value);
function qe(e, t, n, r) {
  _e(e, "checked", t.includes(r), n);
}
var De = (e, t = "") =>
    (e.closest("form") || document).querySelectorAll(
      `input[name="${e.name}"]${t}`,
    ),
  Re = Ie("change", "checked", "defaultChecked", De, (e) =>
    Array.from(De(e, ":checked")).map((e) => e.value),
  );
function Pe(e, t, n, r) {
  let l = e.options;
  for (let e = 0; e < l.length; e++)
    _e(l[e], "selected", r ? t.includes(l[e].value) : t === l[e].value, n);
}
var ze = Ie(
  "change",
  "selected",
  "defaultSelected",
  (e) => e.options,
  (e) =>
    e.multiple ? Array.from(e.selectedOptions).map((e) => e.value) : e.value,
);
function Ue(e, t, n) {
  _e(e, "open", t, n);
}
var Fe = Te("close", "open", "open"),
  He = Te("toggle", "open", "open"),
  Ge = {
    class: be,
    style: me,
    renderBody: () => {},
    value: (e, t, n) => {
      "INPUT" === e.tagName
        ? Be(e, t, n.valueChange)
        : "SELECT" === e.tagName && Pe(e, t, n.valueChange, !!n.multiple);
    },
    checked: (e, t, n) => Oe(e, t, n.checkedChange),
    checkedValue: (e, t, n) => Le(e, t, n.checkedValueChange, n.value),
    checkedValues: (e, t, n) => qe(e, t, n.checkedValuesChange, n.value),
    open: (e, t, n) => Ue(e, t, n.openChange),
  },
  Je = {
    valueChange: (e, t) => {
      "INPUT" === e.tagName ? Ve(e, t) : "SELECT" === e.tagName && ze(e, t);
    },
    checkedChange: je,
    checkedValueChange: We,
    checkedValuesChange: Re,
    openChange: (e, t) => {
      "DIALOG" === e.tagName ? Fe(e, t) : "DETAILS" === e.tagName && He(e, t);
    },
  },
  Ze = document.createTreeWalker(document);
function Ke(e) {
  let t = e.length;
  for (; e.charCodeAt(--t) > 47; );
  return e.slice(0, t + 1);
}
function Qe(e, t, n) {
  (Ze.currentNode = e),
    Xe(t, n, 0),
    (Ze.currentNode = document.documentElement);
}
function Xe(t, n, r) {
  let l,
    o = 0,
    i = 0,
    f = 0;
  for (; (l = t.charCodeAt(r++)); )
    if (((i = o), (o = 0), l >= 117)) o = 10 * i + l - 117;
    else if (l >= 107) {
      for (l = 10 * i + l - 107; l--; ) Ze.parentNode();
      Ze.nextSibling();
    } else if (l >= 97) for (l = 10 * i + l - 97; l--; ) Ze.nextSibling();
    else if (l >= 67) for (l = 20 * i + l - 67; l--; ) Ze.nextNode();
    else if (47 === l) r = Xe(t, (n[f++] = e(n.$global)), r);
    else {
      if (38 === l) return r;
      if (32 === l) n[f++] = Ze.currentNode;
      else {
        let e = (n[f++] = document.createTextNode("")),
          t = Ze.currentNode,
          r = t.parentNode;
        33 === l
          ? r.insertBefore(e, t)
          : (35 === l ? r.insertBefore(e, t.nextSibling) : r.replaceChild(e, t),
            (Ze.currentNode = e));
      }
    }
  return r;
}
function Ye(t, n, r) {
  let l = e(n);
  if (((l._ = t.l || r), (l.A = t), et(t, l), t.c)) for (let e of t.c) e.e?.(l);
  return l;
}
function et(e, t) {
  let n = "string" == typeof e ? document.createElement(e) : e.j();
  return (
    Qe(11 === n.nodeType ? n.firstChild : n, e.u ?? " ", t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.x && e.x(t),
    n
  );
}
function tt(e, t, n) {
  return (r, o) => {
    let i = r[e + "("];
    if (!i || i === t || o === I) return;
    let f = r[e + "!"];
    if (o === _ || o === T) return i.d?.(f, o);
    if ("string" == typeof i) Ce(f, 0, o()), at(f, 0, t && l(r, t));
    else if (((i = i.default ? i.default._ : i._ || i), i.d)) {
      let e = o();
      i.d(f, n ? e : [t ? { ...e, renderBody: l(r, t) } : e]);
    }
  };
}
function nt(e, t, n, r, l = 0, o) {
  return {
    t: e,
    u: t && Ke(t),
    x: n,
    j: rt,
    c: new Set(r),
    E: l,
    y: void 0,
    d: o,
    l: void 0,
  };
}
function rt() {
  let e = this.y;
  if (!e) {
    let t = this.u,
      n = t && t.length < 4 && 32 !== t.charCodeAt(t.length - 1);
    this.y = e = (function (e, t) {
      let n;
      ot.innerHTML = e;
      let r = ot.content;
      return (
        t || (n = r.firstChild) !== r.lastChild || (n && 8 === n.nodeType)
          ? ((n = lt.createDocumentFragment()), n.appendChild(r))
          : n || (n = lt.createTextNode("")),
        n
      );
    })(this.t, n);
  }
  return e.cloneNode(!0);
}
var lt = document,
  ot = lt.createElement("template");
var it = function (e, t, r) {
  let l = e + "(",
    o = e + "!";
  return (i, f) => {
    if (f === I) return;
    let c = i[l],
      s = f;
    if (f !== _ && f !== T) {
      let r = f ? f._ || f.renderBody || f : void 0;
      r !== c
        ? ((c = i[l] = r),
          (function (e, t, r) {
            let l,
              o = e[t + "!"];
            r
              ? ((l = e[t + "!"] = Ye(r, e.$global, e)), (o = o || n(e[t])))
              : ((l = n(e[t])), (e[t + "!"] = void 0)),
              a(l, o.a.parentNode, o.a),
              u(o);
          })(i, e, r),
          t?.(i),
          (s = I))
        : (s = T);
    }
    r?.(i, s), F(c, i[o], s);
  };
};
function ft(e, t) {
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
var ut = function (e, t, n) {
  let r = e + "(",
    l = e + "!";
  return (o, i) => {
    if (i === I) return;
    let f = o[r],
      u = i;
    if (i !== _ && i !== T) {
      let n = i ? i._ || i.renderBody || i : void 0;
      n !== f ? ((f = o[r] = n), at(o, e, n), t?.(o), (u = I)) : (u = T);
    }
    n?.(o, u), F(f, o[l], u);
  };
};
function at(e, t, n) {
  let r = e[t + "!"],
    l = e[t];
  if (((l.textContent = ""), n)) {
    a((e[t + "!"] = Ye(n, e.$global, e)), l, null);
  }
  r && i(r);
}
var ct = new Map([[Symbol(), n(void 0)]]),
  st = [n(void 0)],
  dt = new Map(),
  ht = [];
function gt(e, t) {
  return bt(e, t, (e, t) => {
    let [n, r = yt] = e,
      l = 0;
    for (let e of n) t(r(e, l), [e, l, n]), l++;
  });
}
function pt(e, t) {
  return bt(e, t, (e, t) => {
    let [n, r = wt] = e;
    for (let e in n) {
      let l = n[e];
      t(r(e, l), [e, l, n]);
    }
  });
}
function vt(e, t) {
  return bt(e, t, (e, t) => {
    let [n, r = 0, l = 1, o = wt] = e,
      i = (n - r) / l;
    for (let e = 0; e <= i; e++) {
      let n = r + e * l;
      t(o(n), [n]);
    }
  });
}
function bt(e, t, r) {
  let l = e + "!",
    o = t.c,
    f = t.d;
  return (c, s) => {
    if (s === I) return;
    if (s === _ || s === T) {
      for (let t of c[l] ?? c[e + "("].values()) {
        f?.(t, s);
        for (let e of o) e(t, s);
      }
      return;
    }
    let h,
      g,
      p,
      v,
      b = c[e],
      m = 8 === b.nodeType || 3 === b.nodeType,
      y = c[e + "("] || (m ? ct : dt),
      w = c[e + "!"] || Array.from(y.values()),
      C = !0;
    if (
      (r(s, (e, n) => {
        let r = y.get(e),
          l = T;
        if ((r || ((r = Ye(t, c.$global, c)), (l = I)), f && f(r, n), o))
          for (let e of o) e(r, l);
        h ? (h.set(e, r), g.push(r)) : ((h = new Map([[e, r]])), (g = [r]));
      }),
      !h)
    )
      if (m) (h = ct), (g = st), n(b);
      else {
        if (t.E) for (let e = 0; e < w.length; e++) i(w[e]);
        (b.textContent = ""), (h = dt), (g = ht), (C = !1);
      }
    if (C) {
      if (m) {
        y === ct && n(b);
        let e = w[w.length - 1];
        (p = e.b.nextSibling), (v = e.a.parentNode);
      } else (p = null), (v = b);
      !(function (e, t, n, r) {
        let l,
          o,
          i,
          f,
          c,
          s,
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
            (c = t[l]),
              (o = N.get(c)),
              void 0 !== o &&
                ((C = C > o ? d : o),
                ++k,
                (s = n[o]),
                (w[o - g] = l),
                (y[l] = null));
          if (b === t.length && 0 === k) {
            for (; g < m; ++g) a(n[g], e, r);
            for (; h < b; ++h) u(t[h]);
          } else {
            for (l = b - k; l > 0; ) (c = y[h++]), null !== c && (u(c), l--);
            if (C === d) {
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
                    (s = n[C++]),
                    (f = C < i ? n[C].a : r),
                    a(s, e, f))
                  : --o;
            } else if (k !== m)
              for (i = n.length, l = m - 1; l >= 0; --l)
                -1 === w[l] &&
                  ((C = l + g),
                  (s = n[C++]),
                  (f = C < i ? n[C].a : r),
                  a(s, e, f));
          }
        }
      })(v, w, g, p);
    }
    (c[e + "("] = h), (c[e + "!"] = g);
  };
}
function mt(e, t) {
  let n = t + "!";
  return (r, l) => {
    let o = r[n] ?? r[t + "("]?.values() ?? [];
    for (let t of o) e(t, l);
  };
}
function yt(e, t) {
  return t;
}
function wt(e) {
  return e;
}
var Ct = new Map(),
  kt = {
    patchConditionals: function (e) {
      (it = e(it)), (ut = e(ut));
    },
    queueEffect: ee,
    init() {
      ae("$C_s", (e) => {
        Ct.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      ae("$C_r", e);
    },
    isOp: (e) => e === _ || e === T || e === I,
    isRenderer: (e) => void 0 !== e.j,
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
            return t && n ? (n.t ? l(t, n) : n(t)) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.o[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = nt("", void 0, e, void 0, 1, n);
      return (r.j = t), r;
    },
    render(e, t, n, r) {
      let l = t.scope;
      l || ((l = Ct.get(t.id)), l && ((t.scope = l), Ct.delete(t.id)));
      let o = n.d || Nt,
        i = !1;
      if (
        ((t.effects = re(() => {
          if (l) o(l, _), (i = !0);
          else {
            l = t.scope = Ye(n, e.global);
            let r = n.c;
            if (r) for (let e of r) e(t.scope, T);
          }
          o(l, r);
        })),
        !i)
      )
        return l.a === l.b ? l.a : l.a.parentNode;
    },
  };
function Nt() {}
var St = (e, t) => ae(t, new $t(e)),
  $t = class {
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
      let f = this._.d,
        a = re(() => {
          (l = e(i)), (o = et(this._, l)), f && f(l, [t]);
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
                f(l, _), f(l, [e]);
              });
          },
          destroy: () => {
            u(l);
          },
        }
      );
    }
  };
export {
  pe as attr,
  Ce as attrs,
  ke as attrsEvents,
  o as bindFunction,
  l as bindRenderer,
  V as changeHandler,
  Oe as checkedAttr,
  je as checkedChangeEffect,
  Le as checkedValueAttr,
  We as checkedValueChangeEffect,
  qe as checkedValuesAttr,
  Re as checkedValuesChangeEffect,
  R as childClosures,
  be as classAttr,
  q as closure,
  kt as compat,
  it as conditional,
  ut as conditionalOnlyChild,
  nt as createRenderer,
  e as createScope,
  Ye as createScopeWithRenderer,
  St as createTemplate,
  ye as data,
  D as dynamicClosure,
  P as dynamicSubscribers,
  tt as dynamicTagAttrs,
  s as getAbortSignal,
  Se as html,
  J as inChild,
  ft as inConditionalScope,
  mt as inLoopScope,
  de as init,
  B as initValue,
  L as intersection,
  Z as intersections,
  Ae as lifecycle,
  pt as loopIn,
  gt as loopOf,
  vt as loopTo,
  G as nextTagId,
  w as on,
  Ue as openAttr,
  He as openChangeEffect_details,
  Fe as openChangeEffect_dialog,
  re as prepare,
  $e as props,
  X as queueControllableSource,
  ee as queueEffect,
  Y as queueSource,
  ae as register,
  ce as registerBoundSignal,
  se as registerRenderer,
  he as registerSubscriber,
  c as resetAbortSignal,
  te as run,
  le as runEffects,
  z as setTagVar,
  me as styleAttr,
  U as tagVarSignal,
  O as value,
  Be as valueAttr_input,
  Pe as valueAttr_select,
  Ve as valueChangeEffect_input,
  ze as valueChangeEffect_select,
};
