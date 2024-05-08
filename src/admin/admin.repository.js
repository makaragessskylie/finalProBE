const prisma = require("../database");
const getAdminByEmail = async (email) => {
  return await prisma.admin.findUnique({
    where: {
      email,
    },
  });
};

const getAdminById = async (id) => {
  return await prisma.admin.findUnique({
    where: {
      id,
    },
  });
};

const createAdmin = async (payload) => {
  return await prisma.admin.create({
    data: payload,
  });
};

const updateAdmin = async (id, payload) => {
  return await prisma.admin.update({
    where: { id },
    data: payload,
  });
};

const deleteAdmin = async (id) => {
  return await prisma.admin.delete({
    where: { id },
  });
};

module.exports = {
  getAdminByEmail,
  getAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin,
};