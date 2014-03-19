(function () {

    var offlinePages = /^\/(index|about|schedule|location).htm$/;

    var hideLinksThatRequireOnline = function () {
        var allNavLinks = document.querySelectorAll("nav.page-nav a");
        for (var i = 0; i < allNavLinks.length; i++) {
            var href = allNavLinks[i].getAttribute("href");
            if (!offlinePages.test(href)) {
                allNavLinks[i].style.display = "none";
            }
        }
    };

    var showLinks = function () {
        var allNavLinks = document.querySelectorAll("nav.page-nav a");
        for (var i = 0; i < allNavLinks.length; i++) {
            allNavLinks[i].style.display = "";
        }
    };

    if (!navigator.onLine) {
        hideLinksThatRequireOnline();
    }

    document.body.onoffline = hideLinksThatRequireOnline;
    document.body.ononline = showLinks;

    // Error fetching appcache.manifest: so we are probably offline
    applicationCache.addEventListener("error", hideLinksThatRequireOnline, false);

} ());
