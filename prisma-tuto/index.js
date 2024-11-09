const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {

  //await prisma.user.create({
  //  data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //     posts: {
  //       create: {title: 'Hello World'},
  //     },
  //     profile: {
  //       create: { bio: 'I like turtles'},
  //     }
  //     }
  // })

  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true
  //   }
  // });
  const post = await prisma.post.update({
    where: {id: 1},
    data: {published: true}
  })
  //console.dir(allUsers, {depth: null});
  console.log(post)
};

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect(
      process.exit(1)
    )
  })