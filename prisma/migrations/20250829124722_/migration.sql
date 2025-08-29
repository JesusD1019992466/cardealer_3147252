-- CreateTable
CREATE TABLE "marcas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "marcas_email_key" ON "marcas"("email");
