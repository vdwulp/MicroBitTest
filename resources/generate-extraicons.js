var fs = require('fs');
var path = require('path');

var namespace = "extraicons";
var svgdir = "svg";

const extraicons = {
  ball: ` 
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    `,
  magnifier: `
    # # # . .
    # . # . .
    # # # . .
    . . . # .
    . . . . #
    `,
  microsoft: `
    # # . # #
    # # . # #
    . . . . .
    # # . # #
    # # . # #
    `,
  microbit: `
    . . . . .
    # # # # #
    # . # . #
    # # # # #
    . . . . .
    `,
  music: `
    . # # # #
    . # . . #
    . # . # #
    # # . # #
    # # . . .
    `,
  notes: `
    . . . . #
    . # . . #
    . # . # #
    # # . # #
    # # . . .
    `,
  horizontal: `
    # # # # #
    . . . . .
    # # # # #
    . . . . .
    # # # # #
    `,
  vertical: `
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    `,
  grid: `
    # . # . #
    . . . . .
    # . # . #
    . . . . .
    # . # . #
    `,
  diagonal1: `
    . # . . #
    # . . # .
    . . # . .
    . # . . #
    # . . # .
    `,
  diagonal2: `
    # . . # .
    . # . . #
    . . # . .
    # . . # .
    . # . . #
    `,
  heart: `
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `,
  house: `
    . . # . .
    . # # # .
    # # # # #
    # . # . #
    # # # . #
    `,
  skull: `
    . # # # .
    # # # # #
    # . # . #
    . # . # .
    . # # # .
    `,
  duck: `
    . . # # .
    . . # # #
    # # # # .
    # # # # .
    . # # . .
    `,
  dog: `
    . . . # #
    . . . # #
    # # # # .
    . # # # .
    . # . # .
    `,
  cat: `
    # . . # #
    # . . # #
    # # # # .
    . # # # .
    . # . # .
    `
}

// Check/create directories
console.log("Current directory: ", __dirname);
createPath( namespace, svgdir )

// Generate SVG files
Object.keys(extraicons).forEach(icon => {
    const data = extraicons[icon];
    const hex = data
      .replace( /[ \n`\(\)]/gi, '' );

    const svg = iconToSVG( hex, 5, 5 );
  
    const svgPath = path.join( __dirname, namespace, svgdir, icon + ".svg" );
    console.log( "Creating image " + svgPath );
    fs.writeFile( svgPath, svg, { encoding: 'utf8', flag: 'w' }, function( err, result ) {
        if (err) console.log( "Error writing to " + svgPath );
    });
});


// --- FUNCTIONS ---

function createPath( namespace, dir ) {
  createDirectory( namespace );
  createDirectory( path.join( namespace, dir ) );
}

function createDirectory( dir ) {
  try {
    var p = path.join( __dirname, dir );
    if ( !fs.existsSync( p ) ) {
      console.log( "Creating directory " + p );
      fs.mkdirSync( p );
    }
  } catch (err) {
    console.error( err );
  }
}

function iconToSVG( hex, w, h ) {
  const width = w * 40;
  const height = h * 40;
  var svg = `<svg xmlns="http://www.w3.org/2000/svg" height="${ width }" width="${ height }">\n`;
  for ( var r = 0; r < h; r++ ) {
    for ( var c = 0; c < w; c++ ) {
      const on = hex[ ( r * w ) + c ] ? hex[ ( r * w ) + c ] == '#' : false;
      const x = 5 + c * 40;
      const y = 5 + r * 40;
      svg += `<rect x="${ x }" y="${ y }" width="30" height="30" rx="5" fill="${ on ? '#fff' : '#000' }" fill-opacity="${ on ? '1.0' : '0.2' }"/>\n`;
    }
  }
  svg += `</svg>`;
  return svg; 
}
