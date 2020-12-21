// Text formatting
function capitalize(s) {
    if (typeof s !== "string") { return "" }
    else { return s.charAt(0).toUpperCase() + s.slice(1) }
}

// Main
const font_link = "https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap";
const navbar = document.querySelector("#navbar");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");
const aside = document.querySelector("#aside");
const cur_page = window.location.pathname.split("/").pop();

function append_font() {
    let head = document.querySelector("head");
    let n_link = document.createElement("link");
    n_link.href = font_link;
    n_link.rel = "stylesheet";
    head.appendChild(n_link);
}

function append_title() {
    var txt = cur_page.replace(".html", "");
    if(txt == "index") {
        txt = "Home";
    }
    let title = document.querySelector("title");
    let t_title = document.createTextNode(capitalize(txt) + " | Zyenapz");
    title.appendChild(t_title);
}

function append_navbar() {
    
    const pages = {
        "home": "index.html",
        "games": "games.html",
        "works": "works.html",
        "blogs": "blogs.html",
        "contact": "contact.html"
    }

    let nav = document.createElement("nav");
    Object.keys(pages).forEach(key => {
        let n_link = document.createElement("a");
        let t_link = document.createTextNode(capitalize(key));
        n_link.classList.add("underline");
        if(pages[key] == cur_page) {
            n_link.classList.add("active");
        }
        n_link.href = pages[key];
        n_link.appendChild(t_link);

        let n_para = document.createElement("p");
        n_para.appendChild(n_link);
        n_para.classList.add("large");
        nav.appendChild(n_para);
    });

    navbar.appendChild(nav);
}

function append_footer() {
    let copyright = "\u00A9 2020 zyenapz.github.io, All Rights Reserved.";

    let n_para = document.createElement("p");
    n_para.classList.add("centered");
    n_para.classList.add("medium");
    let t_para = document.createTextNode(copyright);
    n_para.appendChild(t_para);

    let n_foot = document.createElement("footer");
    n_foot.appendChild(n_para);
    
    footer.appendChild(n_foot);
}

// Initialize the webpage
document.onload = do_initialize();

function do_initialize() {
    append_font();
    append_title();
    append_navbar();
    append_footer();
}
