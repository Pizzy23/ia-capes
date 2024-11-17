-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profession" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "categories" TEXT[],
    "iaResume" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "authors" TEXT[],
    "issn" TEXT,
    "topics" TEXT[],
    "abstract" TEXT,
    "references" TEXT[],

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
