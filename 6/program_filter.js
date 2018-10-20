
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
var fs = require('fs')
var path = require('path')
 
module.exports = function (dir, filterStr, callback) {
 
  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)
 
    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })
 
    callback(null, list)
  })
}