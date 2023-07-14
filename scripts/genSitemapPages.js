const fs = require('fs/promises');

(async () => {
    (await fs.readdir(`${process.cwd()}/public/`)).filter((val) => val.endsWith('.xml'))
    .map(async (val) => {
        const content = await fs.readFile(`${process.cwd()}/public/${val}`)
        const htmlArr = [`<html lang="en">`, `<head>`, `</head>`, `<body>`,`<h1>${val.replace('.xml', '')}</h1>`, `<p id="xml" hidden>${String(content)}</p>`, `<noscript>You need JavaScript for this page</noscript>`, `<div id="container"></div>`, `<script preload src="/sitemapParser.js"></script>`, `<link rel="stylesheet" href="/sitemapCSS.css" />`, `</body>`, `</html>`]
        var html = ``;
        htmlArr.map((val2) => {
            html = `${html}, ${val2}`
        })
        fs.writeFile(`${process.cwd()}/public/${val.replace('.xml', '')}.html`, html.replaceAll(`,`, ''))
        console.log("Generated HTML for file:", val)
    });
})()