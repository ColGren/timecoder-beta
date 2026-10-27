(() => {
  "use strict";

  const config = window.TIMECODE_ASSISTANT_SITE ?? {};
  const isHTTPURL = (value) => {
    try {
      const url = new URL(value);
      return url.protocol === "https:" || url.protocol === "http:";
    } catch {
      return false;
    }
  };

  if (isHTTPURL(config.testFlightURL)) {
    document.querySelectorAll("[data-testflight-link]").forEach((link) => {
      link.href = config.testFlightURL;
      link.textContent = "Join the TestFlight beta";
      link.removeAttribute("aria-describedby");
    });
  }

  if (typeof config.feedbackEmail === "string" && config.feedbackEmail.includes("@")) {
    document.querySelectorAll("[data-email-contact]").forEach((element) => {
      element.hidden = false;
    });
    document.querySelectorAll("[data-email-link]").forEach((link) => {
      link.href = `mailto:${config.feedbackEmail}`;
      link.textContent = config.feedbackEmail;
    });
  }

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
