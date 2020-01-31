const anyRouteNotFound = ('*', function(req, res, next) {
  res.status(404).send('<img src=https://http.cat/[status_code]>');
});

module.exports = anyRouteNotFound