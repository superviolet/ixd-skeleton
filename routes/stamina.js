

exports.viewStamina = function(req, res) { 
  var name = req.params.name; 
  res.render("stamina");
}