var fs = require('fs');
var path = require('path');

var namespace = "extraicons";
var pngdir = "png";
var jresdir = "..";

// Read images and encode
var jresicons = ``;
var p = path.join( __dirname, namespace, pngdir );
console.log( "Reading directory " + p );
var files = fs.readdirSync( p );
for ( var i = 0; i < files.length; i++ ) {
  var file = files[i];
  var iconname = file.substring( 0, file.length - 4 );
  var pngfile = path.join( __dirname, namespace, pngdir, file );
  console.log( "Reading file " + pngfile );
  var pngencoded = fs.readFileSync( pngfile, { encoding: 'base64' } );
  jresicons += `  "${iconname}": {\n`;
  jresicons += `    "icon": "data:image/png;base64,${pngencoded}"\n`;
  jresicons += `  }`;
  if ( i < files.length - 1 ) jresicons += `,`;
  jresicons += `\n`;
}

// Combine into JRES
var jres  = `{\n`;
    jres += `  "*": {\n`;
    jres += `    "namespace": "${namespace}",\n`;
    jres += `    "dataEncoding": "base64"\n`;
    jres += `  },\n`;
    jres += jresicons;
    jres += `}`;

// Write JRES to file
const jrespath = path.join( __dirname, jresdir, namespace + ".jres" );
console.log( "Creating JRES file " + jrespath );
fs.writeFile( jrespath, jres, { encoding: 'utf8', flag: 'w' }, function( err, result ) {
  if (err) console.log( "Error writing to " + jrespath );
});
