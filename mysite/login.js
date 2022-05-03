function login() {
    let name = document.getElementById('name');
    let id = document.getElementById('id');
    let pw = document.getElementById('pw');

    if (name.value == '') {
        alert('이름을 입력하세요')
        name.focus;
        return false;
    }

    if (id.value == '') {
        alert('id를 입력하세요')
        id.focus;
        return false;
    }

    if (pw.value == '') {
        alert('pw를 입력하세요')
        pw.focus;
        return false;
    }

    location.href="loginComplete.html?a=" + name.value + "&b=" + id.value + "&c=" + pw.value;


    
}


function login2() {
    let name = document.getElementById('name').value;
    let id = document.getElementById('id').value;
    let pw = document.getElementById('pw').value;

    document.write(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="index.css">
            <script src="loginComplete.js"></script>
        </head>
        <body onload="login()">
            <table border="1" id="siteTbl" >
                <tr>
                    <td>
                        <a href="index.html">JS's Website</a>
                    </td>
            
                </tr>
            
            </table>
            
            <table id="siteMenuTbl">
                <tr>
                    <td><a class="menuClass" href="menu1.html">메뉴1</a></td>
                    <td><a class="menuClass" href="join.html">가입</a></td>
                    <td><a class="menuClass" href="slide.html">슬라이드</a></td>
                    <td><a href="https://naver.com">네이버로</a></td>
                    <td><a href="login.html">로그인</a></td>
                    <td><a href="">나이</a></td>
                </tr>
            </table>
            <table id="contentTbl">
                <tr>
                    <td> 
                        <table id="loginTbl" >
                        <tr>
                            <td>이름</td><td id="td1">${name}</td>
                        </tr>
                        <tr>
                            <td>ID</td><td id="td2">${id}</td>
                        </tr><tr>
                            <td>PW</td><td id="td3">${pw}</td>
                        </tr>
                        
                    </table>
                </td>
                </tr>
                </table>
        
           
        </body>
        </html>`
        );


}


function login3() {
    //1. 값 챙기기
    let name = document.getElementById('name');
    let id = document.getElementById('id');
    let pw = document.getElementById('pw');

    // 2.input 삭제/바꿈
    name.remove();
    id.remove();
    pw.remove();
    // 3. 그 자리에 값 출력

    let name2 = document.getElementById('name2');
    let id2 = document.getElementById('id2');
    let pw2 = document.getElementById('pw2');


    name2.innerText = name.value;
    id2.innerText = id.value;
    pw2.innerText = pw.value;
        
}