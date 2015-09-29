module.exports = function FixLinks( data , callback) {
  var regex = / href=\"([A-Za-z0-9_\/]+)\.md\"/mig;
  data.content = data.content.replace( regex , ' href="$1.html"');
  callback( null , data );
};
