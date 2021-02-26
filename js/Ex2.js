/**
 * Khối 1: Giới hạn số từ 0 đến 1000
 * 
 * Khối 2:
 * B1: Khai báo biến demSo, n, count
 * 
 * B2: Sử dụng vòng lặp for (i = 0; i <= n; i++) {
 * if (i % 3 == 0){
            demSo += i + " ";
            count++;
        }
    }
    
 * B3: In kết quả
     document.getElementById("txtThongBao").innerHTML = "-" + "Số lượng số chia hết cho 3 từ 0 đến 1000 là: " + count + "<br>" + "<br>" + "-" + "Danh sách số chia hết cho 3 từ 0 đến 1000: " + demSo;

 * B4: Gọi hàm
    document.getElementById("btnDemSo").onclick = function(){
        demSo();
    }
    
 * Khối 3: In kết quả số lượng số chia hết cho 3 từ 0 - 1000;
    
 */

function demSo(){
    var demSo = 0;
    var n = 1000;
    var count = 0;

    for (i = 0; i <= n; i++){
        if (i % 3 == 0){
            demSo += i + " ";
            count++;
        }
    }

    document.getElementById("txtThongBao").innerHTML = "-" + "Số lượng số chia hết cho 3 từ 0 đến 1000 là: " + count + "<br>" + "<br>" + "-" + "Danh sách số chia hết cho 3 từ 0 đến 1000: " + demSo;
}


document.getElementById("btnDemSo").onclick = function(){
    demSo();
}