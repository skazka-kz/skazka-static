(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    149: function(e, t, i) {
      "use strict";
      i.r(t);
      var a = i(0),
        n = i.n(a),
        o = i(151),
        r = i(152),
        m = i(157),
        d = i(159),
        c = i(154),
        l = function(e) {
          var t = e.children;
          return n.a.createElement(
            c.o,
            null,
            n.a.createElement(m.a, { isHome: !0 }),
            t,
            n.a.createElement(d.a, null)
          );
        },
        s = i(160),
        p = i(168),
        g = i(212),
        u = i.n(g),
        f = i(213),
        x = i.n(f),
        w = i(214),
        h = i.n(w),
        I = i(215),
        b = i.n(I),
        y = [
          { src: u.a, alt: "Borjomi Logo" },
          { src: x.a, alt: "Slavyanka Logo" },
          { src: h.a, alt: "Pobeda Logo" },
          { src: b.a, alt: "Kazkond Logo" },
        ],
        z = i(153),
        C = i(169),
        N = i.n(C),
        j = i(164),
        v = i.n(j),
        M = r.a.div.withConfig({
          displayName: "pages__CardsContainer",
          componentId: "sc-1kdlu6i-0",
        })([
          "display:grid;grid-template-columns:repeat(4,1fr);margin-top:2rem;@media (max-width:768px){grid-template-columns:1fr 1fr;}@media (max-width:599px){grid-template-columns:1fr;}",
        ]),
        L = r.a.div.withConfig({
          displayName: "pages__PartnerCard",
          componentId: "sc-1kdlu6i-1",
        })(
          [
            "display:flex;align-items:center;justify-content:center;margin:1rem;background-color:white;border-radius:3rem;",
            ";height:33rem;padding:2rem;img{width:100%;@media (max-width:768px){width:90%;}@media (max-width:599px){max-height:100%;width:auto;max-width:100%;}}@media (max-width:1440px){height:22rem;}@media (max-width:1024px){height:14rem;}@media (max-width:768px){padding:3rem;margin:1.5rem;}@media (max-width:599px){padding:1rem;margin:1rem;}",
          ],
          z.b
        ),
        Z = r.a.p.withConfig({
          displayName: "pages__Notice",
          componentId: "sc-1kdlu6i-2",
        })(
          [
            'position:relative;font-family:"Ubuntu",sans-serif;font-weight:300;font-size:1.9rem;font-style:italic;color:',
            ";@media (max-width:1440px){font-size:1.7rem;}@media (max-width:1024px){font-size:1.6rem;}@media (max-width:768px){font-size:1.3rem;margin-bottom:2rem;}",
          ],
          z.a
        );
      t.default = function() {
        return n.a.createElement(
          l,
          null,
          n.a.createElement(s.a, { title: "Сказка" }),
          n.a.createElement(
            c.d,
            null,
            n.a.createElement(c.j, { src: N.a, alt: "Decorative graphic" }),
            n.a.createElement(c.n, null, "Наши Партнёры:"),
            n.a.createElement(
              M,
              null,
              y.map(function(e) {
                return n.a.createElement(
                  L,
                  { key: e.alt },
                  n.a.createElement("img", { src: e.src, alt: e.alt })
                );
              })
            ),
            n.a.createElement(Z, null, "И многие другие...")
          ),
          n.a.createElement(
            c.d,
            null,
            n.a.createElement(c.m, { src: v.a, alt: "Decorative graphic" }),
            n.a.createElement(c.n, null, "О Нас"),
            n.a.createElement(
              c.g,
              null,
              n.a.createElement(
                "p",
                null,
                "Компания Сказка - один из крупнейших дистрибьюторов кондитерских изделий по северу Казахстана."
              ),
              n.a.createElement(
                "p",
                null,
                "Мы предоставляем огромный выбор кондитерских изделий производителей Казахстана, России, Украины и Узбекистана. В нашей команде более 70 работников в 3 офисах: Кокшетау, Костанай и Петропавловск."
              ),
              n.a.createElement(
                "p",
                null,
                "Мы специализируемся на дистрибуции кондитерских изделий, таких как шоколад, печенье, пряники, конфеты и прочее, смотрите подробнее на странице ",
                n.a.createElement(o.a, { to: "/products" }, "Продукция"),
                "."
              ),
              n.a.createElement(
                "p",
                null,
                "Наша доставка работает без выходных и доставляет в практически любой населенный пункт в Акмолинской, Костанайской и Северо-Казахстанской области. Подробнее о том, куда мы доставляем смотрите на странице",
                " ",
                n.a.createElement(o.a, { to: "/coverage" }, "Доставка")
              ),
              n.a.createElement(
                "p",
                null,
                "Ищете дистрибьютера для вашего товара? Читайте на странице",
                " ",
                n.a.createElement(o.a, { to: "/partners" }, "Партнёрам"),
                " как мы можем эффективно помочь вам увеличить продажи и присутствие вашего товара в северном Казахстане."
              )
            )
          ),
          n.a.createElement(
            c.d,
            null,
            n.a.createElement(c.j, { src: N.a, alt: "Decorative graphic" }),
            n.a.createElement(c.n, null, "Контакты:"),
            n.a.createElement(p.a, null),
            n.a.createElement(c.i, { to: "/contacts" }, "Связаться с Нами")
          )
        );
      };
    },
    151: function(e, t, i) {
      "use strict";
      var a = i(0),
        n = i.n(a),
        o = i(4),
        r = i.n(o),
        m = i(33),
        d = i.n(m);
      i.d(t, "a", function() {
        return d.a;
      });
      i(155), n.a.createContext({});
      r.a.object, r.a.string.isRequired, r.a.func, r.a.func;
    },
    153: function(e, t, i) {
      "use strict";
      i.d(t, "e", function() {
        return a;
      }),
        i.d(t, "d", function() {
          return n;
        }),
        i.d(t, "a", function() {
          return o;
        }),
        i.d(t, "c", function() {
          return r;
        }),
        i.d(t, "b", function() {
          return m;
        });
      var a = "#F6921E",
        n = "#F05A24",
        o = "#121212",
        r =
          "linear-gradient(\n    75deg,\n    rgba(250, 175, 59, 1),\n    rgba(246, 146, 30, 1)\n  );",
        m = "box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);";
    },
    154: function(e, t, i) {
      "use strict";
      i.d(t, "o", function() {
        return r;
      }),
        i.d(t, "d", function() {
          return m;
        }),
        i.d(t, "f", function() {
          return d;
        }),
        i.d(t, "n", function() {
          return c;
        }),
        i.d(t, "l", function() {
          return l;
        }),
        i.d(t, "h", function() {
          return s;
        }),
        i.d(t, "k", function() {
          return p;
        }),
        i.d(t, "g", function() {
          return g;
        }),
        i.d(t, "i", function() {
          return u;
        }),
        i.d(t, "j", function() {
          return x;
        }),
        i.d(t, "m", function() {
          return w;
        }),
        i.d(t, "e", function() {
          return h;
        }),
        i.d(t, "c", function() {
          return I;
        }),
        i.d(t, "b", function() {
          return b;
        }),
        i.d(t, "a", function() {
          return y;
        });
      var a = i(152),
        n = i(151),
        o = i(153),
        r = a.a.main.withConfig({
          displayName: "styled__SiteWrapper",
          componentId: "sc-7d1c4q-0",
        })(['font-family:"Ubuntu",sans-serif;']),
        m = a.a.section.withConfig({
          displayName: "styled__ContentWrapper",
          componentId: "sc-7d1c4q-1",
        })(
          [
            "display:flex;flex-direction:column;align-items:center;margin:10rem 0;position:relative;padding:0 2rem;color:",
            ";@media (max-width:1024px){margin:5% 0;padding:0;}&:last-of-type{margin-bottom:2rem;}",
          ],
          o.a
        ),
        d = Object(a.a)(m).withConfig({
          displayName: "styled__FlexibleWrapper",
          componentId: "sc-7d1c4q-2",
        })(["width:100%;margin:5rem 0;padding:0;", ""], function(e) {
          return e.topMargin ? "margin-top: " + e.topMargin + ";" : "";
        }),
        c = a.a.h1.withConfig({
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
        l = a.a.div.withConfig({
          displayName: "styled__PostWrapper",
          componentId: "sc-7d1c4q-4",
        })([
          "display:flex;flex-direction:column;align-items:center;justify-content:center;max-width:900px;",
        ]),
        s = a.a.h1.withConfig({
          displayName: "styled__H1",
          componentId: "sc-7d1c4q-5",
        })([
          "font-size:2.5rem;font-weight:700;margin:0 0 2rem;text-align:center;@media (max-width:768px){font-size:2rem;margin:1.5rem 0;}@media (max-width:400px){font-size:1.75rem;margin:1.2rem 0;}",
        ]),
        p = a.a.p.withConfig({
          displayName: "styled__Paragraph",
          componentId: "sc-7d1c4q-6",
        })(["font-size:1rem;margin:0.5rem;text-align:center;"]),
        g = a.a.div.withConfig({
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
        u = Object(a.a)(n.a).withConfig({
          displayName: "styled__InfoButtonLink",
          componentId: "sc-7d1c4q-8",
        })(
          [
            "display:inline-block;margin:2rem 0;padding:1rem 2rem;border-radius:3rem;border:none;background:",
            ';font-family:"Ubuntu",sans-serif;font-size:2.3rem;font-weight:700;color:white;text-decoration:none;@media (max-width:1440px){font-size:1.8rem;}@media (max-width:1024px){font-size:1.3rem;}@media (max-width:850px){font-size:1.2rem;margin:2rem;}@media (max-width:599px){padding:1rem 2rem;}',
          ],
          o.c
        ),
        f = a.a.img.withConfig({
          displayName: "styled__FixedImage",
          componentId: "sc-7d1c4q-9",
        })(["position:absolute;z-index:-10;top:-30%;width:20%;"]),
        x = Object(a.a)(f).withConfig({
          displayName: "styled__LeftGraphic",
          componentId: "sc-7d1c4q-10",
        })([
          "position:absolute;left:0;@media (max-width:1024px){top:0;}@media (max-width:768px){width:30%;}@media (max-width:599px){top:5%;}",
        ]),
        w = Object(a.a)(f).withConfig({
          displayName: "styled__RightGraphic",
          componentId: "sc-7d1c4q-11",
        })([
          "position:absolute;right:0;@media (max-width:1024px){top:0;}@media (max-width:768px){width:40%;}",
        ]),
        h = a.a.div.withConfig({
          displayName: "styled__CtaContainer",
          componentId: "sc-7d1c4q-12",
        })([
          "display:flex;width:100%;align-items:center;justify-content:center;margin:2rem;@media (max-width:600px){flex-direction:column;}",
        ]),
        I = Object(a.a)(n.a).withConfig({
          displayName: "styled__CallToActionLink",
          componentId: "sc-7d1c4q-13",
        })(
          [
            "margin:1rem;padding:1.5rem;background:",
            ";color:white;text-decoration:none;font-weight:700;font-size:1.5rem;border-radius:1rem;@media (max-width:600px){width:70%;text-align:center;}",
          ],
          o.c
        ),
        b = a.a.a.withConfig({
          displayName: "styled__CallToActionA",
          componentId: "sc-7d1c4q-14",
        })(
          [
            "margin:1rem;padding:1.5rem;background:",
            ";color:white;text-decoration:none;font-weight:700;font-size:1.5rem;border-radius:1rem;@media (max-width:600px){width:70%;text-align:center;}",
          ],
          o.c
        ),
        y = a.a.span.withConfig({
          displayName: "styled__Accent",
          componentId: "sc-7d1c4q-15",
        })(["font-weight:400;font-style:italic;"]);
    },
    155: function(e, t, i) {
      var a;
      e.exports = ((a = i(156)) && a.default) || a;
    },
    156: function(e, t, i) {
      "use strict";
      i.r(t);
      i(34);
      var a = i(0),
        n = i.n(a),
        o = i(4),
        r = i.n(o),
        m = i(55),
        d = i(2),
        c = function(e) {
          var t = e.location,
            i = d.default.getResourcesForPathnameSync(t.pathname);
          return n.a.createElement(
            m.a,
            Object.assign({ location: t, pageResources: i }, i.json)
          );
        };
      (c.propTypes = {
        location: r.a.shape({ pathname: r.a.string.isRequired }).isRequired,
      }),
        (t.default = c);
    },
    157: function(e, t, i) {
      "use strict";
      var a = i(0),
        n = i.n(a),
        o = i(4),
        r = i.n(o),
        m = i(151),
        d = i(152),
        c = i(153),
        l = i(154),
        s = i(158),
        p = i.n(s),
        g = d.a.header.withConfig({
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
        f = Object(d.a)(m.a).withConfig({
          displayName: "header__Brand",
          componentId: "sc-13l89u8-2",
        })(
          [
            'font-family:"Ubuntu",sans-serif;font-weight:700;font-size:6rem;text-decoration:none;color:',
            ";@media (max-width:1440px){font-size:4rem;}@media (max-width:1200px){font-size:3rem;}@media (max-width:850px){font-size:2rem;}@media (max-width:599px){font-size:5rem;}",
          ],
          c.a
        ),
        x = d.a.img.withConfig({
          displayName: "header__LargeGraphic",
          componentId: "sc-13l89u8-3",
        })([
          "position:absolute;top:0;right:0;width:47%;z-index:-5;@media (max-width:850px){display:none;}",
        ]),
        w = d.a.div.withConfig({
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
        h = d.a.div.withConfig({
          displayName: "header__InfoWrapper",
          componentId: "sc-13l89u8-5",
        })([
          "width:45%;margin:12% 6%;@media (max-width:850px){width:70%;display:flex;flex-direction:column;align-items:center;}@media (max-width:599px){width:100%;}",
        ]),
        I = d.a.p.withConfig({
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
          return n.a.createElement(
            g,
            null,
            n.a.createElement(
              u,
              { id: "about" },
              n.a.createElement(f, { to: "/" }, "Сказка"),
              n.a.createElement(
                w,
                null,
                t
                  ? n.a.createElement(
                      n.a.Fragment,
                      null,
                      n.a.createElement(
                        "a",
                        { className: "active", href: "#about" },
                        "О Нас"
                      ),
                      n.a.createElement("a", { href: "#contacts" }, "Где Мы"),
                      n.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/products" },
                        "Продукция"
                      ),
                      n.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/coverage" },
                        "Доставка"
                      )
                    )
                  : n.a.createElement(
                      n.a.Fragment,
                      null,
                      n.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/about" },
                        "О Нас"
                      ),
                      n.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/partners" },
                        "Партнёрам"
                      ),
                      n.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/products" },
                        "Продукция"
                      ),
                      n.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/contacts" },
                        "Контакты"
                      )
                    )
              ),
              t && n.a.createElement(x, { src: p.a })
            ),
            t &&
              n.a.createElement(
                h,
                null,
                n.a.createElement(
                  I,
                  null,
                  "Компания Сказка занимается дистрибуцией кондитерской продукции на территории Акмолинской и Северо-Казахстанской области"
                ),
                n.a.createElement(l.i, { to: "/contacts" }, "Связаться с нами")
              )
          );
        };
      (b.propTypes = { isHome: r.a.bool }),
        (b.defaultProps = { isHome: !1 }),
        (t.a = b);
    },
    158: function(e, t, i) {
      e.exports = i.p + "static/top_right-ccdca89abd710a780dba12ca2802799c.svg";
    },
    159: function(e, t, i) {
      "use strict";
      var a = i(151),
        n = i(152),
        o = i(0),
        r = i.n(o),
        m = i(153),
        d = n.a.footer.withConfig({
          displayName: "footer__Wrapper",
          componentId: "sc-12ujmun-0",
        })(
          [
            "background:",
            ';padding:2rem 0;width:auto;display:flex;align-items:center;justify-content:center;font-family:"Ubuntu",sans-serif;justify-content:space-evenly;@media (max-width:768px){width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;}',
          ],
          m.c
        ),
        c = Object(n.a)(a.a).withConfig({
          displayName: "footer__Brand",
          componentId: "sc-12ujmun-1",
        })([
          'font-family:"Ubuntu",sans-serif;font-weight:700;font-size:6rem;text-decoration:none;color:white;@media (max-width:1440px){font-size:4rem;}@media (max-width:1200px){font-size:3rem;}@media (max-width:850px){font-size:2rem;}@media (max-width:599px){font-size:5rem;}',
        ]),
        l = n.a.ul.withConfig({
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
            l,
            null,
            r.a.createElement(
              a.a,
              { activeClassName: "active", to: "/about" },
              "О Нас"
            ),
            r.a.createElement(
              a.a,
              { activeClassName: "active", to: "/partners" },
              "Партнёрам"
            ),
            r.a.createElement(
              a.a,
              { activeClassName: "active", to: "/products" },
              "Продукция"
            ),
            r.a.createElement(
              a.a,
              { activeClassName: "active", to: "/contacts" },
              "Контакты"
            )
          )
        );
      };
    },
    160: function(e, t, i) {
      "use strict";
      var a = i(161),
        n = i(0),
        o = i.n(n),
        r = i(4),
        m = i.n(r),
        d = i(165),
        c = i.n(d);
      function l(e) {
        var t = e.description,
          i = e.lang,
          n = e.meta,
          r = e.keywords,
          m = e.title,
          d = a.data.site,
          l = t || d.siteMetadata.description;
        return o.a.createElement(c.a, {
          htmlAttributes: { lang: i },
          title: m,
          titleTemplate: "%s | " + d.siteMetadata.title,
          meta: [
            { name: "description", content: l },
            { property: "og:title", content: m },
            { property: "og:description", content: l },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: d.siteMetadata.author },
            { name: "twitter:title", content: m },
            { name: "twitter:description", content: l },
          ]
            .concat(
              r.length > 0 ? { name: "keywords", content: r.join(", ") } : []
            )
            .concat(n),
        });
      }
      (l.defaultProps = {
        lang: "en",
        meta: [],
        keywords: [],
        description: "",
      }),
        (l.propTypes = {
          description: m.a.string,
          lang: m.a.string,
          meta: m.a.arrayOf(m.a.object),
          keywords: m.a.arrayOf(m.a.string),
          title: m.a.string.isRequired,
        }),
        (t.a = l);
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
    164: function(e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i0KHQu9C+0LlfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MzIuOCA4NzguMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTMyLjggODc4LjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOm5vbmU7fQ0KCS5zdDF7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS00ODctMTQ5SDM1NnYxMzY2LjVILTQ4N1YtMTQ5eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS04NC4xLTE2Mi40SDc1OXYxMzY2LjVILTg0LjFWLTE2Mi40eiIvPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItOTczLjkyIiB5MT0iLTQ0MC45NDAyIiB4Mj0iLTQ0MS4xIiB5Mj0iLTQ0MC45NDAyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgOTczLjkyIDg4MCkiPg0KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUFGM0I7c3RvcC1vcGFjaXR5OjAuNCIvPg0KCTxzdG9wICBvZmZzZXQ9IjYuMDAwMDAwZS0wMiIgc3R5bGU9InN0b3AtY29sb3I6I0ZBQUYzQjtzdG9wLW9wYWNpdHk6MC40OCIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuMiIgc3R5bGU9InN0b3AtY29sb3I6I0ZBQUYzQjtzdG9wLW9wYWNpdHk6MC42NCIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuMzUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUFGM0I7c3RvcC1vcGFjaXR5OjAuNzciLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUFGM0I7c3RvcC1vcGFjaXR5OjAuODciLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjY1IiBzdHlsZT0ic3RvcC1jb2xvcjojRkFBRjNCO3N0b3Atb3BhY2l0eTowLjk0Ii8+DQoJPHN0b3AgIG9mZnNldD0iMC44MSIgc3R5bGU9InN0b3AtY29sb3I6I0ZBQUYzQjtzdG9wLW9wYWNpdHk6MC45OSIvPg0KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUFGM0IiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTMyLjgsMEMyNDUuNywxMS43LDAsMjIwLjUsMCwzNzUuNEMwLDUzNC44LDM1OC4zLDU2OSw0OTUuMSw4NDkuNmM5LjgsMjAuMSwyMi43LDI4LjgsMzcuNywyOC41VjB6Ii8+DQo8L3N2Zz4NCg==";
    },
    168: function(e, t, i) {
      "use strict";
      var a = i(0),
        n = i.n(a),
        o = i(152),
        r = i(153),
        m = o.a.div.withConfig({
          displayName: "ContactsSection__ContactsContainer",
          componentId: "bej9zt-0",
        })([
          "display:flex;max-width:1100px;align-items:center;justify-content:space-around;width:100%;@media (max-width:1440px){max-width:900px;}@media (max-width:768px){width:90%;}@media (max-width:599px){flex-direction:column;}",
        ]),
        d = o.a.div.withConfig({
          displayName: "ContactsSection__ContactCard",
          componentId: "bej9zt-1",
        })(
          [
            "margin:1rem;background-color:white;border-radius:1rem;",
            ';display:flex;flex-direction:column;font-family:"Ubuntu",sans-serif;text-align:center;height:30rem;justify-content:space-between;padding:1rem 4rem 5rem;@media (max-width:1440px){height:25rem;}@media (max-width:1024px){padding:2rem 1rem;height:18rem;}',
          ],
          r.b
        ),
        c = o.a.span.withConfig({
          displayName: "ContactsSection__Name",
          componentId: "bej9zt-2",
        })(
          [
            'position:relative;padding:1rem;margin-bottom:0;font-size:3rem;@media (max-width:1440px){font-size:2.3rem;}@media (max-width:1024px){font-size:2rem;}&:after{content:"";width:70%;position:absolute;left:15%;bottom:-0.5rem;border-width:0 0 2px;border-style:solid;border-color:',
            ";}",
          ],
          r.e
        ),
        l = o.a.span.withConfig({
          displayName: "ContactsSection__Code",
          componentId: "bej9zt-3",
        })([
          "font-size:2.2rem;font-style:italic;font-weight:300;margin:0.3rem;@media (max-width:1440px){font-size:1.8rem;}@media (max-width:1024px){font-size:1.3rem;}",
        ]),
        s = o.a.span.withConfig({
          displayName: "ContactsSection__Phone",
          componentId: "bej9zt-4",
        })(
          [
            "font-size:2.2rem;font-weight:300;margin:0.3rem;a{color:",
            ";text-decoration:none;}@media (max-width:1440px){font-size:1.8rem;}@media (max-width:1024px){font-size:1.3rem;}@media (max-width:600px){a{color:",
            ";text-decoration:underline;}}",
          ],
          r.a,
          r.e
        ),
        p = o.a.address.withConfig({
          displayName: "ContactsSection__Address",
          componentId: "bej9zt-5",
        })([
          "font-size:3rem;font-weight:700;@media (max-width:1440px){font-size:2.2rem;}@media (max-width:1024px){font-size:1.8rem;}",
        ]),
        g = o.a.a.withConfig({
          displayName: "ContactsSection__MapLink",
          componentId: "bej9zt-6",
        })(
          [
            "font-size:2.2rem;color:",
            ";font-weight:300;text-decoration:none;@media (max-width:1440px){font-size:1.8rem;}@media (max-width:1024px){font-size:1.3rem;}",
          ],
          r.e
        ),
        u = o.a.div.withConfig({
          displayName: "ContactsSection__PhoneContainer",
          componentId: "bej9zt-7",
        })(["display:flex;flex-direction:column;"]);
      t.a = function() {
        return n.a.createElement(
          m,
          { id: "contacts" },
          n.a.createElement(
            d,
            null,
            n.a.createElement(c, null, "Кокшетау"),
            n.a.createElement(
              u,
              null,
              n.a.createElement(l, null, "+7 (7162)"),
              n.a.createElement(
                s,
                null,
                n.a.createElement("a", { href: "tel:+77162254545" }, "25-45-45")
              ),
              n.a.createElement(
                s,
                null,
                n.a.createElement("a", { href: "tel:+77162254545" }, "25-67-25")
              )
            ),
            n.a.createElement(p, null, "Ауэзова, 191 а/3"),
            n.a.createElement(
              g,
              {
                target: "_blank",
                href:
                  "https://2gis.kz/kokshetau/geo/70030076161419529%2C69.393704%2C53.290187?queryState=center%2F69.393701%2C53.290189%2Fzoom%2F18",
              },
              "Где это?"
            )
          ),
          n.a.createElement(
            d,
            null,
            n.a.createElement(c, null, "Костанай"),
            n.a.createElement(
              u,
              null,
              n.a.createElement(l, null, "+7 (7142)"),
              n.a.createElement(
                s,
                null,
                n.a.createElement("a", { href: "tel:+77142392427" }, "39-24-27")
              )
            ),
            n.a.createElement(p, null, "Карбышева, 117"),
            n.a.createElement(
              g,
              { target: "_blank", href: "https://yandex.kz/maps/-/CCBgVL7J" },
              "Где это?"
            )
          )
        );
      };
    },
    169: function(e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i0KHQu9C+0LlfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMzMuMyA3MjUuOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzMzLjMgNzI1Ljg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOm5vbmU7fQ0KCS5zdDF7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS00ODYuOS0yMjUuM2g4NDMuMXYxMzY2LjVoLTg0My4xVi0yMjUuM3oiLz4NCjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTg5MC45NSIgeTE9Ijc4Ny4xMTI1IiB4Mj0iOTMuNTYiIHkyPSI3NjQuNjQyNSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSA0ODYuODcgMTE0MC43OCkiPg0KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUFGM0I7c3RvcC1vcGFjaXR5OjAuNCIvPg0KCTxzdG9wICBvZmZzZXQ9IjYuMDAwMDAwZS0wMiIgc3R5bGU9InN0b3AtY29sb3I6I0ZBQUYzQjtzdG9wLW9wYWNpdHk6MC40OCIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuMiIgc3R5bGU9InN0b3AtY29sb3I6I0ZBQUYzQjtzdG9wLW9wYWNpdHk6MC42NCIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuMzUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUFGM0I7c3RvcC1vcGFjaXR5OjAuNzciLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUFGM0I7c3RvcC1vcGFjaXR5OjAuODciLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjY1IiBzdHlsZT0ic3RvcC1jb2xvcjojRkFBRjNCO3N0b3Atb3BhY2l0eTowLjk0Ii8+DQoJPHN0b3AgIG9mZnNldD0iMC44MSIgc3R5bGU9InN0b3AtY29sb3I6I0ZBQUYzQjtzdG9wLW9wYWNpdHk6MC45OSIvPg0KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUFGM0IiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjUxLjUsMTE0LjVDMTc0LjMsNTYuOCw4Ni41LDE5LjYsMCwwdjcyNS44Qzk2LjMsNjc1LDE4Ni45LDYxMS42LDIyMy4zLDU2Mi45DQoJQzMxOC44LDQzNS4xLDQwMC4yLDIyNS43LDI1MS41LDExNC41eiIvPg0KPC9zdmc+DQo=";
    },
    212: function(e, t, i) {
      e.exports =
        i.p + "static/borjomi_logo-b447c67183e8ddda378b6d7160e45021.jpg";
    },
    213: function(e, t, i) {
      e.exports =
        i.p + "static/slavyanka_logo-9c0ecce824fdfb03a0f3e629459a3dfc.png";
    },
    214: function(e, t, i) {
      e.exports =
        i.p + "static/pobeda_logo-1bed3b987580927db5ed44fdabce5d2b.png";
    },
    215: function(e, t, i) {
      e.exports =
        i.p + "static/kazkond_logo-79f28e4146bee66416b9134536a71021.png";
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-7b4fdb2e181057cb3ed8.js.map
