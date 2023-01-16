const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { username: "amartin", email: "test1@email.com" },
      { username: "testname2", email: "test2@email.com" },
    ],
  });

  //console.log(`${createdUsers.count} users created`, createdUsers);

  // Add your code here
  const createdProfile = await prisma.profile.createMany({
    data: [
      {
        firstName: "alice",
        lastName: "martin",
        profilepic:
          "https://www.hillrag.com/wp-content/uploads/2017/11/rabbit-pic.jpg",
        biography: "This is the biography of Alice Martin",
        user_Id: 1,
      },
      {
        firstName: "test",
        lastName: "name2",
        profilepic:
          "https://www.hdnicewallpapers.com/Walls/Big/Squirrel/Cute_Brown_Squirrel_Pic_Download.jpg",
        biography: "This is the biography of testname2",
        user_Id: 2,
      },
    ],
  });

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
