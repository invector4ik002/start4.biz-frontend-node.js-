const { Schema, model, Types } = require('mongoose'); 

const schema = new Schema (
   [// возможно ошибка!!!
      { 
         name_org: {
            type: String,
            // required: true,
         },
         INN: {
            type: String,
            // required: true,
         },
         type_org: {
            type: String,
            // required: true,
         },
         services: {
            type: String,
            // required: true,
         },
         name: {
            type: String,
            // required: true,
         },
         surname: {
            type: String,
            // required: true,
         },
         contacts: {
            type: String,
            // required: true,
         },
         email: {
            type: String,
            required: true,
            // unique: true,
         }   
      }
   ]
);

module.exports = model('User', schema)

