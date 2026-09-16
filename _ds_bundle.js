/* @ds-bundle: {"format":4,"namespace":"FAIrwallAIDesignSystem_492fa5","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatusWidget","sourcePath":"components/core/StatusWidget.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"00925611005c","components/core/Button.jsx":"34fce9826346","components/core/Card.jsx":"c0094f6497fe","components/core/IconButton.jsx":"ac1753b35fab","components/core/StatusWidget.jsx":"1ba11e743c63","components/feedback/Dialog.jsx":"7d2a040a0876","components/feedback/Toast.jsx":"730942607679","components/feedback/Tooltip.jsx":"7e216486633d","components/forms/Checkbox.jsx":"ed424920ec27","components/forms/Input.jsx":"6ed548128841","components/forms/Select.jsx":"fc7bb005a0d8","components/forms/Switch.jsx":"287358099dba","components/navigation/Tabs.jsx":"65c55f5cdfa9","site/js/footer.jsx":"7857a61340c0","site/js/header.jsx":"23bc01492390","site/js/hero.jsx":"01c5796e225f","site/js/livedemo.jsx":"1914584ede5d","site/js/locations.jsx":"7fdb1d96eca3","site/js/pricing.jsx":"773e5a4d7e00","site/js/principles.jsx":"962cc2f6d521","site/js/productforms.jsx":"c59e7b834283","site/js/producttour.jsx":"13e202b81474","site/js/roadmap.jsx":"7b6a494a4c02","site/js/segments.jsx":"cf119f949511","site/js/trust.jsx":"bc19013b5903","ui_kits/marketing-site/BookDemo.jsx":"c32714f8a26d","ui_kits/marketing-site/Brand.jsx":"d4f06ae6cc42","ui_kits/marketing-site/ChatWidget.jsx":"1629fc2772da","ui_kits/marketing-site/CookieConsent.jsx":"5271ddb287a8","ui_kits/marketing-site/Footer.jsx":"e9f25e6fa999","ui_kits/marketing-site/Header.jsx":"d466d4ddfb85","ui_kits/marketing-site/Hero.jsx":"04d601cc081f","ui_kits/marketing-site/LiveDemo.jsx":"b142429d1855","ui_kits/marketing-site/Locations.jsx":"79740ddf0124","ui_kits/marketing-site/Pricing.jsx":"ee8ab7bc83a0","ui_kits/marketing-site/Principles.jsx":"1bb6483dc704","ui_kits/marketing-site/ProductForms.jsx":"3dcd430f0e95","ui_kits/marketing-site/ProductTour.jsx":"5de07de64e68","ui_kits/marketing-site/Roadmap.jsx":"6aaf2650a1a5","ui_kits/marketing-site/Segments.jsx":"4f4ea1da3312","ui_kits/marketing-site/Trust.jsx":"1b85a7d663fc","ui_kits/marketing-site/i18n.js":"a5f99f6aa07b","ui_kits/security-dashboard/AlertDialog.jsx":"5156c85c2bde","ui_kits/security-dashboard/DashboardHome.jsx":"13aa26ecbc46","ui_kits/security-dashboard/Login.jsx":"517d211c1d9b","ui_kits/security-dashboard/Sidebar.jsx":"1135528d0ad9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FAIrwallAIDesignSystem_492fa5 = window.FAIrwallAIDesignSystem_492fa5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  children
}) {
  const tones = {
    neutral: {
      background: 'var(--slate-100)',
      color: 'var(--slate-700)'
    },
    safe: {
      background: 'var(--teal-100)',
      color: 'var(--teal-600)'
    },
    danger: {
      background: 'var(--red-100)',
      color: 'var(--red-600)'
    },
    info: {
      background: '#e6f0fe',
      color: 'var(--blue-500)'
    },
    inverse: {
      background: 'rgba(255,255,255,.12)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...tones[tone],
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 12,
      padding: '3px 10px',
      borderRadius: 'var(--radius-full)',
      letterSpacing: '.02em'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  disabled,
  ...rest
}) {
  const pad = size === 'sm' ? '8px 14px' : size === 'lg' ? '14px 24px' : '11px 18px';
  const fs = size === 'sm' ? 13 : size === 'lg' ? 16 : 14;
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: fs,
    padding: pad,
    borderRadius: 'var(--radius-md)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    transition: 'all var(--dur-fast) var(--ease-standard)',
    opacity: disabled ? .5 : 1
  };
  const variants = {
    primary: {
      background: 'var(--navy-950)',
      color: '#fff'
    },
    accent: {
      background: 'var(--teal-500)',
      color: 'var(--navy-950)'
    },
    secondary: {
      background: '#fff',
      color: 'var(--navy-950)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--navy-950)'
    },
    danger: {
      background: 'var(--red-500)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    style: {
      ...base,
      ...variants[variant],
      ...(rest.style || {})
    },
    disabled: disabled
  }), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = 24,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  size = 36,
  variant = 'ghost',
  ...rest
}) {
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--navy-950)'
    },
    filled: {
      background: 'var(--slate-100)',
      color: 'var(--navy-950)'
    },
    inverse: {
      background: 'rgba(255,255,255,.08)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-md)',
      border: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...variants[variant]
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusWidget.jsx
try { (() => {
function StatusWidget({
  status = 'protected',
  caption
}) {
  const tones = {
    protected: {
      ring: 'var(--teal-500)',
      dot: 'var(--teal-500)'
    },
    alert: {
      ring: 'var(--red-500)',
      dot: 'var(--red-500)'
    },
    scanning: {
      ring: 'var(--blue-500)',
      dot: 'var(--blue-500)'
    }
  };
  const t = tones[status];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: '50%',
      border: `3px solid ${t.ring}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: t.dot,
      boxShadow: `0 0 0 6px ${t.dot}22`
    }
  })), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-inverse-secondary)'
    }
  }, caption));
}
Object.assign(__ds_scope, { StatusWidget });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusWidget.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  footer
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(8,14,25,.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      width: 400,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-tertiary)',
      fontSize: 18
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 14,
      lineHeight: 'var(--lh-normal)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      marginTop: 20
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'info',
  children
}) {
  const tones = {
    info: {
      border: 'var(--blue-500)'
    },
    safe: {
      border: 'var(--teal-500)'
    },
    danger: {
      border: 'var(--red-500)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--navy-950)',
      color: '#fff',
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      borderLeft: `3px solid ${tones[tone].border}`,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      boxShadow: 'var(--shadow-lg)',
      maxWidth: 340
    }
  }, children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--navy-950)',
      color: '#fff',
      fontSize: 12,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 18,
      height: 18,
      borderRadius: 5,
      border: `1.5px solid ${checked ? 'var(--teal-500)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--teal-500)' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--navy-950)",
    strokeWidth: "3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  error,
  icon,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)',
      fontWeight: 600
    }
  }, label, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      color: 'var(--text-tertiary)',
      display: 'flex'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    style: {
      width: '100%',
      padding: icon ? '10px 12px 10px 36px' : '10px 12px',
      fontSize: 14,
      fontFamily: 'var(--font-body)',
      border: `1px solid ${error ? 'var(--red-500)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      color: 'var(--text-primary)'
    }
  }, rest))), error && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-500)',
      fontSize: 12,
      fontWeight: 500
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)',
      fontWeight: 600
    }
  }, label, /*#__PURE__*/React.createElement("select", _extends({
    style: {
      padding: '10px 12px',
      fontSize: 14,
      fontFamily: 'var(--font-body)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-primary)',
      background: '#fff'
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 38,
      height: 22,
      borderRadius: 'var(--radius-full)',
      background: checked ? 'var(--teal-500)' : 'var(--slate-300)',
      position: 'relative',
      transition: 'background var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 18 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left var(--dur-fast) var(--ease-standard)',
      boxShadow: 'var(--shadow-sm)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => onChange && onChange(t),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 16px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: t === active ? 'var(--navy-950)' : 'var(--text-tertiary)',
      borderBottom: `2px solid ${t === active ? 'var(--teal-500)' : 'transparent'}`,
      marginBottom: -1
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// site/js/footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-950)',
      padding: '48px',
      color: 'var(--text-inverse-secondary)',
      fontFamily: 'var(--font-body)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      color: '#fff'
    }
  }, "F", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, "ai"), "rwall ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, "AI")), /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Fairwall AI, Inc.")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/footer.jsx", error: String((e && e.message) || e) }); }

// site/js/header.jsx
try { (() => {
const {
  Button
} = window.FAIrwallAIDesignSystem_492fa5;
function Header() {
  const nav = [['Product', '#tour'], ['Live Demo', '#demo'], ['Pricing', '#pricing'], ['Docs', '#']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 48px',
      borderBottom: '1px solid var(--border-default)',
      background: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/logo-mark-new.png",
    style: {
      height: 64
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      color: 'var(--navy-950)'
    }
  }, "F", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, "ai"), "rwall ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, "AI"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14
    }
  }, nav.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    style: {
      color: 'var(--text-secondary)'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    onClick: () => document.getElementById('demo').scrollIntoView({
      block: 'start'
    })
  }, "Get started")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/header.jsx", error: String((e && e.message) || e) }); }

// site/js/hero.jsx
try { (() => {
const {
  Button
} = window.FAIrwallAIDesignSystem_492fa5;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '88px 48px 72px'
    }
  }, /*#__PURE__*/React.createElement("video", {
    src: "./assets/keyhole-animated.mp4",
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(100deg, rgba(10,22,40,.92) 40%, rgba(10,22,40,.55))',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 10,
      marginBottom: 20,
      padding: '8px 14px',
      background: 'rgba(255,255,255,.08)',
      border: '1px solid rgba(255,255,255,.12)',
      borderRadius: 'var(--radius-full)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      color: 'var(--teal-400)'
    }
  }, "89%"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(255,255,255,.85)'
    }
  }, "of AI usage today is invisible to organizations.")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-display-l)',
      lineHeight: 'var(--lh-tight)',
      color: '#fff',
      margin: '0 0 20px',
      letterSpacing: 'var(--ls-tight)'
    }
  }, "Privacy in the Age of AI."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'rgba(255,255,255,.78)',
      lineHeight: 'var(--lh-normal)',
      maxWidth: 520,
      margin: '0 0 32px'
    }
  }, "Fairwall AI stands between you and every AI tool \u2014 catching sensitive data before it ever leaves your device. Nothing sent. Nothing stored. Nothing risked. All done locally.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Everywhere you work with AI:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Browser \u2014 Protects every AI tool, automatically", /*#__PURE__*/React.createElement("br", null), "Desktop \u2014 Covers all data and media types", /*#__PURE__*/React.createElement("br", null), "Workflows \u2014 Purpose-built n8n nodes for automation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => document.getElementById('demo').scrollIntoView({
      block: 'start'
    })
  }, "Try the live demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      background: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,.35)',
      borderRadius: 'var(--radius-md)'
    },
    onClick: () => document.getElementById('pricing').scrollIntoView({
      block: 'start'
    })
  }, "See pricing"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      position: 'relative',
      height: 340,
      background: 'var(--navy-950)',
      border: '1px solid rgba(255,255,255,.1)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/hero-shield.jpg",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/hero.jsx", error: String((e && e.message) || e) }); }

// site/js/livedemo.jsx
try { (() => {
const {
  Badge,
  Button
} = window.FAIrwallAIDesignSystem_492fa5;
const PATTERNS = [{
  type: 'EMAIL',
  label: 'email',
  re: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
}, {
  type: 'PHONE',
  label: 'phone number',
  re: /\b(\+?\d{1,2}[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}\b/g
}, {
  type: 'EMPLOYEE_ID',
  label: 'employee ID',
  re: /\bEMP-\d{4,6}\b/g
}, {
  type: 'INVOICE',
  label: 'invoice number',
  re: /\bINV-\d{4}-\d{3,6}\b/gi
}, {
  type: 'SSN',
  label: 'SSN',
  re: /\b\d{3}-\d{2}-\d{4}\b/g
}, {
  type: 'CREDIT_CARD',
  label: 'credit card',
  re: /\b(?:\d[ -]?){13,16}\b/g
}, {
  type: 'IP_ADDRESS',
  label: 'IP address',
  re: /\b(?:\d{1,3}\.){3}\d{1,3}\b/g
}, {
  type: 'DATE',
  label: 'date',
  re: /\b\d{4}-\d{2}-\d{2}\b|\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/g
}, {
  type: 'ADDRESS',
  label: 'street address',
  re: /\b\d{1,5}\s+[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)?\s(Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Lane|Ln|Drive|Dr)\b/g
}, {
  type: 'MONEY',
  label: 'amount',
  re: /\$\s?\d[\d,]*(\.\d{2})?\b/g
}, {
  type: 'PERSON',
  label: 'name',
  re: /\b(?:Mr|Mrs|Ms|Dr)\.\s[A-Z][a-z]+(?:\s[A-Z][a-z]+)?\b|\b(?:my name is|I'm|I am)\s(?<name>[A-Z][a-z]+(?:\s[A-Z][a-z]+)?)/gi
}, {
  type: 'CITY',
  label: 'city',
  re: new RegExp('\\b(' + ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Boston', 'Seattle', 'Austin', 'Miami', 'Denver', 'Atlanta', 'Houston', 'Dallas', 'Phoenix', 'Philadelphia', 'Portland', 'Washington', 'San Diego', 'Las Vegas', 'Vienna', 'London', 'Paris', 'Berlin', 'Madrid', 'Rome', 'Milan', 'Amsterdam', 'Dublin', 'Brussels', 'Zurich', 'Geneva', 'Munich', 'Frankfurt', 'Hamburg', 'Barcelona', 'Lisbon', 'Copenhagen', 'Stockholm', 'Oslo', 'Helsinki', 'Warsaw', 'Prague', 'Budapest', 'Athens', 'Toronto', 'Vancouver', 'Montreal', 'Mexico City', 'Sao Paulo', 'Buenos Aires', 'Sydney', 'Melbourne', 'Auckland', 'Tokyo', 'Osaka', 'Seoul', 'Singapore', 'Hong Kong', 'Shanghai', 'Beijing', 'Mumbai', 'Delhi', 'Bangalore', 'Dubai', 'Tel Aviv', 'Cairo', 'Johannesburg', 'Nairobi'].join('|') + ')\\b', 'g')
}];
const SAMPLE = "Hi, please onboard our new hire. Her email is priya.shah@acme.com and her direct line is 415-555-0138. Her employee ID is EMP-88231 — set her up in the system.";
const PRESETS = [{
  label: 'Draft an email',
  text: "Write me an email to priya.shah@acme.com letting her know her new employee ID is EMP-88231 and to call me at 415-555-0138 with any questions."
}, {
  label: 'Draft a complaint',
  text: "Write a complaint email about a $482.50 charge on my card dated 2024-03-11 — I'm John Reyes, reachable at john.reyes99@gmail.com, based in Chicago."
}, {
  label: 'Summarize a memo',
  text: "Summarize this for my manager: approve the wire of $12,400 to our vendor, reference invoice INV-2024-0091, and loop in Mrs. Alvarez at +1 512-555-0199."
}, {
  label: 'Rewrite a letter',
  text: "Rewrite this more formally: my name is Daniel Cho, SSN 512-33-9081, living at 221 Baker Street, and I'd like my contract reviewed before 04/12/2025."
}];
function findMatches(text) {
  const matches = [];
  PATTERNS.forEach(p => {
    let m;
    p.re.lastIndex = 0;
    while (m = p.re.exec(text)) {
      const val = m.groups?.name || m[0];
      const start = m.groups?.name ? m.index + m[0].indexOf(m.groups.name) : m.index;
      matches.push({
        start,
        end: start + val.length,
        text: val,
        type: p.type,
        label: p.label
      });
      if (m[0].length === 0) p.re.lastIndex++;
    }
  });
  matches.sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start));
  const kept = [];
  let lastEnd = -1;
  matches.forEach(m => {
    if (m.start >= lastEnd) {
      kept.push(m);
      lastEnd = m.end;
    }
  });
  return kept;
}
function highlightTokens(text, re) {
  const parts = [];
  let last = 0,
    m;
  const r = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g');
  while (m = r.exec(text)) {
    if (m.index > last) parts.push(/*#__PURE__*/React.createElement("span", {
      key: last
    }, text.slice(last, m.index)));
    parts.push(/*#__PURE__*/React.createElement("span", {
      key: m.index,
      style: {
        color: 'var(--teal-400)'
      }
    }, m[0]));
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(/*#__PURE__*/React.createElement("span", {
    key: last + 'e'
  }, text.slice(last)));
  return parts;
}
function LiveDemo() {
  const [text, setText] = React.useState(SAMPLE);
  const [priv, setPriv] = React.useState({});
  const [sent, setSent] = React.useState(null);
  const matches = React.useMemo(() => findMatches(text), [text]);
  function keyFor(m) {
    return m.type + ':' + m.start;
  }
  function isPrivate(m) {
    const k = keyFor(m);
    return priv[k] !== undefined ? priv[k] : true;
  }
  function toggle(m) {
    const k = keyFor(m);
    setPriv(p => ({
      ...p,
      [k]: !isPrivate(m)
    }));
  }
  function buildSegments() {
    const segs = [];
    let cursor = 0;
    matches.forEach(m => {
      if (m.start > cursor) segs.push({
        plain: text.slice(cursor, m.start)
      });
      segs.push({
        match: m
      });
      cursor = m.end;
    });
    if (cursor < text.length) segs.push({
      plain: text.slice(cursor)
    });
    return segs;
  }
  function buildReply(tokenMap, srcText) {
    const tok = type => Object.keys(tokenMap).find(k => k.startsWith(`[REDACTED_${type}_`));
    const low = srcText.toLowerCase();
    if (Object.keys(tokenMap).length === 0) return "Got it — nothing needed protecting in this message.";
    if (low.includes('complaint')) {
      return `Subject: Dispute — Unauthorized Charge\n\nHello,\n\nI'm writing to dispute a charge of ${tok('MONEY') || 'the amount in question'} dated ${tok('DATE') || 'the date noted'}. Please investigate and issue a refund to my account.\n\nThank you,\n${tok('PERSON') || 'the customer'}\n${tok('EMAIL') || ''}`;
    }
    if (low.includes('summar')) {
      return `Summary: Approve the wire transfer of ${tok('MONEY') || 'the requested amount'}, referencing ${tok('INVOICE') || 'the invoice on file'}. Loop in the contact at ${tok('PHONE') || 'the number provided'} to confirm.`;
    }
    if (low.includes('rewrite') || low.includes('more formally')) {
      return `To Whom It May Concern,\n\nI, ${tok('PERSON') || 'the undersigned'}, residing at ${tok('ADDRESS') || 'the address on file'}${tok('SSN') ? ` (SSN ${tok('SSN')})` : ''}, formally request review of my contract prior to ${tok('DATE') || 'the stated deadline'}.\n\nSincerely,\n${tok('PERSON') || ''}`;
    }
    if (low.includes('email')) {
      return `Subject: Quick Update\n\nHi there,\n\nYour new employee ID is ${tok('EMPLOYEE_ID') || 'on file'}. Feel free to reach out at ${tok('PHONE') || 'the number provided'} with any questions.\n\nSent to: ${tok('EMAIL') || 'the recipient'}\n\nBest regards`;
    }
    const tokens = Object.keys(tokenMap);
    return `Got it — I've logged the details for ${tokens.join(' and ')} and will follow up using those references.`;
  }
  function handleSend() {
    const counters = {};
    let out = '';
    let cursor = 0;
    matches.forEach(m => {
      out += text.slice(cursor, m.start);
      if (isPrivate(m)) {
        counters[m.type] = (counters[m.type] || 0) + 1;
        out += `[REDACTED_${m.type}_${String(counters[m.type]).padStart(2, '0')}]`;
      } else {
        out += m.text;
      }
      cursor = m.end;
    });
    out += text.slice(cursor);
    const tokens = [...out.matchAll(/\[REDACTED_[A-Z_]+_\d+\]/g)].map(x => x[0]);
    const tokenMap = {};
    {
      const c2 = {};
      matches.forEach(m => {
        if (isPrivate(m)) {
          c2[m.type] = (c2[m.type] || 0) + 1;
          tokenMap[`[REDACTED_${m.type}_${String(c2[m.type]).padStart(2, '0')}]`] = m.text;
        }
      });
    }
    const reply = buildReply(tokenMap, text);
    const restored = tokens.length ? reply.replace(/\[REDACTED_[A-Z_]+_\d+\]/g, t => tokenMap[t] || t) : reply;
    const restoredValues = Object.values(tokenMap);
    const auditId = 'AUDIT-' + Math.random().toString(16).slice(2, 10).toUpperCase();
    const latency = 40 + Math.floor(Math.random() * 40);
    setSent({
      redacted: out,
      reply,
      restored,
      restoredValues,
      auditId,
      count: tokens.length,
      latency
    });
  }
  const segs = buildSegments();
  const privateCount = matches.filter(isPrivate).length;
  return /*#__PURE__*/React.createElement("section", {
    id: "demo",
    style: {
      padding: '80px 48px',
      background: 'var(--slate-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: 'var(--navy-950)',
      margin: '0 0 32px'
    }
  }, "Watch it work."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 28,
      left: '8%',
      right: '8%',
      height: 2,
      background: 'linear-gradient(90deg, var(--teal-500), var(--navy-500), var(--teal-500))',
      opacity: .4,
      zIndex: 0
    }
  }), [{
    n: 1,
    label: 'Ask AI',
    d: 'User asks a question via browser.',
    c: 'user',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "5",
      width: "16",
      height: "11",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 19h20"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "9",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 13h6"
    }))
  }, {
    n: 2,
    label: 'Mark & Detect',
    d: 'Fairwall auto-flags sensitive data, user can mark more.',
    c: 'tool',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 3v18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 4h11l-3 4 3 4H5"
    }))
  }, {
    n: 3,
    label: 'Redact',
    d: 'Marked data is anonymized before it ever leaves the device.',
    c: 'tool',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "11",
      r: "2"
    }))
  }, {
    n: 4,
    label: 'Send',
    d: 'Only the safe, anonymized version reaches the AI tool.',
    c: 'user',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3v12m0 0 4-4m-4 4-4-4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 19h16"
    }))
  }, {
    n: 5,
    label: 'Restore',
    d: 'The response is mapped back to your original context.',
    c: 'tool',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 12a9 9 0 1 1 3 6.7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 12V7m0 5h5"
    }))
  }, {
    n: 6,
    label: 'Audit Trail',
    d: 'Every action is logged to a searchable record.',
    c: 'tool',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.5 13.5l2 2 3.5-4"
    }))
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    title: s.d,
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '15%',
      minWidth: 90,
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-lg)',
      background: s.c === 'user' ? 'var(--navy-800)' : 'var(--teal-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: s.c === 'user' ? '#fff' : 'var(--navy-950)',
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -8,
      left: -8,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--navy-950)',
      color: '#fff',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, s.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--navy-950)',
      marginTop: 12,
      textAlign: 'center'
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      marginBottom: 24,
      fontSize: 12.5,
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: 'var(--navy-800)'
    }
  }), "You do this"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: 'var(--teal-500)'
    }
  }), "Fairwall does this")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-tertiary)'
    }
  }, "Try it:"), PRESETS.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.label,
    onClick: () => {
      setText(p.text);
      setSent(null);
      setPriv({});
    },
    style: {
      padding: '6px 14px',
      borderRadius: 'var(--radius-full)',
      border: '1px solid var(--border-default)',
      background: text === p.text ? 'var(--navy-950)' : '#fff',
      color: text === p.text ? '#fff' : 'var(--navy-950)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 12.5,
      cursor: 'pointer'
    }
  }, p.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-tertiary)'
    }
  }, "or type your own below")), /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: e => setText(e.target.value),
    rows: 4,
    placeholder: "Type anything you'd send to an AI tool\u2026",
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      padding: 16,
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-strong)',
      resize: 'vertical',
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-tertiary)',
      margin: '8px 0'
    }
  }, "This is how your message will be highlighted automatically"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      fontSize: 15,
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-primary)'
    }
  }, segs.map((s, i) => s.plain !== undefined ? /*#__PURE__*/React.createElement("span", {
    key: i
  }, s.plain) : /*#__PURE__*/React.createElement("span", {
    key: i,
    onClick: () => toggle(s.match),
    title: isPrivate(s.match) ? 'Marked private — click to make public' : 'Marked public — click to protect',
    style: {
      cursor: 'pointer',
      background: isPrivate(s.match) ? 'rgba(239,68,68,.14)' : 'rgba(31,216,164,.14)',
      borderBottom: `2px solid ${isPrivate(s.match) ? 'var(--red-500)' : 'var(--teal-500)'}`,
      padding: '1px 2px',
      borderRadius: 3
    }
  }, s.match.text))), matches.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 12
    }
  }, matches.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    onClick: () => toggle(m),
    style: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)',
      background: isPrivate(m) ? 'var(--red-100)' : 'var(--teal-100)',
      color: isPrivate(m) ? 'var(--red-600)' : 'var(--teal-600)'
    }
  }, m.label, ": ", isPrivate(m) ? 'private' : 'public'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-tertiary)'
    }
  }, matches.length, " item", matches.length !== 1 ? 's' : '', " detected \u2014 ", privateCount, " will be redacted before sending."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: handleSend
  }, "Send to AI tool")), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      background: 'var(--navy-950)',
      borderRadius: 'var(--radius-lg)',
      padding: 24,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: '#f0b429',
      marginBottom: 12
    }
  }, "WHAT THE AI TOOL RECEIVED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.6,
      marginBottom: 16
    }
  }, highlightTokens(sent.redacted, /\[REDACTED_[A-Z_]+_\d+\]/)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: '#f0b429',
      marginBottom: 8
    }
  }, "SIMULATED AI RESPONSE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      marginBottom: 16,
      whiteSpace: 'pre-wrap',
      lineHeight: 'var(--lh-normal)'
    }
  }, highlightTokens(sent.reply, /\[REDACTED_[A-Z_]+_\d+\]/)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: '#f0b429',
      marginBottom: 8
    }
  }, "RESTORED AI RESPONSE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      marginBottom: 16,
      whiteSpace: 'pre-wrap',
      lineHeight: 'var(--lh-normal)'
    }
  }, sent.restoredValues.length ? highlightTokens(sent.restored, new RegExp(sent.restoredValues.map(v => v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g')) : sent.restored), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--teal-400)',
      borderTop: '1px solid rgba(255,255,255,.1)',
      paddingTop: 12
    }
  }, sent.auditId, " \xB7 ", sent.count, " entities \xB7 ", sent.latency, "ms \u2014 logged."))));
}
window.LiveDemo = LiveDemo;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/livedemo.jsx", error: String((e && e.message) || e) }); }

// site/js/locations.jsx
try { (() => {
const QUOTES = [{
  q: 'We rolled it out to the whole ops team in an afternoon — no engineering ticket needed.',
  role: 'Operations Lead, mid-size SaaS company'
}, {
  q: 'The audit log is the first thing our compliance team actually reads without complaining.',
  role: 'Head of Security, healthcare data processor'
}];
function Locations() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h2)',
      color: 'var(--navy-950)',
      margin: '0 0 20px'
    }
  }, "What teams say."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, QUOTES.map(q => /*#__PURE__*/React.createElement("div", {
    key: q.role,
    style: {
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px',
      fontSize: 14,
      color: 'var(--text-primary)',
      lineHeight: 'var(--lh-normal)'
    }
  }, "\"", q.q, "\""), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, q.role, " \xB7 placeholder quote"))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h2)',
      color: 'var(--navy-950)',
      margin: '0 0 20px'
    }
  }, "Location."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Fairwall AI HQ",
    width: "100%",
    height: "220",
    style: {
      border: 0,
      display: 'block'
    },
    loading: "lazy",
    src: "https://maps.google.com/maps?q=Hadikgasse%2064%2C%201140%20Wien&z=15&output=embed"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginTop: 10,
      fontFamily: 'var(--font-mono)'
    }
  }, "Hadikgasse 64, 1140 Wien"))));
}
window.Locations = Locations;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/locations.jsx", error: String((e && e.message) || e) }); }

// site/js/pricing.jsx
try { (() => {
const {
  Badge,
  Button
} = window.FAIrwallAIDesignSystem_492fa5;
const PRICES = {
  Individuals: {
    Basic: 12,
    Medium: 14,
    Advanced: 17
  }
};
const YEARLY_MONTHLY = {
  Basic: '8.5',
  Medium: '10',
  Advanced: '12'
};
const SEGMENT_PLANS = {
  Corporates: [['Basic', [['For AI in Browser:', ['Corporate Dashboard', 'Desktop app', 'Plug-ins']]]], ['Medium', [['For AI in every app:', ['Proxy layer', 'Multimodal support for PDF, audio, image and video']]]], ['Advanced', [['For increased power and control:', ['On-premises hardware (in development)']]]]],
  Individuals: [['Basic', [['For AI in Browser:', ['Desktop app', 'Plug-ins']]]], ['Medium', [['For AI in every app:', ['Proxy layer for local apps', 'Multimodal support for PDF, audio, image and video']]]], ['Advanced', [['For AI in Workflows:', ['Node for AI workflows (n8n)']]]]],
  'AI Agencies': [['Basic', [['For AI in Browser:', ['Desktop app', 'Plug-ins']], ['For AI in Workflows:', ['Node for AI workflows (n8n)']]]], ['Medium', [['For AI in every app:', ['Proxy layer for local apps', 'Multimodal support for PDF, audio, image and video']]]], ['Advanced', [['For reselling under your own brand:', ['White-label the product to sell as your own']]]]]
};
function flattenGroups(groups) {
  return groups.flatMap(([label, feats]) => label === 'Contact us' ? ['Contact us'] : feats.map(f => ({
    label,
    f
  })));
}
function cumulativePlans(tiers) {
  let acc = [];
  return tiers.map(([tier, groups]) => {
    const flat = flattenGroups(groups);
    if (flat[0] === 'Contact us') return [tier, [], [], groups];
    const inherited = acc.slice();
    acc = acc.concat(flat);
    return [tier, inherited, flat, groups];
  });
}
const SEG_ICONS = {
  Corporates: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 21V6l7-3 7 3v15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21v-6h4v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 9h.01M9 13h.01M13 9h.01M13 13h.01"
  })),
  Individuals: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21c0-4 4-6 8-6s8 2 8 6"
  })),
  'AI Agencies': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "18",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "18",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7.2V13m0 0-5.5 3M12 13l5.5 3"
  }))
};
function Pricing() {
  const [seg, setSeg] = React.useState('Corporates');
  const [billing, setBilling] = React.useState('monthly');
  const plans = cumulativePlans(SEGMENT_PLANS[seg]);
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    style: {
      padding: '80px 48px',
      background: 'var(--slate-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: 'var(--navy-950)',
      margin: '0 0 8px'
    }
  }, "Pricing by segment."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 15,
      margin: '0 0 32px'
    }
  }, "Pick your segment to see what's included at each tier."), seg === 'Individuals' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-full)',
      padding: 4
    }
  }, ['monthly', 'yearly'].map(b => /*#__PURE__*/React.createElement("button", {
    key: b,
    onClick: () => setBilling(b),
    style: {
      padding: '8px 18px',
      borderRadius: 'var(--radius-full)',
      border: 'none',
      background: billing === b ? 'var(--navy-950)' : 'transparent',
      color: billing === b ? '#fff' : 'var(--navy-950)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, b === 'monthly' ? 'Monthly' : 'Yearly — save 30%'))), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "15-day free trial")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 40
    }
  }, Object.keys(SEGMENT_PLANS).map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSeg(s),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 22px',
      borderRadius: 'var(--radius-full)',
      border: seg === s ? '1px solid var(--teal-500)' : '1px solid var(--border-default)',
      background: seg === s ? 'var(--navy-950)' : '#fff',
      color: seg === s ? '#fff' : 'var(--navy-950)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: seg === s ? 'var(--teal-400)' : 'var(--text-secondary)',
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, SEG_ICONS[s]), s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, plans.map(([tier, inherited, own, groups], i) => /*#__PURE__*/React.createElement("div", {
    key: tier,
    style: {
      background: '#fff',
      border: i === 1 ? '1px solid var(--teal-500)' : '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      position: 'relative'
    }
  }, i === 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -11,
      left: 24,
      background: 'var(--teal-500)',
      color: 'var(--navy-950)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 700,
      padding: '3px 10px',
      borderRadius: 'var(--radius-full)'
    }
  }, "MOST COMMON"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.06em',
      color: 'var(--text-tertiary)'
    }
  }, "TIER ", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      margin: 0,
      color: 'var(--teal-600)'
    }
  }, tier), PRICES[seg]?.[tier] && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--navy-950)'
    }
  }, "\u20AC", billing === 'yearly' ? YEARLY_MONTHLY[tier] : PRICES[seg][tier], /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-tertiary)'
    }
  }, " /month")), billing === 'yearly' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)',
      marginTop: 2
    }
  }, "billed annually \xB7 \u20AC", (YEARLY_MONTHLY[tier] * 12).toFixed(0), "/year")), groups[0] && groups[0][0] === 'Contact us' ? /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, "CONTACT US") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-tertiary)',
      fontStyle: 'italic'
    }
  }, "Everything in ", plans[i - 1][0], ", plus:"), inherited.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, inherited.map(({
    label,
    f
  }) => /*#__PURE__*/React.createElement("li", {
    key: label + f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-tertiary)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })), f))), groups.map(([label, feats]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--teal-600)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, feats.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 14,
      color: 'var(--text-primary)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--teal-600)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })), f)))))), /*#__PURE__*/React.createElement(Button, {
    variant: i === 1 ? 'accent' : 'secondary',
    size: "sm",
    onClick: () => {
      window.location.href = seg === 'Individuals' ? 'checkout.html' : 'contact.html';
    }
  }, "Get started"))))));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/pricing.jsx", error: String((e && e.message) || e) }); }

// site/js/principles.jsx
try { (() => {
function Icon({
  d,
  size = 40
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--teal-500)",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, d);
}
const PRINCIPLES = [{
  t: 'Visible, not invisible.',
  d: "Every piece of sensitive data is highlighted the moment it's typed — you see exactly what's being protected, not a silent process running in the background.",
  icon: /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2.5"
    }))
  })
}, {
  t: 'Your call, always.',
  d: 'Detection suggests; it never decides for you. Anything flagged can be marked private or not with one click, before it\'s sent anywhere.',
  icon: /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 11V6a2 2 0 0 1 4 0v5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13 6a2 2 0 0 1 4 0v6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17 8a2 2 0 0 1 4 0v6a6 6 0 0 1-6 6h-2a6 6 0 0 1-5-2.7L5 12.5a1.7 1.7 0 0 1 2.5-2.3L9 12"
    }))
  })
}, {
  t: 'Protected before it leaves.',
  d: 'Redaction and encryption happen on your device, before the message reaches an AI tool — not after, not in transit.',
  icon: /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement("path", {
      d: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"
    })
  })
}, {
  t: 'Provable, not promised.',
  d: 'Every protection event is logged with a forensic ID, a timestamp, and a latency number — so "trust us" is backed by a record you can search.',
  icon: /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.5 13.5l2 2 3.5-4"
    }))
  })
}];
function Principles() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 48px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: 'var(--navy-950)',
      margin: '0 0 40px'
    }
  }, "Why Fairwall."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, PRINCIPLES.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, p.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      margin: '0 0 8px',
      color: 'var(--navy-950)'
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-normal)'
    }
  }, p.d)))));
}
window.Principles = Principles;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/principles.jsx", error: String((e && e.message) || e) }); }

// site/js/productforms.jsx
try { (() => {
function ProductForms() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-950)',
      padding: '80px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: '#fff',
      margin: '0 0 8px'
    }
  }, "One privacy layer, everywhere you use AI."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-inverse-secondary)',
      fontSize: 16,
      margin: '0 0 32px'
    }
  }, "Three ways to deploy Fairwall AI, depending on where your AI usage happens."), /*#__PURE__*/React.createElement("img", {
    src: "./assets/product-forms.jpg",
    alt: "Browser Extension, Desktop Proxy, and n8n Node \u2014 the three ways to deploy Fairwall AI",
    style: {
      width: '100%',
      display: 'block',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)'
    }
  })));
}
window.ProductForms = ProductForms;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/productforms.jsx", error: String((e && e.message) || e) }); }

// site/js/producttour.jsx
try { (() => {
const {
  Badge
} = window.FAIrwallAIDesignSystem_492fa5;
function Icon({
  d,
  size = 18
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, d);
}
const I = {
  grid: /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    }))
  }),
  folder: /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement("path", {
      d: "M3 6.5A1.5 1.5 0 0 1 4.5 5h4l2 2h9A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z"
    })
  }),
  key: /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "8",
      cy: "15",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.5 12.5 20 3M16 7l2 2M19 4l2 2"
    }))
  }),
  shield: /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement("path", {
      d: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"
    })
  }),
  fileSearch: /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "10.5",
      cy: "14",
      r: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 15.5 14 17.5"
    }))
  }),
  logout: /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 3H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 8l5 4-5 4M19 12H9"
    }))
  }),
  plus: /*#__PURE__*/React.createElement(Icon, {
    size: 15,
    d: /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    })
  }),
  trash: /*#__PURE__*/React.createElement(Icon, {
    size: 16,
    d: /*#__PURE__*/React.createElement("path", {
      d: "M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-12"
    })
  }),
  eye: /*#__PURE__*/React.createElement(Icon, {
    size: 16,
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2.5"
    }))
  }),
  download: /*#__PURE__*/React.createElement(Icon, {
    size: 16,
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3v12m0 0 4-4m-4 4-4-4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 19h16"
    }))
  }),
  chevron: /*#__PURE__*/React.createElement(Icon, {
    size: 14,
    d: /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6"
    })
  }),
  zap: /*#__PURE__*/React.createElement(Icon, {
    size: 16,
    d: /*#__PURE__*/React.createElement("path", {
      d: "M13 2 3 14h7l-1 8 10-12h-7z"
    })
  }),
  clock: /*#__PURE__*/React.createElement(Icon, {
    size: 16,
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5l3 3"
    }))
  }),
  activity: /*#__PURE__*/React.createElement(Icon, {
    size: 16,
    d: /*#__PURE__*/React.createElement("path", {
      d: "M3 12h4l2 7 4-14 2 7h6"
    })
  }),
  alert: /*#__PURE__*/React.createElement(Icon, {
    size: 14,
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3 2 20h20z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 10v4M12 17h.01"
    }))
  }),
  brain: /*#__PURE__*/React.createElement(Icon, {
    size: 16,
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8A3 3 0 0 0 8 17a3 3 0 0 0 5-2V6a2 2 0 0 0-4-.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8A3 3 0 0 1 16 17"
    }))
  })
};
function AuditRow({
  id,
  type,
  entities,
  latency,
  time
}) {
  return /*#__PURE__*/React.createElement("tr", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.07)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      color: 'var(--teal-400)',
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, "\u25B6 ", id), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      color: '#f0b429',
      background: 'rgba(240,180,41,.12)',
      padding: '3px 10px',
      borderRadius: 'var(--radius-sm)'
    }
  }, type)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      color: '#fff',
      fontSize: 13
    }
  }, entities), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      color: '#fff',
      fontSize: 13
    }
  }, latency), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      color: 'var(--text-inverse-secondary)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }, time), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      display: 'flex',
      gap: 12,
      color: 'var(--text-inverse-secondary)'
    }
  }, I.eye, I.download));
}
const AUDIT_DATA = [['AUDIT-E2CCEEF8E8B7', 'REDACT', 3, '47ms', '15:21:51'], ['AUDIT-DCB8EE6A4E71', 'REDACT', 3, '70ms', '15:21:50'], ['AUDIT-7868124F90FB', 'REDACT', 2, '119ms', '15:21:48'], ['AUDIT-696D5BB0DE13', 'REDACT', 1, '57ms', '15:21:41'], ['AUDIT-BD47A50E6F1F', 'REDACT', 0, '481ms', '15:21:40'], ['AUDIT-C4FBC5677EC3', 'REDACT', 3, '35ms', '14:12:17']];
function TableHead({
  cols
}) {
  return /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, cols.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: c,
    style: {
      textAlign: 'left',
      padding: '12px 16px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.04em',
      color: 'var(--text-inverse-secondary)'
    }
  }, c))));
}
const PANELS = {
  'Mission Control': {
    sells: 'Live metrics — not a black box',
    render: () => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 16
      }
    }, [[I.zap, 'SESSION REQUESTS', '50', 'This session'], [I.clock, 'AVG LATENCY', '72ms', 'Moving average'], [I.activity, 'EVENTS LOGGED', '50', 'Local memory']].map(([icon, label, val, sub]) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 'var(--radius-md)',
        padding: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--teal-400)',
        marginBottom: 14
      }
    }, icon, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-inverse-secondary)',
        letterSpacing: '.04em'
      }
    }, label)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 28,
        color: 'var(--teal-400)'
      }
    }, val), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-inverse-secondary)',
        marginTop: 2
      }
    }, sub)))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 16px',
        borderBottom: '1px solid rgba(255,255,255,.08)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: '#fff',
        fontWeight: 700,
        fontSize: 14
      }
    }, I.fileSearch, "Recent Handshakes"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        color: 'var(--text-inverse-secondary)',
        letterSpacing: '.04em'
      }
    }, "SOVEREIGN \xB7 LOCAL ONLY")), /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement(TableHead, {
      cols: ['FORENSIC ID', 'TYPE', 'ENTITIES', 'LATENCY', 'TIMESTAMP', 'ACTIONS']
    }), /*#__PURE__*/React.createElement("tbody", null, AUDIT_DATA.slice(0, 4).map(r => /*#__PURE__*/React.createElement(AuditRow, {
      key: r[0],
      id: r[0],
      type: r[1],
      entities: r[2],
      latency: r[3],
      time: r[4]
    }))))))
  },
  Projects: {
    sells: 'Isolated workspaces per client/team',
    render: () => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("input", {
      placeholder: "New project name\u2026",
      style: {
        flex: 1,
        background: 'rgba(255,255,255,.04)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 'var(--radius-md)',
        padding: '12px 16px',
        color: '#fff',
        fontFamily: 'var(--font-body)',
        fontSize: 14
      }
    }), /*#__PURE__*/React.createElement("button", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        background: 'var(--teal-500)',
        color: 'var(--navy-950)',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        padding: '0 20px',
        fontWeight: 700,
        fontSize: 14,
        cursor: 'pointer'
      }
    }, I.plus, "Create")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(31,216,164,.06)',
        border: '1px solid rgba(31,216,164,.35)',
        borderRadius: 'var(--radius-md)',
        padding: 18,
        width: 280
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: '#fff',
        fontWeight: 700,
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--teal-400)'
      }
    }, I.folder), "Default Project"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-inverse-secondary)'
      }
    }, I.trash)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        fontSize: 12,
        color: 'var(--text-inverse-secondary)'
      }
    }, "Created 08/06/2026")))
  },
  'API Keys': {
    sells: 'Drop-in integration, no engineering sprint',
    render: () => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("input", {
      placeholder: "Key name (e.g., Production, n8n)\u2026",
      style: {
        flex: 1,
        background: 'rgba(255,255,255,.04)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 'var(--radius-md)',
        padding: '12px 16px',
        color: '#fff',
        fontFamily: 'var(--font-body)',
        fontSize: 14
      }
    }), /*#__PURE__*/React.createElement("button", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        background: 'var(--teal-500)',
        color: 'var(--navy-950)',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        padding: '0 20px',
        fontWeight: 700,
        fontSize: 14,
        cursor: 'pointer'
      }
    }, I.key, "Generate")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 'var(--radius-md)'
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement(TableHead, {
      cols: ['NAME', 'KEY', 'CREATED', 'ACTIONS']
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        padding: '56px 0',
        color: 'var(--text-inverse-secondary)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: .5
      }
    }, I.key), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14
      }
    }, "No API keys for this project. Generate one above."))))
  },
  'Detection Engines & Rules': {
    sells: 'Plain-English custom detection, no code',
    render: () => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 'var(--radius-md)',
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: '#fff',
        fontWeight: 700,
        fontSize: 15
      }
    }, I.activity, "Detection Engines"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        color: '#f0b429',
        fontSize: 12,
        fontWeight: 600
      }
    }, I.alert, "Degraded")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 10,
        marginBottom: 14
      }
    }, [['Spacy', true], ['Regex', true], ['Flair', false], ['Tars', false]].map(([n, on]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 'var(--radius-sm)',
        padding: '14px 0',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: on ? 'var(--teal-500)' : 'var(--slate-500)',
        marginBottom: 8
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#fff',
        fontWeight: 600,
        fontSize: 13
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: on ? 'var(--teal-400)' : 'var(--text-inverse-secondary)'
      }
    }, on ? 'Active' : 'Inactive')))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 14px',
        background: 'rgba(255,255,255,.03)',
        borderRadius: 'var(--radius-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#a78bfa'
      }
    }, I.brain), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 600
      }
    }, "Thorough Mode"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-inverse-secondary)'
      }
    }, "Deep AI scan with Flair + TARS (slower, more accurate)"))), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        height: 20,
        borderRadius: 'var(--radius-full)',
        background: 'rgba(255,255,255,.15)',
        display: 'inline-flex',
        alignItems: 'center',
        padding: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        borderRadius: '50%',
        background: '#fff'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 'var(--radius-md)',
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: '#fff',
        fontWeight: 700,
        fontSize: 15,
        marginBottom: 6
      }
    }, I.zap, "Detection Rules"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-inverse-secondary)',
        marginBottom: 12
      }
    }, "Tell us what to detect in plain English. No coding needed."), /*#__PURE__*/React.createElement("textarea", {
      placeholder: "e.g. detect employee IDs like EMP-00123, salary amounts, and project codes like PRJ-2024-XX",
      rows: 3,
      style: {
        width: '100%',
        background: 'rgba(255,255,255,.04)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 'var(--radius-md)',
        padding: 14,
        color: '#fff',
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        resize: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--text-inverse-secondary)'
      }
    }, "Patterns (\"like EMP-00123\") become regex rules. Plain descriptions (\"salary amounts\") become AI labels."), /*#__PURE__*/React.createElement("button", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        background: 'rgba(31,216,164,.12)',
        color: 'var(--teal-400)',
        border: '1px solid rgba(31,216,164,.4)',
        borderRadius: 'var(--radius-md)',
        padding: '8px 16px',
        fontWeight: 600,
        fontSize: 13,
        cursor: 'pointer'
      }
    }, I.plus, "Add Rules"))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 'var(--radius-md)',
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#fff',
        fontWeight: 700,
        fontSize: 14,
        marginBottom: 10
      }
    }, "Active Rules"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: '#f0b429',
        fontFamily: 'var(--font-mono)',
        marginBottom: 8
      }
    }, "\u2731 PATTERN-MATCHED (REGEX)"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        marginBottom: 14
      }
    }, [['EMPLOYEE_ID', 'EMP-[0-9]{5}'], ['EMAIL', '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'], ['PHONE_EU', '\\+?[0-9]{1,3}[\\s-]?[0-9]{6,12}']].map(([n, p]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        background: 'rgba(255,255,255,.03)',
        borderRadius: 'var(--radius-sm)',
        padding: '8px 12px',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-inverse-secondary)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff',
        fontWeight: 600
      }
    }, n), " ", p))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-inverse-secondary)',
        marginBottom: 6
      }
    }, "BUILT-IN (ALWAYS ACTIVE)"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-inverse-secondary)'
      }
    }, "PERSON, ORG, GPE, DATE, MONEY, EMAIL, PHONE, SSN, CREDIT_CARD, IP_ADDRESS")))
  },
  'Forensic Audit Trail': {
    sells: 'Every protection event, timestamped and provable',
    render: () => /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '12px 16px',
        borderBottom: '1px solid rgba(255,255,255,.08)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        color: 'var(--text-inverse-secondary)',
        letterSpacing: '.04em',
        background: 'rgba(255,255,255,.05)',
        padding: '4px 10px',
        borderRadius: 'var(--radius-full)'
      }
    }, "SOVEREIGN \xB7 ZERO-KNOWLEDGE")), /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement(TableHead, {
      cols: ['FORENSIC ID', 'TYPE', 'ENTITIES', 'LATENCY', 'TIMESTAMP', 'ACTIONS']
    }), /*#__PURE__*/React.createElement("tbody", null, AUDIT_DATA.map(r => /*#__PURE__*/React.createElement(AuditRow, {
      key: r[0],
      id: r[0],
      type: r[1],
      entities: r[2],
      latency: r[3],
      time: r[4]
    })))))
  }
};
const DESCRIPTIONS = {
  'Mission Control': 'Mission Control: a full overview of all sessions and logs, with a downloadable audit for every message sent to AI.',
  'Detection Engines & Rules': 'Detection Engines & Rules: define which detection engines are running, set your detection rules, and see an overview of the ones currently active.',
  'API Keys': 'API Keys: connect nodes and n8n workflows seamlessly.',
  'Projects': 'Projects: separate and organize your users and exchanges.',
  'Forensic Audit Trail': 'Forensic Audit Trail: search through past audits.'
};
function ProductTour() {
  const order = ['Mission Control', 'Detection Engines & Rules', 'API Keys', 'Projects', 'Forensic Audit Trail'];
  const icons = {
    'Mission Control': I.grid,
    'Projects': I.folder,
    'API Keys': I.key,
    'Detection Engines & Rules': I.shield,
    'Forensic Audit Trail': I.fileSearch
  };
  const [active, setActive] = React.useState('Mission Control');
  return /*#__PURE__*/React.createElement("section", {
    id: "tour",
    style: {
      padding: '80px 48px',
      background: 'var(--slate-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: 'var(--navy-950)',
      margin: '0 0 16px'
    }
  }, "Inside the product."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 16,
      margin: '0 0 20px'
    }
  }, "The Fairwall Dashboard: where you take control of your AI privacy."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'rgba(31,216,164,.08)',
      border: '1px solid rgba(31,216,164,.3)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 18px',
      marginBottom: 40,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setActive(order[(order.indexOf(active) - 1 + order.length) % order.length]),
    style: {
      color: 'var(--teal-500)',
      fontSize: 18,
      animation: 'pulseLeft 1.6s ease-in-out infinite',
      cursor: 'pointer'
    }
  }, "\u25C0"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--navy-950)',
      fontSize: 15,
      fontWeight: 600,
      flex: 1
    }
  }, DESCRIPTIONS[active]), /*#__PURE__*/React.createElement("span", {
    onClick: () => setActive(order[(order.indexOf(active) + 1) % order.length]),
    style: {
      color: 'var(--teal-600)',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      borderLeft: '1px solid rgba(31,216,164,.3)',
      paddingLeft: 10,
      marginLeft: 2,
      whiteSpace: 'nowrap',
      cursor: 'pointer'
    }
  }, "Click to switch to next section \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      background: 'var(--navy-950)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px 0',
      borderRight: '1px solid rgba(255,255,255,.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(31,216,164,.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--teal-400)',
      marginBottom: 28
    }
  }, I.shield), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, order.map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    onClick: () => setActive(k),
    title: k,
    className: "tour-nav-icon",
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: active === k ? 'var(--teal-400)' : 'var(--text-inverse-secondary)',
      background: active === k ? 'rgba(31,216,164,.12)' : 'transparent',
      border: active === k ? '1px solid rgba(31,216,164,.4)' : '1px solid transparent'
    }
  }, icons[k]))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-inverse-secondary)'
    }
  }, I.logout)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      borderBottom: '1px solid rgba(255,255,255,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontWeight: 700,
      fontFamily: 'var(--font-display)',
      fontSize: 15
    }
  }, "Mission Control"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(255,255,255,.04)',
      border: '1px solid rgba(31,216,164,.3)',
      borderRadius: 'var(--radius-md)',
      padding: '6px 14px',
      color: '#fff',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal-400)'
    }
  }, I.folder), "Default Project", I.chevron)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-inverse-secondary)'
    }
  }, "juan.rosenzweig@gmail.com")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      margin: '0 0 16px'
    }
  }, active), PANELS[active].render()))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      flexWrap: 'wrap',
      marginTop: 32,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "~68ms latency overhead"), /*#__PURE__*/React.createElement("span", null, "100% local-only option"), /*#__PURE__*/React.createElement("span", null, "GDPR \xB7 HIPAA \xB7 PCI-DSS"))));
}
window.ProductTour = ProductTour;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/producttour.jsx", error: String((e && e.message) || e) }); }

// site/js/roadmap.jsx
try { (() => {
const {
  Badge
} = window.FAIrwallAIDesignSystem_492fa5;
const COLS = [{
  label: 'Now',
  when: 'Shipped',
  tone: 'safe',
  items: [['Desktop app + plug-in', 'done'], ['Text redaction engine', 'done'], ['Forensic audit trail', 'done']]
}, {
  label: 'Next',
  when: 'Q4 2026',
  tone: 'info',
  items: [['Corporate dashboard', 'progress'], ['n8n workflow node', 'progress'], ['Proxy layer for local apps', 'progress'], ['Reduced install friction', 'planned']]
}, {
  label: 'Later',
  when: '2027',
  tone: 'neutral',
  items: [['PDF & audio redaction', 'planned'], ['Image/video redaction', 'planned'], ['SOC 2 certification', 'planned'], ['On-prem hardware', 'planned']]
}];
const ICONS = {
  done: /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--teal-600)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  progress: /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: '#f0b429',
      display: 'inline-block',
      boxShadow: '0 0 0 3px rgba(240,180,41,.2)'
    }
  }),
  planned: /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      border: '1.5px solid var(--border-strong)',
      display: 'inline-block'
    }
  })
};
function Roadmap() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: 'var(--navy-950)',
      margin: '0 0 40px'
    }
  }, "Roadmap."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '16.5%',
      right: '16.5%',
      height: 2,
      background: 'var(--border-default)',
      zIndex: 0
    }
  }), COLS.map((c, ci) => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: ci === 0 ? 'var(--teal-500)' : '#fff',
      border: ci === 0 ? 'none' : '2px solid var(--border-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, ci === 0 && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--navy-950)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--navy-950)'
    }
  }, c.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-tertiary)'
    }
  }, c.when))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 22px'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, c.items.map(([label, status]) => /*#__PURE__*/React.createElement("li", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14,
      color: status === 'planned' ? 'var(--text-tertiary)' : 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, ICONS[status]), label)))))))));
}
window.Roadmap = Roadmap;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/roadmap.jsx", error: String((e && e.message) || e) }); }

// site/js/segments.jsx
try { (() => {
const {
  Button
} = window.FAIrwallAIDesignSystem_492fa5;
const SEG_ICONS = {
  Corporates: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 21V6l7-3 7 3v15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21v-6h4v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 9h.01M9 13h.01M13 9h.01M13 13h.01"
  })),
  Individuals: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21c0-4 4-6 8-6s8 2 8 6"
  })),
  'AI Agencies': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "18",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "18",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7.2V13m0 0-5.5 3M12 13l5.5 3"
  }))
};
const SEGMENTS = [{
  t: 'Corporates',
  d: 'Roll out data protection across every team without a plug-in per person to manage.',
  href: '#pricing',
  tiers: [['Basic', [['For AI in Browser:', 'Corporate dashboard + desktop app + browser plug-ins']]], ['Medium', [['For AI in every app:', 'Proxy layer (for local apps) + multimodal for PDF, audio, image, and video']]], ['Advanced', [['For increased power and control:', 'On-premises hardware (in development)']]]]
}, {
  t: 'Individuals',
  d: 'Protect what you type into any AI tool, on your own device, with one install.',
  href: '#pricing',
  tiers: [['Basic', [['For AI in Browser:', 'Desktop app + browser plug-ins']]], ['Medium', [['For AI in every app:', 'Proxy layer for local apps + multimodal for PDF, audio, image, and video']]], ['Advanced', [['For AI in Workflows:', 'Integration node for AI workflows (n8n)']]]]
}, {
  t: 'AI Agencies',
  d: 'Ship client automations without becoming the party responsible for their data.',
  href: '#pricing',
  tiers: [['Basic', [['For AI in Browser:', 'Desktop app + browser plug-ins'], ['For AI in Workflows:', 'Integration node for AI workflows (n8n)']]], ['Medium', [['For AI in every app:', 'Proxy layer for local apps + multimodal for PDF, audio, image, and video']]], ['Advanced', [['For reselling under your own brand:', 'White-label the product to sell as your own']]]]
}];
function Segments() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: 'var(--navy-950)',
      margin: '0 0 32px'
    }
  }, "Built for how you work."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, SEGMENTS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    className: "flip-card",
    style: {
      perspective: 1200,
      height: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flip-card-inner",
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      transition: 'transform .6s cubic-bezier(.4,.2,.2,1)',
      transformStyle: 'preserve-3d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backfaceVisibility: 'hidden',
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      cursor: 'pointer'
    },
    onClick: () => document.getElementById('pricing').scrollIntoView({
      block: 'start'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--teal-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--teal-600)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, SEG_ICONS[s.t])), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      margin: 0,
      color: 'var(--navy-950)'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--text-secondary)',
      flex: 1
    }
  }, s.d), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => document.getElementById('pricing').scrollIntoView({
      block: 'start'
    })
  }, "See ", s.t.toLowerCase(), " pricing \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backfaceVisibility: 'hidden',
      transform: 'rotateY(180deg)',
      background: 'var(--navy-950)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.06em',
      color: 'var(--teal-400)'
    }
  }, "SOLUTIONS"), s.tiers.map(([tier, lines]) => /*#__PURE__*/React.createElement("div", {
    key: tier
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--teal-400)',
      marginBottom: 4
    }
  }, tier), lines.map(([label, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,.75)',
      lineHeight: 'var(--lh-snug)',
      marginBottom: i < lines.length - 1 ? 4 : 0
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, label), " ", d)))))))))), /*#__PURE__*/React.createElement("style", null, `.flip-card:hover .flip-card-inner{transform:rotateY(180deg)}`));
}
window.Segments = Segments;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/segments.jsx", error: String((e && e.message) || e) }); }

// site/js/trust.jsx
try { (() => {
const FACTS = ['Reversible redaction', '100% local/air-gapped option', 'Native n8n automation', 'Cryptographic audit log', 'Secret/API key scanning', 'GDPR, HIPAA, PCI-DSS', '~68ms latency overhead', '3-click no-code setup', 'REST API', 'English & German support', 'Regex-based detection engine'];
function Trust() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 48px',
      background: 'var(--slate-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, FACTS.map(f => /*#__PURE__*/React.createElement("span", {
    key: f,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      padding: '6px 12px',
      borderRadius: 'var(--radius-full)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-secondary)'
    }
  }, f))));
}
window.Trust = Trust;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/trust.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/BookDemo.jsx
try { (() => {
function BookDemo() {
  const SRC = 'https://calendar.app.google/oMppAFrYK9qQw9wn9';
  const T = window.t('book');
  return /*#__PURE__*/React.createElement("section", {
    id: "book-demo",
    style: {
      padding: '80px 48px',
      background: 'var(--navy-950)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,0.72fr) minmax(0,1.28fr)',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--brand-green)',
      margin: '0 0 14px'
    }
  }, T.eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: '#fff',
      margin: '0 0 14px',
      lineHeight: 1.1
    }
  }, T.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-inverse-secondary)',
      fontSize: 16,
      lineHeight: 1.65,
      margin: '0 0 28px',
      maxWidth: '46ch',
      textWrap: 'pretty'
    }
  }, T.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, T.bullets.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--teal-400)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12.5l5 5L20 6.5"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontSize: 15,
      lineHeight: 1.5
    }
  }, t)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      fontSize: 13,
      color: 'var(--text-inverse-secondary)'
    }
  }, T.fallbackA, /*#__PURE__*/React.createElement("a", {
    href: SRC,
    target: "_blank",
    rel: "noopener",
    style: {
      color: 'var(--teal-400)',
      textDecoration: 'underline'
    }
  }, T.fallbackB), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid rgba(255,255,255,.14)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: '0 18px 50px rgba(0,0,0,.32)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: SRC,
    title: "Book a Fairwall AI demo",
    style: {
      width: '100%',
      height: 820,
      border: 'none',
      display: 'block'
    }
  }))));
}
window.BookDemo = BookDemo;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/BookDemo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Brand.jsx
try { (() => {
function Brand() {
  const g = {
    color: 'var(--brand-green)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'inherit'
    }
  }, "F", /*#__PURE__*/React.createElement("span", {
    style: g
  }, "ai"), "rwall ", /*#__PURE__*/React.createElement("span", {
    style: g
  }, "AI"));
}
window.Brand = Brand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Brand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ChatWidget.jsx
try { (() => {
function ChatWidget() {
  const SRC = 'https://chat.ultimo-bots.com/178877546422124181653QJAvi';
  const [open, setOpen] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false); // iframe mounts only after first open (no third-party cookies before interaction)
  const toggle = () => {
    setOpen(o => !o);
    setLoaded(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 20,
      bottom: 20,
      zIndex: 9000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 12,
      fontFamily: 'var(--font-body)'
    }
  }, loaded && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(380px, calc(100vw - 40px))',
      height: 'min(560px, calc(100vh - 140px))',
      display: open ? 'flex' : 'none',
      flexDirection: 'column',
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: '0 18px 50px rgba(8,14,25,.28)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '12px 14px',
      background: 'var(--navy-950)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 14
    }
  }, "Ask F", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, "ai"), "rwall ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, "AI")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    "aria-label": "Close chat",
    style: {
      background: 'transparent',
      border: 'none',
      color: '#fff',
      fontSize: 20,
      lineHeight: 1,
      cursor: 'pointer',
      padding: '0 2px'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("iframe", {
    src: SRC,
    title: "Fairwall AI chat",
    allow: "microphone; clipboard-write",
    style: {
      flex: 1,
      width: '100%',
      border: 'none'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: toggle,
    "aria-expanded": open,
    "aria-label": open ? 'Close chat' : 'Open chat',
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--teal-500)',
      color: 'var(--navy-950)',
      boxShadow: '0 10px 26px rgba(31,216,164,.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, open ? /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a8.4 8.4 0 0 1-8.5 8.4 8.9 8.9 0 0 1-3.8-.8L3 21l1.6-4.4A8.3 8.3 0 0 1 3.6 11 8.4 8.4 0 0 1 12.1 3h.4a8.4 8.4 0 0 1 8.5 8Z"
  }))));
}
window.ChatWidget = ChatWidget;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ChatWidget.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/CookieConsent.jsx
try { (() => {
function CookieConsent() {
  const KEY = 'fairwall.cookie.consent.v1';
  const T = window.t('cookie');
  const [state, setState] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [panel, setPanel] = React.useState(false);
  const [analytics, setAnalytics] = React.useState(false);
  React.useEffect(() => {
    let saved = null;
    try {
      saved = JSON.parse(localStorage.getItem(KEY) || 'null');
    } catch (e) {}
    if (saved && saved.version === 1) {
      setState(saved);
      setAnalytics(!!saved.analytics);
    } else setOpen(true);
    window.openCookieSettings = () => {
      setPanel(true);
      setOpen(true);
    };
  }, []);
  const save = a => {
    const rec = {
      version: 1,
      necessary: true,
      analytics: a,
      date: new Date().toISOString()
    };
    try {
      localStorage.setItem(KEY, JSON.stringify(rec));
    } catch (e) {}
    setState(rec);
    setAnalytics(a);
    setOpen(false);
    setPanel(false);
  };
  if (!open) return null;
  const link = {
    color: 'var(--teal-400)',
    textDecoration: 'underline'
  };
  const btn = {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: 14,
    padding: '11px 20px',
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    border: 'none',
    whiteSpace: 'nowrap'
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "false",
    "aria-label": T.title,
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
      padding: '0 16px 16px',
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'auto',
      width: '100%',
      maxWidth: 760,
      background: 'var(--navy-950)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,.14)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: '0 18px 50px rgba(0,0,0,.38)',
      padding: '22px 24px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 17,
      marginBottom: 8
    }
  }, T.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-inverse-secondary)',
      textWrap: 'pretty'
    }
  }, T.body, /*#__PURE__*/React.createElement("a", {
    href: "impressum.html",
    style: link
  }, T.privacy), T.and, /*#__PURE__*/React.createElement("a", {
    href: "terms.html",
    style: link
  }, T.terms), "."), panel && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16,
      background: 'rgba(255,255,255,.05)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, T.necessary), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-inverse-secondary)',
      lineHeight: 1.5
    }
  }, T.necessaryD)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--brand-green)',
      paddingTop: 2
    }
  }, T.always)), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16,
      background: 'rgba(255,255,255,.05)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, T.analytics), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-inverse-secondary)',
      lineHeight: 1.5
    }
  }, T.analyticsD)), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: analytics,
    onChange: e => setAnalytics(e.target.checked),
    style: {
      width: 18,
      height: 18,
      accentColor: 'var(--teal-500)',
      marginTop: 2
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => save(true),
    style: {
      ...btn,
      background: 'var(--teal-500)',
      color: 'var(--navy-950)'
    }
  }, T.acceptAll), /*#__PURE__*/React.createElement("button", {
    onClick: () => save(false),
    style: {
      ...btn,
      background: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,.28)'
    }
  }, T.rejectAll), panel ? /*#__PURE__*/React.createElement("button", {
    onClick: () => save(analytics),
    style: {
      ...btn,
      background: 'transparent',
      color: 'var(--teal-400)',
      padding: '11px 8px'
    }
  }, T.save) : /*#__PURE__*/React.createElement("button", {
    onClick: () => setPanel(true),
    style: {
      ...btn,
      background: 'transparent',
      color: 'var(--teal-400)',
      padding: '11px 8px'
    }
  }, T.manage))));
}
window.CookieConsent = CookieConsent;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/CookieConsent.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Footer.jsx
try { (() => {
function Footer() {
  const T = window.t('footer');
  const l = {
    color: 'var(--text-inverse-secondary)',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-950)',
      padding: '48px',
      color: 'var(--text-inverse-secondary)',
      fontFamily: 'var(--font-body)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      color: '#fff'
    }
  }, "F", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, "ai"), "rwall ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, "AI")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "impressum.html",
    style: l
  }, T.impressum), /*#__PURE__*/React.createElement("a", {
    href: "terms.html",
    style: l
  }, T.terms), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      window.openCookieSettings && window.openCookieSettings();
    },
    style: l
  }, T.cookies), /*#__PURE__*/React.createElement("a", {
    href: window.SITE_LANG === 'de' ? 'index.html' : 'index-de.html',
    style: l
  }, window.SITE_LANG === 'de' ? 'English' : 'Deutsch'), /*#__PURE__*/React.createElement("span", null, T.rights, /*#__PURE__*/React.createElement(Brand, null), ", Inc."))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Header.jsx
try { (() => {
const {
  Button
} = window.FAIrwallAIDesignSystem_492fa5;
function LangToggle() {
  const de = window.SITE_LANG === 'de';
  const item = active => ({
    padding: '6px 11px',
    fontSize: 12,
    fontWeight: 700,
    fontFamily: 'var(--font-body)',
    color: active ? '#fff' : 'var(--text-secondary)',
    background: active ? 'var(--navy-950)' : 'transparent',
    textDecoration: 'none',
    display: 'block'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    hrefLang: "en",
    style: item(!de)
  }, "EN"), /*#__PURE__*/React.createElement("a", {
    href: "index-de.html",
    hrefLang: "de",
    style: item(de)
  }, "DE"));
}
function Header() {
  const T = window.t('header');
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 48px',
      borderBottom: '1px solid var(--border-default)',
      background: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/logo-mark-new.png",
    style: {
      height: 64
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      color: 'var(--navy-950)'
    }
  }, "F", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, "ai"), "rwall ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, "AI"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14
    }
  }, T.nav.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    style: {
      color: 'var(--text-secondary)'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LangToggle, null), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, T.signIn), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    onClick: () => document.getElementById('demo').scrollIntoView({
      block: 'start'
    })
  }, T.cta)));
}
Object.assign(window, {
  Header,
  LangToggle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
const {
  Button
} = window.FAIrwallAIDesignSystem_492fa5;
function Hero() {
  const T = window.t('hero');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '88px 48px 72px'
    }
  }, /*#__PURE__*/React.createElement("video", {
    src: "../../assets/hero-options/keyhole-animated.mp4",
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(100deg, rgba(10,22,40,.92) 40%, rgba(10,22,40,.55))',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 10,
      marginBottom: 20,
      padding: '8px 14px',
      background: 'rgba(255,255,255,.08)',
      border: '1px solid rgba(255,255,255,.12)',
      borderRadius: 'var(--radius-full)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      color: 'var(--teal-400)'
    }
  }, T.stat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(255,255,255,.85)'
    }
  }, T.statLabel)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-display-l)',
      lineHeight: 'var(--lh-tight)',
      color: '#fff',
      margin: '0 0 20px',
      letterSpacing: 'var(--ls-tight)'
    }
  }, T.h1), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'rgba(255,255,255,.78)',
      lineHeight: 'var(--lh-normal)',
      maxWidth: 520,
      margin: '0 0 32px'
    }
  }, /*#__PURE__*/React.createElement(Brand, null), T.lead, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--brand-green)'
    }
  }, T.bold), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), T.everywhere, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), T.forms[0], /*#__PURE__*/React.createElement("br", null), T.forms[1], /*#__PURE__*/React.createElement("br", null), T.forms[2]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => document.getElementById('demo').scrollIntoView({
      block: 'start'
    })
  }, T.ctaDemo), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      background: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,.35)',
      borderRadius: 'var(--radius-md)'
    },
    onClick: () => document.getElementById('pricing').scrollIntoView({
      block: 'start'
    })
  }, T.ctaPricing))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      position: 'relative',
      height: 340,
      background: 'var(--navy-950)',
      border: '1px solid rgba(255,255,255,.1)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/hero-shield.jpg",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/LiveDemo.jsx
try { (() => {
const {
  Badge,
  Button
} = window.FAIrwallAIDesignSystem_492fa5;
const PATTERNS = [{
  type: 'EMAIL',
  label: 'email',
  re: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
}, {
  type: 'PHONE',
  label: 'phone number',
  re: /\b(\+?\d{1,2}[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}\b/g
}, {
  type: 'EMPLOYEE_ID',
  label: 'employee ID',
  re: /\bEMP-\d{4,6}\b/g
}, {
  type: 'INVOICE',
  label: 'invoice number',
  re: /\bINV-\d{4}-\d{3,6}\b/gi
}, {
  type: 'SSN',
  label: 'SSN',
  re: /\b\d{3}-\d{2}-\d{4}\b/g
}, {
  type: 'CREDIT_CARD',
  label: 'credit card',
  re: /\b(?:\d[ -]?){13,16}\b/g
}, {
  type: 'IP_ADDRESS',
  label: 'IP address',
  re: /\b(?:\d{1,3}\.){3}\d{1,3}\b/g
}, {
  type: 'DATE',
  label: 'date',
  re: /\b\d{4}-\d{2}-\d{2}\b|\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/g
}, {
  type: 'ADDRESS',
  label: 'street address',
  re: /\b\d{1,5}\s+[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)?\s(Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Lane|Ln|Drive|Dr)\b/g
}, {
  type: 'MONEY',
  label: 'amount',
  re: /\$\s?\d[\d,]*(\.\d{2})?\b/g
}, {
  type: 'PERSON',
  label: 'name',
  re: /\b(?:Mr|Mrs|Ms|Dr)\.\s[A-Z][a-z]+(?:\s[A-Z][a-z]+)?\b|\b(?:my name is|I'm|I am)\s(?<name>[A-Z][a-z]+(?:\s[A-Z][a-z]+)?)/gi
}, {
  type: 'CITY',
  label: 'city',
  re: new RegExp('\\b(' + ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Boston', 'Seattle', 'Austin', 'Miami', 'Denver', 'Atlanta', 'Houston', 'Dallas', 'Phoenix', 'Philadelphia', 'Portland', 'Washington', 'San Diego', 'Las Vegas', 'Vienna', 'London', 'Paris', 'Berlin', 'Madrid', 'Rome', 'Milan', 'Amsterdam', 'Dublin', 'Brussels', 'Zurich', 'Geneva', 'Munich', 'Frankfurt', 'Hamburg', 'Barcelona', 'Lisbon', 'Copenhagen', 'Stockholm', 'Oslo', 'Helsinki', 'Warsaw', 'Prague', 'Budapest', 'Athens', 'Toronto', 'Vancouver', 'Montreal', 'Mexico City', 'Sao Paulo', 'Buenos Aires', 'Sydney', 'Melbourne', 'Auckland', 'Tokyo', 'Osaka', 'Seoul', 'Singapore', 'Hong Kong', 'Shanghai', 'Beijing', 'Mumbai', 'Delhi', 'Bangalore', 'Dubai', 'Tel Aviv', 'Cairo', 'Johannesburg', 'Nairobi'].join('|') + ')\\b', 'g')
}];
const SAMPLE = "Hi, please onboard our new hire. Her email is priya.shah@acme.com and her direct line is 415-555-0138. Her employee ID is EMP-88231 — set her up in the system.";
const PRESETS = [{
  label: 'Draft an email',
  text: "Write me an email to priya.shah@acme.com letting her know her new employee ID is EMP-88231 and to call me at 415-555-0138 with any questions."
}, {
  label: 'Draft a complaint',
  text: "Write a complaint email about a $482.50 charge on my card dated 2024-03-11 — I'm John Reyes, reachable at john.reyes99@gmail.com, based in Chicago."
}, {
  label: 'Summarize a memo',
  text: "Summarize this for my manager: approve the wire of $12,400 to our vendor, reference invoice INV-2024-0091, and loop in Mrs. Alvarez at +1 512-555-0199."
}, {
  label: 'Rewrite a letter',
  text: "Rewrite this more formally: my name is Daniel Cho, SSN 512-33-9081, living at 221 Baker Street, and I'd like my contract reviewed before 04/12/2025."
}];
function findMatches(text) {
  const matches = [];
  PATTERNS.forEach(p => {
    let m;
    p.re.lastIndex = 0;
    while (m = p.re.exec(text)) {
      const val = m.groups?.name || m[0];
      const start = m.groups?.name ? m.index + m[0].indexOf(m.groups.name) : m.index;
      matches.push({
        start,
        end: start + val.length,
        text: val,
        type: p.type,
        label: p.label
      });
      if (m[0].length === 0) p.re.lastIndex++;
    }
  });
  matches.sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start));
  const kept = [];
  let lastEnd = -1;
  matches.forEach(m => {
    if (m.start >= lastEnd) {
      kept.push(m);
      lastEnd = m.end;
    }
  });
  return kept;
}
function highlightTokens(text, re) {
  const parts = [];
  let last = 0,
    m;
  const r = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g');
  while (m = r.exec(text)) {
    if (m.index > last) parts.push(/*#__PURE__*/React.createElement("span", {
      key: last
    }, text.slice(last, m.index)));
    parts.push(/*#__PURE__*/React.createElement("span", {
      key: m.index,
      style: {
        color: 'var(--teal-400)'
      }
    }, m[0]));
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(/*#__PURE__*/React.createElement("span", {
    key: last + 'e'
  }, text.slice(last)));
  return parts;
}
function LiveDemo() {
  const [text, setText] = React.useState(SAMPLE);
  const [priv, setPriv] = React.useState({});
  const [sent, setSent] = React.useState(null);
  const matches = React.useMemo(() => findMatches(text), [text]);
  function keyFor(m) {
    return m.type + ':' + m.start;
  }
  function isPrivate(m) {
    const k = keyFor(m);
    return priv[k] !== undefined ? priv[k] : true;
  }
  function toggle(m) {
    const k = keyFor(m);
    setPriv(p => ({
      ...p,
      [k]: !isPrivate(m)
    }));
  }
  function buildSegments() {
    const segs = [];
    let cursor = 0;
    matches.forEach(m => {
      if (m.start > cursor) segs.push({
        plain: text.slice(cursor, m.start)
      });
      segs.push({
        match: m
      });
      cursor = m.end;
    });
    if (cursor < text.length) segs.push({
      plain: text.slice(cursor)
    });
    return segs;
  }
  function buildReply(tokenMap, srcText) {
    const tok = type => Object.keys(tokenMap).find(k => k.startsWith(`[REDACTED_${type}_`));
    const low = srcText.toLowerCase();
    if (Object.keys(tokenMap).length === 0) return "Got it — nothing needed protecting in this message.";
    if (low.includes('complaint')) {
      return `Subject: Dispute — Unauthorized Charge\n\nHello,\n\nI'm writing to dispute a charge of ${tok('MONEY') || 'the amount in question'} dated ${tok('DATE') || 'the date noted'}. Please investigate and issue a refund to my account.\n\nThank you,\n${tok('PERSON') || 'the customer'}\n${tok('EMAIL') || ''}`;
    }
    if (low.includes('summar')) {
      return `Summary: Approve the wire transfer of ${tok('MONEY') || 'the requested amount'}, referencing ${tok('INVOICE') || 'the invoice on file'}. Loop in the contact at ${tok('PHONE') || 'the number provided'} to confirm.`;
    }
    if (low.includes('rewrite') || low.includes('more formally')) {
      return `To Whom It May Concern,\n\nI, ${tok('PERSON') || 'the undersigned'}, residing at ${tok('ADDRESS') || 'the address on file'}${tok('SSN') ? ` (SSN ${tok('SSN')})` : ''}, formally request review of my contract prior to ${tok('DATE') || 'the stated deadline'}.\n\nSincerely,\n${tok('PERSON') || ''}`;
    }
    if (low.includes('email')) {
      return `Subject: Quick Update\n\nHi there,\n\nYour new employee ID is ${tok('EMPLOYEE_ID') || 'on file'}. Feel free to reach out at ${tok('PHONE') || 'the number provided'} with any questions.\n\nSent to: ${tok('EMAIL') || 'the recipient'}\n\nBest regards`;
    }
    const tokens = Object.keys(tokenMap);
    return `Got it — I've logged the details for ${tokens.join(' and ')} and will follow up using those references.`;
  }
  function handleSend() {
    const counters = {};
    let out = '';
    let cursor = 0;
    matches.forEach(m => {
      out += text.slice(cursor, m.start);
      if (isPrivate(m)) {
        counters[m.type] = (counters[m.type] || 0) + 1;
        out += `[REDACTED_${m.type}_${String(counters[m.type]).padStart(2, '0')}]`;
      } else {
        out += m.text;
      }
      cursor = m.end;
    });
    out += text.slice(cursor);
    const tokens = [...out.matchAll(/\[REDACTED_[A-Z_]+_\d+\]/g)].map(x => x[0]);
    const tokenMap = {};
    {
      const c2 = {};
      matches.forEach(m => {
        if (isPrivate(m)) {
          c2[m.type] = (c2[m.type] || 0) + 1;
          tokenMap[`[REDACTED_${m.type}_${String(c2[m.type]).padStart(2, '0')}]`] = m.text;
        }
      });
    }
    const reply = buildReply(tokenMap, text);
    const restored = tokens.length ? reply.replace(/\[REDACTED_[A-Z_]+_\d+\]/g, t => tokenMap[t] || t) : reply;
    const restoredValues = Object.values(tokenMap);
    const auditId = 'AUDIT-' + Math.random().toString(16).slice(2, 10).toUpperCase();
    const latency = 40 + Math.floor(Math.random() * 40);
    setSent({
      redacted: out,
      reply,
      restored,
      restoredValues,
      auditId,
      count: tokens.length,
      latency
    });
  }
  const segs = buildSegments();
  const privateCount = matches.filter(isPrivate).length;
  return /*#__PURE__*/React.createElement("section", {
    id: "demo",
    style: {
      padding: '80px 48px',
      background: 'var(--slate-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: 'var(--navy-950)',
      margin: '0 0 32px'
    }
  }, "Watch it work."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 28,
      left: '8%',
      right: '8%',
      height: 2,
      background: 'linear-gradient(90deg, var(--teal-500), var(--navy-500), var(--teal-500))',
      opacity: .4,
      zIndex: 0
    }
  }), [{
    n: 1,
    label: 'Ask AI',
    d: 'User asks a question via browser.',
    c: 'user',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "5",
      width: "16",
      height: "11",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 19h20"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "9",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 13h6"
    }))
  }, {
    n: 2,
    label: 'Mark & Detect',
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Brand, null), " auto-flags sensitive data, user can mark more."),
    c: 'tool',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 3v18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 4h11l-3 4 3 4H5"
    }))
  }, {
    n: 3,
    label: 'Redact',
    d: 'Marked data is anonymized before it ever leaves the device.',
    c: 'tool',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "11",
      r: "2"
    }))
  }, {
    n: 4,
    label: 'Send',
    d: 'Only the safe, anonymized version reaches the AI tool.',
    c: 'user',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3v12m0 0 4-4m-4 4-4-4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 19h16"
    }))
  }, {
    n: 5,
    label: 'Restore',
    d: 'The response is mapped back to your original context.',
    c: 'tool',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 12a9 9 0 1 1 3 6.7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 12V7m0 5h5"
    }))
  }, {
    n: 6,
    label: 'Audit Trail',
    d: 'Every action is logged to a searchable record.',
    c: 'tool',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.5 13.5l2 2 3.5-4"
    }))
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    title: s.d,
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '15%',
      minWidth: 90,
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-lg)',
      background: s.c === 'user' ? 'var(--navy-800)' : 'var(--teal-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: s.c === 'user' ? '#fff' : 'var(--navy-950)',
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -8,
      left: -8,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--navy-950)',
      color: '#fff',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, s.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--navy-950)',
      marginTop: 12,
      textAlign: 'center'
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      marginBottom: 24,
      fontSize: 12.5,
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: 'var(--navy-800)'
    }
  }), "You do this"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: 'var(--teal-500)'
    }
  }), /*#__PURE__*/React.createElement(Brand, null), " does this")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-tertiary)'
    }
  }, "Try it:"), PRESETS.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.label,
    onClick: () => {
      setText(p.text);
      setSent(null);
      setPriv({});
    },
    style: {
      padding: '6px 14px',
      borderRadius: 'var(--radius-full)',
      border: '1px solid var(--border-default)',
      background: text === p.text ? 'var(--navy-950)' : '#fff',
      color: text === p.text ? '#fff' : 'var(--navy-950)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 12.5,
      cursor: 'pointer'
    }
  }, p.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-tertiary)'
    }
  }, "or type your own below")), /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: e => setText(e.target.value),
    rows: 4,
    placeholder: "Type anything you'd send to an AI tool\u2026",
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      padding: 16,
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-strong)',
      resize: 'vertical',
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-tertiary)',
      margin: '8px 0'
    }
  }, "This is how your message will be highlighted automatically"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      fontSize: 15,
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-primary)'
    }
  }, segs.map((s, i) => s.plain !== undefined ? /*#__PURE__*/React.createElement("span", {
    key: i
  }, s.plain) : /*#__PURE__*/React.createElement("span", {
    key: i,
    onClick: () => toggle(s.match),
    title: isPrivate(s.match) ? 'Marked private — click to make public' : 'Marked public — click to protect',
    style: {
      cursor: 'pointer',
      background: isPrivate(s.match) ? 'rgba(239,68,68,.14)' : 'rgba(31,216,164,.14)',
      borderBottom: `2px solid ${isPrivate(s.match) ? 'var(--red-500)' : 'var(--teal-500)'}`,
      padding: '1px 2px',
      borderRadius: 3
    }
  }, s.match.text))), matches.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 12
    }
  }, matches.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    onClick: () => toggle(m),
    style: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)',
      background: isPrivate(m) ? 'var(--red-100)' : 'var(--teal-100)',
      color: isPrivate(m) ? 'var(--red-600)' : 'var(--teal-600)'
    }
  }, m.label, ": ", isPrivate(m) ? 'private' : 'public'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-tertiary)'
    }
  }, matches.length, " item", matches.length !== 1 ? 's' : '', " detected \u2014 ", privateCount, " will be redacted before sending."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: handleSend
  }, "Send to AI tool")), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      background: 'var(--navy-950)',
      borderRadius: 'var(--radius-lg)',
      padding: 24,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: '#f0b429',
      marginBottom: 12
    }
  }, "WHAT THE AI TOOL RECEIVED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.6,
      marginBottom: 16
    }
  }, highlightTokens(sent.redacted, /\[REDACTED_[A-Z_]+_\d+\]/)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: '#f0b429',
      marginBottom: 8
    }
  }, "SIMULATED AI RESPONSE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      marginBottom: 16,
      whiteSpace: 'pre-wrap',
      lineHeight: 'var(--lh-normal)'
    }
  }, highlightTokens(sent.reply, /\[REDACTED_[A-Z_]+_\d+\]/)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: '#f0b429',
      marginBottom: 8
    }
  }, "RESTORED AI RESPONSE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      marginBottom: 16,
      whiteSpace: 'pre-wrap',
      lineHeight: 'var(--lh-normal)'
    }
  }, sent.restoredValues.length ? highlightTokens(sent.restored, new RegExp(sent.restoredValues.map(v => v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g')) : sent.restored), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--teal-400)',
      borderTop: '1px solid rgba(255,255,255,.1)',
      paddingTop: 12
    }
  }, sent.auditId, " \xB7 ", sent.count, " entities \xB7 ", sent.latency, "ms \u2014 logged."))));
}
window.LiveDemo = LiveDemo;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/LiveDemo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Locations.jsx
try { (() => {
function Locations() {
  const T = window.t('locations');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h2)',
      color: 'var(--navy-950)',
      margin: '0 0 20px'
    }
  }, T.quotesTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, T.quotes.map(([q, role]) => /*#__PURE__*/React.createElement("div", {
    key: role,
    style: {
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px',
      fontSize: 14,
      color: 'var(--text-primary)',
      lineHeight: 'var(--lh-normal)'
    }
  }, "\"", q, "\""), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, role, " \xB7 ", T.placeholder))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h2)',
      color: 'var(--navy-950)',
      margin: '0 0 20px'
    }
  }, T.locationTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Fairwall AI HQ",
    width: "100%",
    height: "220",
    style: {
      border: 0,
      display: 'block'
    },
    loading: "lazy",
    src: "https://maps.google.com/maps?q=Hadikgasse%2064%2C%201140%20Wien&z=15&output=embed"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginTop: 10,
      fontFamily: 'var(--font-mono)'
    }
  }, "Hadikgasse 64, 1140 Wien"))));
}
window.Locations = Locations;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Locations.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Pricing.jsx
try { (() => {
const {
  Badge,
  Button
} = window.FAIrwallAIDesignSystem_492fa5;
const PRICES = {
  Individuals: {
    Basic: 12,
    Medium: 14,
    Advanced: 17
  }
};
const YEARLY_MONTHLY = {
  Basic: '8.5',
  Medium: '10',
  Advanced: '12'
};
function flattenGroups(groups) {
  return groups.flatMap(([label, feats]) => label === 'Contact us' ? ['Contact us'] : feats.map(f => ({
    label,
    f
  })));
}
function cumulativePlans(tiers) {
  let acc = [];
  return tiers.map(([tier, groups]) => {
    const flat = flattenGroups(groups);
    if (flat[0] === 'Contact us') return [tier, [], [], groups];
    const inherited = acc.slice();
    acc = acc.concat(flat);
    return [tier, inherited, flat, groups];
  });
}
const SEG_ICONS = {
  Corporates: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 21V6l7-3 7 3v15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21v-6h4v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 9h.01M9 13h.01M13 9h.01M13 13h.01"
  })),
  Individuals: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21c0-4 4-6 8-6s8 2 8 6"
  })),
  'AI Agencies': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "18",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "18",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7.2V13m0 0-5.5 3M12 13l5.5 3"
  }))
};
function Pricing() {
  const T = window.t('pricing');
  const [seg, setSeg] = React.useState('Corporates');
  const [billing, setBilling] = React.useState('monthly');
  const plans = cumulativePlans(T.plans[seg]);
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    style: {
      padding: '80px 48px',
      background: 'var(--slate-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: 'var(--navy-950)',
      margin: '0 0 8px'
    }
  }, T.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 15,
      margin: '0 0 32px'
    }
  }, T.sub), seg === 'Individuals' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-full)',
      padding: 4
    }
  }, ['monthly', 'yearly'].map(b => /*#__PURE__*/React.createElement("button", {
    key: b,
    onClick: () => setBilling(b),
    style: {
      padding: '8px 18px',
      borderRadius: 'var(--radius-full)',
      border: 'none',
      background: billing === b ? 'var(--navy-950)' : 'transparent',
      color: billing === b ? '#fff' : 'var(--navy-950)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, b === 'monthly' ? T.monthly : T.yearly))), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, T.trial)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 40
    }
  }, Object.keys(T.plans).map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSeg(s),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 22px',
      borderRadius: 'var(--radius-full)',
      border: seg === s ? '1px solid var(--teal-500)' : '1px solid var(--border-default)',
      background: seg === s ? 'var(--navy-950)' : '#fff',
      color: seg === s ? '#fff' : 'var(--navy-950)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: seg === s ? 'var(--teal-400)' : 'var(--text-secondary)',
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, SEG_ICONS[s]), T.labels[s]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, plans.map(([tier, inherited, own, groups], i) => /*#__PURE__*/React.createElement("div", {
    key: tier,
    style: {
      background: '#fff',
      border: i === 1 ? '1px solid var(--teal-500)' : '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      position: 'relative'
    }
  }, i === 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -11,
      left: 24,
      background: 'var(--teal-500)',
      color: 'var(--navy-950)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 700,
      padding: '3px 10px',
      borderRadius: 'var(--radius-full)'
    }
  }, T.mostCommon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.06em',
      color: 'var(--text-tertiary)'
    }
  }, T.tier, " ", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      margin: 0,
      color: 'var(--teal-600)'
    }
  }, tier), PRICES[seg]?.[tier] && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--navy-950)'
    }
  }, "\u20AC", billing === 'yearly' ? YEARLY_MONTHLY[tier] : PRICES[seg][tier], /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-tertiary)'
    }
  }, T.perMonth)), billing === 'yearly' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)',
      marginTop: 2
    }
  }, T.billed((YEARLY_MONTHLY[tier] * 12).toFixed(0)))), groups[0] && groups[0][0] === 'Contact us' ? /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, T.contact) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-tertiary)',
      fontStyle: 'italic'
    }
  }, T.everythingIn(plans[i - 1][0])), inherited.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, inherited.map(({
    label,
    f
  }) => /*#__PURE__*/React.createElement("li", {
    key: label + f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-tertiary)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })), f))), groups.map(([label, feats]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--teal-600)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, feats.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 14,
      color: 'var(--text-primary)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--teal-600)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })), f)))))), /*#__PURE__*/React.createElement(Button, {
    variant: i === 1 ? 'accent' : 'secondary',
    size: "sm",
    onClick: () => {
      window.location.href = seg === 'Individuals' ? 'checkout.html' : 'book-demo.html';
    }
  }, T.cta))))));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Principles.jsx
try { (() => {
function Icon({
  d,
  size = 40
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--teal-500)",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, d);
}
const PRINCIPLE_ICONS = [/*#__PURE__*/React.createElement(Icon, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2.5"
  }))
}), /*#__PURE__*/React.createElement(Icon, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 11V6a2 2 0 0 1 4 0v5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 6a2 2 0 0 1 4 0v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 8a2 2 0 0 1 4 0v6a6 6 0 0 1-6 6h-2a6 6 0 0 1-5-2.7L5 12.5a1.7 1.7 0 0 1 2.5-2.3L9 12"
  }))
}), /*#__PURE__*/React.createElement(Icon, {
  d: /*#__PURE__*/React.createElement("path", {
    d: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"
  })
}), /*#__PURE__*/React.createElement(Icon, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 13.5l2 2 3.5-4"
  }))
})];
function Principles() {
  const T = window.t('principles');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 48px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: 'var(--navy-950)',
      margin: '0 0 40px'
    }
  }, T.titleA, /*#__PURE__*/React.createElement(Brand, null), T.titleB), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, T.items.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, PRINCIPLE_ICONS[i]), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      margin: '0 0 8px',
      color: 'var(--navy-950)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-normal)'
    }
  }, d)))));
}
window.Principles = Principles;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Principles.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ProductForms.jsx
try { (() => {
function ProductForms() {
  const T = window.t('forms');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-950)',
      padding: '80px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: '#fff',
      margin: '0 0 8px'
    }
  }, T.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-inverse-secondary)',
      fontSize: 16,
      margin: '0 0 32px'
    }
  }, T.subA, /*#__PURE__*/React.createElement(Brand, null), T.subB), /*#__PURE__*/React.createElement("img", {
    src: "./assets/product-forms.jpg",
    alt: T.alt,
    style: {
      width: '100%',
      display: 'block',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)'
    }
  })));
}
window.ProductForms = ProductForms;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ProductForms.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ProductTour.jsx
try { (() => {
const {
  Badge
} = window.FAIrwallAIDesignSystem_492fa5;
function Icon({
  d,
  size = 18
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, d);
}
const I = {
  grid: /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    }))
  }),
  folder: /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement("path", {
      d: "M3 6.5A1.5 1.5 0 0 1 4.5 5h4l2 2h9A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z"
    })
  }),
  key: /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "8",
      cy: "15",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.5 12.5 20 3M16 7l2 2M19 4l2 2"
    }))
  }),
  shield: /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement("path", {
      d: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"
    })
  }),
  fileSearch: /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "10.5",
      cy: "14",
      r: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 15.5 14 17.5"
    }))
  }),
  logout: /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 3H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 8l5 4-5 4M19 12H9"
    }))
  }),
  plus: /*#__PURE__*/React.createElement(Icon, {
    size: 15,
    d: /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    })
  }),
  trash: /*#__PURE__*/React.createElement(Icon, {
    size: 16,
    d: /*#__PURE__*/React.createElement("path", {
      d: "M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-12"
    })
  }),
  eye: /*#__PURE__*/React.createElement(Icon, {
    size: 16,
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2.5"
    }))
  }),
  download: /*#__PURE__*/React.createElement(Icon, {
    size: 16,
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3v12m0 0 4-4m-4 4-4-4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 19h16"
    }))
  }),
  chevron: /*#__PURE__*/React.createElement(Icon, {
    size: 14,
    d: /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6"
    })
  }),
  zap: /*#__PURE__*/React.createElement(Icon, {
    size: 16,
    d: /*#__PURE__*/React.createElement("path", {
      d: "M13 2 3 14h7l-1 8 10-12h-7z"
    })
  }),
  clock: /*#__PURE__*/React.createElement(Icon, {
    size: 16,
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5l3 3"
    }))
  }),
  activity: /*#__PURE__*/React.createElement(Icon, {
    size: 16,
    d: /*#__PURE__*/React.createElement("path", {
      d: "M3 12h4l2 7 4-14 2 7h6"
    })
  }),
  alert: /*#__PURE__*/React.createElement(Icon, {
    size: 14,
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3 2 20h20z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 10v4M12 17h.01"
    }))
  }),
  brain: /*#__PURE__*/React.createElement(Icon, {
    size: 16,
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8A3 3 0 0 0 8 17a3 3 0 0 0 5-2V6a2 2 0 0 0-4-.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8A3 3 0 0 1 16 17"
    }))
  })
};
function AuditRow({
  id,
  type,
  entities,
  latency,
  time
}) {
  return /*#__PURE__*/React.createElement("tr", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.07)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      color: 'var(--teal-400)',
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, "\u25B6 ", id), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      color: '#f0b429',
      background: 'rgba(240,180,41,.12)',
      padding: '3px 10px',
      borderRadius: 'var(--radius-sm)'
    }
  }, type)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      color: '#fff',
      fontSize: 13
    }
  }, entities), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      color: '#fff',
      fontSize: 13
    }
  }, latency), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      color: 'var(--text-inverse-secondary)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }, time), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      display: 'flex',
      gap: 12,
      color: 'var(--text-inverse-secondary)'
    }
  }, I.eye, I.download));
}
const AUDIT_DATA = [['AUDIT-E2CCEEF8E8B7', 'REDACT', 3, '47ms', '15:21:51'], ['AUDIT-DCB8EE6A4E71', 'REDACT', 3, '70ms', '15:21:50'], ['AUDIT-7868124F90FB', 'REDACT', 2, '119ms', '15:21:48'], ['AUDIT-696D5BB0DE13', 'REDACT', 1, '57ms', '15:21:41'], ['AUDIT-BD47A50E6F1F', 'REDACT', 0, '481ms', '15:21:40'], ['AUDIT-C4FBC5677EC3', 'REDACT', 3, '35ms', '14:12:17']];
function TableHead({
  cols
}) {
  return /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, cols.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: c,
    style: {
      textAlign: 'left',
      padding: '12px 16px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.04em',
      color: 'var(--text-inverse-secondary)'
    }
  }, c))));
}
const PANELS = {
  'Mission Control': {
    sells: 'Live metrics — not a black box',
    render: () => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 16
      }
    }, [[I.zap, 'SESSION REQUESTS', '50', 'This session'], [I.clock, 'AVG LATENCY', '72ms', 'Moving average'], [I.activity, 'EVENTS LOGGED', '50', 'Local memory']].map(([icon, label, val, sub]) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 'var(--radius-md)',
        padding: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--teal-400)',
        marginBottom: 14
      }
    }, icon, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-inverse-secondary)',
        letterSpacing: '.04em'
      }
    }, label)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 28,
        color: 'var(--teal-400)'
      }
    }, val), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-inverse-secondary)',
        marginTop: 2
      }
    }, sub)))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 16px',
        borderBottom: '1px solid rgba(255,255,255,.08)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: '#fff',
        fontWeight: 700,
        fontSize: 14
      }
    }, I.fileSearch, "Recent Handshakes"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        color: 'var(--text-inverse-secondary)',
        letterSpacing: '.04em'
      }
    }, "SOVEREIGN \xB7 LOCAL ONLY")), /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement(TableHead, {
      cols: ['FORENSIC ID', 'TYPE', 'ENTITIES', 'LATENCY', 'TIMESTAMP', 'ACTIONS']
    }), /*#__PURE__*/React.createElement("tbody", null, AUDIT_DATA.slice(0, 4).map(r => /*#__PURE__*/React.createElement(AuditRow, {
      key: r[0],
      id: r[0],
      type: r[1],
      entities: r[2],
      latency: r[3],
      time: r[4]
    }))))))
  },
  Projects: {
    sells: 'Isolated workspaces per client/team',
    render: () => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("input", {
      placeholder: "New project name\u2026",
      style: {
        flex: 1,
        background: 'rgba(255,255,255,.04)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 'var(--radius-md)',
        padding: '12px 16px',
        color: '#fff',
        fontFamily: 'var(--font-body)',
        fontSize: 14
      }
    }), /*#__PURE__*/React.createElement("button", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        background: 'var(--teal-500)',
        color: 'var(--navy-950)',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        padding: '0 20px',
        fontWeight: 700,
        fontSize: 14,
        cursor: 'pointer'
      }
    }, I.plus, "Create")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(31,216,164,.06)',
        border: '1px solid rgba(31,216,164,.35)',
        borderRadius: 'var(--radius-md)',
        padding: 18,
        width: 280
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: '#fff',
        fontWeight: 700,
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--teal-400)'
      }
    }, I.folder), "Default Project"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-inverse-secondary)'
      }
    }, I.trash)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        fontSize: 12,
        color: 'var(--text-inverse-secondary)'
      }
    }, "Created 08/06/2026")))
  },
  'API Keys': {
    sells: 'Drop-in integration, no engineering sprint',
    render: () => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("input", {
      placeholder: "Key name (e.g., Production, n8n)\u2026",
      style: {
        flex: 1,
        background: 'rgba(255,255,255,.04)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 'var(--radius-md)',
        padding: '12px 16px',
        color: '#fff',
        fontFamily: 'var(--font-body)',
        fontSize: 14
      }
    }), /*#__PURE__*/React.createElement("button", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        background: 'var(--teal-500)',
        color: 'var(--navy-950)',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        padding: '0 20px',
        fontWeight: 700,
        fontSize: 14,
        cursor: 'pointer'
      }
    }, I.key, "Generate")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 'var(--radius-md)'
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement(TableHead, {
      cols: ['NAME', 'KEY', 'CREATED', 'ACTIONS']
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        padding: '56px 0',
        color: 'var(--text-inverse-secondary)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: .5
      }
    }, I.key), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14
      }
    }, "No API keys for this project. Generate one above."))))
  },
  'Detection Engines & Rules': {
    sells: 'Plain-English custom detection, no code',
    render: () => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 'var(--radius-md)',
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: '#fff',
        fontWeight: 700,
        fontSize: 15
      }
    }, I.activity, "Detection Engines"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        color: '#f0b429',
        fontSize: 12,
        fontWeight: 600
      }
    }, I.alert, "Degraded")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 10,
        marginBottom: 14
      }
    }, [['Spacy', true], ['Regex', true], ['Flair', false], ['Tars', false]].map(([n, on]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 'var(--radius-sm)',
        padding: '14px 0',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: on ? 'var(--teal-500)' : 'var(--slate-500)',
        marginBottom: 8
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#fff',
        fontWeight: 600,
        fontSize: 13
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: on ? 'var(--teal-400)' : 'var(--text-inverse-secondary)'
      }
    }, on ? 'Active' : 'Inactive')))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 14px',
        background: 'rgba(255,255,255,.03)',
        borderRadius: 'var(--radius-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#a78bfa'
      }
    }, I.brain), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 600
      }
    }, "Thorough Mode"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-inverse-secondary)'
      }
    }, "Deep AI scan with Flair + TARS (slower, more accurate)"))), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        height: 20,
        borderRadius: 'var(--radius-full)',
        background: 'rgba(255,255,255,.15)',
        display: 'inline-flex',
        alignItems: 'center',
        padding: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        borderRadius: '50%',
        background: '#fff'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 'var(--radius-md)',
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: '#fff',
        fontWeight: 700,
        fontSize: 15,
        marginBottom: 6
      }
    }, I.zap, "Detection Rules"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-inverse-secondary)',
        marginBottom: 12
      }
    }, "Tell us what to detect in plain English. No coding needed."), /*#__PURE__*/React.createElement("textarea", {
      placeholder: "e.g. detect employee IDs like EMP-00123, salary amounts, and project codes like PRJ-2024-XX",
      rows: 3,
      style: {
        width: '100%',
        background: 'rgba(255,255,255,.04)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 'var(--radius-md)',
        padding: 14,
        color: '#fff',
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        resize: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--text-inverse-secondary)'
      }
    }, "Patterns (\"like EMP-00123\") become regex rules. Plain descriptions (\"salary amounts\") become AI labels."), /*#__PURE__*/React.createElement("button", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        background: 'rgba(31,216,164,.12)',
        color: 'var(--teal-400)',
        border: '1px solid rgba(31,216,164,.4)',
        borderRadius: 'var(--radius-md)',
        padding: '8px 16px',
        fontWeight: 600,
        fontSize: 13,
        cursor: 'pointer'
      }
    }, I.plus, "Add Rules"))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 'var(--radius-md)',
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#fff',
        fontWeight: 700,
        fontSize: 14,
        marginBottom: 10
      }
    }, "Active Rules"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: '#f0b429',
        fontFamily: 'var(--font-mono)',
        marginBottom: 8
      }
    }, "\u2731 PATTERN-MATCHED (REGEX)"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        marginBottom: 14
      }
    }, [['EMPLOYEE_ID', 'EMP-[0-9]{5}'], ['EMAIL', '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'], ['PHONE_EU', '\\+?[0-9]{1,3}[\\s-]?[0-9]{6,12}']].map(([n, p]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        background: 'rgba(255,255,255,.03)',
        borderRadius: 'var(--radius-sm)',
        padding: '8px 12px',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-inverse-secondary)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff',
        fontWeight: 600
      }
    }, n), " ", p))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-inverse-secondary)',
        marginBottom: 6
      }
    }, "BUILT-IN (ALWAYS ACTIVE)"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-inverse-secondary)'
      }
    }, "PERSON, ORG, GPE, DATE, MONEY, EMAIL, PHONE, SSN, CREDIT_CARD, IP_ADDRESS")))
  },
  'Forensic Audit Trail': {
    sells: 'Every protection event, timestamped and provable',
    render: () => /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '12px 16px',
        borderBottom: '1px solid rgba(255,255,255,.08)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        color: 'var(--text-inverse-secondary)',
        letterSpacing: '.04em',
        background: 'rgba(255,255,255,.05)',
        padding: '4px 10px',
        borderRadius: 'var(--radius-full)'
      }
    }, "SOVEREIGN \xB7 ZERO-KNOWLEDGE")), /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement(TableHead, {
      cols: ['FORENSIC ID', 'TYPE', 'ENTITIES', 'LATENCY', 'TIMESTAMP', 'ACTIONS']
    }), /*#__PURE__*/React.createElement("tbody", null, AUDIT_DATA.map(r => /*#__PURE__*/React.createElement(AuditRow, {
      key: r[0],
      id: r[0],
      type: r[1],
      entities: r[2],
      latency: r[3],
      time: r[4]
    })))))
  }
};
const DESCRIPTIONS_FALLBACK = {
  'Mission Control': 'Mission Control: a full overview of all sessions and logs, with a downloadable audit for every message sent to AI.',
  'Detection Engines & Rules': 'Detection Engines & Rules: define which detection engines are running, set your detection rules, and see an overview of the ones currently active.',
  'API Keys': 'API Keys: connect nodes and n8n workflows seamlessly.',
  'Projects': 'Projects: separate and organize your users and exchanges.',
  'Forensic Audit Trail': 'Forensic Audit Trail: search through past audits.'
};
function ProductTour() {
  const T = window.t('tour');
  const DESCRIPTIONS = T.descriptions || DESCRIPTIONS_FALLBACK;
  const order = ['Mission Control', 'Detection Engines & Rules', 'API Keys', 'Projects', 'Forensic Audit Trail'];
  const icons = {
    'Mission Control': I.grid,
    'Projects': I.folder,
    'API Keys': I.key,
    'Detection Engines & Rules': I.shield,
    'Forensic Audit Trail': I.fileSearch
  };
  const [active, setActive] = React.useState('Mission Control');
  return /*#__PURE__*/React.createElement("section", {
    id: "tour",
    style: {
      padding: '80px 48px',
      background: 'var(--slate-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: 'var(--navy-950)',
      margin: '0 0 16px'
    }
  }, T.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 16,
      margin: '0 0 20px'
    }
  }, T.subA, /*#__PURE__*/React.createElement(Brand, null), T.subB), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'rgba(31,216,164,.08)',
      border: '1px solid rgba(31,216,164,.3)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 18px',
      marginBottom: 40,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setActive(order[(order.indexOf(active) - 1 + order.length) % order.length]),
    style: {
      color: 'var(--teal-500)',
      fontSize: 18,
      animation: 'pulseLeft 1.6s ease-in-out infinite',
      cursor: 'pointer'
    }
  }, "\u25C0"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--navy-950)',
      fontSize: 15,
      fontWeight: 600,
      flex: 1
    }
  }, DESCRIPTIONS[active]), /*#__PURE__*/React.createElement("span", {
    onClick: () => setActive(order[(order.indexOf(active) + 1) % order.length]),
    style: {
      color: 'var(--teal-600)',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      borderLeft: '1px solid rgba(31,216,164,.3)',
      paddingLeft: 10,
      marginLeft: 2,
      whiteSpace: 'nowrap',
      cursor: 'pointer'
    }
  }, T.next)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      background: 'var(--navy-950)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px 0',
      borderRight: '1px solid rgba(255,255,255,.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(31,216,164,.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--teal-400)',
      marginBottom: 28
    }
  }, I.shield), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, order.map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    onClick: () => setActive(k),
    title: k,
    className: "tour-nav-icon",
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: active === k ? 'var(--teal-400)' : 'var(--text-inverse-secondary)',
      background: active === k ? 'rgba(31,216,164,.12)' : 'transparent',
      border: active === k ? '1px solid rgba(31,216,164,.4)' : '1px solid transparent'
    }
  }, icons[k]))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-inverse-secondary)'
    }
  }, I.logout)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      borderBottom: '1px solid rgba(255,255,255,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontWeight: 700,
      fontFamily: 'var(--font-display)',
      fontSize: 15
    }
  }, "Mission Control"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(255,255,255,.04)',
      border: '1px solid rgba(31,216,164,.3)',
      borderRadius: 'var(--radius-md)',
      padding: '6px 14px',
      color: '#fff',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal-400)'
    }
  }, I.folder), "Default Project", I.chevron)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-inverse-secondary)'
    }
  }, "juan.rosenzweig@gmail.com")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      margin: '0 0 16px'
    }
  }, active), PANELS[active].render()))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      flexWrap: 'wrap',
      marginTop: 32,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, T.facts[0]), /*#__PURE__*/React.createElement("span", null, T.facts[1]), /*#__PURE__*/React.createElement("span", null, T.facts[2]))));
}
window.ProductTour = ProductTour;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ProductTour.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Roadmap.jsx
try { (() => {
const STATUS = ['done', 'progress', 'planned'];
const ICONS = {
  done: /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--teal-600)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  progress: /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: '#f0b429',
      display: 'inline-block',
      boxShadow: '0 0 0 3px rgba(240,180,41,.2)'
    }
  }),
  planned: /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      border: '1.5px solid var(--border-strong)',
      display: 'inline-block'
    }
  })
};
function Roadmap() {
  const T = window.t('roadmap');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: 'var(--navy-950)',
      margin: '0 0 40px'
    }
  }, T.title), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '16.5%',
      right: '16.5%',
      height: 2,
      background: 'var(--border-default)',
      zIndex: 0
    }
  }), T.cols.map(([label, when, items], ci) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: ci === 0 ? 'var(--teal-500)' : '#fff',
      border: ci === 0 ? 'none' : '2px solid var(--border-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, ci === 0 && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--navy-950)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--navy-950)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-tertiary)'
    }
  }, when))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 22px'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, items.map(label2 => /*#__PURE__*/React.createElement("li", {
    key: label2,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14,
      color: STATUS[ci] === 'planned' ? 'var(--text-tertiary)' : 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, ICONS[STATUS[ci]]), label2)))))))));
}
window.Roadmap = Roadmap;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Roadmap.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Segments.jsx
try { (() => {
const {
  Button
} = window.FAIrwallAIDesignSystem_492fa5;
const SEG_ICONS = {
  Corporates: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 21V6l7-3 7 3v15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21v-6h4v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 9h.01M9 13h.01M13 9h.01M13 13h.01"
  })),
  Individuals: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21c0-4 4-6 8-6s8 2 8 6"
  })),
  'AI Agencies': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "18",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "18",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7.2V13m0 0-5.5 3M12 13l5.5 3"
  }))
};
function Segments() {
  const T = window.t('segments');
  const keys = ['Corporates', 'Individuals', 'AI Agencies'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: 'var(--navy-950)',
      margin: '0 0 32px'
    }
  }, T.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, keys.map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "flip-card",
    style: {
      perspective: 1200,
      height: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flip-card-inner",
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      transition: 'transform .6s cubic-bezier(.4,.2,.2,1)',
      transformStyle: 'preserve-3d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backfaceVisibility: 'hidden',
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      cursor: 'pointer'
    },
    onClick: () => document.getElementById('pricing').scrollIntoView({
      block: 'start'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--teal-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--teal-600)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, SEG_ICONS[k])), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      margin: 0,
      color: 'var(--navy-950)'
    }
  }, T.labels[k]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--text-secondary)',
      flex: 1
    }
  }, T.desc[k]), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => document.getElementById('pricing').scrollIntoView({
      block: 'start'
    })
  }, T.cta)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backfaceVisibility: 'hidden',
      transform: 'rotateY(180deg)',
      background: 'var(--navy-950)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.06em',
      color: 'var(--teal-400)'
    }
  }, T.solutions), T.tiers[k].map(([tier, lines]) => /*#__PURE__*/React.createElement("div", {
    key: tier
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--teal-400)',
      marginBottom: 4
    }
  }, tier), lines.map(([label, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,.75)',
      lineHeight: 'var(--lh-snug)',
      marginBottom: i < lines.length - 1 ? 4 : 0
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--brand-green)'
    }
  }, label), " ", d)))))))))), /*#__PURE__*/React.createElement("style", null, `.flip-card:hover .flip-card-inner{transform:rotateY(180deg)}`));
}
window.Segments = Segments;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Segments.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Trust.jsx
try { (() => {
function Trust() {
  const T = window.t('trust');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 48px',
      background: 'var(--slate-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, T.facts.map(f => /*#__PURE__*/React.createElement("span", {
    key: f,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      padding: '6px 12px',
      borderRadius: 'var(--radius-full)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-secondary)'
    }
  }, f))));
}
window.Trust = Trust;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Trust.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/i18n.js
try { (() => {
// Site copy for both languages. Set window.SITE_LANG='de' before the component scripts load.
window.STRINGS = {
  en: {
    header: {
      nav: [['Product', '#tour'], ['Live Demo', '#demo'], ['Pricing', '#pricing'], ['Docs', '#']],
      signIn: 'Sign in',
      cta: 'Get started'
    },
    hero: {
      stat: '89%',
      statLabel: 'of AI usage today is invisible to organizations.',
      h1: 'Privacy in the Age of AI.',
      lead: ' stands between you and every AI tool — catching sensitive data before it ever leaves your device. ',
      bold: 'Nothing sent. Nothing stored. Nothing risked. All done locally.',
      everywhere: 'Everywhere you work with AI:',
      forms: ['Browser — Protects every AI tool, automatically', 'Desktop — Covers all data and media types', 'Workflows — Purpose-built n8n nodes for automation'],
      ctaDemo: 'Try the live demo',
      ctaPricing: 'See pricing'
    },
    principles: {
      titleA: 'Why ',
      titleB: '.',
      items: [['Visible, not invisible.', "Every piece of sensitive data is highlighted the moment it's typed — you see exactly what's being protected, not a silent process running in the background."], ['Your call, always.', "Detection suggests; it never decides for you. Anything flagged can be marked private or not with one click, before it's sent anywhere."], ['Protected before it leaves.', 'Redaction and encryption happen on your device, before the message reaches an AI tool — not after, not in transit.'], ['Provable, not promised.', 'Every protection event is logged with a forensic ID, a timestamp, and a latency number — so "trust us" is backed by a record you can search.']]
    },
    forms: {
      title: 'One privacy layer, everywhere you use AI.',
      subA: 'Three ways to deploy ',
      subB: ', depending on where your AI usage happens.',
      alt: 'Browser Extension, Desktop Proxy, and n8n Node — the three ways to deploy Fairwall AI'
    },
    tour: {
      title: 'Inside the product.',
      subA: 'The ',
      subB: ' Dashboard: where you take control of your AI privacy.',
      next: 'Click to switch to next section →',
      descriptions: {
        'Mission Control': 'Mission Control: a full overview of all sessions and logs, with a downloadable audit for every message sent to AI.',
        'Detection Engines & Rules': 'Detection Engines & Rules: define which detection engines are running, set your detection rules, and see an overview of the ones currently active.',
        'API Keys': 'API Keys: connect nodes and n8n workflows seamlessly.',
        'Projects': 'Projects: separate and organize your users and exchanges.',
        'Forensic Audit Trail': 'Forensic Audit Trail: search through past audits.'
      },
      facts: ['~68ms latency overhead', '100% local-only option', 'GDPR · HIPAA · PCI-DSS']
    },
    segments: {
      title: 'Built for how you work.',
      solutions: 'SOLUTIONS',
      cta: 'See pricing →',
      labels: {
        Corporates: 'Corporates',
        Individuals: 'Individuals',
        'AI Agencies': 'AI Agencies'
      },
      desc: {
        Corporates: 'Roll out data protection across every team without a plug-in per person to manage.',
        Individuals: 'Protect what you type into any AI tool, on your own device, with one install.',
        'AI Agencies': 'Ship client automations without becoming the party responsible for their data.'
      },
      tiers: {
        Corporates: [['Basic', [['For AI in Browser:', 'Corporate dashboard + desktop app + browser plug-ins']]], ['Medium', [['For AI in every app:', 'Proxy layer (for local apps) + multimodal for PDF, audio, image, and video']]], ['Advanced', [['For increased power and control:', 'On-premises hardware (in development)']]]],
        Individuals: [['Basic', [['For AI in Browser:', 'Desktop app + browser plug-ins']]], ['Medium', [['For AI in every app:', 'Proxy layer for local apps + multimodal for PDF, audio, image, and video']]], ['Advanced', [['For AI in Workflows:', 'Integration node for AI workflows (n8n)']]]],
        'AI Agencies': [['Basic', [['For AI in Browser:', 'Desktop app + browser plug-ins'], ['For AI in Workflows:', 'Integration node for AI workflows (n8n)']]], ['Medium', [['For AI in every app:', 'Proxy layer for local apps + multimodal for PDF, audio, image, and video']]], ['Advanced', [['For reselling under your own brand:', 'White-label the product to sell as your own']]]]
      }
    },
    pricing: {
      title: 'Pricing by segment.',
      sub: "Pick your segment to see what's included at each tier.",
      monthly: 'Monthly',
      yearly: 'Yearly — save 30%',
      trial: '15-day free trial',
      mostCommon: 'MOST COMMON',
      tier: 'TIER',
      perMonth: ' /month',
      billed: n => `billed annually · €${n}/year`,
      everythingIn: t => `Everything in ${t}, plus:`,
      contact: 'CONTACT US',
      cta: 'Get started',
      labels: {
        Corporates: 'Corporates',
        Individuals: 'Individuals',
        'AI Agencies': 'AI Agencies'
      },
      plans: {
        Corporates: [['Basic', [['For AI in Browser:', ['Corporate Dashboard', 'Desktop app', 'Plug-ins']]]], ['Medium', [['For AI in every app:', ['Proxy layer', 'Multimodal support for PDF, audio, image and video']]]], ['Advanced', [['For increased power and control:', ['On-premises hardware (in development)']]]]],
        Individuals: [['Basic', [['For AI in Browser:', ['Desktop app', 'Plug-ins']]]], ['Medium', [['For AI in every app:', ['Proxy layer for local apps', 'Multimodal support for PDF, audio, image and video']]]], ['Advanced', [['For AI in Workflows:', ['Node for AI workflows (n8n)']]]]],
        'AI Agencies': [['Basic', [['For AI in Browser:', ['Desktop app', 'Plug-ins']], ['For AI in Workflows:', ['Node for AI workflows (n8n)']]]], ['Medium', [['For AI in every app:', ['Proxy layer for local apps', 'Multimodal support for PDF, audio, image and video']]]], ['Advanced', [['For reselling under your own brand:', ['White-label the product to sell as your own']]]]]
      }
    },
    roadmap: {
      title: 'Roadmap.',
      cols: [['Now', 'Shipped', ['Desktop app + plug-in', 'Text redaction engine', 'Forensic audit trail']], ['Next', 'Q4 2026', ['Corporate dashboard', 'n8n workflow node', 'Proxy layer for local apps', 'Reduced install friction']], ['Later', '2027', ['PDF & audio redaction', 'Image/video redaction', 'SOC 2 certification', 'On-prem hardware']]]
    },
    trust: {
      facts: ['Reversible redaction', '100% local/air-gapped option', 'Native n8n automation', 'Cryptographic audit log', 'Secret/API key scanning', 'GDPR, HIPAA, PCI-DSS', '~68ms latency overhead', '3-click no-code setup', 'REST API', 'English & German support', 'Regex-based detection engine']
    },
    locations: {
      quotesTitle: 'What teams say.',
      locationTitle: 'Location.',
      placeholder: 'placeholder quote',
      quotes: [['We rolled it out to the whole ops team in an afternoon — no engineering ticket needed.', 'Operations Lead, mid-size SaaS company'], ['The audit log is the first thing our compliance team actually reads without complaining.', 'Head of Security, healthcare data processor']]
    },
    book: {
      eyebrow: 'Book a demo',
      title: 'See it run on your own data.',
      body: 'Pick a slot that suits you. We walk through detection, redaction and restore on the kind of documents your team actually handles, then scope rollout — dashboard, plug-ins or on-premises.',
      bullets: ['30 minutes, no sales pitch', 'Live walkthrough on your use case', 'Rollout and pricing scoped in the call'],
      fallbackA: 'Calendar not loading? ',
      fallbackB: 'Open the booking page'
    },
    footer: {
      impressum: 'Impressum',
      terms: 'Terms & Conditions',
      cookies: 'Cookie settings',
      rights: '© 2026 '
    },
    cookie: {
      title: 'Cookies on this site',
      body: 'We use strictly necessary cookies to make this site work. With your consent we also use analytics cookies to understand how the site is used. Nothing is set until you choose. See our ',
      privacy: 'privacy information',
      and: ' and ',
      terms: 'terms',
      necessary: 'Strictly necessary',
      necessaryD: 'Session and security. Required for the site to function.',
      always: 'Always on',
      analytics: 'Analytics',
      analyticsD: 'Aggregated usage statistics. Off by default.',
      acceptAll: 'Accept all',
      rejectAll: 'Reject all',
      save: 'Save my choice',
      manage: 'Manage preferences'
    },
    chat: {
      label: 'Ask '
    }
  },
  de: {
    header: {
      nav: [['Produkt', '#tour'], ['Live-Demo', '#demo'], ['Preise', '#pricing'], ['Docs', '#']],
      signIn: 'Anmelden',
      cta: 'Loslegen'
    },
    hero: {
      stat: '89%',
      statLabel: 'der KI-Nutzung ist für Unternehmen heute unsichtbar.',
      h1: 'Privatsphäre im Zeitalter der KI.',
      lead: ' steht zwischen dir und jedem KI-Tool und erkennt sensible Daten, bevor sie dein Gerät verlassen. ',
      bold: 'Nichts gesendet. Nichts gespeichert. Nichts riskiert. Alles lokal.',
      everywhere: 'Überall, wo du mit KI arbeitest:',
      forms: ['Browser — schützt jedes KI-Tool, automatisch', 'Desktop — deckt alle Daten- und Medientypen ab', 'Workflows — eigens gebaute n8n-Nodes für Automatisierung'],
      ctaDemo: 'Live-Demo testen',
      ctaPricing: 'Preise ansehen'
    },
    principles: {
      titleA: 'Warum ',
      titleB: '.',
      items: [['Sichtbar, nicht unsichtbar.', 'Jede sensible Information wird markiert, sobald du sie eintippst — du siehst genau, was geschützt wird, statt eines stillen Prozesses im Hintergrund.'], ['Immer deine Entscheidung.', 'Die Erkennung schlägt vor, entscheidet aber nie für dich. Alles Markierte kannst du mit einem Klick als privat kennzeichnen — oder eben nicht, bevor es irgendwohin gesendet wird.'], ['Geschützt, bevor es rausgeht.', 'Redaktion und Verschlüsselung passieren auf deinem Gerät, bevor die Nachricht ein KI-Tool erreicht — nicht danach, nicht unterwegs.'], ['Belegbar, nicht versprochen.', 'Jedes Schutzereignis wird mit forensischer ID, Zeitstempel und Latenzwert protokolliert — aus „vertrau uns" wird ein Nachweis, den du durchsuchen kannst.']]
    },
    forms: {
      title: 'Eine Datenschutzebene, überall wo du KI nutzt.',
      subA: 'Drei Wege, ',
      subB: ' auszurollen — je nachdem, wo deine KI-Nutzung passiert.',
      alt: 'Browser-Erweiterung, Desktop-Proxy und n8n-Node — die drei Wege, Fairwall AI auszurollen'
    },
    tour: {
      title: 'Im Produkt.',
      subA: 'Das ',
      subB: ' Dashboard: hier übernimmst du die Kontrolle über deine KI-Privatsphäre.',
      next: 'Klicken für den nächsten Bereich →',
      descriptions: {
        'Mission Control': 'Mission Control: vollständiger Überblick über alle Sitzungen und Logs, mit herunterladbarem Audit für jede an die KI gesendete Nachricht.',
        'Detection Engines & Rules': 'Detection Engines & Rules: lege fest, welche Erkennungs-Engines laufen, definiere deine Regeln und sieh, welche gerade aktiv sind.',
        'API Keys': 'API Keys: verbinde Nodes und n8n-Workflows ohne Umwege.',
        'Projects': 'Projects: trenne und organisiere deine Nutzer und Konversationen.',
        'Forensic Audit Trail': 'Forensic Audit Trail: durchsuche vergangene Audits.'
      },
      facts: ['~68 ms Latenz-Overhead', '100 % rein lokal möglich', 'DSGVO · HIPAA · PCI-DSS']
    },
    segments: {
      title: 'Gebaut für deine Arbeitsweise.',
      solutions: 'LÖSUNGEN',
      cta: 'Preise ansehen →',
      labels: {
        Corporates: 'Unternehmen',
        Individuals: 'Privatpersonen',
        'AI Agencies': 'KI-Agenturen'
      },
      desc: {
        Corporates: 'Datenschutz in allen Teams ausrollen, ohne pro Person ein Plug-in verwalten zu müssen.',
        Individuals: 'Schütze, was du in KI-Tools eintippst — auf deinem eigenen Gerät, mit einer Installation.',
        'AI Agencies': 'Liefere Kundenautomatisierungen, ohne die Verantwortung für deren Daten zu übernehmen.'
      },
      tiers: {
        Corporates: [['Basic', [['Für KI im Browser:', 'Unternehmens-Dashboard + Desktop-App + Browser-Plug-ins']]], ['Medium', [['Für KI in jeder App:', 'Proxy-Ebene (für lokale Apps) + multimodal für PDF, Audio, Bild und Video']]], ['Advanced', [['Für mehr Leistung und Kontrolle:', 'On-Premises-Hardware (in Entwicklung)']]]],
        Individuals: [['Basic', [['Für KI im Browser:', 'Desktop-App + Browser-Plug-ins']]], ['Medium', [['Für KI in jeder App:', 'Proxy-Ebene für lokale Apps + multimodal für PDF, Audio, Bild und Video']]], ['Advanced', [['Für KI in Workflows:', 'Integrations-Node für KI-Workflows (n8n)']]]],
        'AI Agencies': [['Basic', [['Für KI im Browser:', 'Desktop-App + Browser-Plug-ins'], ['Für KI in Workflows:', 'Integrations-Node für KI-Workflows (n8n)']]], ['Medium', [['Für KI in jeder App:', 'Proxy-Ebene für lokale Apps + multimodal für PDF, Audio, Bild und Video']]], ['Advanced', [['Für den Wiederverkauf unter eigener Marke:', 'White-Label: verkaufe das Produkt als dein eigenes']]]]
      }
    },
    pricing: {
      title: 'Preise nach Segment.',
      sub: 'Wähle dein Segment und sieh, was in jeder Stufe enthalten ist.',
      monthly: 'Monatlich',
      yearly: 'Jährlich — 30 % sparen',
      trial: '15 Tage kostenlos testen',
      mostCommon: 'AM HÄUFIGSTEN',
      tier: 'STUFE',
      perMonth: ' /Monat',
      billed: n => `jährlich abgerechnet · €${n}/Jahr`,
      everythingIn: t => `Alles aus ${t}, plus:`,
      contact: 'KONTAKT',
      cta: 'Loslegen',
      labels: {
        Corporates: 'Unternehmen',
        Individuals: 'Privatpersonen',
        'AI Agencies': 'KI-Agenturen'
      },
      plans: {
        Corporates: [['Basic', [['Für KI im Browser:', ['Unternehmens-Dashboard', 'Desktop-App', 'Plug-ins']]]], ['Medium', [['Für KI in jeder App:', ['Proxy-Ebene', 'Multimodale Unterstützung für PDF, Audio, Bild und Video']]]], ['Advanced', [['Für mehr Leistung und Kontrolle:', ['On-Premises-Hardware (in Entwicklung)']]]]],
        Individuals: [['Basic', [['Für KI im Browser:', ['Desktop-App', 'Plug-ins']]]], ['Medium', [['Für KI in jeder App:', ['Proxy-Ebene für lokale Apps', 'Multimodale Unterstützung für PDF, Audio, Bild und Video']]]], ['Advanced', [['Für KI in Workflows:', ['Node für KI-Workflows (n8n)']]]]],
        'AI Agencies': [['Basic', [['Für KI im Browser:', ['Desktop-App', 'Plug-ins']], ['Für KI in Workflows:', ['Node für KI-Workflows (n8n)']]]], ['Medium', [['Für KI in jeder App:', ['Proxy-Ebene für lokale Apps', 'Multimodale Unterstützung für PDF, Audio, Bild und Video']]]], ['Advanced', [['Für den Wiederverkauf unter eigener Marke:', ['White-Label: verkaufe das Produkt als dein eigenes']]]]]
      }
    },
    roadmap: {
      title: 'Roadmap.',
      cols: [['Jetzt', 'Ausgeliefert', ['Desktop-App + Plug-in', 'Engine für Text-Redaktion', 'Forensischer Audit-Trail']], ['Als Nächstes', 'Q4 2026', ['Unternehmens-Dashboard', 'n8n-Workflow-Node', 'Proxy-Ebene für lokale Apps', 'Weniger Installationsaufwand']], ['Später', '2027', ['PDF- & Audio-Redaktion', 'Bild-/Video-Redaktion', 'SOC-2-Zertifizierung', 'On-Premises-Hardware']]]
    },
    trust: {
      facts: ['Umkehrbare Redaktion', '100 % lokal / air-gapped möglich', 'Native n8n-Automatisierung', 'Kryptografisches Audit-Log', 'Scan für Secrets & API-Keys', 'DSGVO, HIPAA, PCI-DSS', '~68 ms Latenz-Overhead', 'Einrichtung in 3 Klicks, ohne Code', 'REST-API', 'Englisch & Deutsch', 'Regex-basierte Erkennungs-Engine']
    },
    locations: {
      quotesTitle: 'Was Teams sagen.',
      locationTitle: 'Standort.',
      placeholder: 'Platzhalter-Zitat',
      quotes: [['Wir haben es an einem Nachmittag im ganzen Ops-Team ausgerollt — ohne Engineering-Ticket.', 'Operations Lead, mittelgroßes SaaS-Unternehmen'], ['Das Audit-Log ist das Erste, was unser Compliance-Team ohne Murren liest.', 'Head of Security, Datenverarbeiter im Gesundheitswesen']]
    },
    book: {
      eyebrow: 'Demo buchen',
      title: 'Sieh es mit deinen eigenen Daten laufen.',
      body: 'Wähle einen Termin, der dir passt. Wir gehen Erkennung, Redaktion und Wiederherstellung an den Dokumenten durch, mit denen dein Team wirklich arbeitet, und klären den Rollout — Dashboard, Plug-ins oder On-Premises.',
      bullets: ['30 Minuten, kein Verkaufsgespräch', 'Live-Durchgang an deinem Anwendungsfall', 'Rollout und Preise im Gespräch geklärt'],
      fallbackA: 'Kalender lädt nicht? ',
      fallbackB: 'Buchungsseite öffnen'
    },
    footer: {
      impressum: 'Impressum',
      terms: 'AGB',
      cookies: 'Cookie-Einstellungen',
      rights: '© 2026 '
    },
    cookie: {
      title: 'Cookies auf dieser Website',
      body: 'Wir verwenden unbedingt erforderliche Cookies, damit diese Website funktioniert. Mit deiner Zustimmung nutzen wir außerdem Analyse-Cookies, um die Nutzung der Website zu verstehen. Vor deiner Entscheidung wird nichts gesetzt. Siehe unsere ',
      privacy: 'Datenschutzhinweise',
      and: ' und ',
      terms: 'AGB',
      necessary: 'Unbedingt erforderlich',
      necessaryD: 'Sitzung und Sicherheit. Für den Betrieb der Website notwendig.',
      always: 'Immer aktiv',
      analytics: 'Analyse',
      analyticsD: 'Aggregierte Nutzungsstatistiken. Standardmäßig aus.',
      acceptAll: 'Alle akzeptieren',
      rejectAll: 'Alle ablehnen',
      save: 'Auswahl speichern',
      manage: 'Einstellungen verwalten'
    },
    chat: {
      label: 'Frag '
    }
  }
};
window.t = k => (window.STRINGS[window.SITE_LANG || 'en'] || window.STRINGS.en)[k] || window.STRINGS.en[k];
window.otherLangHref = () => window.SITE_LANG === 'de' ? 'index.html' : 'index-de.html';
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/i18n.js", error: String((e && e.message) || e) }); }

// ui_kits/security-dashboard/AlertDialog.jsx
try { (() => {
const {
  Dialog,
  Button,
  Badge
} = window.FAIrwallAIDesignSystem_492fa5;
function AlertDialog({
  alert,
  onClose
}) {
  if (!alert) return null;
  return /*#__PURE__*/React.createElement(Dialog, {
    open: true,
    title: "Alert detail",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Dismiss"), /*#__PURE__*/React.createElement(Button, {
      variant: "danger"
    }, "Quarantine source"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: alert.sev
  }, alert.sev === 'danger' ? 'CRITICAL' : alert.sev === 'safe' ? 'CLEAN' : 'INFO'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--navy-950)'
    }
  }, alert.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, "source: ", alert.src, " \xB7 ", alert.time)));
}
window.AlertDialog = AlertDialog;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/security-dashboard/AlertDialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/security-dashboard/DashboardHome.jsx
try { (() => {
const {
  Card,
  Badge,
  Button
} = window.FAIrwallAIDesignSystem_492fa5;
const STATS = [['Requests inspected', '1.2M', '+8% today'], ['Threats blocked', '342', 'last 24h'], ['PII redactions', '58', 'last 24h'], ['Uptime', '99.99%', '30-day']];
const FEED = [{
  t: 'Blocked prompt-injection attempt',
  src: 'api-gateway-03',
  sev: 'danger',
  time: '2m ago'
}, {
  t: 'Credential pattern redacted in outbound call',
  src: 'billing-service',
  sev: 'info',
  time: '11m ago'
}, {
  t: 'Endpoint scan completed — clean',
  src: 'device fleet',
  sev: 'safe',
  time: '34m ago'
}, {
  t: 'Unusual data volume to external model API',
  sev: 'danger',
  src: 'ml-pipeline-2',
  time: '1h ago'
}];
function DashboardHome({
  onOpenAlert
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-h1)',
      color: 'var(--navy-950)',
      margin: '0 0 4px'
    }
  }, "Overview"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-tertiary)',
      margin: 0,
      fontSize: 14
    }
  }, "Monday, August 15 \xB7 All systems monitored")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, STATS.map(([label, val, sub]) => /*#__PURE__*/React.createElement(Card, {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)',
      fontWeight: 600,
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      color: 'var(--navy-950)'
    }
  }, val), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)',
      marginTop: 4
    }
  }, sub)))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15
    }
  }, "Live Threat Feed"), FEED.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => onOpenAlert(f),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 20px',
      borderBottom: i < FEED.length - 1 ? '1px solid var(--border-default)' : 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: f.sev
  }, f.sev === 'danger' ? 'CRITICAL' : f.sev === 'safe' ? 'CLEAN' : 'INFO'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--navy-950)'
    }
  }, f.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, f.src))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, f.time)))));
}
window.DashboardHome = DashboardHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/security-dashboard/DashboardHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/security-dashboard/Login.jsx
try { (() => {
const {
  Button,
  Input
} = window.FAIrwallAIDesignSystem_492fa5;
function Login({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--navy-950)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      padding: 40,
      width: 360,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../marketing-site/assets/logo-mark-new.png",
    style: {
      height: 48
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      color: 'var(--navy-950)'
    }
  }, "F", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, "ai"), "rwall ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, "AI"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    placeholder: "you@company.com",
    defaultValue: "ops@acme-corp.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: onLogin
  }, "Sign in securely")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 16,
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, "Protected by fAIrwall MFA")));
}
window.Login = Login;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/security-dashboard/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/security-dashboard/Sidebar.jsx
try { (() => {
const ITEMS = ['Overview', 'Threat Feed', 'Devices', 'Data Loss Prevention', 'Audit Log', 'Settings'];
function Sidebar({
  active,
  setActive
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      background: 'var(--navy-950)',
      minHeight: '100%',
      padding: '24px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 10px 24px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 14,
      color: '#fff'
    }
  }, "fAIrwall")), ITEMS.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setActive(i),
    style: {
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer',
      color: active === i ? '#fff' : 'var(--text-inverse-secondary)',
      background: active === i ? 'rgba(255,255,255,.08)' : 'transparent'
    }
  }, i)));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/security-dashboard/Sidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatusWidget = __ds_scope.StatusWidget;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
