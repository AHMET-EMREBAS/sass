(() => {
  /**
   *
   * @returns {Set}
   */
  function __allClasses() {
    const elements = document.querySelectorAll("*");
    const foundClasses = new Set();
    for (const e of elements) {
      e.classList.forEach((e) => {
        foundClasses.add(e);
      });
    }
    return foundClasses;
  }

  /**
   *
   * @param {CSSRule} rule
   */
  function __cssContent(rule) {
    return rule.cssText.split("{").pop().split("}").shift();
  }

  /**
   *
   * @param {CSSRule} rule
   * @returns
   */
  function __selectors(rule) {
    return rule?.selectorText?.split(",");
  }

  const classList = __allClasses();
  const styleText = new Set();

  const sheets = document.styleSheets;

  for (const s of sheets) {
    for (const r of s.cssRules) {
      for (const cls of classList) {
        if (r.media) {
          // Media Styles
          const media = r.media;

          const mediaSelector = `@media ${media}`;

          for (const mr of r.cssRules) {
            const selectors = __selectors(mr);

            if (selectors) {
              const found = selectors.find(
                (e) =>
                  e.includes(cls) &&
                  !e.includes(cls + "-") &&
                  !e.includes("-" + cls)
              );

              if (found) {
                const styleContent = __cssContent(mr);

                styleText.add(
                  `${mediaSelector} { ${found}{  ${styleContent} } }`
                );
              }
            }
          }
        } else {
          // Regular Styles
          const selectors = __selectors(r);
          if (selectors) {
            const found = selectors.find(
              (e) =>
                (e.includes(cls) &&
                  !e.includes(cls + "-") &&
                  !e.includes("-" + cls)) ||
                e.includes("root")
            );
            if (found) {
              const styleContent = __cssContent(r);
              styleText.add(`${found} { ${styleContent}}`);
            }
          }
        }
      }
    }
  }

  const result = [...styleText].join(" ");

  console.log("Copied CSS Content to clipboard");
  window.navigator.clipboard.writeText(result);
})();
