-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "no_hp" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "objek_wisata" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "keterangan" TEXT NOT NULL,
    "rute" TEXT NOT NULL,

    CONSTRAINT "objek_wisata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gambar" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "objek_wisata_id" TEXT NOT NULL,

    CONSTRAINT "gambar_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "gambar" ADD CONSTRAINT "gambar_objek_wisata_id_fkey" FOREIGN KEY ("objek_wisata_id") REFERENCES "objek_wisata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
