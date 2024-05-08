const { createDestination } = require("./object_wisata.repository");

const createNewDestination = async (payload) => {
  const { images, nama, alamat, keterangan, waktu_operasional } = payload;
  console.log(payload);
  if (
    !images ||
    images.length === 0 ||
    !nama ||
    !alamat ||
    !keterangan ||
    !waktu_operasional
  ) {
    throw new Error("All fields are required");
  }
  return await createDestination(payload);
};

module.exports = {
  createNewDestination,
};