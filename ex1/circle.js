function circumference(radius) {
  return 2*radius*3.14
}

function area(radius) {
  return 3.14*radius**2
}

module.exports.circum = circumference;
module.exports.area = area;