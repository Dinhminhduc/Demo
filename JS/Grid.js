function Grid(arr) {
    var grid_html = "";
    for (var i=0;i<arr.length;i++){
        grid_html+= "<div class=\"col-md-4\">\n" +
            "                    <div class=\"item\">\n" +
            "                        <img src=\""+arr[i].image+"\"/>\n" +
            "                        <p class='id'>"+arr[i].id+"</p>\n" +
            "                        <p> Ten sp: "+arr[i].name+"</p>"+
            "                        <p> Price:</p>"+
            "                        <p class='price'>"+arr[i].price+"</p>\n" +
            "                    </div>\n" +
            "                </div>";
    }
    return grid_html;
}
function getMenu() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var rs = this.responseText; // string ket qua tra ve
            rs = JSON.parse(rs); // bien string thanh JSON
            var menu = rs.data;
            console.log(menu);
            document.getElementById("Grid").innerHTML = Grid(menu);
        }
    }
    xhttp.open("GET","https://foodgroup.herokuapp.com/api/today-special");
    xhttp.send();
}
getMenu();