console.log('Minifying JavaScript bundles...');

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const gcc = require('google-closure-compiler-js');
const formatNumber = require('format-number')();

var buildDir = path.join(__dirname, 'build');
var bundlesDir = path.join(__dirname, 'build/bundles');
var bundlesMinDir = path.join(__dirname, 'build/bundles.min');

try {
    fs.mkdirSync(bundlesMinDir);
} catch(e) {}

var promiseChain = Promise.resolve();

function getVersion(name) {
    return require(name + '/package.json').version;
}

function leftPad(str, padding) {
    if (str.length < padding) {
        str = new Array(padding - str.length).join(' ') + str;
    }

    return str;
}



var bundleFiles = fs.readdirSync(bundlesDir);
bundleFiles.forEach((filename) => {
    if (!filename.endsWith('.js')) {
        return;
    }

    var file = path.join(bundlesDir, filename);

    var src = fs.readFileSync(file, { encoding: 'utf8' });

    const options = {
        jsCode: [{src: src}],
    };

    const out = gcc.compile(options);

    var ext = path.extname(filename);
    var nameNoExt = filename.slice(0, 0-ext.length);

    var minifiedSrc = out.compiledCode;

    var minFile = path.join(bundlesMinDir, filename);
    fs.writeFileSync(minFile, minifiedSrc, { encoding: 'utf8' });

    promiseChain = promiseChain.then(() => {
        return new Promise((resolve, reject) => {
            zlib.gzip(minifiedSrc, function(err, gzippedBuffer) {
                if (err) {
                    return reject(err);
                }

                // Compare the sizes
                var minifiedBuffer = new Buffer(minifiedSrc, 'utf8');
                // console.log(nodePath.basename(templateInfo.outputCompileMinifiedFile) + ': ' + gzippedBuffer.length + ' bytes gzipped (' + minifiedBuffer.length + ' bytes uncompressed)');


                var sizeInfo = {
                    gzipped: gzippedBuffer.length,
                    min: minifiedBuffer.length
                };

                var libVersion = getVersion(nameNoExt);
                var sizeFilename = nameNoExt + (libVersion ? '-' + libVersion : '') + '.json';

                fs.writeFileSync(path.join(buildDir, sizeFilename), JSON.stringify(sizeInfo, null, 4), { encoding: 'utf8' });

                console.log('[' + nameNoExt + ']');
                console.log('  gzip: ' + leftPad(formatNumber(sizeInfo.gzipped), 8) + ' bytes');
                console.log('   min: ' + leftPad(formatNumber(sizeInfo.min), 8) + ' bytes');
                resolve();
            });
        });
    });
});

promiseChain.then(() => {
    console.log('Minification complete.');
})