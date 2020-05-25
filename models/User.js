const { Schema, model, Types } = require('mongoose'); 

const schema = new Schema ({ 
   contactName: {
      type: String,
      // required: true,
   },
   contactPhone: {
      type: String,
      // required: true,
   },
   contactEmail: { // настройки поля email
      type: String,
      required: true,
      unique: true, 
   },
   contactInn: {
      type: String,
      required: true,
   },
   contactRequestSubject: {
      type: Number,
      // required: true,
   },
   contactSubjectPurpose: {
      type: Number,
      // required: true,
   },
   contactSubjectDescription: {
      type: String,
      // required: true,
   },
   contactAdvancePayment: {
      type: Number,
      // required: true,
   },
   contactCreditPeriod: {
      type: Number,
      // required: true,
   },  
})

module.exports = model('User', schema)

