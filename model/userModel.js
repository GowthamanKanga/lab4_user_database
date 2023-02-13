const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 4
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
      },
      message: 'Invalid email address'
    }
  },
  city: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^[a-zA-Z\s]+$/.test(value);
      },
      message: 'City name must only contain letters and spaces'
    }
  },
  website: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(value);
      },
      message: 'Invalid website URL'
    }
  },
  zipcode: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^\d{5}-\d{4}$/.test(value);
      },
      message: 'Invalid zip code format'
    }
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^\d{1}-\d{3}-\d{3}-\d{4}$/.test(value);
      },
      message: 'Invalid phone number format'
    }
  }
});

module.exports = mongoose.model('users', UserSchema);
