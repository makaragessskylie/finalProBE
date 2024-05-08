const {
    createDestination,
    findAllDestination,
    findDestinationById,
    updateDestination,
  } = require("./object_wisata.repository");
  
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
  
  const getAllDestination = async () => {
    const data = await findAllDestination();
    const normalize = data.map((item) => ({
      ...item,
      gambar: item.gambar.map(
        (img) => "http://localhost:3000/" + img.path.replace(/\\/g, "/")
      ),
    }));
    return normalize;
  };
  
  const getDestinationById = async (id) => {
    const data = await findDestinationById(id);
    if (!data) {
      throw new Error("Destination not found");
    }
    const normalize = {
      ...data,
      gambar: data.gambar.map(
        (img) => "http://localhost:3000/" + img.path.replace(/\\/g, "/")
      ),
    };
    return normalize;
  };
  
  const updateDestinationData = async (id, payload) => {
    return await updateDestination(id, payload);
  };
  
  module.exports = {
    createNewDestination,
    getAllDestination,
    getDestinationById,
    updateDestinationData,
  };