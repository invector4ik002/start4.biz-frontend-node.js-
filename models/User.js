const { Schema, model, Types } = require('mongoose'); 

const schema = new Schema ({ 

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
   // contactName: {
   //    type: String,
   //    // required: true,
   // },
   // contactPhone: {
   //    type: String,
   //    // required: true,
   // },
   // contactEmail: { // настройки поля email
   //    type: String,
   //    required: true,
   //    unique: true, 
   // },
   // contactInn: {
   //    type: String,
   //    // required: true,
   // },
   // contactRequestSubject: {
   //    type: Number,
   //    // required: true,
   // },
   // contactSubjectPurpose: {
   //    type: Number,
   //    // required: true,
   // },
   // contactSubjectDescription: {
   //    type: String,
   //    // required: true,
   // },
   // contactAdvancePayment: {
   //    type: Number,
   //    // required: true,
   // },
   // contactCreditPeriod: {
   //    type: Number,
   //    // required: true,
   // },  
});

module.exports = model('User', schema)

