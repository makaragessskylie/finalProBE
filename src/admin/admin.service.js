const {
    getAdminByEmail,
    createAdmin,
    getAdminById,
    updateAdmin,
    deleteAdmin,
  } = require("./admin.repository");
  
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
  
  const changePassword = async (id, payload) => {
    const { oldPassword, newPassword } = payload;
    const admin = await getAdminById(id);
    if (!admin) {
      throw new Error("Admin not found");
    } else if (admin.password !== oldPassword) {
      throw new Error("Invalid password");
    }
    return await updateAdmin(id, { password: newPassword });
  };
  
  const deleteAccount = async (id) => {
    const admin = await getAdminById(id);
    if (!admin) {
      throw new Error("Admin not found");
    }
    return await deleteAdmin(id);
  };
  
  module.exports = {
    login,
    createNewAdmin,
    changePassword,
    deleteAccount,
  };