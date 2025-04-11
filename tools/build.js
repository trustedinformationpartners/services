import { execSync } from "child_process"
import { mkdir, readdir, readFile, writeFile } from "fs/promises"
import { run } from "@mermaid-js/mermaid-cli"
import { launch } from "puppeteer"

const DOCS = "docs"
const OUT = "build"
const TITLE = "Generic services for digital infrastructure"
const BOOK = "generic-services"
const VERSION = "0.1.0-SNAPSHOT"

let date = new Date().toISOString().substr(0, 10)

await mkdir(OUT, { recursive: true })

let docs = (await readdir(DOCS))
  .map(n => n.replace(/\.md$/, ""))
  .map(id => ({
    source: `${DOCS}/${id}`,
    id: `doc-${id}`
  }))

await writeFile(`${OUT}/${BOOK}.md`, "", { flag: 'w' })

for (let { source, id } of docs) {
  let content = await readFile(`${source}.md`)
  await writeFile(`${OUT}/${BOOK}.md`, `<a class="service" id="${id}"></a>\n\n`, { flag: 'a' })
  await writeFile(`${OUT}/${BOOK}.md`, `${content}\n`, { flag: 'a' })
}

let browser = await launch()
let page = await browser.newPage()
let logo = await readFile("tools/logo.svg", { encoding: 'base64' })

let template = "data:text/plain,\\$meta-json\\$"

await run(`${OUT}/${BOOK}.md`, `${OUT}/${BOOK}.md`)

execSync(`pandoc \
  --from=gfm \
  --to=html \
  -o ${BOOK}.html \
  --embed-resources \
  --standalone \
  --css ../tools/tip.css \
  --css "https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&family=Source+Code+Pro:wght@400;700&display=swap" \
  --toc \
  --toc-depth=1 \
  -V title:"${TITLE}" \
  -V pagetitle:"${TITLE} - Trusted Information Partners" \
  ${BOOK}.md
`, { cwd: OUT })

await page.goto(new URL(`../${OUT}/${BOOK}.html`, import.meta.url), {
  waitUntil: 'networkidle0'
})
await page.emulateMediaType('print')
await page.pdf({
  path: `${OUT}/${BOOK}.pdf`,
  format: 'A4',
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate: `
    <div style="width: 100%; margin-left: 25mm; margin-right: 25mm; margin-top: 10mm; font-size: 11pt; font-family: Carlito; color: #1225b0; text-align: right">
      <img src="data:image/svg+xml;base64,${logo}" height="60" style="float: left">
      <div style="margin-top: 3mm">${TITLE}</i> <span style="white-space: nowrap">v${VERSION} | ${date}</span></div>
    </div>
  `,
  footerTemplate: `
    <div style="margin: 0 auto 10mm auto; font-size: 11pt; font-family: Carlito; color: #4c4c4c">
      (<span class="pageNumber">
      </span>/<span class="totalPages">
      </span>)
    </div>
  `
})

await browser.close()
