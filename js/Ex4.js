/**
 * Khối 1: Nhập x, n
 * 
 * Khối 2: 
 * B1: Tạo  biến x, n, sum = 1, s = 0
 * 
 * B2: Dùng vòng lặp for (var i = 1; i <= n; i++) {
 *      sum *= x;
        s += sum;
    }

 * B3: In kết quả 
    document.getElementById("txtResults").innerHTML = s;

 * B4: Gọi hàm
    document.getElementById("btnSubmit").onclick = function(e){
        e.preventDefault();
        tinhTong();
    }

 * Khối 3: In kết quả
    
 */



function tinhTong(){
    var x = parseFloat(document.getElementById("inputX").value);
    var n = parseFloat(document.getElementById("inputN").value);

    var sum = 1;
    var s = 0;

    for (var i = 1; i <= n; i++){
        sum *= x;
        s += sum;
    }

    document.getElementById("txtResults").innerHTML = s;
}


document.getElementById("btnSubmit").onclick = function(e){
    e.preventDefault();
    tinhTong();
}