const {
    createWisatawan,
    findWisatawanByUniqueKey,
  } = require("./wisatawan.repository");
  
  const createNewWisatawan = async (payload) => {
    const { email, password, nama, alamat, no_hp } = payload;
    if (!email || !password || !nama || !alamat || !no_hp) {
      throw new Error("All fields are required");
    }
  
    return await createWisatawan(payload);
  };
  
  const loginWisatawan = async (payload) => {
    const { email, password } = payload;
    if (!email || !password) {
      throw new Error("Email and password are required");
    }
    const data = await findWisatawanByUniqueKey({ email });
    if (!data) {
      throw new Error("Email not found");
    }
    if (data.password !== password) {
      throw new Error("Password is incorrect");
    }
    return data;
  };
  
  module.exports = {
    createNewWisatawan,
    loginWisatawan,
  };