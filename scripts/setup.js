const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const existingAdmin = await prisma.user.findUnique({
    where: { email: 'admin@3scam.com.tr' }
  });

  if (existingAdmin) {
    console.log('Admin already exists.');
    return;
  }

  const hashedPassword = await bcrypt.hash('Admin123!', 10);
  await prisma.user.create({
    data: {
      name: 'Yönetici',
      email: 'admin@3scam.com.tr',
      password: hashedPassword,
    }
  });

  console.log('Admin user created successfully.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
