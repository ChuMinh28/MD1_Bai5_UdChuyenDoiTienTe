function change() {
    let input = document.getElementById('khong').value;
    let mot = document.getElementById('mot').value;
    let hai = document.getElementById('hai').value;
    let ketQua;
    if (mot === "a"&& hai==="usd"){
        document.getElementById('qka').innerHTML="<h4 style='color:red'>chon menh gia khac di nhe</h4>";
        return
    }
    if (mot==="b"&& hai==="vnd"){
        document.getElementById('qka').innerHTML="<h4 style='color:red'>chon menh gia khac di nhe</h4>";
        return
    }
    if (mot === "a"){
        if (hai === "vnd") {ketQua= input*23000}
    }
    if (mot === "b"){
        if (hai === "usd") {ketQua = input/23000}
    }
    document.getElementById('abc').innerHTML = ketQua
}





