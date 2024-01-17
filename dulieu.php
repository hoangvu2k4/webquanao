<?php
// Kết nối đến cơ sở dữ liệu MySQL trên localhost
$servername = "localhost";
$username = "root"; // Thường là "root" trong môi trường cục bộ XAMPP
$password = ""; // Để trống trong môi trường cục bộ XAMPP
$dbname = "sql";

$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối không thành công: " . $conn->connect_error);
}

// Nhận dữ liệu từ yêu cầu POST
$data = json_decode(file_get_contents("php://input"), true);

// Thực hiện truy vấn để lưu đơn đặt hàng vào cơ sở dữ liệu
$sql = "INSERT INTO dondathang (ten_sanpham, gia, soluong) VALUES ('" . $data['ten'] . "', " . $data['gia'] . ", " . $data['soLuong'] . ")";

if ($conn->query($sql) === TRUE) {
    echo "Đơn đặt hàng đã được lưu thành công.";
} else {
    echo "Lỗi: " . $sql . "<br>" . $conn->error;
}

// Đóng kết nối
$conn->close();
?>
