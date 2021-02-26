/**
 * Khối 1: nhập n
 * 
 * Khối 2: 
 * B1: Tạo biến n và biến tổng (sum)
 * 
 * B2: Xét điều kiện if (n < 1) để loại giá trị n không hợp lệ và buộc phải nhập lại
 * 
 * B3: Xét điều kiện for (i = 1; i <= n; i++){
 * if (i % 2 == 0){
            sum += i;
            document.getElementById("txtTB").innerHTML = "Tổng số chẵn từ 1 đến " + n + " là: " + sum;
        }
    }
    
 * B4: Gọi hàm
        document.getElementById("btnTinh").onclick = function(e){
            e.preventDefault();
            tinhTongSoChan();
        }

 * Khối 3: In kết quả tổng các số chẵn    
 */



function tinhTongSoChan(){
    var n = parseFloat(document.getElementById("inputN").value);
    var sum = 0;

    if (n < 1) {
        document.getElementById("txtTB").innerHTML = "n không hợp lệ! Nhập lại"
    }

    for (i = 1; i <= n; i++){
        if (i % 2 == 0){
            sum += i;
            document.getElementById("txtTB").innerHTML = "Tổng số chẵn từ 1 đến " + n + " là: " + sum;
        }
    }
}

document.getElementById("btnTinh").onclick = function(e){
    e.preventDefault();
    tinhTongSoChan();
}