const {Router} = require('express');
const router = Router();

router.get('/heros',(req,res) => res.json({messagge:"holaMundo"}));

module.exports = router;
