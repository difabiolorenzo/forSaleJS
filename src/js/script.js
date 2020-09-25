function init() {
    additional_text = [
        [25, ""],
        [12.5, "puis fait faillite"],
        [12.5, "puis fait immédiatement faillite"],
        [12.5, "qui rachète $a"],
        [12.5, "qui rachète $c"],
        [25, "puis change de secteur pour $b"]
    ]
    
    soldCompanyGenerator();

    alternate_news = true;
    toggleAlternateNews()
}

function redo() {
    document.getElementById('news').innerHTML = "";
    init();
}

function soldCompanyGenerator() {
    var company_A = company_A_list[Math.floor(Math.random()*company_A_list.length)];
    var company_B = company_B_list[Math.floor(Math.random()*company_B_list.length)];
    var extra = pickExtra(company_A, company_B)

    document.getElementById("news").innerHTML = company_A + " rachète " + company_B + extra[0];
    document.getElementById("news_alter").innerHTML = company_B + " rachète " + company_A + extra[1];
}

function pickExtra(company_A, company_B) {
    var random = Math.round(Math.random() * 100);
    var random_sector = sector[Math.round(Math.random() * sector.length)]
    var random_step = 0;
    var random_next_step = 0;
    var extra_original = "";
    var extra = "";
    var extra_alt = "";

    for (var i = 0;i < additional_text.length; i++) {
        random_next_step = random_next_step + additional_text[i][0];
        if ( (random >= random_step && random <= random_next_step) || (random >= random_next_step)) {
            extra_original = additional_text[i][1];
        }
        random_step = random_next_step;
    }
    extra = extra_original;
    extra_alt = extra_original;

    for (var i = 0;i < extra_original.length; i++) {
        if (extra.charAt(i) == "$" && extra.charAt(i+1) == "a") {
            extra = replaceAt(extra, i, company_A, 1);
        }
        if (extra_alt.charAt(i) == "$" && extra_alt.charAt(i+1) == "a") {
            extra_alt = replaceAt(extra_alt, i, company_B, 1);
        }
        if (extra_alt.charAt(i) == "$" && extra_alt.charAt(i+1) == "b") {
            extra_alt = replaceAt(extra_alt, i, random_sector, 1);
        }
        if (extra_alt.charAt(i) == "$" && extra_alt.charAt(i+1) == "c") {
            extra_alt = replaceAt(extra_alt, i, company_B + " qui rachète à son tour " + company_A, 1);
        }
    }
    return [" " + extra, " " + extra_alt];
}

function replaceAt(string, index, replace, length) {
    return string.substring(0, index) + replace + string.substring(index+length + 1);
}

function toggleAlternateNews()  {
    var id = ""
    document.getElementById("news").style = "display:none; height:0; width:0"
    document.getElementById("news_alter").style = "display:none; height:0; width:0"

    if (alternate_news == false) {
        id = "news"
        alternate_news = true
    } else {
        id = "news_alter"
        alternate_news = false
    }

    document.getElementById(id).style = ""

}
