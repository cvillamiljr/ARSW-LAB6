var apiRe=apiclient ;
var app =(function(){
    var author=null;
    var plane =null;
    var lista = [];


    var total = function(total, valor){
            return total + valor.value;
    };

    var setName = function (author2) {
        author = author2;
        $( "#authorName" ).html(author+"'s bluesprints:");
    }

    var setLista = function (retorno) {
        $( "#totalPoints" ).html("Total Points: 0");
        $("#t01 tbody").empty();
        $("#t01 tbody").append('<tr><th>Blueprint name</th><th>Number of points</th><th>Open</th></tr>');
        if (retorno == null){
            return new Error("No se encontro");
        }
        var lista  = retorno.map(function(BP){
            return {key:BP.name, value:BP.points.length}
        })
        var i = 0;
        lista.map(function(BP){
            var fila = "<tr><td id=\"bpName"+i+"\">" + BP.key + "</td><td id='point'>"+BP.value+"</td><td><button type=\"button\" class=\"btn btn-success\" onclick=\"app.draw("+i+")\">Open</button></td></tr>";
            $("#t01 tbody").append(fila);
            i+=1;
        })
        var suma = lista.reduce(total,0);
        $( "#totalPoints" ).html("Total Points: "+suma);
    }

    var dibujar = function (data) {
        var canvas = $('#myCanvas');
        var ctx = canvas[0].getContext("2d");
        ctx.beginPath();
        ctx.moveTo(data.points[0].x, data.points[0].y);
        data.points.forEach(function (point) {
            ctx.lineTo(point.x, point.y);
        })
        ctx.stroke();
    };



    return {
         update: function(author){
            setName(author);
            apiRe.getBlueprintsByAuthor(author,setLista);
         },

         draw: function(i){
            var name = document.getElementById("bpName"+i).innerText ;
            $( "#currentBluePrint" ).html("Current BluePrint :"+ name);
            apiRe.getBlueprintsByNameAndAuthor(author,name,dibujar);
         }
	};
})();
