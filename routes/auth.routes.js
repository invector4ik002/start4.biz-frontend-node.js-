
const { Router } = require('express'); // подключаем спец.функцию "Router" для создания роутеров
const bcrypt = require('bcryptjs'); 
const config = require('config'); 
const jwt = require('jsonwebtoken'); 
const { check, validationResult } = require('express-validator'); 

const User = require('../models/User');
const router = Router();

router.post('/register',
   [ 
      check('email', 'Некорректный email').isEmail(),
      // check('contactInn', 'Минимальная длинна пароля 6 символов').isLength({ min: 6 }) // проверяем "password", .isLength({ min: 6 }) длинна не меньше 6 симв
   ],
   async (req, res) => { 
      try {
      const errors = validationResult(req);
      console.log(errors)
      
      if(!errors.isEmpty()) { 
         return res.status(400).json({ 
            errors: errors.array(),
            message: 'Некорректные данные при регистрации'
         })
      }

     const { email, contacts, surname, name, services, type_org, INN, name_org} = req.body;

     const condidate = await User.findOne({ email }); 

      if(condidate) {  
         return res.status(400).json({ message: 'Такой пользователь уже существует' });
      }

      // const hashedPassword = await bcrypt.hash(contactInn, 12); // шифруем пароль на 12 раундов
      const user = new User(
         { 
            email,
            contacts,
            surname,
            name,
            services,
            type_org,
            INN,
            name_org,
         },
      ); 
      console.log(user)
      await user.save();
      res.status(201).json({ message: 'Пользовыатель создан' });

   } catch (err) {
      res.status(500).json({ message: '...Error server !!!' });
   }
});

module.exports = router;