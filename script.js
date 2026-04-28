const sites = [
    "https://www.delfi.ee/",
    "https://www.postimees.ee/",
    "https://puhkaeestis.ee/et",
    "https://www.ohtuleht.ee/",
    "https://www.telia.ee/",

    "https://www.elisa.ee/",
    "https://www.lhv.ee/",
    "https://www.swedbank.ee/",
    "https://www.seb.ee/",
    "https://www.cooppank.ee/",

    "https://www.ut.ee/",
    "https://www.tlu.ee/",
    "https://www.taltech.ee/",
    "https://www.ria.ee/",
    "https://www.eesti.ee/",
    
    "https://www.emta.ee/",
    "https://www.riigikogu.ee/",
    "https://www.valitsus.ee/",
    "https://www.politsei.ee/",
    "https://www.transpordiamet.ee/",

    "https://www.err.ee/",
    "https://www.eesti.ee/",
    "https://et.wikipedia.org/",
    "https://www.tele2.ee/",
    "https://www.cv.ee/"
];

const matrix = document.getElementById("pixelMatrix");

sites.forEach((site) => {
    const link = document.createElement("a");
    link.href = site;
    link.className = "pixel";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = site;
    matrix.appendChild(link);
});