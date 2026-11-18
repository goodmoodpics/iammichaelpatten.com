# michael-patten.com

Static personal site, hosted on GitHub Pages from the `main` branch.
Edit the `.html` files, commit, push — the site updates in about a minute.

Videos are embedded from Vimeo; the resume is `img/mpatten_resume_2026.pdf`.

## Domains

Both registered at Squarespace Domains, both on Squarespace nameservers.

| Domain | Setup |
|---|---|
| michael-patten.com | Primary. Custom DNS records → GitHub Pages (below). `CNAME` file in this repo. |
| iammichaelpatten.com | Squarespace domain forwarding, 301 permanent → https://michael-patten.com (keeps old Google ranking). Keep this domain renewed. |

### michael-patten.com DNS records

| Host | Type | Data |
|---|---|---|
| @ | A | 185.199.108.153 |
| @ | A | 185.199.109.153 |
| @ | A | 185.199.110.153 |
| @ | A | 185.199.111.153 |
| www | CNAME | goodmoodpics.github.io |

HTTPS: repo **Settings → Pages → Enforce HTTPS**.
