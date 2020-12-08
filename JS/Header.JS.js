//render HTML Header
function header(){
    return "<div class=\"container\" >\n" +
        "        <div class=\"logo\">\n" +
        "            <a href=\"#\">Genesis Framework</a><br><p>SupportHTML5&Responsive Design</p>\n" +
        "        </div>\n" +
        "        <div class=\"top-links\">\n" +
        "            <ul>\n" +
        "                <li><a href=\"#\"> Sample </a></li>\n" +
        "                <li><a href=\"#\"> Layouts </a></li>\n" +
        "                <li><a href=\"#\"> Templates </a></li>\n" +
        "                <li><a href=\"#\"> Contact </a></li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "\n" +
        "    </div>";
}
document.getElementById("header").innerHTML = header();