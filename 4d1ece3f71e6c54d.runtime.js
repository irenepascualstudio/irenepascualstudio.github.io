(() => {
  "use strict";
  var e,
    r,
    t,
    n,
    f,
    s = {},
    i = {};
  function c(e) {
    var r = i[e];
    if (void 0 !== r) return r.exports;
    var t = (i[e] = { id: e, loaded: !1, exports: {} });
    return s[e].call(t.exports, t, t.exports, c), (t.loaded = !0), t.exports;
  }
  (c.m = s),
    (c.amdD = function () {
      throw new Error("define cannot be used indirect");
    }),
    (c.amdO = {}),
    (e = []),
    (c.O = (r, t, n, f) => {
      if (!t) {
        var s = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [t, n, f] = e[u], i = !0, a = 0; a < t.length; a++)
            if (
              (!1 & f || s >= f) &&
              Object.keys(c.O).every((e) => c.O[e](t[a]))
            )
              t.splice(a--, 1);
            else if (((i = !1), f < s)) s = f;
          if (i) {
            e.splice(u--, 1);
            var o = n();
            if (void 0 !== o) r = o;
          }
        }
        return r;
      } else {
        f = f || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > f; u--) e[u] = e[u - 1];
        e[u] = [t, n, f];
      }
    }),
    (c.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return c.d(r, { a: r }), r;
    }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (c.t = function (e, n) {
      if (1 & n) e = this(e);
      if (8 & n) return e;
      if ("object" == typeof e && e) {
        if (4 & n && e.__esModule) return e;
        if (16 & n && "function" == typeof e.then) return e;
      }
      var f = Object.create(null);
      c.r(f);
      var s = {};
      r = r || [null, t({}), t([]), t(t)];
      for (var i = 2 & n && e; "object" == typeof i && !~r.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach((r) => (s[r] = () => e[r]));
      return (s.default = () => e), c.d(f, s), f;
    }),
    (c.d = (e, r) => {
      for (var t in r)
        if (c.o(r, t) && !c.o(e, t))
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (c.f = {}),
    (c.e = (e) =>
      Promise.all(Object.keys(c.f).reduce((r, t) => (c.f[t](e, r), r), []))),
    (c.u = (e) => {
      if (8042 === e) return "ba655adda20a53e6.js";
      if (1374 === e) return "c6ec4d5a6593431e.js";
      if (869 === e) return "96c46da0f66c98d2.js";
      if (5465 === e) return "41e873ffa4d484b9.vendor.js";
      if (3741 === e) return "cee7dfd54cf2ba25.vendor.js";
      if (1697 === e) return "d5d9eda3f5486519.js";
      if (3772 === e) return "0159fbbb933936d6.js";
      if (4043 === e) return "4b686f63c53900e5.vendor.js";
      if (1761 === e) return "63b5d1e48591bd18.vendor.js";
      if (1755 === e) return "9d35c8ce1b5795b4.js";
      if (3139 === e) return "75ead20c54f42524.js";
      if (8340 === e) return "87ec39616e33bb55.js";
      if (3369 === e) return "0c5c47700d723e8d.js";
      if (3842 === e) return "eb6281d4dd0ab3a3.js";
      if (6394 === e) return "14db1f9f618b6023.js";
      if (7033 === e) return "89e4740bdabb652a.js";
      if (1033 === e) return "e8e91144db5e752c.js";
      if (7717 === e) return "514865d09cf45853.js";
      if (4232 === e) return "9a3472f8a130cbf9.js";
      if (608 === e) return "b96145680dbf591d.js";
      if (9130 === e) return "a0f118e1517bc215.js";
      if (5678 === e) return "b0cc673dbe13c91f.js";
      if (8209 === e) return "f31e4c379905e587.js";
      if (3642 === e) return "ca75e0c6ac655767.js";
      if (6191 === e) return "5568670222ad628d.js";
      if (5733 === e) return "6fd2859e4c731800.js";
      if (7564 === e) return "84c6b01ae591c7a1.js";
      if (1871 === e) return "b7b55e320faa48da.js";
      if (2977 === e) return "1558cf2eafec988f.js";
      if (8085 === e) return "58c4944a27b94b46.js";
      if (3546 === e) return "507b5019062cd149.js";
      if (6596 === e) return "3bbf61e7e46cd18a.vendor.js";
      if (4832 === e) return "3ebff733c50eb5bf.js";
      if (8407 === e) return "c0ecbc10d38eb126.js";
      if (481 === e) return "f023d23ebc053c66.js";
      if (4656 === e) return "4ee669ee8274469c.js";
      if (4821 === e) return "f2d08cf862c604a2.js";
      if (8072 === e) return "3c5c6bb732b828ab.js";
      if (3667 === e) return "145ae9adc5a58830.js";
      if (9076 === e) return "e00e19e03c573a83.js";
      if (310 === e) return "37a5d2cf3f47fd68.js";
      if (3189 === e) return "cd03c74d3c5a8c13.js";
      if (2708 === e) return "4256da6cd0683211.js";
      if (4663 === e) return "9896a48bca209e2d.js";
      if (7611 === e) return "ae74d26a036f8113.js";
      if (1169 === e) return "182ba9922591bfda.js";
      if (1945 === e) return "746b67fc4bc6088c.js";
      if (8856 === e) return "3e3139fb6a833157.js";
      if (7724 === e) return "056723a73eedd8bf.js";
      if (8600 === e) return "21d2759947410126.js";
      if (9206 === e) return "d286178559b1f412.js";
      if (7968 === e) return "179bbbfc45bb101c.js";
      if (1887 === e) return "63e454e9ce97fb3d.js";
      if (9541 === e) return "c987e92a06c405ad.js";
      if (3645 === e) return "404d84bd9de72c72.js";
      if (8528 === e) return "412a9bb3013455da.js";
      if (3081 === e) return "71b434b114385841.js";
      if (1399 === e) return "2397d132f8be526f.js";
      if (7935 === e) return "53882cdb7e9ed2d3.js";
      if (4182 === e) return "e14609084090baf9.js";
      if (7020 === e) return "01ae216ae371af38.js";
      if (4874 === e) return "f2b03f4a7961ff5c.js";
      if (1290 === e) return "7822e2366f32f337.js";
      if (4353 === e) return "4f2890a67de1f93b.js";
      if (9634 === e) return "04f3c7cecc30ab41.js";
      if (5535 === e) return "9ce31fee12b7b1cb.js";
      if (7351 === e) return "13eaba859ff9cbd9.vendor.js";
      if (3499 === e) return "355116555804cd32.js";
      if (4152 === e) return "c261bcb46191a929.js";
      if (193 === e) return "db02199ca668db5c.js";
      if (4692 === e) return "dad55cf5f30a28a5.js";
      if (4132 === e) return "16f3df852ae2afa7.js";
      if (7598 === e) return "b585f1ebe81752b5.js";
      if (424 === e) return "97931e2dbc4ba042.js";
      if (3412 === e) return "e5cbc2fd303932f2.js";
      if (3281 === e) return "3aa6f863072d5cb6.js";
      if (6291 === e) return "ce5145f156a20b86.js";
      if (3814 === e) return "e074fc862a2bc68d.js";
      if (8990 === e) return "8539f1fefba49314.js";
      if (2244 === e) return "797be0a7afbab8f6.js";
      if (9095 === e) return "c3a569b580a3cf3c.js";
      if (3972 === e) return "8c74f0266563cd16.js";
      if (9951 === e) return "79f3723ec8973d5b.js";
      if (876 === e) return "202d8c858b11a862.js";
      if (6574 === e) return "b912434403f2d714.js";
      if (6021 === e) return "099b87a83e55d393.js";
      if (2789 === e) return "237f7e5d2e9445a4.js";
      if (694 === e) return "ecdf218ac7b8e8bf.js";
      if (9429 === e) return "208f16d464562024.js";
      if (8347 === e) return "f627971664b6ef46.js";
      if (3714 === e) return "b61a3e6b4afdaf6c.js";
      if (5558 === e) return "7d4d16395b77e4a5.js";
      if (3540 === e) return "38d6bcdb3ecb9cd0.js";
      if (5517 === e) return "ff8f8f49f2c92f6d.js";
    }),
    (c.miniCssF = (e) => {
      if (
        {
          8042: 1,
          3772: 1,
          1755: 1,
          3139: 1,
          8340: 1,
          3369: 1,
          3842: 1,
          6394: 1,
          7033: 1,
          1033: 1,
          7717: 1,
          4232: 1,
          9130: 1,
          8209: 1,
          6191: 1,
          5733: 1,
          7564: 1,
          1871: 1,
          2977: 1,
          4832: 1,
          8407: 1,
          481: 1,
          4821: 1,
          8072: 1,
          3667: 1,
          9076: 1,
          310: 1,
          1945: 1,
          8856: 1,
          7724: 1,
          9206: 1,
          7968: 1,
          1887: 1,
          9541: 1,
          3645: 1,
          3081: 1,
          1399: 1,
          7020: 1,
          4874: 1,
          1290: 1,
          4353: 1,
          9634: 1,
          5535: 1,
          4692: 1,
          4132: 1,
          7598: 1,
          424: 1,
          3412: 1,
          3281: 1,
          6291: 1,
          3814: 1,
          8990: 1,
          2244: 1,
          9095: 1,
          3972: 1,
          9951: 1,
          876: 1,
          6574: 1,
          6021: 1,
          2789: 1,
          694: 1,
          9429: 1,
          8347: 1,
          3714: 1,
          5558: 1,
          3540: 1,
          5517: 1,
        }[e]
      )
        return "ef46db3751d8e999.ltr.css";
      if (1374 === e) return "1319be5341bf1a68.ltr.css";
      if (869 === e) return "d7cf0aba64e1b2d4.ltr.css";
      if ({ 5465: 1, 3741: 1, 4043: 1, 1761: 1, 6596: 1, 7351: 1 }[e])
        return "ef46db3751d8e999.vendor.ltr.css";
      if (1697 === e) return "2f785f6adbeb6b22.ltr.css";
      if (608 === e) return "c9bf091720f7f1c3.ltr.css";
      if (5678 === e) return "ca10385ab7f3657c.ltr.css";
      if (3642 === e) return "71dec1f5d11e3f66.ltr.css";
      if (8085 === e) return "f8678f5d2a496896.ltr.css";
      if (3546 === e) return "aed61a49fdfc513b.ltr.css";
      if (4656 === e) return "5b2241d885919c07.ltr.css";
      if (3189 === e) return "8dd0cb1e0979d988.ltr.css";
      if (2708 === e) return "8ffbfec5e8390226.ltr.css";
      if (4663 === e) return "118052af16110a6a.ltr.css";
      if (7611 === e) return "5b7fe8f909b06739.ltr.css";
      if (1169 === e) return "44ce630fa966dd23.ltr.css";
      if (8600 === e) return "638e8938c76a575e.ltr.css";
      if (8528 === e) return "c2b0021cdb486c78.ltr.css";
      if (7935 === e) return "82aa3b736106389a.ltr.css";
      if (4182 === e) return "489dec8cbb9570e2.ltr.css";
      if (3499 === e) return "ef5cdcea36d39a06.ltr.css";
      if (4152 === e) return "b757faa92fc74b17.ltr.css";
      if (193 === e) return "679f4071931ecd52.ltr.css";
    }),
    (c.miniCssFRtl = (e) => {
      if (8581 === e) return "c166e5d20ad58f4e.runtime.rtl.css";
      if ({ 2653: 1, 5465: 1, 3741: 1, 4043: 1, 1761: 1, 6596: 1, 7351: 1 }[e])
        return "c166e5d20ad58f4e.vendor.rtl.css";
      if (5436 === e) return "8e54262212aed57f.vendor.rtl.css";
      if (1389 === e) return "eb7003948520c646.rtl.css";
      if (
        {
          8042: 1,
          3772: 1,
          1755: 1,
          3139: 1,
          8340: 1,
          3369: 1,
          3842: 1,
          6394: 1,
          7033: 1,
          1033: 1,
          7717: 1,
          4232: 1,
          9130: 1,
          8209: 1,
          6191: 1,
          5733: 1,
          7564: 1,
          1871: 1,
          2977: 1,
          4832: 1,
          8407: 1,
          481: 1,
          4821: 1,
          8072: 1,
          3667: 1,
          9076: 1,
          310: 1,
          1945: 1,
          8856: 1,
          7724: 1,
          9206: 1,
          7968: 1,
          1887: 1,
          9541: 1,
          3645: 1,
          3081: 1,
          1399: 1,
          7020: 1,
          4874: 1,
          1290: 1,
          4353: 1,
          9634: 1,
          5535: 1,
          4692: 1,
          4132: 1,
          7598: 1,
          424: 1,
          3412: 1,
          3281: 1,
          6291: 1,
          3814: 1,
          8990: 1,
          2244: 1,
          9095: 1,
          3972: 1,
          9951: 1,
          876: 1,
          6574: 1,
          6021: 1,
          2789: 1,
          694: 1,
          9429: 1,
          8347: 1,
          3714: 1,
          5558: 1,
          3540: 1,
          5517: 1,
        }[e]
      )
        return "c166e5d20ad58f4e.rtl.css";
      if (1374 === e) return "a5977d502fdd34aa.rtl.css";
      if (869 === e) return "cb3538416979fc60.rtl.css";
      if (1697 === e) return "429071611a6f6e85.rtl.css";
      if (608 === e) return "49dcf4c456be0dd9.rtl.css";
      if (5678 === e) return "be92cdc2c813e15f.rtl.css";
      if (3642 === e) return "7cf7805937173758.rtl.css";
      if (8085 === e) return "29bdbb1d75c8c7a3.rtl.css";
      if (3546 === e) return "7dac84e36568326f.rtl.css";
      if (4656 === e) return "3759df5a77daebac.rtl.css";
      if (3189 === e) return "eaf9987ddc748d09.rtl.css";
      if (2708 === e) return "56026b4293573c88.rtl.css";
      if (4663 === e) return "879da7300712ed1a.rtl.css";
      if (7611 === e) return "b197b394e4f55ce1.rtl.css";
      if (1169 === e) return "8ec5819b5639aca4.rtl.css";
      if (8600 === e) return "1e246b15020f607d.rtl.css";
      if (8528 === e) return "da027bf835f69eff.rtl.css";
      if (7935 === e) return "c529d5968e467a49.rtl.css";
      if (4182 === e) return "7974d5bbdf33c24b.rtl.css";
      if (3499 === e) return "22fa3b7eaf31cdf2.rtl.css";
      if (4152 === e) return "7e07eed37d7f1660.rtl.css";
      if (193 === e) return "b0c4af72f465a79f.rtl.css";
    }),
    (c.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (c.hmd = (e) => {
      if (!(e = Object.create(e)).children) e.children = [];
      return (
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                e.id,
            );
          },
        }),
        e
      );
    }),
    (c.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (n = {}),
    (f = "@canva/web:"),
    (c.l = (e, r, t, s) => {
      if (!n[e]) {
        var i, a;
        if (void 0 !== t)
          for (
            var o = document.getElementsByTagName("script"), u = 0;
            u < o.length;
            u++
          ) {
            var d = o[u];
            if (
              d.getAttribute("src") == e ||
              d.getAttribute("data-webpack") == f + t
            ) {
              i = d;
              break;
            }
          }
        if (!i) {
          if (
            ((a = !0),
            ((i = document.createElement("script")).charset = "utf-8"),
            (i.timeout = 120),
            c.nc)
          )
            i.setAttribute("nonce", c.nc);
          i.setAttribute("data-webpack", f + t), (i.src = e);
        }
        n[e] = [r];
        var l = (r, t) => {
            (i.onerror = i.onload = null), clearTimeout(b);
            var f = n[e];
            if (
              (delete n[e],
              i.parentNode && i.parentNode.removeChild(i),
              f && f.forEach((e) => e(t)),
              r)
            )
              return r(t);
          },
          b = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: i }),
            12e4,
          );
        (i.onerror = l.bind(null, i.onerror)),
          (i.onload = l.bind(null, i.onload)),
          a && document.head.appendChild(i);
      } else n[e].push(r);
    }),
    (c.r = (e) => {
      if ("undefined" != typeof Symbol && Symbol.toStringTag)
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.nmd = (e) => {
      if (((e.paths = []), !e.children)) e.children = [];
      return e;
    }),
    (() => {
      const e = c.e,
        r = function e(r, t, n) {
          return r().catch(function (f) {
            return 0 === n
              ? Promise.reject(f)
              : ((s = t),
                new Promise(function (e) {
                  setTimeout(e, s);
                })).then(function () {
                  return e(r, t, n - 1);
                });
            var s;
          });
        };
      c.e = function (t) {
        return r(
          function () {
            return e(t);
          },
          1e3,
          5,
        );
      };
    })(),
    (c.p = ""),
    (() => {
      if (self.__batch_chunks__)
        !(function (e, r, t, n, f, s, i, c, a) {
          const o = e.l;
          let u = [],
            d = [];
          const l = [];
          for (const k of document.head.querySelectorAll(
            'link[rel="prefetch"][href]',
          )) {
            const e = k.getAttribute("href");
            e && l.push(e);
          }
          let b = (e) => document.head.appendChild(e);
          (e.l = function (e, r, f, i) {
            for (let t = 0; t < l.length; t++)
              if (l[t].endsWith(e)) return l.splice(t, 1), o(e, r, f, i);
            if (t) {
              if (0 === u.length)
                Promise.resolve().then(() => {
                  E(u, p), (u = []), (j = 0);
                });
              const r = y(e);
              if ((u.length >= 1 && j + r > s) || u.length >= n)
                E(u, p), (u = []), (j = 0);
              j += r;
            } else {
              if (h++ < 10) return o(e, r, f, i);
              if (0 === u.length) setTimeout(() => w(u, p), 1);
            }
            u.push({
              src: e,
              callback: function (t) {
                if ("load" === t.type) r(t);
                else o(e, r, f, i);
              },
              originalLoad: () => {
                o(e, r, f, i);
              },
            });
          }),
            (e.loadCss = function (e, r) {
              const f = e.getAttribute("href");
              if (((b = r || b), t)) {
                if (0 === d.length)
                  Promise.resolve().then(() => {
                    E(d, v), (d = []), (m = 0);
                  });
                const e = y(f);
                if ((d.length >= 1 && m + e > s) || d.length >= n)
                  E(d, v), (d = []), (m = 0);
                m += e;
              } else {
                if (g++ < 15) return r(e);
                if (0 === d.length) setTimeout(() => w(d, v), 1);
              }
              d.push({
                src: f,
                callback: (t) => {
                  if ("load" === t.type) e.onload && e.onload(t);
                  else r(e);
                },
                originalLoad: () => {
                  r(e);
                },
              });
            });
          let h = 0,
            j = 0;
          function p(e, t) {
            const n = document.createElement("script");
            let f;
            const s = (e) => {
              (n.onerror = n.onload = null),
                clearTimeout(f),
                n.parentNode && n.parentNode.removeChild(n),
                t("string" == typeof e ? { type: "error", target: {} } : e);
            };
            (n.onload = n.onerror = s),
              (n.src = e),
              (n.async = !1),
              (f = setTimeout(() => s({ type: "timeout", target: n }), r)),
              document.head.appendChild(n);
          }
          let g = 0,
            m = 0;
          function v(e, r) {
            const t = document.createElement("link");
            (t.onload = t.onerror = (e) => r(e)),
              (t.href = e),
              (t.rel = "stylesheet"),
              b(t);
          }
          function y(e) {
            const r = f(),
              t = e.substring(r.length);
            return t ? i[t] || 0 : 0;
          }
          function _() {
            const e = f(),
              r = new URL(window.location.href);
            if (null == e ? void 0 : e.startsWith("http")) {
              const { protocol: r, host: t } = new URL(e);
              return `${r}//chunk-composing.${t.split(".").slice(-2).join(".")}`;
            } else if (
              ["localhost", "127.0.0.1"].includes(r.hostname) &&
              r.searchParams.get("pageLoadWorkerUrl")
            )
              return r.searchParams.get("pageLoadWorkerUrl");
            else return r.origin;
          }
          async function w(e, r) {
            const t = f();
            let o,
              u = 0,
              d = [];
            try {
              o = self.navigator.serviceWorker;
            } catch {}
            const l =
              c && (null == o ? void 0 : o.controller)
                ? await (async function (e) {
                    const r = await caches.open(a),
                      t = [];
                    for (const n of e)
                      if (await r.match(n.src)) n.originalLoad();
                      else t.push(n);
                    return t;
                  })(e)
                : e;
            for (const f of l) {
              const e = f.src.substring(t.length),
                r = e ? i[e] || 0 : 0;
              if ((d.length >= 1 && u + r > s) || d.length >= n)
                b(d), (d = []), (u = 0);
              d.push(f), (u += r);
            }
            function b(e) {
              if (1 === e.length) return void e[0].originalLoad();
              const n = _(),
                f = e.map(({ src: e }) => e.substring(t.length)).join("+");
              r(`${n}/chunk-batch/${f}`, (r) => {
                for (const { callback: t, src: n } of e)
                  t({ type: r.type, target: { src: n, href: n } });
              });
            }
            d.length && b(d), (e.length = 0);
          }
          function E(e, r) {
            if (0 === e.length) return;
            const t = f();
            if (1 !== e.length)
              r(
                `${_()}/chunk-batch/${e.map(({ src: e }) => e.substring(t.length)).join("+")}`,
                (r) => {
                  for (const { callback: t, src: n } of e)
                    t({ type: r.type, target: { src: n, href: n } });
                },
              );
            else e[0].originalLoad();
          }
        })(
          c,
          12e4,
          self.__sync_batch_chunks__,
          40,
          () => c.p,
          10485760,
          {
            "2fcea7aa17f02ed2.ltr.css": 416965,
            "70d2691f438a24d4.js": 12840168,
            "eb7003948520c646.rtl.css": 416976,
            "4d1ece3f71e6c54d.runtime.js": 65654,
            "a0684b0780c739e9.vendor.ltr.css": 15361,
            "b1eeac0bf5be0efc.vendor.js": 2952878,
            "8e54262212aed57f.vendor.rtl.css": 15361,
            "3af688e02ca99058.vendor.js": 696791,
            "1319be5341bf1a68.ltr.css": 8596,
            "c6ec4d5a6593431e.js": 617165,
            "a5977d502fdd34aa.rtl.css": 8596,
            "d7cf0aba64e1b2d4.ltr.css": 248,
            "96c46da0f66c98d2.js": 5455,
            "cb3538416979fc60.rtl.css": 248,
            "41e873ffa4d484b9.vendor.js": 171323,
            "0159fbbb933936d6.js": 86022,
            "2f785f6adbeb6b22.ltr.css": 4097,
            "d5d9eda3f5486519.js": 237405,
            "429071611a6f6e85.rtl.css": 4097,
            "4b686f63c53900e5.vendor.js": 115884,
            "63b5d1e48591bd18.vendor.js": 158513,
            "9d35c8ce1b5795b4.js": 70103,
            "75ead20c54f42524.js": 183301,
            "ba655adda20a53e6.js": 50563,
            "87ec39616e33bb55.js": 167146,
            "0c5c47700d723e8d.js": 458513,
            "14db1f9f618b6023.js": 245997,
            "89e4740bdabb652a.js": 219300,
            "eb6281d4dd0ab3a3.js": 118970,
            "e8e91144db5e752c.js": 203041,
            "a0f118e1517bc215.js": 355024,
            "c9bf091720f7f1c3.ltr.css": 233,
            "b96145680dbf591d.js": 43826,
            "49dcf4c456be0dd9.rtl.css": 233,
            "71dec1f5d11e3f66.ltr.css": 360,
            "ca75e0c6ac655767.js": 274088,
            "7cf7805937173758.rtl.css": 360,
            "f31e4c379905e587.js": 266720,
            "ca10385ab7f3657c.ltr.css": 354,
            "b0cc673dbe13c91f.js": 274018,
            "be92cdc2c813e15f.rtl.css": 354,
            "5568670222ad628d.js": 81279,
            "6fd2859e4c731800.js": 112245,
            "84c6b01ae591c7a1.js": 137194,
            "b7b55e320faa48da.js": 229746,
            "1558cf2eafec988f.js": 221126,
            "f8678f5d2a496896.ltr.css": 355,
            "58c4944a27b94b46.js": 167504,
            "29bdbb1d75c8c7a3.rtl.css": 355,
            "aed61a49fdfc513b.ltr.css": 355,
            "507b5019062cd149.js": 255677,
            "7dac84e36568326f.rtl.css": 355,
            "3ebff733c50eb5bf.js": 188836,
            "3bbf61e7e46cd18a.vendor.js": 32309,
            "c0ecbc10d38eb126.js": 191974,
            "f023d23ebc053c66.js": 340588,
            "5b2241d885919c07.ltr.css": 360,
            "4ee669ee8274469c.js": 127883,
            "3759df5a77daebac.rtl.css": 360,
            "f2d08cf862c604a2.js": 234443,
            "3c5c6bb732b828ab.js": 40873,
            "145ae9adc5a58830.js": 51751,
            "e00e19e03c573a83.js": 24728,
            "8dd0cb1e0979d988.ltr.css": 5557,
            "cd03c74d3c5a8c13.js": 385317,
            "eaf9987ddc748d09.rtl.css": 5557,
            "8ffbfec5e8390226.ltr.css": 14443,
            "4256da6cd0683211.js": 762976,
            "56026b4293573c88.rtl.css": 14443,
            "118052af16110a6a.ltr.css": 253,
            "9896a48bca209e2d.js": 46225,
            "879da7300712ed1a.rtl.css": 253,
            "5b7fe8f909b06739.ltr.css": 913,
            "ae74d26a036f8113.js": 61091,
            "b197b394e4f55ce1.rtl.css": 913,
            "cee7dfd54cf2ba25.vendor.js": 648073,
            "44ce630fa966dd23.ltr.css": 607,
            "182ba9922591bfda.js": 68762,
            "8ec5819b5639aca4.rtl.css": 607,
            "746b67fc4bc6088c.js": 260956,
            "3e3139fb6a833157.js": 470935,
            "056723a73eedd8bf.js": 284467,
            "638e8938c76a575e.ltr.css": 412,
            "21d2759947410126.js": 159044,
            "1e246b15020f607d.rtl.css": 414,
            "d286178559b1f412.js": 17092,
            "179bbbfc45bb101c.js": 9237,
            "63e454e9ce97fb3d.js": 47023,
            "c987e92a06c405ad.js": 61697,
            "9ce31fee12b7b1cb.js": 9823,
            "404d84bd9de72c72.js": 11156,
            "c2b0021cdb486c78.ltr.css": 123746,
            "412a9bb3013455da.js": 2862732,
            "da027bf835f69eff.rtl.css": 123751,
            "13eaba859ff9cbd9.vendor.js": 52565,
            "ef5cdcea36d39a06.ltr.css": 18055,
            "355116555804cd32.js": 109689,
            "22fa3b7eaf31cdf2.rtl.css": 18056,
            "b757faa92fc74b17.ltr.css": 6006,
            "c261bcb46191a929.js": 178485,
            "7e07eed37d7f1660.rtl.css": 6008,
            "679f4071931ecd52.ltr.css": 9565,
            "db02199ca668db5c.js": 243194,
            "b0c4af72f465a79f.rtl.css": 9565,
            "e074fc862a2bc68d.js": 209094,
            "8539f1fefba49314.js": 3316,
            "797be0a7afbab8f6.js": 3011,
            "c3a569b580a3cf3c.js": 229690,
            "8c74f0266563cd16.js": 298978,
            "79f3723ec8973d5b.js": 2654,
            "202d8c858b11a862.js": 561047,
            "b912434403f2d714.js": 2781,
            "099b87a83e55d393.js": 214647,
            "237f7e5d2e9445a4.js": 4456,
            "ecdf218ac7b8e8bf.js": 2785,
            "208f16d464562024.js": 1496,
            "f627971664b6ef46.js": 3787,
            "b61a3e6b4afdaf6c.js": 2614,
            "7d4d16395b77e4a5.js": 2048,
            "38d6bcdb3ecb9cd0.js": 3036,
            "ff8f8f49f2c92f6d.js": 6118,
            "dad55cf5f30a28a5.js": 2854,
            "16f3df852ae2afa7.js": 4390,
            "b585f1ebe81752b5.js": 4851,
            "97931e2dbc4ba042.js": 3101,
            "e5cbc2fd303932f2.js": 11030,
            "71b434b114385841.js": 11169,
            "2397d132f8be526f.js": 34565,
            "82aa3b736106389a.ltr.css": 748,
            "53882cdb7e9ed2d3.js": 67784,
            "c529d5968e467a49.rtl.css": 748,
            "489dec8cbb9570e2.ltr.css": 6905,
            "e14609084090baf9.js": 182953,
            "7974d5bbdf33c24b.rtl.css": 6905,
            "01ae216ae371af38.js": 58481,
            "f2b03f4a7961ff5c.js": 71839,
            "3aa6f863072d5cb6.js": 6520,
            "ce5145f156a20b86.js": 37905,
            "7822e2366f32f337.js": 1428,
          },
          self.__check_cache_batch_chunks__,
          "assets-2",
        );
    })(),
    (c.g.BUILD_VARIABLES = Object.assign(c.g.BUILD_VARIABLES || {}, {
      PREFERRED_REACT_RENDERER: "concurrent",
    })),
    (() => {
      const e = JSON.parse(
          '{"5845":3189,"16629":8990,"29862":310,"35112":6021,"53109":3139,"79848":9541,"91479":4832,"134104":5733,"144616":4043,"144857":3667,"155450":2977,"163786":6574,"182837":2789,"187817":3499,"200353":3772,"201096":1761,"204111":1399,"208777":7020,"221426":9076,"225503":6394,"242686":1169,"284211":3540,"287020":9951,"298010":3546,"313726":7968,"329929":2244,"342818":1033,"344390":7033,"348169":1169,"373514":8407,"378055":4821,"388302":1755,"397669":876,"408130":5558,"418689":3814,"427033":1697,"435718":9206,"461421":7935,"464063":4874,"472080":8072,"472788":694,"481110":3714,"493471":2708,"500487":3081,"523150":5517,"525651":4692,"531638":9095,"552298":5535,"556238":4656,"573349":4663,"580048":9634,"594750":1945,"608734":1290,"627433":7351,"662496":4182,"696136":193,"709577":7611,"719765":4353,"725873":1871,"727292":4152,"735393":7724,"737187":7598,"784117":6394,"797391":7717,"801532":1887,"826140":6291,"834507":4132,"844992":3412,"876054":869,"896590":8347,"906964":8856,"918083":3645,"920192":3281,"929032":4152,"930086":424,"941512":3972,"951911":4232,"955669":1374,"956865":9429,"983373":8528,"983877":8085,"991860":8340,"996845":481,"998747":6191}',
        ),
        r = JSON.parse(
          '{"193":[4152,8600],"310":[],"424":[],"481":[5678,7564],"608":[3842],"694":[],"869":[1374],"876":[1697],"1033":[6394],"1169":[3741,8042],"1290":[],"1374":[8042],"1389":[],"1399":[],"1697":[3741],"1755":[],"1761":[],"1871":[9130,7564],"1887":[1374],"1945":[8042],"2244":[],"2653":[],"2708":[6394],"2789":[],"2977":[8209,5678,7564],"3081":[],"3139":[8042],"3189":[6394,1374],"3281":[1697],"3369":[],"3412":[],"3499":[8600,1374],"3540":[],"3546":[8209,5678,1374],"3642":[8209,5678,1374],"3645":[1374],"3667":[1374],"3714":[],"3741":[],"3772":[5465,1697],"3814":[1697],"3842":[],"3972":[1697],"4043":[5465],"4132":[],"4152":[1697],"4182":[],"4232":[1697,1374],"4353":[],"4656":[8209,5678,1374],"4663":[],"4692":[],"4821":[5678,7564],"4832":[5678,6596,7564],"4874":[1697],"5436":[],"5465":[],"5517":[],"5535":[8600],"5558":[],"5678":[9130,1697],"5733":[3642],"6021":[1697],"6191":[3642],"6291":[],"6394":[3369,3842],"6574":[],"6596":[5465],"7020":[],"7033":[6394],"7351":[5465],"7564":[608,1374],"7598":[],"7611":[],"7717":[1697,1374],"7724":[3369],"7935":[1374],"7968":[],"8042":[],"8072":[8209,7564],"8085":[8209,5678,1374],"8209":[9130,8042],"8340":[8042],"8347":[],"8407":[5678,6596,7564],"8528":[5465,6394,1697,1374],"8600":[8042],"8856":[1374],"8990":[],"9076":[],"9095":[1697],"9130":[608],"9206":[8600],"9429":[],"9541":[1374],"9634":[],"9951":[]}',
        ),
        t = (e, n, f) => {
          if (!f.has(e))
            return f.add(e), r[e].forEach((e) => t(e, n, f)), n.push(e), n;
        };
      c.me = function (r) {
        const n = e[r];
        if (null == n) return Promise.resolve(c(r));
        const f = t(n, [], new Set());
        return Promise.all(f.map((e) => c.e(e))).then(() => c(r));
      };
    })(),
    (() => {
      const e = {};
      c.f.locale = function (r, t) {
        !(function (e, r, t) {
          if (null == r[e]) {
            const t = self.cmsg;
            if (!t || !t.assets) return;
            const n = t.loaded,
              f = t.locale || "en";
            if (n && n[e + "_" + f]) return;
            const s = t.assets[f] && t.assets[f][e] && t.assets[f][e].js;
            if (!s) return;
            r[e] = Promise.all(
              s.map(
                (t) =>
                  new Promise((n, f) => {
                    const s = c.p + t;
                    c.l(
                      s,
                      (s) => {
                        if ("load" === s.type) (r[e] = 0), n();
                        else
                          delete r[e],
                            f(new Error(`Fail to load message files@${t}`));
                      },
                      "ensure-locale-" + e,
                      e,
                    );
                  }),
              ),
            );
          }
          const n = r[e];
          if (n) t.push(n);
        })(r, e, t);
      };
    })(),
    (() => {
      let e =
        "undefined" != typeof self && void 0 !== self.document
          ? self.document.body.parentElement.getAttribute("dir")
          : "ltr";
      if ("ltr" !== e && "rtl" !== e)
        console.warn(
          "Could not determine the direction of text, please check that the dir attribute is set on the html tag",
        ),
          (e = "ltr");
      if ("rtl" === e) c.miniCssF = c.miniCssFRtl;
    })(),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((r, t) => {
              var n = c.miniCssF(e),
                f = c.p + n;
              if (
                ((e, r) => {
                  for (
                    var t = document.getElementsByTagName("link"), n = 0;
                    n < t.length;
                    n++
                  ) {
                    var f =
                      (i = t[n]).getAttribute("data-href") ||
                      i.getAttribute("href");
                    if ("stylesheet" === i.rel && (f === e || f === r))
                      return i;
                  }
                  var s = document.getElementsByTagName("style");
                  for (n = 0; n < s.length; n++) {
                    var i;
                    if (
                      (f = (i = s[n]).getAttribute("data-href")) === e ||
                      f === r
                    )
                      return i;
                  }
                })(n, f)
              )
                return r();
              ((e, r, t, n, f) => {
                var s = document.createElement("link");
                (s.rel = "stylesheet"),
                  (s.type = "text/css"),
                  (s.onerror = s.onload =
                    (t) => {
                      if (((s.onerror = s.onload = null), "load" === t.type))
                        n();
                      else {
                        var i = t && ("load" === t.type ? "missing" : t.type),
                          c = (t && t.target && t.target.href) || r,
                          a = new Error(
                            "Loading CSS chunk " + e + " failed.\n(" + c + ")",
                          );
                        if (
                          ((a.code = "CSS_CHUNK_LOAD_FAILED"),
                          (a.type = i),
                          (a.request = c),
                          s.parentNode)
                        )
                          s.parentNode.removeChild(s);
                        f(a);
                      }
                    }),
                  (s.href = r),
                  (function (e) {
                    const r = (e) => {
                      document.head.appendChild(e);
                    };
                    if (c.loadCss) c.loadCss(e, r);
                    else r(e);
                  })(s);
              })(e, f, 0, r, t);
            }),
          r = { 8581: 0 };
        c.f.miniCss = (t, n) => {
          if (r[t]) n.push(r[t]);
          else if (
            0 !== r[t] &&
            {
              193: 1,
              608: 1,
              869: 1,
              1169: 1,
              1374: 1,
              1697: 1,
              2708: 1,
              3189: 1,
              3499: 1,
              3546: 1,
              3642: 1,
              4152: 1,
              4182: 1,
              4656: 1,
              4663: 1,
              5678: 1,
              7611: 1,
              7935: 1,
              8085: 1,
              8528: 1,
              8600: 1,
            }[t]
          )
            n.push(
              (r[t] = e(t).then(
                () => {
                  r[t] = 0;
                },
                (e) => {
                  throw (delete r[t], e);
                },
              )),
            );
        };
      }
    })(),
    (() => {
      var e = { 8581: 0 };
      (c.f.j = (r, t) => {
        var n = c.o(e, r) ? e[r] : void 0;
        if (0 !== n)
          if (n) t.push(n[2]);
          else if (8581 != r) {
            var f = new Promise((t, f) => (n = e[r] = [t, f]));
            t.push((n[2] = f));
            var s = c.p + c.u(r),
              i = new Error();
            c.l(
              s,
              (t) => {
                if (c.o(e, r)) {
                  if (0 !== (n = e[r])) e[r] = void 0;
                  if (n) {
                    var f = t && ("load" === t.type ? "missing" : t.type),
                      s = t && t.target && t.target.src;
                    (i.message =
                      "Loading chunk " +
                      r +
                      " failed.\n(" +
                      f +
                      ": " +
                      s +
                      ")"),
                      (i.name = "ChunkLoadError"),
                      (i.type = f),
                      (i.request = s),
                      n[1](i);
                  }
                }
              },
              "chunk-" + r,
              r,
            );
          } else e[r] = 0;
      }),
        (c.O.j = (r) => 0 === e[r]);
      var r = (r, t) => {
          var n,
            f,
            [s, i, a] = t,
            o = 0;
          if (s.some((r) => 0 !== e[r])) {
            for (n in i) if (c.o(i, n)) c.m[n] = i[n];
            if (a) var u = a(c);
          }
          if (r) r(t);
          for (; o < s.length; o++) {
            if (((f = s[o]), c.o(e, f) && e[f])) e[f][0]();
            e[f] = 0;
          }
          return c.O(u);
        },
        t = (self.webpackChunk_canva_web = self.webpackChunk_canva_web || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
})();
//# sourceMappingURL=sourcemaps/4d1ece3f71e6c54d.runtime.js.map
