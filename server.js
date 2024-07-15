const express = require('express');
const cors = require('cors'); // Thêm dòng này vào đầu file
const app = express();
const PORT = process.env.PORT || 4000;

// Định nghĩa một route cơ bản
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Khởi động server và lắng nghe trên port 4000
app.listen(PORT, () => {
  console.log(`Server đang chạy trên port ${PORT}`);
});

require("dotenv").config(); // Load các biến môi trường từ file .env

app.use(express.json()); // Sử dụng middleware để phân tích JSON gửi đến từ client
app.use(cors()); // Sử dụng middleware để xử lý lỗi CORS

// Kết nối tới cơ sở dữ liệu
require("./config/database").connect(); // Kết nối với cơ sở dữ liệu MongoDB

// Định tuyến cho các endpoints
const musicRoutes = require("./routes/MusicRoutes"); // Import các routes cho music từ thư mục routes/music
app.use("/music", musicRoutes); // Sử dụng routes cho user
