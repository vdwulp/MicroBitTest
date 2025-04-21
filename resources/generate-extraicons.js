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
    . # # # .`,
  magnifier: `
    # # # . .
    # . # . .
    # # # . .
    . . . # .
    . . . . #`,
  microsoft: `
    # # . # #
    # # . # #
    . . . . .
    # # . # #
    # # . # #`,
  microbit: `
    . . . . .
    # # # # #
    # . # . #
    # # # # #
    . . . . .`,
  music: `
    . # # # #
    . # . . #
    . # . # #
    # # . # #
    # # . . .`,
  notes: `
    . . . . #
    . # . . #
    . # . # #
    # # . # #
    # # . . .`,
  horizontal: `
    # # # # #
    . . . . .
    # # # # #
    . . . . .
    # # # # #`,
  vertical: `
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    # . # . #`,
  grid: `
    # . # . #
    . . . . .
    # . # . #
    . . . . .
    # . # . #`,
  diagonal1: `
    . # . . #
    # . . # .
    . . # . .
    . # . . #
    # . . # .`,
  diagonal2: `
    # . . # .
    . # . . #
    . . # . .
    # . . # .
    . # . . #`,
  heart: `
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .`,
  house: `
    . . # . .
    . # # # .
    # # # # #
    # . # . #
    # # # . #`,
  skull: `
    . # # # .
    # # # # #
    # . # . #
    . # . # .
    . # # # .`,
  duck: `
    . . # # .
    . . # # #
    # # # # .
    # # # # .
    . # # . .`,
  dog: `
    . . . # #
    . . . # #
    # # # # .
    . # # # .
    . # . # .`,
  cat: `
    # . . # #
    # . . # #
    # # # # .
    . # # # .
    . # . # .`
}

// Check/create directories
console.log("Current directory: ", __dirname);
createPath( namespace, svgdir )


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

Object.keys(extraicons).forEach(icon => {
    const data = extraicons[icon];
    const hexLiteral = data
      .replace( /[ \n`\(\)]/gi, '' );

    const w = 5;
    const h = 5;
    const width = w * 40;
    const height = h * 40;
    var svg = `<svg xmlns="http://www.w3.org/2000/svg" height="${ width }" width="${ height }">`;
    for ( var i = 0; i < h; i++ ) {
      for ( var j = 0; j < w; j++ ) {
        const hexItemVal = hexLiteral[ ( i * 5 ) + j ] ? hexLiteral[ ( i * 5 ) + j ] == '#' : false;
        const x = j * 40;
        const y = i * 40;
        svg += `<rect y="5" x="5" width="30" height="30" rx="5" transform="translate(${ x },${ y })"
                fill="${ hexItemVal ? '#fff' : '#000' }"
                fill-opacity="${ hexItemVal ? '1.0' : '0.2' }"/>\n`;
      }
    }
    svg += `</svg>`;
  
    const svgPath = path.join( __dirname, namespace, svgdir, icon + ".svg" );
    console.log( "Creating image " + svgPath );
    fs.writeFile( svgPath, svg, { encoding: 'utf8', flag: 'w' }, function( err, result ) {
        if (err) console.log( "Error writing to " + svgPath );
    });
});
