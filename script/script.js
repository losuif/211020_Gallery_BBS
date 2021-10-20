$(function(){


    // *** 갤러리 게시판 출력 ***
    
    let contentArr = 
    [

        ["img01.jpg", "헤리터 시그니처 칼도마세트 (월넛)",
        "월넛 색상의 헤리터 식과도&도마 세트",
        355000, 298000, 5488],
        
        
        ["img02.jpg", "헤리터 시그니처 칼도마세트 (하드메이플)",
        "하드메이플 색상의 헤리터 식과도&도마 세트",
        355000, 288000, 243],
        
        ["img03.jpg", "헤리터 칼 3종 세트",
        "",
        278000, 228000, 2054],
        
        ["img04.jpg", "헤리터 칼 2종 세트",
        "주방용 식도 + 과도",
        118000, 99000, 3149],
        
        ["img05.jpg", "헤리터 비건 에이프런",
        "자체개발 페브릭 앞치마",
        99000, 69000, 199],
        
        ["img06.png", "STANDARD CHINA 160",
        "헤리터 중식도",
        160000, 139000, 151],
        
        ["img07.png", "헤리터 시그니처 팔각도마",
        "도마 + 도마프레임+ 칼블럭",
        227000, 206000, 1535],
        
        ["img08.jpg", "헤리터 키친 크로스 SET",
        "강화에서 온 소창행주",
        26000, 26000, 388],
        
        ["img09.png", "STANDARD 180(7\")",
        "주방용 식도",
        79000, 79000, 1731],
        
        ["img10.jpg", "STANDARD 106(4\")",
        "주방용 과도",
        39000, 39000, 160],
        
        ["img11.png", "우드그레인 키친트레이",
        "",
        39000, 35000, 2],
        
        ["img12.png", "차콜스톤 워싱바",
        "",
        29700, 26800, 9]
        
        ];

        
        let galleryListArea = "";

        for (let i = 0; i < contentArr.length; i++) {
            
            galleryListArea += "<table class='goodsTbl'>";
            galleryListArea += "<tbody>";

            for (let j = 0; j < contentArr[i].length; j++) {
                
                if (j != 4) {
                    galleryListArea += "<tr>";
                }

                if (j == 0) {
                    galleryListArea += "<td><img src='images/" + contentArr[i][j] + "'alt='' width='320'></td>";
                }
                else if (j == 1) {
                    galleryListArea += "<td class='goodsName'>" + contentArr[i][j] + "</td>";
                }
                else if (j == 2) {
                    galleryListArea += "<td class='goodsDesc'>" + contentArr[i][j] + "</td>";
                }
                else if (j == 3) {
                    galleryListArea += "<td><span class='goodsPrice numComma'>" + contentArr[i][j] + "</span>";
                }
                else if (j == 4) {
                    galleryListArea += "<span class='salePrice numComma'>" + contentArr[i][j] + "</span></td>";
                }
                else if (j == 5) {
                    galleryListArea += "<td><span class='replyCnt numComma'>" + contentArr[i][j] + "</span></td>";
                }
                
                if (j != 3) {
                    galleryListArea += "</tr>";                    
                }

            }
                galleryListArea += "</tbody></table>"


                $("#galleryListArea").html(galleryListArea);
            }
            





    // ============================================================================



    // *** 천단위 구분 쉼표 ***
    
    // let num = $(".numComma").text();
    // 세 개의 값을 배열로 가져왔는지 확인
    // console.log("num : " + num.length);
    // => 배열 X => VJS 사용하는게 낫다

    let numDom = document.getElementsByClassName("numComma");
    
    // console.log("num : " + num.length);
    // => 결과 : 3 => 배열로 가져온 걸 알 수 있음

    for (let i = 0; i < numDom.length; i++) {
        numDom[i].innerText = fnNumComma(numDom[i].innerText);
    }

    function fnNumComma(param){
        let num = Number(param);
        return num.toLocaleString();
    }

    /*
    // 천단위 쉼표 적용하고 되돌리기

    let money = 1234567890; 
    let res = money.toLocaleString();   // 숫자형 자료에만 천단위 구분 적용됨
    console.log(res);
    // -> 1,234,567,890 출력

    let resFeedBack = res.replace(/,/g, "");
    console.log(resFeedBack);
    */
    

});

