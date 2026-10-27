# TimeCode Assistant beta site

Static marketing, support and privacy pages for the TimeCode Assistant macOS beta. The site has no build step, dependencies, analytics or cookies.

## Before opening the public beta

Edit `site-config.js` and add:

- `testFlightURL`: the public TestFlight invitation URL from App Store Connect.
- `feedbackEmail`: the same monitored address used for **Feedback Email** in App Store Connect.

When these values are blank, the site safely displays “Beta access coming soon” and uses TestFlight plus GitHub Issues for support.

## App Store Connect URLs

Once GitHub Pages is live, use:

- Marketing URL: `https://colgren.github.io/timecoder-beta/`
- Privacy Policy URL: `https://colgren.github.io/timecoder-beta/privacy.html`
- Support URL: `https://colgren.github.io/timecoder-beta/support.html`

Apple requires a Feedback Email separately in TestFlight’s **Test Information**. Before an App Store release, confirm that the support page includes any direct contact details required in the countries where the app is distributed.

## Local preview

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080`.
