const express = require('express');
const path = require('path');
const xlsx = require('xlsx');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// 엑셀 파일의 데이터 제공
app.get('/data', (req, res) => {
  const filePath = path.join(__dirname, 'src/assets/연습.xlsx');
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(worksheet);
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});