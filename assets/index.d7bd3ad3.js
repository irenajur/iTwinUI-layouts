import { j as jsx, H as Header$1, a as HeaderLogo, S as SvgImodelHollow, b as HeaderBreadcrumbs, c as HeaderButton, M as MenuItem, d as SvgCheckmark, e as SvgProject, f as MenuDivider, g as SvgModel, I as IconButton, h as SvgNotification, D as DropdownMenu, i as SvgHelpCircular, k as MenuExtraContent, l as jsxs, F as Fragment, T as Text, m as Select, n as SvgExit, U as UserIcon, o as SvgSettings, p as SvgSmileyHappy, q as SvgNews, r as SvgInfoCircular, s as SideNavigation$1, t as SidenavButton, u as SvgHome, v as SvgConfiguration, R as React, w as useTheme, x as SvgMoon, y as SvgSun, z as reactElementToJsxString, A as cx, B as ButtonGroup, C as SvgWindowCollapse, E as SvgWindowFullScreen, L as Link, G as SvgDockRight, J as SvgDockBottom, K as Button, N as SandpackProvider, O as SandpackLayout, P as SandpackCodeViewer, Q as Body, V as Anchor, W as ReactDOM, X as HashRouter, Y as Routes, Z as Route } from "./vendor.2050ea26.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var index$1 = "";
var App$1 = "";
var index = "";
var styles = "";
const DemoHeader = () => {
  return /* @__PURE__ */ jsx(Header$1, {
    appLogo: /* @__PURE__ */ jsx(HeaderLogo, {
      logo: /* @__PURE__ */ jsx(SvgImodelHollow, {}),
      children: "iTwin Services"
    }),
    breadcrumbs: /* @__PURE__ */ jsx(HeaderBreadcrumbs, {
      items: [/* @__PURE__ */ jsx(HeaderButton, {
        name: "Project Alpha",
        description: "0x0123456789",
        startIcon: /* @__PURE__ */ jsx("img", {
          src: "https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",
          alt: "Project thumbnail",
          draggable: "false"
        }),
        onClick: () => {
        },
        menuItems: () => [/* @__PURE__ */ jsx(MenuItem, {
          sublabel: "0x0123456789",
          icon: /* @__PURE__ */ jsx("img", {
            src: "https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",
            alt: "Project thumbnail",
            draggable: "false"
          }),
          badge: /* @__PURE__ */ jsx(SvgCheckmark, {}),
          isSelected: true,
          children: "Project Alpha"
        }, "projectA"), /* @__PURE__ */ jsx(MenuItem, {
          sublabel: "0x0987654321",
          icon: /* @__PURE__ */ jsx(SvgProject, {}),
          children: "Project Beta"
        }, "projectB"), /* @__PURE__ */ jsx(MenuItem, {
          sublabel: "0x0001337420",
          icon: /* @__PURE__ */ jsx(SvgProject, {}),
          children: "Project Charlie"
        }, "projectC"), /* @__PURE__ */ jsx(MenuDivider, {}, "divider"), /* @__PURE__ */ jsx(MenuItem, {
          children: "My projects"
        }, "myProjects")]
      }, "projectBreadcrumb"), /* @__PURE__ */ jsx(HeaderButton, {
        name: "iModel Beta",
        description: "0x0987654321",
        startIcon: /* @__PURE__ */ jsx(SvgModel, {}),
        onClick: () => {
        },
        isActive: true,
        menuItems: () => [/* @__PURE__ */ jsx(MenuItem, {
          sublabel: "0x0123456789",
          icon: /* @__PURE__ */ jsx(SvgModel, {}),
          children: "iModel Alpha"
        }, "iModelA"), /* @__PURE__ */ jsx(MenuItem, {
          sublabel: "0x0987654321",
          icon: /* @__PURE__ */ jsx(SvgModel, {}),
          isSelected: true,
          badge: /* @__PURE__ */ jsx(SvgCheckmark, {}),
          children: "iModel Beta"
        }, "iModelB"), /* @__PURE__ */ jsx(MenuItem, {
          sublabel: "0x0001337420",
          icon: /* @__PURE__ */ jsx(SvgModel, {}),
          children: "iModel Charlie"
        }, "iModelC"), /* @__PURE__ */ jsx(MenuDivider, {}, "divider"), /* @__PURE__ */ jsx(MenuItem, {
          children: "My iModels"
        }, "myiModels")]
      }, "iModelBreadcrumb")]
    }),
    actions: [/* @__PURE__ */ jsx(IconButton, {
      styleType: "borderless",
      children: /* @__PURE__ */ jsx(SvgNotification, {})
    }, "notifications"), /* @__PURE__ */ jsx(DropdownMenu, {
      menuItems: () => [/* @__PURE__ */ jsx(MenuItem, {
        children: "Getting started"
      }, "getting-started"), /* @__PURE__ */ jsx(MenuItem, {
        children: "Report a problem"
      }, "report-a-problem"), /* @__PURE__ */ jsx(MenuItem, {
        children: "Communities"
      }, "communities")],
      children: /* @__PURE__ */ jsx(IconButton, {
        styleType: "borderless",
        children: /* @__PURE__ */ jsx(SvgHelpCircular, {})
      })
    }, "help")],
    userIcon: /* @__PURE__ */ jsx(DropdownMenu, {
      role: "menu",
      menuItems: () => [/* @__PURE__ */ jsx(MenuExtraContent, {
        children: /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(Text, {
            variant: "leading",
            children: "Terry Rivers"
          }), /* @__PURE__ */ jsx(Text, {
            isMuted: true,
            style: {
              marginBottom: 8
            },
            children: "terry.rivers@email.com"
          }), /* @__PURE__ */ jsx(Select, {
            options: [{
              value: "User",
              label: "User"
            }, {
              value: "Moderator",
              label: "Moderator"
            }, {
              value: "Administrator",
              label: "Administrator"
            }],
            value: "Administrator"
          })]
        })
      }, 0), /* @__PURE__ */ jsx(MenuDivider, {}, 1), /* @__PURE__ */ jsx(MenuItem, {
        children: "View profile"
      }, "view-profile"), /* @__PURE__ */ jsx(MenuItem, {
        badge: /* @__PURE__ */ jsx(SvgExit, {}),
        children: "Sign out"
      }, "sign-out")],
      children: /* @__PURE__ */ jsx(IconButton, {
        styleType: "borderless",
        children: /* @__PURE__ */ jsx(UserIcon, {
          size: "medium",
          image: /* @__PURE__ */ jsx("img", {
            src: "https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png",
            alt: "Terry Rivers"
          })
        })
      })
    }, "profile"),
    menuItems: () => [/* @__PURE__ */ jsx(MenuItem, {
      icon: /* @__PURE__ */ jsx(SvgSettings, {}),
      children: "Settings"
    }, "settings"), /* @__PURE__ */ jsx(MenuItem, {
      icon: /* @__PURE__ */ jsx(SvgSmileyHappy, {}),
      children: "Feedback"
    }, "feedback"), /* @__PURE__ */ jsx(MenuItem, {
      icon: /* @__PURE__ */ jsx(SvgNews, {}),
      children: `What's new`
    }, "whats-new"), /* @__PURE__ */ jsx(MenuItem, {
      icon: /* @__PURE__ */ jsx(SvgInfoCircular, {}),
      children: "About"
    }, "about")]
  });
};
const DemoSideNav = () => {
  return /* @__PURE__ */ jsx(SideNavigation$1, {
    className: "app-sidenav",
    expanderPlacement: "bottom",
    items: [/* @__PURE__ */ jsx(SidenavButton, {
      startIcon: /* @__PURE__ */ jsx(SvgHome, {}),
      children: "Home"
    }, "Home"), /* @__PURE__ */ jsx(SidenavButton, {
      startIcon: /* @__PURE__ */ jsx(SvgModel, {}),
      isActive: true,
      children: "Model"
    }, "Model")],
    secondaryItems: [/* @__PURE__ */ jsx(SidenavButton, {
      startIcon: /* @__PURE__ */ jsx(SvgConfiguration, {}),
      children: "Configuration"
    }, "configuration")]
  });
};
var DemoTemplate$1 = "";
const ThemeButton = () => {
  const [theme, setTheme] = React.useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  useTheme(theme);
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ jsx(IconButton, {
    styleType: "default",
    onClick: changeTheme,
    children: theme === "light" ? /* @__PURE__ */ jsx(SvgMoon, {}) : /* @__PURE__ */ jsx(SvgSun, {})
  });
};
const toDemoCode = (code) => {
  return `const Demo = () => {
  return 
    ${code.replace(/\n/g, "\n    ")}
};`;
};
const isTestRun = () => {
  return window.localStorage.getItem("testRun") === "true";
};
const DemoTemplate = (props) => {
  const {
    children,
    title
  } = props;
  const [isFullScreen, setIsFullScreen] = React.useState(isTestRun());
  const [isHorizontal, setIsHorizontal] = React.useState(false);
  const demoCode = toDemoCode(reactElementToJsxString(children));
  return /* @__PURE__ */ jsxs("div", {
    className: cx("demo-template-container", {
      "demo-template-container-vertical": isHorizontal
    }),
    children: [/* @__PURE__ */ jsxs("div", {
      className: "demo-template-content",
      children: [children, !isTestRun() && /* @__PURE__ */ jsxs(ButtonGroup, {
        className: "demo-template-button-overlay",
        children: [/* @__PURE__ */ jsx(ThemeButton, {}), /* @__PURE__ */ jsx(IconButton, {
          onClick: () => setIsFullScreen((f) => !f),
          children: isFullScreen ? /* @__PURE__ */ jsx(SvgWindowCollapse, {}) : /* @__PURE__ */ jsx(SvgWindowFullScreen, {})
        })]
      })]
    }), !isFullScreen && /* @__PURE__ */ jsxs("div", {
      className: "demo-template-code",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "demo-template-code-header",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "demo-template-code-header-left",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "../",
            className: "iui-anchor demo-template-code-header-back",
            children: ".."
          }), /* @__PURE__ */ jsx(Text, {
            as: "h1",
            variant: "title",
            className: "demo-template-code-header-title",
            children: title
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "demo-template-code-header-right",
          children: [/* @__PURE__ */ jsx(IconButton, {
            onClick: () => setIsHorizontal((f) => !f),
            children: isHorizontal ? /* @__PURE__ */ jsx(SvgDockRight, {}) : /* @__PURE__ */ jsx(SvgDockBottom, {})
          }), /* @__PURE__ */ jsx(Button, {
            onClick: () => navigator.clipboard.writeText(demoCode),
            styleType: "high-visibility",
            children: "Copy"
          })]
        })]
      }), /* @__PURE__ */ jsx(SandpackProvider, {
        template: "react-ts",
        children: /* @__PURE__ */ jsx(SandpackLayout, {
          theme: "github-light",
          children: /* @__PURE__ */ jsx(SandpackCodeViewer, {
            code: demoCode,
            showTabs: false,
            showLineNumbers: true,
            wrapContent: true
          })
        })
      })]
    })]
  });
};
var Content = function(props) {
  var children = props.children;
  return React.createElement("div", { className: "iui-layouts-page-content" }, children);
};
Content.displayName = "PageLayout.Content";
var Header = function(props) {
  var children = props.children;
  return React.createElement("div", { className: "iui-layouts-page-header" }, children);
};
Header.displayName = "PageLayout.Header";
var SideNavigation = function(props) {
  var children = props.children;
  return React.createElement("div", { className: "iui-layouts-page-sidenav" }, children);
};
SideNavigation.displayName = "PageLayout.SideNavigation";
var PageLayout = function(props) {
  var children = props.children;
  return React.createElement("div", { className: "iui-layouts-page" }, children);
};
PageLayout.Header = Header;
PageLayout.SideNavigation = SideNavigation;
PageLayout.Content = Content;
const PageLayoutDemo = () => {
  return /* @__PURE__ */ jsx(DemoTemplate, {
    title: "Page Layout",
    children: /* @__PURE__ */ jsxs(PageLayout, {
      children: [/* @__PURE__ */ jsx(PageLayout.Header, {
        children: /* @__PURE__ */ jsx(DemoHeader, {})
      }), /* @__PURE__ */ jsx(PageLayout.SideNavigation, {
        children: /* @__PURE__ */ jsx(DemoSideNav, {})
      }), /* @__PURE__ */ jsx(PageLayout.Content, {
        children: /* @__PURE__ */ jsx("iframe", {
          src: "https://dev.imodeljs.org/sandbox/embed/JonGraft/iTwinUI-Layouts%20demo?editorPane=Hide&headers=Hide",
          loading: "lazy",
          style: {
            border: "none",
            width: "100%",
            height: "100%",
            display: "block"
          },
          sandbox: "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        })
      })]
    })
  });
};
const DEMOS_LIST = [{
  path: "page-layout",
  name: "Page layout",
  component: PageLayoutDemo
}];
var GitHubBanner$1 = "";
const GitHubBanner = () => {
  return /* @__PURE__ */ jsx("a", {
    href: "https://github.com/iTwin/iTwinUI-layouts",
    className: "github-corner",
    "aria-label": "View source on GitHub",
    target: "_blank",
    rel: "noreferrer",
    children: /* @__PURE__ */ jsxs("svg", {
      width: "80",
      height: "80",
      viewBox: "0 0 250 250",
      style: {
        fill: "#008BE1",
        color: "#FFF",
        position: "absolute",
        top: 0,
        border: 0,
        right: 0
      },
      "aria-hidden": "true",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
      }), /* @__PURE__ */ jsx("path", {
        d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
        fill: "currentColor",
        style: {
          transformOrigin: "130px 106px"
        },
        className: "octo-arm"
      }), /* @__PURE__ */ jsx("path", {
        d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
        fill: "currentColor",
        className: "octo-body"
      })]
    })
  });
};
const App = () => {
  return /* @__PURE__ */ jsxs("div", {
    className: "app",
    children: [/* @__PURE__ */ jsx(GitHubBanner, {}), /* @__PURE__ */ jsx(Text, {
      as: "h1",
      variant: "headline",
      children: "iTwinUI-Layouts"
    }), /* @__PURE__ */ jsxs(Body, {
      children: ["An open-source common UI layouts library used to display", " ", /* @__PURE__ */ jsx(Anchor, {
        href: "https://itwin.github.io/iTwinUI-react/",
        children: "iTwinUI-react"
      }), " ", "components."]
    }), /* @__PURE__ */ jsx("img", {
      alt: "GitHub last commit",
      src: "https://img.shields.io/github/last-commit/itwin/iTwinUI-layouts"
    }), /* @__PURE__ */ jsx("hr", {}), /* @__PURE__ */ jsx("ul", {
      children: DEMOS_LIST.map(({
        path,
        name
      }) => /* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx(Link, {
          to: path,
          className: "iui-anchor",
          children: name
        })
      }, path))
    })]
  });
};
ReactDOM.render(/* @__PURE__ */ jsx(React.StrictMode, {
  children: /* @__PURE__ */ jsx(HashRouter, {
    children: /* @__PURE__ */ jsxs(Routes, {
      children: [/* @__PURE__ */ jsx(Route, {
        path: "/",
        element: /* @__PURE__ */ jsx(App, {})
      }), DEMOS_LIST.map(({
        path,
        component
      }) => /* @__PURE__ */ jsx(Route, {
        path,
        element: component()
      }, path))]
    })
  })
}), document.getElementById("root"));
