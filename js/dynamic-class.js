(() => {
  const medias = {
    xs: "max-width: 575px",
    mxs: "min-width: 575px",
    sm: "(min-width: 576px) and ( max-width: 767px)",
    msm: "min-width: 767px",
    lsm: "max-width: 576px",
    md: "(min-width: 768px) and ( max-width: 991px)",
    mmd: "min-width: 991px",
    lmd: "max-width: 768px",
    lg: "(min-width: 992px) and ( max-width: 1199px)",
    mlg: "min-width: 1199px",
    llg: "max-width: 992px",
    xl: "(min-width: 1200px) and ( max-width: 1399px)",
    mxl: "min-width: 1399px",
    lxl: "max-width: 1200px",
    xxl: "min-width: 1400px",
    lxxl: "max-width: 1400px",
  };

  const pesudos = [
    '[class~="#{$cn}:hover"]:hover',
    '[class~="#{$cn}:focus"]:focus',
    '[class~="#{$cn}:active"]:active',
    '[class~="#{$cn}:selection"]::selection',
    '[class~="#{$cn}:first"]:first-child',
    '[class~="#{$cn}:last"]:last-child',
    '[class~="#{$cn}:even"]:nth-child(even)',
    '[class~="#{$cn}:odd"]:nth-child(odd)',
    '[class~="#{$cn}::"] > *',
    '[class~="#{$cn}::hover"] > *:hover',
    '[class~="#{$cn}::focus"] > *:focus',
    '[class~="#{$cn}::active"] > *:active',
    '[class~="#{$cn}::selection"] > *::selection',
    '[class~="#{$cn}::even"] > *:nth-child(even)',
    '[class~="#{$cn}::odd"] > *:nth-child(odd)',
    '[class~="#{$cn}::first"] > *:first-child',
    '[class~="#{$cn}::last"] > *:last-child',
    '[class~="#{$cn}::odd:hover"] > *:nth-child(odd):hover',
    '[class~="#{$cn}::odd:focus"] > *:nth-child(odd):focus',
    '[class~="#{$cn}::odd:active"] > *:nth-child(odd):active',
    '[class~="#{$cn}::even:hover"] > *:nth-child(even):hover',
    '[class~="#{$cn}::even:focus"] > *:nth-child(even):focus',
    '[class~="#{$cn}::even:active"] > *:nth-child(even):active',
    '[class~="#{$cn}::first:hover"] > *:first-child:hover',
    '[class~="#{$cn}::first:focus"] > *:first-child:focus',
    '[class~="#{$cn}::first:active"] > *:first-child:active',
    '[class~="#{$cn}::last:hover"] > *:last-child:hover',
    '[class~="#{$cn}::last:focus"] > *:last-child:focus',
    '[class~="#{$cn}::last:active"] > *:last-child:active',

    '[class~="#{$ms}:#{$cn}:hover"]:hover',
    '[class~="#{$ms}:#{$cn}:focus"]:focus',
    '[class~="#{$ms}:#{$cn}:active"]:active',
    '[class~="#{$ms}:#{$cn}:selection"]::selection',
    '[class~="#{$ms}:#{$cn}:first"]:first-child',
    '[class~="#{$ms}:#{$cn}:last"]:last-child',
    '[class~="#{$ms}:#{$cn}:even"]:nth-child(even)',
    '[class~="#{$ms}:#{$cn}:odd"]:nth-child(odd)',
    '[class~="#{$ms}:#{$cn}::"] > *',
    '[class~="#{$ms}:#{$cn}::hover"] > *:hover',
    '[class~="#{$ms}:#{$cn}::focus"] > *:focus',
    '[class~="#{$ms}:#{$cn}::active"] > *:active',
    '[class~="#{$ms}:#{$cn}::selection"] > *::selection',
    '[class~="#{$ms}:#{$cn}::even"] > *:nth-child(even)',
    '[class~="#{$ms}:#{$cn}::odd"] > *:nth-child(odd)',
    '[class~="#{$ms}:#{$cn}::first"] > *:first-child',
    '[class~="#{$ms}:#{$cn}::last"] > *:last-child',
    '[class~="#{$ms}:#{$cn}::odd:hover"] > *:nth-child(odd):hover',
    '[class~="#{$ms}:#{$cn}::odd:focus"] > *:nth-child(odd):focus',
    '[class~="#{$ms}:#{$cn}::odd:active"] > *:nth-child(odd):active',
    '[class~="#{$ms}:#{$cn}::even:hover"] > *:nth-child(even):hover',
    '[class~="#{$ms}:#{$cn}::even:focus"] > *:nth-child(even):focus',
    '[class~="#{$ms}:#{$cn}::even:active"] > *:nth-child(even):active',
    '[class~="#{$ms}:#{$cn}::first:hover"] > *:first-child:hover',
    '[class~="#{$ms}:#{$cn}::first:focus"] > *:first-child:focus',
    '[class~="#{$ms}:#{$cn}::first:active"] > *:first-child:active',
    '[class~="#{$ms}:#{$cn}::last:hover"] > *:last-child:hover',
    '[class~="#{$ms}:#{$cn}::last:focus"] > *:last-child:focus',
    '[class~="#{$ms}:#{$cn}::last:active"] > *:last-child:active',
  ];

  const mediaKeys = Object.keys(medias);

  /**
   *
   * @param {string} className
   */
  function isMediaClass(className) {
    return mediaKeys.find((e) => e == className);
  }

  const classMap = {
    bg: "background-color",
  };

  const elements = document.querySelectorAll("*");

  for (const e of elements) {
    for (const cls of e.classList) {
      if (isMediaClass) {
        const [media, rest] = cls.split(":");
      } else {
        const parts = cls.split(":");
      }
    }
  }
})();
