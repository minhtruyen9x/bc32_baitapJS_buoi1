//Tính Giá Trị Trung Bình

/**
 * Mô hình 3 khối
 * 
 * =======Đầu vào=======
 * - Giá trị 5 số thực
 * - 
 * -
 * 
 * ========Xử lý==========
 * - Lần lượt tạo các biến value1,value2,value3,value4,value5 lưu trữ giá trị người dùng nhập vào.
 * - Tạo biến sum = value1 + value2 + value3 + value4 + value5
 * - Tạo biến average = sum/5
 * 
 * 
 * =========Đầu ra===========
 * - Giá trị biến average.
 * 
 * 
 */


//khai báo
var value1 = 10;//giả sử người dùng nhập lần lượt (các giá trị là số dương không tính số âm)
var value2 = 20.4;
var value3 = 2.67;
var value4 = 4.95;
var value5 = 10.6;

var sum;
var average;
//xử lý
sum = value1 + value2 + value3 + value4 + value5;
average = sum/5;

//Xuất dữ liệu
console.log('Value1: '+ value1);
console.log('Value2: '+ value2);
console.log('Value3: '+ value3);
console.log('Value4: '+ value4);
console.log('Value5: '+ value5);
console.log('average: '+ average);
