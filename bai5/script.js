//Tính Tổng 2 ký số

/**
 * Mô hình 3 khối
 * 
 * =======Đầu vào=======
 * - Số có 2 chữ số
 * -
 * ========Xử lý==========
 * - Tạo biến number lữu trữ số có 2 chữ số
 * - Tạo biến donVi = number%10 xử lý và lưu trữ ký số hàng đơn vị
 * - Tạo biến hangChuc = Math.floor(number/10) xử lý và lưu trữ ký số hàng chục
 * - Tạo biến sum = donVi + hangChuc tổng 2 ký số
 * 
 * =========Đầu ra===========
 * - Xuất ra Tổng 2 ký số
 * 
 * 
 */


//Khai Báo 
var number = 35;
var donVi;
var hangChuc;
var sum;

//Xử lý
donVi = number%10;
hangChuc = Math.floor(number/10);
sum = donVi + hangChuc;

//Xuất dữ liệu
console.log('Số cần tính: '+ number);
console.log('Ký số hàng đơn vị: '+ donVi);
console.log('Ký số hàng chục: '+ hangChuc);
console.log('Tổng 2 ký số: '+ sum);


