const MusicModel = require('../models/Music'); // Giả sử đây là mô hình dữ liệu âm nhạc

const getListMusic = async (req, res) => {
    try {
        const musicList = await MusicModel.find();
        res.status(200).json(musicList);
        console.log(musicList);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi truy xuất dữ liệu' });
    }
};
module.exports = { getListMusic }; // Xuất hàm để sử dụng ở nơi khác