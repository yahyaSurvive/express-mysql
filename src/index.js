//untuk memanggil express js
const expess = require("express");

//agar url bisa diakses siapa saja
const cors = require("cors");

//untuk konfigurasi file.env
require("dotenv").config();

//untuk mengambil nilai di file .env dan memberikan kondisi jika tidak ada nilai port maka akan ganti dengan angka 4000
const PORT = process.env.PORT || 4000;

//untuk menuju ke file users
const usersRoutes = require("./routes/users.js");
const barangRoutes = require("./routes/barang");

//untuk memanggil file middleware agar bisa berjalan sebelum respon berpindah ke file lain
const middlewareLog = require("./middleware/logs");

const app = expess();
app.use(
  cors({
    origin: "*",
  })
);

//ini middleware dari file terpisah
app.use(middlewareLog);

app.use(expess.json());

//untuk memanggil apapun yang diawali slash user mengarah ke file users di folder routes
app.use("/users", usersRoutes);
app.use("/barang", barangRoutes);

//setting port yang akan berjalan, kebetulan pada code dibawah mengambil dari file .env yang bernilai 4000
app.listen(PORT, () => {
  console.log(`server berhasil running di port ${PORT}`);
});
