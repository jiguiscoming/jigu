function ageCalcurator() {
 
    let birthYear = document.getElementById('birthYear');

    if (birthYear.value == '') {
        alert('출생년도를 입력해주세요')
        birthYear.focus;
        return false;
    }
    var  thisDate = new Date();
    var thisYear = thisDate.getFullYear();

    let age = thisYear - birthYear.value;

    const ageCommand = document.getElementById('ageCommand');
    ageCommand.remove();

    
    let agePut = document.getElementById('agePut');
    agePut.innerText = `당신의 나이는 ` + age + `살입니다.`;
    
}