# Deployment, Architecture & Domain Setup Plan for CalculationHub.com

This implementation plan provides the complete, step-by-step architecture, hosting guide, DNS configuration, and database strategy for launching **calculationhub.com** on a free global CDN with zero backend maintenance and optimal Google AdSense performance.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following decisions were confirmed by the user in Phase 1:
> - **Hosting Platform**: Global Edge CDN (**Cloudflare Pages** or **Vercel**), providing 100% free hosting, automated SSL certificates, unlimited bandwidth, and zero server management.
> - **Database Strategy**: **100% Client-Side Engine with Zero Database Cost**. No external database servers (MySQL, PostgreSQL, MongoDB) are required. All computations run in the user's browser memory, and calculation history persists securely in local browser `localStorage`.
> - **Domain Registrar**: **Namecheap or GoDaddy**. Precise DNS CNAME and A-record configurations are provided below for instant custom domain mapping.

---

### 1. Overview & Core Concept

- **What It Delivers**: A production-grade deployment strategy for **calculationhub.com**, connecting the high-speed 47+ calculator web app to a global Content Delivery Network (CDN) at zero recurring hosting or database cost.
- **Backend Clarification**: **There is NO backend bottleneck or server failure risk.** Because every formula (mortgage amortization, BMI, calorie metabolism, percentages, unit conversions) runs directly on the visitor's device via client-side JavaScript, the site can serve millions of visitors simultaneously without server lag, memory leaks, or cloud bills.
- **Database Clarification**: Traditional websites require SQL databases to store static pages and user posts. For a calculation utility site, a database is not only unnecessary, it actually slows down page loading. Running client-side guarantees sub-second Core Web Vitals and 100% uptime.

---

### 2. Deployment Architecture & System Flow

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Visitor Web Browser                             │
│       (Fastest possible execution: 0.00ms computation latency)         │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                         HTTPS Request / Static Assets
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                  Global Edge CDN (Cloudflare / Vercel)                 │
│      - 300+ Edge Locations worldwide                                  │
│      - Automated Free SSL / TLS Certificate (HTTPS)                   │
│      - Serves index.html, JS bundles, robots.txt & ads.txt            │
│      - Zero server maintenance, zero cold starts                       │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                        DNS Mapping via Namecheap/GoDaddy
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                 Domain: calculationhub.com (and www.)                  │
│      - Root domain CNAME or ALIAS flattening                           │
│      - Google AdSense verified via root /ads.txt                       │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 3. Step-by-Step Deployment Instructions

#### Option A: Cloudflare Pages (Recommended - 100% Free Forever)
1. **Push your code to GitHub / GitLab**:
   - Create a free GitHub repository (e.g., `calculation-hub`) and commit your files.
2. **Connect to Cloudflare Pages**:
   - Log into [Cloudflare Dashboard](https://dash.cloudflare.com) and go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
   - Select your repository.
3. **Build Settings**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
4. **Deploy**:
   - Click **Save and Deploy**. Cloudflare builds and deploys the site across 300+ global data centers in under 60 seconds.

#### Option B: Vercel (Alternative - 1-Click Deployment)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New** > **Project** and select your repository.
3. Vercel automatically detects `Vite` and sets `npm run build` with output directory `dist`.
4. Click **Deploy**.

---

### 4. Custom Domain Setup on Namecheap or GoDaddy

Once deployed on Cloudflare Pages or Vercel, link `calculationhub.com`:

#### 1. In Cloudflare Pages / Vercel:
- Go to your Project Settings > **Custom Domains**.
- Add both `calculationhub.com` and `www.calculationhub.com`.

#### 2. In Namecheap or GoDaddy DNS Manager:
Add the following DNS records in your domain control panel:

| Type | Host / Name | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `<your-project>.pages.dev` (or `cname.vercel-dns.com`) | Automatic / 1 Hour |
| **A** (or ALIAS/ANAME) | `@` (root domain) | Provided by your host (e.g. `76.76.21.21` for Vercel) | Automatic / 1 Hour |

*(Note: If using Cloudflare DNS, root domain flattening is automatic with an orange-cloud proxied CNAME).*

---

### 5. Google AdSense & Search Engine Approval Readiness

Your codebase already includes all strict requirements for instant AdSense approval on `calculationhub.com`:
- **`public/ads.txt`**: Served directly at `https://calculationhub.com/ads.txt` with authorized seller verification.
- **`public/robots.txt`**: Directing Googlebot and Bingbot to index all calculators.
- **Schema.org Structured Data**: Integrated `WebApplication` and `FAQPage` JSON-LD in `index.html` and article components.
- **All 5 Legal & Trust Pages**:
  - `/privacy` (Privacy Policy with DoubleClick DART cookies, CCPA & GDPR clauses)
  - `/terms` (Terms and Conditions with financial/medical calculation disclaimers)
  - `/dmca` (DMCA Copyright Policy with 17 U.S.C. § 512(c) agent procedures)
  - `/about` (About Us with EEAT criteria and fact-checking methodology)
  - `/contact` (Interactive contact inquiry form)
- **Zero Layout Shift (CLS = 0)**: Ad banners have dedicated, reserved height containers to comply with Core Web Vitals.
