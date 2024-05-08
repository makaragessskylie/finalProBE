const prisma = require("../database");

const getAdminByEmail = async (email) => {
  return await prisma.admin.findUnique({
    where: {
      email,
    },
  });
};

const createAdmin = async (payload) => {
  return await prisma.admin.create({
    data: payload,
  });
};

module.exports = {
  getAdminByEmail,
  createAdmin,
};