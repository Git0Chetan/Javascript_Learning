
        function AreaofTriangle()
        {
            var side1 = parseInt(document.getElementById("side1").value);
            var side2 = parseInt(document.getElementById("side2").value);
            console.log(typeof(side1));
            var area = (side1 * side2) / 2;
            document.getElementById("display").innerHTML = area;
        }
        function AreaofRectangle()
        {
            var side3 = parseInt(document.getElementById("side3").value);
            var side4 = parseInt(document.getElementById("side4").value);
            console.log(typeof(side3));
            var area1 = (side3 * side4);
            document.getElementById("display1").innerHTML = area1;
        }
        function AreaofCircle()
        {
            var side5 = parseInt(document.getElementById("side5").value);
            console.log(typeof(side5));
            var area2 = (3.14 * side5 * side5);
            document.getElementById("display2").innerHTML = area2;
        }