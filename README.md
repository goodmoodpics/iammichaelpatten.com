# iammichaelpatten.com

Static personal site, hosted on GitHub Pages from the `main` branch.
Edit the `.html` files, commit, push — the site updates in about a minute.

Videos are embedded from Vimeo; the resume is `img/mpatten_resume_2026.pdf`.

## Domains

| Domain | Registrar | Setup |
|---|---|---|
| iammichaelpatten.com | Squarespace Domains | Points at GitHub Pages (records below) |
| michael-patten.com | Squarespace Domains | Squarespace domain forwarding → iammichaelpatten.com |

## DNS for iammichaelpatten.com (Squarespace Domains)

1. Squarespace → **Domains** → iammichaelpatten.com → **DNS** → **Domain nameservers**:
   switch from DreamHost (`ns1/ns2/ns3.dreamhost.com`) to **Squarespace nameservers**.
2. **DNS settings** → delete any default Squarespace records, then add custom records:

| Host | Type | Data |
|---|---|---|
| @ | A | 185.199.108.153 |
| @ | A | 185.199.109.153 |
| @ | A | 185.199.110.153 |
| @ | A | 185.199.111.153 |
| www | CNAME | goodmoodpics.github.io |

3. Once DNS has switched over (minutes to a few hours), go to the repo's
   **Settings → Pages** and tick **Enforce HTTPS**.

Optional but recommended: verify the domain in GitHub
(profile **Settings → Pages → Add a domain**), which gives a `_github-pages-challenge-…`
TXT record to add in Squarespace. This stops anyone else's repo from claiming the domain.
