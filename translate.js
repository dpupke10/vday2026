(function () {
  window.getLang = function () {
    return localStorage.getItem("vday_lang") || "en";
  };

  window.applyTranslations = function () {
    var t = window.TRANSLATIONS;
    var l = window.getLang();
    document.querySelectorAll("[data-t]").forEach(function (el) {
      var key = el.dataset.t;
      var text = null;
      if (el.dataset.tEn && el.dataset.tFr) {
        text = l === "fr" ? el.dataset.tFr : el.dataset.tEn;
      } else if (t) {
        var page = document.body.dataset.translatePage || "home";
        var tr = t[page];
        if (tr && tr[key]) {
          if (l === "fr" && tr[key].fr) {
            if (!el.dataset.originalEn) el.dataset.originalEn = el.innerHTML;
            text = tr[key].fr;
          } else if (l === "en" && el.dataset.originalEn) {
            text = el.dataset.originalEn;
          } else if (l === "en" && tr[key].en) {
            text = tr[key].en;
          }
        }
      }
      if (text !== null) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    });
  };
})();
