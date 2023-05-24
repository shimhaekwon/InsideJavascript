const funcGetJsonData = function(fileName){
    let retArr = [];
    fetch(fileName)
        .then(response => response.json())
        .then(data => {
            retArr = data; //.map(item => item.property);
            console.log(retArr);
        })
        .catch(error => {
            console.error('Error parsing JSON:', error);
        });
    return retArr;
};

//const hanjaArr = funcGetJsonData('hanja.json');
const funcSetContent = function(hanjaJson){
    // div 에 한자 - 설명 - 한글 노출하도록.
    const divContent = document.getElementById("content");
    var cell = docuemnt.createElement('div');
    cell.classList.add('hanja-line');
    divContent.appendChild(cell);
};