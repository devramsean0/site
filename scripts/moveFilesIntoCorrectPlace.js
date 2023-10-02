const fs = require("fs");
const files = [
    {
        src: '_projects/traffic-light-project/financials.xlsx',
        outDir: 'public/files/traffic-light-project/',
        outFile: 'financials.xlsx'
    }
]
if (!fs.existsSync('public/files')) {
    fs.mkdirSync('public/files', () => console.log('public/files created'))
}

for (const file of files) {
    if (!fs.existsSync(file.outDir)) {
        fs.mkdirSync(file.outDir, () => console.log(`${file.outDir} created`))
    }
    fs.copyFile(file.src, `${file.outDir}${file.outFile}`, (err) => {
        if (err) {console.log(err)}
        console.log(`${file.src} copied to ${file.outDir}${file.outFile}`
    )})
}