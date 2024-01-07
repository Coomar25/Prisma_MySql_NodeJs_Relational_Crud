/*
  Warnings:

  - Added the required column `address` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `semester` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Student` ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `semester` INTEGER NOT NULL;
