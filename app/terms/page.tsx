"use client";

import "../styles/terms.css";

export default function TermsOfService() {
  return (
    <div className="terms-container">
      <h1>Terms of Service</h1>
      <a
        href="https://www.iubenda.com/terms-and-conditions/22801921"
        className="iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed"
        title="Terms and Conditions"
      >
        View our Terms of Service
      </a>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function (w, d) {
              var loader = function () {
                  var s = d.createElement("script"),
                      tag = d.getElementsByTagName("script")[0];
                  s.src = "https://cdn.iubenda.com/iubenda.js";
                  tag.parentNode.insertBefore(s, tag);
              };
              if (w.addEventListener) {
                  w.addEventListener("load", loader, false);
              } else if (w.attachEvent) {
                  w.attachEvent("onload", loader);
              } else {
                  w.onload = loader;
              }
          })(window, document);`,
        }}
      />
    </div>
  );
}
