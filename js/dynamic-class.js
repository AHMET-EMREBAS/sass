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
      const parts = cls.split(":");
    }
  }
})();
