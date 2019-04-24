(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    150: function(e, t, i) {
      "use strict";
      i.r(t);
      var n = i(0),
        a = i.n(n),
        o = i(163),
        r = i(160),
        m = i(191),
        c = i.n(m),
        d = (i(172), i(192)),
        l = i.n(d),
        s = i(152),
        p = i(193),
        u = i.n(p),
        f = i(153),
        g = s.a.svg.withConfig({
          displayName: "Spinner__StyledSpinner",
          componentId: "sc-1izyvkc-0",
        })([
          "animation:rotate 2s linear infinite;width:30px;height:30px;margin-left:1rem;& .path{stroke:white;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite;}@keyframes rotate{100%{transform:rotate(360deg);}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0;}50%{stroke-dasharray:90,150;stroke-dashoffset:-35;}100%{stroke-dasharray:90,150;stroke-dashoffset:-124;}}",
        ]),
        h = function() {
          return a.a.createElement(
            g,
            { viewBox: "0 0 50 50" },
            a.a.createElement("circle", {
              className: "path",
              cx: "25",
              cy: "25",
              r: "20",
              fill: "none",
              strokeWidth: "4",
            })
          );
        },
        x = s.a.div.withConfig({
          displayName: "ContactForm__Wrapper",
          componentId: "sc-10kut8q-0",
        })(["margin:1rem;width:100%;max-width:600px;"]),
        w = s.a.form.withConfig({
          displayName: "ContactForm__Form",
          componentId: "sc-10kut8q-1",
        })(["display:flex;flex-direction:column;"]),
        I = s.a.input.withConfig({
          displayName: "ContactForm__PrettyInput",
          componentId: "sc-10kut8q-2",
        })(
          [
            "font-weight:300;",
            ";padding:1rem;border:none;border-radius:0.5rem;margin:0.75rem;color:",
            ";font-size:1.25rem;&::placeholder{font-weight:300;}",
          ],
          f.b,
          f.e
        ),
        y = s.a.textarea.withConfig({
          displayName: "ContactForm__ContentInput",
          componentId: "sc-10kut8q-3",
        })(
          [
            'font-family:"Ubuntu",sans-serif;',
            ";padding:1rem;border:none;border-radius:0.5rem;margin:0.75rem;color:",
            ";font-size:1.25rem;font-weight:300;&::placeholder{font-weight:300;}",
          ],
          f.b,
          f.e
        ),
        b = s.a.button.withConfig({
          displayName: "ContactForm__SubmitButton",
          componentId: "sc-10kut8q-4",
        })(
          [
            "display:flex;align-items:center;align-self:center;margin:1rem 0;padding:1rem 2rem;border-radius:3rem;border:none;background:",
            ';font-family:"Ubuntu",sans-serif;font-size:1.75rem;font-weight:700;color:white;text-decoration:none;@media (max-width:600px){align-self:center;}',
          ],
          f.c
        ),
        C = s.a.span.withConfig({
          displayName: "ContactForm__Notice",
          componentId: "sc-10kut8q-5",
        })(["font-size:1.25rem;color:", ";align-self:center;"], f.d),
        z = function() {
          var e = Object(n.useState)(""),
            t = e[0],
            i = e[1],
            o = Object(n.useState)(""),
            r = o[0],
            m = o[1],
            d = Object(n.useState)(""),
            s = d[0],
            p = d[1],
            f = Object(n.useState)(!1),
            g = f[0],
            z = f[1],
            N = Object(n.useState)(!1),
            v = N[0],
            j = N[1],
            M = ((L = l()(
              c.a.mark(function e(n) {
                var a;
                return c.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            n.preventDefault(),
                            j(!0),
                            (a = u.a.post(
                              "https://rifq7tqdrf.execute-api.eu-central-1.amazonaws.com/prod/send-email",
                              {
                                name: t,
                                title: r,
                                content: s,
                                secret: "kill_all_humans",
                              }
                            )),
                            (e.prev = 3),
                            (e.next = 6),
                            a
                          );
                        case 6:
                          z("Ваше письмо отправлено"),
                            i(""),
                            m(""),
                            p(""),
                            (e.next = 15);
                          break;
                        case 12:
                          (e.prev = 12),
                            (e.t0 = e.catch(3)),
                            z("Ошибка при отправке. Попробуйте позже");
                        case 15:
                          return (e.prev = 15), j(!1), e.finish(15);
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 12, 15, 18]]
                );
              })
            )),
            function(e) {
              return L.apply(this, arguments);
            });
          var L;
          return a.a.createElement(
            x,
            null,
            a.a.createElement(
              w,
              { onSubmit: M },
              a.a.createElement(I, {
                type: "text",
                placeholder: "Ваше имя:",
                onChange: function(e) {
                  i(e.target.value);
                },
                value: t,
                minLength: "3",
                required: !0,
              }),
              a.a.createElement(I, {
                type: "text",
                placeholder: "Тема:",
                onChange: function(e) {
                  m(e.target.value);
                },
                value: r,
                minLength: "3",
                required: !0,
              }),
              a.a.createElement(y, {
                multiline: !0,
                rows: "4",
                placeholder: "Напишите нам, о чём хотите узнать...",
                value: s,
                onChange: function(e) {
                  p(e.target.value);
                },
                minLength: "3",
                required: !0,
              }),
              g ? a.a.createElement(C, null, g) : null,
              a.a.createElement(
                b,
                { type: "submit" },
                "Отправить ",
                v ? a.a.createElement(h, null) : null
              )
            )
          );
        },
        N = i(168),
        v = i(154),
        j = i(169),
        M = i.n(j),
        L = i(164),
        Z = i.n(L);
      t.default = function() {
        return a.a.createElement(
          o.a,
          null,
          a.a.createElement(r.a, { title: "О Нас" }),
          a.a.createElement(
            v.e,
            null,
            a.a.createElement(v.b, { href: "#call" }, "Позвонить"),
            a.a.createElement(v.b, { href: "#write" }, "Написать")
          ),
          a.a.createElement(
            v.f,
            { topMargin: "0" },
            a.a.createElement(v.m, { src: Z.a }),
            a.a.createElement(v.n, { id: "call" }, "Контакты"),
            a.a.createElement(N.a, null)
          ),
          a.a.createElement(
            v.f,
            null,
            a.a.createElement(v.j, { src: M.a }),
            a.a.createElement(v.n, { id: "write" }, "Написать нам"),
            a.a.createElement(z, null)
          )
        );
      };
    },
    151: function(e, t, i) {
      "use strict";
      var n = i(0),
        a = i.n(n),
        o = i(4),
        r = i.n(o),
        m = i(33),
        c = i.n(m);
      i.d(t, "a", function() {
        return c.a;
      });
      i(155), a.a.createContext({});
      r.a.object, r.a.string.isRequired, r.a.func, r.a.func;
    },
    153: function(e, t, i) {
      "use strict";
      i.d(t, "e", function() {
        return n;
      }),
        i.d(t, "d", function() {
          return a;
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
      var n = "#F6921E",
        a = "#F05A24",
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
          return c;
        }),
        i.d(t, "n", function() {
          return d;
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
          return u;
        }),
        i.d(t, "i", function() {
          return f;
        }),
        i.d(t, "j", function() {
          return h;
        }),
        i.d(t, "m", function() {
          return x;
        }),
        i.d(t, "e", function() {
          return w;
        }),
        i.d(t, "c", function() {
          return I;
        }),
        i.d(t, "b", function() {
          return y;
        }),
        i.d(t, "a", function() {
          return b;
        });
      var n = i(152),
        a = i(151),
        o = i(153),
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
        c = Object(n.a)(m).withConfig({
          displayName: "styled__FlexibleWrapper",
          componentId: "sc-7d1c4q-2",
        })(["width:100%;margin:5rem 0;padding:0;", ""], function(e) {
          return e.topMargin ? "margin-top: " + e.topMargin + ";" : "";
        }),
        d = n.a.h1.withConfig({
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
        l = n.a.div.withConfig({
          displayName: "styled__PostWrapper",
          componentId: "sc-7d1c4q-4",
        })([
          "display:flex;flex-direction:column;align-items:center;justify-content:center;max-width:900px;",
        ]),
        s = n.a.h1.withConfig({
          displayName: "styled__H1",
          componentId: "sc-7d1c4q-5",
        })([
          "font-size:2.5rem;font-weight:700;margin:0 0 2rem;text-align:center;@media (max-width:768px){font-size:2rem;margin:1.5rem 0;}@media (max-width:400px){font-size:1.75rem;margin:1.2rem 0;}",
        ]),
        p = n.a.p.withConfig({
          displayName: "styled__Paragraph",
          componentId: "sc-7d1c4q-6",
        })(["font-size:1rem;margin:0.5rem;text-align:center;"]),
        u = n.a.div.withConfig({
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
        f = Object(n.a)(a.a).withConfig({
          displayName: "styled__InfoButtonLink",
          componentId: "sc-7d1c4q-8",
        })(
          [
            "display:inline-block;margin:2rem 0;padding:1rem 2rem;border-radius:3rem;border:none;background:",
            ';font-family:"Ubuntu",sans-serif;font-size:2.3rem;font-weight:700;color:white;text-decoration:none;@media (max-width:1440px){font-size:1.8rem;}@media (max-width:1024px){font-size:1.3rem;}@media (max-width:850px){font-size:1.2rem;margin:2rem;}@media (max-width:599px){padding:1rem 2rem;}',
          ],
          o.c
        ),
        g = n.a.img.withConfig({
          displayName: "styled__FixedImage",
          componentId: "sc-7d1c4q-9",
        })(["position:absolute;z-index:-10;top:-30%;width:20%;"]),
        h = Object(n.a)(g).withConfig({
          displayName: "styled__LeftGraphic",
          componentId: "sc-7d1c4q-10",
        })([
          "position:absolute;left:0;@media (max-width:1024px){top:0;}@media (max-width:768px){width:30%;}@media (max-width:599px){top:5%;}",
        ]),
        x = Object(n.a)(g).withConfig({
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
        I = Object(n.a)(a.a).withConfig({
          displayName: "styled__CallToActionLink",
          componentId: "sc-7d1c4q-13",
        })(
          [
            "margin:1rem;padding:1.5rem;background:",
            ";color:white;text-decoration:none;font-weight:700;font-size:1.5rem;border-radius:1rem;@media (max-width:600px){width:70%;text-align:center;}",
          ],
          o.c
        ),
        y = n.a.a.withConfig({
          displayName: "styled__CallToActionA",
          componentId: "sc-7d1c4q-14",
        })(
          [
            "margin:1rem;padding:1.5rem;background:",
            ";color:white;text-decoration:none;font-weight:700;font-size:1.5rem;border-radius:1rem;@media (max-width:600px){width:70%;text-align:center;}",
          ],
          o.c
        ),
        b = n.a.span.withConfig({
          displayName: "styled__Accent",
          componentId: "sc-7d1c4q-15",
        })(["font-weight:400;font-style:italic;"]);
    },
    155: function(e, t, i) {
      var n;
      e.exports = ((n = i(156)) && n.default) || n;
    },
    156: function(e, t, i) {
      "use strict";
      i.r(t);
      i(34);
      var n = i(0),
        a = i.n(n),
        o = i(4),
        r = i.n(o),
        m = i(55),
        c = i(2),
        d = function(e) {
          var t = e.location,
            i = c.default.getResourcesForPathnameSync(t.pathname);
          return a.a.createElement(
            m.a,
            Object.assign({ location: t, pageResources: i }, i.json)
          );
        };
      (d.propTypes = {
        location: r.a.shape({ pathname: r.a.string.isRequired }).isRequired,
      }),
        (t.default = d);
    },
    157: function(e, t, i) {
      "use strict";
      var n = i(0),
        a = i.n(n),
        o = i(4),
        r = i.n(o),
        m = i(151),
        c = i(152),
        d = i(153),
        l = i(154),
        s = i(158),
        p = i.n(s),
        u = c.a.header.withConfig({
          displayName: "header__Wrap",
          componentId: "sc-13l89u8-0",
        })(
          [
            "color:",
            ";@media (max-width:850px){display:flex;flex-direction:column;align-items:center;justify-content:center;}",
          ],
          d.a
        ),
        f = c.a.div.withConfig({
          displayName: "header__TopSectionWrap",
          componentId: "sc-13l89u8-1",
        })([
          "display:flex;width:70%;align-items:center;margin:1rem 2rem;@media (max-width:850px){width:95%;}@media (max-width:599px){flex-direction:column;align-items:center;justify-content:center;}",
        ]),
        g = Object(c.a)(m.a).withConfig({
          displayName: "header__Brand",
          componentId: "sc-13l89u8-2",
        })(
          [
            'font-family:"Ubuntu",sans-serif;font-weight:700;font-size:6rem;text-decoration:none;color:',
            ";@media (max-width:1440px){font-size:4rem;}@media (max-width:1200px){font-size:3rem;}@media (max-width:850px){font-size:2rem;}@media (max-width:599px){font-size:5rem;}",
          ],
          d.a
        ),
        h = c.a.img.withConfig({
          displayName: "header__LargeGraphic",
          componentId: "sc-13l89u8-3",
        })([
          "position:absolute;top:0;right:0;width:47%;z-index:-5;@media (max-width:850px){display:none;}",
        ]),
        x = c.a.div.withConfig({
          displayName: "header__LinksContainer",
          componentId: "sc-13l89u8-4",
        })(
          [
            'margin-top:1rem;display:flex;width:100%;justify-content:space-around;@media (max-width:850px){margin-top:0.5rem;}@media (max-width:599px){}a{position:relative;font-family:"Ubuntu",sans-serif;font-weight:300;margin:0.5rem 1rem;color:',
            ';text-decoration:none;font-size:1.5rem;@media (max-width:1440px){font-size:1.3rem;}@media (max-width:1200px){font-size:1.1rem;margin:0.5rem;}@media (max-width:1000px){font-size:1rem;}@media (max-width:599px){font-size:0.9rem;text-align:center;margin:0.1rem;}}a.active:after{content:"";width:70%;position:absolute;left:15%;bottom:-0.75rem;border-width:0 0 2px;border-style:solid;border-color:',
            ";}",
          ],
          d.a,
          d.e
        ),
        w = c.a.div.withConfig({
          displayName: "header__InfoWrapper",
          componentId: "sc-13l89u8-5",
        })([
          "width:45%;margin:12% 6%;@media (max-width:850px){width:70%;display:flex;flex-direction:column;align-items:center;}@media (max-width:599px){width:100%;}",
        ]),
        I = c.a.p.withConfig({
          displayName: "header__Info",
          componentId: "sc-13l89u8-6",
        })(
          [
            'font-family:"Ubuntu",sans-serif;font-weight:300;font-size:2.3rem;line-height:1.2;color:',
            ";margin:0.5rem;margin-left:0;padding:0.5rem;padding-left:1.5rem;border-left:2px solid ",
            ";@media (max-width:1440px){font-size:1.8rem;}@media (max-width:1024px){font-size:1.3rem;}@media (max-width:850px){font-size:1.2rem;}@media (max-width:599px){padding:2rem 1rem;margin:0;border:none;text-align:center;}",
          ],
          d.a,
          d.e
        ),
        y = function(e) {
          var t = e.isHome;
          return a.a.createElement(
            u,
            null,
            a.a.createElement(
              f,
              { id: "about" },
              a.a.createElement(g, { to: "/" }, "Сказка"),
              a.a.createElement(
                x,
                null,
                t
                  ? a.a.createElement(
                      a.a.Fragment,
                      null,
                      a.a.createElement(
                        "a",
                        { className: "active", href: "#about" },
                        "О Нас"
                      ),
                      a.a.createElement("a", { href: "#contacts" }, "Где Мы"),
                      a.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/products" },
                        "Продукция"
                      ),
                      a.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/coverage" },
                        "Доставка"
                      )
                    )
                  : a.a.createElement(
                      a.a.Fragment,
                      null,
                      a.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/about" },
                        "О Нас"
                      ),
                      a.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/partners" },
                        "Партнёрам"
                      ),
                      a.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/products" },
                        "Продукция"
                      ),
                      a.a.createElement(
                        m.a,
                        { activeClassName: "active", to: "/contacts" },
                        "Контакты"
                      )
                    )
              ),
              t && a.a.createElement(h, { src: p.a })
            ),
            t &&
              a.a.createElement(
                w,
                null,
                a.a.createElement(
                  I,
                  null,
                  "Компания Сказка занимается дистрибуцией кондитерской продукции на территории Акмолинской и Северо-Казахстанской области"
                ),
                a.a.createElement(l.i, { to: "/contacts" }, "Связаться с нами")
              )
          );
        };
      (y.propTypes = { isHome: r.a.bool }),
        (y.defaultProps = { isHome: !1 }),
        (t.a = y);
    },
    158: function(e, t, i) {
      e.exports = i.p + "static/top_right-ccdca89abd710a780dba12ca2802799c.svg";
    },
    159: function(e, t, i) {
      "use strict";
      var n = i(151),
        a = i(152),
        o = i(0),
        r = i.n(o),
        m = i(153),
        c = a.a.footer.withConfig({
          displayName: "footer__Wrapper",
          componentId: "sc-12ujmun-0",
        })(
          [
            "background:",
            ';padding:2rem 0;width:auto;display:flex;align-items:center;justify-content:center;font-family:"Ubuntu",sans-serif;justify-content:space-evenly;@media (max-width:768px){width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;}',
          ],
          m.c
        ),
        d = Object(a.a)(n.a).withConfig({
          displayName: "footer__Brand",
          componentId: "sc-12ujmun-1",
        })([
          'font-family:"Ubuntu",sans-serif;font-weight:700;font-size:6rem;text-decoration:none;color:white;@media (max-width:1440px){font-size:4rem;}@media (max-width:1200px){font-size:3rem;}@media (max-width:850px){font-size:2rem;}@media (max-width:599px){font-size:5rem;}',
        ]),
        l = a.a.ul.withConfig({
          displayName: "footer__LinksContainer",
          componentId: "sc-12ujmun-2",
        })([
          'width:70%;display:flex;align-items:center;justify-content:space-evenly;@media (max-width:768px){padding:1rem;}@media (max-width:599px){width:100%;padding:1rem 0;}a{color:white;font-size:1.8rem;text-decoration:none;font-weight:300;position:relative;@media (max-width:1024px){font-size:1.3rem;}@media (max-width:599px){font-size:0.9rem;margin:0rem;}}a.active:after{content:"";width:70%;position:absolute;left:15%;bottom:-0.75rem;border-width:0 0 2px;border-style:solid;border-color:white;opacity:1;transition:all 0.2s;}',
        ]);
      t.a = function() {
        return r.a.createElement(
          c,
          null,
          r.a.createElement(d, { to: "/" }, "Сказка"),
          r.a.createElement(
            l,
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
    160: function(e, t, i) {
      "use strict";
      var n = i(161),
        a = i(0),
        o = i.n(a),
        r = i(4),
        m = i.n(r),
        c = i(165),
        d = i.n(c);
      function l(e) {
        var t = e.description,
          i = e.lang,
          a = e.meta,
          r = e.keywords,
          m = e.title,
          c = n.data.site,
          l = t || c.siteMetadata.description;
        return o.a.createElement(d.a, {
          htmlAttributes: { lang: i },
          title: m,
          titleTemplate: "%s | " + c.siteMetadata.title,
          meta: [
            { name: "description", content: l },
            { property: "og:title", content: m },
            { property: "og:description", content: l },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: c.siteMetadata.author },
            { name: "twitter:title", content: m },
            { name: "twitter:description", content: l },
          ]
            .concat(
              r.length > 0 ? { name: "keywords", content: r.join(", ") } : []
            )
            .concat(a),
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
    163: function(e, t, i) {
      "use strict";
      var n = i(0),
        a = i.n(n),
        o = i(152),
        r = i(157),
        m = i(159),
        c = i(154),
        d = o.a.div.withConfig({
          displayName: "layout__InnerContent",
          componentId: "sc-2gkh1u-0",
        })([
          "min-height:55vh;display:flex;flex-direction:column;align-items:center;",
        ]);
      t.a = function(e) {
        var t = e.children;
        return a.a.createElement(
          c.o,
          null,
          a.a.createElement(r.a, null),
          a.a.createElement(d, null, t),
          a.a.createElement(m.a, null)
        );
      };
    },
    164: function(e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i0KHQu9C+0LlfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MzIuOCA4NzguMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTMyLjggODc4LjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOm5vbmU7fQ0KCS5zdDF7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS00ODctMTQ5SDM1NnYxMzY2LjVILTQ4N1YtMTQ5eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS04NC4xLTE2Mi40SDc1OXYxMzY2LjVILTg0LjFWLTE2Mi40eiIvPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItOTczLjkyIiB5MT0iLTQ0MC45NDAyIiB4Mj0iLTQ0MS4xIiB5Mj0iLTQ0MC45NDAyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgOTczLjkyIDg4MCkiPg0KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUFGM0I7c3RvcC1vcGFjaXR5OjAuNCIvPg0KCTxzdG9wICBvZmZzZXQ9IjYuMDAwMDAwZS0wMiIgc3R5bGU9InN0b3AtY29sb3I6I0ZBQUYzQjtzdG9wLW9wYWNpdHk6MC40OCIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuMiIgc3R5bGU9InN0b3AtY29sb3I6I0ZBQUYzQjtzdG9wLW9wYWNpdHk6MC42NCIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuMzUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUFGM0I7c3RvcC1vcGFjaXR5OjAuNzciLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUFGM0I7c3RvcC1vcGFjaXR5OjAuODciLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjY1IiBzdHlsZT0ic3RvcC1jb2xvcjojRkFBRjNCO3N0b3Atb3BhY2l0eTowLjk0Ii8+DQoJPHN0b3AgIG9mZnNldD0iMC44MSIgc3R5bGU9InN0b3AtY29sb3I6I0ZBQUYzQjtzdG9wLW9wYWNpdHk6MC45OSIvPg0KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUFGM0IiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTMyLjgsMEMyNDUuNywxMS43LDAsMjIwLjUsMCwzNzUuNEMwLDUzNC44LDM1OC4zLDU2OSw0OTUuMSw4NDkuNmM5LjgsMjAuMSwyMi43LDI4LjgsMzcuNywyOC41VjB6Ii8+DQo8L3N2Zz4NCg==";
    },
    168: function(e, t, i) {
      "use strict";
      var n = i(0),
        a = i.n(n),
        o = i(152),
        r = i(153),
        m = o.a.div.withConfig({
          displayName: "ContactsSection__ContactsContainer",
          componentId: "bej9zt-0",
        })([
          "display:flex;max-width:1100px;align-items:center;justify-content:space-around;width:100%;@media (max-width:1440px){max-width:900px;}@media (max-width:768px){width:90%;}@media (max-width:599px){flex-direction:column;}",
        ]),
        c = o.a.div.withConfig({
          displayName: "ContactsSection__ContactCard",
          componentId: "bej9zt-1",
        })(
          [
            "margin:1rem;background-color:white;border-radius:1rem;",
            ';display:flex;flex-direction:column;font-family:"Ubuntu",sans-serif;text-align:center;height:30rem;justify-content:space-between;padding:1rem 4rem 5rem;@media (max-width:1440px){height:25rem;}@media (max-width:1024px){padding:2rem 1rem;height:18rem;}',
          ],
          r.b
        ),
        d = o.a.span.withConfig({
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
        u = o.a.a.withConfig({
          displayName: "ContactsSection__MapLink",
          componentId: "bej9zt-6",
        })(
          [
            "font-size:2.2rem;color:",
            ";font-weight:300;text-decoration:none;@media (max-width:1440px){font-size:1.8rem;}@media (max-width:1024px){font-size:1.3rem;}",
          ],
          r.e
        ),
        f = o.a.div.withConfig({
          displayName: "ContactsSection__PhoneContainer",
          componentId: "bej9zt-7",
        })(["display:flex;flex-direction:column;"]);
      t.a = function() {
        return a.a.createElement(
          m,
          { id: "contacts" },
          a.a.createElement(
            c,
            null,
            a.a.createElement(d, null, "Кокшетау"),
            a.a.createElement(
              f,
              null,
              a.a.createElement(l, null, "+7 (7162)"),
              a.a.createElement(
                s,
                null,
                a.a.createElement("a", { href: "tel:+77162254545" }, "25-45-45")
              ),
              a.a.createElement(
                s,
                null,
                a.a.createElement("a", { href: "tel:+77162254545" }, "25-67-25")
              )
            ),
            a.a.createElement(p, null, "Ауэзова, 191 а/3"),
            a.a.createElement(
              u,
              {
                target: "_blank",
                href:
                  "https://2gis.kz/kokshetau/geo/70030076161419529%2C69.393704%2C53.290187?queryState=center%2F69.393701%2C53.290189%2Fzoom%2F18",
              },
              "Где это?"
            )
          ),
          a.a.createElement(
            c,
            null,
            a.a.createElement(d, null, "Костанай"),
            a.a.createElement(
              f,
              null,
              a.a.createElement(l, null, "+7 (7142)"),
              a.a.createElement(
                s,
                null,
                a.a.createElement("a", { href: "tel:+77142392427" }, "39-24-27")
              )
            ),
            a.a.createElement(p, null, "Карбышева, 117"),
            a.a.createElement(
              u,
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
  },
]);
//# sourceMappingURL=component---src-pages-contacts-js-60e601ae570c71d341d1.js.map
