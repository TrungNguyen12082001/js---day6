/**
 * Khối 1: Tìm số nguyên dương nhỏ nhất sao cho 1 + 2 + 3 +...+ n > 10000
 * 
 * Khối 2: 
 * B1: Khai báo biến n, s
 * 
 * B2: Dùng vòng lặp while (s < 10000){
 *      n++;
        s += n;
    }

 * B3: In kết quả
    document.getElementById("txtNotes").innerHTML = "Số nguyên dương n nhỏ nhất sao cho 1 + 2 + 3 +...+ n > 10000 là: " + n + "<br>" + "<br>" + "Tổng từ 1 - " + n + " là: " + s;
    return 0;

 * B4: Gọi hàm
    document.getElementById("btnOutput").onclick = function(e){
        e.preventDefault();
        output();
    }

    
 *Khối 3: In kết quả số nguyên dương nhỏ nhất sao cho 1 + 2 + 3 +...+ n > 10000
 */




function output(){
    var n = 0;
    var s = 0;

    // Cách 1:
    // for (i = 0; i <= n; i++){
    //     s += i;
    //     if (s > 10000){
    //         break;
    //     }
    //     n++;
    // }

    // Cách 2:
    while (s < 10000){
        n++;
        s += n;
    }
    
    document.getElementById("txtNotes").innerHTML = "Số nguyên dương n nhỏ nhất sao cho 1 + 2 + 3 +...+ n > 10000 là: " + n + "<br>" + "<br>" + "Tổng từ 1 - " + n + " là: " + s;
    return 0;
}

document.getElementById("btnOutput").onclick = function(e){
    e.preventDefault();
    output();
}