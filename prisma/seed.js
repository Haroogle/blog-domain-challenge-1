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
  const createdProfiles = await prisma.profile.createMany({
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

  const createPosts = await prisma.post.createMany({
    data: [
      {
        title: "post1 for user1",
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,",
        isPublished: true,
        user_Id: 1,
      },
      {
        title: "post2 for user1",
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,",
        pic: "https://www.hdnicewallpapers.com/Walls/Big/Elephant/Big_Animal_Elephant_Pic_Download.jpg",
        user_Id: 1,
      },
      {
        title: "post1 for user2",
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ",
        isPublished: true,
        pic: "https://i.ytimg.com/vi/PwEZPqhN-YI/maxresdefault.jpg",
        user_Id: 2,
      },
    ],
  });
  const createComments = await prisma.comment.createMany({
    data: [
      {
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium",
        user_Id: 2,
        post_Id: 1,
      },
      {
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",
        user_Id: 1,
        post_Id: 1,
      },
      {
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",
        user_Id: 1,
        post_Id: 3,
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
