const { PrismaClient } = require('@prisma/client');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const prisma = new PrismaClient();
  const memoList = await prisma.memo.findMany();
  console.log(memoList);
  prisma.$disconnect();
  res.render('index', { title: 'Express', memoList });
});

/* POST home page. */
router.post('/', async function(req, res, next) {
  console.log(req.body.title);
  console.log(req.body.content);

  const prisma = new PrismaClient();
  await prisma.memo.create({
    data: {
      title: req.body.title,
      content: req.body.content
    }
  });
  prisma.$disconnect();
  res.redirect('/');
});

module.exports = router;
