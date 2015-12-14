import mongoose from 'mongoose';

var userSchema = new mongoose.Schema({
  name: String
});

userSchema.statics.getPage = function (page, pageSize, searchTerm, sortColumn, sortType) {
  var searchParams = searchTerm ? {name: new RegExp(searchTerm, "i")} : {};
  var query = User.find(searchParams, null, {skip: (page - 1) * pageSize, limit: pageSize});
  if (sortColumn) {
    query = query.sort((sortType == -1 ? "-" : "") + sortColumn);
  }
  return query.exec();
};

userSchema.statics.getCount = function (searchTerm) {
  var searchParams = searchTerm ? {name: new RegExp(searchTerm, "i")} : {};
  return User.count(searchParams).exec();
};

var User = mongoose.model('User', userSchema);
module.exports = User;
