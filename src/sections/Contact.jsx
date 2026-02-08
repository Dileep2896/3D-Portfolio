import { useEffect } from "react";
import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  useEffect(() => {
    // Bootstrap Cal queue (must run before script loads)
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "30min", { origin: "https://app.cal.com" });

    window.Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "dileep-kumar-sharma-nxvhnb/30min",
    });

    window.Cal.ns["30min"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <section id="contact" className="section-padding">
      <div className="w-full md:px-10 px-5">
        <TitleHeader title="Let's chat over a coffee" sub="Book a Meeting" />

        <div className="mt-16 mx-auto">
          {/* Cal.com Inline — full width */}
          <div className="w-full rounded-2xl">
            <div
              id="my-cal-inline-30min"
              style={{ width: "100%", minHeight: "600px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
