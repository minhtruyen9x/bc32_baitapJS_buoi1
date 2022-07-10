//Quy Đổi Tiền

/**
 * Mô hình 3 khối
 * 
 * =======Đầu vào=======
 * - Số tiền đô $ người dùng nhập vào
 * -
 * 
 * ========Xử lý==========
 * - Tạo biến vndPer$ lưu trữ giá trị quy đổi tương ứng 23.500 VND cho 1 $
 * - Tạo biến money$ lưu trữ số $ người dùng nhập vào
 * - Tạo biến moneyVND = vndPer$*money$ xử lý và lưu trữ tiền quy đổi
 * 
 * =========Đầu ra===========
 * - Xuất ra số tiền $ đã dược quy đổi
 * 
 * 
 */


//Khai Báo 
var vndPer$ = 23500;
var money$ = 2; //giả xử người dùng nhập vào số $
var moneyVND;

//Xử lý
moneyVND = vndPer$*money$;

//Xuất dữ liệu
console.log("Tỉ giá : "+ vndPer$+'VND/$');
console.log("Số $ : "+ money$+'$');
console.log("Số vnd tương ứng : "+ moneyVND+'VND');
