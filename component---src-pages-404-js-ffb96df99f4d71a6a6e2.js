(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    143: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        i = a.n(n),
        o = a(151),
        r = a(163),
        m = a(160),
        d = a(154);
      t.default = function() {
        return i.a.createElement(
          r.a,
          null,
          i.a.createElement(m.a, { title: "404: Not found" }),
          i.a.createElement(
            d.l,
            null,
            i.a.createElement(d.h, null, "Страница не найдена"),
            i.a.createElement(
              d.k,
              null,
              "Упс, тут ничего нет! Вернуться на ",
              i.a.createElement(o.a, { to: "/" }, " главную страницу.")
            )
          )
        );
      };
    },
    151: function(e, t, a) {
      "use strict";
      var n = a(0),
        i = a.n(n),
        o = a(4),
        r = a.n(o),
        m = a(33),
        d = a.n(m);
      a.d(t, "a", function() {
        return d.a;
      });
      a(155), i.a.createContext({});
      r.a.object, r.a.string.isRequired, r.a.func, r.a.func;
    },
    153: function(e, t, a) {
      "use strict";
      a.d(t, "e", function() {
        return n;
      }),
        a.d(t, "d", function() {
          return i;
        }),
        a.d(t, "a", function() {
          return o;
        }),
        a.d(t, "c", function() {
          return r;
        }),
        a.d(t, "b", function() {
          return m;
        });
      var n = "#F6921E",
        i = "#F05A24",
        o = "#121212",
        r =
          "linear-gradient(\n    75deg,\n    rgba(250, 175, 59, 1),\n    rgba(246, 146, 30, 1)\n  );",
        m = "box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);";
    },
    154: function(e, t, a) {
      "use strict";
      a.d(t, "o", function() {
        return r;
      }),
        a.d(t, "d", function() {
          return m;
        }),
        a.d(t, "f", function() {
          return d;
        }),
        a.d(t, "n", function() {
          return c;
        }),
        a.d(t, "l", function() {
          return s;
        }),
        a.d(t, "h", function() {
          return l;
        }),
        a.d(t, "k", function() {
          return p;
        }),
        a.d(t, "g", function() {
          return f;
        }),
        a.d(t, "i", function() {
          return u;
        }),
        a.d(t, "j", function() {
          return g;
        }),
        a.d(t, "m", function() {
          return x;
        }),
        a.d(t, "e", function() {
          return w;
        }),
        a.d(t, "c", function() {
          return y;
        }),
        a.d(t, "b", function() {
          return b;
        }),
        a.d(t, "a", function() {
          return _;
        });
      var n = a(152),
        i = a(151),
        o = a(153),
        r = n.a.main.withConfig({
          displayName: "styled__SiteWrapper",
          componentId: "sc-7d1c4q-0",
        })(['font-family:"Ubuntu",sans-serif;']),
        m = n.a.section.withConfig({
          displayName: "styled__ContentWrapper",
          componentId: "sc-7d1c4q-1",
        })(
          [
            "display:flex;flex-direction:column;align-items:center;margin:10rem 0;position:relative;padding:0 2rem;color:",
            ";@media (max-width:1024px){margin:5% 0;padding:0;}&:last-of-type{margin-bottom:2rem;}",
          ],
          o.a
        ),
        d = Object(n.a)(m).withConfig({
          displayName: "styled__FlexibleWrapper",
          componentId: "sc-7d1c4q-2",
        })(["width:100%;margin:5rem 0;padding:0;", ""], function(e) {
          return e.topMargin ? "margin-top: " + e.topMargin + ";" : "";
        }),
        c = n.a.h1.withConfig({
          displayName: "styled__SectionHeading",
          componentId: "sc-7d1c4q-3",
        })(
          [
            'position:relative;font-family:"Ubuntu",sans-serif;font-weight:700;font-size:2.2rem;line-height:1.2;color:',
            ';margin-bottom:6rem;@media (max-width:1440px){font-size:2.1rem;}@media (max-width:1024px){font-size:1.9rem;}@media (max-width:768px){font-size:1.6rem;margin-bottom:2rem;}&:after{content:"";width:70%;position:absolute;left:15%;bottom:-0.75rem;border-width:0 0 2px;border-style:solid;border-color:',
            ";}",
          ],
          o.a,
          o.e
        ),
        s = n.a.div.withConfig({
          displayName: "styled__PostWrapper",
          componentId: "sc-7d1c4q-4",
        })([
          "display:flex;flex-direction:column;align-items:center;justify-content:center;max-width:900px;",
        ]),
        l = n.a.h1.withConfig({
          displayName: "styled__H1",
          componentId: "sc-7d1c4q-5",
        })([
          "font-size:2.5rem;font-weight:700;margin:0 0 2rem;text-align:center;@media (max-width:768px){font-size:2rem;margin:1.5rem 0;}@media (max-width:400px){font-size:1.75rem;margin:1.2rem 0;}",
        ]),
        p = n.a.p.withConfig({
          displayName: "styled__Paragraph",
          componentId: "sc-7d1c4q-6",
        })(["font-size:1rem;margin:0.5rem;text-align:center;"]),
        f = n.a.div.withConfig({
          displayName: "styled__FloatingContentBox",
          componentId: "sc-7d1c4q-7",
        })(
          [
            "box-shadow:0 0 1rem rgba(0,0,0,0.2);max-width:800px;padding:2rem;background-color:white;border-radius:1rem;margin:2rem 0;p{margin:1.5rem;font-size:1.5rem;font-weight:300;line-height:1.5;}p:last-of-type{margin-bottom:1rem;}p:first-of-type{margin-top:1rem;}a{color:",
            ";font-style:italic;}ul{display:flex;flex-direction:column;align-items:center;justify-content:center;}ul li{font-size:1.5rem;font-weight:400;margin:0.25rem;color:",
            ";}ul li a{margin:0.5rem;}@media (max-width:1280px){p{font-size:1.2rem;}}@media (max-width:1024px){p{font-size:1rem;}}@media (max-width:599px){padding:0.5rem;}",
          ],
          o.d,
          o.d
        ),
        u = Object(n.a)(i.a).withConfig({
          displayName: "styled__InfoButtonLink",
          componentId: "sc-7d1c4q-8",
        })(
          [
            "display:inline-block;margin:2rem 0;padding:1rem 2rem;border-radius:3rem;border:none;background:",
            ';font-family:"Ubuntu",sans-serif;font-size:2.3rem;font-weight:700;color:white;text-decoration:none;@media (max-width:1440px){font-size:1.8rem;}@media (max-width:1024px){font-size:1.3rem;}@media (max-width:850px){font-size:1.2rem;margin:2rem;}@media (max-width:599px){padding:1rem 2rem;}',
          ],
          o.c
        ),
        h = n.a.img.withConfig({
          displayName: "styled__FixedImage",
          componentId: "sc-7d1c4q-9",
        })(["position:absolute;z-index:-10;top:-30%;width:20%;"]),
        g = Object(n.a)(h).withConfig({
          displayName: "styled__LeftGraphic",
          componentId: "sc-7d1c4q-10",
        })([
          "position:absolute;left:0;@media (max-width:1024px){top:0;}@media (max-width:768px){width:30%;}@media (max-width:599px){top:5%;}",
        ]),
        x = Object(n.a)(h).withConfig({
          displayName: "styled__RightGraphic",
          componentId: "sc-7d1c4q-11",
        })([
          "position:absolute;right:0;@media (max-width:1024px){top:0;}@media (max-width:768px){width:40%;}",
        ]),
        w = n.a.div.withConfig({
          displayName: "styled__CtaContainer",
          componentId: "sc-7d1c4q-12",
        })([
          "display:flex;width:100%;align-items:center;justify-content:center;margin:2rem;@media (max-width:600px){flex-direction:column;}",
        ]),
        y = Object(n.a)(i.a).withConfig({
          displayName: "styled__CallToActionLink",
          componentId: "sc-7d1c4q-13",
        })(
          [
            "margin:1rem;padding:1.5rem;background:",
            ";color:white;text-decoration:none;font-weight:700;font-size:1.5rem;border-radius:1rem;@media (max-width:600px){width:70%;text-align:center;}",
          ],
          o.c
        ),
        b = n.a.a.withConfig({
          displayName: "styled__CallToActionA",
          componentId: "sc-7d1c4q-14",
        })(
          [
            "margin:1rem;padding:1.5rem;background:",
            ";color:white;text-decoration:none;font-weight:700;font-size:1.5rem;border-radius:1rem;@media (max-width:600px){width:70%;text-align:center;}",
          ],
          o.c
        ),
        _ = n.a.span.withConfig({
          displayName: "styled__Accent",
          componentId: "sc-7d1c4q-15",
        })(["font-weight:400;font-style:italic;"]);
    },
    155: function(e, t, a) {
      var n;
      e.exports = ((n = a(156)) && n.default) || n;
    },
    156: function(e, t, a) {
      "use strict";
      a.r(t);
      a(34);
      var n = a(0),
        i = a.n(n),
        o = a(4),
        r = a.n(o),
        m = a(55),
        d = a(2),
        c = function(e) {
          var t = e.location,
            a = d.default.getResourcesForPathnameSync(t.pathname);
          return i.a.createElement(
            m.a,
            Object.assign({ location: t, pageResources: a }, a.json)
          );
        };
      (c.propTypes = {
        location: r.a.shape({ pathname: r.a.string.isRequired }).isRequired,
      }),
        (t.default = c);
    },
    157: function(e, t, a) {
      "use strict";
      var n = a(0),
        i = a.n(n),
        o = a(4),
        r = a.n(o),
        m = a(151),
        d = a(152),
        c = a(153),
        s = a(154),
        l = a(158),
        p = a.n(l),
        f = d.a.header.withConfig({
          displayName: "header__Wrap",
          componentId: "sc-13l89u8-0",
        })(
          [
            "color:",
            ";@media (max-width:850px){display:flex;flex-direction:column;align-items:center;justify-content:center;}",
          ],
          c.a
        ),
        u = d.a.div.withConfig({
          displayName: "header__TopSectionWrap",
          componentId: "sc-13l89u8-1",
        })([
          "display:flex;width:70%;align-items:center;margin:1rem 2rem;@media (max-width:850px){width:95%;}@media (max-width:599px){flex-direction:column;align-items:center;justify-content:center;}",
        ]),
        h = Object(d.a)(m.a).withConfig({
          displayName: "header__Brand",
          componentId: "sc-13l89u8-2",
        })(
          [
            'font-family:"Ubuntu",sans-serif;font-weight:700;font-size:6rem;text-decoration:none;color:',
            ";@media (max-width:1440px){font-size:4rem;}@media (max-width:1200px){font-size:3rem;}@media (max-width:850px){font-size:2rem;}@media (max-width:599px){font-size:5rem;}",
          ],
          c.a
        ),
        g = d.a.img.withConfig({
          displayName: "header__LargeGraphic",
          componentId: "sc-13l89u8-3",
        })([
          "position:absolute;top:0;right:0;width:47%;z-index:-5;@media (max-width:850px){display:none;}",
        ]),
        x = d.a.div.withConfig({
          displayName: "header__LinksContainer",
          componentId: "sc-13l89u8-4",
        })(
          [
            'margin-top:1rem;display:flex;width:100%;justify-content:space-around;@media (max-width:850px){margin-top:0.5rem;}@media (max-width:599px){}a{position:relative;font-family:"Ubuntu",sans-serif;font-weight:300;margin:0.5rem 1rem;color:',
            ';text-decoration:none;font-size:1.5rem;@media (max-width:1440px){font-size:1.3rem;}@media (max-width:1200px){font-size:1.1rem;margin:0.5rem;}@media (max-width:1000px){font-size:1rem;}@media (max-width:599px){font-size:0.9rem;text-align:center;margin:0.1rem;}}a.active:after{content:"";width:70%;position:absolute;left:15%;bottom:-0.75rem;border-width:0 0 2px;border-style:solid;border-color:',
            ";}",
          ],
          c.a,
          c.e
        ),
        w = d.a.div.withConfig({
          displayName: "header__InfoWrapper",
          componentId: "sc-13l89u8-5",
        })([
          "width:45%;margin:12% 6%;@media (max-width:850px){width:70%;display:flex;flex-direction:column;align-items:center;}@media (max-width:599px){width:100%;}",
        ]),
        y = d.a.p.withConfig({
          displayName: "header__Info",
          componentId: "sc-13l89u8-6",
        })(
          [
            'font-family:"Ubuntu",sans-serif;font-weight:300;font-size:2.3rem;line-height:1.2;color:',
            ";margin:0.5rem;margin-left:0;padding:0.5rem;padding-left:1.5rem;border-left:2px solid ",
            ";@media (max-width:1440px){font-size:1.8rem;}@media (max-width:1024px){font-size:1.3rem;}@media (max-width:850px){font-size:1.2rem;}@media (max-width:599px){padding:2rem 1rem;margin:0;border:none;text-align:center;}",
          ],
          c.a,
          c.e
        ),
        b = function(e) {
          var t = e.isHome;
          return i.a.createElement(
            f,
            null,
            i.a.createElement(
              u,
              { id: "about" },
              i.a.createElement(h, { to: "/" }, "Сказка"),
              i.a.createElement(
                x,
                null,
                t
                  ? i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        "a",
                        { className: "active", href: "#about" },
                        "О Нас"
                      ),
                      i.a.createElement("a", { href: "#contacts" }, "Где Мы"),
                      i.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/products" },
                        "Продукция"
                      ),
                      i.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/coverage" },
                        "Доставка"
                      )
                    )
                  : i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/about" },
                        "О Нас"
                      ),
                      i.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/partners" },
                        "Партнёрам"
                      ),
                      i.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/products" },
                        "Продукция"
                      ),
                      i.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/contacts" },
                        "Контакты"
                      )
                    )
              ),
              t && i.a.createElement(g, { src: p.a })
            ),
            t &&
              i.a.createElement(
                w,
                null,
                i.a.createElement(
                  y,
                  null,
                  "Компания Сказка занимается дистрибуцией кондитерской продукции на территории Акмолинской и Северо-Казахстанской области"
                ),
                i.a.createElement(s.i, { to: "/contacts" }, "Связаться с нами")
              )
          );
        };
      (b.propTypes = { isHome: r.a.bool }),
        (b.defaultProps = { isHome: !1 }),
        (t.a = b);
    },
    158: function(e, t, a) {
      e.exports = a.p + "static/top_right-ccdca89abd710a780dba12ca2802799c.svg";
    },
    159: function(e, t, a) {
      "use strict";
      var n = a(151),
        i = a(152),
        o = a(0),
        r = a.n(o),
        m = a(153),
        d = i.a.footer.withConfig({
          displayName: "footer__Wrapper",
          componentId: "sc-12ujmun-0",
        })(
          [
            "background:",
            ';padding:2rem 0;width:auto;display:flex;align-items:center;justify-content:center;font-family:"Ubuntu",sans-serif;justify-content:space-evenly;@media (max-width:768px){width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;}',
          ],
          m.c
        ),
        c = Object(i.a)(n.a).withConfig({
          displayName: "footer__Brand",
          componentId: "sc-12ujmun-1",
        })([
          'font-family:"Ubuntu",sans-serif;font-weight:700;font-size:6rem;text-decoration:none;color:white;@media (max-width:1440px){font-size:4rem;}@media (max-width:1200px){font-size:3rem;}@media (max-width:850px){font-size:2rem;}@media (max-width:599px){font-size:5rem;}',
        ]),
        s = i.a.ul.withConfig({
          displayName: "footer__LinksContainer",
          componentId: "sc-12ujmun-2",
        })([
          'width:70%;display:flex;align-items:center;justify-content:space-evenly;@media (max-width:768px){padding:1rem;}@media (max-width:599px){width:100%;padding:1rem 0;}a{color:white;font-size:1.8rem;text-decoration:none;font-weight:300;position:relative;@media (max-width:1024px){font-size:1.3rem;}@media (max-width:599px){font-size:0.9rem;margin:0rem;}}a.active:after{content:"";width:70%;position:absolute;left:15%;bottom:-0.75rem;border-width:0 0 2px;border-style:solid;border-color:white;opacity:1;transition:all 0.2s;}',
        ]);
      t.a = function() {
        return r.a.createElement(
          d,
          null,
          r.a.createElement(c, { to: "/" }, "Сказка"),
          r.a.createElement(
            s,
            null,
            r.a.createElement(
              n.a,
              { activeClassName: "active", to: "/about" },
              "О Нас"
            ),
            r.a.createElement(
              n.a,
              { activeClassName: "active", to: "/partners" },
              "Партнёрам"
            ),
            r.a.createElement(
              n.a,
              { activeClassName: "active", to: "/products" },
              "Продукция"
            ),
            r.a.createElement(
              n.a,
              { activeClassName: "active", to: "/contacts" },
              "Контакты"
            )
          )
        );
      };
    },
    160: function(e, t, a) {
      "use strict";
      var n = a(161),
        i = a(0),
        o = a.n(i),
        r = a(4),
        m = a.n(r),
        d = a(165),
        c = a.n(d);
      function s(e) {
        var t = e.description,
          a = e.lang,
          i = e.meta,
          r = e.keywords,
          m = e.title,
          d = n.data.site,
          s = t || d.siteMetadata.description;
        return o.a.createElement(c.a, {
          htmlAttributes: { lang: a },
          title: m,
          titleTemplate: "%s | " + d.siteMetadata.title,
          meta: [
            { name: "description", content: s },
            { property: "og:title", content: m },
            { property: "og:description", content: s },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: d.siteMetadata.author },
            { name: "twitter:title", content: m },
            { name: "twitter:description", content: s },
          ]
            .concat(
              r.length > 0 ? { name: "keywords", content: r.join(", ") } : []
            )
            .concat(i),
        });
      }
      (s.defaultProps = {
        lang: "en",
        meta: [],
        keywords: [],
        description: "",
      }),
        (s.propTypes = {
          description: m.a.string,
          lang: m.a.string,
          meta: m.a.arrayOf(m.a.object),
          keywords: m.a.arrayOf(m.a.string),
          title: m.a.string.isRequired,
        }),
        (t.a = s);
    },
    161: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              title: "Сказка - Дистрибьютор по северу Казахстана",
              description:
                "Сказка - оптовый дистрибьютор в городах Кокшетау, Петропавл, Костанай и областях. Мы специализируемся в кондитерских изделиях лучших производителей Казахстана, России и Украины.",
              author: "@slavabez",
            },
          },
        },
      };
    },
    163: function(e, t, a) {
      "use strict";
      var n = a(0),
        i = a.n(n),
        o = a(152),
        r = a(157),
        m = a(159),
        d = a(154),
        c = o.a.div.withConfig({
          displayName: "layout__InnerContent",
          componentId: "sc-2gkh1u-0",
        })([
          "min-height:55vh;display:flex;flex-direction:column;align-items:center;",
        ]);
      t.a = function(e) {
        var t = e.children;
        return i.a.createElement(
          d.o,
          null,
          i.a.createElement(r.a, null),
          i.a.createElement(c, null, t),
          i.a.createElement(m.a, null)
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-ffb96df99f4d71a6a6e2.js.map
