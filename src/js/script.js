function init() {
    company_A_list = ["Apple", "Amazon", "Microsoft", "Alphabet", "Google", "Facebook", "Twitter", "MySpace", "IBM", "Minecraft", "Mojang", "McAfee", "Sony", "Mozilla", "Alibaba", "LeBonCoin", "Vinted", "Walmart", "Auchan", "Carrefour", "E. Leclerc", "Super U", "McDonalds", "BurgerKing", "Starbucks", "TF1", "FranceTélévision", "France 2", "France 3", "France 4", "France 5", "M6", "Arte", "Canal +", "NRJ12", "Gulli", "BFMTV", "Cherie 25", "Orange", "Numéricable", "Bouygues Télécom", "Nokia", "Samsung", "OnePlus", "Huawei", "MasterCard", "ExxonMobil", "Total", "Numérama", "Didier Raoult Inc.", "Credit Mutuel", "CIC", "Orange Bank", "Banque Postale", "La Poste", "MATMUT", "BNP Paribas", "BRED Banque", "Le Credit Lyonnais", "Manpower", "Domino's Pizza", "Société Générale", "Primark", "Foot Locker", "Yves Rocher", "New Yorker", "H&M", "Plein Ciel", "Zara", "BCHEF", "Decathlon", "Peugeot", "Renault", "Audi", "BMW", "Chevrolet", "Ford", "Fiat", "Hyundai", "Land-Rover", "Mercedes-Benz", "Nissan", "Opel", "Porsche", "Volvo", "Volkswagen", "Citroën", "BBC"]
    company_B_list = ["La Mie Câline", "LiA", "Espace Coty", "Docks Vauban", "Boulangerie PAUL", "Jules", "Micromania", "BD Lyrium", "Clopinette", "Le H Chicha", "Le Black Café", "L'Eau Tarie", "CaféInk", "McDaids", "O'Brother", "Le Trappist", "La Colombe", "La Bibliothèque Oscar Niemeyer", "Le Vent Couvert", "Les Frites à Victor", "Les Flots Bleus", "Pattaya", "La Petite Rade", "Palais de Topkapi", "Le Bosphore", "Le Roi de la Frite", "Fujiya Sushi", "Soleil d'Asie", "Mondial Pare-Brise", "SteakHouse", "Marmara", "KabyPhone", "1foTeam", "Info-media.biz", "CFC", "Chicken West", "Le Franklin", "TATI", "GIFI", "Port 2000"]
    companyContractGenerator();
    // randomContractNumber();

    alternate_news = true;
    toggleAlternateNews()
}

function redo() {
    document.getElementById('news').innerHTML = "";
    init();
}

function companyContractGenerator() {
    var company_A = company_A_list[Math.floor(Math.random()*company_A_list.length)];
    var company_B = company_B_list[Math.floor(Math.random()*company_B_list.length)];
    document.getElementById("news").innerHTML = company_A + " rachète " + company_B;
    document.getElementById("news_alter").innerHTML = company_B + " rachète " + company_A + ".";
}

// function randomContractNumber() {
//     var use_hex = Math.random() >= 0.5;
//     if (use_hex == true) {
//         var number = (Math.random()*0xFFFFFFFFF<<0).toString(16);
//     } else {
//         var number = ((Math.random()*999999899)+1000);
//     }
    
//     document.getElementById("news_number").innerHTML = "Annonce n° " + number;
// }

function toggleAlternateNews()  {
    // randomContractNumber()

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