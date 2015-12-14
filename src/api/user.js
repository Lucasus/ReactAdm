/* GET home page. */
exports.get = function(req, res, next){
  if(req.query.id)
  {
    req.models.User.findById(req.query.id).exec()
      .then(function(user){
        res.send(user);
      }).onReject(err => next(err));
  }
  else
  {
    var pageSize = 5;
    var totalUsers;

    req.models.User.getCount(req.query.searchTerm)
      .then(function(count){
        totalUsers = count;
        return req.models.User.getPage(Number(req.query.page), pageSize, req.query.searchTerm, req.query.sortColumn, req.query.sortType);
      })
      .then(function(users){
        res.send({
          items: users,
          searchTerm: req.query.searchTerm,
          sortColumn: req.query.sortColumn,
          sortType: req.query.sortType,
          pageSize: pageSize,
          page: req.query.page,
          totalRecordsCount: totalUsers
        });
      }).onReject(err => {
      next(err);
    });
  }
};

exports.details = function(req, res, next){
  req.models.User.findOne({ name: req.params.name }).exec()
    .then(function(user){
      res.send(user);
    }).onReject(err => next(err))
};

exports.add = function(req, res, next){
  if (!req.body) {
    return next(new Error('No user payload.'));
  }
  req.models.User.create(req.body).exec()
    .then(function(user){
      res.send(user);
    }).onReject(err => next(err));
};

exports.edit = function(req, res, next) {
  if (!req.params.id) {
    return next(new Error('No user ID.'));
  }
  req.models.User.findById(req.params.id).exec()
    .then(function (user) {
      return user.update({$set: req.body}).exec();
    })
    .then(function (count) {
      res.send({affectedCount: count});
    }).onReject(err => next(err));
};

exports.delete = function(req, res, next){
  req.models.User.findById(req.params.id).exec()
    .then(function(user){
      if (!user) {
        throw new Error('article not found');
      }
      return user.remove().exec();
    })
    .then(function(doc){
      res.send(doc);
    }).onReject(err => next(err));
};



