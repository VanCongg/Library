# 🌟 Dự Án Quản Lý Đỗ Xe Thông Minh 🌟

## 📜 Giới Thiệu

Dự án "Quản Lý Đỗ Xe Thông Minh" nhằm xây dựng một hệ thống thông minh để quản lý không gian đỗ xe. Hệ thống này kết hợp công nghệ **Node.js** cho phần backend, **React.js** cho phần giao diện người dùng, và **ESP32** cho việc giao tiếp với các cảm biến đỗ xe. Mục tiêu là tối ưu hóa việc sử dụng không gian đỗ xe và cung cấp thông tin thời gian thực về tình trạng các chỗ đỗ.

---

## 🏗️ Kiến Trúc Hệ Thống

### 1. Phần Cứng

- **ESP32**: Thiết bị nhúng kết nối với cảm biến khoảng cách để phát hiện tình trạng chỗ đỗ xe. ESP32 gửi dữ liệu này đến server qua giao thức HTTP hoặc MQTT.
- **Cảm Biến Khoảng Cách**: Đo khoảng cách và xác định trạng thái của các chỗ đỗ xe.

### 2. Phần Mềm

- **Server (Node.js)**: Xử lý các yêu cầu từ ESP32, quản lý cơ sở dữ liệu, và cung cấp API cho giao diện người dùng.
- **Giao Diện Người Dùng (React.js)**: Hiển thị tình trạng các chỗ đỗ xe và cung cấp các công cụ quản lý cho người dùng và quản trị viên.

---
