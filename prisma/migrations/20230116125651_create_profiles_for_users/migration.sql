-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "user_Id" INTEGER,
    "firstName" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(50) NOT NULL,
    "profilepic" TEXT NOT NULL,
    "biography" VARCHAR(120) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_user_Id_key" ON "Profile"("user_Id");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
