//TÍNH TIỀN LƯƠNG NHÂN VIÊN

/**
 * Mô hình 3 khối
 * 
 * =======Đầu vào=======
 * - Tiền lương cho 1 ngày làm việc của nhân viên
 * - Số ngày làm việc
 * -
 * 
 * ========Xử lý==========
 * - Tạo biến salaryPerDay lưu trữ giá trị lương cho 1 ngày
 * - Tạo biến workingDays lưu trữ số ngày làm việc của nhân viên
 * - Tạo biến salary = salaryPerDay*workingDays
 * 
 * 
 * =========Đầu ra===========
 * - Tiền lương của nhân viên.
 * 
 * 
 */

//khai báo
var salaryPerDay = 100000;
var workingDays = 7; // giả sử người dùng nhập 7 ngày
var salary;
//Xử lý
salary = salaryPerDay*workingDays;
//Xuất dữ liệu
console.log('salaryPerDay: '+ salaryPerDay + 'VND');
console.log('workingDays: '+ workingDays + 'days');
console.log('salary: '+ salary +'VND');