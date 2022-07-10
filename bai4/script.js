//Tính diện tích chu vi hình chữ nhật

/**
 * Mô hình 3 khối
 * 
 * =======Đầu vào=======
 * - Chiều dài hình chữ nhật
 * -Chiều rộng hình chữ nhật
 * -
 * ========Xử lý==========
 * - Tạo biến lengths lưu trữ giá trị người dùng nhập cho chiều dài hcn
 * - Tạo biến width lưu trữ giá trị người dùng nhập cho chiều rộng hcn
 * - Tạo biến perimeter = (lengths + width)*2 xử lý và lưu trữ chu vi hcn
 * - Tạo biến area = length*width xử lý và lưu trữ diện tích hcn
 * 
 * =========Đầu ra===========
 * - Xuất ra 
 * giá trị chu vi và diện tích hcn
 * 
 * 
 */


//Khai Báo 
var lengths = 20.5;//giả xử người dùng nhập chiều dài
var width = 5.9;//giả xử người dùng nhập chiều rộng
var perimeter;
var area;

//Xử lý
perimeter = (lengths + width)*2;
area = lengths*width;

//Xuất dữ liệu
console.log('Chiều Dài : '+ lengths);
console.log('Chiều Rộng : '+ width);
console.log('Kết quả tính toán');

console.log('Chuvi : '+ perimeter);
console.log('Diện Tích : '+ area);


