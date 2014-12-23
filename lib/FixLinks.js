module.exports = function FixLinks( data , callback) {
  var regex = / href=\"(\w+)\.md\"/mig;
  data.content = data.content.replace( regex , ' href="$1.html"');
  callback( null , data );
};
