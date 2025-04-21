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
  microbit: `
    . . . . .
    # # # # #
    # . # . #
    # # # # #
    . . . . .`
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
    var path = path.join( __dirname, dir );
    if ( !fs.existsSync( path ) ) {
      console.log( "Creating directory " + path );
      fs.mkdirSync( path );
    }
  } catch (err) {
    console.error( err );
  }
}

Object.keys(extraicons).forEach(icon => {
    const data = extraicons[icon];
    const hexLiteral = data
      .replace(/[ \n`\(\)]/gi, '');

    var svg = `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="200">`;
    const width = 200;
    const height = 200;
    for (var i = 0; i < 5; i++) {
      for (j = 0; j < 5; j++) {
        const hexItemVal = hexLiteral[(i * 5) + j] ? hexLiteral[(i * 5) + j] == '#' : false;
        const x = j * (width / 5);
        const y = i * (height / 5);
        svg += `<rect y="5" x="5" width="30" height="30" rx="5" transform="translate(${x},${y})"
                fill="${hexItemVal ? '#fff' : '#000'}"
                fill-opacity="${hexItemVal ? '1.0' : '0.2'}"/>\n`;
      }
    }
    svg += `</svg>`;
  
    const svgPath = path.join( __dirname, namespace, svgdir, icon + ".svg" );
    console.log( svgPath );
    fs.writeFile( svgPath, svg, { encoding: 'utf8', flag: 'w' }, function( err, result ) {
        if (err) console.log( "Error writing to " + svgPath );
    });
  console.log( "Created " + svgPath );
});
