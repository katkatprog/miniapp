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

module.exports = router;
