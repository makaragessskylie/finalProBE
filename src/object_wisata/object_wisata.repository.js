const prisma = require("../database");

const createDestination = async (payload) => {
  const { images, ...data } = payload;
  return await prisma.objek_wisata.create({
    data: {
      ...data,
      gambar: {
        createMany: {
          data: images.map((image) => ({ path: image })),
        },
      },
    },
  });
};

module.exports = {
  createDestination,
};