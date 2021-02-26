/**
 * Khối 1: Nhập n
 * 
 * Khối 2:
 * B1: Khai báo biến n, biến giaiThua = 1
 * B2: Sử dụng for (i = 1; i <= n; i++) {
 *      giaiThua *= i;
    }
 * B3: In kết quả 
        document.getElementById("txtNote").innerHTML = n + "! = " + giaiThua;
 * B4: Gọi hàm 
        document.getElementById("btnSubmit").onclick = function(){
            tinhGiaiThua();
        }

 * Khối 3: In kết quả
 */



function tinhGiaiThua(){
    var n = parseFloat(document.getElementById("inputN").value);
    var giaiThua = 1;

    for (i = 1; i <= n; i++){
        giaiThua *= i; 
    }

    document.getElementById("txtNote").innerHTML = n + "! = " + giaiThua;
}

document.getElementById("btnSubmit").onclick = function(){
    tinhGiaiThua();
}