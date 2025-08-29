/*
  Warnings:

  - Added the required column `marcaId` to the `carros` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_carros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "modelo" TEXT NOT NULL,
    "fecha_fabricacion" DATETIME NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "precio" DECIMAL NOT NULL,
    "marcaId" INTEGER NOT NULL,
    CONSTRAINT "carros_marcaId_fkey" FOREIGN KEY ("marcaId") REFERENCES "marcas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_carros" ("disponible", "fecha_fabricacion", "id", "modelo", "precio") SELECT "disponible", "fecha_fabricacion", "id", "modelo", "precio" FROM "carros";
DROP TABLE "carros";
ALTER TABLE "new_carros" RENAME TO "carros";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
