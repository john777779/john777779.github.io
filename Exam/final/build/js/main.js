! function(t, e) {
  function n(t) {
    var e = t.length,
      n = ct.type(t);
    return ct.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
  }

  function i(t) {
    var e = kt[t] = {};
    return ct.each(t.match(ht) || [], function(t, n) {
      e[n] = !0
    }), e
  }

  function r(t, n, i, r) {
    if (ct.acceptData(t)) {
      var o, s, a = ct.expando,
        u = t.nodeType,
        l = u ? ct.cache : t,
        c = u ? t[a] : t[a] && a;
      if (c && l[c] && (r || l[c].data) || i !== e || "string" != typeof n) return c || (c = u ? t[a] = et.pop() || ct.guid++ : a), l[c] || (l[c] = u ? {} : {
        toJSON: ct.noop
      }), ("object" == typeof n || "function" == typeof n) && (r ? l[c] = ct.extend(l[c], n) : l[c].data = ct.extend(l[c].data, n)), s = l[c], r || (s.data || (s.data = {}), s = s.data), i !== e && (s[ct.camelCase(n)] = i), "string" == typeof n ? (o = s[n], null == o && (o = s[ct.camelCase(n)])) : o = s, o
    }
  }

  function o(t, e, n) {
    if (ct.acceptData(t)) {
      var i, r, o = t.nodeType,
        s = o ? ct.cache : t,
        u = o ? t[ct.expando] : ct.expando;
      if (s[u]) {
        if (e && (i = n ? s[u] : s[u].data)) {
          ct.isArray(e) ? e = e.concat(ct.map(e, ct.camelCase)) : e in i ? e = [e] : (e = ct.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
          for (; r--;) delete i[e[r]];
          if (n ? !a(i) : !ct.isEmptyObject(i)) return
        }(n || (delete s[u].data, a(s[u]))) && (o ? ct.cleanData([t], !0) : ct.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
      }
    }
  }

  function s(t, n, i) {
    if (i === e && 1 === t.nodeType) {
      var r = "data-" + n.replace(Et, "-$1").toLowerCase();
      if (i = t.getAttribute(r), "string" == typeof i) {
        try {
          i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : jt.test(i) ? ct.parseJSON(i) : i
        } catch (o) {}
        ct.data(t, n, i)
      } else i = e
    }
    return i
  }

  function a(t) {
    var e;
    for (e in t)
      if (("data" !== e || !ct.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
    return !0
  }

  function u() {
    return !0
  }

  function l() {
    return !1
  }

  function c() {
    try {
      return J.activeElement
    } catch (t) {}
  }

  function f(t, e) {
    do t = t[e]; while (t && 1 !== t.nodeType);
    return t
  }

  function h(t, e, n) {
    if (ct.isFunction(e)) return ct.grep(t, function(t, i) {
      return !!e.call(t, i, t) !== n
    });
    if (e.nodeType) return ct.grep(t, function(t) {
      return t === e !== n
    });
    if ("string" == typeof e) {
      if (Wt.test(e)) return ct.filter(e, t, n);
      e = ct.filter(e, t)
    }
    return ct.grep(t, function(t) {
      return ct.inArray(t, e) >= 0 !== n
    })
  }

  function p(t) {
    var e = Qt.split("|"),
      n = t.createDocumentFragment();
    if (n.createElement)
      for (; e.length;) n.createElement(e.pop());
    return n
  }

  function d(t, e) {
    return ct.nodeName(t, "table") && ct.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
  }

  function g(t) {
    return t.type = (null !== ct.find.attr(t, "type")) + "/" + t.type, t
  }

  function m(t) {
    var e = re.exec(t.type);
    return e ? t.type = e[1] : t.removeAttribute("type"), t
  }

  function v(t, e) {
    for (var n, i = 0; null != (n = t[i]); i++) ct._data(n, "globalEval", !e || ct._data(e[i], "globalEval"))
  }

  function y(t, e) {
    if (1 === e.nodeType && ct.hasData(t)) {
      var n, i, r, o = ct._data(t),
        s = ct._data(e, o),
        a = o.events;
      if (a) {
        delete s.handle, s.events = {};
        for (n in a)
          for (i = 0, r = a[n].length; r > i; i++) ct.event.add(e, n, a[n][i])
      }
      s.data && (s.data = ct.extend({}, s.data))
    }
  }

  function b(t, e) {
    var n, i, r;
    if (1 === e.nodeType) {
      if (n = e.nodeName.toLowerCase(), !ct.support.noCloneEvent && e[ct.expando]) {
        r = ct._data(e);
        for (i in r.events) ct.removeEvent(e, i, r.handle);
        e.removeAttribute(ct.expando)
      }
      "script" === n && e.text !== t.text ? (g(e).text = t.text, m(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ct.support.html5Clone && t.innerHTML && !ct.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && ee.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }
  }

  function x(t, n) {
    var i, r, o = 0,
      s = typeof t.getElementsByTagName !== U ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== U ? t.querySelectorAll(n || "*") : e;
    if (!s)
      for (s = [], i = t.childNodes || t; null != (r = i[o]); o++) !n || ct.nodeName(r, n) ? s.push(r) : ct.merge(s, x(r, n));
    return n === e || n && ct.nodeName(t, n) ? ct.merge([t], s) : s
  }

  function _(t) {
    ee.test(t.type) && (t.defaultChecked = t.checked)
  }

  function w(t, e) {
    if (e in t) return e;
    for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = Ce.length; r--;)
      if (e = Ce[r] + n, e in t) return e;
    return i
  }

  function T(t, e) {
    return t = e || t, "none" === ct.css(t, "display") || !ct.contains(t.ownerDocument, t)
  }

  function C(t, e) {
    for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = ct._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && T(i) && (o[s] = ct._data(i, "olddisplay", N(i.nodeName)))) : o[s] || (r = T(i), (n && "none" !== n || !r) && ct._data(i, "olddisplay", r ? n : ct.css(i, "display"))));
    for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
    return t
  }

  function k(t, e, n) {
    var i = ve.exec(e);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
  }

  function j(t, e, n, i, r) {
    for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += ct.css(t, n + Te[o], !0, r)), i ? ("content" === n && (s -= ct.css(t, "padding" + Te[o], !0, r)), "margin" !== n && (s -= ct.css(t, "border" + Te[o] + "Width", !0, r))) : (s += ct.css(t, "padding" + Te[o], !0, r), "padding" !== n && (s += ct.css(t, "border" + Te[o] + "Width", !0, r)));
    return s
  }

  function E(t, e, n) {
    var i = !0,
      r = "width" === e ? t.offsetWidth : t.offsetHeight,
      o = ce(t),
      s = ct.support.boxSizing && "border-box" === ct.css(t, "boxSizing", !1, o);
    if (0 >= r || null == r) {
      if (r = fe(t, e, o), (0 > r || null == r) && (r = t.style[e]), ye.test(r)) return r;
      i = s && (ct.support.boxSizingReliable || r === t.style[e]), r = parseFloat(r) || 0
    }
    return r + j(t, e, n || (s ? "border" : "content"), i, o) + "px"
  }

  function N(t) {
    var e = J,
      n = xe[t];
    return n || (n = A(t, e), "none" !== n && n || (le = (le || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (le[0].contentWindow || le[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = A(t, e), le.detach()), xe[t] = n), n
  }

  function A(t, e) {
    var n = ct(e.createElement(t)).appendTo(e.body),
      i = ct.css(n[0], "display");
    return n.remove(), i
  }

  function S(t, e, n, i) {
    var r;
    if (ct.isArray(e)) ct.each(e, function(e, r) {
      n || je.test(t) ? i(t, r) : S(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
    });
    else if (n || "object" !== ct.type(e)) i(t, e);
    else
      for (r in e) S(t + "[" + r + "]", e[r], n, i)
  }

  function L(t) {
    return function(e, n) {
      "string" != typeof e && (n = e, e = "*");
      var i, r = 0,
        o = e.toLowerCase().match(ht) || [];
      if (ct.isFunction(n))
        for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
    }
  }

  function D(t, n, i, r) {
    function o(u) {
      var l;
      return s[u] = !0, ct.each(t[u] || [], function(t, u) {
        var c = u(n, i, r);
        return "string" != typeof c || a || s[c] ? a ? !(l = c) : e : (n.dataTypes.unshift(c), o(c), !1)
      }), l
    }
    var s = {},
      a = t === $e;
    return o(n.dataTypes[0]) || !s["*"] && o("*")
  }

  function O(t, n) {
    var i, r, o = ct.ajaxSettings.flatOptions || {};
    for (r in n) n[r] !== e && ((o[r] ? t : i || (i = {}))[r] = n[r]);
    return i && ct.extend(!0, t, i), t
  }

  function H(t, n, i) {
    for (var r, o, s, a, u = t.contents, l = t.dataTypes;
      "*" === l[0];) l.shift(), o === e && (o = t.mimeType || n.getResponseHeader("Content-Type"));
    if (o)
      for (a in u)
        if (u[a] && u[a].test(o)) {
          l.unshift(a);
          break
        }
    if (l[0] in i) s = l[0];
    else {
      for (a in i) {
        if (!l[0] || t.converters[a + " " + l[0]]) {
          s = a;
          break
        }
        r || (r = a)
      }
      s = s || r
    }
    return s ? (s !== l[0] && l.unshift(s), i[s]) : e
  }

  function q(t, e, n, i) {
    var r, o, s, a, u, l = {},
      c = t.dataTypes.slice();
    if (c[1])
      for (s in t.converters) l[s.toLowerCase()] = t.converters[s];
    for (o = c.shift(); o;)
      if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift())
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
      if (s = l[u + " " + o] || l["* " + o], !s)
        for (r in l)
          if (a = r.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
            s === !0 ? s = l[r] : l[r] !== !0 && (o = a[0], c.unshift(a[1]));
            break
          }
      if (s !== !0)
        if (s && t["throws"]) e = s(e);
        else try {
          e = s(e)
        } catch (f) {
          return {
            state: "parsererror",
            error: s ? f : "No conversion from " + u + " to " + o
          }
        }
    }
    return {
      state: "success",
      data: e
    }
  }

  function F() {
    try {
      return new t.XMLHttpRequest
    } catch (e) {}
  }

  function M() {
    try {
      return new t.ActiveXObject("Microsoft.XMLHTTP")
    } catch (e) {}
  }

  function I() {
    return setTimeout(function() {
      Ke = e
    }), Ke = ct.now()
  }

  function B(t, e, n) {
    for (var i, r = (on[e] || []).concat(on["*"]), o = 0, s = r.length; s > o; o++)
      if (i = r[o].call(n, e, t)) return i
  }

  function R(t, e, n) {
    var i, r, o = 0,
      s = rn.length,
      a = ct.Deferred().always(function() {
        delete u.elem
      }),
      u = function() {
        if (r) return !1;
        for (var e = Ke || I(), n = Math.max(0, l.startTime + l.duration - e), i = n / l.duration || 0, o = 1 - i, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
        return a.notifyWith(t, [l, o, n]), 1 > o && u ? n : (a.resolveWith(t, [l]), !1)
      },
      l = a.promise({
        elem: t,
        props: ct.extend({}, e),
        opts: ct.extend(!0, {
          specialEasing: {}
        }, n),
        originalProperties: e,
        originalOptions: n,
        startTime: Ke || I(),
        duration: n.duration,
        tweens: [],
        createTween: function(e, n) {
          var i = ct.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(i), i
        },
        stop: function(e) {
          var n = 0,
            i = e ? l.tweens.length : 0;
          if (r) return this;
          for (r = !0; i > n; n++) l.tweens[n].run(1);
          return e ? a.resolveWith(t, [l, e]) : a.rejectWith(t, [l, e]), this
        }
      }),
      c = l.props;
    for (P(c, l.opts.specialEasing); s > o; o++)
      if (i = rn[o].call(l, t, c, l.opts)) return i;
    return ct.map(c, B, l), ct.isFunction(l.opts.start) && l.opts.start.call(t, l), ct.fx.timer(ct.extend(u, {
      elem: t,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }

  function P(t, e) {
    var n, i, r, o, s;
    for (n in t)
      if (i = ct.camelCase(n), r = e[i], o = t[n], ct.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = ct.cssHooks[i], s && "expand" in s) {
        o = s.expand(o), delete t[i];
        for (n in o) n in t || (t[n] = o[n], e[n] = r)
      } else e[i] = r
  }

  function W(t, e, n) {
    var i, r, o, s, a, u, l = this,
      c = {},
      f = t.style,
      h = t.nodeType && T(t),
      p = ct._data(t, "fxshow");
    n.queue || (a = ct._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
      a.unqueued || u()
    }), a.unqueued++, l.always(function() {
      l.always(function() {
        a.unqueued--, ct.queue(t, "fx").length || a.empty.fire()
      })
    })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ct.css(t, "display") && "none" === ct.css(t, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== N(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ct.support.shrinkWrapBlocks || l.always(function() {
      f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
    }));
    for (i in e)
      if (r = e[i], tn.exec(r)) {
        if (delete e[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) continue;
        c[i] = p && p[i] || ct.style(t, i)
      }
    if (!ct.isEmptyObject(c)) {
      p ? "hidden" in p && (h = p.hidden) : p = ct._data(t, "fxshow", {}), o && (p.hidden = !h), h ? ct(t).show() : l.done(function() {
        ct(t).hide()
      }), l.done(function() {
        var e;
        ct._removeData(t, "fxshow");
        for (e in c) ct.style(t, e, c[e])
      });
      for (i in c) s = B(h ? p[i] : 0, i, l), i in p || (p[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
    }
  }

  function $(t, e, n, i, r) {
    return new $.prototype.init(t, e, n, i, r)
  }

  function z(t, e) {
    var n, i = {
        height: t
      },
      r = 0;
    for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Te[r], i["margin" + n] = i["padding" + n] = t;
    return e && (i.opacity = i.width = t), i
  }

  function X(t) {
    return ct.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
  }
  var Q, V, U = typeof e,
    Y = t.location,
    J = t.document,
    G = J.documentElement,
    K = t.jQuery,
    Z = t.$,
    tt = {},
    et = [],
    nt = "1.10.2",
    it = et.concat,
    rt = et.push,
    ot = et.slice,
    st = et.indexOf,
    at = tt.toString,
    ut = tt.hasOwnProperty,
    lt = nt.trim,
    ct = function(t, e) {
      return new ct.fn.init(t, e, V)
    },
    ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ht = /\S+/g,
    pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    dt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    gt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    mt = /^[\],:{}\s]*$/,
    vt = /(?:^|:|,)(?:\s*\[)+/g,
    yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    xt = /^-ms-/,
    _t = /-([\da-z])/gi,
    wt = function(t, e) {
      return e.toUpperCase()
    },
    Tt = function(t) {
      (J.addEventListener || "load" === t.type || "complete" === J.readyState) && (Ct(), ct.ready())
    },
    Ct = function() {
      J.addEventListener ? (J.removeEventListener("DOMContentLoaded", Tt, !1), t.removeEventListener("load", Tt, !1)) : (J.detachEvent("onreadystatechange", Tt), t.detachEvent("onload", Tt))
    };
  ct.fn = ct.prototype = {
      jquery: nt,
      constructor: ct,
      init: function(t, n, i) {
        var r, o;
        if (!t) return this;
        if ("string" == typeof t) {
          if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : dt.exec(t), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
          if (r[1]) {
            if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : J, !0)), gt.test(r[1]) && ct.isPlainObject(n))
              for (r in n) ct.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
            return this
          }
          if (o = J.getElementById(r[2]), o && o.parentNode) {
            if (o.id !== r[2]) return i.find(t);
            this.length = 1, this[0] = o
          }
          return this.context = J, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ct.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ct.makeArray(t, this))
      },
      selector: "",
      length: 0,
      toArray: function() {
        return ot.call(this)
      },
      get: function(t) {
        return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
      },
      pushStack: function(t) {
        var e = ct.merge(this.constructor(), t);
        return e.prevObject = this, e.context = this.context, e
      },
      each: function(t, e) {
        return ct.each(this, t, e)
      },
      ready: function(t) {
        return ct.ready.promise().done(t), this
      },
      slice: function() {
        return this.pushStack(ot.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(t) {
        var e = this.length,
          n = +t + (0 > t ? e : 0);
        return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
      },
      map: function(t) {
        return this.pushStack(ct.map(this, function(e, n) {
          return t.call(e, n, e)
        }))
      },
      end: function() {
        return this.prevObject || this.constructor(null)
      },
      push: rt,
      sort: [].sort,
      splice: [].splice
    }, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function() {
      var t, n, i, r, o, s, a = arguments[0] || {},
        u = 1,
        l = arguments.length,
        c = !1;
      for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, u = 2), "object" == typeof a || ct.isFunction(a) || (a = {}), l === u && (a = this, --u); l > u; u++)
        if (null != (o = arguments[u]))
          for (r in o) t = a[r], i = o[r], a !== i && (c && i && (ct.isPlainObject(i) || (n = ct.isArray(i))) ? (n ? (n = !1, s = t && ct.isArray(t) ? t : []) : s = t && ct.isPlainObject(t) ? t : {}, a[r] = ct.extend(c, s, i)) : i !== e && (a[r] = i));
      return a
    }, ct.extend({
      expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
      noConflict: function(e) {
        return t.$ === ct && (t.$ = Z), e && t.jQuery === ct && (t.jQuery = K), ct
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function(t) {
        t ? ct.readyWait++ : ct.ready(!0)
      },
      ready: function(t) {
        if (t === !0 ? !--ct.readyWait : !ct.isReady) {
          if (!J.body) return setTimeout(ct.ready);
          ct.isReady = !0, t !== !0 && --ct.readyWait > 0 || (Q.resolveWith(J, [ct]), ct.fn.trigger && ct(J).trigger("ready").off("ready"))
        }
      },
      isFunction: function(t) {
        return "function" === ct.type(t)
      },
      isArray: Array.isArray || function(t) {
        return "array" === ct.type(t)
      },
      isWindow: function(t) {
        return null != t && t == t.window
      },
      isNumeric: function(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
      },
      type: function(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[at.call(t)] || "object" : typeof t
      },
      isPlainObject: function(t) {
        var n;
        if (!t || "object" !== ct.type(t) || t.nodeType || ct.isWindow(t)) return !1;
        try {
          if (t.constructor && !ut.call(t, "constructor") && !ut.call(t.constructor.prototype, "isPrototypeOf")) return !1
        } catch (i) {
          return !1
        }
        if (ct.support.ownLast)
          for (n in t) return ut.call(t, n);
        for (n in t);
        return n === e || ut.call(t, n)
      },
      isEmptyObject: function(t) {
        var e;
        for (e in t) return !1;
        return !0
      },
      error: function(t) {
        throw Error(t)
      },
      parseHTML: function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || J;
        var i = gt.exec(t),
          r = !n && [];
        return i ? [e.createElement(i[1])] : (i = ct.buildFragment([t], e, r), r && ct(r).remove(), ct.merge([], i.childNodes))
      },
      parseJSON: function(n) {
        return t.JSON && t.JSON.parse ? t.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ct.trim(n), n && mt.test(n.replace(yt, "@").replace(bt, "]").replace(vt, ""))) ? Function("return " + n)() : (ct.error("Invalid JSON: " + n), e)
      },
      parseXML: function(n) {
        var i, r;
        if (!n || "string" != typeof n) return null;
        try {
          t.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
        } catch (o) {
          i = e
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n), i
      },
      noop: function() {},
      globalEval: function(e) {
        e && ct.trim(e) && (t.execScript || function(e) {
          t.eval.call(t, e)
        })(e)
      },
      camelCase: function(t) {
        return t.replace(xt, "ms-").replace(_t, wt)
      },
      nodeName: function(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
      },
      each: function(t, e, i) {
        var r, o = 0,
          s = t.length,
          a = n(t);
        if (i) {
          if (a)
            for (; s > o && (r = e.apply(t[o], i), r !== !1); o++);
          else
            for (o in t)
              if (r = e.apply(t[o], i), r === !1) break
        } else if (a)
          for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
        else
          for (o in t)
            if (r = e.call(t[o], o, t[o]), r === !1) break; return t
      },
      trim: lt && !lt.call("\ufeff ") ? function(t) {
        return null == t ? "" : lt.call(t)
      } : function(t) {
        return null == t ? "" : (t + "").replace(pt, "")
      },
      makeArray: function(t, e) {
        var i = e || [];
        return null != t && (n(Object(t)) ? ct.merge(i, "string" == typeof t ? [t] : t) : rt.call(i, t)), i
      },
      inArray: function(t, e, n) {
        var i;
        if (e) {
          if (st) return st.call(e, t, n);
          for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
            if (n in e && e[n] === t) return n
        }
        return -1
      },
      merge: function(t, n) {
        var i = n.length,
          r = t.length,
          o = 0;
        if ("number" == typeof i)
          for (; i > o; o++) t[r++] = n[o];
        else
          for (; n[o] !== e;) t[r++] = n[o++];
        return t.length = r, t
      },
      grep: function(t, e, n) {
        var i, r = [],
          o = 0,
          s = t.length;
        for (n = !!n; s > o; o++) i = !!e(t[o], o), n !== i && r.push(t[o]);
        return r
      },
      map: function(t, e, i) {
        var r, o = 0,
          s = t.length,
          a = n(t),
          u = [];
        if (a)
          for (; s > o; o++) r = e(t[o], o, i), null != r && (u[u.length] = r);
        else
          for (o in t) r = e(t[o], o, i), null != r && (u[u.length] = r);
        return it.apply([], u)
      },
      guid: 1,
      proxy: function(t, n) {
        var i, r, o;
        return "string" == typeof n && (o = t[n], n = t, t = o), ct.isFunction(t) ? (i = ot.call(arguments, 2), r = function() {
          return t.apply(n || this, i.concat(ot.call(arguments)))
        }, r.guid = t.guid = t.guid || ct.guid++, r) : e
      },
      access: function(t, n, i, r, o, s, a) {
        var u = 0,
          l = t.length,
          c = null == i;
        if ("object" === ct.type(i)) {
          o = !0;
          for (u in i) ct.access(t, n, u, i[u], !0, s, a)
        } else if (r !== e && (o = !0, ct.isFunction(r) || (a = !0), c && (a ? (n.call(t, r), n = null) : (c = n, n = function(t, e, n) {
            return c.call(ct(t), n)
          })), n))
          for (; l > u; u++) n(t[u], i, a ? r : r.call(t[u], u, n(t[u], i)));
        return o ? t : c ? n.call(t) : l ? n(t[0], i) : s
      },
      now: function() {
        return (new Date).getTime()
      },
      swap: function(t, e, n, i) {
        var r, o, s = {};
        for (o in e) s[o] = t.style[o], t.style[o] = e[o];
        r = n.apply(t, i || []);
        for (o in e) t.style[o] = s[o];
        return r
      }
    }), ct.ready.promise = function(e) {
      if (!Q)
        if (Q = ct.Deferred(), "complete" === J.readyState) setTimeout(ct.ready);
        else if (J.addEventListener) J.addEventListener("DOMContentLoaded", Tt, !1), t.addEventListener("load", Tt, !1);
      else {
        J.attachEvent("onreadystatechange", Tt), t.attachEvent("onload", Tt);
        var n = !1;
        try {
          n = null == t.frameElement && J.documentElement
        } catch (i) {}
        n && n.doScroll && function r() {
          if (!ct.isReady) {
            try {
              n.doScroll("left")
            } catch (t) {
              return setTimeout(r, 50)
            }
            Ct(), ct.ready()
          }
        }()
      }
      return Q.promise(e)
    }, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
      tt["[object " + e + "]"] = e.toLowerCase()
    }), V = ct(J),
    function(t, e) {
      function n(t, e, n, i) {
        var r, o, s, a, u, l, c, f, d, g;
        if ((e ? e.ownerDocument || e : R) !== D && L(e), e = e || D, n = n || [], !t || "string" != typeof t) return n;
        if (1 !== (a = e.nodeType) && 9 !== a) return [];
        if (H && !i) {
          if (r = bt.exec(t))
            if (s = r[1]) {
              if (9 === a) {
                if (o = e.getElementById(s), !o || !o.parentNode) return n;
                if (o.id === s) return n.push(o), n
              } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && I(e, o) && o.id === s) return n.push(o), n
            } else {
              if (r[2]) return tt.apply(n, e.getElementsByTagName(t)), n;
              if ((s = r[3]) && T.getElementsByClassName && e.getElementsByClassName) return tt.apply(n, e.getElementsByClassName(s)), n
            }
          if (T.qsa && (!q || !q.test(t))) {
            if (f = c = B, d = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
              for (l = h(t), (c = e.getAttribute("id")) ? f = c.replace(wt, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", u = l.length; u--;) l[u] = f + p(l[u]);
              d = pt.test(t) && e.parentNode || e, g = l.join(",")
            }
            if (g) try {
              return tt.apply(n, d.querySelectorAll(g)), n
            } catch (m) {} finally {
              c || e.removeAttribute("id")
            }
          }
        }
        return _(t.replace(lt, "$1"), e, n, i)
      }

      function i() {
        function t(n, i) {
          return e.push(n += " ") > k.cacheLength && delete t[e.shift()], t[n] = i
        }
        var e = [];
        return t
      }

      function r(t) {
        return t[B] = !0, t
      }

      function o(t) {
        var e = D.createElement("div");
        try {
          return !!t(e)
        } catch (n) {
          return !1
        } finally {
          e.parentNode && e.parentNode.removeChild(e), e = null
        }
      }

      function s(t, e) {
        for (var n = t.split("|"), i = t.length; i--;) k.attrHandle[n[i]] = e
      }

      function a(t, e) {
        var n = e && t,
          i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
        if (i) return i;
        if (n)
          for (; n = n.nextSibling;)
            if (n === e) return -1;
        return t ? 1 : -1
      }

      function u(t) {
        return function(e) {
          var n = e.nodeName.toLowerCase();
          return "input" === n && e.type === t
        }
      }

      function l(t) {
        return function(e) {
          var n = e.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && e.type === t
        }
      }

      function c(t) {
        return r(function(e) {
          return e = +e, r(function(n, i) {
            for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
          })
        })
      }

      function f() {}

      function h(t, e) {
        var i, r, o, s, a, u, l, c = z[t + " "];
        if (c) return e ? 0 : c.slice(0);
        for (a = t, u = [], l = k.preFilter; a;) {
          (!i || (r = ft.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), i = !1, (r = ht.exec(a)) && (i = r.shift(), o.push({
            value: i,
            type: r[0].replace(lt, " ")
          }), a = a.slice(i.length));
          for (s in k.filter) !(r = vt[s].exec(a)) || l[s] && !(r = l[s](r)) || (i = r.shift(), o.push({
            value: i,
            type: s,
            matches: r
          }), a = a.slice(i.length));
          if (!i) break
        }
        return e ? a.length : a ? n.error(t) : z(t, u).slice(0)
      }

      function p(t) {
        for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
        return i
      }

      function d(t, e, n) {
        var i = e.dir,
          r = n && "parentNode" === i,
          o = W++;
        return e.first ? function(e, n, o) {
          for (; e = e[i];)
            if (1 === e.nodeType || r) return t(e, n, o)
        } : function(e, n, s) {
          var a, u, l, c = P + " " + o;
          if (s) {
            for (; e = e[i];)
              if ((1 === e.nodeType || r) && t(e, n, s)) return !0
          } else
            for (; e = e[i];)
              if (1 === e.nodeType || r)
                if (l = e[B] || (e[B] = {}), (u = l[i]) && u[0] === c) {
                  if ((a = u[1]) === !0 || a === C) return a === !0
                } else if (u = l[i] = [c], u[1] = t(e, n, s) || C, u[1] === !0) return !0
        }
      }

      function g(t) {
        return t.length > 1 ? function(e, n, i) {
          for (var r = t.length; r--;)
            if (!t[r](e, n, i)) return !1;
          return !0
        } : t[0]
      }

      function m(t, e, n, i, r) {
        for (var o, s = [], a = 0, u = t.length, l = null != e; u > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), l && e.push(a));
        return s
      }

      function v(t, e, n, i, o, s) {
        return i && !i[B] && (i = v(i)), o && !o[B] && (o = v(o, s)), r(function(r, s, a, u) {
          var l, c, f, h = [],
            p = [],
            d = s.length,
            g = r || x(e || "*", a.nodeType ? [a] : a, []),
            v = !t || !r && e ? g : m(g, h, t, a, u),
            y = n ? o || (r ? t : d || i) ? [] : s : v;
          if (n && n(v, y, a, u), i)
            for (l = m(y, p), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (y[p[c]] = !(v[p[c]] = f));
          if (r) {
            if (o || t) {
              if (o) {
                for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
                o(null, y = [], l, u)
              }
              for (c = y.length; c--;)(f = y[c]) && (l = o ? nt.call(r, f) : h[c]) > -1 && (r[l] = !(s[l] = f))
            }
          } else y = m(y === s ? y.splice(d, y.length) : y), o ? o(null, s, y, u) : tt.apply(s, y)
        })
      }

      function y(t) {
        for (var e, n, i, r = t.length, o = k.relative[t[0].type], s = o || k.relative[" "], a = o ? 1 : 0, u = d(function(t) {
            return t === e
          }, s, !0), l = d(function(t) {
            return nt.call(e, t) > -1
          }, s, !0), c = [function(t, n, i) {
            return !o && (i || n !== A) || ((e = n).nodeType ? u(t, n, i) : l(t, n, i))
          }]; r > a; a++)
          if (n = k.relative[t[a].type]) c = [d(g(c), n)];
          else {
            if (n = k.filter[t[a].type].apply(null, t[a].matches), n[B]) {
              for (i = ++a; r > i && !k.relative[t[i].type]; i++);
              return v(a > 1 && g(c), a > 1 && p(t.slice(0, a - 1).concat({
                value: " " === t[a - 2].type ? "*" : ""
              })).replace(lt, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && p(t))
            }
            c.push(n)
          }
        return g(c)
      }

      function b(t, e) {
        var i = 0,
          o = e.length > 0,
          s = t.length > 0,
          a = function(r, a, u, l, c) {
            var f, h, p, d = [],
              g = 0,
              v = "0",
              y = r && [],
              b = null != c,
              x = A,
              _ = r || s && k.find.TAG("*", c && a.parentNode || a),
              w = P += null == x ? 1 : Math.random() || .1;
            for (b && (A = a !== D && a, C = i); null != (f = _[v]); v++) {
              if (s && f) {
                for (h = 0; p = t[h++];)
                  if (p(f, a, u)) {
                    l.push(f);
                    break
                  }
                b && (P = w, C = ++i)
              }
              o && ((f = !p && f) && g--, r && y.push(f))
            }
            if (g += v, o && v !== g) {
              for (h = 0; p = e[h++];) p(y, d, a, u);
              if (r) {
                if (g > 0)
                  for (; v--;) y[v] || d[v] || (d[v] = K.call(l));
                d = m(d)
              }
              tt.apply(l, d), b && !r && d.length > 0 && g + e.length > 1 && n.uniqueSort(l)
            }
            return b && (P = w, A = x), y
          };
        return o ? r(a) : a
      }

      function x(t, e, i) {
        for (var r = 0, o = e.length; o > r; r++) n(t, e[r], i);
        return i
      }

      function _(t, e, n, i) {
        var r, o, s, a, u, l = h(t);
        if (!i && 1 === l.length) {
          if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && T.getById && 9 === e.nodeType && H && k.relative[o[1].type]) {
            if (e = (k.find.ID(s.matches[0].replace(Tt, Ct), e) || [])[0], !e) return n;
            t = t.slice(o.shift().value.length)
          }
          for (r = vt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !k.relative[a = s.type]);)
            if ((u = k.find[a]) && (i = u(s.matches[0].replace(Tt, Ct), pt.test(o[0].type) && e.parentNode || e))) {
              if (o.splice(r, 1), t = i.length && p(o), !t) return tt.apply(n, i), n;
              break
            }
        }
        return N(t, l)(i, e, !H, n, pt.test(t)), n
      }
      var w, T, C, k, j, E, N, A, S, L, D, O, H, q, F, M, I, B = "sizzle" + -new Date,
        R = t.document,
        P = 0,
        W = 0,
        $ = i(),
        z = i(),
        X = i(),
        Q = !1,
        V = function(t, e) {
          return t === e ? (Q = !0, 0) : 0
        },
        U = typeof e,
        Y = 1 << 31,
        J = {}.hasOwnProperty,
        G = [],
        K = G.pop,
        Z = G.push,
        tt = G.push,
        et = G.slice,
        nt = G.indexOf || function(t) {
          for (var e = 0, n = this.length; n > e; e++)
            if (this[e] === t) return e;
          return -1
        },
        it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        rt = "[\\x20\\t\\r\\n\\f]",
        ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        st = ot.replace("w", "w#"),
        at = "\\[" + rt + "*(" + ot + ")" + rt + "*(?:([*^$|!~]?=)" + rt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + st + ")|)|)" + rt + "*\\]",
        ut = ":(" + ot + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)",
        lt = RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
        ft = RegExp("^" + rt + "*," + rt + "*"),
        ht = RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
        pt = RegExp(rt + "*[+~]"),
        dt = RegExp("=" + rt + "*([^\\]'\"]*)" + rt + "*\\]", "g"),
        gt = RegExp(ut),
        mt = RegExp("^" + st + "$"),
        vt = {
          ID: RegExp("^#(" + ot + ")"),
          CLASS: RegExp("^\\.(" + ot + ")"),
          TAG: RegExp("^(" + ot.replace("w", "w*") + ")"),
          ATTR: RegExp("^" + at),
          PSEUDO: RegExp("^" + ut),
          CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
          bool: RegExp("^(?:" + it + ")$", "i"),
          needsContext: RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
        },
        yt = /^[^{]+\{\s*\[native \w/,
        bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        xt = /^(?:input|select|textarea|button)$/i,
        _t = /^h\d$/i,
        wt = /'|\\/g,
        Tt = RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
        Ct = function(t, e, n) {
          var i = "0x" + e - 65536;
          return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
        };
      try {
        tt.apply(G = et.call(R.childNodes), R.childNodes), G[R.childNodes.length].nodeType
      } catch (kt) {
        tt = {
          apply: G.length ? function(t, e) {
            Z.apply(t, et.call(e))
          } : function(t, e) {
            for (var n = t.length, i = 0; t[n++] = e[i++];);
            t.length = n - 1
          }
        }
      }
      E = n.isXML = function(t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return e ? "HTML" !== e.nodeName : !1
      }, T = n.support = {}, L = n.setDocument = function(t) {
        var n = t ? t.ownerDocument || t : R,
          i = n.defaultView;
        return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, O = n.documentElement, H = !E(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
          L()
        }), T.attributes = o(function(t) {
          return t.className = "i", !t.getAttribute("className")
        }), T.getElementsByTagName = o(function(t) {
          return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
        }), T.getElementsByClassName = o(function(t) {
          return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
        }), T.getById = o(function(t) {
          return O.appendChild(t).id = B, !n.getElementsByName || !n.getElementsByName(B).length
        }), T.getById ? (k.find.ID = function(t, e) {
          if (typeof e.getElementById !== U && H) {
            var n = e.getElementById(t);
            return n && n.parentNode ? [n] : []
          }
        }, k.filter.ID = function(t) {
          var e = t.replace(Tt, Ct);
          return function(t) {
            return t.getAttribute("id") === e
          }
        }) : (delete k.find.ID, k.filter.ID = function(t) {
          var e = t.replace(Tt, Ct);
          return function(t) {
            var n = typeof t.getAttributeNode !== U && t.getAttributeNode("id");
            return n && n.value === e
          }
        }), k.find.TAG = T.getElementsByTagName ? function(t, n) {
          return typeof n.getElementsByTagName !== U ? n.getElementsByTagName(t) : e
        } : function(t, e) {
          var n, i = [],
            r = 0,
            o = e.getElementsByTagName(t);
          if ("*" === t) {
            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
            return i
          }
          return o
        }, k.find.CLASS = T.getElementsByClassName && function(t, n) {
          return typeof n.getElementsByClassName !== U && H ? n.getElementsByClassName(t) : e
        }, F = [], q = [], (T.qsa = yt.test(n.querySelectorAll)) && (o(function(t) {
          t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || q.push("\\[" + rt + "*(?:value|" + it + ")"), t.querySelectorAll(":checked").length || q.push(":checked")
        }), o(function(t) {
          var e = n.createElement("input");
          e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && q.push("[*^$]=" + rt + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), q.push(",.*:")
        })), (T.matchesSelector = yt.test(M = O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(t) {
          T.disconnectedMatch = M.call(t, "div"), M.call(t, "[s!='']:x"), F.push("!=", ut)
        }), q = q.length && RegExp(q.join("|")), F = F.length && RegExp(F.join("|")), I = yt.test(O.contains) || O.compareDocumentPosition ? function(t, e) {
          var n = 9 === t.nodeType ? t.documentElement : t,
            i = e && e.parentNode;
          return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
        } : function(t, e) {
          if (e)
            for (; e = e.parentNode;)
              if (e === t) return !0;
          return !1
        }, V = O.compareDocumentPosition ? function(t, e) {
          if (t === e) return Q = !0, 0;
          var i = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e);
          return i ? 1 & i || !T.sortDetached && e.compareDocumentPosition(t) === i ? t === n || I(R, t) ? -1 : e === n || I(R, e) ? 1 : S ? nt.call(S, t) - nt.call(S, e) : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
        } : function(t, e) {
          var i, r = 0,
            o = t.parentNode,
            s = e.parentNode,
            u = [t],
            l = [e];
          if (t === e) return Q = !0, 0;
          if (!o || !s) return t === n ? -1 : e === n ? 1 : o ? -1 : s ? 1 : S ? nt.call(S, t) - nt.call(S, e) : 0;
          if (o === s) return a(t, e);
          for (i = t; i = i.parentNode;) u.unshift(i);
          for (i = e; i = i.parentNode;) l.unshift(i);
          for (; u[r] === l[r];) r++;
          return r ? a(u[r], l[r]) : u[r] === R ? -1 : l[r] === R ? 1 : 0
        }, n) : D
      }, n.matches = function(t, e) {
        return n(t, null, null, e)
      }, n.matchesSelector = function(t, e) {
        if ((t.ownerDocument || t) !== D && L(t), e = e.replace(dt, "='$1']"), !(!T.matchesSelector || !H || F && F.test(e) || q && q.test(e))) try {
          var i = M.call(t, e);
          if (i || T.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
        } catch (r) {}
        return n(e, D, null, [t]).length > 0
      }, n.contains = function(t, e) {
        return (t.ownerDocument || t) !== D && L(t), I(t, e)
      }, n.attr = function(t, n) {
        (t.ownerDocument || t) !== D && L(t);
        var i = k.attrHandle[n.toLowerCase()],
          r = i && J.call(k.attrHandle, n.toLowerCase()) ? i(t, n, !H) : e;
        return r === e ? T.attributes || !H ? t.getAttribute(n) : (r = t.getAttributeNode(n)) && r.specified ? r.value : null : r
      }, n.error = function(t) {
        throw Error("Syntax error, unrecognized expression: " + t)
      }, n.uniqueSort = function(t) {
        var e, n = [],
          i = 0,
          r = 0;
        if (Q = !T.detectDuplicates, S = !T.sortStable && t.slice(0), t.sort(V), Q) {
          for (; e = t[r++];) e === t[r] && (i = n.push(r));
          for (; i--;) t.splice(n[i], 1)
        }
        return t
      }, j = n.getText = function(t) {
        var e, n = "",
          i = 0,
          r = t.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) n += j(t)
          } else if (3 === r || 4 === r) return t.nodeValue
        } else
          for (; e = t[i]; i++) n += j(e);
        return n
      }, k = n.selectors = {
        cacheLength: 50,
        createPseudo: r,
        match: vt,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(t) {
            return t[1] = t[1].replace(Tt, Ct), t[3] = (t[4] || t[5] || "").replace(Tt, Ct), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
          },
          CHILD: function(t) {
            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]), t
          },
          PSEUDO: function(t) {
            var n, i = !t[5] && t[2];
            return vt.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : i && gt.test(i) && (n = h(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (t[0] = t[0].slice(0, n), t[2] = i.slice(0, n)), t.slice(0, 3))
          }
        },
        filter: {
          TAG: function(t) {
            var e = t.replace(Tt, Ct).toLowerCase();
            return "*" === t ? function() {
              return !0
            } : function(t) {
              return t.nodeName && t.nodeName.toLowerCase() === e
            }
          },
          CLASS: function(t) {
            var e = $[t + " "];
            return e || (e = RegExp("(^|" + rt + ")" + t + "(" + rt + "|$)")) && $(t, function(t) {
              return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== U && t.getAttribute("class") || "")
            })
          },
          ATTR: function(t, e, i) {
            return function(r) {
              var o = n.attr(r, t);
              return null == o ? "!=" === e : e ? (o += "", "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? (" " + o + " ").indexOf(i) > -1 : "|=" === e ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
            }
          },
          CHILD: function(t, e, n, i, r) {
            var o = "nth" !== t.slice(0, 3),
              s = "last" !== t.slice(-4),
              a = "of-type" === e;
            return 1 === i && 0 === r ? function(t) {
              return !!t.parentNode
            } : function(e, n, u) {
              var l, c, f, h, p, d, g = o !== s ? "nextSibling" : "previousSibling",
                m = e.parentNode,
                v = a && e.nodeName.toLowerCase(),
                y = !u && !a;
              if (m) {
                if (o) {
                  for (; g;) {
                    for (f = e; f = f[g];)
                      if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                    d = g = "only" === t && !d && "nextSibling"
                  }
                  return !0
                }
                if (d = [s ? m.firstChild : m.lastChild], s && y) {
                  for (c = m[B] || (m[B] = {}), l = c[t] || [], p = l[0] === P && l[1], h = l[0] === P && l[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (h = p = 0) || d.pop();)
                    if (1 === f.nodeType && ++h && f === e) {
                      c[t] = [P, p, h];
                      break
                    }
                } else if (y && (l = (e[B] || (e[B] = {}))[t]) && l[0] === P) h = l[1];
                else
                  for (;
                    (f = ++p && f && f[g] || (h = p = 0) || d.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++h || (y && ((f[B] || (f[B] = {}))[t] = [P, h]), f !== e)););
                return h -= r, h === i || 0 === h % i && h / i >= 0
              }
            }
          },
          PSEUDO: function(t, e) {
            var i, o = k.pseudos[t] || k.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
            return o[B] ? o(e) : o.length > 1 ? (i = [t, t, "", e], k.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, n) {
              for (var i, r = o(t, e), s = r.length; s--;) i = nt.call(t, r[s]), t[i] = !(n[i] = r[s])
            }) : function(t) {
              return o(t, 0, i)
            }) : o
          }
        },
        pseudos: {
          not: r(function(t) {
            var e = [],
              n = [],
              i = N(t.replace(lt, "$1"));
            return i[B] ? r(function(t, e, n, r) {
              for (var o, s = i(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
            }) : function(t, r, o) {
              return e[0] = t, i(e, null, o, n), !n.pop()
            }
          }),
          has: r(function(t) {
            return function(e) {
              return n(t, e).length > 0
            }
          }),
          contains: r(function(t) {
            return function(e) {
              return (e.textContent || e.innerText || j(e)).indexOf(t) > -1
            }
          }),
          lang: r(function(t) {
            return mt.test(t || "") || n.error("unsupported lang: " + t), t = t.replace(Tt, Ct).toLowerCase(),
              function(e) {
                var n;
                do
                  if (n = H ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                while ((e = e.parentNode) && 1 === e.nodeType);
                return !1
              }
          }),
          target: function(e) {
            var n = t.location && t.location.hash;
            return n && n.slice(1) === e.id
          },
          root: function(t) {
            return t === O
          },
          focus: function(t) {
            return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
          },
          enabled: function(t) {
            return t.disabled === !1
          },
          disabled: function(t) {
            return t.disabled === !0
          },
          checked: function(t) {
            var e = t.nodeName.toLowerCase();
            return "input" === e && !!t.checked || "option" === e && !!t.selected
          },
          selected: function(t) {
            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
          },
          empty: function(t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
            return !0
          },
          parent: function(t) {
            return !k.pseudos.empty(t)
          },
          header: function(t) {
            return _t.test(t.nodeName)
          },
          input: function(t) {
            return xt.test(t.nodeName)
          },
          button: function(t) {
            var e = t.nodeName.toLowerCase();
            return "input" === e && "button" === t.type || "button" === e
          },
          text: function(t) {
            var e;
            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
          },
          first: c(function() {
            return [0]
          }),
          last: c(function(t, e) {
            return [e - 1]
          }),
          eq: c(function(t, e, n) {
            return [0 > n ? n + e : n]
          }),
          even: c(function(t, e) {
            for (var n = 0; e > n; n += 2) t.push(n);
            return t
          }),
          odd: c(function(t, e) {
            for (var n = 1; e > n; n += 2) t.push(n);
            return t
          }),
          lt: c(function(t, e, n) {
            for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
            return t
          }),
          gt: c(function(t, e, n) {
            for (var i = 0 > n ? n + e : n; e > ++i;) t.push(i);
            return t
          })
        }
      }, k.pseudos.nth = k.pseudos.eq;
      for (w in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) k.pseudos[w] = u(w);
      for (w in {
          submit: !0,
          reset: !0
        }) k.pseudos[w] = l(w);
      f.prototype = k.filters = k.pseudos, k.setFilters = new f, N = n.compile = function(t, e) {
        var n, i = [],
          r = [],
          o = X[t + " "];
        if (!o) {
          for (e || (e = h(t)), n = e.length; n--;) o = y(e[n]), o[B] ? i.push(o) : r.push(o);
          o = X(t, b(r, i))
        }
        return o
      }, T.sortStable = B.split("").sort(V).join("") === B, T.detectDuplicates = Q, L(), T.sortDetached = o(function(t) {
        return 1 & t.compareDocumentPosition(D.createElement("div"))
      }), o(function(t) {
        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
      }) || s("type|href|height|width", function(t, n, i) {
        return i ? e : t.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
      }), T.attributes && o(function(t) {
        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
      }) || s("value", function(t, n, i) {
        return i || "input" !== t.nodeName.toLowerCase() ? e : t.defaultValue
      }), o(function(t) {
        return null == t.getAttribute("disabled")
      }) || s(it, function(t, n, i) {
        var r;
        return i ? e : (r = t.getAttributeNode(n)) && r.specified ? r.value : t[n] === !0 ? n.toLowerCase() : null
      }), ct.find = n, ct.expr = n.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = n.uniqueSort, ct.text = n.getText, ct.isXMLDoc = n.isXML, ct.contains = n.contains
    }(t);
  var kt = {};
  ct.Callbacks = function(t) {
    t = "string" == typeof t ? kt[t] || i(t) : ct.extend({}, t);
    var n, r, o, s, a, u, l = [],
      c = !t.once && [],
      f = function(e) {
        for (r = t.memory && e, o = !0, a = u || 0, u = 0, s = l.length, n = !0; l && s > a; a++)
          if (l[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
            r = !1;
            break
          }
        n = !1, l && (c ? c.length && f(c.shift()) : r ? l = [] : h.disable())
      },
      h = {
        add: function() {
          if (l) {
            var e = l.length;
            ! function i(e) {
              ct.each(e, function(e, n) {
                var r = ct.type(n);
                "function" === r ? t.unique && h.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
              })
            }(arguments), n ? s = l.length : r && (u = e, f(r))
          }
          return this
        },
        remove: function() {
          return l && ct.each(arguments, function(t, e) {
            for (var i;
              (i = ct.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (s >= i && s--, a >= i && a--)
          }), this
        },
        has: function(t) {
          return t ? ct.inArray(t, l) > -1 : !(!l || !l.length)
        },
        empty: function() {
          return l = [], s = 0, this
        },
        disable: function() {
          return l = c = r = e, this
        },
        disabled: function() {
          return !l
        },
        lock: function() {
          return c = e, r || h.disable(), this
        },
        locked: function() {
          return !c
        },
        fireWith: function(t, e) {
          return !l || o && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? c.push(e) : f(e)), this
        },
        fire: function() {
          return h.fireWith(this, arguments), this
        },
        fired: function() {
          return !!o
        }
      };
    return h
  }, ct.extend({
    Deferred: function(t) {
      var e = [
          ["resolve", "done", ct.Callbacks("once memory"), "resolved"],
          ["reject", "fail", ct.Callbacks("once memory"), "rejected"],
          ["notify", "progress", ct.Callbacks("memory")]
        ],
        n = "pending",
        i = {
          state: function() {
            return n
          },
          always: function() {
            return r.done(arguments).fail(arguments), this
          },
          then: function() {
            var t = arguments;
            return ct.Deferred(function(n) {
              ct.each(e, function(e, o) {
                var s = o[0],
                  a = ct.isFunction(t[e]) && t[e];
                r[o[1]](function() {
                  var t = a && a.apply(this, arguments);
                  t && ct.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                })
              }), t = null
            }).promise()
          },
          promise: function(t) {
            return null != t ? ct.extend(t, i) : i
          }
        },
        r = {};
      return i.pipe = i.then, ct.each(e, function(t, o) {
        var s = o[2],
          a = o[3];
        i[o[1]] = s.add, a && s.add(function() {
          n = a
        }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
          return r[o[0] + "With"](this === r ? i : this, arguments), this
        }, r[o[0] + "With"] = s.fireWith
      }), i.promise(r), t && t.call(r, r), r
    },
    when: function(t) {
      var e, n, i, r = 0,
        o = ot.call(arguments),
        s = o.length,
        a = 1 !== s || t && ct.isFunction(t.promise) ? s : 0,
        u = 1 === a ? t : ct.Deferred(),
        l = function(t, n, i) {
          return function(r) {
            n[t] = this, i[t] = arguments.length > 1 ? ot.call(arguments) : r, i === e ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
          }
        };
      if (s > 1)
        for (e = Array(s), n = Array(s), i = Array(s); s > r; r++) o[r] && ct.isFunction(o[r].promise) ? o[r].promise().done(l(r, i, o)).fail(u.reject).progress(l(r, n, e)) : --a;
      return a || u.resolveWith(i, o), u.promise()
    }
  }), ct.support = function(e) {
    var n, i, r, o, s, a, u, l, c, f = J.createElement("div");
    if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*") || [], i = f.getElementsByTagName("a")[0], !i || !i.style || !n.length) return e;
    o = J.createElement("select"), a = o.appendChild(J.createElement("option")), r = f.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== f.className, e.leadingWhitespace = 3 === f.firstChild.nodeType, e.tbody = !f.getElementsByTagName("tbody").length, e.htmlSerialize = !!f.getElementsByTagName("link").length, e.style = /top/.test(i.getAttribute("style")), e.hrefNormalized = "/a" === i.getAttribute("href"), e.opacity = /^0.5/.test(i.style.opacity), e.cssFloat = !!i.style.cssFloat, e.checkOn = !!r.value, e.optSelected = a.selected, e.enctype = !!J.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== J.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, r.checked = !0, e.noCloneChecked = r.cloneNode(!0).checked, o.disabled = !0, e.optDisabled = !a.disabled;
    try {
      delete f.test
    } catch (h) {
      e.deleteExpando = !1
    }
    r = J.createElement("input"), r.setAttribute("value", ""), e.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), e.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), s = J.createDocumentFragment(), s.appendChild(r), e.appendChecked = r.checked, e.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function() {
      e.noCloneEvent = !1
    }), f.cloneNode(!0).click());
    for (c in {
        submit: !0,
        change: !0,
        focusin: !0
      }) f.setAttribute(u = "on" + c, "t"), e[c + "Bubbles"] = u in t || f.attributes[u].expando === !1;
    f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === f.style.backgroundClip;
    for (c in ct(e)) break;
    return e.ownLast = "0" !== c, ct(function() {
      var n, i, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
        s = J.getElementsByTagName("body")[0];
      s && (n = J.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = f.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", e.reliableHiddenOffsets = l && 0 === r[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(s, null != s.style.zoom ? {
        zoom: 1
      } : {}, function() {
        e.boxSizing = 4 === f.offsetWidth
      }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(f, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(f, null) || {
        width: "4px"
      }).width, i = f.appendChild(J.createElement("div")), i.style.cssText = f.style.cssText = o, i.style.marginRight = i.style.width = "0", f.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), typeof f.style.zoom !== U && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== f.offsetWidth, e.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = f = r = i = null)
    }), n = o = s = a = i = r = null, e
  }({});
  var jt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    Et = /([A-Z])/g;
  ct.extend({
    cache: {},
    noData: {
      applet: !0,
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(t) {
      return t = t.nodeType ? ct.cache[t[ct.expando]] : t[ct.expando], !!t && !a(t)
    },
    data: function(t, e, n) {
      return r(t, e, n)
    },
    removeData: function(t, e) {
      return o(t, e)
    },
    _data: function(t, e, n) {
      return r(t, e, n, !0)
    },
    _removeData: function(t, e) {
      return o(t, e, !0)
    },
    acceptData: function(t) {
      if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
      var e = t.nodeName && ct.noData[t.nodeName.toLowerCase()];
      return !e || e !== !0 && t.getAttribute("classid") === e
    }
  }), ct.fn.extend({
    data: function(t, n) {
      var i, r, o = null,
        a = 0,
        u = this[0];
      if (t === e) {
        if (this.length && (o = ct.data(u), 1 === u.nodeType && !ct._data(u, "parsedAttrs"))) {
          for (i = u.attributes; i.length > a; a++) r = i[a].name, 0 === r.indexOf("data-") && (r = ct.camelCase(r.slice(5)), s(u, r, o[r]));
          ct._data(u, "parsedAttrs", !0)
        }
        return o
      }
      return "object" == typeof t ? this.each(function() {
        ct.data(this, t)
      }) : arguments.length > 1 ? this.each(function() {
        ct.data(this, t, n)
      }) : u ? s(u, t, ct.data(u, t)) : null
    },
    removeData: function(t) {
      return this.each(function() {
        ct.removeData(this, t)
      })
    }
  }), ct.extend({
    queue: function(t, n, i) {
      var r;
      return t ? (n = (n || "fx") + "queue", r = ct._data(t, n), i && (!r || ct.isArray(i) ? r = ct._data(t, n, ct.makeArray(i)) : r.push(i)), r || []) : e
    },
    dequeue: function(t, e) {
      e = e || "fx";
      var n = ct.queue(t, e),
        i = n.length,
        r = n.shift(),
        o = ct._queueHooks(t, e),
        s = function() {
          ct.dequeue(t, e)
        };
      "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
    },
    _queueHooks: function(t, e) {
      var n = e + "queueHooks";
      return ct._data(t, n) || ct._data(t, n, {
        empty: ct.Callbacks("once memory").add(function() {
          ct._removeData(t, e + "queue"), ct._removeData(t, n)
        })
      })
    }
  }), ct.fn.extend({
    queue: function(t, n) {
      var i = 2;
      return "string" != typeof t && (n = t, t = "fx", i--), i > arguments.length ? ct.queue(this[0], t) : n === e ? this : this.each(function() {
        var e = ct.queue(this, t, n);
        ct._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ct.dequeue(this, t)
      })
    },
    dequeue: function(t) {
      return this.each(function() {
        ct.dequeue(this, t)
      })
    },
    delay: function(t, e) {
      return t = ct.fx ? ct.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
        var i = setTimeout(e, t);
        n.stop = function() {
          clearTimeout(i)
        }
      })
    },
    clearQueue: function(t) {
      return this.queue(t || "fx", [])
    },
    promise: function(t, n) {
      var i, r = 1,
        o = ct.Deferred(),
        s = this,
        a = this.length,
        u = function() {
          --r || o.resolveWith(s, [s])
        };
      for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--;) i = ct._data(s[a], t + "queueHooks"), i && i.empty && (r++, i.empty.add(u));
      return u(), o.promise(n)
    }
  });
  var Nt, At, St = /[\t\r\n\f]/g,
    Lt = /\r/g,
    Dt = /^(?:input|select|textarea|button|object)$/i,
    Ot = /^(?:a|area)$/i,
    Ht = /^(?:checked|selected)$/i,
    qt = ct.support.getSetAttribute,
    Ft = ct.support.input;
  ct.fn.extend({
    attr: function(t, e) {
      return ct.access(this, ct.attr, t, e, arguments.length > 1)
    },
    removeAttr: function(t) {
      return this.each(function() {
        ct.removeAttr(this, t)
      })
    },
    prop: function(t, e) {
      return ct.access(this, ct.prop, t, e, arguments.length > 1)
    },
    removeProp: function(t) {
      return t = ct.propFix[t] || t, this.each(function() {
        try {
          this[t] = e, delete this[t]
        } catch (n) {}
      })
    },
    addClass: function(t) {
      var e, n, i, r, o, s = 0,
        a = this.length,
        u = "string" == typeof t && t;
      if (ct.isFunction(t)) return this.each(function(e) {
        ct(this).addClass(t.call(this, e, this.className))
      });
      if (u)
        for (e = (t || "").match(ht) || []; a > s; s++)
          if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(St, " ") : " ")) {
            for (o = 0; r = e[o++];) 0 > i.indexOf(" " + r + " ") && (i += r + " ");
            n.className = ct.trim(i)
          }
      return this
    },
    removeClass: function(t) {
      var e, n, i, r, o, s = 0,
        a = this.length,
        u = 0 === arguments.length || "string" == typeof t && t;
      if (ct.isFunction(t)) return this.each(function(e) {
        ct(this).removeClass(t.call(this, e, this.className))
      });
      if (u)
        for (e = (t || "").match(ht) || []; a > s; s++)
          if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(St, " ") : "")) {
            for (o = 0; r = e[o++];)
              for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
            n.className = t ? ct.trim(i) : ""
          }
      return this
    },
    toggleClass: function(t, e) {
      var n = typeof t;
      return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ct.isFunction(t) ? this.each(function(n) {
        ct(this).toggleClass(t.call(this, n, this.className, e), e)
      }) : this.each(function() {
        if ("string" === n)
          for (var e, i = 0, r = ct(this), o = t.match(ht) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
        else(n === U || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ct._data(this, "__className__") || "")
      })
    },
    hasClass: function(t) {
      for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(St, " ").indexOf(e) >= 0) return !0;
      return !1
    },
    val: function(t) {
      var n, i, r, o = this[0];
      return arguments.length ? (r = ct.isFunction(t), this.each(function(n) {
        var o;
        1 === this.nodeType && (o = r ? t.call(this, n, ct(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ct.isArray(o) && (o = ct.map(o, function(t) {
          return null == t ? "" : t + ""
        })), i = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== e || (this.value = o))
      })) : o ? (i = ct.valHooks[o.type] || ct.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (n = i.get(o, "value")) !== e ? n : (n = o.value, "string" == typeof n ? n.replace(Lt, "") : null == n ? "" : n)) : void 0
    }
  }), ct.extend({
    valHooks: {
      option: {
        get: function(t) {
          var e = ct.find.attr(t, "value");
          return null != e ? e : t.text
        }
      },
      select: {
        get: function(t) {
          for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, u = 0 > r ? a : o ? r : 0; a > u; u++)
            if (n = i[u], !(!n.selected && u !== r || (ct.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
              if (e = ct(n).val(), o) return e;
              s.push(e)
            }
          return s
        },
        set: function(t, e) {
          for (var n, i, r = t.options, o = ct.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = ct.inArray(ct(i).val(), o) >= 0) && (n = !0);
          return n || (t.selectedIndex = -1), o
        }
      }
    },
    attr: function(t, n, i) {
      var r, o, s = t.nodeType;
      return t && 3 !== s && 8 !== s && 2 !== s ? typeof t.getAttribute === U ? ct.prop(t, n, i) : (1 === s && ct.isXMLDoc(t) || (n = n.toLowerCase(), r = ct.attrHooks[n] || (ct.expr.match.bool.test(n) ? At : Nt)), i === e ? r && "get" in r && null !== (o = r.get(t, n)) ? o : (o = ct.find.attr(t, n), null == o ? e : o) : null !== i ? r && "set" in r && (o = r.set(t, i, n)) !== e ? o : (t.setAttribute(n, i + ""), i) : (ct.removeAttr(t, n), e)) : void 0
    },
    removeAttr: function(t, e) {
      var n, i, r = 0,
        o = e && e.match(ht);
      if (o && 1 === t.nodeType)
        for (; n = o[r++];) i = ct.propFix[n] || n, ct.expr.match.bool.test(n) ? Ft && qt || !Ht.test(n) ? t[i] = !1 : t[ct.camelCase("default-" + n)] = t[i] = !1 : ct.attr(t, n, ""), t.removeAttribute(qt ? n : i)
    },
    attrHooks: {
      type: {
        set: function(t, e) {
          if (!ct.support.radioValue && "radio" === e && ct.nodeName(t, "input")) {
            var n = t.value;
            return t.setAttribute("type", e), n && (t.value = n), e
          }
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(t, n, i) {
      var r, o, s, a = t.nodeType;
      return t && 3 !== a && 8 !== a && 2 !== a ? (s = 1 !== a || !ct.isXMLDoc(t), s && (n = ct.propFix[n] || n, o = ct.propHooks[n]), i !== e ? o && "set" in o && (r = o.set(t, i, n)) !== e ? r : t[n] = i : o && "get" in o && null !== (r = o.get(t, n)) ? r : t[n]) : void 0
    },
    propHooks: {
      tabIndex: {
        get: function(t) {
          var e = ct.find.attr(t, "tabindex");
          return e ? parseInt(e, 10) : Dt.test(t.nodeName) || Ot.test(t.nodeName) && t.href ? 0 : -1
        }
      }
    }
  }), At = {
    set: function(t, e, n) {
      return e === !1 ? ct.removeAttr(t, n) : Ft && qt || !Ht.test(n) ? t.setAttribute(!qt && ct.propFix[n] || n, n) : t[ct.camelCase("default-" + n)] = t[n] = !0, n
    }
  }, ct.each(ct.expr.match.bool.source.match(/\w+/g), function(t, n) {
    var i = ct.expr.attrHandle[n] || ct.find.attr;
    ct.expr.attrHandle[n] = Ft && qt || !Ht.test(n) ? function(t, n, r) {
      var o = ct.expr.attrHandle[n],
        s = r ? e : (ct.expr.attrHandle[n] = e) != i(t, n, r) ? n.toLowerCase() : null;
      return ct.expr.attrHandle[n] = o, s
    } : function(t, n, i) {
      return i ? e : t[ct.camelCase("default-" + n)] ? n.toLowerCase() : null
    }
  }), Ft && qt || (ct.attrHooks.value = {
    set: function(t, n, i) {
      return ct.nodeName(t, "input") ? (t.defaultValue = n, e) : Nt && Nt.set(t, n, i)
    }
  }), qt || (Nt = {
    set: function(t, n, i) {
      var r = t.getAttributeNode(i);
      return r || t.setAttributeNode(r = t.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === t.getAttribute(i) ? n : e
    }
  }, ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function(t, n, i) {
    var r;
    return i ? e : (r = t.getAttributeNode(n)) && "" !== r.value ? r.value : null
  }, ct.valHooks.button = {
    get: function(t, n) {
      var i = t.getAttributeNode(n);
      return i && i.specified ? i.value : e
    },
    set: Nt.set
  }, ct.attrHooks.contenteditable = {
    set: function(t, e, n) {
      Nt.set(t, "" === e ? !1 : e, n)
    }
  }, ct.each(["width", "height"], function(t, n) {
    ct.attrHooks[n] = {
      set: function(t, i) {
        return "" === i ? (t.setAttribute(n, "auto"), i) : e
      }
    }
  })), ct.support.hrefNormalized || ct.each(["href", "src"], function(t, e) {
    ct.propHooks[e] = {
      get: function(t) {
        return t.getAttribute(e, 4)
      }
    }
  }), ct.support.style || (ct.attrHooks.style = {
    get: function(t) {
      return t.style.cssText || e
    },
    set: function(t, e) {
      return t.style.cssText = e + ""
    }
  }), ct.support.optSelected || (ct.propHooks.selected = {
    get: function(t) {
      var e = t.parentNode;
      return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
    }
  }), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    ct.propFix[this.toLowerCase()] = this
  }), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.each(["radio", "checkbox"], function() {
    ct.valHooks[this] = {
      set: function(t, n) {
        return ct.isArray(n) ? t.checked = ct.inArray(ct(t).val(), n) >= 0 : e
      }
    }, ct.support.checkOn || (ct.valHooks[this].get = function(t) {
      return null === t.getAttribute("value") ? "on" : t.value
    })
  });
  var Mt = /^(?:input|select|textarea)$/i,
    It = /^key/,
    Bt = /^(?:mouse|contextmenu)|click/,
    Rt = /^(?:focusinfocus|focusoutblur)$/,
    Pt = /^([^.]*)(?:\.(.+)|)$/;
  ct.event = {
    global: {},
    add: function(t, n, i, r, o) {
      var s, a, u, l, c, f, h, p, d, g, m, v = ct._data(t);
      if (v) {
        for (i.handler && (l = i, i = l.handler, o = l.selector), i.guid || (i.guid = ct.guid++), (a = v.events) || (a = v.events = {}), (f = v.handle) || (f = v.handle = function(t) {
            return typeof ct === U || t && ct.event.triggered === t.type ? e : ct.event.dispatch.apply(f.elem, arguments)
          }, f.elem = t), n = (n || "").match(ht) || [""], u = n.length; u--;) s = Pt.exec(n[u]) || [], d = m = s[1], g = (s[2] || "").split(".").sort(), d && (c = ct.event.special[d] || {}, d = (o ? c.delegateType : c.bindType) || d, c = ct.event.special[d] || {}, h = ct.extend({
          type: d,
          origType: m,
          data: r,
          handler: i,
          guid: i.guid,
          selector: o,
          needsContext: o && ct.expr.match.needsContext.test(o),
          namespace: g.join(".")
        }, l), (p = a[d]) || (p = a[d] = [], p.delegateCount = 0, c.setup && c.setup.call(t, r, g, f) !== !1 || (t.addEventListener ? t.addEventListener(d, f, !1) : t.attachEvent && t.attachEvent("on" + d, f))), c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, h) : p.push(h), ct.event.global[d] = !0);
        t = null
      }
    },
    remove: function(t, e, n, i, r) {
      var o, s, a, u, l, c, f, h, p, d, g, m = ct.hasData(t) && ct._data(t);
      if (m && (c = m.events)) {
        for (e = (e || "").match(ht) || [""], l = e.length; l--;)
          if (a = Pt.exec(e[l]) || [], p = g = a[1], d = (a[2] || "").split(".").sort(), p) {
            for (f = ct.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, h = c[p] || [], a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = h.length; o--;) s = h[o], !r && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(o, 1), s.selector && h.delegateCount--, f.remove && f.remove.call(t, s));
            u && !h.length && (f.teardown && f.teardown.call(t, d, m.handle) !== !1 || ct.removeEvent(t, p, m.handle), delete c[p])
          } else
            for (p in c) ct.event.remove(t, p + e[l], n, i, !0);
        ct.isEmptyObject(c) && (delete m.handle, ct._removeData(t, "events"))
      }
    },
    trigger: function(n, i, r, o) {
      var s, a, u, l, c, f, h, p = [r || J],
        d = ut.call(n, "type") ? n.type : n,
        g = ut.call(n, "namespace") ? n.namespace.split(".") : [];
      if (u = f = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !Rt.test(d + ct.event.triggered) && (d.indexOf(".") >= 0 && (g = d.split("."), d = g.shift(), g.sort()), a = 0 > d.indexOf(":") && "on" + d, n = n[ct.expando] ? n : new ct.Event(d, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = r), i = null == i ? [n] : ct.makeArray(i, [n]), c = ct.event.special[d] || {}, o || !c.trigger || c.trigger.apply(r, i) !== !1)) {
        if (!o && !c.noBubble && !ct.isWindow(r)) {
          for (l = c.delegateType || d, Rt.test(l + d) || (u = u.parentNode); u; u = u.parentNode) p.push(u), f = u;
          f === (r.ownerDocument || J) && p.push(f.defaultView || f.parentWindow || t)
        }
        for (h = 0;
          (u = p[h++]) && !n.isPropagationStopped();) n.type = h > 1 ? l : c.bindType || d, s = (ct._data(u, "events") || {})[n.type] && ct._data(u, "handle"), s && s.apply(u, i), s = a && u[a], s && ct.acceptData(u) && s.apply && s.apply(u, i) === !1 && n.preventDefault();
        if (n.type = d, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), i) === !1) && ct.acceptData(r) && a && r[d] && !ct.isWindow(r)) {
          f = r[a], f && (r[a] = null), ct.event.triggered = d;
          try {
            r[d]()
          } catch (m) {}
          ct.event.triggered = e, f && (r[a] = f)
        }
        return n.result
      }
    },
    dispatch: function(t) {
      t = ct.event.fix(t);
      var n, i, r, o, s, a = [],
        u = ot.call(arguments),
        l = (ct._data(this, "events") || {})[t.type] || [],
        c = ct.event.special[t.type] || {};
      if (u[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
        for (a = ct.event.handlers.call(this, t, l), n = 0;
          (o = a[n++]) && !t.isPropagationStopped();)
          for (t.currentTarget = o.elem, s = 0;
            (r = o.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, i = ((ct.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, u), i !== e && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, t), t.result
      }
    },
    handlers: function(t, n) {
      var i, r, o, s, a = [],
        u = n.delegateCount,
        l = t.target;
      if (u && l.nodeType && (!t.button || "click" !== t.type))
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
            for (o = [], s = 0; u > s; s++) r = n[s], i = r.selector + " ", o[i] === e && (o[i] = r.needsContext ? ct(i, this).index(l) >= 0 : ct.find(i, this, null, [l]).length), o[i] && o.push(r);
            o.length && a.push({
              elem: l,
              handlers: o
            })
          }
      return n.length > u && a.push({
        elem: this,
        handlers: n.slice(u)
      }), a
    },
    fix: function(t) {
      if (t[ct.expando]) return t;
      var e, n, i, r = t.type,
        o = t,
        s = this.fixHooks[r];
      for (s || (this.fixHooks[r] = s = Bt.test(r) ? this.mouseHooks : It.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ct.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
      return t.target || (t.target = o.srcElement || J), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(t, e) {
        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(t, n) {
        var i, r, o, s = n.button,
          a = n.fromElement;
        return null == t.pageX && null != n.clientX && (r = t.target.ownerDocument || J, o = r.documentElement, i = r.body, t.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), t.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? n.toElement : a), t.which || s === e || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== c() && this.focus) try {
            return this.focus(), !1
          } catch (t) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === c() && this.blur ? (this.blur(), !1) : e
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : e
        },
        _default: function(t) {
          return ct.nodeName(t.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(t) {
          t.result !== e && (t.originalEvent.returnValue = t.result)
        }
      }
    },
    simulate: function(t, e, n, i) {
      var r = ct.extend(new ct.Event, n, {
        type: t,
        isSimulated: !0,
        originalEvent: {}
      });
      i ? ct.event.trigger(r, null, e) : ct.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
    }
  }, ct.removeEvent = J.removeEventListener ? function(t, e, n) {
    t.removeEventListener && t.removeEventListener(e, n, !1)
  } : function(t, e, n) {
    var i = "on" + e;
    t.detachEvent && (typeof t[i] === U && (t[i] = null), t.detachEvent(i, n))
  }, ct.Event = function(t, n) {
    return this instanceof ct.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? u : l) : this.type = t, n && ct.extend(this, n), this.timeStamp = t && t.timeStamp || ct.now(), this[ct.expando] = !0, e) : new ct.Event(t, n)
  }, ct.Event.prototype = {
    isDefaultPrevented: l,
    isPropagationStopped: l,
    isImmediatePropagationStopped: l,
    preventDefault: function() {
      var t = this.originalEvent;
      this.isDefaultPrevented = u, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
    },
    stopPropagation: function() {
      var t = this.originalEvent;
      this.isPropagationStopped = u, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      this.isImmediatePropagationStopped = u, this.stopPropagation()
    }
  }, ct.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function(t, e) {
    ct.event.special[t] = {
      delegateType: e,
      bindType: e,
      handle: function(t) {
        var n, i = this,
          r = t.relatedTarget,
          o = t.handleObj;
        return (!r || r !== i && !ct.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
      }
    }
  }), ct.support.submitBubbles || (ct.event.special.submit = {
    setup: function() {
      return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit", function(t) {
        var n = t.target,
          i = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form : e;
        i && !ct._data(i, "submitBubbles") && (ct.event.add(i, "submit._submit", function(t) {
          t._submit_bubble = !0
        }), ct._data(i, "submitBubbles", !0))
      }), e)
    },
    postDispatch: function(t) {
      t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ct.event.simulate("submit", this.parentNode, t, !0))
    },
    teardown: function() {
      return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), e)
    }
  }), ct.support.changeBubbles || (ct.event.special.change = {
    setup: function() {
      return Mt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function(t) {
        "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
      }), ct.event.add(this, "click._change", function(t) {
        this._just_changed && !t.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, t, !0)
      })), !1) : (ct.event.add(this, "beforeactivate._change", function(t) {
        var e = t.target;
        Mt.test(e.nodeName) && !ct._data(e, "changeBubbles") && (ct.event.add(e, "change._change", function(t) {
          !this.parentNode || t.isSimulated || t.isTrigger || ct.event.simulate("change", this.parentNode, t, !0)
        }), ct._data(e, "changeBubbles", !0))
      }), e)
    },
    handle: function(t) {
      var n = t.target;
      return this !== n || t.isSimulated || t.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? t.handleObj.handler.apply(this, arguments) : e
    },
    teardown: function() {
      return ct.event.remove(this, "._change"), !Mt.test(this.nodeName)
    }
  }), ct.support.focusinBubbles || ct.each({
    focus: "focusin",
    blur: "focusout"
  }, function(t, e) {
    var n = 0,
      i = function(t) {
        ct.event.simulate(e, t.target, ct.event.fix(t), !0)
      };
    ct.event.special[e] = {
      setup: function() {
        0 === n++ && J.addEventListener(t, i, !0)
      },
      teardown: function() {
        0 === --n && J.removeEventListener(t, i, !0)
      }
    }
  }), ct.fn.extend({
    on: function(t, n, i, r, o) {
      var s, a;
      if ("object" == typeof t) {
        "string" != typeof n && (i = i || n, n = e);
        for (s in t) this.on(s, n, i, t[s], o);
        return this
      }
      if (null == i && null == r ? (r = n, i = n = e) : null == r && ("string" == typeof n ? (r = i, i = e) : (r = i, i = n, n = e)), r === !1) r = l;
      else if (!r) return this;
      return 1 === o && (a = r, r = function(t) {
        return ct().off(t), a.apply(this, arguments)
      }, r.guid = a.guid || (a.guid = ct.guid++)), this.each(function() {
        ct.event.add(this, t, r, i, n)
      })
    },
    one: function(t, e, n, i) {
      return this.on(t, e, n, i, 1)
    },
    off: function(t, n, i) {
      var r, o;
      if (t && t.preventDefault && t.handleObj) return r = t.handleObj, ct(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof t) {
        for (o in t) this.off(o, n, t[o]);
        return this
      }
      return (n === !1 || "function" == typeof n) && (i = n, n = e), i === !1 && (i = l), this.each(function() {
        ct.event.remove(this, t, i, n)
      })
    },
    trigger: function(t, e) {
      return this.each(function() {
        ct.event.trigger(t, e, this)
      })
    },
    triggerHandler: function(t, n) {
      var i = this[0];
      return i ? ct.event.trigger(t, n, i, !0) : e
    }
  });
  var Wt = /^.[^:#\[\.,]*$/,
    $t = /^(?:parents|prev(?:Until|All))/,
    zt = ct.expr.match.needsContext,
    Xt = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  ct.fn.extend({
    find: function(t) {
      var e, n = [],
        i = this,
        r = i.length;
      if ("string" != typeof t) return this.pushStack(ct(t).filter(function() {
        for (e = 0; r > e; e++)
          if (ct.contains(i[e], this)) return !0
      }));
      for (e = 0; r > e; e++) ct.find(t, i[e], n);
      return n = this.pushStack(r > 1 ? ct.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
    },
    has: function(t) {
      var e, n = ct(t, this),
        i = n.length;
      return this.filter(function() {
        for (e = 0; i > e; e++)
          if (ct.contains(this, n[e])) return !0
      })
    },
    not: function(t) {
      return this.pushStack(h(this, t || [], !0))
    },
    filter: function(t) {
      return this.pushStack(h(this, t || [], !1))
    },
    is: function(t) {
      return !!h(this, "string" == typeof t && zt.test(t) ? ct(t) : t || [], !1).length
    },
    closest: function(t, e) {
      for (var n, i = 0, r = this.length, o = [], s = zt.test(t) || "string" != typeof t ? ct(t, e || this.context) : 0; r > i; i++)
        for (n = this[i]; n && n !== e; n = n.parentNode)
          if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && ct.find.matchesSelector(n, t))) {
            n = o.push(n);
            break
          }
      return this.pushStack(o.length > 1 ? ct.unique(o) : o)
    },
    index: function(t) {
      return t ? "string" == typeof t ? ct.inArray(this[0], ct(t)) : ct.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(t, e) {
      var n = "string" == typeof t ? ct(t, e) : ct.makeArray(t && t.nodeType ? [t] : t),
        i = ct.merge(this.get(), n);
      return this.pushStack(ct.unique(i))
    },
    addBack: function(t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
  }), ct.each({
    parent: function(t) {
      var e = t.parentNode;
      return e && 11 !== e.nodeType ? e : null
    },
    parents: function(t) {
      return ct.dir(t, "parentNode")
    },
    parentsUntil: function(t, e, n) {
      return ct.dir(t, "parentNode", n)
    },
    next: function(t) {
      return f(t, "nextSibling")
    },
    prev: function(t) {
      return f(t, "previousSibling")
    },
    nextAll: function(t) {
      return ct.dir(t, "nextSibling");
    },
    prevAll: function(t) {
      return ct.dir(t, "previousSibling")
    },
    nextUntil: function(t, e, n) {
      return ct.dir(t, "nextSibling", n)
    },
    prevUntil: function(t, e, n) {
      return ct.dir(t, "previousSibling", n)
    },
    siblings: function(t) {
      return ct.sibling((t.parentNode || {}).firstChild, t)
    },
    children: function(t) {
      return ct.sibling(t.firstChild)
    },
    contents: function(t) {
      return ct.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ct.merge([], t.childNodes)
    }
  }, function(t, e) {
    ct.fn[t] = function(n, i) {
      var r = ct.map(this, e, n);
      return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ct.filter(i, r)), this.length > 1 && (Xt[t] || (r = ct.unique(r)), $t.test(t) && (r = r.reverse())), this.pushStack(r)
    }
  }), ct.extend({
    filter: function(t, e, n) {
      var i = e[0];
      return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ct.find.matchesSelector(i, t) ? [i] : [] : ct.find.matches(t, ct.grep(e, function(t) {
        return 1 === t.nodeType
      }))
    },
    dir: function(t, n, i) {
      for (var r = [], o = t[n]; o && 9 !== o.nodeType && (i === e || 1 !== o.nodeType || !ct(o).is(i));) 1 === o.nodeType && r.push(o), o = o[n];
      return r
    },
    sibling: function(t, e) {
      for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
      return n
    }
  });
  var Qt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Vt = / jQuery\d+="(?:null|\d+)"/g,
    Ut = RegExp("<(?:" + Qt + ")[\\s/>]", "i"),
    Yt = /^\s+/,
    Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Gt = /<([\w:]+)/,
    Kt = /<tbody/i,
    Zt = /<|&#?\w+;/,
    te = /<(?:script|style|link)/i,
    ee = /^(?:checkbox|radio)$/i,
    ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ie = /^$|\/(?:java|ecma)script/i,
    re = /^true\/(.*)/,
    oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    se = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    ae = p(J),
    ue = ae.appendChild(J.createElement("div"));
  se.optgroup = se.option, se.tbody = se.tfoot = se.colgroup = se.caption = se.thead, se.th = se.td, ct.fn.extend({
    text: function(t) {
      return ct.access(this, function(t) {
        return t === e ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || J).createTextNode(t))
      }, null, t, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = d(this, t);
          e.appendChild(t)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = d(this, t);
          e.insertBefore(t, e.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(t) {
        this.parentNode && this.parentNode.insertBefore(t, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(t) {
        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
      })
    },
    remove: function(t, e) {
      for (var n, i = t ? ct.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || ct.cleanData(x(n)), n.parentNode && (e && ct.contains(n.ownerDocument, n) && v(x(n, "script")), n.parentNode.removeChild(n));
      return this
    },
    empty: function() {
      for (var t, e = 0; null != (t = this[e]); e++) {
        for (1 === t.nodeType && ct.cleanData(x(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
        t.options && ct.nodeName(t, "select") && (t.options.length = 0)
      }
      return this
    },
    clone: function(t, e) {
      return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
        return ct.clone(this, t, e)
      })
    },
    html: function(t) {
      return ct.access(this, function(t) {
        var n = this[0] || {},
          i = 0,
          r = this.length;
        if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(Vt, "") : e;
        if (!("string" != typeof t || te.test(t) || !ct.support.htmlSerialize && Ut.test(t) || !ct.support.leadingWhitespace && Yt.test(t) || se[(Gt.exec(t) || ["", ""])[1].toLowerCase()])) {
          t = t.replace(Jt, "<$1></$2>");
          try {
            for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (ct.cleanData(x(n, !1)), n.innerHTML = t);
            n = 0
          } catch (o) {}
        }
        n && this.empty().append(t)
      }, null, t, arguments.length)
    },
    replaceWith: function() {
      var t = ct.map(this, function(t) {
          return [t.nextSibling, t.parentNode]
        }),
        e = 0;
      return this.domManip(arguments, function(n) {
        var i = t[e++],
          r = t[e++];
        r && (i && i.parentNode !== r && (i = this.nextSibling), ct(this).remove(), r.insertBefore(n, i))
      }, !0), e ? this : this.remove()
    },
    detach: function(t) {
      return this.remove(t, !0)
    },
    domManip: function(t, e, n) {
      t = it.apply([], t);
      var i, r, o, s, a, u, l = 0,
        c = this.length,
        f = this,
        h = c - 1,
        p = t[0],
        d = ct.isFunction(p);
      if (d || !(1 >= c || "string" != typeof p || ct.support.checkClone) && ne.test(p)) return this.each(function(i) {
        var r = f.eq(i);
        d && (t[0] = p.call(this, i, r.html())), r.domManip(t, e, n)
      });
      if (c && (u = ct.buildFragment(t, this[0].ownerDocument, !1, !n && this), i = u.firstChild, 1 === u.childNodes.length && (u = i), i)) {
        for (s = ct.map(x(u, "script"), g), o = s.length; c > l; l++) r = u, l !== h && (r = ct.clone(r, !0, !0), o && ct.merge(s, x(r, "script"))), e.call(this[l], r, l);
        if (o)
          for (a = s[s.length - 1].ownerDocument, ct.map(s, m), l = 0; o > l; l++) r = s[l], ie.test(r.type || "") && !ct._data(r, "globalEval") && ct.contains(a, r) && (r.src ? ct._evalUrl(r.src) : ct.globalEval((r.text || r.textContent || r.innerHTML || "").replace(oe, "")));
        u = i = null
      }
      return this
    }
  }), ct.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(t, e) {
    ct.fn[t] = function(t) {
      for (var n, i = 0, r = [], o = ct(t), s = o.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), ct(o[i])[e](n), rt.apply(r, n.get());
      return this.pushStack(r)
    }
  }), ct.extend({
    clone: function(t, e, n) {
      var i, r, o, s, a, u = ct.contains(t.ownerDocument, t);
      if (ct.support.html5Clone || ct.isXMLDoc(t) || !Ut.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ue.innerHTML = t.outerHTML, ue.removeChild(o = ue.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ct.isXMLDoc(t)))
        for (i = x(o), a = x(t), s = 0; null != (r = a[s]); ++s) i[s] && b(r, i[s]);
      if (e)
        if (n)
          for (a = a || x(t), i = i || x(o), s = 0; null != (r = a[s]); s++) y(r, i[s]);
        else y(t, o);
      return i = x(o, "script"), i.length > 0 && v(i, !u && x(t, "script")), i = a = r = null, o
    },
    buildFragment: function(t, e, n, i) {
      for (var r, o, s, a, u, l, c, f = t.length, h = p(e), d = [], g = 0; f > g; g++)
        if (o = t[g], o || 0 === o)
          if ("object" === ct.type(o)) ct.merge(d, o.nodeType ? [o] : o);
          else if (Zt.test(o)) {
        for (a = a || h.appendChild(e.createElement("div")), u = (Gt.exec(o) || ["", ""])[1].toLowerCase(), c = se[u] || se._default, a.innerHTML = c[1] + o.replace(Jt, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
        if (!ct.support.leadingWhitespace && Yt.test(o) && d.push(e.createTextNode(Yt.exec(o)[0])), !ct.support.tbody)
          for (o = "table" !== u || Kt.test(o) ? "<table>" !== c[1] || Kt.test(o) ? 0 : a : a.firstChild, r = o && o.childNodes.length; r--;) ct.nodeName(l = o.childNodes[r], "tbody") && !l.childNodes.length && o.removeChild(l);
        for (ct.merge(d, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
        a = h.lastChild
      } else d.push(e.createTextNode(o));
      for (a && h.removeChild(a), ct.support.appendChecked || ct.grep(x(d, "input"), _), g = 0; o = d[g++];)
        if ((!i || -1 === ct.inArray(o, i)) && (s = ct.contains(o.ownerDocument, o), a = x(h.appendChild(o), "script"), s && v(a), n))
          for (r = 0; o = a[r++];) ie.test(o.type || "") && n.push(o);
      return a = null, h
    },
    cleanData: function(t, e) {
      for (var n, i, r, o, s = 0, a = ct.expando, u = ct.cache, l = ct.support.deleteExpando, c = ct.event.special; null != (n = t[s]); s++)
        if ((e || ct.acceptData(n)) && (r = n[a], o = r && u[r])) {
          if (o.events)
            for (i in o.events) c[i] ? ct.event.remove(n, i) : ct.removeEvent(n, i, o.handle);
          u[r] && (delete u[r], l ? delete n[a] : typeof n.removeAttribute !== U ? n.removeAttribute(a) : n[a] = null, et.push(r))
        }
    },
    _evalUrl: function(t) {
      return ct.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      })
    }
  }), ct.fn.extend({
    wrapAll: function(t) {
      if (ct.isFunction(t)) return this.each(function(e) {
        ct(this).wrapAll(t.call(this, e))
      });
      if (this[0]) {
        var e = ct(t, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
          for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
          return t
        }).append(this)
      }
      return this
    },
    wrapInner: function(t) {
      return ct.isFunction(t) ? this.each(function(e) {
        ct(this).wrapInner(t.call(this, e))
      }) : this.each(function() {
        var e = ct(this),
          n = e.contents();
        n.length ? n.wrapAll(t) : e.append(t)
      })
    },
    wrap: function(t) {
      var e = ct.isFunction(t);
      return this.each(function(n) {
        ct(this).wrapAll(e ? t.call(this, n) : t)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
      }).end()
    }
  });
  var le, ce, fe, he = /alpha\([^)]*\)/i,
    pe = /opacity\s*=\s*([^)]*)/,
    de = /^(top|right|bottom|left)$/,
    ge = /^(none|table(?!-c[ea]).+)/,
    me = /^margin/,
    ve = RegExp("^(" + ft + ")(.*)$", "i"),
    ye = RegExp("^(" + ft + ")(?!px)[a-z%]+$", "i"),
    be = RegExp("^([+-])=(" + ft + ")", "i"),
    xe = {
      BODY: "block"
    },
    _e = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    we = {
      letterSpacing: 0,
      fontWeight: 400
    },
    Te = ["Top", "Right", "Bottom", "Left"],
    Ce = ["Webkit", "O", "Moz", "ms"];
  ct.fn.extend({
    css: function(t, n) {
      return ct.access(this, function(t, n, i) {
        var r, o, s = {},
          a = 0;
        if (ct.isArray(n)) {
          for (o = ce(t), r = n.length; r > a; a++) s[n[a]] = ct.css(t, n[a], !1, o);
          return s
        }
        return i !== e ? ct.style(t, n, i) : ct.css(t, n)
      }, t, n, arguments.length > 1)
    },
    show: function() {
      return C(this, !0)
    },
    hide: function() {
      return C(this)
    },
    toggle: function(t) {
      return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
        T(this) ? ct(this).show() : ct(this).hide()
      })
    }
  }), ct.extend({
    cssHooks: {
      opacity: {
        get: function(t, e) {
          if (e) {
            var n = fe(t, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": ct.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(t, n, i, r) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var o, s, a, u = ct.camelCase(n),
          l = t.style;
        if (n = ct.cssProps[u] || (ct.cssProps[u] = w(l, u)), a = ct.cssHooks[n] || ct.cssHooks[u], i === e) return a && "get" in a && (o = a.get(t, !1, r)) !== e ? o : l[n];
        if (s = typeof i, "string" === s && (o = be.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ct.css(t, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || ct.cssNumber[u] || (i += "px"), ct.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (l[n] = "inherit"), a && "set" in a && (i = a.set(t, i, r)) === e))) try {
          l[n] = i
        } catch (c) {}
      }
    },
    css: function(t, n, i, r) {
      var o, s, a, u = ct.camelCase(n);
      return n = ct.cssProps[u] || (ct.cssProps[u] = w(t.style, u)), a = ct.cssHooks[n] || ct.cssHooks[u], a && "get" in a && (s = a.get(t, !0, i)), s === e && (s = fe(t, n, r)), "normal" === s && n in we && (s = we[n]), "" === i || i ? (o = parseFloat(s), i === !0 || ct.isNumeric(o) ? o || 0 : s) : s
    }
  }), t.getComputedStyle ? (ce = function(e) {
    return t.getComputedStyle(e, null)
  }, fe = function(t, n, i) {
    var r, o, s, a = i || ce(t),
      u = a ? a.getPropertyValue(n) || a[n] : e,
      l = t.style;
    return a && ("" !== u || ct.contains(t.ownerDocument, t) || (u = ct.style(t, n)), ye.test(u) && me.test(n) && (r = l.width, o = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = a.width, l.width = r, l.minWidth = o, l.maxWidth = s)), u
  }) : J.documentElement.currentStyle && (ce = function(t) {
    return t.currentStyle
  }, fe = function(t, n, i) {
    var r, o, s, a = i || ce(t),
      u = a ? a[n] : e,
      l = t.style;
    return null == u && l && l[n] && (u = l[n]), ye.test(u) && !de.test(n) && (r = l.left, o = t.runtimeStyle, s = o && o.left, s && (o.left = t.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = r, s && (o.left = s)), "" === u ? "auto" : u
  }), ct.each(["height", "width"], function(t, n) {
    ct.cssHooks[n] = {
      get: function(t, i, r) {
        return i ? 0 === t.offsetWidth && ge.test(ct.css(t, "display")) ? ct.swap(t, _e, function() {
          return E(t, n, r)
        }) : E(t, n, r) : e
      },
      set: function(t, e, i) {
        var r = i && ce(t);
        return k(t, e, i ? j(t, n, i, ct.support.boxSizing && "border-box" === ct.css(t, "boxSizing", !1, r), r) : 0)
      }
    }
  }), ct.support.opacity || (ct.cssHooks.opacity = {
    get: function(t, e) {
      return pe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
    },
    set: function(t, e) {
      var n = t.style,
        i = t.currentStyle,
        r = ct.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
        o = i && i.filter || n.filter || "";
      n.zoom = 1, (e >= 1 || "" === e) && "" === ct.trim(o.replace(he, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = he.test(o) ? o.replace(he, r) : o + " " + r)
    }
  }), ct(function() {
    ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
      get: function(t, n) {
        return n ? ct.swap(t, {
          display: "inline-block"
        }, fe, [t, "marginRight"]) : e
      }
    }), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function(t, n) {
      ct.cssHooks[n] = {
        get: function(t, i) {
          return i ? (i = fe(t, n), ye.test(i) ? ct(t).position()[n] + "px" : i) : e
        }
      }
    })
  }), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function(t) {
    return 0 >= t.offsetWidth && 0 >= t.offsetHeight || !ct.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ct.css(t, "display"))
  }, ct.expr.filters.visible = function(t) {
    return !ct.expr.filters.hidden(t)
  }), ct.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(t, e) {
    ct.cssHooks[t + e] = {
      expand: function(n) {
        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Te[i] + e] = o[i] || o[i - 2] || o[0];
        return r
      }
    }, me.test(t) || (ct.cssHooks[t + e].set = k)
  });
  var ke = /%20/g,
    je = /\[\]$/,
    Ee = /\r?\n/g,
    Ne = /^(?:submit|button|image|reset|file)$/i,
    Ae = /^(?:input|select|textarea|keygen)/i;
  ct.fn.extend({
    serialize: function() {
      return ct.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var t = ct.prop(this, "elements");
        return t ? ct.makeArray(t) : this
      }).filter(function() {
        var t = this.type;
        return this.name && !ct(this).is(":disabled") && Ae.test(this.nodeName) && !Ne.test(t) && (this.checked || !ee.test(t))
      }).map(function(t, e) {
        var n = ct(this).val();
        return null == n ? null : ct.isArray(n) ? ct.map(n, function(t) {
          return {
            name: e.name,
            value: t.replace(Ee, "\r\n")
          }
        }) : {
          name: e.name,
          value: n.replace(Ee, "\r\n")
        }
      }).get()
    }
  }), ct.param = function(t, n) {
    var i, r = [],
      o = function(t, e) {
        e = ct.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
      };
    if (n === e && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(t) || t.jquery && !ct.isPlainObject(t)) ct.each(t, function() {
      o(this.name, this.value)
    });
    else
      for (i in t) S(i, t[i], n, o);
    return r.join("&").replace(ke, "+")
  }, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
    ct.fn[e] = function(t, n) {
      return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
    }
  }), ct.fn.extend({
    hover: function(t, e) {
      return this.mouseenter(t).mouseleave(e || t)
    },
    bind: function(t, e, n) {
      return this.on(t, null, e, n)
    },
    unbind: function(t, e) {
      return this.off(t, null, e)
    },
    delegate: function(t, e, n, i) {
      return this.on(e, t, n, i)
    },
    undelegate: function(t, e, n) {
      return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
    }
  });
  var Se, Le, De = ct.now(),
    Oe = /\?/,
    He = /#.*$/,
    qe = /([?&])_=[^&]*/,
    Fe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Me = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ie = /^(?:GET|HEAD)$/,
    Be = /^\/\//,
    Re = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Pe = ct.fn.load,
    We = {},
    $e = {},
    ze = "*/".concat("*");
  try {
    Le = Y.href
  } catch (Xe) {
    Le = J.createElement("a"), Le.href = "", Le = Le.href
  }
  Se = Re.exec(Le.toLowerCase()) || [], ct.fn.load = function(t, n, i) {
    if ("string" != typeof t && Pe) return Pe.apply(this, arguments);
    var r, o, s, a = this,
      u = t.indexOf(" ");
    return u >= 0 && (r = t.slice(u, t.length), t = t.slice(0, u)), ct.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (s = "POST"), a.length > 0 && ct.ajax({
      url: t,
      type: s,
      dataType: "html",
      data: n
    }).done(function(t) {
      o = arguments, a.html(r ? ct("<div>").append(ct.parseHTML(t)).find(r) : t)
    }).complete(i && function(t, e) {
      a.each(i, o || [t.responseText, e, t])
    }), this
  }, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
    ct.fn[e] = function(t) {
      return this.on(e, t)
    }
  }), ct.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Le,
      type: "GET",
      isLocal: Me.test(Se[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": ze,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": ct.parseJSON,
        "text xml": ct.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(t, e) {
      return e ? O(O(t, ct.ajaxSettings), e) : O(ct.ajaxSettings, t)
    },
    ajaxPrefilter: L(We),
    ajaxTransport: L($e),
    ajax: function(t, n) {
      function i(t, n, i, r) {
        var o, f, y, b, _, T = n;
        2 !== x && (x = 2, u && clearTimeout(u), c = e, a = r || "", w.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, i && (b = H(h, w, i)), b = q(h, b, w, o), o ? (h.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (ct.lastModified[s] = _), _ = w.getResponseHeader("etag"), _ && (ct.etag[s] = _)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, f = b.data, y = b.error, o = !y)) : (y = T, (t || !T) && (T = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (n || T) + "", o ? g.resolveWith(p, [f, T, w]) : g.rejectWith(p, [w, T, y]), w.statusCode(v), v = e, l && d.trigger(o ? "ajaxSuccess" : "ajaxError", [w, h, o ? f : y]), m.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, h]), --ct.active || ct.event.trigger("ajaxStop")))
      }
      "object" == typeof t && (n = t, t = e), n = n || {};
      var r, o, s, a, u, l, c, f, h = ct.ajaxSetup({}, n),
        p = h.context || h,
        d = h.context && (p.nodeType || p.jquery) ? ct(p) : ct.event,
        g = ct.Deferred(),
        m = ct.Callbacks("once memory"),
        v = h.statusCode || {},
        y = {},
        b = {},
        x = 0,
        _ = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function(t) {
            var e;
            if (2 === x) {
              if (!f)
                for (f = {}; e = Fe.exec(a);) f[e[1].toLowerCase()] = e[2];
              e = f[t.toLowerCase()]
            }
            return null == e ? null : e
          },
          getAllResponseHeaders: function() {
            return 2 === x ? a : null
          },
          setRequestHeader: function(t, e) {
            var n = t.toLowerCase();
            return x || (t = b[n] = b[n] || t, y[t] = e), this
          },
          overrideMimeType: function(t) {
            return x || (h.mimeType = t), this
          },
          statusCode: function(t) {
            var e;
            if (t)
              if (2 > x)
                for (e in t) v[e] = [v[e], t[e]];
              else w.always(t[w.status]);
            return this
          },
          abort: function(t) {
            var e = t || _;
            return c && c.abort(e), i(0, e), this
          }
        };
      if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, h.url = ((t || h.url || Le) + "").replace(He, "").replace(Be, Se[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = ct.trim(h.dataType || "*").toLowerCase().match(ht) || [""], null == h.crossDomain && (r = Re.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === Se[1] && r[2] === Se[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Se[3] || ("http:" === Se[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = ct.param(h.data, h.traditional)), D(We, h, n, w), 2 === x) return w;
      l = h.global, l && 0 === ct.active++ && ct.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ie.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (Oe.test(s) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = qe.test(s) ? s.replace(qe, "$1_=" + De++) : s + (Oe.test(s) ? "&" : "?") + "_=" + De++)), h.ifModified && (ct.lastModified[s] && w.setRequestHeader("If-Modified-Since", ct.lastModified[s]), ct.etag[s] && w.setRequestHeader("If-None-Match", ct.etag[s])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : h.accepts["*"]);
      for (o in h.headers) w.setRequestHeader(o, h.headers[o]);
      if (h.beforeSend && (h.beforeSend.call(p, w, h) === !1 || 2 === x)) return w.abort();
      _ = "abort";
      for (o in {
          success: 1,
          error: 1,
          complete: 1
        }) w[o](h[o]);
      if (c = D($e, h, n, w)) {
        w.readyState = 1, l && d.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (u = setTimeout(function() {
          w.abort("timeout")
        }, h.timeout));
        try {
          x = 1, c.send(y, i)
        } catch (T) {
          if (!(2 > x)) throw T;
          i(-1, T)
        }
      } else i(-1, "No Transport");
      return w
    },
    getJSON: function(t, e, n) {
      return ct.get(t, e, n, "json")
    },
    getScript: function(t, n) {
      return ct.get(t, e, n, "script")
    }
  }), ct.each(["get", "post"], function(t, n) {
    ct[n] = function(t, i, r, o) {
      return ct.isFunction(i) && (o = o || r, r = i, i = e), ct.ajax({
        url: t,
        type: n,
        dataType: o,
        data: i,
        success: r
      })
    }
  }), ct.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(t) {
        return ct.globalEval(t), t
      }
    }
  }), ct.ajaxPrefilter("script", function(t) {
    t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
  }), ct.ajaxTransport("script", function(t) {
    if (t.crossDomain) {
      var n, i = J.head || ct("head")[0] || J.documentElement;
      return {
        send: function(e, r) {
          n = J.createElement("script"), n.async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function(t, e) {
            (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || r(200, "success"))
          }, i.insertBefore(n, i.firstChild)
        },
        abort: function() {
          n && n.onload(e, !0)
        }
      }
    }
  });
  var Qe = [],
    Ve = /(=)\?(?=&|$)|\?\?/;
  ct.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var t = Qe.pop() || ct.expando + "_" + De++;
      return this[t] = !0, t
    }
  }), ct.ajaxPrefilter("json jsonp", function(n, i, r) {
    var o, s, a, u = n.jsonp !== !1 && (Ve.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(n.data) && "data");
    return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Ve, "$1" + o) : n.jsonp !== !1 && (n.url += (Oe.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
      return a || ct.error(o + " was not called"), a[0]
    }, n.dataTypes[0] = "json", s = t[o], t[o] = function() {
      a = arguments
    }, r.always(function() {
      t[o] = s, n[o] && (n.jsonpCallback = i.jsonpCallback, Qe.push(o)), a && ct.isFunction(s) && s(a[0]), a = s = e
    }), "script") : e
  });
  var Ue, Ye, Je = 0,
    Ge = t.ActiveXObject && function() {
      var t;
      for (t in Ue) Ue[t](e, !0)
    };
  ct.ajaxSettings.xhr = t.ActiveXObject ? function() {
    return !this.isLocal && F() || M()
  } : F, Ye = ct.ajaxSettings.xhr(), ct.support.cors = !!Ye && "withCredentials" in Ye, Ye = ct.support.ajax = !!Ye, Ye && ct.ajaxTransport(function(n) {
    if (!n.crossDomain || ct.support.cors) {
      var i;
      return {
        send: function(r, o) {
          var s, a, u = n.xhr();
          if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
            for (a in n.xhrFields) u[a] = n.xhrFields[a];
          n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
          try {
            for (a in r) u.setRequestHeader(a, r[a])
          } catch (l) {}
          u.send(n.hasContent && n.data || null), i = function(t, r) {
            var a, l, c, f;
            try {
              if (i && (r || 4 === u.readyState))
                if (i = e, s && (u.onreadystatechange = ct.noop, Ge && delete Ue[s]), r) 4 !== u.readyState && u.abort();
                else {
                  f = {}, a = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (f.text = u.responseText);
                  try {
                    c = u.statusText
                  } catch (h) {
                    c = ""
                  }
                  a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = f.text ? 200 : 404
                }
            } catch (p) {
              r || o(-1, p)
            }
            f && o(a, c, f, l)
          }, n.async ? 4 === u.readyState ? setTimeout(i) : (s = ++Je, Ge && (Ue || (Ue = {}, ct(t).unload(Ge)), Ue[s] = i), u.onreadystatechange = i) : i()
        },
        abort: function() {
          i && i(e, !0)
        }
      }
    }
  });
  var Ke, Ze, tn = /^(?:toggle|show|hide)$/,
    en = RegExp("^(?:([+-])=|)(" + ft + ")([a-z%]*)$", "i"),
    nn = /queueHooks$/,
    rn = [W],
    on = {
      "*": [function(t, e) {
        var n = this.createTween(t, e),
          i = n.cur(),
          r = en.exec(e),
          o = r && r[3] || (ct.cssNumber[t] ? "" : "px"),
          s = (ct.cssNumber[t] || "px" !== o && +i) && en.exec(ct.css(n.elem, t)),
          a = 1,
          u = 20;
        if (s && s[3] !== o) {
          o = o || s[3], r = r || [], s = +i || 1;
          do a = a || ".5", s /= a, ct.style(n.elem, t, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --u)
        }
        return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
      }]
    };
  ct.Animation = ct.extend(R, {
    tweener: function(t, e) {
      ct.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
      for (var n, i = 0, r = t.length; r > i; i++) n = t[i], on[n] = on[n] || [], on[n].unshift(e)
    },
    prefilter: function(t, e) {
      e ? rn.unshift(t) : rn.push(t)
    }
  }), ct.Tween = $, $.prototype = {
    constructor: $,
    init: function(t, e, n, i, r, o) {
      this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ct.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var t = $.propHooks[this.prop];
      return t && t.get ? t.get(this) : $.propHooks._default.get(this)
    },
    run: function(t) {
      var e, n = $.propHooks[this.prop];
      return this.pos = e = this.options.duration ? ct.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
    }
  }, $.prototype.init.prototype = $.prototype, $.propHooks = {
    _default: {
      get: function(t) {
        var e;
        return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ct.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
      },
      set: function(t) {
        ct.fx.step[t.prop] ? ct.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ct.cssProps[t.prop]] || ct.cssHooks[t.prop]) ? ct.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
      }
    }
  }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
    set: function(t) {
      t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
    }
  }, ct.each(["toggle", "show", "hide"], function(t, e) {
    var n = ct.fn[e];
    ct.fn[e] = function(t, i, r) {
      return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(z(e, !0), t, i, r)
    }
  }), ct.fn.extend({
    fadeTo: function(t, e, n, i) {
      return this.filter(T).css("opacity", 0).show().end().animate({
        opacity: e
      }, t, n, i)
    },
    animate: function(t, e, n, i) {
      var r = ct.isEmptyObject(t),
        o = ct.speed(e, n, i),
        s = function() {
          var e = R(this, ct.extend({}, t), o);
          (r || ct._data(this, "finish")) && e.stop(!0)
        };
      return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
    },
    stop: function(t, n, i) {
      var r = function(t) {
        var e = t.stop;
        delete t.stop, e(i)
      };
      return "string" != typeof t && (i = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), this.each(function() {
        var e = !0,
          n = null != t && t + "queueHooks",
          o = ct.timers,
          s = ct._data(this);
        if (n) s[n] && s[n].stop && r(s[n]);
        else
          for (n in s) s[n] && s[n].stop && nn.test(n) && r(s[n]);
        for (n = o.length; n--;) o[n].elem !== this || null != t && o[n].queue !== t || (o[n].anim.stop(i), e = !1, o.splice(n, 1));
        (e || !i) && ct.dequeue(this, t)
      })
    },
    finish: function(t) {
      return t !== !1 && (t = t || "fx"), this.each(function() {
        var e, n = ct._data(this),
          i = n[t + "queue"],
          r = n[t + "queueHooks"],
          o = ct.timers,
          s = i ? i.length : 0;
        for (n.finish = !0, ct.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
        for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
        delete n.finish
      })
    }
  }), ct.each({
    slideDown: z("show"),
    slideUp: z("hide"),
    slideToggle: z("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(t, e) {
    ct.fn[t] = function(t, n, i) {
      return this.animate(e, t, n, i)
    }
  }), ct.speed = function(t, e, n) {
    var i = t && "object" == typeof t ? ct.extend({}, t) : {
      complete: n || !n && e || ct.isFunction(t) && t,
      duration: t,
      easing: n && e || e && !ct.isFunction(e) && e
    };
    return i.duration = ct.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ct.fx.speeds ? ct.fx.speeds[i.duration] : ct.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
      ct.isFunction(i.old) && i.old.call(this), i.queue && ct.dequeue(this, i.queue)
    }, i
  }, ct.easing = {
    linear: function(t) {
      return t
    },
    swing: function(t) {
      return .5 - Math.cos(t * Math.PI) / 2
    }
  }, ct.timers = [], ct.fx = $.prototype.init, ct.fx.tick = function() {
    var t, n = ct.timers,
      i = 0;
    for (Ke = ct.now(); n.length > i; i++) t = n[i], t() || n[i] !== t || n.splice(i--, 1);
    n.length || ct.fx.stop(), Ke = e
  }, ct.fx.timer = function(t) {
    t() && ct.timers.push(t) && ct.fx.start()
  }, ct.fx.interval = 13, ct.fx.start = function() {
    Ze || (Ze = setInterval(ct.fx.tick, ct.fx.interval))
  }, ct.fx.stop = function() {
    clearInterval(Ze), Ze = null
  }, ct.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function(t) {
    return ct.grep(ct.timers, function(e) {
      return t === e.elem
    }).length
  }), ct.fn.offset = function(t) {
    if (arguments.length) return t === e ? this : this.each(function(e) {
      ct.offset.setOffset(this, t, e)
    });
    var n, i, r = {
        top: 0,
        left: 0
      },
      o = this[0],
      s = o && o.ownerDocument;
    return s ? (n = s.documentElement, ct.contains(n, o) ? (typeof o.getBoundingClientRect !== U && (r = o.getBoundingClientRect()), i = X(s), {
      top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
      left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
    }) : r) : void 0
  }, ct.offset = {
    setOffset: function(t, e, n) {
      var i = ct.css(t, "position");
      "static" === i && (t.style.position = "relative");
      var r, o, s = ct(t),
        a = s.offset(),
        u = ct.css(t, "top"),
        l = ct.css(t, "left"),
        c = ("absolute" === i || "fixed" === i) && ct.inArray("auto", [u, l]) > -1,
        f = {},
        h = {};
      c ? (h = s.position(), r = h.top, o = h.left) : (r = parseFloat(u) || 0, o = parseFloat(l) || 0), ct.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (f.top = e.top - a.top + r), null != e.left && (f.left = e.left - a.left + o), "using" in e ? e.using.call(t, f) : s.css(f)
    }
  }, ct.fn.extend({
    position: function() {
      if (this[0]) {
        var t, e, n = {
            top: 0,
            left: 0
          },
          i = this[0];
        return "fixed" === ct.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ct.nodeName(t[0], "html") || (n = t.offset()), n.top += ct.css(t[0], "borderTopWidth", !0), n.left += ct.css(t[0], "borderLeftWidth", !0)), {
          top: e.top - n.top - ct.css(i, "marginTop", !0),
          left: e.left - n.left - ct.css(i, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var t = this.offsetParent || G; t && !ct.nodeName(t, "html") && "static" === ct.css(t, "position");) t = t.offsetParent;
        return t || G
      })
    }
  }), ct.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(t, n) {
    var i = /Y/.test(n);
    ct.fn[t] = function(r) {
      return ct.access(this, function(t, r, o) {
        var s = X(t);
        return o === e ? s ? n in s ? s[n] : s.document.documentElement[r] : t[r] : (s ? s.scrollTo(i ? ct(s).scrollLeft() : o, i ? o : ct(s).scrollTop()) : t[r] = o, e)
      }, t, r, arguments.length, null)
    }
  }), ct.each({
    Height: "height",
    Width: "width"
  }, function(t, n) {
    ct.each({
      padding: "inner" + t,
      content: n,
      "": "outer" + t
    }, function(i, r) {
      ct.fn[r] = function(r, o) {
        var s = arguments.length && (i || "boolean" != typeof r),
          a = i || (r === !0 || o === !0 ? "margin" : "border");
        return ct.access(this, function(n, i, r) {
          var o;
          return ct.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + t], o["scroll" + t], n.body["offset" + t], o["offset" + t], o["client" + t])) : r === e ? ct.css(n, i, a) : ct.style(n, i, r, a)
        }, n, s ? r : e, s, null)
      }
    })
  }), ct.fn.size = function() {
    return this.length
  }, ct.fn.andSelf = ct.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (t.jQuery = t.$ = ct, "function" == typeof define && define.amd && define("jquery", [], function() {
    return ct
  }))
}(window),
function(t) {
  "use strict";
  var e = t.jCarousel = {};
  e.version = "0.3.4";
  var n = /^([+\-]=)?(.+)$/;
  e.parseTarget = function(t) {
    var e = !1,
      i = "object" != typeof t ? n.exec(t) : null;
    return i ? (t = parseInt(i[2], 10) || 0, i[1] && (e = !0, "-=" === i[1] && (t *= -1))) : "object" != typeof t && (t = parseInt(t, 10) || 0), {
      target: t,
      relative: e
    }
  }, e.detectCarousel = function(t) {
    for (var e; t.length > 0;) {
      if (e = t.filter("[data-jcarousel]"), e.length > 0) return e;
      if (e = t.find("[data-jcarousel]"), e.length > 0) return e;
      t = t.parent()
    }
    return null
  }, e.base = function(n) {
    return {
      version: e.version,
      _options: {},
      _element: null,
      _carousel: null,
      _init: t.noop,
      _create: t.noop,
      _destroy: t.noop,
      _reload: t.noop,
      create: function() {
        return this._element.attr("data-" + n.toLowerCase(), !0).data(n, this), !1 === this._trigger("create") ? this : (this._create(), this._trigger("createend"), this)
      },
      destroy: function() {
        return !1 === this._trigger("destroy") ? this : (this._destroy(), this._trigger("destroyend"), this._element.removeData(n).removeAttr("data-" + n.toLowerCase()), this)
      },
      reload: function(t) {
        return !1 === this._trigger("reload") ? this : (t && this.options(t), this._reload(), this._trigger("reloadend"), this)
      },
      element: function() {
        return this._element
      },
      options: function(e, n) {
        if (0 === arguments.length) return t.extend({}, this._options);
        if ("string" == typeof e) {
          if ("undefined" == typeof n) return "undefined" == typeof this._options[e] ? null : this._options[e];
          this._options[e] = n
        } else this._options = t.extend({}, this._options, e);
        return this
      },
      carousel: function() {
        return this._carousel || (this._carousel = e.detectCarousel(this.options("carousel") || this._element), this._carousel || t.error('Could not detect carousel for plugin "' + n + '"')), this._carousel
      },
      _trigger: function(e, i, r) {
        var o, s = !1;
        return r = [this].concat(r || []), (i || this._element).each(function() {
          o = t.Event((n + ":" + e).toLowerCase()), t(this).trigger(o, r), o.isDefaultPrevented() && (s = !0)
        }), !s
      }
    }
  }, e.plugin = function(n, i) {
    var r = t[n] = function(e, n) {
      this._element = t(e), this.options(n), this._init(), this.create()
    };
    return r.fn = r.prototype = t.extend({}, e.base(n), i), t.fn[n] = function(e) {
      var i = Array.prototype.slice.call(arguments, 1),
        o = this;
      return "string" == typeof e ? this.each(function() {
        var r = t(this).data(n);
        if (!r) return t.error("Cannot call methods on " + n + ' prior to initialization; attempted to call method "' + e + '"');
        if (!t.isFunction(r[e]) || "_" === e.charAt(0)) return t.error('No such method "' + e + '" for ' + n + " instance");
        var s = r[e].apply(r, i);
        return s !== r && "undefined" != typeof s ? (o = s, !1) : void 0
      }) : this.each(function() {
        var i = t(this).data(n);
        i instanceof r ? i.reload(e) : new r(this, e);
      }), o
    }, r
  }
}(jQuery),
function(t, e) {
  "use strict";
  var n = function(t) {
    return parseFloat(t) || 0
  };
  t.jCarousel.plugin("jcarousel", {
    animating: !1,
    tail: 0,
    inTail: !1,
    resizeTimer: null,
    lt: null,
    vertical: !1,
    rtl: !1,
    circular: !1,
    underflow: !1,
    relative: !1,
    _options: {
      list: function() {
        return this.element().children().eq(0)
      },
      items: function() {
        return this.list().children()
      },
      animation: 400,
      transitions: !1,
      wrap: null,
      vertical: null,
      rtl: null,
      center: !1
    },
    _list: null,
    _items: null,
    _target: t(),
    _first: t(),
    _last: t(),
    _visible: t(),
    _fullyvisible: t(),
    _init: function() {
      var t = this;
      return this.onWindowResize = function() {
        t.resizeTimer && clearTimeout(t.resizeTimer), t.resizeTimer = setTimeout(function() {
          t.reload()
        }, 100)
      }, this
    },
    _create: function() {
      this._reload(), t(e).on("resize.jcarousel", this.onWindowResize)
    },
    _destroy: function() {
      t(e).off("resize.jcarousel", this.onWindowResize)
    },
    _reload: function() {
      this.vertical = this.options("vertical"), null == this.vertical && (this.vertical = this.list().height() > this.list().width()), this.rtl = this.options("rtl"), null == this.rtl && (this.rtl = function(e) {
        if ("rtl" === ("" + e.attr("dir")).toLowerCase()) return !0;
        var n = !1;
        return e.parents("[dir]").each(function() {
          return /rtl/i.test(t(this).attr("dir")) ? (n = !0, !1) : void 0
        }), n
      }(this._element)), this.lt = this.vertical ? "top" : "left", this.relative = "relative" === this.list().css("position"), this._list = null, this._items = null;
      var e = this.index(this._target) >= 0 ? this._target : this.closest();
      this.circular = "circular" === this.options("wrap"), this.underflow = !1;
      var n = {
        left: 0,
        top: 0
      };
      return e.length > 0 && (this._prepare(e), this.list().find("[data-jcarousel-clone]").remove(), this._items = null, this.underflow = this._fullyvisible.length >= this.items().length, this.circular = this.circular && !this.underflow, n[this.lt] = this._position(e) + "px"), this.move(n), this
    },
    list: function() {
      if (null === this._list) {
        var e = this.options("list");
        this._list = t.isFunction(e) ? e.call(this) : this._element.find(e)
      }
      return this._list
    },
    items: function() {
      if (null === this._items) {
        var e = this.options("items");
        this._items = (t.isFunction(e) ? e.call(this) : this.list().find(e)).not("[data-jcarousel-clone]")
      }
      return this._items
    },
    index: function(t) {
      return this.items().index(t)
    },
    closest: function() {
      var e, i = this,
        r = this.list().position()[this.lt],
        o = t(),
        s = !1,
        a = this.vertical ? "bottom" : this.rtl && !this.relative ? "left" : "right";
      return this.rtl && this.relative && !this.vertical && (r += this.list().width() - this.clipping()), this.items().each(function() {
        if (o = t(this), s) return !1;
        var u = i.dimension(o);
        if (r += u, r >= 0) {
          if (e = u - n(o.css("margin-" + a)), !(Math.abs(r) - u + e / 2 <= 0)) return !1;
          s = !0
        }
      }), o
    },
    target: function() {
      return this._target
    },
    first: function() {
      return this._first
    },
    last: function() {
      return this._last
    },
    visible: function() {
      return this._visible
    },
    fullyvisible: function() {
      return this._fullyvisible
    },
    hasNext: function() {
      if (!1 === this._trigger("hasnext")) return !0;
      var t = this.options("wrap"),
        e = this.items().length - 1,
        n = this.options("center") ? this._target : this._last;
      return !!(e >= 0 && !this.underflow && (t && "first" !== t || this.index(n) < e || this.tail && !this.inTail))
    },
    hasPrev: function() {
      if (!1 === this._trigger("hasprev")) return !0;
      var t = this.options("wrap");
      return !!(this.items().length > 0 && !this.underflow && (t && "last" !== t || this.index(this._first) > 0 || this.tail && this.inTail))
    },
    clipping: function() {
      return this._element["inner" + (this.vertical ? "Height" : "Width")]()
    },
    dimension: function(t) {
      return t["outer" + (this.vertical ? "Height" : "Width")](!0)
    },
    scroll: function(e, n, i) {
      if (this.animating) return this;
      if (!1 === this._trigger("scroll", null, [e, n])) return this;
      t.isFunction(n) && (i = n, n = !0);
      var r = t.jCarousel.parseTarget(e);
      if (r.relative) {
        var o, s, a, u, l, c, f, h, p = this.items().length - 1,
          d = Math.abs(r.target),
          g = this.options("wrap");
        if (r.target > 0) {
          var m = this.index(this._last);
          if (m >= p && this.tail) this.inTail ? "both" === g || "last" === g ? this._scroll(0, n, i) : t.isFunction(i) && i.call(this, !1) : this._scrollTail(n, i);
          else if (o = this.index(this._target), this.underflow && o === p && ("circular" === g || "both" === g || "last" === g) || !this.underflow && m === p && ("both" === g || "last" === g)) this._scroll(0, n, i);
          else if (a = o + d, this.circular && a > p) {
            for (h = p, l = this.items().get(-1); h++ < a;) l = this.items().eq(0), c = this._visible.index(l) >= 0, c && l.after(l.clone(!0).attr("data-jcarousel-clone", !0)), this.list().append(l), c || (f = {}, f[this.lt] = this.dimension(l), this.moveBy(f)), this._items = null;
            this._scroll(l, n, i)
          } else this._scroll(Math.min(a, p), n, i)
        } else if (this.inTail) this._scroll(Math.max(this.index(this._first) - d + 1, 0), n, i);
        else if (s = this.index(this._first), o = this.index(this._target), u = this.underflow ? o : s, a = u - d, 0 >= u && (this.underflow && "circular" === g || "both" === g || "first" === g)) this._scroll(p, n, i);
        else if (this.circular && 0 > a) {
          for (h = a, l = this.items().get(0); h++ < 0;) {
            l = this.items().eq(-1), c = this._visible.index(l) >= 0, c && l.after(l.clone(!0).attr("data-jcarousel-clone", !0)), this.list().prepend(l), this._items = null;
            var v = this.dimension(l);
            f = {}, f[this.lt] = -v, this.moveBy(f)
          }
          this._scroll(l, n, i)
        } else this._scroll(Math.max(a, 0), n, i)
      } else this._scroll(r.target, n, i);
      return this._trigger("scrollend"), this
    },
    moveBy: function(t, e) {
      var i = this.list().position(),
        r = 1,
        o = 0;
      return this.rtl && !this.vertical && (r = -1, this.relative && (o = this.list().width() - this.clipping())), t.left && (t.left = i.left + o + n(t.left) * r + "px"), t.top && (t.top = i.top + o + n(t.top) * r + "px"), this.move(t, e)
    },
    move: function(e, n) {
      n = n || {};
      var i = this.options("transitions"),
        r = !!i,
        o = !!i.transforms,
        s = !!i.transforms3d,
        a = n.duration || 0,
        u = this.list();
      if (!r && a > 0) return void u.animate(e, n);
      var l = n.complete || t.noop,
        c = {};
      if (r) {
        var f = {
            transitionDuration: u.css("transitionDuration"),
            transitionTimingFunction: u.css("transitionTimingFunction"),
            transitionProperty: u.css("transitionProperty")
          },
          h = l;
        l = function() {
          t(this).css(f), h.call(this)
        }, c = {
          transitionDuration: (a > 0 ? a / 1e3 : 0) + "s",
          transitionTimingFunction: i.easing || n.easing,
          transitionProperty: a > 0 ? function() {
            return o || s ? "all" : e.left ? "left" : "top"
          }() : "none",
          transform: "none"
        }
      }
      s ? c.transform = "translate3d(" + (e.left || 0) + "," + (e.top || 0) + ",0)" : o ? c.transform = "translate(" + (e.left || 0) + "," + (e.top || 0) + ")" : t.extend(c, e), r && a > 0 && u.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", l), u.css(c), 0 >= a && u.each(function() {
        l.call(this)
      })
    },
    _scroll: function(e, n, i) {
      if (this.animating) return t.isFunction(i) && i.call(this, !1), this;
      if ("object" != typeof e ? e = this.items().eq(e) : "undefined" == typeof e.jquery && (e = t(e)), 0 === e.length) return t.isFunction(i) && i.call(this, !1), this;
      this.inTail = !1, this._prepare(e);
      var r = this._position(e),
        o = this.list().position()[this.lt];
      if (r === o) return t.isFunction(i) && i.call(this, !1), this;
      var s = {};
      return s[this.lt] = r + "px", this._animate(s, n, i), this
    },
    _scrollTail: function(e, n) {
      if (this.animating || !this.tail) return t.isFunction(n) && n.call(this, !1), this;
      var i = this.list().position()[this.lt];
      this.rtl && this.relative && !this.vertical && (i += this.list().width() - this.clipping()), this.rtl && !this.vertical ? i += this.tail : i -= this.tail, this.inTail = !0;
      var r = {};
      return r[this.lt] = i + "px", this._update({
        target: this._target.next(),
        fullyvisible: this._fullyvisible.slice(1).add(this._visible.last())
      }), this._animate(r, e, n), this
    },
    _animate: function(e, n, i) {
      if (i = i || t.noop, !1 === this._trigger("animate")) return i.call(this, !1), this;
      this.animating = !0;
      var r = this.options("animation"),
        o = t.proxy(function() {
          this.animating = !1;
          var t = this.list().find("[data-jcarousel-clone]");
          t.length > 0 && (t.remove(), this._reload()), this._trigger("animateend"), i.call(this, !0)
        }, this),
        s = "object" == typeof r ? t.extend({}, r) : {
          duration: r
        },
        a = s.complete || t.noop;
      return n === !1 ? s.duration = 0 : "undefined" != typeof t.fx.speeds[s.duration] && (s.duration = t.fx.speeds[s.duration]), s.complete = function() {
        o(), a.call(this)
      }, this.move(e, s), this
    },
    _prepare: function(e) {
      var i, r, o, s, a = this.index(e),
        u = a,
        l = this.dimension(e),
        c = this.clipping(),
        f = this.vertical ? "bottom" : this.rtl ? "left" : "right",
        h = this.options("center"),
        p = {
          target: e,
          first: e,
          last: e,
          visible: e,
          fullyvisible: c >= l ? e : t()
        };
      if (h && (l /= 2, c /= 2), c > l)
        for (;;) {
          if (i = this.items().eq(++u), 0 === i.length) {
            if (!this.circular) break;
            if (i = this.items().eq(0), e.get(0) === i.get(0)) break;
            if (r = this._visible.index(i) >= 0, r && i.after(i.clone(!0).attr("data-jcarousel-clone", !0)), this.list().append(i), !r) {
              var d = {};
              d[this.lt] = this.dimension(i), this.moveBy(d)
            }
            this._items = null
          }
          if (s = this.dimension(i), 0 === s) break;
          if (l += s, p.last = i, p.visible = p.visible.add(i), o = n(i.css("margin-" + f)), c >= l - o && (p.fullyvisible = p.fullyvisible.add(i)), l >= c) break
        }
      if (!this.circular && !h && c > l)
        for (u = a;;) {
          if (--u < 0) break;
          if (i = this.items().eq(u), 0 === i.length) break;
          if (s = this.dimension(i), 0 === s) break;
          if (l += s, p.first = i, p.visible = p.visible.add(i), o = n(i.css("margin-" + f)), c >= l - o && (p.fullyvisible = p.fullyvisible.add(i)), l >= c) break
        }
      return this._update(p), this.tail = 0, h || "circular" === this.options("wrap") || "custom" === this.options("wrap") || this.index(p.last) !== this.items().length - 1 || (l -= n(p.last.css("margin-" + f)), l > c && (this.tail = l - c)), this
    },
    _position: function(t) {
      var e = this._first,
        n = e.position()[this.lt],
        i = this.options("center"),
        r = i ? this.clipping() / 2 - this.dimension(e) / 2 : 0;
      return this.rtl && !this.vertical ? (n -= this.relative ? this.list().width() - this.dimension(e) : this.clipping() - this.dimension(e), n += r) : n -= r, !i && (this.index(t) > this.index(e) || this.inTail) && this.tail ? (n = this.rtl && !this.vertical ? n - this.tail : n + this.tail, this.inTail = !0) : this.inTail = !1, -n
    },
    _update: function(e) {
      var n, i = this,
        r = {
          target: this._target,
          first: this._first,
          last: this._last,
          visible: this._visible,
          fullyvisible: this._fullyvisible
        },
        o = this.index(e.first || r.first) < this.index(r.first),
        s = function(n) {
          var s = [],
            a = [];
          e[n].each(function() {
            r[n].index(this) < 0 && s.push(this)
          }), r[n].each(function() {
            e[n].index(this) < 0 && a.push(this)
          }), o ? s = s.reverse() : a = a.reverse(), i._trigger(n + "in", t(s)), i._trigger(n + "out", t(a)), i["_" + n] = e[n]
        };
      for (n in e) s(n);
      return this
    }
  })
}(jQuery, window),
function(t) {
  "use strict";
  t.jcarousel.fn.scrollIntoView = function(e, n, i) {
    var r, o = t.jCarousel.parseTarget(e),
      s = this.index(this._fullyvisible.first()),
      a = this.index(this._fullyvisible.last());
    if (r = o.relative ? o.target < 0 ? Math.max(0, s + o.target) : a + o.target : "object" != typeof o.target ? o.target : this.index(o.target), s > r) return this.scroll(r, n, i);
    if (r >= s && a >= r) return t.isFunction(i) && i.call(this, !1), this;
    for (var u, l = this.items(), c = this.clipping(), f = this.vertical ? "bottom" : this.rtl ? "left" : "right", h = 0;;) {
      if (u = l.eq(r), 0 === u.length) break;
      if (h += this.dimension(u), h >= c) {
        var p = parseFloat(u.css("margin-" + f)) || 0;
        h - p !== c && r++;
        break
      }
      if (0 >= r) break;
      r--
    }
    return this.scroll(r, n, i)
  }
}(jQuery),
function(t) {
  "use strict";
  t.jCarousel.plugin("jcarouselControl", {
    _options: {
      target: "+=1",
      event: "click",
      method: "scroll"
    },
    _active: null,
    _init: function() {
      this.onDestroy = t.proxy(function() {
        this._destroy(), this.carousel().one("jcarousel:createend", t.proxy(this._create, this))
      }, this), this.onReload = t.proxy(this._reload, this), this.onEvent = t.proxy(function(e) {
        e.preventDefault();
        var n = this.options("method");
        t.isFunction(n) ? n.call(this) : this.carousel().jcarousel(this.options("method"), this.options("target"))
      }, this)
    },
    _create: function() {
      this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend", this.onReload), this._element.on(this.options("event") + ".jcarouselcontrol", this.onEvent), this._reload()
    },
    _destroy: function() {
      this._element.off(".jcarouselcontrol", this.onEvent), this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend", this.onReload)
    },
    _reload: function() {
      var e, n = t.jCarousel.parseTarget(this.options("target")),
        i = this.carousel();
      if (n.relative) e = i.jcarousel(n.target > 0 ? "hasNext" : "hasPrev");
      else {
        var r = "object" != typeof n.target ? i.jcarousel("items").eq(n.target) : n.target;
        e = i.jcarousel("target").index(r) >= 0
      }
      return this._active !== e && (this._trigger(e ? "active" : "inactive"), this._active = e), this
    }
  })
}(jQuery),
function(t) {
  "use strict";
  t.jCarousel.plugin("jcarouselPagination", {
    _options: {
      perPage: null,
      item: function(t) {
        return '<a href="#' + t + '">' + t + "</a>"
      },
      event: "click",
      method: "scroll"
    },
    _carouselItems: null,
    _pages: {},
    _items: {},
    _currentPage: null,
    _init: function() {
      this.onDestroy = t.proxy(function() {
        this._destroy(), this.carousel().one("jcarousel:createend", t.proxy(this._create, this))
      }, this), this.onReload = t.proxy(this._reload, this), this.onScroll = t.proxy(this._update, this)
    },
    _create: function() {
      this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend", this.onReload).on("jcarousel:scrollend", this.onScroll), this._reload()
    },
    _destroy: function() {
      this._clear(), this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend", this.onReload).off("jcarousel:scrollend", this.onScroll), this._carouselItems = null
    },
    _reload: function() {
      var e = this.options("perPage");
      if (this._pages = {}, this._items = {}, t.isFunction(e) && (e = e.call(this)), null == e) this._pages = this._calculatePages();
      else
        for (var n, i = parseInt(e, 10) || 0, r = this._getCarouselItems(), o = 1, s = 0;;) {
          if (n = r.eq(s++), 0 === n.length) break;
          this._pages[o] ? this._pages[o] = this._pages[o].add(n) : this._pages[o] = n, s % i === 0 && o++
        }
      this._clear();
      var a = this,
        u = this.carousel().data("jcarousel"),
        l = this._element,
        c = this.options("item"),
        f = this._getCarouselItems().length;
      t.each(this._pages, function(e, n) {
        var i = a._items[e] = t(c.call(a, e, n));
        i.on(a.options("event") + ".jcarouselpagination", t.proxy(function() {
          var t = n.eq(0);
          if (u.circular) {
            var i = u.index(u.target()),
              r = u.index(t);
            parseFloat(e) > parseFloat(a._currentPage) ? i > r && (t = "+=" + (f - i + r)) : r > i && (t = "-=" + (i + (f - r)))
          }
          u[this.options("method")](t)
        }, a)), l.append(i)
      }), this._update()
    },
    _update: function() {
      var e, n = this.carousel().jcarousel("target");
      t.each(this._pages, function(t, i) {
        return i.each(function() {
          return n.is(this) ? (e = t, !1) : void 0
        }), e ? !1 : void 0
      }), this._currentPage !== e && (this._trigger("inactive", this._items[this._currentPage]), this._trigger("active", this._items[e])), this._currentPage = e
    },
    items: function() {
      return this._items
    },
    reloadCarouselItems: function() {
      return this._carouselItems = null, this
    },
    _clear: function() {
      this._element.empty(), this._currentPage = null
    },
    _calculatePages: function() {
      for (var t, e, n = this.carousel().data("jcarousel"), i = this._getCarouselItems(), r = n.clipping(), o = 0, s = 0, a = 1, u = {};;) {
        if (t = i.eq(s++), 0 === t.length) break;
        e = n.dimension(t), o + e > r && (a++, o = 0), o += e, u[a] ? u[a] = u[a].add(t) : u[a] = t
      }
      return u
    },
    _getCarouselItems: function() {
      return this._carouselItems || (this._carouselItems = this.carousel().jcarousel("items")), this._carouselItems
    }
  })
}(jQuery),
function(t, e) {
  "use strict";
  var n, i, r = {
    hidden: "visibilitychange",
    mozHidden: "mozvisibilitychange",
    msHidden: "msvisibilitychange",
    webkitHidden: "webkitvisibilitychange"
  };
  t.each(r, function(t, r) {
    return "undefined" != typeof e[t] ? (n = t, i = r, !1) : void 0
  }), t.jCarousel.plugin("jcarouselAutoscroll", {
    _options: {
      target: "+=1",
      interval: 3e3,
      autostart: !0
    },
    _timer: null,
    _started: !1,
    _init: function() {
      this.onDestroy = t.proxy(function() {
        this._destroy(), this.carousel().one("jcarousel:createend", t.proxy(this._create, this))
      }, this), this.onAnimateEnd = t.proxy(this._start, this), this.onVisibilityChange = t.proxy(function() {
        e[n] ? this._stop() : this._start()
      }, this)
    },
    _create: function() {
      this.carousel().one("jcarousel:destroy", this.onDestroy), t(e).on(i, this.onVisibilityChange), this.options("autostart") && this.start()
    },
    _destroy: function() {
      this._stop(), this.carousel().off("jcarousel:destroy", this.onDestroy), t(e).off(i, this.onVisibilityChange)
    },
    _start: function() {
      return this._stop(), this._started ? (this.carousel().one("jcarousel:animateend", this.onAnimateEnd), this._timer = setTimeout(t.proxy(function() {
        this.carousel().jcarousel("scroll", this.options("target"))
      }, this), this.options("interval")), this) : void 0
    },
    _stop: function() {
      return this._timer && (this._timer = clearTimeout(this._timer)), this.carousel().off("jcarousel:animateend", this.onAnimateEnd), this
    },
    start: function() {
      return this._started = !0, this._start(), this
    },
    stop: function() {
      return this._started = !1, this._stop(), this
    }
  })
}(jQuery, document),
function() {
  function t(t, e, n) {
    for (var i = (n || 0) - 1, r = t ? t.length : 0; ++i < r;)
      if (t[i] === e) return i;
    return -1
  }

  function e(e, n) {
    var i = typeof n;
    if (e = e.cache, "boolean" == i || null == n) return e[n] ? 0 : -1;
    "number" != i && "string" != i && (i = "object");
    var r = "number" == i ? n : v + n;
    return e = (e = e[i]) && e[r], "object" == i ? e && t(e, n) > -1 ? 0 : -1 : e ? 0 : -1
  }

  function n(t) {
    var e = this.cache,
      n = typeof t;
    if ("boolean" == n || null == t) e[t] = !0;
    else {
      "number" != n && "string" != n && (n = "object");
      var i = "number" == n ? t : v + t,
        r = e[n] || (e[n] = {});
      "object" == n ? (r[i] || (r[i] = [])).push(t) : r[i] = !0
    }
  }

  function i(t) {
    return t.charCodeAt(0)
  }

  function r(t, e) {
    var n = t.criteria,
      i = e.criteria;
    if (n !== i) {
      if (n > i || "undefined" == typeof n) return 1;
      if (i > n || "undefined" == typeof i) return -1
    }
    return t.index - e.index
  }

  function o(t) {
    var e = -1,
      i = t.length,
      r = t[0],
      o = t[i - 1];
    if (r && "object" == typeof r && o && "object" == typeof o) return !1;
    var s = u();
    s["false"] = s["null"] = s["true"] = s.undefined = !1;
    var a = u();
    for (a.array = t, a.cache = s, a.push = n; ++e < i;) a.push(t[e]);
    return a
  }

  function s(t) {
    return "\\" + X[t]
  }

  function a() {
    return d.pop() || []
  }

  function u() {
    return g.pop() || {
      array: null,
      cache: null,
      configurable: !1,
      criteria: null,
      enumerable: !1,
      "false": !1,
      index: 0,
      leading: !1,
      maxWait: 0,
      "null": !1,
      number: null,
      object: null,
      push: null,
      string: null,
      trailing: !1,
      "true": !1,
      undefined: !1,
      value: null,
      writable: !1
    }
  }

  function l(t) {
    t.length = 0, d.length < b && d.push(t)
  }

  function c(t) {
    var e = t.cache;
    e && c(e), t.array = t.cache = t.criteria = t.object = t.number = t.string = t.value = null, g.length < b && g.push(t)
  }

  function f(t, e, n) {
    e || (e = 0), "undefined" == typeof n && (n = t ? t.length : 0);
    for (var i = -1, r = n - e || 0, o = Array(0 > r ? 0 : r); ++i < r;) o[i] = t[e + i];
    return o
  }

  function h(n) {
    function d(t) {
      return t && "object" == typeof t && !Vn(t) && wn.call(t, "__wrapped__") ? t : new g(t)
    }

    function g(t, e) {
      this.__chain__ = !!e, this.__wrapped__ = t
    }

    function b(t, e, n, i, r) {
      var o = t;
      if (n) {
        if (o = n(o), "undefined" != typeof o) return o;
        o = t
      }
      var s = Tt(o);
      if (s) {
        var u = Nn.call(o);
        if (!$[u]) return o;
        var c = Vn(o)
      }
      if (!s || !e) return s ? c ? f(o) : ti({}, o) : o;
      var h = zn[u];
      switch (u) {
        case F:
        case M:
          return new h(+o);
        case B:
        case W:
          return new h(o);
        case P:
          return h(o.source, k.exec(o))
      }
      var p = !i;
      i || (i = a()), r || (r = a());
      for (var d = i.length; d--;)
        if (i[d] == t) return r[d];
      return o = c ? h(o.length) : {}, c && (wn.call(t, "index") && (o.index = t.index), wn.call(t, "input") && (o.input = t.input)), i.push(t), r.push(o), (c ? Wt : ii)(t, function(t, s) {
        o[s] = b(t, e, n, i, r)
      }), p && (l(i), l(r)), o
    }

    function X(t, e, n) {
      if ("function" != typeof t) return We;
      if ("undefined" == typeof e) return t;
      var i = t.__bindData__ || Xn.funcNames && !t.name;
      if ("undefined" == typeof i) {
        var r = S && xn.call(t);
        Xn.funcNames || !r || j.test(r) || (i = !0), !Xn.funcNames && i || (i = !S || S.test(r), Qn(t, i))
      }
      if (i !== !0 && i && 1 & i[1]) return t;
      switch (n) {
        case 1:
          return function(n) {
            return t.call(e, n)
          };
        case 2:
          return function(n, i) {
            return t.call(e, n, i)
          };
        case 3:
          return function(n, i, r) {
            return t.call(e, n, i, r)
          };
        case 4:
          return function(n, i, r, o) {
            return t.call(e, n, i, r, o)
          }
      }
      return je(t, e)
    }

    function V(t, e, n, i) {
      for (var r = (i || 0) - 1, o = t ? t.length : 0, s = []; ++r < o;) {
        var a = t[r];
        a && "object" == typeof a && (Vn(a) || st(a)) ? Cn.apply(s, e ? a : V(a, e, n)) : n || s.push(a)
      }
      return s
    }

    function Y(t, e, n, i, r, o) {
      if (n) {
        var s = n(t, e);
        if ("undefined" != typeof s) return !!s
      }
      if (t === e) return 0 !== t || 1 / t == 1 / e;
      var u = typeof t,
        c = typeof e;
      if (!(t !== t || t && z[u] || e && z[c])) return !1;
      if (null == t || null == e) return t === e;
      var f = Nn.call(t),
        h = Nn.call(e);
      if (f == H && (f = R), h == H && (h = R), f != h) return !1;
      switch (f) {
        case F:
        case M:
          return +t == +e;
        case B:
          return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
        case P:
        case W:
          return t == fn(e)
      }
      var p = f == q;
      if (!p) {
        if (wn.call(t, "__wrapped__ ") || wn.call(e, "__wrapped__")) return Y(t.__wrapped__ || t, e.__wrapped__ || e, n, i, r, o);
        if (f != R) return !1;
        var d = t.constructor,
          g = e.constructor;
        if (d != g && !(wt(d) && d instanceof d && wt(g) && g instanceof g)) return !1
      }
      var m = !r;
      r || (r = a()), o || (o = a());
      for (var v = r.length; v--;)
        if (r[v] == t) return o[v] == e;
      var y = 0;
      if (s = !0, r.push(t), o.push(e), p) {
        if (v = t.length, y = e.length, s = y == t.length, !s && !i) return s;
        for (; y--;) {
          var b = v,
            x = e[y];
          if (i)
            for (; b-- && !(s = Y(t[b], x, n, i, r, o)););
          else if (!(s = Y(t[y], x, n, i, r, o))) break
        }
        return s
      }
      return ni(e, function(e, a, u) {
        return wn.call(u, a) ? (y++, s = wn.call(t, a) && Y(t[a], e, n, i, r, o)) : void 0
      }), s && !i && ni(t, function(t, e, n) {
        return wn.call(n, e) ? s = --y > -1 : void 0
      }), m && (l(r), l(o)), s
    }

    function G(t, e, n, i, r) {
      (Vn(e) ? Wt : ii)(e, function(e, o) {
        var s, a, u = e,
          l = t[o];
        if (e && ((a = Vn(e)) || ri(e))) {
          for (var c = i.length; c--;)
            if (s = i[c] == e) {
              l = r[c];
              break
            }
          if (!s) {
            var f;
            n && (u = n(l, e), (f = "undefined" != typeof u) && (l = u)), f || (l = a ? Vn(l) ? l : [] : ri(l) ? l : {}), i.push(e), r.push(l), f || G(l, e, n, i, r)
          }
        } else n && (u = n(l, e), "undefined" == typeof u && (u = e)), "undefined" != typeof u && (l = u);
        t[o] = l
      })
    }

    function K(n, i, r) {
      var s = -1,
        u = it(),
        f = n ? n.length : 0,
        h = [],
        p = !i && f >= y && u === t,
        d = r || p ? a() : h;
      if (p) {
        var g = o(d);
        g ? (u = e, d = g) : (p = !1, d = r ? d : (l(d), h))
      }
      for (; ++s < f;) {
        var m = n[s],
          v = r ? r(m, s, n) : m;
        (i ? !s || d[d.length - 1] !== v : u(d, v) < 0) && ((r || p) && d.push(v), h.push(m))
      }
      return p ? (l(d.array), c(d)) : r && l(d), h
    }

    function Z(t) {
      return function(e, n, i) {
        var r = {};
        n = d.createCallback(n, i, 3);
        var o = -1,
          s = e ? e.length : 0;
        if ("number" == typeof s)
          for (; ++o < s;) {
            var a = e[o];
            t(r, a, n(a, o, e), e)
          } else ii(e, function(e, i, o) {
            t(r, e, n(e, i, o), o)
          });
        return r
      }
    }

    function tt(t, e, n, i, r, o) {
      var s = 1 & e,
        a = 2 & e,
        u = 4 & e,
        l = 8 & e,
        c = 16 & e,
        f = 32 & e,
        h = t;
      if (!a && !wt(t)) throw new hn;
      c && !n.length && (e &= -17, c = n = !1), f && !i.length && (e &= -33, f = i = !1);
      var p = t && t.__bindData__;
      if (p) return !s || 1 & p[1] || (p[4] = r), !s && 1 & p[1] && (e |= 8), !u || 4 & p[1] || (p[5] = o), c && Cn.apply(p[2] || (p[2] = []), n), f && Cn.apply(p[3] || (p[3] = []), i), p[1] |= e, tt.apply(null, p);
      if (s && !(a || u || f) && (Xn.fastBind || Ln && c)) {
        if (c) {
          var d = [r];
          Cn.apply(d, n)
        }
        var g = c ? Ln.apply(t, d) : Ln.call(t, r)
      } else g = function() {
        var p = arguments,
          d = s ? r : this;
        if ((u || c || f) && (p = Pn.call(p), c && An.apply(p, n), f && Cn.apply(p, i), u && p.length < o)) return e |= 16, tt(t, l ? e : -4 & e, p, null, r, o);
        if (a && (t = d[h]), this instanceof g) {
          d = et(t.prototype);
          var m = t.apply(d, p);
          return Tt(m) ? m : d
        }
        return t.apply(d, p)
      };
      return Qn(g, Pn.call(arguments)), g
    }

    function et(t) {
      return Tt(t) ? Dn(t) : {}
    }

    function nt(t) {
      return Jn[t]
    }

    function it() {
      var e = (e = d.indexOf) === ce ? t : e;
      return e
    }

    function rt(t) {
      var e, n;
      return t && Nn.call(t) == R && (e = t.constructor, !wt(e) || e instanceof e) ? (ni(t, function(t, e) {
        n = e
      }), "undefined" == typeof n || wn.call(t, n)) : !1
    }

    function ot(t) {
      return Gn[t]
    }

    function st(t) {
      return t && "object" == typeof t ? Nn.call(t) == H : !1
    }

    function at(t, e, n, i) {
      return "boolean" != typeof e && null != e && (i = n, n = e, e = !1), b(t, e, "function" == typeof n && X(n, i, 1))
    }

    function ut(t, e, n) {
      return b(t, !0, "function" == typeof e && X(e, n, 1))
    }

    function lt(t, e, n) {
      var i;
      return e = d.createCallback(e, n, 3), ii(t, function(t, n, r) {
        return e(t, n, r) ? (i = n, !1) : void 0
      }), i
    }

    function ct(t, e, n) {
      var i;
      return e = d.createCallback(e, n, 3), ht(t, function(t, n, r) {
        return e(t, n, r) ? (i = n, !1) : void 0
      }), i
    }

    function ft(t, e, n) {
      var i = [];
      ni(t, function(t, e) {
        i.push(e, t)
      });
      var r = i.length;
      for (e = X(e, n, 3); r-- && e(i[r--], i[r], t) !== !1;);
      return t
    }

    function ht(t, e, n) {
      var i = Yn(t),
        r = i.length;
      for (e = X(e, n, 3); r--;) {
        var o = i[r];
        if (e(t[o], o, t) === !1) break
      }
      return t
    }

    function pt(t) {
      var e = [];
      return ni(t, function(t, n) {
        wt(t) && e.push(n)
      }), e.sort()
    }

    function dt(t, e) {
      return t ? wn.call(t, e) : !1
    }

    function gt(t) {
      for (var e = -1, n = Yn(t), i = n.length, r = {}; ++e < i;) {
        var o = n[e];
        r[t[o]] = o
      }
      return r
    }

    function mt(t) {
      return t === !0 || t === !1 || Nn.call(t) == F
    }

    function vt(t) {
      return t ? "object" == typeof t && Nn.call(t) == M : !1
    }

    function yt(t) {
      return t ? 1 === t.nodeType : !1
    }

    function bt(t) {
      var e = !0;
      if (!t) return e;
      var n = Nn.call(t),
        i = t.length;
      return n == q || n == W || n == H || n == R && "number" == typeof i && wt(t.splice) ? !i : (ii(t, function() {
        return e = !1
      }), e)
    }

    function xt(t, e, n, i) {
      return Y(t, e, "function" == typeof n && X(n, i, 2))
    }

    function _t(t) {
      return Hn(t) && !qn(parseFloat(t))
    }

    function wt(t) {
      return "function" == typeof t
    }

    function Tt(t) {
      return !(!t || !z[typeof t])
    }

    function Ct(t) {
      return jt(t) && t != +t
    }

    function kt(t) {
      return null === t
    }

    function jt(t) {
      return "number" == typeof t || Nn.call(t) == B
    }

    function Et(t) {
      return t ? "object" == typeof t && Nn.call(t) == P : !1
    }

    function Nt(t) {
      return "string" == typeof t || Nn.call(t) == W
    }

    function At(t) {
      return "undefined" == typeof t
    }

    function St(t) {
      var e = arguments,
        n = 2;
      if (!Tt(t)) return t;
      if ("number" != typeof e[2] && (n = e.length), n > 3 && "function" == typeof e[n - 2]) var i = X(e[--n - 1], e[n--], 2);
      else n > 2 && "function" == typeof e[n - 1] && (i = e[--n]);
      for (var r = Pn.call(arguments, 1, n), o = -1, s = a(), u = a(); ++o < n;) G(t, r[o], i, s, u);
      return l(s), l(u), t
    }

    function Lt(t, e, n) {
      var i = it(),
        r = "function" == typeof e,
        o = {};
      if (r) e = d.createCallback(e, n, 3);
      else var s = V(arguments, !0, !1, 1);
      return ni(t, function(t, n, a) {
        (r ? !e(t, n, a) : i(s, n) < 0) && (o[n] = t)
      }), o
    }

    function Dt(t) {
      for (var e = -1, n = Yn(t), i = n.length, r = nn(i); ++e < i;) {
        var o = n[e];
        r[e] = [o, t[o]]
      }
      return r
    }

    function Ot(t, e, n) {
      var i = {};
      if ("function" != typeof e)
        for (var r = -1, o = V(arguments, !0, !1, 1), s = Tt(t) ? o.length : 0; ++r < s;) {
          var a = o[r];
          a in t && (i[a] = t[a])
        } else e = d.createCallback(e, n, 3), ni(t, function(t, n, r) {
          e(t, n, r) && (i[n] = t)
        });
      return i
    }

    function Ht(t, e, n, i) {
      var r = Vn(t);
      if (e = X(e, i, 4), null == n)
        if (r) n = [];
        else {
          var o = t && t.constructor,
            s = o && o.prototype;
          n = et(s)
        }
      return (r ? Wt : ii)(t, function(t, i, r) {
        return e(n, t, i, r)
      }), n
    }

    function qt(t) {
      for (var e = -1, n = Yn(t), i = n.length, r = nn(i); ++e < i;) r[e] = t[n[e]];
      return r
    }

    function Ft(t) {
      for (var e = arguments, n = -1, i = V(e, !0, !1, 1), r = e[2] && e[2][e[1]] === t ? 1 : i.length, o = nn(r); ++n < r;) o[n] = t[i[n]];
      return o
    }

    function Mt(t, e, n) {
      var i = -1,
        r = it(),
        o = t ? t.length : 0,
        s = !1;
      return n = (0 > n ? Mn(0, o + n) : n) || 0, Vn(t) ? s = r(t, e, n) > -1 : "number" == typeof o ? s = (Nt(t) ? t.indexOf(e, n) : r(t, e, n)) > -1 : ii(t, function(t) {
        return ++i >= n ? !(s = t === e) : void 0
      }), s
    }

    function It(t, e, n) {
      var i = !0;
      e = d.createCallback(e, n, 3);
      var r = -1,
        o = t ? t.length : 0;
      if ("number" == typeof o)
        for (; ++r < o && (i = !!e(t[r], r, t)););
      else ii(t, function(t, n, r) {
        return i = !!e(t, n, r)
      });
      return i
    }

    function Bt(t, e, n) {
      var i = [];
      e = d.createCallback(e, n, 3);
      var r = -1,
        o = t ? t.length : 0;
      if ("number" == typeof o)
        for (; ++r < o;) {
          var s = t[r];
          e(s, r, t) && i.push(s)
        } else ii(t, function(t, n, r) {
          e(t, n, r) && i.push(t)
        });
      return i
    }

    function Rt(t, e, n) {
      e = d.createCallback(e, n, 3);
      var i = -1,
        r = t ? t.length : 0;
      if ("number" != typeof r) {
        var o;
        return ii(t, function(t, n, i) {
          return e(t, n, i) ? (o = t, !1) : void 0
        }), o
      }
      for (; ++i < r;) {
        var s = t[i];
        if (e(s, i, t)) return s
      }
    }

    function Pt(t, e, n) {
      var i;
      return e = d.createCallback(e, n, 3), $t(t, function(t, n, r) {
        return e(t, n, r) ? (i = t, !1) : void 0
      }), i
    }

    function Wt(t, e, n) {
      var i = -1,
        r = t ? t.length : 0;
      if (e = e && "undefined" == typeof n ? e : X(e, n, 3), "number" == typeof r)
        for (; ++i < r && e(t[i], i, t) !== !1;);
      else ii(t, e);
      return t
    }

    function $t(t, e, n) {
      var i = t ? t.length : 0;
      if (e = e && "undefined" == typeof n ? e : X(e, n, 3), "number" == typeof i)
        for (; i-- && e(t[i], i, t) !== !1;);
      else {
        var r = Yn(t);
        i = r.length, ii(t, function(t, n, o) {
          return n = r ? r[--i] : --i, e(o[n], n, o)
        })
      }
      return t
    }

    function zt(t, e) {
      var n = Pn.call(arguments, 2),
        i = -1,
        r = "function" == typeof e,
        o = t ? t.length : 0,
        s = nn("number" == typeof o ? o : 0);
      return Wt(t, function(t) {
        s[++i] = (r ? e : t[e]).apply(t, n)
      }), s
    }

    function Xt(t, e, n) {
      var i = -1,
        r = t ? t.length : 0;
      if (e = d.createCallback(e, n, 3), "number" == typeof r)
        for (var o = nn(r); ++i < r;) o[i] = e(t[i], i, t);
      else o = [], ii(t, function(t, n, r) {
        o[++i] = e(t, n, r)
      });
      return o
    }

    function Qt(t, e, n) {
      var r = -(1 / 0),
        o = r;
      if (!e && Vn(t))
        for (var s = -1, a = t.length; ++s < a;) {
          var u = t[s];
          u > o && (o = u)
        } else e = !e && Nt(t) ? i : d.createCallback(e, n, 3), Wt(t, function(t, n, i) {
          var s = e(t, n, i);
          s > r && (r = s, o = t)
        });
      return o
    }

    function Vt(t, e, n) {
      var r = 1 / 0,
        o = r;
      if (!e && Vn(t))
        for (var s = -1, a = t.length; ++s < a;) {
          var u = t[s];
          o > u && (o = u)
        } else e = !e && Nt(t) ? i : d.createCallback(e, n, 3), Wt(t, function(t, n, i) {
          var s = e(t, n, i);
          r > s && (r = s, o = t)
        });
      return o
    }

    function Ut(t, e) {
      var n = -1,
        i = t ? t.length : 0;
      if ("number" == typeof i)
        for (var r = nn(i); ++n < i;) r[n] = t[n][e];
      return r || Xt(t, e)
    }

    function Yt(t, e, n, i) {
      if (!t) return n;
      var r = arguments.length < 3;
      e = X(e, i, 4);
      var o = -1,
        s = t.length;
      if ("number" == typeof s)
        for (r && (n = t[++o]); ++o < s;) n = e(n, t[o], o, t);
      else ii(t, function(t, i, o) {
        n = r ? (r = !1, t) : e(n, t, i, o)
      });
      return n
    }

    function Jt(t, e, n, i) {
      var r = arguments.length < 3;
      return e = X(e, i, 4), $t(t, function(t, i, o) {
        n = r ? (r = !1, t) : e(n, t, i, o)
      }), n
    }

    function Gt(t, e, n) {
      return e = d.createCallback(e, n, 3), Bt(t, function(t, n, i) {
        return !e(t, n, i)
      })
    }

    function Kt(t, e, n) {
      var i = t ? t.length : 0;
      if ("number" != typeof i && (t = qt(t)), null == e || n) return t ? t[Xe(i - 1)] : p;
      var r = Zt(t);
      return r.length = In(Mn(0, e), r.length), r
    }

    function Zt(t) {
      var e = -1,
        n = t ? t.length : 0,
        i = nn("number" == typeof n ? n : 0);
      return Wt(t, function(t) {
        var n = Xe(++e);
        i[e] = i[n], i[n] = t
      }), i
    }

    function te(t) {
      var e = t ? t.length : 0;
      return "number" == typeof e ? e : Yn(t).length
    }

    function ee(t, e, n) {
      var i;
      e = d.createCallback(e, n, 3);
      var r = -1,
        o = t ? t.length : 0;
      if ("number" == typeof o)
        for (; ++r < o && !(i = e(t[r], r, t)););
      else ii(t, function(t, n, r) {
        return !(i = e(t, n, r))
      });
      return !!i
    }

    function ne(t, e, n) {
      var i = -1,
        o = t ? t.length : 0,
        s = nn("number" == typeof o ? o : 0);
      for (e = d.createCallback(e, n, 3), Wt(t, function(t, n, r) {
          var o = s[++i] = u();
          o.criteria = e(t, n, r), o.index = i, o.value = t
        }), o = s.length, s.sort(r); o--;) {
        var a = s[o];
        s[o] = a.value, c(a)
      }
      return s
    }

    function ie(t) {
      return t && "number" == typeof t.length ? f(t) : qt(t)
    }

    function re(t) {
      for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
        var r = t[e];
        r && i.push(r)
      }
      return i
    }

    function oe(n) {
      var i = -1,
        r = it(),
        s = n ? n.length : 0,
        a = V(arguments, !0, !0, 1),
        u = [],
        l = s >= y && r === t;
      if (l) {
        var f = o(a);
        f ? (r = e, a = f) : l = !1
      }
      for (; ++i < s;) {
        var h = n[i];
        r(a, h) < 0 && u.push(h)
      }
      return l && c(a), u
    }

    function se(t, e, n) {
      var i = -1,
        r = t ? t.length : 0;
      for (e = d.createCallback(e, n, 3); ++i < r;)
        if (e(t[i], i, t)) return i;
      return -1
    }

    function ae(t, e, n) {
      var i = t ? t.length : 0;
      for (e = d.createCallback(e, n, 3); i--;)
        if (e(t[i], i, t)) return i;
      return -1
    }

    function ue(t, e, n) {
      var i = 0,
        r = t ? t.length : 0;
      if ("number" != typeof e && null != e) {
        var o = -1;
        for (e = d.createCallback(e, n, 3); ++o < r && e(t[o], o, t);) i++
      } else if (i = e, null == i || n) return t ? t[0] : p;
      return f(t, 0, In(Mn(0, i), r))
    }

    function le(t, e, n, i) {
      return "boolean" != typeof e && null != e && (i = n, n = i && i[e] === t ? null : e, e = !1), null != n && (t = Xt(t, n, i)), V(t, e)
    }

    function ce(e, n, i) {
      if ("number" == typeof i) {
        var r = e ? e.length : 0;
        i = 0 > i ? Mn(0, r + i) : i || 0
      } else if (i) {
        var o = be(e, n);
        return e[o] === n ? o : -1
      }
      return t(e, n, i)
    }

    function fe(t, e, n) {
      var i = 0,
        r = t ? t.length : 0;
      if ("number" != typeof e && null != e) {
        var o = r;
        for (e = d.createCallback(e, n, 3); o-- && e(t[o], o, t);) i++
      } else i = null == e || n ? 1 : e || i;
      return f(t, 0, In(Mn(0, r - i), r))
    }

    function he(n) {
      for (var i = arguments, r = i.length, s = -1, u = a(), f = -1, h = it(), p = n ? n.length : 0, d = [], g = a(); ++s < r;) {
        var m = i[s];
        u[s] = h === t && (m ? m.length : 0) >= y && o(s ? i[s] : g)
      }
      t: for (; ++f < p;) {
        var v = u[0];
        if (m = n[f], (v ? e(v, m) : h(g, m)) < 0) {
          for (s = r, (v || g).push(m); --s;)
            if (v = u[s], (v ? e(v, m) : h(i[s], m)) < 0) continue t;
          d.push(m)
        }
      }
      for (; r--;) v = u[r], v && c(v);
      return l(u), l(g), d
    }

    function pe(t, e, n) {
      var i = 0,
        r = t ? t.length : 0;
      if ("number" != typeof e && null != e) {
        var o = r;
        for (e = d.createCallback(e, n, 3); o-- && e(t[o], o, t);) i++
      } else if (i = e, null == i || n) return t ? t[r - 1] : p;
      return f(t, Mn(0, r - i))
    }

    function de(t, e, n) {
      var i = t ? t.length : 0;
      for ("number" == typeof n && (i = (0 > n ? Mn(0, i + n) : In(n, i - 1)) + 1); i--;)
        if (t[i] === e) return i;
      return -1
    }

    function ge(t) {
      for (var e = arguments, n = 0, i = e.length, r = t ? t.length : 0; ++n < i;)
        for (var o = -1, s = e[n]; ++o < r;) t[o] === s && (En.call(t, o--, 1), r--);
      return t
    }

    function me(t, e, n) {
      t = +t || 0, n = "number" == typeof n ? n : +n || 1, null == e && (e = t, t = 0);
      for (var i = -1, r = Mn(0, vn((e - t) / (n || 1))), o = nn(r); ++i < r;) o[i] = t, t += n;
      return o
    }

    function ve(t, e, n) {
      var i = -1,
        r = t ? t.length : 0,
        o = [];
      for (e = d.createCallback(e, n, 3); ++i < r;) {
        var s = t[i];
        e(s, i, t) && (o.push(s), En.call(t, i--, 1), r--)
      }
      return o
    }

    function ye(t, e, n) {
      if ("number" != typeof e && null != e) {
        var i = 0,
          r = -1,
          o = t ? t.length : 0;
        for (e = d.createCallback(e, n, 3); ++r < o && e(t[r], r, t);) i++
      } else i = null == e || n ? 1 : Mn(0, e);
      return f(t, i)
    }

    function be(t, e, n, i) {
      var r = 0,
        o = t ? t.length : r;
      for (n = n ? d.createCallback(n, i, 1) : We, e = n(e); o > r;) {
        var s = r + o >>> 1;
        n(t[s]) < e ? r = s + 1 : o = s
      }
      return r
    }

    function xe(t) {
      return K(V(arguments, !0, !0))
    }

    function _e(t, e, n, i) {
      return "boolean" != typeof e && null != e && (i = n, n = i && i[e] === t ? null : e, e = !1), null != n && (n = d.createCallback(n, i, 3)), K(t, e, n)
    }

    function we(t) {
      return oe(t, Pn.call(arguments, 1))
    }

    function Te() {
      for (var t = arguments.length > 1 ? arguments : arguments[0], e = -1, n = t ? Qt(Ut(t, "length")) : 0, i = nn(0 > n ? 0 : n); ++e < n;) i[e] = Ut(t, e);
      return i
    }

    function Ce(t, e) {
      for (var n = -1, i = t ? t.length : 0, r = {}; ++n < i;) {
        var o = t[n];
        e ? r[o] = e[n] : o && (r[o[0]] = o[1])
      }
      return r
    }

    function ke(t, e) {
      if (!wt(e)) throw new hn;
      return function() {
        return --t < 1 ? e.apply(this, arguments) : void 0
      }
    }

    function je(t, e) {
      return arguments.length > 2 ? tt(t, 17, Pn.call(arguments, 2), null, e) : tt(t, 1, null, null, e)
    }

    function Ee(t) {
      for (var e = arguments.length > 1 ? V(arguments, !0, !1, 1) : pt(t), n = -1, i = e.length; ++n < i;) {
        var r = e[n];
        t[r] = tt(t[r], 1, null, null, t)
      }
      return t
    }

    function Ne(t, e) {
      return arguments.length > 2 ? tt(e, 19, Pn.call(arguments, 2), null, t) : tt(e, 3, null, null, t)
    }

    function Ae() {
      for (var t = arguments, e = t.length || 1; e--;)
        if (!wt(t[e])) throw new hn;
      return function() {
        for (var e = arguments, n = t.length; n--;) e = [t[n].apply(this, e)];
        return e[0]
      }
    }

    function Se(t, e, n) {
      var i = typeof t;
      if (null == t || "function" == i) return X(t, e, n);
      if ("object" != i) return function(e) {
        return e[t]
      };
      var r = Yn(t),
        o = r[0],
        s = t[o];
      return 1 != r.length || s !== s || Tt(s) ? function(e) {
        for (var n = r.length, i = !1; n-- && (i = Y(e[r[n]], t[r[n]], null, !0)););
        return i
      } : function(t) {
        var e = t[o];
        return s === e && (0 !== s || 1 / s == 1 / e)
      }
    }

    function Le(t, e) {
      return e = "number" == typeof e ? e : +e || t.length, tt(t, 4, null, null, null, e)
    }

    function De(t, e, n) {
      var i, r, o, s, a, u, l, c = 0,
        f = !1,
        h = !0;
      if (!wt(t)) throw new hn;
      if (e = Mn(0, e) || 0, n === !0) {
        var d = !0;
        h = !1
      } else Tt(n) && (d = n.leading, f = "maxWait" in n && (Mn(e, n.maxWait) || 0), h = "trailing" in n ? n.trailing : h);
      var g = function() {
          var n = e - (Tn() - s);
          if (0 >= n) {
            r && yn(r);
            var f = l;
            r = u = l = p, f && (c = Tn(), o = t.apply(a, i))
          } else u = jn(g, n)
        },
        m = function() {
          u && yn(u), r = u = l = p, (h || f !== e) && (c = Tn(), o = t.apply(a, i))
        };
      return function() {
        if (i = arguments, s = Tn(), a = this, l = h && (u || !d), f === !1) var n = d && !u;
        else {
          r || d || (c = s);
          var p = f - (s - c);
          0 >= p ? (r && (r = yn(r)), c = s, o = t.apply(a, i)) : r || (r = jn(m, p))
        }
        return u || e === f || (u = jn(g, e)), n && (o = t.apply(a, i)), o
      }
    }

    function Oe(t) {
      if (!wt(t)) throw new hn;
      var e = Pn.call(arguments, 1);
      return jn(function() {
        t.apply(p, e)
      }, 1)
    }

    function He(t, e) {
      if (!wt(t)) throw new hn;
      var n = Pn.call(arguments, 2);
      return jn(function() {
        t.apply(p, n)
      }, e)
    }

    function qe(t, e) {
      if (!wt(t)) throw new hn;
      var n = function() {
        var i = n.cache,
          r = e ? e.apply(this, arguments) : v + arguments[0];
        return wn.call(i, r) ? i[r] : i[r] = t.apply(this, arguments)
      };
      return n.cache = {}, n
    }

    function Fe(t) {
      var e, n;
      if (!wt(t)) throw new hn;
      return function() {
        return e ? n : (e = !0, n = t.apply(this, arguments), t = null, n)
      }
    }

    function Me(t) {
      return tt(t, 16, Pn.call(arguments, 1))
    }

    function Ie(t) {
      return tt(t, 32, null, Pn.call(arguments, 1))
    }

    function Be(t, e, n) {
      var i = !0,
        r = !0;
      if (!wt(t)) throw new hn;
      n === !1 ? i = !1 : Tt(n) && (i = "leading" in n ? n.leading : i, r = "trailing" in n ? n.trailing : r), n = u(), n.leading = i, n.maxWait = e, n.trailing = r;
      var o = De(t, e, n);
      return c(n), o
    }

    function Re(t, e) {
      if (!wt(e)) throw new hn;
      return function() {
        var n = [t];
        return Cn.apply(n, arguments), e.apply(this, n)
      }
    }

    function Pe(t) {
      return null == t ? "" : fn(t).replace(Zn, nt)
    }

    function We(t) {
      return t
    }

    function $e(t, e) {
      var n = t,
        i = !e || wt(n);
      e || (n = g, e = t, t = d), Wt(pt(e), function(r) {
        var o = t[r] = e[r];
        i && (n.prototype[r] = function() {
          var e = this.__wrapped__,
            i = [e];
          Cn.apply(i, arguments);
          var r = o.apply(t, i);
          return e && "object" == typeof e && e === r ? this : new n(r)
        })
      })
    }

    function ze() {
      return n._ = gn, this
    }

    function Xe(t, e) {
      null == t && null == e && (e = 1), t = +t || 0, null == e ? (e = t, t = 0) : e = +e || 0;
      var n = Rn();
      return t % 1 || e % 1 ? t + In(n * (e - t + parseFloat("1e-" + ((n + "").length - 1))), e) : t + bn(n * (e - t + 1))
    }

    function Qe(t, e) {
      if (t) {
        var n = t[e];
        return wt(n) ? t[e]() : n
      }
    }

    function Ve(t, e, n) {
      var i = d.templateSettings;
      t || (t = ""), n = ei({}, n, i);
      var r, o = ei({}, n.imports, i.imports),
        a = Yn(o),
        u = qt(o),
        l = 0,
        c = n.interpolate || A,
        f = "__p += '",
        h = cn((n.escape || A).source + "|" + c.source + "|" + (c === E ? C : A).source + "|" + (n.evaluate || A).source + "|$", "g");
      t.replace(h, function(e, n, i, o, a, u) {
        return i || (i = o), f += t.slice(l, u).replace(L, s), n && (f += "' +\n__e(" + n + ") +\n'"), a && (r = !0, f += "';\n" + a + ";\n__p += '"), i && (f += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), l = u + e.length, e
      }), f += "';\n";
      var g = n.variable,
        m = g;
      m || (g = "obj", f = "with (" + g + ") {\n" + f + "\n}\n"), f = (r ? f.replace(_, "") : f).replace(w, "$1").replace(T, "$1;"), f = "function(" + g + ") {\n" + (m ? "" : g + " || (" + g + " = {});\n") + "var __t, __p = '', __e = _.escape" + (r ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
      var v = "\n/*\n//# sourceURL=" + (n.sourceURL || "/lodash/template/source[" + O++ + "]") + "\n*/";
      try {
        var y = sn(a, "return " + f + v).apply(p, u)
      } catch (b) {
        throw b.source = f, b
      }
      return e ? y(e) : (y.source = f, y)
    }

    function Ue(t, e, n) {
      t = (t = +t) > -1 ? t : 0;
      var i = -1,
        r = nn(t);
      for (e = X(e, n, 1); ++i < t;) r[i] = e(i);
      return r
    }

    function Ye(t) {
      return null == t ? "" : fn(t).replace(Kn, ot)
    }

    function Je(t) {
      var e = ++m;
      return fn(null == t ? "" : t) + e
    }

    function Ge(t) {
      return t = new g(t), t.__chain__ = !0, t
    }

    function Ke(t, e) {
      return e(t), t
    }

    function Ze() {
      return this.__chain__ = !0, this
    }

    function tn() {
      return fn(this.__wrapped__)
    }

    function en() {
      return this.__wrapped__
    }
    n = n ? J.defaults(Q.Object(), n, J.pick(Q, D)) : Q;
    var nn = n.Array,
      rn = n.Boolean,
      on = n.Date,
      sn = n.Function,
      an = n.Math,
      un = n.Number,
      ln = n.Object,
      cn = n.RegExp,
      fn = n.String,
      hn = n.TypeError,
      pn = [],
      dn = ln.prototype,
      gn = n._,
      mn = cn("^" + fn(dn.valueOf).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
      vn = an.ceil,
      yn = n.clearTimeout,
      bn = an.floor,
      xn = sn.prototype.toString,
      _n = mn.test(_n = ln.getPrototypeOf) && _n,
      wn = dn.hasOwnProperty,
      Tn = mn.test(Tn = on.now) && Tn || function() {
        return +new on
      },
      Cn = pn.push,
      kn = n.setImmediate,
      jn = n.setTimeout,
      En = pn.splice,
      Nn = dn.toString,
      An = pn.unshift,
      Sn = function() {
        try {
          var t = {},
            e = mn.test(e = ln.defineProperty) && e,
            n = e(t, t, t) && e
        } catch (i) {}
        return n
      }(),
      Ln = mn.test(Ln = Nn.bind) && Ln,
      Dn = mn.test(Dn = ln.create) && Dn,
      On = mn.test(On = nn.isArray) && On,
      Hn = n.isFinite,
      qn = n.isNaN,
      Fn = mn.test(Fn = ln.keys) && Fn,
      Mn = an.max,
      In = an.min,
      Bn = n.parseInt,
      Rn = an.random,
      Pn = pn.slice,
      Wn = mn.test(n.attachEvent),
      $n = Ln && !/\n|true/.test(Ln + Wn),
      zn = {};
    zn[q] = nn, zn[F] = rn, zn[M] = on, zn[I] = sn, zn[R] = ln, zn[B] = un, zn[P] = cn, zn[W] = fn, g.prototype = d.prototype;
    var Xn = d.support = {};
    Xn.fastBind = Ln && !$n, Xn.funcNames = "string" == typeof sn.name, d.templateSettings = {
      escape: /<%-([\s\S]+?)%>/g,
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: E,
      variable: "",
      imports: {
        _: d
      }
    };
    var Qn = function(t, e) {
        var n = u();
        n.value = e, Sn(t, "__bindData__", n), c(n)
      },
      Vn = On || function(t) {
        return t && "object" == typeof t ? Nn.call(t) == q : !1
      },
      Un = function(t) {
        var e, n = t,
          i = [];
        if (!n) return i;
        if (!z[typeof t]) return i;
        for (e in n) wn.call(n, e) && i.push(e);
        return i
      },
      Yn = Fn ? function(t) {
        return Tt(t) ? Fn(t) : []
      } : Un,
      Jn = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      },
      Gn = gt(Jn),
      Kn = cn("(" + Yn(Gn).join("|") + ")", "g"),
      Zn = cn("[" + Yn(Jn).join("") + "]", "g"),
      ti = function(t, e, n) {
        var i, r = t,
          o = r;
        if (!r) return o;
        var s = arguments,
          a = 0,
          u = "number" == typeof n ? 2 : s.length;
        if (u > 3 && "function" == typeof s[u - 2]) var l = X(s[--u - 1], s[u--], 2);
        else u > 2 && "function" == typeof s[u - 1] && (l = s[--u]);
        for (; ++a < u;)
          if (r = s[a], r && z[typeof r])
            for (var c = -1, f = z[typeof r] && Yn(r), h = f ? f.length : 0; ++c < h;) i = f[c], o[i] = l ? l(o[i], r[i]) : r[i];
        return o
      },
      ei = function(t, e, n) {
        var i, r = t,
          o = r;
        if (!r) return o;
        for (var s = arguments, a = 0, u = "number" == typeof n ? 2 : s.length; ++a < u;)
          if (r = s[a], r && z[typeof r])
            for (var l = -1, c = z[typeof r] && Yn(r), f = c ? c.length : 0; ++l < f;) i = c[l], "undefined" == typeof o[i] && (o[i] = r[i]);
        return o
      },
      ni = function(t, e, n) {
        var i, r = t,
          o = r;
        if (!r) return o;
        if (!z[typeof r]) return o;
        e = e && "undefined" == typeof n ? e : X(e, n, 3);
        for (i in r)
          if (e(r[i], i, t) === !1) return o;
        return o
      },
      ii = function(t, e, n) {
        var i, r = t,
          o = r;
        if (!r) return o;
        if (!z[typeof r]) return o;
        e = e && "undefined" == typeof n ? e : X(e, n, 3);
        for (var s = -1, a = z[typeof r] && Yn(r), u = a ? a.length : 0; ++s < u;)
          if (i = a[s], e(r[i], i, t) === !1) return o;
        return o
      },
      ri = function(t) {
        if (!t || Nn.call(t) != R) return !1;
        var e = t.valueOf,
          n = "function" == typeof e && (n = _n(e)) && _n(n);
        return n ? t == n || _n(t) == n : rt(t)
      },
      oi = Z(function(t, e, n) {
        wn.call(t, n) ? t[n]++ : t[n] = 1
      }),
      si = Z(function(t, e, n) {
        (wn.call(t, n) ? t[n] : t[n] = []).push(e)
      }),
      ai = Z(function(t, e, n) {
        t[n] = e
      }),
      ui = Bt;
    $n && U && "function" == typeof kn && (Oe = function(t) {
      if (!wt(t)) throw new hn;
      return kn.apply(n, arguments)
    });
    var li = 8 == Bn(x + "08") ? Bn : function(t, e) {
      return Bn(Nt(t) ? t.replace(N, "") : t, e || 0)
    };
    return d.after = ke, d.assign = ti, d.at = Ft, d.bind = je, d.bindAll = Ee, d.bindKey = Ne, d.chain = Ge, d.compact = re, d.compose = Ae, d.countBy = oi, d.createCallback = Se, d.curry = Le, d.debounce = De, d.defaults = ei, d.defer = Oe, d.delay = He, d.difference = oe, d.filter = Bt, d.flatten = le, d.forEach = Wt, d.forEachRight = $t, d.forIn = ni, d.forInRight = ft, d.forOwn = ii, d.forOwnRight = ht, d.functions = pt, d.groupBy = si, d.indexBy = ai, d.initial = fe, d.intersection = he, d.invert = gt, d.invoke = zt, d.keys = Yn, d.map = Xt, d.max = Qt, d.memoize = qe, d.merge = St, d.min = Vt, d.omit = Lt, d.once = Fe, d.pairs = Dt, d.partial = Me, d.partialRight = Ie, d.pick = Ot, d.pluck = Ut, d.pull = ge, d.range = me, d.reject = Gt, d.remove = ve, d.rest = ye, d.shuffle = Zt, d.sortBy = ne, d.tap = Ke, d.throttle = Be, d.times = Ue, d.toArray = ie, d.transform = Ht, d.union = xe, d.uniq = _e, d.values = qt, d.where = ui, d.without = we, d.wrap = Re, d.zip = Te, d.zipObject = Ce, d.collect = Xt, d.drop = ye, d.each = Wt, d.eachRight = $t, d.extend = ti, d.methods = pt, d.object = Ce, d.select = Bt, d.tail = ye, d.unique = _e, d.unzip = Te, $e(d), d.clone = at, d.cloneDeep = ut, d.contains = Mt, d.escape = Pe, d.every = It, d.find = Rt, d.findIndex = se, d.findKey = lt, d.findLast = Pt, d.findLastIndex = ae, d.findLastKey = ct, d.has = dt, d.identity = We, d.indexOf = ce, d.isArguments = st, d.isArray = Vn, d.isBoolean = mt, d.isDate = vt, d.isElement = yt, d.isEmpty = bt, d.isEqual = xt, d.isFinite = _t, d.isFunction = wt, d.isNaN = Ct, d.isNull = kt, d.isNumber = jt, d.isObject = Tt, d.isPlainObject = ri, d.isRegExp = Et, d.isString = Nt, d.isUndefined = At, d.lastIndexOf = de, d.mixin = $e, d.noConflict = ze, d.parseInt = li, d.random = Xe, d.reduce = Yt, d.reduceRight = Jt, d.result = Qe, d.runInContext = h, d.size = te, d.some = ee, d.sortedIndex = be, d.template = Ve, d.unescape = Ye, d.uniqueId = Je, d.all = It, d.any = ee, d.detect = Rt, d.findWhere = Rt, d.foldl = Yt, d.foldr = Jt, d.include = Mt, d.inject = Yt, ii(d, function(t, e) {
      d.prototype[e] || (d.prototype[e] = function() {
        var e = [this.__wrapped__],
          n = this.__chain__;
        Cn.apply(e, arguments);
        var i = t.apply(d, e);
        return n ? new g(i, n) : i
      })
    }), d.first = ue, d.last = pe, d.sample = Kt, d.take = ue, d.head = ue, ii(d, function(t, e) {
      var n = "sample" !== e;
      d.prototype[e] || (d.prototype[e] = function(e, i) {
        var r = this.__chain__,
          o = t(this.__wrapped__, e, i);
        return r || null != e && (!i || n && "function" == typeof e) ? new g(o, r) : o
      })
    }), d.VERSION = "2.0.0", d.prototype.chain = Ze, d.prototype.toString = tn, d.prototype.value = en, d.prototype.valueOf = en, Wt(["join", "pop", "shift"], function(t) {
      var e = pn[t];
      d.prototype[t] = function() {
        var t = this.__chain__,
          n = e.apply(this.__wrapped__, arguments);
        return t ? new g(n, t) : n
      }
    }), Wt(["push", "reverse", "sort", "unshift"], function(t) {
      var e = pn[t];
      d.prototype[t] = function() {
        return e.apply(this.__wrapped__, arguments), this
      }
    }), Wt(["concat", "slice", "splice"], function(t) {
      var e = pn[t];
      d.prototype[t] = function() {
        return new g(e.apply(this.__wrapped__, arguments), this.__chain__)
      }
    }), d
  }
  var p, d = [],
    g = [],
    m = 0,
    v = +new Date + "",
    y = 75,
    b = 40,
    x = " 	\x0B\f \ufeff\n\r\u2028\u2029 ᠎             　",
    _ = /\b__p \+= '';/g,
    w = /\b(__p \+=) '' \+/g,
    T = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
    C = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
    k = /\w*$/,
    j = /^function[ \n\r\t]+\w/,
    E = /<%=([\s\S]+?)%>/g,
    N = RegExp("^[" + x + "]*0+(?=.$)"),
    A = /($^)/,
    S = (S = /\bthis\b/) && S.test(h) && S,
    L = /['\n\r\t\u2028\u2029\\]/g,
    D = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setImmediate", "setTimeout"],
    O = 0,
    H = "[object Arguments]",
    q = "[object Array]",
    F = "[object Boolean]",
    M = "[object Date]",
    I = "[object Function]",
    B = "[object Number]",
    R = "[object Object]",
    P = "[object RegExp]",
    W = "[object String]",
    $ = {};
  $[I] = !1, $[H] = $[q] = $[F] = $[M] = $[B] = $[R] = $[P] = $[W] = !0;
  var z = {
      "boolean": !1,
      "function": !0,
      object: !0,
      number: !1,
      string: !1,
      undefined: !1
    },
    X = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "	": "t",
      "\u2028": "u2028",
      "\u2029": "u2029"
    },
    Q = z[typeof window] && window || this,
    V = z[typeof exports] && exports,
    U = z[typeof module] && module && module.exports == V && module,
    Y = z[typeof global] && global;
  !Y || Y.global !== Y && Y.window !== Y || (Q = Y);
  var J = h();
  "function" == typeof define && "object" == typeof define.amd && define.amd ? (Q._ = J, define(function() {
    return J
  })) : V && !V.nodeType ? U ? (U.exports = J)._ = J : V._ = J : Q._ = J
}.call(this),
  function() {
    "use strict";

    function t() {}

    function e(t, e) {
      for (var n = t.length; n--;)
        if (t[n].listener === e) return n;
      return -1
    }

    function n(t) {
      return function() {
        return this[t].apply(this, arguments)
      }
    }
    var i = t.prototype,
      r = this,
      o = r.EventEmitter;
    i.getListeners = function(t) {
      var e, n, i = this._getEvents();
      if ("object" == typeof t) {
        e = {};
        for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
      } else e = i[t] || (i[t] = []);
      return e
    }, i.flattenListeners = function(t) {
      var e, n = [];
      for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
      return n
    }, i.getListenersAsObject = function(t) {
      var e, n = this.getListeners(t);
      return n instanceof Array && (e = {}, e[t] = n), e || n
    }, i.addListener = function(t, n) {
      var i, r = this.getListenersAsObject(t),
        o = "object" == typeof n;
      for (i in r) r.hasOwnProperty(i) && -1 === e(r[i], n) && r[i].push(o ? n : {
        listener: n,
        once: !1
      });
      return this
    }, i.on = n("addListener"), i.addOnceListener = function(t, e) {
      return this.addListener(t, {
        listener: e,
        once: !0
      })
    }, i.once = n("addOnceListener"), i.defineEvent = function(t) {
      return this.getListeners(t), this
    }, i.defineEvents = function(t) {
      for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
      return this
    }, i.removeListener = function(t, n) {
      var i, r, o = this.getListenersAsObject(t);
      for (r in o) o.hasOwnProperty(r) && (i = e(o[r], n), -1 !== i && o[r].splice(i, 1));
      return this
    }, i.off = n("removeListener"), i.addListeners = function(t, e) {
      return this.manipulateListeners(!1, t, e)
    }, i.removeListeners = function(t, e) {
      return this.manipulateListeners(!0, t, e)
    }, i.manipulateListeners = function(t, e, n) {
      var i, r, o = t ? this.removeListener : this.addListener,
        s = t ? this.removeListeners : this.addListeners;
      if ("object" != typeof e || e instanceof RegExp)
        for (i = n.length; i--;) o.call(this, e, n[i]);
      else
        for (i in e) e.hasOwnProperty(i) && (r = e[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
      return this
    }, i.removeEvent = function(t) {
      var e, n = typeof t,
        i = this._getEvents();
      if ("string" === n) delete i[t];
      else if ("object" === n)
        for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
      else delete this._events;
      return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(t, e) {
      var n, i, r, o, s = this.getListenersAsObject(t);
      for (r in s)
        if (s.hasOwnProperty(r))
          for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(t, n.listener), o = n.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, n.listener);
      return this
    }, i.trigger = n("emitEvent"), i.emit = function(t) {
      var e = Array.prototype.slice.call(arguments, 1);
      return this.emitEvent(t, e)
    }, i.setOnceReturnValue = function(t) {
      return this._onceReturnValue = t, this
    }, i._getOnceReturnValue = function() {
      return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
      return this._events || (this._events = {})
    }, t.noConflict = function() {
      return r.EventEmitter = o, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
      return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
  }.call(this),
  function(t) {
    function e(e) {
      var n = t.event;
      return n.target = n.target || n.srcElement || e, n
    }
    var n = document.documentElement,
      i = function() {};
    n.addEventListener ? i = function(t, e, n) {
      t.addEventListener(e, n, !1)
    } : n.attachEvent && (i = function(t, n, i) {
      t[n + i] = i.handleEvent ? function() {
        var n = e(t);
        i.handleEvent.call(i, n)
      } : function() {
        var n = e(t);
        i.call(t, n)
      }, t.attachEvent("on" + n, t[n + i])
    });
    var r = function() {};
    n.removeEventListener ? r = function(t, e, n) {
      t.removeEventListener(e, n, !1)
    } : n.detachEvent && (r = function(t, e, n) {
      t.detachEvent("on" + e, t[e + n]);
      try {
        delete t[e + n]
      } catch (i) {
        t[e + n] = void 0
      }
    });
    var o = {
      bind: i,
      unbind: r
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : t.eventie = o
  }(this),
  function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
      return e(t, n, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
  }(window, function(t, e, n) {
    function i(t, e) {
      for (var n in e) t[n] = e[n];
      return t
    }

    function r(t) {
      return "[object Array]" == f.call(t)
    }

    function o(t) {
      var e = [];
      if (r(t)) e = t;
      else if ("number" == typeof t.length)
        for (var n = 0; n < t.length; n++) e.push(t[n]);
      else e.push(t);
      return e
    }

    function s(t, e, n) {
      if (!(this instanceof s)) return new s(t, e, n);
      "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = o(t), this.options = i({}, this.options), "function" == typeof e ? n = e : i(this.options, e), n && this.on("always", n), this.getImages(), l && (this.jqDeferred = new l.Deferred);
      var r = this;
      setTimeout(function() {
        r.check()
      })
    }

    function a(t) {
      this.img = t
    }

    function u(t, e) {
      this.url = t, this.element = e, this.img = new Image
    }
    var l = t.jQuery,
      c = t.console,
      f = Object.prototype.toString;
    s.prototype = new e, s.prototype.options = {}, s.prototype.getImages = function() {
      this.images = [];
      for (var t = 0; t < this.elements.length; t++) {
        var e = this.elements[t];
        this.addElementImages(e)
      }
    }, s.prototype.addElementImages = function(t) {
      "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
      var e = t.nodeType;
      if (e && h[e]) {
        for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
          var r = n[i];
          this.addImage(r)
        }
        if ("string" == typeof this.options.background) {
          var o = t.querySelectorAll(this.options.background);
          for (i = 0; i < o.length; i++) {
            var s = o[i];
            this.addElementBackgroundImages(s)
          }
        }
      }
    };
    var h = {
      1: !0,
      9: !0,
      11: !0
    };
    s.prototype.addElementBackgroundImages = function(t) {
      for (var e = p(t), n = /url\(['"]*([^'"\)]+)['"]*\)/gi, i = n.exec(e.backgroundImage); null !== i;) {
        var r = i && i[1];
        r && this.addBackground(r, t), i = n.exec(e.backgroundImage)
      }
    };
    var p = t.getComputedStyle || function(t) {
      return t.currentStyle
    };
    return s.prototype.addImage = function(t) {
      var e = new a(t);
      this.images.push(e)
    }, s.prototype.addBackground = function(t, e) {
      var n = new u(t, e);
      this.images.push(n)
    }, s.prototype.check = function() {
      function t(t, n, i) {
        setTimeout(function() {
          e.progress(t, n, i)
        })
      }
      var e = this;
      if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
      for (var n = 0; n < this.images.length; n++) {
        var i = this.images[n];
        i.once("progress", t), i.check()
      }
    }, s.prototype.progress = function(t, e, n) {
      this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emit("progress", this, t, e), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && c && c.log("progress: " + n, t, e)
    }, s.prototype.complete = function() {
      var t = this.hasAnyBroken ? "fail" : "done";
      if (this.isComplete = !0, this.emit(t, this), this.emit("always", this), this.jqDeferred) {
        var e = this.hasAnyBroken ? "reject" : "resolve";
        this.jqDeferred[e](this)
      }
    }, a.prototype = new e, a.prototype.check = function() {
      var t = this.getIsImageComplete();
      return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, n.bind(this.proxyImage, "load", this), n.bind(this.proxyImage, "error", this), n.bind(this.img, "load", this), n.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src))
    }, a.prototype.getIsImageComplete = function() {
      return this.img.complete && void 0 !== this.img.naturalWidth
    }, a.prototype.confirm = function(t, e) {
      this.isLoaded = t, this.emit("progress", this, this.img, e)
    }, a.prototype.handleEvent = function(t) {
      var e = "on" + t.type;
      this[e] && this[e](t)
    }, a.prototype.onload = function() {
      this.confirm(!0, "onload"), this.unbindEvents()
    }, a.prototype.onerror = function() {
      this.confirm(!1, "onerror"), this.unbindEvents()
    }, a.prototype.unbindEvents = function() {
      n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this), n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
    }, u.prototype = new a, u.prototype.check = function() {
      n.bind(this.img, "load", this), n.bind(this.img, "error", this), this.img.src = this.url;
      var t = this.getIsImageComplete();
      t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, u.prototype.unbindEvents = function() {
      n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
    }, u.prototype.confirm = function(t, e) {
      this.isLoaded = t, this.emit("progress", this, this.element, e)
    }, s.makeJQueryPlugin = function(e) {
      e = e || t.jQuery, e && (l = e, l.fn.imagesLoaded = function(t, e) {
        var n = new s(this, t, e);
        return n.jqDeferred.promise(l(this))
      })
    }, s.makeJQueryPlugin(), s
  }),
  function(t, e, n) {
    "use strict";
    var i, r = e.event;
    r.special.smartresize = {
      setup: function() {
        e(this).bind("resize", r.special.smartresize.handler)
      },
      teardown: function() {
        e(this).unbind("resize", r.special.smartresize.handler)
      },
      handler: function(t, e) {
        var n = this,
          o = arguments;
        t.type = "smartresize", i && clearTimeout(i), i = setTimeout(function() {
          r.dispatch.apply(n, o)
        }, "execAsap" === e ? 0 : 100)
      }
    }, e.fn.smartresize = function(t) {
      return t ? this.bind("smartresize", t) : this.trigger("smartresize", ["execAsap"])
    }, e.Mason = function(t, n) {
      this.element = e(n), this._create(t), this._init()
    }, e.Mason.settings = {
      isResizable: !0,
      isAnimated: !1,
      animationOptions: {
        queue: !1,
        duration: 500
      },
      gutterWidth: 0,
      isRTL: !1,
      isFitWidth: !1,
      containerStyle: {
        position: "relative"
      }
    }, e.Mason.prototype = {
      _filterFindBricks: function(t) {
        var e = this.options.itemSelector;
        return e ? t.filter(e).add(t.find(e)) : t
      },
      _getBricks: function(t) {
        var e = this._filterFindBricks(t).css({
          position: "absolute"
        }).addClass("masonry-brick");
        return e
      },
      _create: function(n) {
        this.options = e.extend(!0, {}, e.Mason.settings, n), this.styleQueue = [];
        var i = this.element[0].style;
        this.originalStyle = {
          height: i.height || ""
        };
        var r = this.options.containerStyle;
        for (var o in r) this.originalStyle[o] = i[o] || "";
        this.element.css(r), this.horizontalDirection = this.options.isRTL ? "right" : "left";
        var s = this.element.css("padding-" + this.horizontalDirection),
          a = this.element.css("padding-top");
        this.offset = {
          x: s ? parseInt(s, 10) : 0,
          y: a ? parseInt(a, 10) : 0
        }, this.isFluid = this.options.columnWidth && "function" == typeof this.options.columnWidth;
        var u = this;
        setTimeout(function() {
          u.element.addClass("masonry")
        }, 0), this.options.isResizable && e(t).bind("smartresize.masonry", function() {
          u.resize()
        }), this.reloadItems()
      },
      _init: function(t) {
        this._getColumns(), this._reLayout(t)
      },
      option: function(t, n) {
        e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
      },
      layout: function(t, e) {
        for (var n = 0, i = t.length; i > n; n++) this._placeBrick(t[n]);
        var r = {};
        if (r.height = Math.max.apply(Math, this.colYs), this.options.isFitWidth) {
          var o = 0;
          for (n = this.cols; --n && 0 === this.colYs[n];) o++;
          r.width = (this.cols - o) * this.columnWidth - this.options.gutterWidth
        }
        this.styleQueue.push({
          $el: this.element,
          style: r
        });
        var s, a = this.isLaidOut && this.options.isAnimated ? "animate" : "css",
          u = this.options.animationOptions;
        for (n = 0, i = this.styleQueue.length; i > n; n++) s = this.styleQueue[n], s.$el[a](s.style, u);
        this.styleQueue = [], e && e.call(t), this.isLaidOut = !0
      },
      _getColumns: function() {
        var t = this.options.isFitWidth ? this.element.parent() : this.element,
          e = t.width();
        this.columnWidth = this.isFluid ? this.options.columnWidth(e) : this.options.columnWidth || this.$bricks.outerWidth(!0) || e, this.columnWidth += this.options.gutterWidth, this.cols = Math.floor((e + this.options.gutterWidth) / this.columnWidth), this.cols = Math.max(this.cols, 1)
      },
      _placeBrick: function(t) {
        var n, i, r, o, s, a = e(t);
        if (n = Math.ceil(a.outerWidth(!0) / this.columnWidth), n = Math.min(n, this.cols), 1 === n) r = this.colYs;
        else
          for (i = this.cols + 1 - n, r = [], s = 0; i > s; s++) o = this.colYs.slice(s, s + n), r[s] = Math.max.apply(Math, o);
        for (var u = Math.min.apply(Math, r), l = 0, c = 0, f = r.length; f > c; c++)
          if (r[c] === u) {
            l = c;
            break
          }
        var h = {
          top: u + this.offset.y
        };
        h[this.horizontalDirection] = this.columnWidth * l + this.offset.x, this.styleQueue.push({
          $el: a,
          style: h
        });
        var p = u + a.outerHeight(!0),
          d = this.cols + 1 - f;
        for (c = 0; d > c; c++) this.colYs[l + c] = p
      },
      resize: function() {
        var t = this.cols;
        this._getColumns(), (this.isFluid || this.cols !== t) && this._reLayout()
      },
      _reLayout: function(t) {
        var e = this.cols;
        for (this.colYs = []; e--;) this.colYs.push(0);
        this.layout(this.$bricks, t)
      },
      reloadItems: function() {
        this.$bricks = this._getBricks(this.element.children())
      },
      reload: function(t) {
        this.reloadItems(), this._init(t)
      },
      appended: function(t, e, n) {
        if (e) {
          this._filterFindBricks(t).css({
            top: this.element.height()
          });
          var i = this;
          setTimeout(function() {
            i._appended(t, n)
          }, 1)
        } else this._appended(t, n)
      },
      _appended: function(t, e) {
        var n = this._getBricks(t);
        this.$bricks = this.$bricks.add(n), this.layout(n, e)
      },
      remove: function(t) {
        this.$bricks = this.$bricks.not(t), t.remove()
      },
      destroy: function() {
        this.$bricks.removeClass("masonry-brick").each(function() {
          this.style.position = "", this.style.top = "", this.style.left = ""
        });
        var n = this.element[0].style;
        for (var i in this.originalStyle) n[i] = this.originalStyle[i];
        this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"), e(t).unbind(".masonry")
      }
    }, e.fn.imagesLoaded = function(t) {
      function n() {
        t.call(r, o)
      }

      function i(t) {
        var r = t.target;
        r.src !== a && -1 === e.inArray(r, u) && (u.push(r), --s <= 0 && (setTimeout(n), o.unbind(".imagesLoaded", i)))
      }
      var r = this,
        o = r.find("img").add(r.filter("img")),
        s = o.length,
        a = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
        u = [];
      return s || n(), o.bind("load.imagesLoaded error.imagesLoaded", i).each(function() {
        var t = this.src;
        this.src = a, this.src = t
      }), r
    };
    var o = function(e) {
      t.console && t.console.error(e)
    };
    e.fn.masonry = function(t) {
      if ("string" == typeof t) {
        var n = Array.prototype.slice.call(arguments, 1);
        this.each(function() {
          var i = e.data(this, "masonry");
          return i ? e.isFunction(i[t]) && "_" !== t.charAt(0) ? void i[t].apply(i, n) : void o("no such method '" + t + "' for masonry instance") : void o("cannot call methods on masonry prior to initialization; attempted to call method '" + t + "'")
        })
      } else this.each(function() {
        var n = e.data(this, "masonry");
        n ? (n.option(t || {}), n._init()) : e.data(this, "masonry", new e.Mason(t, this))
      });
      return this
    }
  }(window, jQuery),
  function(t) {
    t(function() {
      t(".jcarousel").jcarousel(), t(".jcarousel-control-prev").on("jcarouselcontrol:active", function() {
        t(this).removeClass("inactive")
      }).on("jcarouselcontrol:inactive", function() {
        t(this).addClass("inactive")
      }).jcarouselControl({
        target: "-=1"
      }), t(".jcarousel-control-next").on("jcarouselcontrol:active", function() {
        t(this).removeClass("inactive")
      }).on("jcarouselcontrol:inactive", function() {
        t(this).addClass("inactive")
      }).jcarouselControl({
        target: "+=1"
      })
    })
  }(jQuery), $(function() {
    function t() {
      s.imagesLoaded(function() {
        s.masonry({
          columnWidth: function(t) {
            return t / 3
          }
        })
      })
    }

    function e(t, e) {
      var n = t - .5 + Math.random() * (e - t + 1);
      return n = Math.round(n)
    }

    function n(e, n) {
      -1 !== e.indexOf(".") || -1 !== e.indexOf("\\") || -1 !== e.indexOf("/") || -1 !== e.indexOf("!") || -1 !== e.indexOf("?") || -1 !== e.indexOf("-") || -1 !== e.indexOf(":") ? ($(".grid").append(o), t()) : $.ajax({
        url: "http://pixabay.com/api/?key=2563157-05cd126e344fd2fa56a52a281&q=" + e + "&per_page=" + n,
        dataType: "jsonp"
      }).done(function(e) {
        if (e.hits.length) {
          var n = $("#pictureLayout").html(),
            i = _.template(n)(e);
          $(".grid").append(i), t()
        } else $(".grid").append(o), t()
      })
    }

    function i() {
      var t = $("#seek");
      u = t[0].value, u && (t[0].value = "", s.masonry("destroy"), $(".picture").remove(), n(u, 12))
    }
    for (var r, o = '<figure class="picture item" id="noPic"><img class="radius" src="img/no.png" alt="picture"></figure>', s = $("#container"), a = ["moto", "sport", "nature", "animals", "health", "history", "relax", "cat", "flower", "auto", "computer", "robot", "science", "web", "audi", "subaru", "skoda", "bmw"], u = "", l = 0; 4 > l; l++) r = e(0, a.length - 1), n(a[r], 3);
    $(".searching").on("click", function(t) {
      t.preventDefault(), i()
    }), $("input:text").on("keydown", function(t) {
      13 == t.keyCode && i()
    })
  });