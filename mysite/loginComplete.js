
    const urlParams = new URL(location.href).searchParams;
    const name1 = urlParams.get('a');
    const id = urlParams.get('b');
    const pw = urlParams.get('c');
  

    function login() {
        let td1 = document.getElementById('td1');
        let td2 = document.getElementById('td2');
        let td3 = document.getElementById('td3');
        
    td1.innerText = name1;
    td2.innerText = id;
    td3.innerText = pw;
        
    }
    
// )