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

const findAllDestination = async () => {
  return await prisma.objek_wisata.findMany({
    include: {
      gambar: true,
    },
  });
};

const findDestinationById = async (id) => {
  return await prisma.objek_wisata.findUnique({
    where: {
      id,
    },
    include: {
      gambar: true,
    },
  });
};

const updateDestination = async (id, payload) => {
  const { nama, alamat, keterangan, waktu_operasional } = payload;
  return await prisma.objek_wisata.update({
    where: {
      id,
    },
    data: {
      nama,
      alamat,
      keterangan,
      waktu_operasional,
    },
  });
};

module.exports = {
  createDestination,
  findAllDestination,
  findDestinationById,
  updateDestination,
};