        // 메뉴의 사진바꾸기 함수
        var imgArray = new Array();
        imgArray[0] = "include/h1.jpg";
        imgArray[1] = "include/h2.jpg";
        imgArray[2] = "include/h3.jpg";
        imgArray[3] = "include/h4.jpg";

        function showImage()
        {
            var imgNum = Math.round(Math.random()*3);
            var objImg = document.getElementById("introImg");
            objImg.src = imgArray[imgNum];
            setTimeout("showImage()", 3000);
        }
        