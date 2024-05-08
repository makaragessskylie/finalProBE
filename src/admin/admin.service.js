const { getAdminByEmail, createAdmin } = require("./admin.repository");

const login = async (payload) => {
  const { email, password } = payload;
  const admin = await getAdminByEmail(email);
  if (!admin) {
    throw new Error("Admin not found");
  } else if (admin.password !== password) {
    throw new Error("Invalid password");
  }
  return admin;
};

const createNewAdmin = async (payload) => {
  const { email, password, nama, alamat, no_hp } = payload;
  if (!email || !password || !nama || !alamat || !no_hp) {
    throw new Error("Semua data harus diisi");
  }
  return await createAdmin(payload);
};

module.exports = {
  login,
  createNewAdmin,
};