const prisma = require("../database");

const createWisatawan = async (payload) => {
  const { email, password, nama, alamat, no_hp } = payload;
  return prisma.wisatawan.create({
    data: {
      email,
      password,
      nama,
      alamat,
      no_hp,
    },
  });
};

const findWisatawanByUniqueKey = async (payload) => {
  const { id, email } = payload;
  return prisma.wisatawan.findFirst({
    where: {
      OR: [{ id }, { email }],
    },
  });
};

module.exports = { createWisatawan, findWisatawanByUniqueKey }