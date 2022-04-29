!function(t) {
    function e(e) {
        for (var n, o, i = e[0], a = e[1], c = 0, u = []; c < i.length; c++)
            o = i[c],
            Object.prototype.hasOwnProperty.call(r, o) && r[o] && u.push(r[o][0]),
            r[o] = 0;
        for (n in a)
            Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
        for (s && s(e); u.length; )
            u.shift()()
    }
    var n = {}
      , r = {
        190: 0
    };
    function o(e) {
        if (n[e])
            return n[e].exports;
        var r = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, o),
        r.l = !0,
        r.exports
    }
    o.e = function(t) {
        var e = []
          , n = r[t];
        if (0 !== n)
            if (n)
                e.push(n[2]);
            else {
                var i = new Promise((function(e, o) {
                    n = r[t] = [e, o]
                }
                ));
                e.push(n[2] = i);
                var a, c = document.createElement("script");
                c.charset = "utf-8",
                c.timeout = 120,
                o.nc && c.setAttribute("nonce", o.nc),
                c.src = function(t) {
                    return o.p + "js/" + ({}[t] || t) + ".min.js"
                }(t);
                var s = new Error;
                a = function(e) {
                    c.onerror = c.onload = null,
                    clearTimeout(u);
                    var n = r[t];
                    if (0 !== n) {
                        if (n) {
                            var o = e && ("load" === e.type ? "missing" : e.type)
                              , i = e && e.target && e.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")",
                            s.name = "ChunkLoadError",
                            s.type = o,
                            s.request = i,
                            n[1](s)
                        }
                        r[t] = void 0
                    }
                }
                ;
                var u = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: c
                    })
                }
                ), 12e4);
                c.onerror = c.onload = a,
                document.head.appendChild(c)
            }
        return Promise.all(e)
    }
    ,
    o.m = t,
    o.c = n,
    o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(t, e) {
        if (1 & e && (t = o(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (o.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                o.d(n, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return n
    }
    ,
    o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return o.d(e, "a", e),
        e
    }
    ,
    o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    o.p = "/static/",
    o.oe = function(t) {
        throw console.error(t),
        t
    }
    ;
    var i = window.webpackJsonp = window.webpackJsonp || []
      , a = i.push.bind(i);
    i.push = e,
    i = i.slice();
    for (var c = 0; c < i.length; c++)
        e(i[c]);
    var s = a;
    o(o.s = 194)
}({
    0: function(t, e, n) {
        "use strict";
        function r(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(n), !0).forEach((function(e) {
                    i(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function i(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        n.d(e, "a", (function() {
            return a
        }
        ));
        var a = ["LOTTIE_ANIMATION_LOADED", "BREAKPOINT_CHANGE", "CLOSE_MODAL", "CLOSE_SURVEY", "COOKIE_BANNER_INTERACTION", "CONTENT_FILTERED", "GA_TRACK_EVENT", "HIDE_MODAL_CONTENT", "NAV_HIDDEN", "NAV_SHOWN", "NAV_SCROLL_CHANGE", "LOAD_ANIMATION", "PLAY_ANIMATION", "REDUCED_MOTION_CHANGE", "REGISTER_FOCUSABLE_MODAL_ELEMENTS", "REGISTER_SURVEY", "REGISTER_ANIMATION", "SEARCH_CLOSED", "SEARCH_OPENED", "SHOW_MODAL", "SHOW_MODAL_CONTENT", "SHOW_SURVEY", "START_LOTTERY", "START_SURVEY", "STEP_CHANGE", "STOP_ANIMATION", "SUBMIT_SURVEY", "TIMER_START", "TIMER_STOP", "TOGGLE_THEME", "TRACK_VISIBILITY", "SCROLL_POSITION_CHANGE", "TYPING_STOP", "VISIBILITY_TRIGGERED", "WINDOW_RESIZE_ENDED", "WINDOW_RESIZE_STARTED", "WIZARD_INTERACTION", "WIZARD_DEFAULT", "RECOMMENDED_SOLUTION", "RECOMMENDED_DEVICES", "WAYFINDER_ANSWERS_FILTERS"].reduce((function(t, e) {
            return e = i({}, e, e),
            o(o({}, t), e)
        }
        ), {})
    },
    1: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "BaseComponent", (function() {
            return w
        }
        ));
        var r = n(21)
          , o = n(11)
          , i = n(9);
        function a(t) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        var c = Object.prototype.toString
          , s = n(7)
          , u = n(2)
          , l = n(0)
          , f = n(3)
          , h = n(5);
        function d(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function p(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? d(Object(n), !0).forEach((function(e) {
                    m(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function m(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        function b(t) {
            return function(t) {
                if (Array.isArray(t))
                    return y(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                    return Array.from(t)
            }(t) || function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return y(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return y(t, e)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function y(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
        function v(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function _(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function g(t, e, n) {
            return e && _(t.prototype, e),
            n && _(t, n),
            t
        }
        var w = function() {
            function t(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                v(this, t),
                this.global_ = window,
                this.isInitialized_ = !1,
                this.element = this.getElement_(e),
                this.imageTagName_ = this.constructor.imageTagName_,
                this.body_ = document.body,
                this.store_ = n,
                this.observer_ = null,
                this.topics_ = l.a,
                this.subscriptions_ = [],
                this.lazyImages_ = [],
                this.internalDependencies_ = null,
                this.events = {},
                this.config_ = this.getDataConfiguration_(),
                this.animationConfig_ = this.getDataAnimation_(),
                this.visibilityId_ = "component-visibility",
                this.elementsToTrack_ = [],
                this.initialize_ = this.initialize_.bind(this),
                this.bindEvents = this.bindEvents.bind(this),
                this.subscribe_ = this.subscribe_.bind(this),
                this.legacyInit_(r)
            }
            return g(t, null, [{
                key: "customImageElementTagName",
                set: function(t) {
                    this.imageTagName_ || (this.imageTagName_ = t)
                }
            }]),
            g(t, [{
                key: "legacyInit_",
                value: function(t) {
                    var e = this;
                    return t ? Object(u.a)((function() {
                        e.initialize_(),
                        e.bindEvents(),
                        e.subscribe_()
                    }
                    )) : Promise.resolve()
                }
            }, {
                key: "build",
                value: function(t) {
                    var e = this;
                    return this.isInitialized_ ? Promise.resolve(this) : Object(u.a)((function() {
                        e.initialize_(),
                        e.bindEvents(),
                        e.subscribe_(),
                        e.isInitialized_ = !0
                    }
                    )).then((function() {
                        return e.loadImages_()
                    }
                    )).then((function(n) {
                        return e.lazyImages_ = n,
                        t && "function" == typeof t && t(),
                        e
                    }
                    ))
                }
            }, {
                key: "loadImages_",
                value: function() {
                    var t = this;
                    return Object(u.a)((function() {
                        return b(t.element.querySelectorAll(t.imageTagName_))
                    }
                    ))
                }
            }, {
                key: "waitForImagesToLoad_",
                value: function() {
                    var t = this;
                    return Promise.all(this.lazyImages_.map((function(t) {
                        return t.forceLoad()
                    }
                    ))).then((function(e) {
                        return t.log_("Images have loaded", e)
                    }
                    ))
                }
            }, {
                key: "log_",
                value: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    Object(h.a)(t, e, n)
                }
            }, {
                key: "on",
                value: function(t, e) {
                    var n = this
                      , r = e && !Object(o.a)(e)
                      , a = Object(i.a)(t)
                      , c = '"'.concat(t, '" should be a string.')
                      , s = '"'.concat(e, '" should be a function.');
                    if (e) {
                        if (!a)
                            throw new Error(c);
                        if (r)
                            throw new Error(s);
                        return this.bindEvent(t, null, e),
                        this
                    }
                    return new Promise((function(e, r) {
                        a || r(new Error(c)),
                        n.bindEvent(t, null, e)
                    }
                    ))
                }
            }, {
                key: "trigger",
                value: function(t, e) {
                    var n, r, o = Object(i.a)(t), s = (r = "object" === a(n = e) && Object.getPrototypeOf(n),
                    null !== n && "object" === a(n) && (r === Object.prototype || null === r) && "[object Object]" === c.call(n)), u = '"'.concat(t, '" should be a string.'), l = '"'.concat(e, '" should be an object.');
                    if (!o)
                        throw new Error(u);
                    if (e && !s)
                        throw new Error(l);
                    return this.element.dispatchEvent(new CustomEvent(t,{
                        detail: e
                    })),
                    this
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var t = this.events;
                    if (t) {
                        for (var e in t)
                            if (t.hasOwnProperty(e)) {
                                var n = t[e];
                                if (Object(o.a)(n) || (n = this[n]),
                                !n)
                                    continue;
                                var r = e.match(O.EVENT_SPLITTER);
                                this.bindEvent(r[1], r[2], n)
                            }
                        return this
                    }
                }
            }, {
                key: "subscribe_",
                value: function() {
                    this.store_.subscribe(this.subscriptions_)
                }
            }, {
                key: "bindEvent",
                value: function(t, e, n) {
                    var r = this;
                    if (this.element)
                        return e && e.length ? (b(this.element.querySelectorAll(e)).map((function(e) {
                            e.addEventListener(t, n.bind(r), !1)
                        }
                        )),
                        this) : (this.element.addEventListener(t, n.bind(this), !1),
                        this)
                }
            }, {
                key: "toSelectorCase",
                value: function(t) {
                    return String(t).replace(/([A-Z])/g, "-$1").toLowerCase()
                }
            }, {
                key: "getAttribute",
                value: function(t, e) {
                    var n = t.getAttribute("".concat(E.DATA).concat(this.toSelectorCase(e)));
                    return n && (n = n.trim()),
                    "true" == n || "True" == n || "" == n || "false" != n && "False" != n && n
                }
            }, {
                key: "hasAttribute",
                value: function(t, e) {
                    return t.hasAttribute("".concat(E.DATA).concat(this.toSelectorCase(e)))
                }
            }, {
                key: "setAttribute",
                value: function(t, e, n) {
                    return t.setAttribute("".concat(E.DATA).concat(this.toSelectorCase(e)), n),
                    this
                }
            }, {
                key: "removeAttribute",
                value: function(t, e) {
                    return t.removeAttribute("".concat(E.DATA).concat(this.toSelectorCase(e))),
                    this
                }
            }, {
                key: "getElement_",
                value: function(t) {
                    if (Object(i.a)(t))
                        return document.querySelector(t);
                    if (!(t instanceof Element))
                        throw new Error("".concat(t, " should be an Element"));
                    return t
                }
            }, {
                key: "initialize_",
                value: function() {}
            }, {
                key: "getDataConfiguration_",
                value: function() {
                    return Object(s.a)(this.element, "data-android-component-config")
                }
            }, {
                key: "getDataAnimation_",
                value: function() {
                    var t = this.element.getAttribute("data-android-component-animation") || "";
                    return this.global_.location.pathname.includes("_docs") ? this.global_.configurations[t] : r.default[t]
                }
            }, {
                key: "trackComponentVisibility_",
                value: function(t, e, n) {
                    var r = this
                      , o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
                      , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
                    if (n.threshold && n.threshold.length)
                        throw new f.h(this.element);
                    var a = p(p({}, {
                        root: null,
                        rootMargin: "0px 0px 0px 0px",
                        threshold: 0
                    }), n);
                    this.elementsToTrack_ = 0 === i.length ? [this.element] : b(i),
                    this.store_.subscribe([[this.topics_.VISIBILITY_TRIGGERED, function(n, i) {
                        var c = i.entries
                          , s = i.observer;
                        r.trackComponentVisibilityCallback_(n, c, s, t, e, o, a.threshold)
                    }
                    ]]),
                    this.visibilityId_ += "-threshold-".concat(a.threshold),
                    this.store_.dispatch(this.topics_.TRACK_VISIBILITY, {
                        id: this.visibilityId_,
                        data: {
                            isTrack: !0,
                            config: a,
                            elementsToTrack: this.elementsToTrack_
                        }
                    })
                }
            }, {
                key: "untrackComponentVisibility_",
                value: function() {
                    this.store_.dispatch(this.topics_.TRACK_VISIBILITY, {
                        id: this.visibilityId_,
                        data: {
                            isTrack: !1,
                            elementsToTrack: this.elementsToTrack_
                        }
                    })
                }
            }, {
                key: "trackComponentVisibilityCallback_",
                value: function(t, e, n, r, o, i, a) {
                    var c = this;
                    t === this.visibilityId_ && e.forEach((function(t) {
                        (c.element === t.target || c.elementsToTrack_.includes(t.target)) && (r && t.intersectionRatio > a ? (r(t),
                        i && n.unobserve(t.target)) : o && (o(t),
                        i && n.unobserve(t.target)))
                    }
                    ))
                }
            }]),
            t
        }()
          , E = {
            DATA: "data-"
        }
          , O = {
            EVENT_SPLITTER: /^(\S+)\s*(.*)$/
        }
    },
    10: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }
        ));
        var r = function(t, e, n) {
            var r;
            return function() {
                for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
                    i[a] = arguments[a];
                var c = function() {
                    r = null,
                    n || t.apply(void 0, i)
                }
                  , s = n && !r;
                clearTimeout(r),
                r = setTimeout(c, e),
                s && t.apply.apply(t, i)
            }
        }
    },
    11: function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return "function" == typeof t
        }
    },
    12: function(t, e, n) {
        "use strict";
        e.a = {
            requestTimeout: function(t, e) {
                var n = null;
                if (!window.requestAnimationFrame)
                    return window.setTimeout(t, e);
                return window.requestAnimationFrame((function r(o) {
                    n || (n = o),
                    o - n < e ? window.requestAnimationFrame(r) : t()
                }
                ))
            },
            clearRequestTimeout: function(t) {
                if (!window.requestAnimationFrame)
                    return window.clearTimeout(t);
                window.cancelAnimationFrame(t)
            }
        }
    },
    14: function(t, e, n) {
        "use strict";
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function i(t, e) {
            return (i = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function a(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = s(t);
                if (e) {
                    var o = s(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return c(this, n)
            }
        }
        function c(t, e) {
            return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function s(t) {
            return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        n.r(e),
        n.d(e, "LazyImage", (function() {
            return u
        }
        )),
        n.d(e, "tagName", (function() {
            return l
        }
        ));
        var u = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && i(t, e)
            }(s, t);
            var e, n, r, c = a(s);
            function s(t, e, n) {
                var r;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, s),
                (r = c.call(this, t, e)).threshold_ = n,
                r.visibilityId_ = "lazy-image-visibility",
                r
            }
            return e = s,
            (n = [{
                key: "initialize_",
                value: function() {
                    var t = this
                      , e = this.element.loaded
                      , n = this.store_.state.isConnectionFast;
                    e || this.trackComponentVisibility_((function() {
                        return t.updateImage_()
                    }
                    ), null, {
                        rootMargin: "150% 0% 150% 0%",
                        threshold: this.threshold_ || 0
                    }, !0),
                    "requestIdleCallback"in this.global_ && !e && n && this.global_.requestIdleCallback((function() {
                        t.updateImage_()
                    }
                    ), {
                        timeout: 2e3
                    })
                }
            }, {
                key: "updateImage_",
                value: function() {
                    this.element.visible = !0
                }
            }]) && o(e.prototype, n),
            r && o(e, r),
            s
        }(n(1).BaseComponent)
          , l = "cloud-image"
    },
    16: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }
        ));
        var r = {
            setState: function(t, e, n) {
                t.setAttribute(e, n)
            },
            State: {
                CHECKED: "aria-checked",
                HIDDEN: "aria-hidden",
                INVALID: "aria-invalid",
                LABEL: "aria-label",
                READONLY: "aria-readonly",
                REQUIRED: "aria-required",
                EXPANDED: "aria-expanded"
            }
        }
    },
    190: function(t, e) {
        (function() {
            "use strict";
            var t = window.Document.prototype.createElement
              , e = window.Document.prototype.createElementNS
              , n = window.Document.prototype.importNode
              , r = window.Document.prototype.prepend
              , o = window.Document.prototype.append
              , i = window.DocumentFragment.prototype.prepend
              , a = window.DocumentFragment.prototype.append
              , c = window.Node.prototype.cloneNode
              , s = window.Node.prototype.appendChild
              , u = window.Node.prototype.insertBefore
              , l = window.Node.prototype.removeChild
              , f = window.Node.prototype.replaceChild
              , h = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent")
              , d = window.Element.prototype.attachShadow
              , p = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML")
              , m = window.Element.prototype.getAttribute
              , b = window.Element.prototype.setAttribute
              , y = window.Element.prototype.removeAttribute
              , v = window.Element.prototype.getAttributeNS
              , _ = window.Element.prototype.setAttributeNS
              , g = window.Element.prototype.removeAttributeNS
              , w = window.Element.prototype.insertAdjacentElement
              , E = window.Element.prototype.insertAdjacentHTML
              , O = window.Element.prototype.prepend
              , j = window.Element.prototype.append
              , T = window.Element.prototype.before
              , S = window.Element.prototype.after
              , k = window.Element.prototype.replaceWith
              , C = window.Element.prototype.remove
              , A = window.HTMLElement
              , P = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML")
              , I = window.HTMLElement.prototype.insertAdjacentElement
              , D = window.HTMLElement.prototype.insertAdjacentHTML
              , R = new Set;
            function L(t) {
                var e = R.has(t);
                return t = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(t),
                !e && t
            }
            "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach((function(t) {
                return R.add(t)
            }
            ));
            var N = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
            function x(t) {
                var e = t.isConnected;
                if (void 0 !== e)
                    return e;
                if (N(t))
                    return !0;
                for (; t && !(t.__CE_isImportDocument || t instanceof Document); )
                    t = t.parentNode || (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);
                return !(!t || !(t.__CE_isImportDocument || t instanceof Document))
            }
            function M(t) {
                var e = t.children;
                if (e)
                    return Array.prototype.slice.call(e);
                for (e = [],
                t = t.firstChild; t; t = t.nextSibling)
                    t.nodeType === Node.ELEMENT_NODE && e.push(t);
                return e
            }
            function F(t, e) {
                for (; e && e !== t && !e.nextSibling; )
                    e = e.parentNode;
                return e && e !== t ? e.nextSibling : null
            }
            function B() {
                var t = !(null == at || !at.noDocumentConstructionObserver)
                  , e = !(null == at || !at.shadyDomFastWalk);
                this.h = [],
                this.a = [],
                this.f = !1,
                this.shadyDomFastWalk = e,
                this.C = !t
            }
            function H(t, e, n, r) {
                var o = window.ShadyDom;
                if (t.shadyDomFastWalk && o && o.inUse) {
                    if (e.nodeType === Node.ELEMENT_NODE && n(e),
                    e.querySelectorAll)
                        for (t = o.nativeMethods.querySelectorAll.call(e, "*"),
                        e = 0; e < t.length; e++)
                            n(t[e])
                } else
                    !function t(e, n, r) {
                        for (var o = e; o; ) {
                            if (o.nodeType === Node.ELEMENT_NODE) {
                                var i = o;
                                n(i);
                                var a = i.localName;
                                if ("link" === a && "import" === i.getAttribute("rel")) {
                                    if (o = i.import,
                                    void 0 === r && (r = new Set),
                                    o instanceof Node && !r.has(o))
                                        for (r.add(o),
                                        o = o.firstChild; o; o = o.nextSibling)
                                            t(o, n, r);
                                    o = F(e, i);
                                    continue
                                }
                                if ("template" === a) {
                                    o = F(e, i);
                                    continue
                                }
                                if (i = i.__CE_shadowRoot)
                                    for (i = i.firstChild; i; i = i.nextSibling)
                                        t(i, n, r)
                            }
                            o = o.firstChild ? o.firstChild : F(e, o)
                        }
                    }(e, n, r)
            }
            function z(t, e) {
                t.f && H(t, e, (function(e) {
                    return V(t, e)
                }
                ))
            }
            function V(t, e) {
                if (t.f && !e.__CE_patched) {
                    e.__CE_patched = !0;
                    for (var n = 0; n < t.h.length; n++)
                        t.h[n](e);
                    for (n = 0; n < t.a.length; n++)
                        t.a[n](e)
                }
            }
            function U(t, e) {
                var n = [];
                for (H(t, e, (function(t) {
                    return n.push(t)
                }
                )),
                e = 0; e < n.length; e++) {
                    var r = n[e];
                    1 === r.__CE_state ? t.connectedCallback(r) : K(t, r)
                }
            }
            function W(t, e) {
                var n = [];
                for (H(t, e, (function(t) {
                    return n.push(t)
                }
                )),
                e = 0; e < n.length; e++) {
                    var r = n[e];
                    1 === r.__CE_state && t.disconnectedCallback(r)
                }
            }
            function G(t, e, n) {
                var r = (n = void 0 === n ? {} : n).D
                  , o = n.upgrade || function(e) {
                    return K(t, e)
                }
                  , i = [];
                for (H(t, e, (function(e) {
                    if (t.f && V(t, e),
                    "link" === e.localName && "import" === e.getAttribute("rel")) {
                        var n = e.import;
                        n instanceof Node && (n.__CE_isImportDocument = !0,
                        n.__CE_registry = document.__CE_registry),
                        n && "complete" === n.readyState ? n.__CE_documentLoadHandled = !0 : e.addEventListener("load", (function() {
                            var n = e.import;
                            if (!n.__CE_documentLoadHandled) {
                                n.__CE_documentLoadHandled = !0;
                                var i = new Set;
                                r && (r.forEach((function(t) {
                                    return i.add(t)
                                }
                                )),
                                i.delete(n)),
                                G(t, n, {
                                    D: i,
                                    upgrade: o
                                })
                            }
                        }
                        ))
                    } else
                        i.push(e)
                }
                ), r),
                e = 0; e < i.length; e++)
                    o(i[e])
            }
            function K(t, e) {
                try {
                    var n = e.ownerDocument
                      , r = n.__CE_registry
                      , o = r && (n.defaultView || n.__CE_isImportDocument) ? nt(r, e.localName) : void 0;
                    if (o && void 0 === e.__CE_state) {
                        o.constructionStack.push(e);
                        try {
                            try {
                                if (new o.constructorFunction !== e)
                                    throw Error("The custom element constructor did not produce the element being upgraded.")
                            } finally {
                                o.constructionStack.pop()
                            }
                        } catch (t) {
                            throw e.__CE_state = 2,
                            t
                        }
                        if (e.__CE_state = 1,
                        e.__CE_definition = o,
                        o.attributeChangedCallback && e.hasAttributes()) {
                            var i = o.observedAttributes;
                            for (o = 0; o < i.length; o++) {
                                var a = i[o]
                                  , c = e.getAttribute(a);
                                null !== c && t.attributeChangedCallback(e, a, null, c, null)
                            }
                        }
                        x(e) && t.connectedCallback(e)
                    }
                } catch (t) {
                    q(t)
                }
            }
            function Y(n, r, o, i) {
                var a = r.__CE_registry;
                if (a && (null === i || "http://www.w3.org/1999/xhtml" === i) && (a = nt(a, o)))
                    try {
                        var c = new a.constructorFunction;
                        if (void 0 === c.__CE_state || void 0 === c.__CE_definition)
                            throw Error("Failed to construct '" + o + "': The returned value was not constructed with the HTMLElement constructor.");
                        if ("http://www.w3.org/1999/xhtml" !== c.namespaceURI)
                            throw Error("Failed to construct '" + o + "': The constructed element's namespace must be the HTML namespace.");
                        if (c.hasAttributes())
                            throw Error("Failed to construct '" + o + "': The constructed element must not have any attributes.");
                        if (null !== c.firstChild)
                            throw Error("Failed to construct '" + o + "': The constructed element must not have any children.");
                        if (null !== c.parentNode)
                            throw Error("Failed to construct '" + o + "': The constructed element must not have a parent node.");
                        if (c.ownerDocument !== r)
                            throw Error("Failed to construct '" + o + "': The constructed element's owner document is incorrect.");
                        if (c.localName !== o)
                            throw Error("Failed to construct '" + o + "': The constructed element's local name is incorrect.");
                        return c
                    } catch (a) {
                        return q(a),
                        r = null === i ? t.call(r, o) : e.call(r, i, o),
                        Object.setPrototypeOf(r, HTMLUnknownElement.prototype),
                        r.__CE_state = 2,
                        r.__CE_definition = void 0,
                        V(n, r),
                        r
                    }
                return V(n, r = null === i ? t.call(r, o) : e.call(r, i, o)),
                r
            }
            function q(t) {
                var e = t.message
                  , n = t.sourceURL || t.fileName || ""
                  , r = t.line || t.lineNumber || 0
                  , o = t.column || t.columnNumber || 0
                  , i = void 0;
                void 0 === ErrorEvent.prototype.initErrorEvent ? i = new ErrorEvent("error",{
                    cancelable: !0,
                    message: e,
                    filename: n,
                    lineno: r,
                    colno: o,
                    error: t
                }) : ((i = document.createEvent("ErrorEvent")).initErrorEvent("error", !1, !0, e, n, r),
                i.preventDefault = function() {
                    Object.defineProperty(this, "defaultPrevented", {
                        configurable: !0,
                        get: function() {
                            return !0
                        }
                    })
                }
                ),
                void 0 === i.error && Object.defineProperty(i, "error", {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return t
                    }
                }),
                window.dispatchEvent(i),
                i.defaultPrevented || console.error(t)
            }
            function X() {
                var t = this;
                this.a = void 0,
                this.w = new Promise((function(e) {
                    t.g = e
                }
                ))
            }
            function J(t) {
                var e = document;
                this.g = void 0,
                this.b = t,
                this.a = e,
                G(this.b, this.a),
                "loading" === this.a.readyState && (this.g = new MutationObserver(this.A.bind(this)),
                this.g.observe(this.a, {
                    childList: !0,
                    subtree: !0
                }))
            }
            function $(t) {
                t.g && t.g.disconnect()
            }
            function Q(t) {
                this.j = new Map,
                this.l = new Map,
                this.u = new Map,
                this.o = !1,
                this.s = new Map,
                this.i = function(t) {
                    return t()
                }
                ,
                this.c = !1,
                this.m = [],
                this.b = t,
                this.v = t.C ? new J(t) : void 0
            }
            function Z(t, e) {
                if (!L(e))
                    throw new SyntaxError("The element name '" + e + "' is not valid.");
                if (nt(t, e))
                    throw Error("A custom element with name '" + e + "' has already been defined.");
                if (t.o)
                    throw Error("A custom element is already being defined.")
            }
            function tt(t, e, n) {
                var r;
                t.o = !0;
                try {
                    var o = n.prototype;
                    if (!(o instanceof Object))
                        throw new TypeError("The custom element constructor's prototype is not an object.");
                    var i = function(t) {
                        var e = o[t];
                        if (void 0 !== e && !(e instanceof Function))
                            throw Error("The '" + t + "' callback must be a function.");
                        return e
                    }
                      , a = i("connectedCallback")
                      , c = i("disconnectedCallback")
                      , s = i("adoptedCallback")
                      , u = (r = i("attributeChangedCallback")) && n.observedAttributes || []
                } catch (t) {
                    throw t
                } finally {
                    t.o = !1
                }
                return n = {
                    localName: e,
                    constructorFunction: n,
                    connectedCallback: a,
                    disconnectedCallback: c,
                    adoptedCallback: s,
                    attributeChangedCallback: r,
                    observedAttributes: u,
                    constructionStack: []
                },
                t.l.set(e, n),
                t.u.set(n.constructorFunction, n),
                n
            }
            function et(t) {
                if (!1 !== t.c) {
                    t.c = !1;
                    for (var e = [], n = t.m, r = new Map, o = 0; o < n.length; o++)
                        r.set(n[o], []);
                    for (G(t.b, document, {
                        upgrade: function(n) {
                            if (void 0 === n.__CE_state) {
                                var o = n.localName
                                  , i = r.get(o);
                                i ? i.push(n) : t.l.has(o) && e.push(n)
                            }
                        }
                    }),
                    o = 0; o < e.length; o++)
                        K(t.b, e[o]);
                    for (o = 0; o < n.length; o++) {
                        for (var i = n[o], a = r.get(i), c = 0; c < a.length; c++)
                            K(t.b, a[c]);
                        (i = t.s.get(i)) && i.resolve(void 0)
                    }
                    n.length = 0
                }
            }
            function nt(t, e) {
                var n = t.l.get(e);
                if (n)
                    return n;
                if (n = t.j.get(e)) {
                    t.j.delete(e);
                    try {
                        return tt(t, e, n())
                    } catch (t) {
                        q(t)
                    }
                }
            }
            function rt(t, e, n) {
                function r(e) {
                    return function(n) {
                        for (var r = [], o = 0; o < arguments.length; ++o)
                            r[o] = arguments[o];
                        o = [];
                        for (var i = [], a = 0; a < r.length; a++) {
                            var c = r[a];
                            if (c instanceof Element && x(c) && i.push(c),
                            c instanceof DocumentFragment)
                                for (c = c.firstChild; c; c = c.nextSibling)
                                    o.push(c);
                            else
                                o.push(c)
                        }
                        for (e.apply(this, r),
                        r = 0; r < i.length; r++)
                            W(t, i[r]);
                        if (x(this))
                            for (r = 0; r < o.length; r++)
                                (i = o[r])instanceof Element && U(t, i)
                    }
                }
                void 0 !== n.prepend && (e.prepend = r(n.prepend)),
                void 0 !== n.append && (e.append = r(n.append))
            }
            function ot(t) {
                function n(e, n) {
                    Object.defineProperty(e, "innerHTML", {
                        enumerable: n.enumerable,
                        configurable: !0,
                        get: n.get,
                        set: function(e) {
                            var r = this
                              , o = void 0;
                            if (x(this) && (o = [],
                            H(t, this, (function(t) {
                                t !== r && o.push(t)
                            }
                            ))),
                            n.set.call(this, e),
                            o)
                                for (var i = 0; i < o.length; i++) {
                                    var a = o[i];
                                    1 === a.__CE_state && t.disconnectedCallback(a)
                                }
                            return this.ownerDocument.__CE_registry ? G(t, this) : z(t, this),
                            e
                        }
                    })
                }
                function r(e, n) {
                    e.insertAdjacentElement = function(e, r) {
                        var o = x(r);
                        return e = n.call(this, e, r),
                        o && W(t, r),
                        x(e) && U(t, r),
                        e
                    }
                }
                function o(e, n) {
                    function r(e, n) {
                        for (var r = []; e !== n; e = e.nextSibling)
                            r.push(e);
                        for (n = 0; n < r.length; n++)
                            G(t, r[n])
                    }
                    e.insertAdjacentHTML = function(t, e) {
                        if ("beforebegin" === (t = t.toLowerCase())) {
                            var o = this.previousSibling;
                            n.call(this, t, e),
                            r(o || this.parentNode.firstChild, this)
                        } else if ("afterbegin" === t)
                            o = this.firstChild,
                            n.call(this, t, e),
                            r(this.firstChild, o);
                        else if ("beforeend" === t)
                            o = this.lastChild,
                            n.call(this, t, e),
                            r(o || this.firstChild, null);
                        else {
                            if ("afterend" !== t)
                                throw new SyntaxError("The value provided (" + String(t) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
                            o = this.nextSibling,
                            n.call(this, t, e),
                            r(this.nextSibling, o)
                        }
                    }
                }
                d && (Element.prototype.attachShadow = function(e) {
                    if (e = d.call(this, e),
                    t.f && !e.__CE_patched) {
                        e.__CE_patched = !0;
                        for (var n = 0; n < t.h.length; n++)
                            t.h[n](e)
                    }
                    return this.__CE_shadowRoot = e
                }
                ),
                p && p.get ? n(Element.prototype, p) : P && P.get ? n(HTMLElement.prototype, P) : function(t, e) {
                    t.f = !0,
                    t.a.push(e)
                }(t, (function(t) {
                    n(t, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            return c.call(this, !0).innerHTML
                        },
                        set: function(t) {
                            var n = "template" === this.localName
                              , r = n ? this.content : this
                              , o = e.call(document, this.namespaceURI, this.localName);
                            for (o.innerHTML = t; 0 < r.childNodes.length; )
                                l.call(r, r.childNodes[0]);
                            for (t = n ? o.content : o; 0 < t.childNodes.length; )
                                s.call(r, t.childNodes[0])
                        }
                    })
                }
                )),
                Element.prototype.setAttribute = function(e, n) {
                    if (1 !== this.__CE_state)
                        return b.call(this, e, n);
                    var r = m.call(this, e);
                    b.call(this, e, n),
                    n = m.call(this, e),
                    t.attributeChangedCallback(this, e, r, n, null)
                }
                ,
                Element.prototype.setAttributeNS = function(e, n, r) {
                    if (1 !== this.__CE_state)
                        return _.call(this, e, n, r);
                    var o = v.call(this, e, n);
                    _.call(this, e, n, r),
                    r = v.call(this, e, n),
                    t.attributeChangedCallback(this, n, o, r, e)
                }
                ,
                Element.prototype.removeAttribute = function(e) {
                    if (1 !== this.__CE_state)
                        return y.call(this, e);
                    var n = m.call(this, e);
                    y.call(this, e),
                    null !== n && t.attributeChangedCallback(this, e, n, null, null)
                }
                ,
                Element.prototype.removeAttributeNS = function(e, n) {
                    if (1 !== this.__CE_state)
                        return g.call(this, e, n);
                    var r = v.call(this, e, n);
                    g.call(this, e, n);
                    var o = v.call(this, e, n);
                    r !== o && t.attributeChangedCallback(this, n, r, o, e)
                }
                ,
                I ? r(HTMLElement.prototype, I) : w && r(Element.prototype, w),
                D ? o(HTMLElement.prototype, D) : E && o(Element.prototype, E),
                rt(t, Element.prototype, {
                    prepend: O,
                    append: j
                }),
                function(t) {
                    function e(e) {
                        return function(n) {
                            for (var r = [], o = 0; o < arguments.length; ++o)
                                r[o] = arguments[o];
                            o = [];
                            for (var i = [], a = 0; a < r.length; a++) {
                                var c = r[a];
                                if (c instanceof Element && x(c) && i.push(c),
                                c instanceof DocumentFragment)
                                    for (c = c.firstChild; c; c = c.nextSibling)
                                        o.push(c);
                                else
                                    o.push(c)
                            }
                            for (e.apply(this, r),
                            r = 0; r < i.length; r++)
                                W(t, i[r]);
                            if (x(this))
                                for (r = 0; r < o.length; r++)
                                    (i = o[r])instanceof Element && U(t, i)
                        }
                    }
                    var n = Element.prototype;
                    void 0 !== T && (n.before = e(T)),
                    void 0 !== S && (n.after = e(S)),
                    void 0 !== k && (n.replaceWith = function(e) {
                        for (var n = [], r = 0; r < arguments.length; ++r)
                            n[r] = arguments[r];
                        r = [];
                        for (var o = [], i = 0; i < n.length; i++) {
                            var a = n[i];
                            if (a instanceof Element && x(a) && o.push(a),
                            a instanceof DocumentFragment)
                                for (a = a.firstChild; a; a = a.nextSibling)
                                    r.push(a);
                            else
                                r.push(a)
                        }
                        for (i = x(this),
                        k.apply(this, n),
                        n = 0; n < o.length; n++)
                            W(t, o[n]);
                        if (i)
                            for (W(t, this),
                            n = 0; n < r.length; n++)
                                (o = r[n])instanceof Element && U(t, o)
                    }
                    ),
                    void 0 !== C && (n.remove = function() {
                        var e = x(this);
                        C.call(this),
                        e && W(t, this)
                    }
                    )
                }(t)
            }
            B.prototype.connectedCallback = function(t) {
                var e = t.__CE_definition;
                if (e.connectedCallback)
                    try {
                        e.connectedCallback.call(t)
                    } catch (t) {
                        q(t)
                    }
            }
            ,
            B.prototype.disconnectedCallback = function(t) {
                var e = t.__CE_definition;
                if (e.disconnectedCallback)
                    try {
                        e.disconnectedCallback.call(t)
                    } catch (t) {
                        q(t)
                    }
            }
            ,
            B.prototype.attributeChangedCallback = function(t, e, n, r, o) {
                var i = t.__CE_definition;
                if (i.attributeChangedCallback && -1 < i.observedAttributes.indexOf(e))
                    try {
                        i.attributeChangedCallback.call(t, e, n, r, o)
                    } catch (t) {
                        q(t)
                    }
            }
            ,
            X.prototype.resolve = function(t) {
                if (this.a)
                    throw Error("Already resolved.");
                this.a = t,
                this.g(t)
            }
            ,
            J.prototype.A = function(t) {
                var e = this.a.readyState;
                for ("interactive" !== e && "complete" !== e || $(this),
                e = 0; e < t.length; e++)
                    for (var n = t[e].addedNodes, r = 0; r < n.length; r++)
                        G(this.b, n[r])
            }
            ,
            Q.prototype.B = function(t, e) {
                var n = this;
                if (!(e instanceof Function))
                    throw new TypeError("Custom element constructor getters must be functions.");
                Z(this, t),
                this.j.set(t, e),
                this.m.push(t),
                this.c || (this.c = !0,
                this.i((function() {
                    return et(n)
                }
                )))
            }
            ,
            Q.prototype.define = function(t, e) {
                var n = this;
                if (!(e instanceof Function))
                    throw new TypeError("Custom element constructors must be functions.");
                Z(this, t),
                tt(this, t, e),
                this.m.push(t),
                this.c || (this.c = !0,
                this.i((function() {
                    return et(n)
                }
                )))
            }
            ,
            Q.prototype.upgrade = function(t) {
                G(this.b, t)
            }
            ,
            Q.prototype.get = function(t) {
                if (t = nt(this, t))
                    return t.constructorFunction
            }
            ,
            Q.prototype.whenDefined = function(t) {
                if (!L(t))
                    return Promise.reject(new SyntaxError("'" + t + "' is not a valid custom element name."));
                var e = this.s.get(t);
                if (e)
                    return e.w;
                e = new X,
                this.s.set(t, e);
                var n = this.l.has(t) || this.j.has(t);
                return t = -1 === this.m.indexOf(t),
                n && t && e.resolve(void 0),
                e.w
            }
            ,
            Q.prototype.polyfillWrapFlushCallback = function(t) {
                this.v && $(this.v);
                var e = this.i;
                this.i = function(n) {
                    return t((function() {
                        return e(n)
                    }
                    ))
                }
            }
            ,
            window.CustomElementRegistry = Q,
            Q.prototype.define = Q.prototype.define,
            Q.prototype.upgrade = Q.prototype.upgrade,
            Q.prototype.get = Q.prototype.get,
            Q.prototype.whenDefined = Q.prototype.whenDefined,
            Q.prototype.polyfillDefineLazy = Q.prototype.B,
            Q.prototype.polyfillWrapFlushCallback = Q.prototype.polyfillWrapFlushCallback;
            var it = {};
            var at = window.customElements;
            function ct() {
                var e = new B;
                !function(e) {
                    function n() {
                        var n = this.constructor
                          , r = document.__CE_registry.u.get(n);
                        if (!r)
                            throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
                        var o = r.constructionStack;
                        if (0 === o.length)
                            return o = t.call(document, r.localName),
                            Object.setPrototypeOf(o, n.prototype),
                            o.__CE_state = 1,
                            o.__CE_definition = r,
                            V(e, o),
                            o;
                        var i = o.length - 1
                          , a = o[i];
                        if (a === it)
                            throw Error("Failed to construct '" + r.localName + "': This element was already constructed.");
                        return o[i] = it,
                        Object.setPrototypeOf(a, n.prototype),
                        V(e, a),
                        a
                    }
                    n.prototype = A.prototype,
                    Object.defineProperty(HTMLElement.prototype, "constructor", {
                        writable: !0,
                        configurable: !0,
                        enumerable: !1,
                        value: n
                    }),
                    window.HTMLElement = n
                }(e),
                function(t) {
                    Document.prototype.createElement = function(e) {
                        return Y(t, this, e, null)
                    }
                    ,
                    Document.prototype.importNode = function(e, r) {
                        return e = n.call(this, e, !!r),
                        this.__CE_registry ? G(t, e) : z(t, e),
                        e
                    }
                    ,
                    Document.prototype.createElementNS = function(e, n) {
                        return Y(t, this, n, e)
                    }
                    ,
                    rt(t, Document.prototype, {
                        prepend: r,
                        append: o
                    })
                }(e),
                rt(e, DocumentFragment.prototype, {
                    prepend: i,
                    append: a
                }),
                function(t) {
                    function e(e, n) {
                        Object.defineProperty(e, "textContent", {
                            enumerable: n.enumerable,
                            configurable: !0,
                            get: n.get,
                            set: function(e) {
                                if (this.nodeType === Node.TEXT_NODE)
                                    n.set.call(this, e);
                                else {
                                    var r = void 0;
                                    if (this.firstChild) {
                                        var o = this.childNodes
                                          , i = o.length;
                                        if (0 < i && x(this)) {
                                            r = Array(i);
                                            for (var a = 0; a < i; a++)
                                                r[a] = o[a]
                                        }
                                    }
                                    if (n.set.call(this, e),
                                    r)
                                        for (e = 0; e < r.length; e++)
                                            W(t, r[e])
                                }
                            }
                        })
                    }
                    Node.prototype.insertBefore = function(e, n) {
                        if (e instanceof DocumentFragment) {
                            var r = M(e);
                            if (e = u.call(this, e, n),
                            x(this))
                                for (n = 0; n < r.length; n++)
                                    U(t, r[n]);
                            return e
                        }
                        return r = e instanceof Element && x(e),
                        n = u.call(this, e, n),
                        r && W(t, e),
                        x(this) && U(t, e),
                        n
                    }
                    ,
                    Node.prototype.appendChild = function(e) {
                        if (e instanceof DocumentFragment) {
                            var n = M(e);
                            if (e = s.call(this, e),
                            x(this))
                                for (var r = 0; r < n.length; r++)
                                    U(t, n[r]);
                            return e
                        }
                        return n = e instanceof Element && x(e),
                        r = s.call(this, e),
                        n && W(t, e),
                        x(this) && U(t, e),
                        r
                    }
                    ,
                    Node.prototype.cloneNode = function(e) {
                        return e = c.call(this, !!e),
                        this.ownerDocument.__CE_registry ? G(t, e) : z(t, e),
                        e
                    }
                    ,
                    Node.prototype.removeChild = function(e) {
                        var n = e instanceof Element && x(e)
                          , r = l.call(this, e);
                        return n && W(t, e),
                        r
                    }
                    ,
                    Node.prototype.replaceChild = function(e, n) {
                        if (e instanceof DocumentFragment) {
                            var r = M(e);
                            if (e = f.call(this, e, n),
                            x(this))
                                for (W(t, n),
                                n = 0; n < r.length; n++)
                                    U(t, r[n]);
                            return e
                        }
                        r = e instanceof Element && x(e);
                        var o = f.call(this, e, n)
                          , i = x(this);
                        return i && W(t, n),
                        r && W(t, e),
                        i && U(t, e),
                        o
                    }
                    ,
                    h && h.get ? e(Node.prototype, h) : function(t, e) {
                        t.f = !0,
                        t.h.push(e)
                    }(t, (function(t) {
                        e(t, {
                            enumerable: !0,
                            configurable: !0,
                            get: function() {
                                for (var t = [], e = this.firstChild; e; e = e.nextSibling)
                                    e.nodeType !== Node.COMMENT_NODE && t.push(e.textContent);
                                return t.join("")
                            },
                            set: function(t) {
                                for (; this.firstChild; )
                                    l.call(this, this.firstChild);
                                null != t && "" !== t && s.call(this, document.createTextNode(t))
                            }
                        })
                    }
                    ))
                }(e),
                ot(e),
                e = new Q(e),
                document.__CE_registry = e,
                Object.defineProperty(window, "customElements", {
                    configurable: !0,
                    enumerable: !0,
                    value: e
                })
            }
            at && !at.forcePolyfill && "function" == typeof at.define && "function" == typeof at.get || ct(),
            window.__CE_installPolyfill = ct
        }
        ).call(self)
    },
    191: function(t, e, n) {
        !function() {
            "use strict";
            function t(t) {
                var e = !0
                  , n = !1
                  , r = null
                  , o = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function i(t) {
                    return !!(t && t !== document && "HTML" !== t.nodeName && "BODY" !== t.nodeName && "classList"in t && "contains"in t.classList)
                }
                function a(t) {
                    t.classList.contains("focus-visible") || (t.classList.add("focus-visible"),
                    t.setAttribute("data-focus-visible-added", ""))
                }
                function c(t) {
                    e = !1
                }
                function s() {
                    document.addEventListener("mousemove", u),
                    document.addEventListener("mousedown", u),
                    document.addEventListener("mouseup", u),
                    document.addEventListener("pointermove", u),
                    document.addEventListener("pointerdown", u),
                    document.addEventListener("pointerup", u),
                    document.addEventListener("touchmove", u),
                    document.addEventListener("touchstart", u),
                    document.addEventListener("touchend", u)
                }
                function u(t) {
                    t.target.nodeName && "html" === t.target.nodeName.toLowerCase() || (e = !1,
                    document.removeEventListener("mousemove", u),
                    document.removeEventListener("mousedown", u),
                    document.removeEventListener("mouseup", u),
                    document.removeEventListener("pointermove", u),
                    document.removeEventListener("pointerdown", u),
                    document.removeEventListener("pointerup", u),
                    document.removeEventListener("touchmove", u),
                    document.removeEventListener("touchstart", u),
                    document.removeEventListener("touchend", u))
                }
                document.addEventListener("keydown", (function(n) {
                    n.metaKey || n.altKey || n.ctrlKey || (i(t.activeElement) && a(t.activeElement),
                    e = !0)
                }
                ), !0),
                document.addEventListener("mousedown", c, !0),
                document.addEventListener("pointerdown", c, !0),
                document.addEventListener("touchstart", c, !0),
                document.addEventListener("visibilitychange", (function(t) {
                    "hidden" === document.visibilityState && (n && (e = !0),
                    s())
                }
                ), !0),
                s(),
                t.addEventListener("focus", (function(t) {
                    var n, r, c;
                    i(t.target) && (e || (n = t.target,
                    r = n.type,
                    "INPUT" === (c = n.tagName) && o[r] && !n.readOnly || "TEXTAREA" === c && !n.readOnly || n.isContentEditable)) && a(t.target)
                }
                ), !0),
                t.addEventListener("blur", (function(t) {
                    var e;
                    i(t.target) && (t.target.classList.contains("focus-visible") || t.target.hasAttribute("data-focus-visible-added")) && (n = !0,
                    window.clearTimeout(r),
                    r = window.setTimeout((function() {
                        n = !1
                    }
                    ), 100),
                    (e = t.target).hasAttribute("data-focus-visible-added") && (e.classList.remove("focus-visible"),
                    e.removeAttribute("data-focus-visible-added")))
                }
                ), !0),
                t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && t.host ? t.host.setAttribute("data-js-focus-visible", "") : t.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"),
                document.documentElement.setAttribute("data-js-focus-visible", ""))
            }
            if ("undefined" != typeof window && "undefined" != typeof document) {
                var e;
                window.applyFocusVisiblePolyfill = t;
                try {
                    e = new CustomEvent("focus-visible-polyfill-ready")
                } catch (t) {
                    (e = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
                }
                window.dispatchEvent(e)
            }
            "undefined" != typeof document && t(document)
        }()
    },
    192: function(t, e, n) {
        var r = {
            "./_Docs": [40, 5],
            "./_Docs.js": [40, 5],
            "./accordion": [31, 18],
            "./accordion-item": [28, 26],
            "./accordion-item.js": [28, 26],
            "./accordion.js": [31, 18],
            "./anchor-scroll": [41, 27],
            "./anchor-scroll.js": [41, 27],
            "./animatable-content": [42, 28],
            "./animatable-content.js": [42, 28],
            "./animatable-device": [43, 19],
            "./animatable-device.js": [43, 19],
            "./carousel": [33, 29],
            "./carousel-card": [44, 6],
            "./carousel-card.js": [44, 6],
            "./carousel-dialog": [45, 3],
            "./carousel-dialog.js": [45, 3],
            "./carousel.js": [33, 29],
            "./copy-to-clipboard": [46, 30],
            "./copy-to-clipboard.js": [46, 30],
            "./cta": [47, 31],
            "./cta.js": [47, 31],
            "./expandable-field": [48, 32],
            "./expandable-field.js": [48, 32],
            "./filters": [49, 33],
            "./filters.js": [49, 33],
            "./footer": [50, 34],
            "./footer.js": [50, 34],
            "./header": [51, 35],
            "./header.js": [51, 35],
            "./image-popout": [52, 20],
            "./image-popout.js": [52, 20],
            "./image-toggle": [53, 36],
            "./image-toggle.js": [53, 36],
            "./image-waitable": [18, 1],
            "./image-waitable/": [18, 1],
            "./image-waitable/index": [18, 1],
            "./image-waitable/index.js": [18, 1],
            "./language-selector": [54, 37],
            "./language-selector.js": [54, 37],
            "./lazy-image": [14],
            "./lazy-image.js": [14],
            "./live-transcribe": [55, 17],
            "./live-transcribe.js": [55, 17],
            "./lottie-animatable": [56, 22],
            "./lottie-animatable.js": [56, 22],
            "./lottie-animation": [39, 38],
            "./lottie-animation.js": [39, 38],
            "./modal": [59, 7],
            "./modal-content": [57, 39],
            "./modal-content.js": [57, 39],
            "./modal-opener": [58, 40],
            "./modal-opener.js": [58, 40],
            "./modal.js": [59, 7],
            "./nav-dropdown": [60, 8],
            "./nav-dropdown.js": [60, 8],
            "./parallaxable": [19, 2],
            "./parallaxable/": [19, 2],
            "./parallaxable/index": [19, 2],
            "./parallaxable/index.js": [19, 2],
            "./parallaxable/test": [61, 9],
            "./parallaxable/test.js": [61, 9],
            "./progress-bar": [62, 16],
            "./progress-bar.js": [62, 16],
            "./progress-nav": [37, 41],
            "./progress-nav.js": [37, 41],
            "./rotating-heading": [63, 42],
            "./rotating-heading.js": [63, 42],
            "./row-heading": [64, 43],
            "./row-heading.js": [64, 43],
            "./scroll-cta": [32, 44],
            "./scroll-cta.js": [32, 44],
            "./scrollto-button": [65, 23],
            "./scrollto-button.js": [65, 23],
            "./search": [67, 12],
            "./search-bar": [66, 11],
            "./search-bar.js": [66, 11],
            "./search.js": [67, 12],
            "./slideshow": [68, 45],
            "./slideshow.js": [68, 45],
            "./step-tracker": [69, 46],
            "./step-tracker.js": [69, 46],
            "./sticky": [71, 21],
            "./sticky-dialog": [70, 4],
            "./sticky-dialog.js": [70, 4],
            "./sticky.js": [71, 21],
            "./subnav": [73, 48],
            "./subnav-spy": [38, 47],
            "./subnav-spy-levels": [72, 24],
            "./subnav-spy-levels.js": [72, 24],
            "./subnav-spy.js": [38, 47],
            "./subnav.js": [73, 48],
            "./tab-content": [17, 49],
            "./tab-content.js": [17, 49],
            "./tab-timer": [74, 13],
            "./tab-timer.js": [74, 13],
            "./theme-switcher": [75, 50],
            "./theme-switcher.js": [75, 50],
            "./video": [13, 51],
            "./video.js": [13, 51],
            "./wizard-progress-nav": [76, 10],
            "./wizard-progress-nav.js": [76, 10],
            "./wizard-step": [35, 25],
            "./wizard-step-multiple-choice": [77, 14],
            "./wizard-step-multiple-choice.js": [77, 14],
            "./wizard-step-single-choice": [78, 15],
            "./wizard-step-single-choice.js": [78, 15],
            "./wizard-step.js": [35, 25],
            "./you-tube-video": [79, 52],
            "./you-tube-video.js": [79, 52]
        };
        function o(t) {
            if (!n.o(r, t))
                return Promise.resolve().then((function() {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND",
                    e
                }
                ));
            var e = r[t]
              , o = e[0];
            return Promise.all(e.slice(1).map(n.e)).then((function() {
                return n(o)
            }
            ))
        }
        o.keys = function() {
            return Object.keys(r)
        }
        ,
        o.id = 192,
        t.exports = o
    },
    193: function(t, e, n) {
        var r = {
            "./animation-timings": [102, 115],
            "./animation-timings.js": [102, 115],
            "./better-together-hero": [110, 84],
            "./better-together-hero.js": [110, 84],
            "./bg-app-suggestions": [111, 116],
            "./bg-app-suggestions.js": [111, 116],
            "./bg-smart-folders": [112, 117],
            "./bg-smart-folders.js": [112, 117],
            "./bg-smart-replies": [113, 118],
            "./bg-smart-replies.js": [113, 118],
            "./bundle-devices-animation": [114, 85],
            "./bundle-devices-animation.js": [114, 85],
            "./car-crash": [115, 119],
            "./car-crash.js": [115, 119],
            "./card-image-group": [116, 120],
            "./card-image-group.js": [116, 120],
            "./clip-devices": [117, 86],
            "./clip-devices.js": [117, 86],
            "./configuration": [21],
            "./configuration.js": [21],
            "./customizer": [118, 55],
            "./customizer.js": [118, 55],
            "./els-case-study-coburg-germany-bubbles": [119, 87],
            "./els-case-study-coburg-germany-bubbles.js": [119, 87],
            "./fall-bundle-devices": [120, 88],
            "./fall-bundle-devices.js": [120, 88],
            "./google-features-on-android": [121, 89],
            "./google-features-on-android.js": [121, 89],
            "./hero-gms-drop": [122, 90],
            "./hero-gms-drop.js": [122, 90],
            "./icon-fade-in": [123, 91],
            "./icon-fade-in.js": [123, 91],
            "./image-popout-static": [124, 92],
            "./image-popout-static.js": [124, 92],
            "./image-slide-in": [125, 93],
            "./image-slide-in.js": [125, 93],
            "./introducing-a12": [126, 94],
            "./introducing-a12.js": [126, 94],
            "./parallax-engine": [104, 64],
            "./parallax-engine.js": [104, 64],
            "./safety-center-auto-reset": [127, 95],
            "./safety-center-auto-reset.js": [127, 95],
            "./safety-center-dashboard": [128, 121],
            "./safety-center-dashboard.js": [128, 121],
            "./safety-center-hero-devices": [129, 122],
            "./safety-center-hero-devices.js": [129, 122],
            "./safety-center-location": [130, 123],
            "./safety-center-location.js": [130, 123],
            "./safety-center-mic-and-camera": [131, 96],
            "./safety-center-mic-and-camera.js": [131, 96],
            "./safety-center-permissions": [132, 124],
            "./safety-center-permissions.js": [132, 124],
            "./safety-center-share-data": [133, 125],
            "./safety-center-share-data.js": [133, 125],
            "./safety-spotlight-devices": [134, 97],
            "./safety-spotlight-devices.js": [134, 97],
            "./scroll-magic-engine": [103, 65],
            "./scroll-magic-engine.js": [103, 65],
            "./switch-hero": [135, 98],
            "./switch-hero.js": [135, 98],
            "./typing": [80, 126],
            "./typing.js": [80, 126],
            "./wayfinder-devices": [136, 99],
            "./wayfinder-devices.js": [136, 99],
            "./wind-down": [137, 127],
            "./wind-down.js": [137, 127],
            "./work-profile": [138, 128],
            "./work-profile.js": [138, 128]
        };
        function o(t) {
            if (!n.o(r, t))
                return Promise.resolve().then((function() {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND",
                    e
                }
                ));
            var e = r[t]
              , o = e[0];
            return Promise.all(e.slice(1).map(n.e)).then((function() {
                return n(o)
            }
            ))
        }
        o.keys = function() {
            return Object.keys(r)
        }
        ,
        o.id = 193,
        t.exports = o
    },
    194: function(t, e, n) {
        t.exports = n(195)
    },
    195: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(88)
          , o = n(25)
          , i = {
            LazyImage: n(14).LazyImage
        }
          , a = new o.a;
        r.a.start(document, {
            store: a,
            componentsMap: i
        }, window, !0)
    },
    2: function(t, e, n) {
        "use strict";
        var r = window;
        e.a = function(t) {
            return new Promise((function(e, n) {
                r.requestAnimationFrame((function() {
                    try {
                        e(t())
                    } catch (t) {
                        n(t)
                    }
                }
                ))
            }
            ))
        }
    },
    20: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return u
        }
        ));
        var r = n(12)
          , o = n(29)
          , i = n.n(o);
        function a(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function c(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(n), !0).forEach((function(e) {
                    s(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function s(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        var u = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
              , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "0%"
              , a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1e3
              , s = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]
              , u = window.matchMedia("(prefers-reduced-motion)")
              , l = 0
              , f = e;
            history.pushState(null, null, t.target.hash);
            do {
                l += f.offsetTop || 0,
                f = f.offsetParent
            } while (f);
            l += window.innerHeight * (Number.parseInt(o) / 100),
            i.a.polyfill();
            var h = function() {
                if (!u.matches) {
                    t.preventDefault();
                    var o = s ? {
                        behavior: "smooth"
                    } : {};
                    window.scrollTo(c({
                        top: l
                    }, o)),
                    r.a.requestTimeout((function() {
                        d(e, l),
                        n && n()
                    }
                    ), a)
                }
            }
              , d = function(t, e) {
                window.pageYOffset === e && (t.tabIndex = 0,
                t.focus())
            };
            h()
        }
    },
    21: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "CustomizationConfigurations", (function() {
            return r
        }
        ));
        var r = {
            SCROLL_MAGIC: "SCROLL_MAGIC",
            SCROLL_MAGIC_PARALLAX: "SCROLL_MAGIC_PARALLAX",
            SELF_REFERENCE: "self"
        };
        e.default = {}
    },
    22: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        }
        ));
        var r = n(9);
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        var i = function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var e, n, i;
            return e = t,
            i = [{
                key: "trackEvent",
                value: function(e, n, r, o, i) {
                    t.pushCommand_(a.EVENT, e, n, r, o, i)
                }
            }, {
                key: "pushCommand_",
                value: function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    var o = window.ga || window.tracker || window.gaTracker;
                    o && (e = e.filter((function(t) {
                        if (null != t)
                            return Object(r.a)(t) ? t : t.toString()
                    }
                    )),
                    o.pushCommand(e))
                }
            }],
            (n = null) && o(e.prototype, n),
            i && o(e, i),
            t
        }()
          , a = {
            EVENT: "_trackEvent"
        }
    },
    23: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(3)
          , o = n(2)
          , i = n(0)
          , a = n(5);
        function c(t) {
            return function(t) {
                if (Array.isArray(t))
                    return s(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                    return Array.from(t)
            }(t) || function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return s(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return s(t, e)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function s(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
        var u = ["enterprise", "play", "stories"]
          , l = function(t, e) {
            return function() {
                return n(83)("./".concat(e.replace("--", "/"))).catch((function(e) {
                    return m(t, e)
                }
                ))
            }
        }
          , f = function(t, e) {
            var r = u.find((function(t) {
                return e.endsWith("-".concat(t))
            }
            ));
            return r ? function(t, e, r) {
                return function() {
                    return n(83)("./".concat(e, "/").concat(r.replace("--", "/"))).catch(l(t, r))
                }
            }(t, r, e.replace("-".concat(r), "")) : -1 !== e.indexOf("--") ? l(t, e) : function(t) {
                return function() {
                    return n(192)("./".concat(t)).catch((function() {
                        return n(193)("./".concat(t))
                    }
                    ))
                }
            }(e)
        }
          , h = function(t) {
            return t.replace("--", "-").split("-").reduce((function(t, e) {
                return e = e[0].toUpperCase() + e.substr(1),
                "".concat(t).concat(e)
            }
            ), "")
        }
          , d = function(t) {
            return function(e, n) {
                "component-dynamic-import" === e && n.entries.forEach((function(e) {
                    if (0 !== e.intersectionRatio && e.isIntersecting) {
                        var r = e.target;
                        return n.observer.unobserve(r),
                        p(t, r)
                    }
                }
                ))
            }
        }
          , p = function(t, e) {
            var n = t.componentAttributes.androidDataAttribute
              , o = e.getAttribute(n)
              , i = h(o) || "";
            return function(t, e) {
                return f(t, e)()
            }(t, o).then((function(n) {
                var a = u.find((function(t) {
                    return o.endsWith("-".concat(t))
                }
                ));
                if (n && n[i])
                    return new n[i](e,t.store);
                if (n && a && !n[i])
                    return new (n[h(o.replace("-".concat(a), ""))])(e,t.store);
                throw new r.b(o,e)
            }
            )).then((function(e) {
                return e.build((function() {
                    t.components = new Set([].concat(c(t.components), [e]))
                }
                ))
            }
            )).catch((function(e) {
                m(t, e)
            }
            ))
        }
          , m = function(t, e) {
            if (t.throwErr)
                throw Object(a.b)("❌ There has been an error."),
                Object(a.b)("Exception:", e),
                Object(a.b)("App:", t),
                e
        }
          , b = {
            detect: function(t, e) {
                return Object(o.a)((function() {
                    var n = e.componentAttributes.androidDataAttribute
                      , r = c(t.querySelectorAll("[".concat(n, "]")))
                      , a = r.filter((function(t) {
                        return t.hasAttribute("data-android-component-force-import")
                    }
                    ))
                      , s = r.filter((function(t) {
                        return !t.hasAttribute("data-android-component-force-import")
                    }
                    ));
                    return Promise.all(a.map((function(t) {
                        return p(e, t)
                    }
                    ))).then((function() {
                        return function(t, e) {
                            return Object(o.a)((function() {
                                var n = c(t);
                                return e.store.subscribe([[i.a.VISIBILITY_TRIGGERED, d(e)]]),
                                e.store.dispatch(i.a.TRACK_VISIBILITY, {
                                    id: "component-dynamic-import",
                                    data: {
                                        isTrack: !0,
                                        trackOnce: !0,
                                        elementsToTrack: n,
                                        config: {
                                            rootMargin: "100% 0% 100% 0%",
                                            threshold: [0, .5, 1]
                                        }
                                    }
                                }),
                                n
                            }
                            ))
                        }(s, e)
                    }
                    ))
                }
                ))
            },
            build: function(t, e) {
                return Promise.all(c(t).map((function(e) {
                    return e.build((function() {
                        return t.delete && t.delete(e)
                    }
                    ))
                }
                ))).then((function(t) {
                    return function(t, e) {
                        return t.components = new Set([].concat(c(t.components), c(e))),
                        t
                    }(e, t)
                }
                ))
            },
            images: {
                instantiate: function(t, e) {
                    return Object(o.a)((function() {
                        var n = e.componentAttributes.lazyImage.tagName
                          , r = "".concat(n)
                          , i = c(t.querySelectorAll(r));
                        return Promise.all(i.map((function(t) {
                            return function(t, e) {
                                return Object(o.a)((function() {
                                    return new (0,
                                    e.cache.componentsMap.LazyImage)(t,e.store,0)
                                }
                                ))
                            }(t, e)
                        }
                        ))).then((function(t) {
                            return function(t, e) {
                                return t.imagesToBuild = new Set([].concat(c(t.imagesToBuild), c(e))),
                                t
                            }(e, t)
                        }
                        ))
                    }
                    ))
                }
            }
        };
        e.default = b
    },
    24: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return p
        }
        ));
        var r = n(10)
          , o = n(0);
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function a(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function c(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(n), !0).forEach((function(e) {
                    s(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function s(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        function u(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function l(t, e) {
            return (l = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function f(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = d(t);
                if (e) {
                    var o = d(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return h(this, n)
            }
        }
        function h(t, e) {
            return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function d(t) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var p = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && l(t, e)
            }(s, t);
            var e, n, i, a = f(s);
            function s(t, e) {
                var n, o = e.global;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, s),
                (n = a.call(this, t, o)).body_ = document.body,
                n.lastKnownWindowHeight_ = void 0,
                n.lastKnownWindowWidth_ = void 0,
                n.global_.addEventListener("resize", Object(r.a)((function() {
                    return n.notifyWindowResizeStarted_()
                }
                ), 300, !0)),
                n.global_.addEventListener("resize", Object(r.a)((function() {
                    return n.notifyWindowResizeEnded_()
                }
                ), 300, !1)),
                n
            }
            return e = s,
            (n = [{
                key: "initialize_",
                value: function() {
                    this.lastKnownWindowWidth_ = this.global_.innerWidth,
                    this.lastKnownWindowHeight_ = this.global_.innerHeight,
                    this.getCurrentBreakpoint_()
                }
            }, {
                key: "build_",
                value: function() {
                    var t = this.getCurrentBreakpoint_()
                      , e = t.previousBreakpoint
                      , n = t.currentBreakpoint
                      , r = t.isPortrait
                      , o = t.viewportHeight;
                    this.notifyBreakpointChanged_(e, n, r, o)
                }
            }, {
                key: "getCurrentBreakpoint_",
                value: function() {
                    var t = this.store_.state.currentBreakpoint
                      , e = this.global_.getComputedStyle(this.body_, "::after").getPropertyValue("content").replace(/["']/g, "")
                      , n = "portrait" === this.global_.getComputedStyle(this.body_, "::before").getPropertyValue("content").replace(/["']/g, "")
                      , r = this.global_.innerHeight;
                    return this.store_.state = {
                        currentBreakpoint: e,
                        isPortrait: n,
                        viewportHeight: r
                    },
                    {
                        previousBreakpoint: t,
                        currentBreakpoint: e,
                        isPortrait: n,
                        viewportHeight: r
                    }
                }
            }, {
                key: "notifyBreakpointChanged_",
                value: function(t, e, n, r) {
                    if (!t || t !== e) {
                        var i = {
                            currentBreakpoint: e,
                            isPortrait: n,
                            viewportHeight: r
                        };
                        this.dispatchStoreEvents_(o.a.BREAKPOINT_CHANGE, i)
                    }
                }
            }, {
                key: "notifyWindowResizeStarted_",
                value: function() {
                    this.store_.dispatch(o.a.WINDOW_RESIZE_STARTED, {
                        data: {}
                    })
                }
            }, {
                key: "notifyWindowResizeEnded_",
                value: function() {
                    var t = this.getCurrentBreakpoint_()
                      , e = t.previousBreakpoint
                      , n = t.currentBreakpoint
                      , r = t.isPortrait
                      , i = t.viewportHeight
                      , a = {
                        currentBreakpoint: n,
                        isPortrait: r,
                        viewportHeight: i
                    };
                    this.dispatchStoreEvents_(o.a.WINDOW_RESIZE_ENDED, a),
                    this.notifyBreakpointChanged_(e, n, r, i)
                }
            }, {
                key: "dispatchStoreEvents_",
                value: function(t, e) {
                    var n = this;
                    requestAnimationFrame((function() {
                        var r = n.global_.innerWidth
                          , o = n.global_.innerHeight
                          , i = {
                            isVertical: n.lastKnownWindowHeight_ !== o,
                            isHorizontal: n.lastKnownWindowWidth_ !== r
                        };
                        n.store_.state = {
                            resizeTypes: i
                        },
                        n.lastKnownWindowHeight_ = o,
                        n.lastKnownWindowWidth_ = r,
                        e = c(c({}, e), i),
                        n.store_.dispatch(t, {
                            data: e
                        })
                    }
                    ))
                }
            }]) && u(e.prototype, n),
            i && u(e, i),
            s
        }(n(6).a)
    },
    25: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return f
        }
        ));
        var r = n(3)
          , o = n(0)
          , i = n(11)
          , a = n(2);
        function c(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(Object(n), !0).forEach((function(e) {
                    u(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function u(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        function l(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        var f = function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.subscribers_ = {},
                this.acceptedParams_ = ["id", "data"],
                this.state_ = {
                    loading: !1,
                    scrollPercentage: 0,
                    componentsToLoad: new Set([]),
                    isSubnavOpened: !1,
                    isScrollingDown: !0
                }
            }
            var e, n, c;
            return e = t,
            (n = [{
                key: "dispatch",
                value: function(t, e) {
                    var n = this;
                    if (this.validateTopic_(t),
                    !this.parametersAreCorrect_(e))
                        throw new r.p;
                    var o = e.id
                      , i = e.data
                      , a = this.subscribers_[t];
                    return a ? Promise.all(a.map((function(t) {
                        return n.dispatch_(t, o, i)
                    }
                    ))) : Promise.resolve()
                }
            }, {
                key: "parametersAreCorrect_",
                value: function(t) {
                    var e = !0;
                    return 0 === Object.keys(t).length || this.isKeyAccepted_(t) || (e = !1),
                    e
                }
            }, {
                key: "isKeyAccepted_",
                value: function(t) {
                    var e = this;
                    return Object.keys(t).reduce((function(t, n) {
                        return t ? e.acceptedParams_.includes(n) : t
                    }
                    ), !0)
                }
            }, {
                key: "dispatch_",
                value: function(t, e, n) {
                    return Object(a.a)((function() {
                        return t(e || n, !(!e || !n) && n)
                    }
                    ))
                }
            }, {
                key: "subscribe",
                value: function(t) {
                    var e = this;
                    t && t.length && t.forEach((function(t) {
                        if (!Array.isArray(t) || 2 !== t.length)
                            throw new r.m;
                        var n = e.getTopic_(t)
                          , o = e.getCallback_(t);
                        e.subscribe_(n, o)
                    }
                    ))
                }
            }, {
                key: "getTopic_",
                value: function(t) {
                    var e = t.shift();
                    return this.validateTopic_(e),
                    e
                }
            }, {
                key: "validateTopic_",
                value: function(t) {
                    if (!o.a[t])
                        throw new r.s
                }
            }, {
                key: "getCallback_",
                value: function(t) {
                    var e = t.shift();
                    if (!Object(i.a)(e))
                        throw new r.r;
                    return e
                }
            }, {
                key: "subscribe_",
                value: function(t, e) {
                    this.subscribers_[t] || (this.subscribers_[t] = []),
                    this.subscribers_[t].includes(e) || this.subscribers_[t].push(e)
                }
            }, {
                key: "unsubscribe",
                value: function(t, e) {
                    this.validateTopic_(t);
                    var n = this.subscribers_[t];
                    if (n)
                        return this.subscribers_[t] = n.filter((function(t) {
                            return t !== e
                        }
                        )),
                        n.length !== this.subscribers_[t].length
                }
            }, {
                key: "state",
                set: function(t) {
                    t && (this.state_ = s(s({}, this.state_), t))
                },
                get: function() {
                    return this.state_
                }
            }]) && l(e.prototype, n),
            c && l(e, c),
            t
        }()
    },
    27: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }
        ));
        var r = function(t, e) {
            var n, r, o;
            return function() {
                for (var i = arguments.length, a = new Array(i), c = 0; c < i; c++)
                    a[c] = arguments[c];
                n ? (clearTimeout(r),
                r = setTimeout((function() {
                    Date.now() - o >= e && (t(a),
                    o = Date.now())
                }
                ), e - (Date.now() - o))) : (t(a),
                o = Date.now(),
                n = !0)
            }
        }
    },
    29: function(t, e, n) {
        !function() {
            "use strict";
            t.exports = {
                polyfill: function() {
                    var t = window
                      , e = document;
                    if (!("scrollBehavior"in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                        var n, r = t.HTMLElement || t.Element, o = {
                            scroll: t.scroll || t.scrollTo,
                            scrollBy: t.scrollBy,
                            elementScroll: r.prototype.scroll || c,
                            scrollIntoView: r.prototype.scrollIntoView
                        }, i = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now, a = (n = t.navigator.userAgent,
                        new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n) ? 1 : 0);
                        t.scroll = t.scrollTo = function() {
                            void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? p.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : o.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                        }
                        ,
                        t.scrollBy = function() {
                            void 0 !== arguments[0] && (s(arguments[0]) ? o.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                        }
                        ,
                        r.prototype.scroll = r.prototype.scrollTo = function() {
                            if (void 0 !== arguments[0])
                                if (!0 !== s(arguments[0])) {
                                    var t = arguments[0].left
                                      , e = arguments[0].top;
                                    p.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                                } else {
                                    if ("number" == typeof arguments[0] && void 0 === arguments[1])
                                        throw new SyntaxError("Value could not be converted");
                                    o.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                }
                        }
                        ,
                        r.prototype.scrollBy = function() {
                            void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? this.scroll({
                                left: ~~arguments[0].left + this.scrollLeft,
                                top: ~~arguments[0].top + this.scrollTop,
                                behavior: arguments[0].behavior
                            }) : o.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                        }
                        ,
                        r.prototype.scrollIntoView = function() {
                            if (!0 !== s(arguments[0])) {
                                var n = h(this)
                                  , r = n.getBoundingClientRect()
                                  , i = this.getBoundingClientRect();
                                n !== e.body ? (p.call(this, n, n.scrollLeft + i.left - r.left, n.scrollTop + i.top - r.top),
                                "fixed" !== t.getComputedStyle(n).position && t.scrollBy({
                                    left: r.left,
                                    top: r.top,
                                    behavior: "smooth"
                                })) : t.scrollBy({
                                    left: i.left,
                                    top: i.top,
                                    behavior: "smooth"
                                })
                            } else
                                o.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                        }
                    }
                    function c(t, e) {
                        this.scrollLeft = t,
                        this.scrollTop = e
                    }
                    function s(t) {
                        if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior)
                            return !0;
                        if ("object" == typeof t && "smooth" === t.behavior)
                            return !1;
                        throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                    }
                    function u(t, e) {
                        return "Y" === e ? t.clientHeight + a < t.scrollHeight : "X" === e ? t.clientWidth + a < t.scrollWidth : void 0
                    }
                    function l(e, n) {
                        var r = t.getComputedStyle(e, null)["overflow" + n];
                        return "auto" === r || "scroll" === r
                    }
                    function f(t) {
                        var e = u(t, "Y") && l(t, "Y")
                          , n = u(t, "X") && l(t, "X");
                        return e || n
                    }
                    function h(t) {
                        for (; t !== e.body && !1 === f(t); )
                            t = t.parentNode || t.host;
                        return t
                    }
                    function d(e) {
                        var n, r, o, a, c = (i() - e.startTime) / 468;
                        a = c = c > 1 ? 1 : c,
                        n = .5 * (1 - Math.cos(Math.PI * a)),
                        r = e.startX + (e.x - e.startX) * n,
                        o = e.startY + (e.y - e.startY) * n,
                        e.method.call(e.scrollable, r, o),
                        r === e.x && o === e.y || t.requestAnimationFrame(d.bind(t, e))
                    }
                    function p(n, r, a) {
                        var s, u, l, f, h = i();
                        n === e.body ? (s = t,
                        u = t.scrollX || t.pageXOffset,
                        l = t.scrollY || t.pageYOffset,
                        f = o.scroll) : (s = n,
                        u = n.scrollLeft,
                        l = n.scrollTop,
                        f = c),
                        d({
                            scrollable: s,
                            method: f,
                            startTime: h,
                            startX: u,
                            startY: l,
                            x: r,
                            y: a
                        })
                    }
                }
            }
        }()
    },
    3: function(t, e, n) {
        "use strict";
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function o(t, e) {
            return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function i(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return (i = function(t) {
                if (null === t || (n = t,
                -1 === Function.toString.call(n).indexOf("[native code]")))
                    return t;
                var n;
                if ("function" != typeof t)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t))
                        return e.get(t);
                    e.set(t, r)
                }
                function r() {
                    return a(t, arguments, u(this).constructor)
                }
                return r.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                s(r, t)
            }
            )(t)
        }
        function a(t, e, n) {
            return (a = c() ? Reflect.construct : function(t, e, n) {
                var r = [null];
                r.push.apply(r, e);
                var o = new (Function.bind.apply(t, r));
                return n && s(o, n.prototype),
                o
            }
            ).apply(null, arguments)
        }
        function c() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }
        function s(t, e) {
            return (s = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function u(t) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        n.d(e, "b", (function() {
            return v
        }
        )),
        n.d(e, "m", (function() {
            return _
        }
        )),
        n.d(e, "s", (function() {
            return g
        }
        )),
        n.d(e, "r", (function() {
            return w
        }
        )),
        n.d(e, "d", (function() {
            return E
        }
        )),
        n.d(e, "n", (function() {
            return O
        }
        )),
        n.d(e, "a", (function() {
            return j
        }
        )),
        n.d(e, "e", (function() {
            return T
        }
        )),
        n.d(e, "f", (function() {
            return S
        }
        )),
        n.d(e, "h", (function() {
            return k
        }
        )),
        n.d(e, "g", (function() {
            return C
        }
        )),
        n.d(e, "o", (function() {
            return A
        }
        )),
        n.d(e, "l", (function() {
            return P
        }
        )),
        n.d(e, "p", (function() {
            return I
        }
        )),
        n.d(e, "q", (function() {
            return D
        }
        )),
        n.d(e, "i", (function() {
            return R
        }
        )),
        n.d(e, "j", (function() {
            return L
        }
        )),
        n.d(e, "c", (function() {
            return N
        }
        )),
        n.d(e, "k", (function() {
            return x
        }
        ));
        var l = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && s(t, e)
            }(i, t);
            var e, n, r = (e = i,
            n = c(),
            function() {
                var t, r = u(e);
                if (n) {
                    var i = u(this).constructor;
                    t = Reflect.construct(r, arguments, i)
                } else
                    t = r.apply(this, arguments);
                return o(this, t)
            }
            );
            function i(t, e) {
                var n;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                (n = r.call(this)).message = "\n      --\n      ANDROID-ERROR-".concat(t, "\n      --\n\n      ").concat(e, "\n    "),
                n.customDescriptor_ = {},
                n
            }
            return i
        }(i(Error));
        function f(t) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function h(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function d(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && p(t, e)
        }
        function p(t, e) {
            return (p = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function m(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = y(t);
                if (e) {
                    var o = y(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return b(this, n)
            }
        }
        function b(t, e) {
            return !e || "object" !== f(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function y(t) {
            return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var v = function(t) {
            d(n, t);
            var e = m(n);
            function n(t, r) {
                return h(this, n),
                e.call(this, 1, "The component ".concat(t, " couldn't be found for the element\n        with class name \".").concat(r.className, "\". Please make sure the Javascript\n        file exists and it's properly configured."))
            }
            return n
        }(l)
          , _ = function(t) {
            d(n, t);
            var e = m(n);
            function n() {
                return h(this, n),
                e.call(this, 2, "The this.subscriptions_ array format is not correct.")
            }
            return n
        }(l)
          , g = function(t) {
            d(n, t);
            var e = m(n);
            function n() {
                return h(this, n),
                e.call(this, 3, "The component has a wrong subscription topic configuration that\n        needs to be fixed.")
            }
            return n
        }(l)
          , w = function(t) {
            d(n, t);
            var e = m(n);
            function n() {
                return h(this, n),
                e.call(this, 4, "The component has a wrong subscription callback configuration that\n        needs to be fixed.")
            }
            return n
        }(l)
          , E = function(t) {
            d(n, t);
            var e = m(n);
            function n() {
                return h(this, n),
                e.call(this, 5, "The carousel has not been found.")
            }
            return n
        }(l)
          , O = function(t) {
            d(n, t);
            var e = m(n);
            function n() {
                return h(this, n),
                e.call(this, 6, "The specified theme was not found.")
            }
            return n
        }(l)
          , j = function(t) {
            d(n, t);
            var e = m(n);
            function n() {
                return h(this, n),
                e.call(this, 7, "The target element to scroll to was not found.")
            }
            return n
        }(l)
          , T = function(t) {
            d(n, t);
            var e = m(n);
            function n(t, r) {
                return h(this, n),
                e.call(this, 8, "The component ".concat(t, ' does not have the necessary\n      children on the element with class name ".').concat(r.className, "\".\n      Please make sure component it's properly configured."))
            }
            return n
        }(l)
          , S = function(t) {
            d(n, t);
            var e = m(n);
            function n() {
                return h(this, n),
                e.call(this, 9, "DataLayer is not present on the page, data won't be sent.")
            }
            return n
        }(l)
          , k = function(t) {
            d(n, t);
            var e = m(n);
            function n(t) {
                return h(this, n),
                e.call(this, 10, "The element ".concat(t, " does not have a valid threshold\n      configured for the trackComponentVisibility function.\n      Make sure a number is provided."))
            }
            return n
        }(l)
          , C = function(t) {
            d(n, t);
            var e = m(n);
            function n() {
                return h(this, n),
                e.call(this, 11, "Could not initialize focus-trapping - Config Missing.")
            }
            return n
        }(l)
          , A = function(t) {
            d(n, t);
            var e = m(n);
            function n(t) {
                return h(this, n),
                e.call(this, 12, "Third party ".concat(t, " has not been found. Make sure it's\n      fetched correctly."))
            }
            return n
        }(l)
          , P = function(t) {
            d(n, t);
            var e = m(n);
            function n() {
                return h(this, n),
                e.call(this, 13, "Submission has been unsuccessful.")
            }
            return n
        }(l)
          , I = function(t) {
            d(n, t);
            var e = m(n);
            function n() {
                return h(this, n),
                e.call(this, 14, "Dispatch parameters are incorrect. Please remember dispatch\n      parameters should only have the keys 'id' and 'data'")
            }
            return n
        }(l)
          , D = function(t) {
            d(n, t);
            var e = m(n);
            function n(t, r, o) {
                return h(this, n),
                e.call(this, 15, "\n      Please check the required keys for the ".concat(t, " object.\n\n      Expected keys: ").concat(r, "\n      Received keys: ").concat(o))
            }
            return n
        }(l)
          , R = function(t) {
            d(n, t);
            var e = m(n);
            function n() {
                return h(this, n),
                e.call(this, 16, "This method needs to be implemented in the child classes")
            }
            return n
        }(l)
          , L = function(t) {
            d(n, t);
            var e = m(n);
            function n(t, r) {
                return h(this, n),
                e.call(this, 16, "The configured rate for the ".concat(r, " breakpoint is not\n    valid: ").concat(t, ". Please use rates between -1 and 1."))
            }
            return n
        }(l)
          , N = function(t) {
            d(n, t);
            var e = m(n);
            function n(t, r) {
                return h(this, n),
                e.call(this, 17, 'The parameter "'.concat(t, '" needs to be ').concat(r, "."))
            }
            return n
        }(l)
          , x = function(t) {
            d(n, t);
            var e = m(n);
            function n(t) {
                return h(this, n),
                e.call(this, 18, 'Unavailable to spy the element with ID: "'.concat(t, '". Please check in') + " the app if the HTML element with the ID exists.")
            }
            return n
        }(l)
    },
    4: function(t, e, n) {
        "use strict";
        n.d(e, "f", (function() {
            return r.a
        }
        )),
        n.d(e, "c", (function() {
            return i
        }
        )),
        n.d(e, "a", (function() {
            return a
        }
        )),
        n.d(e, "b", (function() {
            return c
        }
        )),
        n.d(e, "h", (function() {
            return s
        }
        )),
        n.d(e, "g", (function() {
            return u.a
        }
        )),
        n.d(e, "d", (function() {
            return f
        }
        )),
        n.d(e, "i", (function() {
            return d.a
        }
        )),
        n.d(e, "j", (function() {
            return p.a
        }
        )),
        n.d(e, "e", (function() {
            return m.a
        }
        ));
        var r = n(16);
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        var i = function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.breakpoints_ = a,
                this.mqLists_ = [],
                this.initialize_()
            }
            var e, n, r;
            return e = t,
            (n = [{
                key: "initialize_",
                value: function() {
                    var t = this;
                    Object.keys(this.breakpoints_).forEach((function(e, n, r) {
                        var o = t.mqList_(t.breakpoints_[e]);
                        o.breakpoint = t.breakpoints_[e],
                        o.mediaName = e,
                        t.mqLists_.push(o)
                    }
                    ))
                }
            }, {
                key: "mqList_",
                value: function(t) {
                    return window.matchMedia("only screen and (min-width: ".concat(t, "px)"))
                }
            }, {
                key: "current",
                value: function() {
                    var t = this.mqLists_.sort((function(t, e) {
                        return t.breakpoint - e.breakpoint
                    }
                    )).filter((function(t) {
                        return t.matches
                    }
                    ));
                    return t[t.length - 1]
                }
            }, {
                key: "onChange",
                value: function(t) {
                    this.mqLists_.forEach((function(e) {
                        e.addListener(t)
                    }
                    ))
                }
            }]) && o(e.prototype, n),
            r && o(e, r),
            t
        }()
          , a = {
            desktop: 1024,
            mobile: 0,
            tablet: 600,
            largeDesktop: 1440
        }
          , c = {
            MOBILE: "mobile",
            TABLET: "tablet",
            DESKTOP: "desktop",
            LARGE_DESKTOP: "largeDesktop"
        }
          , s = function(t, e, n) {
            var r = t ? "v1" : "v2"
              , o = [];
            return e && o.push("rw"),
            n && o.push(n),
            o.push(r),
            o.join("-")
        }
          , u = n(10);
        function l(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        var f = function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.rtt_ = 0,
                this.downlink_ = 0,
                this.effectiveType_ = "",
                this.saveData_ = !1,
                this.connection_ = h.CONNECTION_FAST,
                this.initialize_()
            }
            var e, n, r;
            return e = t,
            (n = [{
                key: "initialize_",
                value: function() {
                    this.onValidConnection_() && (this.setConnection_(),
                    this.bindEvents_())
                }
            }, {
                key: "bindEvents_",
                value: function() {
                    var t = this;
                    navigator.connection.addEventListener("change", (function() {
                        return t.onConnectionChange
                    }
                    ))
                }
            }, {
                key: "onValidConnection_",
                value: function() {
                    return navigator.connection && navigator.connection.effectiveType
                }
            }, {
                key: "isFast",
                value: function() {
                    return this.connection_ === h.CONNECTION_FAST
                }
            }, {
                key: "setConnection_",
                value: function() {
                    /\slow-2g|2g|3g/.test(navigator.connection.effectiveType) ? this.connection_ = h.CONNECTION_SLOW : this.connection_ = h.CONNECTION_FAST
                }
            }, {
                key: "onConnectionChange_",
                value: function() {
                    var t = navigator.connection
                      , e = t.rtt
                      , n = t.downlink
                      , r = t.effectiveType
                      , o = t.saveData;
                    this.rtt_ = e,
                    this.downlink_ = n,
                    this.effectiveType_ = r,
                    this.saveData_ = o,
                    this.setConnection_()
                }
            }]) && l(e.prototype, n),
            r && l(e, r),
            t
        }()
          , h = {
            CONNECTION_FAST: "fast",
            CONNECTION_SLOW: "slow"
        }
          , d = n(20)
          , p = n(27)
          , m = n(22)
    },
    5: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        }
        )),
        n.d(e, "b", (function() {
            return i
        }
        ));
        var r = function(t, e, n) {
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
        }
          , o = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            r(console.info, t, e, n)
        }
          , i = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            r(console.error, t, e, n)
        }
    },
    6: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        }
        ));
        var r = n(2);
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        var i = function() {
            function t(e, n) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.store_ = e,
                this.global_ = n,
                this.isInitialized_ = !1,
                this.isBuilt_ = !1
            }
            var e, n, i;
            return e = t,
            (n = [{
                key: "initialize",
                value: function() {
                    var t = this;
                    return this.isInitialized_ ? Promise.resolve(this) : Object(r.a)((function() {
                        return t.isInitialized_ = !0,
                        t.initialize_(),
                        t
                    }
                    ))
                }
            }, {
                key: "build",
                value: function() {
                    var t = this;
                    return this.isBuilt_ ? Promise.resolve(this) : Object(r.a)((function() {
                        return t.isBuilt_ = !0,
                        t.build_(),
                        t
                    }
                    ))
                }
            }, {
                key: "initialize_",
                value: function() {}
            }, {
                key: "build_",
                value: function() {}
            }]) && o(e.prototype, n),
            i && o(e, i),
            t
        }()
    },
    7: function(t, e, n) {
        "use strict";
        var r = function(t) {
            return t = (t = t.replace(/\('/g, "__(__")).replace(/'\)/g, "__)__")
        }
          , o = function(t) {
            return t = (t = (t = JSON.stringify(t)).replace(/__\(__/g, "('")).replace(/__\)__/g, "')"),
            JSON.parse(t)
        };
        e.a = function(t, e) {
            var n, i = t.getAttribute(e) || "";
            i = (i = (i = r(i)).replace(/True/gi, !0)).replace(/False/gi, !1);
            try {
                n = JSON.parse(i.replace(/'/g, '"')),
                n = o(n),
                Object.keys(n, (function(t, e) {
                    "string" == typeof e && (n[t] = decodeURIComponent(e))
                }
                ))
            } catch (t) {
                n = {}
            }
            return n
        }
    },
    8: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }
        ));
        var r = {
            AUTOMATED_INTERACTION: "automated-interaction",
            CLICK: "click",
            MODAL_INTERACTION: "modal",
            SCROLL_H: "scroll-h",
            SCROLL_V: "scroll-v",
            SUB_NAV_SPY: "subnav-spy",
            VIDEO_INTERACTION: "video",
            FORM_INTERACTION: "form-interaction"
        }
    },
    82: function(t, e, n) {
        "use strict";
        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        n.d(e, "a", (function() {
            return C
        }
        ));
        var o = function() {
            function t(e) {
                if (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.global_ = e,
                this.prefix_ = "and_",
                this.constructor === t)
                    throw new TypeError("DAO is an abstract class. Please do not use directly.");
                if (void 0 === this.isSupported_)
                    throw new TypeError("DAO classes need to implement a isSupported_ method.");
                if (void 0 === this.save)
                    throw new TypeError("DAO classes need to implement a save method.");
                if (void 0 === this.read)
                    throw new TypeError("DAO classes need to implement a read method.");
                if (void 0 === this.delete)
                    throw new TypeError("DAO classes need to implement a delete method.")
            }
            var e, n, o;
            return e = t,
            (n = [{
                key: "generateKey_",
                value: function(t) {
                    return "".concat(this.prefix_).concat(t)
                }
            }]) && r(e.prototype, n),
            o && r(e, o),
            t
        }();
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function a(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function c(t, e) {
            return (c = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function s(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = l(t);
                if (e) {
                    var o = l(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return u(this, n)
            }
        }
        function u(t, e) {
            return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function l(t) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var f = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && c(t, e)
            }(i, t);
            var e, n, r, o = s(i);
            function i(t) {
                var e;
                if (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                !(e = o.call(this, t)).isSupported_())
                    throw new Error("Session storage not supported");
                return e.storage_ = e.global_.sessionStorage,
                e
            }
            return e = i,
            (n = [{
                key: "isSupported_",
                value: function() {
                    return "sessionStorage"in window && window.sessionStorage
                }
            }, {
                key: "save",
                value: function(t, e) {
                    var n = JSON.stringify(e);
                    return this.storage_.setItem(this.generateKey_(t), n),
                    this.read(t)
                }
            }, {
                key: "read",
                value: function(t) {
                    return JSON.parse(this.storage_.getItem(this.generateKey_(t)))
                }
            }, {
                key: "delete",
                value: function(t) {
                    this.storage_.removeItem(this.generateKey_(t))
                }
            }]) && a(e.prototype, n),
            r && a(e, r),
            i
        }(o);
        function h(t) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function d(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function p(t, e) {
            return (p = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function m(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = y(t);
                if (e) {
                    var o = y(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return b(this, n)
            }
        }
        function b(t, e) {
            return !e || "object" !== h(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function y(t) {
            return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var v = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && p(t, e)
            }(i, t);
            var e, n, r, o = m(i);
            function i(t) {
                var e;
                if (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                !(e = o.call(this, t)).isSupported_())
                    throw new Error("Session storage not supported");
                return e.storage_ = e.global_.localStorage,
                e
            }
            return e = i,
            (n = [{
                key: "isSupported_",
                value: function() {
                    return "localStorage"in window && window.localStorage
                }
            }, {
                key: "save",
                value: function(t, e) {
                    var n = JSON.stringify(e);
                    return this.storage_.setItem(this.generateKey_(t), n),
                    this.read(t)
                }
            }, {
                key: "read",
                value: function(t) {
                    return JSON.parse(this.storage_.getItem(this.generateKey_(t)))
                }
            }, {
                key: "delete",
                value: function(t) {
                    this.storage_.removeItem(this.generateKey_(t))
                }
            }]) && d(e.prototype, n),
            r && d(e, r),
            i
        }(o);
        function _(t) {
            return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function g(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function w(t, e) {
            return (w = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function E(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = j(t);
                if (e) {
                    var o = j(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return O(this, n)
            }
        }
        function O(t, e) {
            return !e || "object" !== _(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function j(t) {
            return (j = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var T = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && w(t, e)
            }(i, t);
            var e, n, r, o = E(i);
            function i(t) {
                var e;
                if (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                !(e = o.call(this, t)).isSupported_())
                    throw new Error("Cookies not supported");
                return e.cookie_ = e.global_.document.cookie,
                e
            }
            return e = i,
            (n = [{
                key: "isSupported_",
                value: function() {
                    return document && "cookie"in document
                }
            }, {
                key: "save",
                value: function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "/"
                      , o = this.generateKey_(t)
                      , i = n.toGMTString();
                    return this.global_.document.cookie = "".concat(o, "=").concat(e, "; expires=").concat(i, "; path=").concat(r),
                    this.read(t)
                }
            }, {
                key: "read",
                value: function(t) {
                    for (var e = "".concat(this.generateKey_(t), "="), n = this.cookie_.split(";"), r = 0; r < n.length; r++)
                        if (n[r].indexOf(e) > -1)
                            return n[r];
                    return !1
                }
            }, {
                key: "delete",
                value: function(t) {
                    this.cookie_ = "".concat(this.generateKey_(t), "=; ").concat("expires=Thu, 01 Jan 1970 00:00:01 GMT", '; path="/"')
                }
            }]) && g(e.prototype, n),
            r && g(e, r),
            i
        }(o);
        function S(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        var k = window
          , C = function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var e, n, r;
            return e = t,
            r = [{
                key: "get",
                value: function(t) {
                    switch (t) {
                    case "short-term":
                        return this.cookieStorageDao_ = this.cookieStorageDao_ || new T(k),
                        this.cookieStorageDao_;
                    case "persistent":
                        return this.localStorageDao_ = this.localStorageDao_ || new v(k),
                        this.localStorageDao_;
                    case "temporary":
                    default:
                        return this.sessionStorageDao_ = this.sessionStorageDao_ || new f(k),
                        this.sessionStorageDao_
                    }
                }
            }],
            (n = null) && S(e.prototype, n),
            r && S(e, r),
            t
        }()
    },
    83: function(t, e, n) {
        var r = {
            "./": [23],
            "./base": [1],
            "./base.js": [1],
            "./block/animatable": [139, 100],
            "./block/animatable.js": [139, 100],
            "./chart/business-provider": [140, 101],
            "./chart/business-provider.js": [140, 101],
            "./common/_Docs": [40, 5],
            "./common/_Docs.js": [40, 5],
            "./common/accordion": [31, 18],
            "./common/accordion-item": [28, 26],
            "./common/accordion-item.js": [28, 26],
            "./common/accordion.js": [31, 18],
            "./common/anchor-scroll": [41, 27],
            "./common/anchor-scroll.js": [41, 27],
            "./common/animatable-content": [42, 28],
            "./common/animatable-content.js": [42, 28],
            "./common/animatable-device": [43, 19],
            "./common/animatable-device.js": [43, 19],
            "./common/carousel": [33, 29],
            "./common/carousel-card": [44, 6],
            "./common/carousel-card.js": [44, 6],
            "./common/carousel-dialog": [45, 3],
            "./common/carousel-dialog.js": [45, 3],
            "./common/carousel.js": [33, 29],
            "./common/copy-to-clipboard": [46, 30],
            "./common/copy-to-clipboard.js": [46, 30],
            "./common/cta": [47, 31],
            "./common/cta.js": [47, 31],
            "./common/expandable-field": [48, 32],
            "./common/expandable-field.js": [48, 32],
            "./common/filters": [49, 33],
            "./common/filters.js": [49, 33],
            "./common/footer": [50, 34],
            "./common/footer.js": [50, 34],
            "./common/header": [51, 35],
            "./common/header.js": [51, 35],
            "./common/image-popout": [52, 20],
            "./common/image-popout.js": [52, 20],
            "./common/image-toggle": [53, 36],
            "./common/image-toggle.js": [53, 36],
            "./common/image-waitable": [18, 1],
            "./common/image-waitable/": [18, 1],
            "./common/image-waitable/index": [18, 1],
            "./common/image-waitable/index.js": [18, 1],
            "./common/language-selector": [54, 37],
            "./common/language-selector.js": [54, 37],
            "./common/lazy-image": [14],
            "./common/lazy-image.js": [14],
            "./common/live-transcribe": [55, 17],
            "./common/live-transcribe.js": [55, 17],
            "./common/lottie-animatable": [56, 22],
            "./common/lottie-animatable.js": [56, 22],
            "./common/lottie-animation": [39, 38],
            "./common/lottie-animation.js": [39, 38],
            "./common/modal": [59, 7],
            "./common/modal-content": [57, 39],
            "./common/modal-content.js": [57, 39],
            "./common/modal-opener": [58, 40],
            "./common/modal-opener.js": [58, 40],
            "./common/modal.js": [59, 7],
            "./common/nav-dropdown": [60, 8],
            "./common/nav-dropdown.js": [60, 8],
            "./common/parallaxable": [19, 2],
            "./common/parallaxable/": [19, 2],
            "./common/parallaxable/index": [19, 2],
            "./common/parallaxable/index.js": [19, 2],
            "./common/parallaxable/test": [61, 9],
            "./common/parallaxable/test.js": [61, 9],
            "./common/progress-bar": [62, 16],
            "./common/progress-bar.js": [62, 16],
            "./common/progress-nav": [37, 41],
            "./common/progress-nav.js": [37, 41],
            "./common/rotating-heading": [63, 42],
            "./common/rotating-heading.js": [63, 42],
            "./common/row-heading": [64, 43],
            "./common/row-heading.js": [64, 43],
            "./common/scroll-cta": [32, 44],
            "./common/scroll-cta.js": [32, 44],
            "./common/scrollto-button": [65, 23],
            "./common/scrollto-button.js": [65, 23],
            "./common/search": [67, 12],
            "./common/search-bar": [66, 11],
            "./common/search-bar.js": [66, 11],
            "./common/search.js": [67, 12],
            "./common/slideshow": [68, 45],
            "./common/slideshow.js": [68, 45],
            "./common/step-tracker": [69, 46],
            "./common/step-tracker.js": [69, 46],
            "./common/sticky": [71, 21],
            "./common/sticky-dialog": [70, 4],
            "./common/sticky-dialog.js": [70, 4],
            "./common/sticky.js": [71, 21],
            "./common/subnav": [73, 48],
            "./common/subnav-spy": [38, 47],
            "./common/subnav-spy-levels": [72, 24],
            "./common/subnav-spy-levels.js": [72, 24],
            "./common/subnav-spy.js": [38, 47],
            "./common/subnav.js": [73, 48],
            "./common/tab-content": [17, 49],
            "./common/tab-content.js": [17, 49],
            "./common/tab-timer": [74, 13],
            "./common/tab-timer.js": [74, 13],
            "./common/theme-switcher": [75, 50],
            "./common/theme-switcher.js": [75, 50],
            "./common/video": [13, 51],
            "./common/video.js": [13, 51],
            "./common/wizard-progress-nav": [76, 10],
            "./common/wizard-progress-nav.js": [76, 10],
            "./common/wizard-step": [35, 25],
            "./common/wizard-step-multiple-choice": [77, 14],
            "./common/wizard-step-multiple-choice.js": [77, 14],
            "./common/wizard-step-single-choice": [78, 15],
            "./common/wizard-step-single-choice.js": [78, 15],
            "./common/wizard-step.js": [35, 25],
            "./common/you-tube-video": [79, 52],
            "./common/you-tube-video.js": [79, 52],
            "./content/background": [141, 129],
            "./content/background.js": [141, 129],
            "./content/crossfade": [142, 130],
            "./content/crossfade.js": [142, 130],
            "./content/dark": [143, 131],
            "./content/dark.js": [143, 131],
            "./content/dashboard": [144, 132],
            "./content/dashboard.js": [144, 132],
            "./content/grid": [145, 133],
            "./content/grid.js": [145, 133],
            "./content/media-window": [146, 102],
            "./content/media-window.js": [146, 102],
            "./content/multimedia": [147, 103],
            "./content/multimedia.js": [147, 103],
            "./content/resizable": [148, 134],
            "./content/resizable.js": [148, 134],
            "./content/sticky": [149, 135],
            "./content/sticky.js": [149, 135],
            "./content/tabs": [150, 136],
            "./content/tabs.js": [150, 136],
            "./content/takeover": [151, 104],
            "./content/takeover.js": [151, 104],
            "./cookie-banner/default": [105, 110],
            "./cookie-banner/default.js": [105, 110],
            "./cookie-banner/test": [152, 61],
            "./cookie-banner/test.js": [152, 61],
            "./cta-content/centeredgrid": [153, 137],
            "./cta-content/centeredgrid.js": [153, 137],
            "./cta-content/default": [154, 138],
            "./cta-content/default.js": [154, 138],
            "./cta-content/flatgrid": [155, 139],
            "./cta-content/flatgrid.js": [155, 139],
            "./device-gallery/crossfade": [156, 140],
            "./device-gallery/crossfade.js": [156, 140],
            "./device-gallery/featured": [157, 141],
            "./device-gallery/featured.js": [157, 141],
            "./expandable-content/tutorial": [158, 142],
            "./expandable-content/tutorial.js": [158, 142],
            "./filterable-collection/default": [159, 143],
            "./filterable-collection/default.js": [159, 143],
            "./form/common/create-field": [92, 0, 144],
            "./form/common/create-field.js": [92, 0, 144],
            "./form/common/create-field.test": [160, 0, 111],
            "./form/common/create-field.test.js": [160, 0, 111],
            "./form/common/serializer": [94, 145],
            "./form/common/serializer.js": [94, 145],
            "./form/common/serializer.test": [161, 112],
            "./form/common/serializer.test.js": [161, 112],
            "./form/common/submitter": [99, 146],
            "./form/common/submitter.js": [99, 146],
            "./form/common/validator": [90, 147],
            "./form/common/validator.js": [90, 147],
            "./form/default": [106, 0, 62],
            "./form/default.js": [106, 0, 62],
            "./form/fields": [36, 0],
            "./form/fields/": [36, 0],
            "./form/fields/base-field": [89, 113],
            "./form/fields/base-field.js": [89, 113],
            "./form/fields/base-field.test": [162, 75],
            "./form/fields/base-field.test.js": [162, 75],
            "./form/fields/binder": [95, 148],
            "./form/fields/binder.js": [95, 148],
            "./form/fields/hidden-field": [96, 63],
            "./form/fields/hidden-field.js": [96, 63],
            "./form/fields/hidden-field.test": [163, 54],
            "./form/fields/hidden-field.test.js": [163, 54],
            "./form/fields/index": [36, 0],
            "./form/fields/index.js": [36, 0],
            "./form/fields/multiple-checkbox-field": [100, 76],
            "./form/fields/multiple-checkbox-field.js": [100, 76],
            "./form/fields/radio-button-field": [98, 77],
            "./form/fields/radio-button-field.js": [98, 77],
            "./form/fields/radio-button-field.test": [164, 57],
            "./form/fields/radio-button-field.test.js": [164, 57],
            "./form/fields/select-field": [97, 78],
            "./form/fields/select-field.js": [97, 78],
            "./form/fields/select-field.test": [165, 58],
            "./form/fields/select-field.test.js": [165, 58],
            "./form/fields/single-checkbox-field": [101, 79],
            "./form/fields/single-checkbox-field.js": [101, 79],
            "./form/fields/text-field": [93, 80],
            "./form/fields/text-field.js": [93, 80],
            "./form/fields/text-field.test": [166, 59],
            "./form/fields/text-field.test.js": [166, 59],
            "./form/test": [167, 0, 53],
            "./form/test.js": [167, 0, 53],
            "./hero/animatable": [168, 66],
            "./hero/animatable.js": [168, 66],
            "./hero/base": [91, 105],
            "./hero/base.js": [91, 105],
            "./hero/dashboard": [169, 67],
            "./hero/dashboard.js": [169, 67],
            "./hero/default": [107, 68],
            "./hero/default.js": [107, 68],
            "./hero/devices": [170, 69],
            "./hero/devices.js": [170, 69],
            "./hero/featured": [171, 70],
            "./hero/featured.js": [171, 70],
            "./hero/looper": [108, 71],
            "./hero/looper.js": [108, 71],
            "./hero/motion": [172, 72],
            "./hero/motion.js": [172, 72],
            "./hero/overlax": [173, 73],
            "./hero/overlax.js": [173, 73],
            "./hero/resizable": [174, 74],
            "./hero/resizable.js": [174, 74],
            "./hero/reveal": [175, 106],
            "./hero/reveal.js": [175, 106],
            "./hero/timers": [176, 107],
            "./hero/timers.js": [176, 107],
            "./index": [23],
            "./index.js": [23],
            "./integration-tester/animatable-device": [177, 149],
            "./integration-tester/animatable-device.js": [177, 149],
            "./integration-tester/lottery-service": [178, 150],
            "./integration-tester/lottery-service.js": [178, 150],
            "./integration-tester/step-tracker": [179, 151],
            "./integration-tester/step-tracker.js": [179, 151],
            "./integration-tester/survey-service": [180, 152],
            "./integration-tester/survey-service.js": [180, 152],
            "./multimedia/animatable": [181, 108],
            "./multimedia/animatable.js": [181, 108],
            "./multimedia/editorial": [182, 109],
            "./multimedia/editorial.js": [182, 109],
            "./play/hero/default": [183, 60],
            "./play/hero/default.js": [183, 60],
            "./service/wizard": [184, 81],
            "./service/wizard.js": [184, 81],
            "./subnav/default": [109, 153],
            "./subnav/default.js": [109, 153],
            "./subnav/floating": [185, 114],
            "./subnav/floating.js": [185, 114],
            "./survey/default": [186, 82],
            "./survey/default.js": [186, 82],
            "./test": [187, 56],
            "./test.js": [187, 56],
            "./tutorial/animatable": [188, 154],
            "./tutorial/animatable.js": [188, 154],
            "./wizard/default": [189, 83],
            "./wizard/default.js": [189, 83]
        };
        function o(t) {
            if (!n.o(r, t))
                return Promise.resolve().then((function() {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND",
                    e
                }
                ));
            var e = r[t]
              , o = e[0];
            return Promise.all(e.slice(1).map(n.e)).then((function() {
                return n(o)
            }
            ))
        }
        o.keys = function() {
            return Object.keys(r)
        }
        ,
        o.id = 83,
        t.exports = o
    },
    88: function(t, e, n) {
        "use strict";
        n(190),
        n(191);
        var r = n(2)
          , o = n(4)
          , i = n(0)
          , a = n(5);
        function c(t) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function s(t) {
            return function(t) {
                if (Array.isArray(t))
                    return u(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                    return Array.from(t)
            }(t) || function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return u(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return u(t, e)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function u(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
        function l(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function f(t, e, n) {
            return e && l(t.prototype, e),
            n && l(t, n),
            t
        }
        function h(t, e) {
            return !e || "object" !== c(e) && "function" != typeof e ? d(t) : e
        }
        function d(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function p(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return (p = function(t) {
                if (null === t || (n = t,
                -1 === Function.toString.call(n).indexOf("[native code]")))
                    return t;
                var n;
                if ("function" != typeof t)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t))
                        return e.get(t);
                    e.set(t, r)
                }
                function r() {
                    return m(t, arguments, v(this).constructor)
                }
                return r.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                y(r, t)
            }
            )(t)
        }
        function m(t, e, n) {
            return (m = b() ? Reflect.construct : function(t, e, n) {
                var r = [null];
                r.push.apply(r, e);
                var o = new (Function.bind.apply(t, r));
                return n && y(o, n.prototype),
                o
            }
            ).apply(null, arguments)
        }
        function b() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }
        function y(t, e) {
            return (y = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function v(t) {
            return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var _ = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && y(t, e)
            }(c, t);
            var e, n, r = (e = c,
            n = b(),
            function() {
                var t, r = v(e);
                if (n) {
                    var o = v(this).constructor;
                    t = Reflect.construct(r, arguments, o)
                } else
                    t = r.apply(this, arguments);
                return h(this, t)
            }
            );
            function c() {
                var t;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                (t = r.call(this)).alt = "",
                t.img_ = new Image,
                t.loaded = !1,
                t.md = null,
                t.lg = null,
                t.xl = null,
                t.src = null,
                t.width = "320",
                t.store_ = t.constructor.store_,
                t.topics_ = i.a,
                t.handleBreakpointChange_ = t.handleBreakpointChange_.bind(d(t)),
                t.source = "",
                t.loadingTimeStarted_ = null,
                t.waitingTime_ = 500,
                t.hasBeenSubscribed_ = !1,
                t.lowResMode_ = !1,
                t.img_.onload = function() {
                    var e = t.store_.state.currentBreakpoint;
                    for (t.loaded = !0,
                    t.classList.add("is-loaded"),
                    t.img_.setAttribute("width", t.img_.naturalWidth),
                    t.img_.setAttribute("height", t.img_.naturalHeight),
                    t.lowResMode_ ? (t.img_.style.setProperty("width", "100%"),
                    (t.store_.state.isConnectionFast || ["large", "extra-large"].includes(e)) && setTimeout((function() {
                        Object(a.a)("Retrying highres image for", s(t.classList)),
                        t.lowResMode_ = !1,
                        t.source = t.store_.state.currentBreakpoint
                    }
                    ), 500)) : t.img_.style.removeProperty("width"); t.hasChildNodes(); )
                        t.removeChild(t.lastChild);
                    t.appendChild(t.img_)
                }
                ,
                t.img_.onerror = function() {
                    t.loaded = !0,
                    t.classList.add("is-loaded--404")
                }
                ,
                t
            }
            return f(c, null, [{
                key: "observedAttributes",
                get: function() {
                    return ["alt", "src", "width", "md", "lg", "xl", "cache-ttl"]
                }
            }, {
                key: "store",
                set: function(t) {
                    this.store_ || (this.store_ = t)
                }
            }]),
            f(c, [{
                key: "forceLoad",
                value: function() {
                    return this.visible = !0,
                    this.waitForLoad_()
                }
            }, {
                key: "waitForLoad_",
                value: function() {
                    var t = this;
                    return new Promise((function(e, n) {
                        window.requestAnimationFrame((function(r) {
                            return t.checkIfLoaded_(r, e, n)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "checkIfLoaded_",
                value: function(t, e, n) {
                    this.loadingTimeStarted_ = this.loadingTimeStarted_ || t;
                    var r = t - this.loadingTimeStarted_;
                    !this.lowResMode_ && r >= this.waitingTime_ && (Object(a.a)("Low resolution mode activated for: ", s(this.classList)),
                    this.lowResMode_ = !0,
                    this.source = this.store_.state.currentBreakpoint),
                    this.retryLoad_(e, n)
                }
            }, {
                key: "retryLoad_",
                value: function(t, e) {
                    var n = this;
                    this.loaded || this.classList.contains("has-fallback") || this.classList.contains("is-loaded--404") ? t(this) : window.requestAnimationFrame((function(r) {
                        return n.checkIfLoaded_(r, t, e)
                    }
                    ))
                }
            }, {
                key: "handleBreakpointChange_",
                value: function(t) {
                    var e = t.currentBreakpoint;
                    this.source = e
                }
            }, {
                key: "getImageParameters_",
                value: function(t) {
                    var e = this.getImageWidth_(t)
                      , n = {}
                      , r = this.store_.state
                      , i = r.isConnectionFast
                      , a = r.supportsWebp
                      , c = Object(o.h)(i, a, this.cacheTTL);
                    return n.default = "w".concat(e, "-").concat(c),
                    n.retina = "w".concat(2 * e, "-").concat(c),
                    n
                }
            }, {
                key: "getMediaSource_",
                value: function(t) {
                    var e = this.getAttribute("src")
                      , n = this.getAttribute("src_md")
                      , r = this.getAttribute("src_lg")
                      , o = this.getAttribute("src_xl")
                      , i = this.getImageParameters_(t);
                    return {
                        fallback: "".concat(e, "=").concat(i.default, " 1x, ") + "".concat(e, "=").concat(i.retina, " 2x"),
                        small: "".concat(e, "=").concat(i.default, " 1x, ") + "".concat(e, "=").concat(i.retina, " 2x"),
                        medium: "".concat(n, "=").concat(i.default, " 1x, ") + "".concat(n, "=").concat(i.retina, " 2x"),
                        large: "".concat(r, "=").concat(i.default, " 1x, ") + "".concat(r, "=").concat(i.retina, " 2x"),
                        "extra-large": "".concat(o, "=").concat(i.default, " 1x, ") + "".concat(o, "=").concat(i.retina, " 2x")
                    }[t] || "".concat(this.src, "=").concat(i.default, " 1x, ") + "".concat(this.src, "=").concat(i.retina, " 2x")
                }
            }, {
                key: "getImageWidth_",
                value: function(t) {
                    var e = [{
                        small: this.width,
                        medium: this.md,
                        large: this.lg,
                        "extra-large": this.xl
                    }].reduce(this.reduceSizes_, {})
                      , n = e.size[t] ? e.size[t] : e.fallbackSize;
                    return this.lowResMode_ ? Math.round(n / 10) : n
                }
            }, {
                key: "reduceSizes_",
                value: function(t, e) {
                    for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                        var o = r[n];
                        if (!e[o])
                            break;
                        t = e[o]
                    }
                    return {
                        size: e,
                        fallbackSize: t
                    }
                }
            }, {
                key: "getInterpolatedSize_",
                value: function(t, e) {
                    var n = window.innerWidth * parseInt(e) / {
                        small: 360,
                        medium: 768,
                        large: 1024,
                        "extra-large": 1440
                    }[t];
                    return Math.round(n)
                }
            }, {
                key: "attributeChangedCallback",
                value: function(t, e, n) {
                    this[t] !== n && (this[t] = n)
                }
            }, {
                key: "visible",
                set: function(t) {
                    this.src && this.width && t && !this.loaded && (this.source = this.store_.state.currentBreakpoint,
                    this.hasBeenSubscribed_ || (this.store_.subscribe([[this.topics_.BREAKPOINT_CHANGE, this.handleBreakpointChange_]]),
                    this.hasBeenSubscribed_ = !0),
                    this.waitForLoad_())
                }
            }, {
                key: "source",
                set: function(t) {
                    if (t) {
                        var e = this.hasAttribute("src_md")
                          , n = this.getImageParameters_(t);
                        this.img_.srcset = e ? this.getMediaSource_(t) : "".concat(this.src, "=").concat(n.default, " 1x, ") + "".concat(this.src, "=").concat(n.retina, " 2x"),
                        this.img_.alt = this.alt
                    }
                }
            }, {
                key: "cacheTTL",
                get: function() {
                    return this.getAttribute("cache-ttl")
                },
                set: function(t) {
                    this.setAttribute("cache-ttl", t)
                }
            }]),
            c
        }(p(HTMLElement))
          , g = n(23)
          , w = n(7)
          , E = n(3)
          , O = n(8)
          , j = n(6);
        function T(t) {
            return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function S(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function k(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? S(Object(n), !0).forEach((function(e) {
                    C(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function C(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        function A(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function P(t, e) {
            return (P = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function I(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = L(t);
                if (e) {
                    var o = L(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return D(this, n)
            }
        }
        function D(t, e) {
            return !e || "object" !== T(e) && "function" != typeof e ? R(t) : e
        }
        function R(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function L(t) {
            return (L = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var N = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && P(t, e)
            }(a, t);
            var e, n, r, o = I(a);
            function a(t, e) {
                var n, r = e.global, i = e.document;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a),
                (n = o.call(this, t, r)).document_ = i,
                n.bodyEl_ = n.document_.body,
                n.pageName_ = "",
                n.countAttemptsForGa_ = 0,
                n.maxAttemptsCheckGa_ = 3,
                n.gaCheckInterval_ = 1e3,
                n.clientId_ = "",
                n.sessionId_ = "",
                n.baseScrollEvent_ = {
                    event: "trackScroll",
                    eventCategory: "scroll",
                    eventLabel: n.getPageName_()
                },
                n.categoriesExceptions_ = ["navigation", "footer", "social icons"],
                n.labelURLs_ = ["/google-features-on-android/summer-2021/", "/google-features-on-android/fall-2021/", "/google-features-on-android/winter-2021/", "/google-features-on-android/march-2022/"],
                n.footerInAccordionBreakpoints_ = {
                    small: !0,
                    medium: !0
                },
                n.handleTrackEvent_ = n.handleTrackEvent_.bind(R(n)),
                n
            }
            return e = a,
            (n = [{
                key: "initialize_",
                value: function() {
                    this.store_.subscribe([[i.a.GA_TRACK_EVENT, this.handleTrackEvent_]])
                }
            }, {
                key: "build_",
                value: function() {
                    var t = this;
                    this.pageName_ = this.getPageName_(),
                    this.bodyEl_.addEventListener("click", (function(e) {
                        return t.handleClickEvent_(e)
                    }
                    )),
                    this.gaInterval_ = setInterval(this.checkGaExistence_.bind(this), this.gaCheckInterval_)
                }
            }, {
                key: "checkGaExistence_",
                value: function() {
                    this.global_.ga ? (clearTimeout(this.gaInterval_),
                    this.onGaLoad()) : (this.countAttemptsForGa_++,
                    this.countAttemptsForGa_ == this.maxAttemptsCheckGa_ && clearTimeout(this.gaInterval_))
                }
            }, {
                key: "handleTrackEvent_",
                value: function(t, e) {
                    if (t)
                        switch (t) {
                        case O.a.CLICK:
                            this.handleClickEvent_(e);
                            break;
                        case O.a.SCROLL_V:
                            this.handleScrollThresholdEvent_(e);
                            break;
                        case O.a.SCROLL_H:
                            this.handleHorizontalScroll_(e);
                            break;
                        case O.a.VIDEO_INTERACTION:
                            this.handleVideoInteraction_(e);
                            break;
                        case O.a.MODAL_INTERACTION:
                            this.handleModalInteraction_(e);
                            break;
                        case O.a.AUTOMATED_INTERACTION:
                            this.handleAutomatedInteractionEvent_(e);
                            break;
                        case O.a.FORM_INTERACTION:
                            this.handleFormInteractionEvent_(e);
                            break;
                        case O.a.SUB_NAV_SPY:
                            this.handleSubNavSpyEvent_(e)
                        }
                }
            }, {
                key: "handleAutomatedInteractionEvent_",
                value: function(t) {
                    var e = this.buildEventDataFromConfig_("trackEvent", t, O.a.AUTOMATED_INTERACTION);
                    this.pushToDataLayer_(e)
                }
            }, {
                key: "handleFormInteractionEvent_",
                value: function(t) {
                    var e = this.buildEventDataFromConfig_("trackEvent", t, O.a.FORM_INTERACTION);
                    this.pushToDataLayer_(e)
                }
            }, {
                key: "handleScrollThresholdEvent_",
                value: function(t) {
                    if (z[t]) {
                        z[t] = !1;
                        var e = k(k({}, this.baseScrollEvent_), {}, {
                            eventAction: "".concat(t, "%")
                        });
                        this.pushToDataLayer_(e)
                    }
                }
            }, {
                key: "getPageName_",
                value: function() {
                    var t = window.location.pathname;
                    return "/" === t ? "homepage" : t.replace(/\//g, " ").trim().split(" ").reduce((function(t, e) {
                        return "".concat(t ? t + ":" : "").concat(e.split("-").reduce((function(t, e) {
                            return "".concat(t, " ").concat(e.charAt(0).toUpperCase() + e.slice(1))
                        }
                        ), ""))
                    }
                    ), "").trim().toLocaleLowerCase()
                }
            }, {
                key: "handleClickEvent_",
                value: function(t) {
                    if (this.isValidEvent_(t))
                        switch (t.target.tagName.toLowerCase()) {
                        case M.ANCHOR:
                            this.handleAnchorClick_(t);
                            break;
                        case M.BUTTON:
                            this.handleButtonClick_(t);
                            break;
                        case M.HEADING_3:
                            this.handleHeading3Click_(t);
                            break;
                        case M.SELECT:
                            this.handleSelectClick_(t);
                            break;
                        case M.OPTION:
                            this.handleOptionClick_(t);
                            break;
                        case M.INPUT:
                            this.handleInputClick_(t);
                            break;
                        case M.TH:
                        case M.TD:
                            this.handleTableClick_(t)
                        }
                }
            }, {
                key: "handleVideoInteraction_",
                value: function(t) {
                    var e = k(k({}, this.extractVideoProperties_(t)), {}, {
                        eventCategory: t.category,
                        eventAction: t.state,
                        scrollPosition: "".concat(this.store_.state.scrollPercentage, "%"),
                        moduleName: t.category
                    });
                    e.eventLabel = this.setLabelWithRelativeURL_(e),
                    this.pushToDataLayer_(e)
                }
            }, {
                key: "handleModalInteraction_",
                value: function(t) {
                    var e = {
                        eventCategory: t.category,
                        eventAction: t.isClosed ? "close pop up" : "open pop up",
                        scrollPosition: "".concat(this.store_.state.scrollPercentage, "%"),
                        moduleName: "modal"
                    };
                    "video" === t.category && (e = k(k({}, this.extractVideoProperties_(t)), e)),
                    this.pushToDataLayer_(e)
                }
            }, {
                key: "extractVideoProperties_",
                value: function(t) {
                    return {
                        event: "trackEvent",
                        eventLabel: this.getVideoEventLabel_(t),
                        videoUrl: t.url,
                        videoName: t.name,
                        videoLength: t.length
                    }
                }
            }, {
                key: "getVideoEventLabel_",
                value: function(t) {
                    return t.isComplete || t.isProgressTracked || t.isClosed ? t.url : "".concat(t.progress, "%")
                }
            }, {
                key: "handleSubNavSpyEvent_",
                value: function(t) {
                    var e = {
                        event: "trackEvent",
                        eventCategory: "module interactions",
                        eventAction: "submenu anchor click",
                        eventLabel: t.label,
                        linkUrl: t.url,
                        scrollPosition: "".concat(this.store_.state.scrollPercentage, "%"),
                        moduleName: O.a.SUB_NAV_SPY
                    };
                    if (t.menuState) {
                        var n = t.isSubMenuOpen ? "opened" : "closed";
                        e = k(k({}, e), {}, {
                            eventLabel: t.shouldHideStateLabel ? n : "".concat(t.label, " - ").concat(n),
                            eventAction: "submenu state click"
                        })
                    }
                    this.pushToDataLayer_(e)
                }
            }, {
                key: "handleAnchorClick_",
                value: function(t) {
                    var e = Object(w.a)(t.target, B);
                    if (Object.keys(e).length) {
                        var n = k(k({}, this.buildEventDataFromConfig_("trackEvent", e, t.type)), {}, {
                            linkUrl: e.linkUrl
                        });
                        e.fileDownload && (n = k(k({}, n), {
                            fileDownload: e.fileDownload
                        })),
                        n.eventLabel = this.setLabelWithRelativeURL_(n),
                        this.pushToDataLayer_(n)
                    }
                }
            }, {
                key: "setLabelWithRelativeURL_",
                value: function(t) {
                    var e = t.eventCategory
                      , n = t.eventLabel;
                    if (this.hasToTrackRelativeURL_(e)) {
                        var r = n;
                        n = r = "".concat(this.global_.location.pathname, " - ").concat(r)
                    }
                    return n
                }
            }, {
                key: "hasToTrackRelativeURL_",
                value: function(t) {
                    return this.labelURLs_.includes(this.global_.location.pathname) && !this.categoriesExceptions_.includes(t)
                }
            }, {
                key: "handleButtonClick_",
                value: function(t) {
                    var e = Object(w.a)(t.target, B)
                      , n = t.target
                      , r = n.classList.contains(F.ACCORDION_ITEM_BUTTON)
                      , o = n.classList.contains(F.EXPANDABLE_CONTENT_TUTORIAL_BUTTON);
                    if (Object.keys(e).length) {
                        r && (e.eventLabel = "true" === n.parentElement.getAttribute("aria-expanded") ? "open" : "close"),
                        o && (e.eventLabel = "true" === n.getAttribute("aria-expanded") ? "open" : "close");
                        var i = this.buildEventDataFromConfig_("trackEvent", e, t.type);
                        this.pushToDataLayer_(i)
                    }
                }
            }, {
                key: "handleHeading3Click_",
                value: function(t) {
                    var e = Object(w.a)(t.target, B);
                    if (Object.keys(e).length) {
                        var n = t.target.attributes["aria-expanded"].value
                          , r = this.buildEventDataFromConfig_("trackEvent", e, t.type)
                          , o = this.store_.state.currentBreakpoint
                          , i = !0;
                        t.target.classList.contains(F.FOOTER_COLUMN_NAME) && (this.footerInAccordionBreakpoints_[o] ? r.eventLabel = "".concat("true" === n ? "open" : "close") : i = !1),
                        i && this.pushToDataLayer_(r)
                    }
                }
            }, {
                key: "handleSelectClick_",
                value: function(t) {
                    var e = Object(w.a)(t.target, B);
                    if (Object.keys(e).length) {
                        var n = this.buildEventDataFromConfig_("trackEvent", e, t.type);
                        this.pushToDataLayer_(n)
                    }
                }
            }, {
                key: "handleOptionClick_",
                value: function(t) {
                    var e = Object(w.a)(t.target, B);
                    if (Object.keys(e).length) {
                        var n = this.buildEventDataFromConfig_("trackEvent", e, t.type);
                        this.pushToDataLayer_(n)
                    }
                }
            }, {
                key: "handleInputClick_",
                value: function(t) {
                    var e = Object(w.a)(t.target, B);
                    if (Object.keys(e).length) {
                        var n = this.buildEventDataFromConfig_("trackEvent", e, t.type);
                        this.pushToDataLayer_(n)
                    }
                }
            }, {
                key: "handleTableClick_",
                value: function(t) {
                    var e = Object(w.a)(t.target, B);
                    if (Object.keys(e).length) {
                        var n = this.buildEventDataFromConfig_("trackEvent", e, t.type);
                        this.pushToDataLayer_(n)
                    }
                }
            }, {
                key: "buildEventDataFromConfig_",
                value: function(t, e, n) {
                    var r = this.buildReducedTitle_(e.title)
                      , o = Object.keys(e)
                      , i = {
                        accordionString: void 0,
                        clientId: this.clientId_,
                        fileDownload: void 0,
                        event: t,
                        eventAction: e.eventAction || "".concat(r, " ").concat(n),
                        eventCategory: e.eventCategory,
                        eventLabel: e.eventLabel.replace(/<[^>]*>/gm, "") || this.pageName_,
                        hitTimestamp: this.getTimestamp(),
                        linkUrl: void 0,
                        moduleName: e.moduleName,
                        scrollPosition: "".concat(this.store_.state.scrollPercentage, "%"),
                        sessionId: this.sessionId_,
                        videoLength: void 0,
                        videoName: void 0,
                        videoUrl: void 0
                    };
                    return x.forEach((function(t) {
                        o.includes(t) && (i[t] = e[t])
                    }
                    )),
                    i
                }
            }, {
                key: "buildReducedTitle_",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , e = t.indexOf("featured accordion")
                      , n = t.indexOf("accordion")
                      , r = t.indexOf("move carousel")
                      , o = t
                      , i = "";
                    e > -1 && (o = t.substr(0, e).trim(),
                    i = t.substr(e)),
                    n > -1 && (o = t.substr(0, n).trim(),
                    i = t.substr(n)),
                    r > -1 && (o = t.substr(0, r).trim(),
                    i = t.substr(r));
                    var a = o ? o.split(" ").slice(0, 3).join(" ") : "";
                    return "".concat(a, " ").concat(i).trim()
                }
            }, {
                key: "pushToDataLayer_",
                value: function(t) {
                    if (!("dataLayer"in this.global_))
                        throw this.store_.unsubscribe(i.a.GA_TRACK_EVENT, this.handleClickEvent_),
                        this.bodyEl_.removeEventListener("click", this.handleClickEvent_),
                        new E.f;
                    this.global_.dataLayer.push(t)
                }
            }, {
                key: "onGaLoad",
                value: function() {
                    if (this.clientId_ = this.getGATrackingClientId(),
                    this.sessionId_ = this.getRandomSessionId(),
                    this.clientId_) {
                        var t = {
                            clientId: this.clientId_,
                            sessionId: this.sessionId_,
                            hitTimestamp: this.getTimestamp()
                        };
                        this.pushToDataLayer_(t)
                    }
                }
            }, {
                key: "getGATrackingClientId",
                value: function() {
                    if (this.global_.ga && this.global_.ga.getAll) {
                        var t = this.global_.ga.getAll().find((function(t) {
                            return t.get("trackingId") === H
                        }
                        ));
                        return t ? t.get("clientId") : null
                    }
                    return null
                }
            }, {
                key: "getTimestamp",
                value: function() {
                    var t = new Date
                      , e = -t.getTimezoneOffset()
                      , n = e >= 0 ? "+" : "-"
                      , r = function(t) {
                        var e = Math.abs(Math.floor(t));
                        return (e < 10 ? "0" : "") + e
                    };
                    return t.getFullYear() + "-" + r(t.getMonth() + 1) + "-" + r(t.getDate()) + "T" + r(t.getHours()) + ":" + r(t.getMinutes()) + ":" + r(t.getSeconds()) + "." + r(t.getMilliseconds()) + n + r(e / 60) + ":" + r(e % 60)
                }
            }, {
                key: "getRandomSessionId",
                value: function() {
                    var t = (new Date).getTime()
                      , e = Math.random().toString(36).substring(5);
                    return "".concat(t, ".").concat(e)
                }
            }, {
                key: "handleHorizontalScroll_",
                value: function(t) {
                    var e = t.event
                      , n = t.direction;
                    if (this.isValidEvent_(e) && n) {
                        var r = Object(w.a)(e.target, B);
                        if (Object.keys(r).length) {
                            var o = this.buildEventDataFromConfig_("trackEvent", r, "");
                            o.eventLabel = n,
                            this.pushToDataLayer_(o)
                        }
                    }
                }
            }, {
                key: "isValidEvent_",
                value: function(t) {
                    return t && t.target && t.target.tagName
                }
            }]) && A(e.prototype, n),
            r && A(e, r),
            a
        }(j.a)
          , x = ["accordionString"]
          , M = {
            ANCHOR: "a",
            BUTTON: "button",
            HEADING_3: "h3",
            OPTION: "option",
            SELECT: "select",
            INPUT: "input",
            TD: "td",
            TH: "th"
        }
          , F = {
            FOOTER_COLUMN_NAME: "footer-default__title",
            ACCORDION_ITEM_BUTTON: "accordion__item-button",
            EXPANDABLE_CONTENT_TUTORIAL_BUTTON: "expandable-content--tutorial__button",
            HEADER_DEFFAULT_LANGUAGE: "header-default__language"
        }
          , B = "data-g-config"
          , H = "UA-5686560-5"
          , z = {
            25: !0,
            50: !0,
            75: !0,
            100: !0
        }
          , V = n(24);
        function U(t) {
            return (U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function W(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function G(t, e) {
            return (G = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function K(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = X(t);
                if (e) {
                    var o = X(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return Y(this, n)
            }
        }
        function Y(t, e) {
            return !e || "object" !== U(e) && "function" != typeof e ? q(t) : e
        }
        function q(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function X(t) {
            return (X = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var J = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && G(t, e)
            }(s, t);
            var e, n, a, c = K(s);
            function s(t, e) {
                var n, r = e.global, o = e.document, i = e.navigator;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, s),
                (n = c.call(this, t, r)).document_ = o,
                n.global_ = r,
                n.navigator_ = i,
                n.motionQuery_ = null,
                n.handleReduceMotionChanged_ = n.handleReduceMotionChanged_.bind(q(n)),
                n.detectWebpSupport_ = n.detectWebpSupport_.bind(q(n)),
                n
            }
            return e = s,
            (n = [{
                key: "initialize_",
                value: function() {
                    var t = this;
                    return Promise.all([this.detectIntersectionObserverAvailability_(), this.detectTouchability_(), this.detectReduceMotion_(), this.detectOs_(), this.detectConnectionSpeed_(), this.detectWebpSupport_()]).then((function() {
                        return t
                    }
                    ))
                }
            }, {
                key: "detectIntersectionObserverAvailability_",
                value: function() {
                    var t = this;
                    return Object(r.a)((function() {
                        var e = "IntersectionObserver"in t.global_;
                        t.store_.state = {
                            isIntersectionObserverAvailable: e
                        }
                    }
                    ))
                }
            }, {
                key: "detectTouchability_",
                value: function() {
                    var t = this;
                    return Object(r.a)((function() {
                        var e = t.getTouchability_();
                        t.store_.state = {
                            isTouch: e
                        }
                    }
                    ))
                }
            }, {
                key: "detectReduceMotion_",
                value: function() {
                    var t = this;
                    return Object(r.a)((function() {
                        t.motionQuery_ = matchMedia("(prefers-reduced-motion)"),
                        t.motionQuery_.addListener(t.handleReduceMotionChanged_),
                        t.handleReduceMotionChanged_()
                    }
                    ))
                }
            }, {
                key: "detectOs_",
                value: function() {
                    var t = this;
                    return Object(r.a)((function() {
                        var e = t.navigator_.userAgent
                          , n = e.indexOf("Android") >= 0;
                        if (n) {
                            var r = parseFloat(e.slice(e.indexOf("Android") + 8));
                            t.store_.state = {
                                version: r
                            }
                        }
                        t.store_.state = {
                            isAndroid: n
                        }
                    }
                    ))
                }
            }, {
                key: "detectConnectionSpeed_",
                value: function() {
                    var t = this;
                    return Object(r.a)((function() {
                        var e = (new o.d).isFast();
                        t.store_.state = {
                            isConnectionFast: e
                        }
                    }
                    ))
                }
            }, {
                key: "detectWebpSupport_",
                value: function() {
                    var t = this;
                    return new Promise((function(e) {
                        var n = !1
                          , r = new Image;
                        r.onload = function() {
                            r.width > 0 && r.height > 0 && (n = !0),
                            t.store_.state = {
                                supportsWebp: n
                            },
                            e()
                        }
                        ,
                        r.onerror = function() {
                            t.store_.state = {
                                supportsWebp: n
                            },
                            e()
                        }
                        ,
                        r.src = "data:image/webp;base64,".concat("UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")
                    }
                    ))
                }
            }, {
                key: "getTouchability_",
                value: function() {
                    return "ontouchstart"in this.document_.documentElement
                }
            }, {
                key: "handleReduceMotionChanged_",
                value: function() {
                    var t = this.motionQuery_.matches;
                    this.store_.state = {
                        isReducedMotionActive: t
                    },
                    this.store_.dispatch(i.a.REDUCED_MOTION_CHANGE, {
                        data: t
                    })
                }
            }]) && W(e.prototype, n),
            a && W(e, a),
            s
        }(j.a);
        function $(t) {
            return ($ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function Q(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function Z(t, e) {
            return (Z = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function tt(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = rt(t);
                if (e) {
                    var o = rt(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return et(this, n)
            }
        }
        function et(t, e) {
            return !e || "object" !== $(e) && "function" != typeof e ? nt(t) : e
        }
        function nt(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function rt(t) {
            return (rt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var ot = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && Z(t, e)
            }(c, t);
            var e, n, r, o = tt(c);
            function c(t, e) {
                var n, r = e.global;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                (n = o.call(this, t, r)).raffles_ = {},
                n.startLottery_ = n.startLottery_.bind(nt(n)),
                n
            }
            return e = c,
            (n = [{
                key: "initialize_",
                value: function() {
                    this.store_.subscribe([[i.a.START_LOTTERY, this.startLottery_]])
                }
            }, {
                key: "startLottery_",
                value: function(t, e) {
                    if (!this.raffles_[t]) {
                        this.raffles_[t] = !0;
                        var n = Math.floor(100 * Math.random() + 1);
                        n <= e.probability ? (this.store_.dispatch(i.a.SHOW_SURVEY, {
                            id: t
                        }),
                        Object(a.a)("User has won:", {
                            ticket: n,
                            probability: e.probability
                        }, !0)) : Object(a.a)("User has lost:", {
                            ticket: n,
                            probability: e.probability
                        }, !0)
                    }
                }
            }]) && Q(e.prototype, n),
            r && Q(e, r),
            c
        }(j.a);
        function it(t) {
            return (it = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function at(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function ct(t, e) {
            return (ct = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function st(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = ft(t);
                if (e) {
                    var o = ft(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return ut(this, n)
            }
        }
        function ut(t, e) {
            return !e || "object" !== it(e) && "function" != typeof e ? lt(t) : e
        }
        function lt(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function ft(t) {
            return (ft = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var ht = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && ct(t, e)
            }(a, t);
            var e, n, r, o = st(a);
            function a(t, e) {
                var n, r = e.global;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a),
                (n = o.call(this, t, r)).lottieAnimationsMap_ = {},
                n.registerAnimation_ = n.registerAnimation_.bind(lt(n)),
                n.loadAnimation_ = n.loadAnimation_.bind(lt(n)),
                n
            }
            return e = a,
            (n = [{
                key: "initialize_",
                value: function() {
                    this.store_.subscribe([[i.a.REGISTER_ANIMATION, this.registerAnimation_], [i.a.LOAD_ANIMATION, this.loadAnimation_]])
                }
            }, {
                key: "registerAnimation_",
                value: function(t, e) {
                    var n = this;
                    if (!this.lottieAnimationsMap_[t]) {
                        var r, o, i;
                        this.lottieAnimationsMap_[t] = (i = !1,
                        (o = "default")in (r = {}) ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i,
                        r);
                        var a = e.breakpoints;
                        a && a.forEach((function(e) {
                            n.lottieAnimationsMap_[t][e] = !1
                        }
                        ))
                    }
                }
            }, {
                key: "loadAnimation_",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = e.currentBreakpoint
                      , r = Object.keys(this.lottieAnimationsMap_[t])
                      , o = "default"
                      , i = this.lottieAnimationsMap_[t][o];
                    n && r.includes(n) && (i = this.lottieAnimationsMap_[t][n],
                    o = n),
                    i ? this.dispatchAnimationLoaded_(t, i) : this.loadAnimationData_(t, o)
                }
            }, {
                key: "loadAnimationData_",
                value: function(t, e) {
                    var n = this
                      , r = "default" !== e ? "".concat(t, "-").concat(e) : t;
                    fetch("/static/data/auto-animations/".concat(r, ".json")).then((function(t) {
                        return t.json()
                    }
                    )).then((function(r) {
                        n.lottieAnimationsMap_[t][e] = r,
                        n.dispatchAnimationLoaded_(t, r)
                    }
                    ))
                }
            }, {
                key: "dispatchAnimationLoaded_",
                value: function(t, e) {
                    this.store_.dispatch(i.a.LOTTIE_ANIMATION_LOADED, {
                        id: t,
                        data: e
                    })
                }
            }]) && at(e.prototype, n),
            r && at(e, r),
            a
        }(j.a);
        function dt(t) {
            return (dt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function pt(t) {
            return function(t) {
                if (Array.isArray(t))
                    return mt(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                    return Array.from(t)
            }(t) || function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return mt(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return mt(t, e)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function mt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
        function bt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function yt(t, e) {
            return (yt = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function vt(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = wt(t);
                if (e) {
                    var o = wt(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return _t(this, n)
            }
        }
        function _t(t, e) {
            return !e || "object" !== dt(e) && "function" != typeof e ? gt(t) : e
        }
        function gt(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function wt(t) {
            return (wt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var Et = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && yt(t, e)
            }(a, t);
            var e, n, r, o = vt(a);
            function a(t, e) {
                var n, r = e.global;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a),
                (n = o.call(this, t, r)).global_ = r,
                n.document_ = r.document,
                n.lastKnownScrollPosition_ = null,
                n.documentElement_ = r.document.documentElement,
                n.documentBody_ = r.document.body,
                n.scrollTop_ = "scrollTop",
                n.scrollHeight_ = "scrollHeight",
                n.isScrollingUpCssClass_ = "is-scrolling-up",
                n.isScrollingFastCssClass_ = "is-scrolling-fast",
                n.scrollingFastTimeoutId_ = null,
                n.isScrollingUpTimeout_ = null,
                n.scrollThresholdPace_ = 25,
                n.scrollThresholdTrigger_ = 25,
                n.scrollDepthBeacons_ = [],
                n.visibilityId_ = "scroll-service-visibility",
                n.observerConfiguration_ = {
                    threshold: [0, .5, 1]
                },
                n.handleScroll_ = n.handleScroll_.bind(gt(n)),
                n.handleScrollPercentages_ = n.handleScrollPercentages_.bind(gt(n)),
                n.setInitialScrollPosition_ = n.setInitialScrollPosition_.bind(gt(n)),
                n.triggerRequestAnimationFrameScroll_ = n.triggerRequestAnimationFrameScroll_.bind(gt(n)),
                n.handleScrollDepth_ = n.handleScrollDepth_.bind(gt(n)),
                n.initializeScrollDepthTracking_ = n.initializeScrollDepthTracking_.bind(gt(n)),
                n
            }
            return e = a,
            (n = [{
                key: "build_",
                value: function() {
                    this.initializeScrollDepthTracking_(this.global_.document),
                    this.triggerRequestAnimationFrameScroll_(),
                    this.global_.requestAnimationFrame(this.setInitialScrollPosition_)
                }
            }, {
                key: "setInitialScrollPosition_",
                value: function() {
                    this.lastKnownScrollPosition_ = this.global_.scrollY
                }
            }, {
                key: "detectScrollSpeed_",
                value: function(t) {
                    var e = this
                      , n = Math.abs(t - this.lastKnownScrollPosition_);
                    clearTimeout(this.scrollingFastTimeoutId_),
                    n > 200 ? (this.document_.body.classList.add(this.isScrollingFastCssClass_),
                    this.scrollingFastTimeoutId_ = setTimeout((function() {
                        e.document_.body.classList.remove(e.isScrollingFastCssClass_)
                    }
                    ), 100)) : this.document_.body.classList.remove(this.isScrollingFastCssClass_)
                }
            }, {
                key: "initializeScrollDepthTracking_",
                value: function(t) {
                    this.store_.subscribe([[i.a.VISIBILITY_TRIGGERED, this.handleScrollDepth_]]),
                    this.scrollDepthBeacons_ = pt(t.querySelectorAll("\n        main > article > section, main > section, footer\n      ")),
                    this.store_.dispatch(i.a.TRACK_VISIBILITY, {
                        id: this.visibilityId_,
                        data: {
                            isTrack: !0,
                            config: this.observerConfiguration_,
                            elementsToTrack: this.scrollDepthBeacons_
                        }
                    })
                }
            }, {
                key: "handleScrollDepth_",
                value: function(t, e) {
                    var n = this
                      , r = e.entries;
                    t === this.visibilityId_ && r.forEach((function(t) {
                        t.isIntersecting && n.handleScrollPercentages_()
                    }
                    ))
                }
            }, {
                key: "handleScroll_",
                value: function() {
                    var t = this.global_.scrollY;
                    t !== this.lastKnownScrollPosition_ ? (this.detectScrollDirection_(t),
                    this.lastKnownScrollPosition_ = t >= 0 ? t : 0,
                    this.store_.dispatch(i.a.SCROLL_POSITION_CHANGE, {
                        data: this.lastKnownScrollPosition_
                    }),
                    this.store_.state = {
                        currentScrollPosition: this.lastKnownScrollPosition_
                    },
                    this.triggerRequestAnimationFrameScroll_()) : this.global_.addEventListener("scroll", this.triggerRequestAnimationFrameScroll_, {
                        once: !0,
                        passive: !0
                    })
                }
            }, {
                key: "triggerRequestAnimationFrameScroll_",
                value: function() {
                    this.global_.requestAnimationFrame(this.handleScroll_)
                }
            }, {
                key: "detectScrollDirection_",
                value: function(t) {
                    var e = this;
                    if (t !== this.lastKnownScrollPosition_) {
                        var n = this.store_.state.isScrollingDown
                          , r = t > this.lastKnownScrollPosition_;
                        if (n === r)
                            return clearTimeout(this.isScrollingUpTimeout_),
                            void (this.isScrollingUpTimeout_ = setTimeout((function() {
                                e.document_.body.classList.remove(e.isScrollingUpCssClass_)
                            }
                            ), 500));
                        this.store_.state = {
                            isScrollingDown: r
                        },
                        r ? this.document_.body.classList.remove(this.isScrollingUpCssClass_) : this.document_.body.classList.add(this.isScrollingUpCssClass_)
                    }
                }
            }, {
                key: "handleScrollPercentages_",
                value: function() {
                    var t = this;
                    this.global_.requestAnimationFrame((function() {
                        t.setScrollPecertangeInState_(),
                        t.checkScrollThreshold_()
                    }
                    ))
                }
            }, {
                key: "checkScrollThreshold_",
                value: function() {
                    this.scrollThresholdHasBeenSurpassed_() && (this.store_.dispatch(i.a.GA_TRACK_EVENT, {
                        id: O.a.SCROLL_V,
                        data: this.scrollThresholdTrigger_
                    }),
                    this.scrollThresholdTrigger_ += this.scrollThresholdPace_)
                }
            }, {
                key: "scrollThresholdHasBeenSurpassed_",
                value: function() {
                    return this.scrollThresholdTrigger_ <= 100 && this.store_.state.scrollPercentage >= this.scrollThresholdTrigger_
                }
            }, {
                key: "setScrollPecertangeInState_",
                value: function() {
                    var t = this.getScrollPercentage_();
                    this.store_.state = {
                        scrollPercentage: t
                    },
                    100 === t && this.stopScrollDepthTracking_()
                }
            }, {
                key: "getScrollPercentage_",
                value: function() {
                    return Math.round(this.getScrollTop_() / (this.getScrollHeight_() - this.documentElement_.clientHeight) * 100)
                }
            }, {
                key: "stopScrollDepthTracking_",
                value: function() {
                    this.store_.state.isIntersectionObserverAvailable ? this.store_.dispatch(i.a.TRACK_VISIBILITY, {
                        id: this.visibilityId_,
                        data: {
                            isTrack: !1,
                            elementsToTrack: this.scrollDepthBeacons_
                        }
                    }) : this.store_.unsubscribe(i.a.SCROLL_POSITION_CHANGE, this.handleScrollPercentages_)
                }
            }, {
                key: "getScrollHeight_",
                value: function() {
                    return this.documentElement_[this.scrollHeight_] || this.documentBody_[this.scrollHeight_]
                }
            }, {
                key: "getScrollTop_",
                value: function() {
                    return this.documentElement_[this.scrollTop_] || this.documentBody_[this.scrollTop_]
                }
            }]) && bt(e.prototype, n),
            r && bt(e, r),
            a
        }(j.a);
        function Ot(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        var jt = function() {
            function t(e, n) {
                if (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.store_ = e,
                this.performance_ = n,
                this.userMetSpentEnoughTimeCondition_ = !1,
                this.userMetScrolledEnoughCondition_ = !1,
                this.userMetNavigatedEnoughCondition_ = !1,
                this.constructor === t)
                    throw new TypeError("VALIDATOR IS AN ABSTRACT CLASS");
                if (void 0 === this.execute)
                    throw new TypeError("CLASS MUST HAVE THE VALIDATE METHOD")
            }
            var e, n, r;
            return e = t,
            (n = [{
                key: "userSpentEnoughTime_",
                value: function(t) {
                    var e = this.performance_.now();
                    return !this.userMetSpentEnoughTimeCondition_ && e > t && (this.userMetSpentEnoughTimeCondition_ = !0),
                    this.userMetSpentEnoughTimeCondition_
                }
            }, {
                key: "userScrolledEnough_",
                value: function(t) {
                    return !this.userMetScrolledEnoughCondition_ && this.store_.state.scrollPercentage >= t && (this.userMetScrolledEnoughCondition_ = !0),
                    this.userMetScrolledEnoughCondition_
                }
            }, {
                key: "userNavigatedEnough_",
                value: function(t) {
                    return !this.userMetNavigatedEnoughCondition_ && 2 >= t && (this.userMetNavigatedEnoughCondition_ = !0),
                    this.userMetNavigatedEnoughCondition_
                }
            }]) && Ot(e.prototype, n),
            r && Ot(e, r),
            t
        }();
        function Tt(t) {
            return (Tt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function St(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function kt(t, e) {
            return (kt = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function Ct(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = Pt(t);
                if (e) {
                    var o = Pt(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return At(this, n)
            }
        }
        function At(t, e) {
            return !e || "object" !== Tt(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function Pt(t) {
            return (Pt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var It = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && kt(t, e)
            }(i, t);
            var e, n, r, o = Ct(i);
            function i(t, e) {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                o.call(this, t, e)
            }
            return e = i,
            (n = [{
                key: "execute",
                value: function(t) {
                    var e = this.userSpentEnoughTime_(t.timeInPage)
                      , n = this.userScrolledEnough_(t.scrollPercentage)
                      , r = this.userNavigatedEnough_(t.amountOfPages);
                    return e && n && r
                }
            }]) && St(e.prototype, n),
            r && St(e, r),
            i
        }(jt);
        function Dt(t) {
            return (Dt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function Rt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function Lt(t, e) {
            return (Lt = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function Nt(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = Mt(t);
                if (e) {
                    var o = Mt(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return xt(this, n)
            }
        }
        function xt(t, e) {
            return !e || "object" !== Dt(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function Mt(t) {
            return (Mt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var Ft = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && Lt(t, e)
            }(i, t);
            var e, n, r, o = Nt(i);
            function i(t, e) {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                o.call(this, t, e)
            }
            return e = i,
            (n = [{
                key: "execute",
                value: function(t) {
                    var e = this.userSpentEnoughTime_(t.timeInPage)
                      , n = this.userScrolledEnough_(t.scrollPercentage)
                      , r = this.userNavigatedEnough_(t.amountOfPages);
                    return e || n || r
                }
            }, {
                key: "userNavigatedEnough_",
                value: function() {
                    return !1
                }
            }]) && Rt(e.prototype, n),
            r && Rt(e, r),
            i
        }(jt);
        function Bt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        var Ht = window.performance
          , zt = function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var e, n, r;
            return e = t,
            r = [{
                key: "get",
                value: function(t, e) {
                    var n = null;
                    switch (t) {
                    case "loose":
                        n = new Ft(e,Ht);
                        break;
                    case "strict":
                    default:
                        n = new It(e,Ht)
                    }
                    return n
                }
            }],
            (n = null) && Bt(e.prototype, n),
            r && Bt(e, r),
            t
        }()
          , Vt = n(82);
        function Ut(t) {
            return (Ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function Wt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Gt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Wt(Object(n), !0).forEach((function(e) {
                    Kt(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Wt(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function Kt(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        function Yt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function qt(t, e) {
            return (qt = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function Xt(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = Qt(t);
                if (e) {
                    var o = Qt(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return Jt(this, n)
            }
        }
        function Jt(t, e) {
            return !e || "object" !== Ut(e) && "function" != typeof e ? $t(t) : e
        }
        function $t(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function Qt(t) {
            return (Qt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var Zt = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && qt(t, e)
            }(c, t);
            var e, n, r, o = Xt(c);
            function c(t, e) {
                var n, r = e.global;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                (n = o.call(this, t, r)).validatorFactory_ = zt,
                n.dao_ = Vt.a.get("temporary"),
                n.surveysToTrack_ = {},
                n.animationFrame_ = null,
                n.track_ = n.track_.bind($t(n)),
                n.userMeetsConditions_ = n.userMeetsConditions_.bind($t(n)),
                n.registerSurvey_ = n.registerSurvey_.bind($t(n)),
                n
            }
            return e = c,
            (n = [{
                key: "initialize_",
                value: function() {
                    this.store_.subscribe([[i.a.REGISTER_SURVEY, this.registerSurvey_]])
                }
            }, {
                key: "build_",
                value: function() {
                    this.track_()
                }
            }, {
                key: "trackVisitedPages_",
                value: function() {
                    var t = window.location.pathname
                      , e = this.dao_.read("visitedPages") || {};
                    e[t] || (e[t] = 1),
                    this.dao_.save("visitedPages", e)
                }
            }, {
                key: "registerSurvey_",
                value: function(t, e) {
                    if (!this.surveysToTrack_[t]) {
                        var n = e.validatorType
                          , r = Gt(Gt({}, e), {
                            validator: this.validatorFactory_.get(n, this.store_)
                        });
                        this.surveysToTrack_[t] = r,
                        Object(a.a)("Survey registered with the following configurations:", r, !0)
                    }
                    cancelAnimationFrame(this.animationFrame_),
                    this.track_()
                }
            }, {
                key: "track_",
                value: function() {
                    var t = Object.keys(this.surveysToTrack_);
                    this.surveysToTrack_ = t.reduce(this.userMeetsConditions_, {}),
                    Object.keys(this.surveysToTrack_).length && (this.animationFrame_ = this.global_.requestAnimationFrame(this.track_))
                }
            }, {
                key: "userMeetsConditions_",
                value: function(t, e) {
                    var n = this.surveysToTrack_[e];
                    return this.store_.state.isCookieConsentAccepted && n.validator.execute(n) ? this.store_.dispatch(i.a.START_LOTTERY, {
                        id: e,
                        data: n
                    }) : t[e] = n,
                    t
                }
            }]) && Yt(e.prototype, n),
            r && Yt(e, r),
            c
        }(j.a);
        function te(t) {
            return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function ee(t) {
            return function(t) {
                if (Array.isArray(t))
                    return ne(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                    return Array.from(t)
            }(t) || function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return ne(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return ne(t, e)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ne(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
        function re(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function oe(t, e) {
            return (oe = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function ie(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = se(t);
                if (e) {
                    var o = se(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return ae(this, n)
            }
        }
        function ae(t, e) {
            return !e || "object" !== te(e) && "function" != typeof e ? ce(t) : e
        }
        function ce(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function se(t) {
            return (se = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var ue = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && oe(t, e)
            }(a, t);
            var e, n, r, o = ie(a);
            function a(t, e) {
                var n, r = e.global;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a),
                (n = o.call(this, t, r)).observers_ = {},
                n.manuallyTrackedElements_ = [],
                n.isCalculating_ = !1,
                n.observerDefaults_ = {
                    root: null,
                    rootMargin: "350px 0px 350px 0px",
                    threshold: [0, 1]
                },
                n.cache_ = [],
                n.trackVisibility_ = n.trackVisibility_.bind(ce(n)),
                n.handleVisibility_ = n.handleVisibility_.bind(ce(n)),
                n.trackElementsManually_ = n.trackElementsManually_.bind(ce(n)),
                n.calculateElementIntersection_ = n.calculateElementIntersection_.bind(ce(n)),
                n
            }
            return e = a,
            (n = [{
                key: "initialize_",
                value: function() {
                    this.store_.subscribe([[i.a.TRACK_VISIBILITY, this.trackVisibility_]])
                }
            }, {
                key: "build_",
                value: function() {
                    var t = this;
                    this.cache_.length > 0 && (this.cache_ = this.cache_.filter((function(e) {
                        return t.dispatchVisibilityTriggered_(e),
                        !1
                    }
                    )))
                }
            }, {
                key: "trackVisibility_",
                value: function(t, e) {
                    this.store_.state.isIntersectionObserverAvailable ? this.executeIntersectionObserverTracking_(t, e) : this.executeManualTracking_(t, e)
                }
            }, {
                key: "executeManualTracking_",
                value: function(t, e) {
                    var n = e.config
                      , r = e.isTrack
                      , o = e.elementsToTrack;
                    r ? (this.manuallyTrackedElements_ = [].concat(ee(this.manuallyTrackedElements_), ee(o.map((function(e) {
                        return {
                            id: t,
                            trackedElement: e,
                            visible: !1,
                            config: n
                        }
                    }
                    )))),
                    this.store_.subscribe([[i.a.SCROLL_POSITION_CHANGE, this.trackElementsManually_]])) : this.manuallyTrackedElements_ = this.manuallyTrackedElements_.filter((function(t) {
                        return !o.includes(t)
                    }
                    ))
                }
            }, {
                key: "executeIntersectionObserverTracking_",
                value: function(t, e) {
                    var n = this
                      , r = e.config
                      , o = e.isTrack
                      , i = e.elementsToTrack
                      , a = this.observers_[t];
                    o ? (a || (a = new IntersectionObserver((function(e, r) {
                        return n.handleVisibility_(t, e, r)
                    }
                    ),r),
                    this.observers_[t] = a),
                    i.forEach((function(t) {
                        a.observe(t)
                    }
                    ))) : !o && a && i.forEach((function(t) {
                        a.unobserve(t)
                    }
                    ))
                }
            }, {
                key: "trackElementsManually_",
                value: function() {
                    var t = this;
                    this.isCalculating_ || Promise.all(this.manuallyTrackedElements_.map((function(e) {
                        return t.calculateElementIntersection_(e)
                    }
                    ))).then((function(e) {
                        t.manuallyTrackedElements_ = e,
                        t.isCalculating_ = !1
                    }
                    )),
                    this.isCalculating_ = !0
                }
            }, {
                key: "calculateElementIntersection_",
                value: function(t) {
                    var e = this;
                    return new Promise((function(n) {
                        e.global_.requestAnimationFrame((function() {
                            var r = t.id
                              , o = t.trackedElement
                              , i = t.config
                              , a = t.visible;
                            a = e.notifyIfStateChanged_(r, o, a),
                            n({
                                id: r,
                                trackedElement: o,
                                visible: a,
                                config: i
                            })
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "notifyIfStateChanged_",
                value: function(t, e, n) {
                    if (this.isIntersecting_(e) && !n) {
                        n = !0;
                        var r = this.generateIntersectionObserverResponse_(e, n)
                          , o = r.entries
                          , i = r.observer;
                        this.handleVisibility_(t, o, i)
                    } else if (!this.isIntersecting_(e) && n) {
                        n = !1;
                        var a = this.generateIntersectionObserverResponse_(e, n)
                          , c = a.entries
                          , s = a.observer;
                        this.handleVisibility_(t, c, s)
                    }
                    return n
                }
            }, {
                key: "generateIntersectionObserverResponse_",
                value: function(t, e) {
                    return {
                        entries: [{
                            time: performance.now(),
                            boundingClientRect: t.getBoundingClientRect(),
                            intersectionRect: t.getBoundingClientRect(),
                            isIntersecting: e,
                            intersectionRatio: e ? 1 : 0,
                            target: t
                        }],
                        observer: {
                            observe: function() {},
                            unobserve: function() {}
                        }
                    }
                }
            }, {
                key: "isIntersecting_",
                value: function(t) {
                    var e = t.getBoundingClientRect()
                      , n = this.getWindowHeight_()
                      , r = this.getWindowWidth_();
                    return this.isInVerticalView_(e, n) && this.isInHorizontalView_(e, r)
                }
            }, {
                key: "isInHorizontalView_",
                value: function(t, e) {
                    return t.left <= e && t.left + t.width >= 0
                }
            }, {
                key: "isInVerticalView_",
                value: function(t, e) {
                    return t.top <= e && t.top + t.height >= 0
                }
            }, {
                key: "getWindowWidth_",
                value: function() {
                    return this.global_.innerWidth || document.documentElement.clientWidth
                }
            }, {
                key: "getWindowHeight_",
                value: function() {
                    return this.global_.innerHeight || document.documentElement.clientHeight
                }
            }, {
                key: "handleVisibility_",
                value: function(t, e, n) {
                    this.isBuilt_ ? this.dispatchVisibilityTriggered_({
                        id: t,
                        entries: e,
                        observer: n
                    }) : this.cache_.push({
                        id: t,
                        entries: e,
                        observer: n
                    })
                }
            }, {
                key: "dispatchVisibilityTriggered_",
                value: function(t) {
                    var e = t.id
                      , n = t.entries
                      , r = t.observer;
                    this.store_.dispatch(i.a.VISIBILITY_TRIGGERED, {
                        id: e,
                        data: {
                            entries: n,
                            observer: r
                        }
                    })
                }
            }]) && re(e.prototype, n),
            r && re(e, r),
            a
        }(j.a)
          , le = {
            AnalyticsService: N,
            BreakpointService: V.a,
            FeatureDetectionService: J,
            LotteryService: ot,
            LottieService: ht,
            ScrollService: Et,
            SurveyService: Zt,
            VisibilityService: ue
        }
          , fe = ["AnalyticsService", "BreakpointService", "FeatureDetectionService", "LotteryService", "LottieService", "ScrollService", "SurveyService", "VisibilityService"]
          , he = {
            instantiate: function(t) {
                return Promise.all(fe.map((function(e) {
                    return function(t, e) {
                        if (!e.services[t]) {
                            var n = new le[t](e.store,e.apis);
                            e.services[t] = n
                        }
                        return e.services[t].initialize()
                    }(e, t)
                }
                )))
            },
            build: function(t) {
                return Promise.all(Object.keys(t.services).map((function(e) {
                    return t.services[e].build()
                }
                )))
            }
        }
          , de = n(14);
        n(1).BaseComponent.customImageElementTagName = de.tagName;
        var pe = function(t) {
            return new Promise((function(e) {
                var n = t.apis
                  , r = n.global
                  , o = n.document;
                if (r.IntersectionObserver)
                    e();
                else {
                    var i = o.createElement("script");
                    i.src = ["https://www.gstatic.com/external_hosted", "intersectionobserver_polyfill", "intersection-observer.min.js"].join("/"),
                    o.body.appendChild(i),
                    i.onload = function() {
                        e()
                    }
                }
            }
            ))
        }
          , me = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = t.apis.document.documentElement
              , r = t.componentAttributes.general.disableScrollCssClass;
            e ? n.classList.remove(r) : n.classList.add(r)
        }
          , be = function(t) {
            me(t, !0)
        }
          , ye = function(t) {
            me(t)
        }
          , ve = function(t) {
            return Object(r.a)((function() {
                return t.store.subscribe([[i.a.START_SURVEY, function() {
                    return ye(t)
                }
                ], [i.a.CLOSE_SURVEY, function() {
                    return be(t)
                }
                ], [i.a.SHOW_MODAL, function() {
                    return ye(t)
                }
                ], [i.a.CLOSE_MODAL, function() {
                    return be(t)
                }
                ], [i.a.SEARCH_OPENED, function() {
                    return ye(t)
                }
                ], [i.a.SEARCH_CLOSED, function() {
                    return be(t)
                }
                ], [i.a.NAV_SHOWN, function() {
                    return ye(t)
                }
                ], [i.a.NAV_HIDDEN, function() {
                    return function(t) {
                        t.store.state.isSubnavOpened || be(t)
                    }(t)
                }
                ]]),
                t
            }
            ))
        }
          , _e = function(t, e, n, r) {
            if (!t)
                throw new E.c("root","not be null/undefined");
            if (0 === Object.keys(n).length)
                throw new E.c("componentsMap","cannot be empty");
            if (0 === Object.keys(e).length)
                throw new E.c("store","cannot be empty");
            if (0 === Object.keys(r).length)
                throw new E.c("global","cannot be empty")
        }
          , ge = function(t) {
            return new Promise((function(e) {
                t.apis.global.requestAnimationFrame((function() {
                    return function t(e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        r = r || e.apis.document.querySelector("main");
                        var o = e.apis.global.getComputedStyle(r, "::after").getPropertyValue("content").replace(/["']/g, "");
                        "loaded" === o ? n(e) : e.apis.global.requestAnimationFrame((function() {
                            return t(e, n, r)
                        }
                        ))
                    }(t, e)
                }
                ))
            }
            ))
        }
          , we = function(t) {
            return Object(r.a)((function() {
                return _.store = t.store,
                customElements.define(t.componentAttributes.lazyImage.tagName, _),
                t
            }
            ))
        }
          , Ee = function(t) {
            return Object(r.a)((function() {
                var e = t.apis
                  , n = e.global
                  , r = e.document;
                if (n.location.hash.length > 1) {
                    var o = r.getElementById(n.location.hash.substr(1));
                    o && o.scrollIntoView(!0)
                }
            }
            ))
        }
          , Oe = function(t, e, n) {
            var r = e.store
              , o = e.componentsMap
              , i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
            _e(t, r, o, n);
            var a = "data-android-component"
              , c = "global-disable-scroll"
              , s = n.document
              , u = n.navigator
              , l = {
                global: n,
                navigator: u,
                document: s
            }
              , f = {
                componentsMap: o
            }
              , h = {
                lazyImage: {
                    tagName: de.tagName
                },
                androidDataAttribute: a,
                general: {
                    disableScrollCssClass: c
                }
            };
            return {
                store: r,
                root: t,
                throwErr: i,
                componentAttributes: h,
                cache: f,
                apis: l,
                version: "1.0",
                components: new Set([]),
                imagesToBuild: new Set([]),
                services: {}
            }
        }
          , je = {
            start: function(t, e, n) {
                var r = e.store
                  , o = void 0 === r ? {} : r
                  , i = e.componentsMap
                  , c = void 0 === i ? {} : i
                  , s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
                  , u = Oe(t, {
                    store: o,
                    componentsMap: c
                }, n, s);
                return pe(u).then((function() {
                    return Promise.all([ve(u), ge(u), we(u), g.default.images.instantiate(u.root, u), he.instantiate(u)])
                }
                )).then((function() {
                    return Promise.all([g.default.detect(u.root, u), g.default.build(u.imagesToBuild, u)])
                }
                )).then((function() {
                    return he.build(u)
                }
                )).then((function() {
                    return Ee(u)
                }
                )).then((function() {
                    return Object(a.a)("✅ The app has successfully loaded.", u),
                    u
                }
                )).catch((function(t) {
                    if (u.throwErr)
                        throw Object(a.b)("❌ There has been an error."),
                        Object(a.b)("Exception:", t),
                        Object(a.b)("App:", u),
                        t
                }
                ))
            }
        };
        e.a = je
    },
    9: function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return "string" == typeof t
        }
    }
});
(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
    19: function(t, i, e) {
        "use strict";
        e.r(i),
        e.d(i, "Parallaxable", (function() {
            return h
        }
        ));
        var n = e(1)
          , a = e(3);
        function s(t) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function o(t, i) {
            for (var e = 0; e < i.length; e++) {
                var n = i[e];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function r(t, i) {
            return (r = Object.setPrototypeOf || function(t, i) {
                return t.__proto__ = i,
                t
            }
            )(t, i)
        }
        function l(t) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var e, n = _(t);
                if (i) {
                    var a = _(this).constructor;
                    e = Reflect.construct(n, arguments, a)
                } else
                    e = n.apply(this, arguments);
                return c(this, e)
            }
        }
        function c(t, i) {
            return !i || "object" !== s(i) && "function" != typeof i ? u(t) : i
        }
        function u(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function _(t) {
            return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var h = function(t) {
            !function(t, i) {
                if ("function" != typeof i && null !== i)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(i && i.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                i && r(t, i)
            }(c, t);
            var i, e, n, s = l(c);
            function c(t, i) {
                var e;
                return function(t, i) {
                    if (!(t instanceof i))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                (e = s.call(this, t, i)).isAnimating_ = !1,
                e.lastKnownPosition_ = null,
                e.visibilityId_ = "parallaxable-visibility",
                e.parentElement_ = null,
                e.parallaxableRateCssPropertyName_ = "--parallax-rate",
                e.parallaxableNativeRateCssPropertyName_ = "--parallax-native-rate",
                e.parallaxableHideCssClass_ = "parallaxable--hide",
                e.fallbackExecuted_ = !1,
                e.breakpointSizes_ = ["small", "medium", "large", "extra-large"],
                e.observerConfiguration_ = {
                    rootMargin: "100% 100% 100% 100%",
                    threshold: [0, .5, 1]
                },
                e.handleVisibilityCallback_ = e.handleVisibilityCallback_.bind(u(e)),
                e.handleVisibility_ = e.handleVisibility_.bind(u(e)),
                e.handleInvisibility_ = e.handleInvisibility_.bind(u(e)),
                e.getConfigByBreakpoint_ = e.getConfigByBreakpoint_.bind(u(e)),
                e.updateParallaxPosition_ = e.updateParallaxPosition_.bind(u(e)),
                e.setParallaxRateCssProperty_ = e.setParallaxRateCssProperty_.bind(u(e)),
                e
            }
            return i = c,
            (e = [{
                key: "initialize_",
                value: function() {
                    var t = (this.store_.state || 0).currentScrollPosition
                      , i = this.config_.parent ? this.config_.parent : "section";
                    this.parentElement_ = this.element.closest(i),
                    this.usePlainRate_ = this.config_.usePlainRate || !1,
                    this.isWillChangeOff_ = this.config_.isWillChangeOff || !1,
                    this.getConfigByBreakpoint_({}),
                    this.updateParallaxPosition_(t),
                    this.store_.dispatch(this.topics_.TRACK_VISIBILITY, {
                        id: this.visibilityId_,
                        data: {
                            isTrack: !0,
                            config: this.observerConfiguration_,
                            elementsToTrack: [this.element]
                        }
                    }),
                    this.subscriptions_ = [[this.topics_.VISIBILITY_TRIGGERED, this.handleVisibilityCallback_], [this.topics_.BREAKPOINT_CHANGE, this.getConfigByBreakpoint_]]
                }
            }, {
                key: "getConfigByBreakpoint_",
                value: function(t) {
                    var i = this
                      , e = t.currentBreakpoint
                      , n = void 0 === e ? this.store_.state.currentBreakpoint : e;
                    if (!this.fallbackExecuted_) {
                        this.fallbackExecuted_ = !0;
                        var s = this.config_.rate
                          , o = void 0 === s ? .1 : s
                          , r = {
                            rate: o
                        };
                        this.configByBreakpoint_ = this.breakpointSizes_.reduce((function(t, e) {
                            if (i.config_ && i.config_[e] && (r = i.config_[e]),
                            r.rate < -1 || r.rate > 1)
                                throw new a.j(o,e);
                            return t[e] = r,
                            t
                        }
                        ), {})
                    }
                    this.config_ = this.configByBreakpoint_[n],
                    this.lastKnownPosition_ = null,
                    this.config_.isStatic && this.reset_()
                }
            }, {
                key: "updateParallaxPosition_",
                value: function(t) {
                    this.config_.isStatic ? this.handleInvisibility_() : this.setParallaxRateCssProperty_(t)
                }
            }, {
                key: "setParallaxRateCssProperty_",
                value: function(t) {
                    this.lastKnownPosition_ = this.getLastKnownPosition_(),
                    this.element.style.setProperty(this.parallaxableRateCssPropertyName_, this.getParallaxRate_(t))
                }
            }, {
                key: "getLastKnownPosition_",
                value: function() {
                    return null === this.lastKnownPosition_ ? this.getCurrentPosition_() : this.lastKnownPosition_
                }
            }, {
                key: "getCurrentPosition_",
                value: function() {
                    return Math.round(this.global_.pageYOffset + this.parentElement_.getBoundingClientRect().top)
                }
            }, {
                key: "getParallaxRate_",
                value: function(t) {
                    var i = this.config_.rate
                      , e = (t - this.lastKnownPosition_) * i;
                    return this.usePlainRate_ ? e.toFixed(1) : "".concat(e.toFixed(1), "px")
                }
            }, {
                key: "handleVisibility_",
                value: function() {
                    this.isAnimating_ || (!this.isWillChangeOff_ && this.element.style.setProperty("will-change", "transform"),
                    this.element.classList.remove(this.parallaxableHideCssClass_),
                    this.updateParallaxPosition_(this.lastKnownPosition_),
                    this.isAnimating_ = !0),
                    this.store_.subscribe([[this.topics_.SCROLL_POSITION_CHANGE, this.updateParallaxPosition_]])
                }
            }, {
                key: "reset_",
                value: function() {
                    this.element.style.removeProperty("will-change"),
                    this.element.style.removeProperty("transform"),
                    this.isAnimating_ = !1
                }
            }, {
                key: "handleInvisibility_",
                value: function() {
                    this.element.style.removeProperty("will-change"),
                    this.element.classList.add(this.parallaxableHideCssClass_),
                    this.store_.unsubscribe(this.topics_.SCROLL_POSITION_CHANGE, this.updateParallaxPosition_),
                    this.isAnimating_ = !1
                }
            }, {
                key: "handleVisibilityCallback_",
                value: function(t, i) {
                    var e = this
                      , n = i.entries;
                    t === this.visibilityId_ && n.forEach((function(t) {
                        if (t.target === e.element)
                            if (t.isIntersecting && !e.isAnimating_) {
                                var i = e.store_.state.currentScrollPosition;
                                e.lastKnownPosition_ = e.getLastKnownPosition_(i),
                                e.handleVisibility_()
                            } else
                                t.isIntersecting || e.handleInvisibility_()
                    }
                    ))
                }
            }]) && o(i.prototype, e),
            n && o(i, n),
            c
        }(n.BaseComponent)
    }
}]);

(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
    26: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return n
        }
        ));
        var n = {
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESC: 27,
            HOME: 36,
            LEFT: 37,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    },
    44: function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "CarouselCard", (function() {
            return _
        }
        ));
        var n = r(1)
          , o = r(81);
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function u(t) {
            return function(t) {
                if (Array.isArray(t))
                    return a(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                    return Array.from(t)
            }(t) || function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return a(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === r && t.constructor && (r = t.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(t);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return a(t, e)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function a(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++)
                n[r] = t[r];
            return n
        }
        function c(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function s(t, e) {
            return (s = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function l(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var r, n = y(t);
                if (e) {
                    var o = y(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return f(this, r)
            }
        }
        function f(t, e) {
            return !e || "object" !== i(e) && "function" != typeof e ? p(t) : e
        }
        function p(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function y(t) {
            return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var _ = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && s(t, e)
            }(a, t);
            var e, r, n, i = l(a);
            function a(t, e) {
                var r;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a),
                (r = i.call(this, t, e)).isClickable_ = !1,
                r.carouselCardsWrapper_ = r.element.parentElement,
                r.carouselCards_ = [],
                r.carouselCtas_ = [],
                r.loadConfiguration_ = r.loadConfiguration_.bind(p(r)),
                r
            }
            return e = a,
            (r = [{
                key: "onClickCard_",
                value: function(t) {
                    var e = t.currentTarget.querySelector(h.CTA_CARD) || null;
                    e && this.isClickable_ && e.click()
                }
            }, {
                key: "handleKeyFunctions_",
                value: function(t) {
                    switch (t.keyCode) {
                    case o.a.ENTER:
                    case o.a.SPACE:
                        this.onClickCard_(t)
                    }
                }
            }, {
                key: "initialize_",
                value: function() {
                    this.carouselCards_ = u(this.carouselCardsWrapper_.querySelectorAll(h.CARD)),
                    this.carouselCtas_ = u(this.carouselCardsWrapper_.querySelectorAll(h.CTA_CARD)),
                    this.events = {
                        click: this.onClickCard_,
                        keydown: this.handleKeyFunctions_
                    },
                    this.subscriptions_ = [[this.topics_.BREAKPOINT_CHANGE, this.loadConfiguration_]],
                    this.loadConfiguration_({})
                }
            }, {
                key: "loadConfiguration_",
                value: function(t) {
                    var e = t.currentBreakpoint
                      , r = void 0 === e ? this.store_.state.currentBreakpoint : e;
                    this.isClickable_ = this.config_.isClickable[r],
                    this.updateA11ySupport_()
                }
            }, {
                key: "updateA11ySupport_",
                value: function() {
                    this.isClickable_ ? (this.carouselCards_.forEach((function(t) {
                        t.setAttribute(b.TAB_INDEX, "0"),
                        t.setAttribute(b.ROLE, b.ROLE_LINK_VALUE)
                    }
                    )),
                    this.carouselCtas_.forEach((function(t) {
                        t.setAttribute(b.TAB_INDEX, "-1"),
                        t.setAttribute(b.ARIA_HIDDEN, "true")
                    }
                    ))) : (this.carouselCards_.forEach((function(t) {
                        t.removeAttribute(b.TAB_INDEX, "0"),
                        t.removeAttribute(b.ROLE)
                    }
                    )),
                    this.carouselCtas_.forEach((function(t) {
                        t.removeAttribute(b.TAB_INDEX),
                        t.removeAttribute(b.ARIA_HIDDEN)
                    }
                    )))
                }
            }]) && c(e.prototype, r),
            n && c(e, n),
            a
        }(n.BaseComponent)
          , b = {
            ARIA_HIDDEN: "aria-hidden",
            ROLE: "role",
            ROLE_LINK_VALUE: "link",
            TAB_INDEX: "tabindex"
        }
          , h = {
            CARD: ".carousel-slider__card",
            CTA_CARD: ".cta"
        }
    },
    81: function(t, e, r) {
        "use strict";
        var n = r(26);
        r.d(e, "a", (function() {
            return n.a
        }
        ))
    }
}]);
(window.webpackJsonp = window.webpackJsonp || []).push([[12], {
    26: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        }
        ));
        var o = {
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESC: 27,
            HOME: 36,
            LEFT: 37,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    },
    67: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "Search", (function() {
            return p
        }
        ));
        var o = n(1)
          , r = n(81)
          , i = n(12);
        function s(t) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function c(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        function u(t, e) {
            return (u = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function a(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, o = f(t);
                if (e) {
                    var r = f(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return l(this, n)
            }
        }
        function l(t, e) {
            return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function f(t) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var p = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && u(t, e)
            }(l, t);
            var e, n, o, s = a(l);
            function l(t, e) {
                var n;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l),
                (n = s.call(this, t, e)).events = {
                    "click .js-open": n.open_,
                    "click .js-close-search": n.close_,
                    "blur .js-close-search": n.handleFocus_
                },
                n.input = n.element.querySelector(_.INPUT),
                n.button = n.element.querySelector(_.SEARCH),
                n.nav = document.querySelector(_.NAVIGATION),
                n.isOpened_ = !1,
                n.focusInput_,
                n
            }
            return e = l,
            (n = [{
                key: "initialize_",
                value: function() {
                    var t = this;
                    document.addEventListener("keydown", this.onKeydown_.bind(this)),
                    this.close__ = function(e) {
                        return t.close_(e, !1)
                    }
                    ,
                    this.subscriptions_ = [[this.topics_.NAV_SHOWN, this.close__], [this.topics_.NAV_HIDDEN, this.close__]]
                }
            }, {
                key: "handleFocus_",
                value: function() {
                    var t = document.querySelector(_.MAIN_LOGO);
                    this.isOpened_ && t.focus()
                }
            }, {
                key: "onKeydown_",
                value: function(t) {
                    t.keyCode === r.a.ESC && this.close_(t)
                }
            }, {
                key: "open_",
                value: function(t) {
                    var e = this;
                    t.preventDefault(),
                    this.isOpened_ = !0,
                    this.button.type = "submit",
                    this.element.classList.add(h.ACTIVE),
                    this.nav.classList.add(h.HIDE_NAV),
                    this.store_.dispatch(this.topics_.SEARCH_OPENED, {
                        data: t
                    }),
                    this.focusInput_ = this.focusInput_ || function() {
                        return e.input.focus()
                    }
                    ,
                    i.a.requestTimeout(this.focusInput_, 400),
                    this.submit_(),
                    this.store_.state = {
                        isSearchOpened: !0
                    }
                }
            }, {
                key: "removeOpenedClasses_",
                value: function() {
                    this.element.classList.remove(h.ACTIVE),
                    this.nav.classList.remove(h.HIDE_NAV)
                }
            }, {
                key: "close_",
                value: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    t && t.preventDefault(),
                    this.isOpened_ && (this.isOpened_ = !1,
                    this.button.type = "button",
                    this.element.querySelector(_.SEARCH).focus(),
                    e && this.store_.dispatch(this.topics_.SEARCH_CLOSED, {
                        data: t
                    }),
                    this.removeOpenedClasses_(),
                    i.a.clearRequestTimeout(this.focusInput_),
                    this.input.value = "",
                    this.store_.state = {
                        isSearchOpened: !1
                    })
                }
            }, {
                key: "submit_",
                value: function() {
                    var t = encodeURIComponent(this.input.value)
                      , e = this.getAttribute(this.element, y.ACTION)
                      , n = "?q=".concat(t);
                    t.trim().length && (this.global_.location.href = "".concat(e).concat(n))
                }
            }]) && c(e.prototype, n),
            o && c(e, o),
            l
        }(o.BaseComponent)
          , h = {
            ACTIVE: "search-default--open",
            HIDE_NAV: "header-default--search-open"
        }
          , _ = {
            BODY: "body",
            INPUT: ".js-input",
            MAIN_LOGO: ".js-logo",
            NAVIGATION: ".header-default",
            SEARCH: ".js-open"
        }
          , y = {
            ACTION: "action"
        }
    },
    81: function(t, e, n) {
        "use strict";
        var o = n(26);
        n.d(e, "a", (function() {
            return o.a
        }
        ))
    }
}]);
(window.webpackJsonp = window.webpackJsonp || []).push([[16, 115], {
    102: function(t, e, i) {
        "use strict";
        i.r(e),
        i.d(e, "getAnimationTiming", (function() {
            return s
        }
        ));
        var s = function(t, e) {
            return {
                easeOutQuint: r,
                easeInOutCubic: n
            }[t](e.elapsedTime, e.startPosition, e.endPosition, e.duration)
        }
          , n = function(t, e, i, s) {
            return (t /= s / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e
        }
          , r = function(t, e, i, s) {
            return t /= s,
            i * (--t * t * t * t * t + 1) + e
        }
    },
    62: function(t, e, i) {
        "use strict";
        i.r(e),
        i.d(e, "ProgressBar", (function() {
            return y
        }
        ));
        var s = i(1)
          , n = i(3)
          , r = i(0)
          , o = i(8)
          , l = i(102);
        function a(t) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function c(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                i.push.apply(i, s)
            }
            return i
        }
        function u(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(Object(i), !0).forEach((function(e) {
                    _(t, e, i[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }
                ))
            }
            return t
        }
        function _(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
            t
        }
        function h(t, e) {
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(t, s.key, s)
            }
        }
        function f(t, e) {
            return (f = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function b(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, s = p(t);
                if (e) {
                    var n = p(this).constructor;
                    i = Reflect.construct(s, arguments, n)
                } else
                    i = s.apply(this, arguments);
                return d(this, i)
            }
        }
        function d(t, e) {
            return !e || "object" !== a(e) && "function" != typeof e ? g(t) : e
        }
        function g(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function p(t) {
            return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var y = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && f(t, e)
            }(c, t);
            var e, i, s, a = b(c);
            function c(t, e) {
                var i;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                (i = a.call(this, t, e)).config_ = i.processDefaultConfigurations_(),
                i.configByBreakpoint_ = null,
                i.isTicking_ = !1,
                i.lastKnownScrollProgress_ = 0,
                i.blockCssClass_ = "carousel-progress",
                i.nextButtonCssClass_ = "".concat(i.blockCssClass_, "__next"),
                i.backButtonCssClass_ = "".concat(i.blockCssClass_, "__back"),
                i.visibleCssClass_ = "".concat(i.blockCssClass_, "--visible"),
                i.originCssClass_ = "".concat(i.blockCssClass_, "--origin"),
                i.destinationCssClass_ = "".concat(i.blockCssClass_, "--destination"),
                i.buttonsShownCssClass_ = "".concat(i.blockCssClass_, "--buttons-shown"),
                i.start_ = null,
                i.animationDuration_ = 750,
                i.animationTiming_ = "easeOutQuint",
                i.currentBreakpoint_ = "",
                i.carousel_ = null,
                i.progressBar_ = null,
                i.nextButton_ = null,
                i.backButton_ = null,
                i.horizontalScrollTrackingTimeout_ = null,
                i.render_ = i.render_.bind(g(i)),
                i.handleVisibility_ = i.handleVisibility_.bind(g(i)),
                i.setProgressBarState_ = i.setProgressBarState_.bind(g(i)),
                i
            }
            return e = c,
            (i = [{
                key: "initialize_",
                value: function() {
                    var t = this
                      , e = this.element;
                    if (this.carousel_ = e.parentNode.querySelector("#".concat(this.config_.id)),
                    this.progressBar_ = e.querySelector("progress"),
                    this.nextButton_ = e.querySelector(".".concat(this.nextButtonCssClass_)),
                    this.backButton_ = e.querySelector(".".concat(this.backButtonCssClass_)),
                    !this.carousel_)
                        throw new n.d;
                    this.nextButton_.addEventListener("click", (function(e) {
                        return t.handleScrollByClick_(e)
                    }
                    )),
                    this.backButton_.addEventListener("click", (function(e) {
                        return t.handleScrollByClick_(e, !1)
                    }
                    )),
                    this.trackComponentVisibility_((function() {
                        return t.handleVisibility_()
                    }
                    ), null, {
                        rootMargin: "350px 0px 350px 0px",
                        threshold: 0
                    }),
                    this.carousel_.addEventListener("scroll", (function(e) {
                        return t.setProgressBarState_(e)
                    }
                    )),
                    this.subscriptions_ = [[this.topics_.BREAKPOINT_CHANGE, this.render_], [this.topics_.WINDOW_RESIZE_ENDED, this.setProgressBarState_]],
                    this.render_({})
                }
            }, {
                key: "isVisible_",
                value: function() {
                    return this.carousel_.scrollWidth !== this.carousel_.offsetWidth
                }
            }, {
                key: "setProgressBarState_",
                value: function(t) {
                    var e = this;
                    this.isTicking_ || this.global_.requestAnimationFrame((function() {
                        var i = e.lastKnownScrollProgress_
                          , s = e.carousel_.offsetWidth - e.carousel_.scrollLeft
                          , n = e.carousel_.offsetWidth + e.carousel_.scrollLeft;
                        e.lastKnownScrollProgress_ = 1 * (("rtl" == document.dir ? s : n) / e.carousel_.scrollWidth * 100).toFixed(2),
                        e.global_.clearTimeout(e.horizontalScrollTrackingTimeout_),
                        e.progressBar_.value = e.lastKnownScrollProgress_,
                        e.toggleArrowsActivation_(),
                        e.isTicking_ = !1,
                        e.horizontalScrollTrackingTimeout_ = e.global_.setTimeout((function() {
                            e.dispatchHorizontalScrollEvent_(i, t)
                        }
                        ), 500)
                    }
                    )),
                    this.isTicking_ = !0
                }
            }, {
                key: "dispatchHorizontalScrollEvent_",
                value: function(t, e) {
                    var i = "left";
                    t > this.lastKnownScrollProgress_ && (i = "right"),
                    this.store_.dispatch(r.a.GA_TRACK_EVENT, {
                        data: {
                            event: e,
                            direction: i
                        },
                        id: o.a.SCROLL_H
                    })
                }
            }, {
                key: "calculateScrollDistance_",
                value: function() {
                    return this.carousel_.firstElementChild.offsetWidth * this.configByBreakpoint_.scrollBy
                }
            }, {
                key: "handleScrollByClick_",
                value: function(t) {
                    var e = this
                      , i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if (t.preventDefault(),
                    !this.start_) {
                        this.currentXOffset_ = Math.round(this.carousel_.scrollLeft),
                        this.scrollDistance_ = this.calculateScrollDistance_();
                        var s = this.currentXOffset_ % this.scrollDistance_;
                        this.scrollDistance_ = i ? Math.abs(this.scrollDistance_ - s) : -Math.abs(s || this.scrollDistance_),
                        this.global_.requestAnimationFrame((function(t) {
                            return e.scrollHorizontally_(t)
                        }
                        ))
                    }
                }
            }, {
                key: "scrollHorizontally_",
                value: function(t) {
                    var e = this;
                    this.start_ = this.start_ || t;
                    var i = t - this.start_
                      , s = {
                        elapsedTime: i,
                        startPosition: this.currentXOffset_,
                        endPosition: this.scrollDistance_,
                        duration: this.configByBreakpoint_.animationDuration
                    }
                      , n = Object(l.getAnimationTiming)(this.animationTiming_, s);
                    this.carousel_.scrollLeft = n,
                    i <= this.configByBreakpoint_.animationDuration + 5 ? this.global_.requestAnimationFrame((function(t) {
                        return e.scrollHorizontally_(t)
                    }
                    )) : this.start_ = null
                }
            }, {
                key: "render_",
                value: function(t) {
                    var e = t.currentBreakpoint
                      , i = void 0 === e ? this.store_.state.currentBreakpoint : e;
                    this.getConfigurations_(i),
                    this.configByBreakpoint_.showArrows ? this.element.classList.add(this.buttonsShownCssClass_) : this.element.classList.remove(this.buttonsShownCssClass_),
                    this.toggleVisibility_()
                }
            }, {
                key: "getConfigurations_",
                value: function(t) {
                    this.currentBreakpoint_ = t,
                    this.configByBreakpoint_ = this.config_[this.currentBreakpoint_],
                    this.scrollDistance_ = this.calculateScrollDistance_()
                }
            }, {
                key: "toggleArrowsActivation_",
                value: function() {
                    0 === this.carousel_.scrollLeft ? (this.element.classList.add(this.originCssClass_),
                    this.backButton_.setAttribute("disabled", !0)) : Math.round(this.carousel_.offsetWidth + this.carousel_.scrollLeft) >= this.carousel_.scrollWidth ? (this.element.classList.add(this.destinationCssClass_),
                    this.nextButton_.setAttribute("disabled", !0)) : (this.element.classList.remove(this.originCssClass_),
                    this.element.classList.remove(this.destinationCssClass_),
                    this.backButton_.removeAttribute("disabled"),
                    this.nextButton_.removeAttribute("disabled"))
                }
            }, {
                key: "handleVisibility_",
                value: function() {
                    this.setProgressBarState_()
                }
            }, {
                key: "toggleVisibility_",
                value: function() {
                    this.isVisible_() ? this.element.classList.add(this.visibleCssClass_) : this.element.classList.remove(this.visibleCssClass_)
                }
            }, {
                key: "processDefaultConfigurations_",
                value: function() {
                    var t = u({}, this.config_);
                    return t.small = u(u({}, {
                        scrollBy: 1,
                        animationDuration: 500
                    }), this.config_.small),
                    t.medium = u(u({}, {
                        scrollBy: 2,
                        animationDuration: 700
                    }), this.config_.medium),
                    t.large = u(u({}, {
                        scrollBy: 2,
                        animationDuration: 900
                    }), this.config_.large),
                    t["extra-large"] = u(u({}, {
                        scrollBy: 2,
                        animationDuration: 900
                    }), this.config_["extra-large"]),
                    t
                }
            }]) && h(e.prototype, i),
            s && h(e, s),
            c
        }(s.BaseComponent)
    }
}]);
(window.webpackJsonp = window.webpackJsonp || []).push([[34], {
    50: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "Footer", (function() {
            return y
        }
        ));
        var r = n(1)
          , o = n(4);
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function a(t) {
            return function(t) {
                if (Array.isArray(t))
                    return c(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                    return Array.from(t)
            }(t) || function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return c(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return c(t, e)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function c(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
        function u(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function s(t, e) {
            return (s = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function f(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = b(t);
                if (e) {
                    var o = b(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return l(this, n)
            }
        }
        function l(t, e) {
            return !e || "object" !== i(e) && "function" != typeof e ? p(t) : e
        }
        function p(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function b(t) {
            return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var y = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && s(t, e)
            }(c, t);
            var e, n, r, i = f(c);
            function c(t, e) {
                var n, r, a, u;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                (n = i.call(this, t, e)).breakpoints_ = new o.c,
                n.navitems_ = [],
                n.events = (r = {},
                a = "".concat(m.CLICK, " ").concat(h.NAV_ITEM),
                u = n.actionsAccordion_,
                a in r ? Object.defineProperty(r, a, {
                    value: u,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[a] = u,
                r),
                n.breakpoints_.onChange((function(t) {
                    return n.actionsAccordion_(t)
                }
                )),
                n.handleCookieBannerInteraction_ = n.handleCookieBannerInteraction_.bind(p(n)),
                n
            }
            return e = c,
            (n = [{
                key: "initialize_",
                value: function() {
                    this.navitems_ = a(this.element.querySelectorAll(h.NAV_ITEM)),
                    this.updateFooterMenu_(),
                    this.subscribeEvents_()
                }
            }, {
                key: "updateFooterMenu_",
                value: function() {
                    this.breakpoints_.current().breakpoint >= o.a.desktop ? this.navitems_.forEach((function(t) {
                        o.f.setState(t, o.f.State.EXPANDED, !0),
                        t.setAttribute("disabled", !0)
                    }
                    )) : this.navitems_.forEach((function(t) {
                        o.f.setState(t, o.f.State.EXPANDED, !1),
                        t.removeAttribute("disabled")
                    }
                    ))
                }
            }, {
                key: "actionsAccordion_",
                value: function(t) {
                    if (m.CLICK === t.type) {
                        var e = this.breakpoints_.current().breakpoint
                          , n = t.currentTarget
                          , r = e <= o.a.tablet
                          , i = n.nextElementSibling
                          , a = i.classList.contains(_.SUBITEM_CONTAINER)
                          , c = n.getAttribute(o.f.State.EXPANDED);
                        c = JSON.parse(c),
                        r && a && (o.f.setState(n, o.f.State.EXPANDED, !c),
                        o.f.setState(i, o.f.State.HIDDEN, c))
                    } else
                        this.updateFooterMenu_()
                }
            }, {
                key: "handleCookieBannerInteraction_",
                value: function(t) {
                    var e = t.isShown
                      , n = t.height;
                    this.element.style.setProperty("padding-bottom", e ? "".concat(n, "px") : 0)
                }
            }, {
                key: "subscribeEvents_",
                value: function() {
                    this.store_.subscribe([[this.topics_.COOKIE_BANNER_INTERACTION, this.handleCookieBannerInteraction_]])
                }
            }]) && u(e.prototype, n),
            r && u(e, r),
            c
        }(r.BaseComponent)
          , h = {
            NAV_ITEM: ".js-nav-item",
            MENU_BAR: ".js-footer-menubar",
            MENU_ITEM: ".js-footer-menuitem"
        }
          , _ = {
            SUBITEM_CONTAINER: "js-subitem-container"
        }
          , m = {
            CLICK: "click"
        }
    }
}]);
(window.webpackJsonp = window.webpackJsonp || []).push([[35], {
    51: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "Header", (function() {
            return p
        }
        ));
        var i = n(1)
          , o = n(12)
          , r = n(8);
        function s(t) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function a(t) {
            return function(t) {
                if (Array.isArray(t))
                    return l(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                    return Array.from(t)
            }(t) || function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return l(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return l(t, e)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function l(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++)
                i[n] = t[n];
            return i
        }
        function c(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function u(t, e) {
            return (u = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function h(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, i = _(t);
                if (e) {
                    var o = _(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return d(this, n)
            }
        }
        function d(t, e) {
            return !e || "object" !== s(e) && "function" != typeof e ? f(t) : e
        }
        function f(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function _(t) {
            return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var p = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && u(t, e)
            }(l, t);
            var e, n, i, s = h(l);
            function l(t, e) {
                var n;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l),
                (n = s.call(this, t, e)).events = {
                    "click .js-hamburger": n.showNav_,
                    "click .js-close": n.hideNav_,
                    "blur .js-language-selector": n.handleFocus_,
                    "focus .header-default__wrapper a": n.showHeader_
                },
                n.lastKnownScrollPosition_ = 0,
                n.transparencyTimeout_ = null,
                n.isScrollingDown_ = !1,
                n.isHeaderLoadedFirstTime_ = !1,
                n.handleBreakpointChange_ = n.handleBreakpointChange_.bind(f(n)),
                n.onScrollHandler_ = n.onScrollHandler_.bind(f(n)),
                n
            }
            return e = l,
            (n = [{
                key: "initialize_",
                value: function() {
                    var t = this;
                    this.tabbable = a(this.element.querySelectorAll("a")),
                    this.element.addEventListener("click", (function(e) {
                        t.handleOverlay_(e)
                    }
                    )),
                    this.mainLogo = this.element.querySelector(m.MAIN_LOGO),
                    this.subscriptions_.push([this.topics_.BREAKPOINT_CHANGE, this.handleBreakpointChange_]),
                    this.handleBreakpointChange_({}),
                    this.handleStickyBehavior_(),
                    this.isHeaderLoadedFirstTime_ = !0
                }
            }, {
                key: "showNav_",
                value: function(t) {
                    var e = this;
                    this.isOpen_ = !0,
                    this.element.classList.add(y.OPEN),
                    this.store_.dispatch(this.topics_.NAV_SHOWN, {
                        data: t
                    }),
                    o.a.requestTimeout((function() {
                        e.mainLogo.focus()
                    }
                    ), 5)
                }
            }, {
                key: "handleOverlay_",
                value: function(t) {
                    t.target === this.element && this.hideNav_(t)
                }
            }, {
                key: "handleFocus_",
                value: function() {
                    this.isOpen_ && this.mainLogo.focus()
                }
            }, {
                key: "hideNav_",
                value: function(t) {
                    var e = this.element.querySelector(m.HAMBURGER);
                    t && (t.preventDefault(),
                    t.stopPropagation()),
                    this.isOpen_ = !1,
                    this.element.classList.remove(y.OPEN),
                    e.focus(),
                    this.store_.dispatch(this.topics_.NAV_HIDDEN, {
                        data: t
                    }),
                    this.store_.dispatch(this.topics_.GA_TRACK_EVENT, {
                        data: t,
                        id: r.a.CLICK
                    })
                }
            }, {
                key: "onScrollHandler_",
                value: function(t) {
                    this.isOpen_ || this.store_.state.isSearchOpened || (this.updateScrollPosition_(t),
                    this.lastKnownScrollPosition_ = t)
                }
            }, {
                key: "updateScrollPosition_",
                value: function(t) {
                    this.isScrollingDown_ === this.store_.state.isScrollingDown && 0 !== t || (this.shouldHandleScrollDown_(t) ? this.handleScrollDown_(t) : this.shouldHandleScrollUp_(t) && this.handleScrollUp_(t),
                    this.store_.dispatch(this.topics_.NAV_SCROLL_CHANGE, {}))
                }
            }, {
                key: "shouldHandleScrollUp_",
                value: function(t) {
                    return t < this.lastKnownScrollPosition_ && this.isScrollingDown_ || 0 === t
                }
            }, {
                key: "shouldHandleScrollDown_",
                value: function(t) {
                    return t > this.lastKnownScrollPosition_ && !this.isScrollingDown_
                }
            }, {
                key: "handleScrollDown_",
                value: function(t) {
                    var e = this;
                    0 === this.lastKnownScrollPosition_ && t > 0 && !this.isHeaderLoadedFirstTime_ ? (this.store_.state = {
                        isHeaderVisible: !0
                    },
                    this.isScrollingDown_ = !1) : (this.element.classList.add(y.FIXED),
                    this.element.classList.add(y.HIDDEN),
                    this.element.style.transform = "translateY(-".concat(S, "px)"),
                    this.config_.isLegacy && (document.body.style.paddingTop = "".concat(S, "px")),
                    this.store_.state = {
                        isHeaderVisible: !1
                    },
                    this.isScrollingDown_ = !0),
                    t > 0 && (this.transparencyTimeout_ = setTimeout((function() {
                        e.element.classList.add(y.IN_TRANSITION)
                    }
                    ), this.isHeaderLoadedFirstTime_ ? 500 : 0))
                }
            }, {
                key: "handleScrollUp_",
                value: function(t) {
                    this.element.style.transform = "",
                    this.element.classList.remove(y.HIDDEN),
                    0 === t && (clearTimeout(this.transparencyTimeout_),
                    this.element.classList.remove(y.FIXED),
                    this.element.classList.remove(y.IN_TRANSITION),
                    this.config_.isLegacy && (document.body.style.paddingTop = "0")),
                    this.isScrollingDown_ = !1,
                    this.store_.state = {
                        isHeaderVisible: !0
                    }
                }
            }, {
                key: "showHeader_",
                value: function() {
                    var t = this.store_.state.currentScrollPosition;
                    this.element.style.transform = "",
                    t > 0 && this.element.classList.add(y.IN_TRANSITION)
                }
            }, {
                key: "handleBreakpointChange_",
                value: function(t) {
                    var e = t.currentBreakpoint
                      , n = void 0 === e ? this.store_.state.currentBreakpoint : e;
                    "large" !== n && "extra-large" !== n || this.hideNav_()
                }
            }, {
                key: "handleStickyBehavior_",
                value: function() {
                    this.config_.isSticky && (this.subscriptions_.push([this.topics_.SCROLL_POSITION_CHANGE, this.onScrollHandler_]),
                    this.onScrollHandler_(this.global_.pageYOffset))
                }
            }]) && c(e.prototype, n),
            i && c(e, i),
            l
        }(i.BaseComponent)
          , y = {
            FIXED: "header-default--fixed",
            IN_TRANSITION: "header-default--in-transition",
            OPEN: "header-default--nav-open",
            SEARCH_OPEN: "search-default--open",
            HIDDEN: "header-default--hidden",
            TRANSPARENT: "header-default--transparent"
        }
          , m = {
            BODY: "body",
            HAMBURGER: ".js-hamburger",
            LINK: ".cta",
            MAIN_LOGO: ".js-logo",
            SEARCH: ".js-search"
        }
          , S = 70
    }
}]);
(window.webpackJsonp = window.webpackJsonp || []).push([[37], {
    54: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "LanguageSelector", (function() {
            return s
        }
        ));
        var r = n(1)
          , o = n(8);
        function c(t) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function u(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function i(t, e) {
            return (i = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function a(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = l(t);
                if (e) {
                    var o = l(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return f(this, n)
            }
        }
        function f(t, e) {
            return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function l(t) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var s = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && i(t, e)
            }(f, t);
            var e, n, r, c = a(f);
            function f(t, e) {
                var n, r, o, u;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, f),
                (n = c.call(this, t, e)).events = (r = {},
                o = "change ".concat(p.SELECT),
                u = n.handleChange_,
                o in r ? Object.defineProperty(r, o, {
                    value: u,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = u,
                r),
                n
            }
            return e = f,
            (n = [{
                key: "handleChange_",
                value: function(t) {
                    var e = t.target
                      , n = {
                        target: e.options[e.selectedIndex],
                        type: o.a.CLICK
                    };
                    this.store_.dispatch(this.topics_.GA_TRACK_EVENT, {
                        data: n,
                        id: o.a.CLICK
                    }),
                    this.global_.location.href = e.value
                }
            }]) && u(e.prototype, n),
            r && u(e, r),
            f
        }(r.BaseComponent)
          , p = {
            SELECT: ".js-language-selector"
        }
    }
}]);
(window.webpackJsonp = window.webpackJsonp || []).push([[70, 1, 105], {
    171: function(t, e, n) {
        "use strict";
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function o(t, e) {
            return (o = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function c(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = i(t);
                if (e) {
                    var o = i(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return u(this, n)
            }
        }
        function u(t, e) {
            return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function i(t) {
            return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        n.r(e),
        n.d(e, "HeroFeatured", (function() {
            return f
        }
        ));
        var f = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && o(t, e)
            }(n, t);
            var e = c(n);
            function n(t, r) {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                e.call(this, t, r)
            }
            return n
        }(n(91).BaseHero)
    },
    18: function(t, e, n) {
        "use strict";
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function c(t, e, n) {
            return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var r = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = a(t)); )
                        ;
                    return t
                }(t, e);
                if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, e);
                    return o.get ? o.get.call(n) : o.value
                }
            }
            )(t, e, n || t)
        }
        function u(t, e) {
            return (u = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function i(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = a(t);
                if (e) {
                    var o = a(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return f(this, n)
            }
        }
        function f(t, e) {
            return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function a(t) {
            return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        n.r(e),
        n.d(e, "ImageWaitable", (function() {
            return s
        }
        ));
        var s = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && u(t, e)
            }(s, t);
            var e, n, r, f = i(s);
            function s(t, e) {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, s),
                f.call(this, t, e)
            }
            return e = s,
            (n = [{
                key: "imagesHaveLoaded_",
                value: function() {}
            }, {
                key: "build",
                value: function(t) {
                    var e = this;
                    return c(a(s.prototype), "build", this).call(this, t).then((function() {
                        return e.waitForImagesToLoad_().then((function() {
                            return e.imagesHaveLoaded_()
                        }
                        )),
                        e
                    }
                    ))
                }
            }]) && o(e.prototype, n),
            r && o(e, r),
            s
        }(n(1).BaseComponent)
    },
    91: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "BaseHero", (function() {
            return p
        }
        ));
        var r = n(18)
          , o = n(12);
        function c(t) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function u(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function f(t, e) {
            return (f = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function a(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = l(t);
                if (e) {
                    var o = l(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return s(this, n)
            }
        }
        function s(t, e) {
            return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function l(t) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var p = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && f(t, e)
            }(s, t);
            var e, n, r, c = a(s);
            function s(t, e) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
                return u(this, s),
                (n = c.call(this, t, e)).blockCssClass_ = n.config_.blockCssClass,
                n.loadedModifierCssClass_ = "".concat(n.blockCssClass_, "--loaded"),
                n.scrollableModifierCssClass_ = "".concat(n.blockCssClass_, "--scrollable"),
                n.timeout_ = r,
                n
            }
            return e = s,
            (n = [{
                key: "imagesHaveLoaded_",
                value: function() {
                    var t = this;
                    this.element.classList.add(this.loadedModifierCssClass_),
                    o.a.requestTimeout((function() {
                        t.element.classList.add(t.scrollableModifierCssClass_)
                    }
                    ), this.timeout_)
                }
            }]) && i(e.prototype, n),
            r && i(e, r),
            s
        }(r.ImageWaitable)
    }
}]);
(window.webpackJsonp = window.webpackJsonp || []).push([[94, 1], {
    126: function(t, e, n) {
        "use strict";
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function c(t, e) {
            return (c = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function i(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = a(t);
                if (e) {
                    var o = a(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return u(this, n)
            }
        }
        function u(t, e) {
            return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function a(t) {
            return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        n.r(e),
        n.d(e, "IntroducingA12", (function() {
            return s
        }
        ));
        var s = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && c(t, e)
            }(a, t);
            var e, n, r, u = i(a);
            function a(t, e) {
                var n;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a),
                (n = u.call(this, t, e)).blockCssClass_ = n.config_.blockCssClass,
                n.loadedCssClass_ = "".concat(n.blockCssClass_, "--loaded"),
                n.deviceWrapperCssClass_ = ".".concat(n.blockCssClass_, "__device"),
                n.animationEndCssClass_ = "".concat(n.blockCssClass_, "--animation-end"),
                n.devicesWrapperElement_ = null,
                n
            }
            return e = a,
            (n = [{
                key: "imagesHaveLoaded_",
                value: function() {
                    var t = this;
                    this.devicesWrapperElement_ = this.element.querySelector(this.deviceWrapperCssClass_),
                    this.element.addEventListener("transitionend", (function(e) {
                        e.target === t.devicesWrapperElement_ && t.element.classList.add(t.animationEndCssClass_)
                    }
                    )),
                    this.element.classList.add(this.loadedCssClass_)
                }
            }]) && o(e.prototype, n),
            r && o(e, r),
            a
        }(n(18).ImageWaitable)
    },
    18: function(t, e, n) {
        "use strict";
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function c(t, e, n) {
            return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var r = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t)); )
                        ;
                    return t
                }(t, e);
                if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, e);
                    return o.get ? o.get.call(n) : o.value
                }
            }
            )(t, e, n || t)
        }
        function i(t, e) {
            return (i = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function u(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = s(t);
                if (e) {
                    var o = s(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return a(this, n)
            }
        }
        function a(t, e) {
            return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function s(t) {
            return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        n.r(e),
        n.d(e, "ImageWaitable", (function() {
            return f
        }
        ));
        var f = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && i(t, e)
            }(f, t);
            var e, n, r, a = u(f);
            function f(t, e) {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, f),
                a.call(this, t, e)
            }
            return e = f,
            (n = [{
                key: "imagesHaveLoaded_",
                value: function() {}
            }, {
                key: "build",
                value: function(t) {
                    var e = this;
                    return c(s(f.prototype), "build", this).call(this, t).then((function() {
                        return e.waitForImagesToLoad_().then((function() {
                            return e.imagesHaveLoaded_()
                        }
                        )),
                        e
                    }
                    ))
                }
            }]) && o(e.prototype, n),
            r && o(e, r),
            f
        }(n(1).BaseComponent)
    }
}]);
(window.webpackJsonp = window.webpackJsonp || []).push([[110], {
    105: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, "CookieBannerDefault", (function() {
            return p
        }
        ));
        var o = i(1)
          , n = i(82)
          , r = i(363)
          , a = i(12);
        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function s(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        function u(e, t) {
            return (u = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function l(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i, o = _(e);
                if (t) {
                    var n = _(this).constructor;
                    i = Reflect.construct(o, arguments, n)
                } else
                    i = o.apply(this, arguments);
                return f(this, i)
            }
        }
        function f(e, t) {
            return !t || "object" !== c(t) && "function" != typeof t ? h(e) : t
        }
        function h(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function _(e) {
            return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var p = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && u(e, t)
            }(f, e);
            var t, i, o, c = l(f);
            function f(e, t) {
                var i;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, f),
                (i = c.call(this, e, t)).pageLocale_ = "",
                i.dao_ = null,
                i.generateCookieName_ = i.generateCookieName_.bind(h(i)),
                i.validateCookie_ = i.validateCookie_.bind(h(i)),
                i.cookieBannerHideTimeout_ = 800,
                i.dispatchVisibilityEvent_ = i.dispatchVisibilityEvent_.bind(h(i)),
                i.destroy_ = i.destroy_.bind(h(i)),
                i
            }
            return t = f,
            (i = [{
                key: "initialize_",
                value: function() {
                    var e, t, i;
                    this.pageLocale_ = r.a.getPageLocale(),
                    this.dao_ = n.a.get("short-term"),
                    this.events = (e = {},
                    t = "".concat(y.CLICK, " ").concat(d.CTA),
                    i = this.hideCookieBanner_,
                    t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i,
                    e),
                    this.subscribeToEvents_(),
                    this.validateCookie_()
                }
            }, {
                key: "setCookie_",
                value: function() {
                    var e = this.getCookieExpirationTime_();
                    this.dao_.save(this.generateCookieName_(), "true", e)
                }
            }, {
                key: "getCookieExpirationTime_",
                value: function() {
                    var e = new Date
                      , t = k.EXPIRATION_DAYS * k.DAY * k.HOUR * k.MINUTE * k.SECOND
                      , i = e.getTime() + t;
                    return e.setTime(i),
                    e
                }
            }, {
                key: "getCookie_",
                value: function() {
                    return this.dao_.read(this.generateCookieName_())
                }
            }, {
                key: "generateCookieName_",
                value: function() {
                    return "".concat(v.NAME, "_").concat(this.pageLocale_.replace("-", "_").toUpperCase())
                }
            }, {
                key: "validateCookie_",
                value: function() {
                    var e = this.generateCookieName_()
                      , t = this.dao_.read(e);
                    this.element.style = {},
                    t ? (this.element.parentNode.removeChild(this.element),
                    this.acceptCookieConsent_()) : (this.element.classList.add(b.SHOW_BANNER),
                    this.dispatchVisibilityEvent_(!0))
                }
            }, {
                key: "hideCookieBanner_",
                value: function() {
                    this.setCookie_(),
                    this.element.classList.remove(b.SHOW_BANNER),
                    this.dispatchVisibilityEvent_(!1),
                    a.a.requestTimeout(this.destroy_, this.cookieBannerHideTimeout_)
                }
            }, {
                key: "destroy_",
                value: function() {
                    this.element.parentNode.removeChild(this.element),
                    this.acceptCookieConsent_()
                }
            }, {
                key: "acceptCookieConsent_",
                value: function() {
                    this.store_.state = {
                        isCookieConsentAccepted: !0
                    }
                }
            }, {
                key: "dispatchVisibilityEvent_",
                value: function(e) {
                    this.store_.dispatch(this.topics_.COOKIE_BANNER_INTERACTION, {
                        data: {
                            height: parseInt(this.element.offsetHeight),
                            isShown: e
                        }
                    })
                }
            }, {
                key: "subscribeToEvents_",
                value: function() {
                    this.subscriptions_ = [[this.topics_.WINDOW_RESIZE_ENDED, this.dispatchVisibilityEvent_]]
                }
            }]) && s(t.prototype, i),
            o && s(t, o),
            f
        }(o.BaseComponent)
          , y = {
            CLICK: "click"
        }
          , d = {
            CTA: ".js-cookie-banner"
        }
          , b = {
            SHOW_BANNER: "cookie-banner--show"
        }
          , v = {
            NAME: "cba"
        }
          , k = {
            EXPIRATION_DAYS: 365,
            DAY: 24,
            HOUR: 60,
            MINUTE: 60,
            SECOND: 1e3
        }
    },
    363: function(e, t, i) {
        "use strict";
        t.a = {
            getPageLocale: function() {
                var e = window.location.pathname.replace(/(.*intl\/)(.*?)|(\/.*)/gm, "");
                return "" === e ? "EN_US" : e
            }
        }
    }
}]);
