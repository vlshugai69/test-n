"use client";

import "../styles/privacy-policy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <a
        href="https://www.iubenda.com/privacy-policy/26346216"
        className="iubenda-nostyle iubenda-embed iub-no-markup iub-body-embed"
        title="Privacy Policy"
      >
        View our Privacy Policy
      </a>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function (w, d) {
              var loader = function () {
                  var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
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
