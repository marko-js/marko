var index = require('./')
var streamId = 0;

Object.keys(index).forEach(function(key) {
    exports[key] = index[key];
})

exports.create = function(writer, options) {
    var asyncStream = index.create.apply(index, arguments);
    var state = {
        bufferId: 0,
        substreamId: 0
    }

    if(arguments.length === 1 && typeof writer.write !== 'function') {
        options = writer;
        writer = null;
    }

    asyncStream.name = (options && options.name) || 'originalStream'+(streamId++ ? streamId : '');
    asyncStream.on('finish', function() {
        streamId--;
    });

    asyncStream.writer.name = 'originalWriter';

    console.log('\n' + bold(asyncStream.name + green('.create()')));
    console.log(createDiagram(asyncStream));

    logEvents(asyncStream, state);

    return asyncStream;
}

function logEvents(asyncStream, state) {
    var _write = asyncStream.write;
    asyncStream.write = function(str) {
        var thisStream = _write.apply(this, arguments);
        console.log('\n' + bold(this.name + cyan('.write(') + grey(str) + cyan(')')));
        console.log(createDiagram(this));
        return thisStream;
    }

    var _beginAsync = asyncStream.beginAsync;
    asyncStream.beginAsync = function() {
        var newStream = _beginAsync.apply(this, arguments);
        newStream.name = newStream.name || 'stream'+(++state.substreamId);
        this.writer.name = 'buffer'+(++state.bufferId);
        console.log('\n' + bold(newStream.name + grey(' = ') + this.name + green('.beginAsync()')));
        console.log(createDiagram(this));
        logEvents(newStream, state);
        return newStream;
    }

    var _end = asyncStream.end;
    asyncStream.end = function() {
        var thisStream = _end.apply(this, arguments);
        console.log('\n' + bold(this.name + red('.end()')));
        console.log(createDiagram(this));
        return thisStream;
    }
}

function createDiagram(asyncStream) {
    var streams = [];
    var writers = [];
    var contents = [];

    var currentWriter = asyncStream._originalWriter;

    while(currentWriter) {
        var currentIndex = writers.length;

        writers.push(currentWriter.name);
        contents.push(currentWriter.toString());

        if(currentWriter.stream) {
            streams[currentIndex] = currentWriter.stream.name;
        }

        if(currentWriter.stream === asyncStream) {
            streams[currentIndex] += '*'
        }

        currentWriter = currentWriter.next;
    }

    var line1 = '';
    var line2 = '';
    var line3 = '';
    var line4 = '';

    writers.forEach(function(writer, i) {
        var stream = streams[i] || '';
        var content = contents[i] || '';
        var longest = Math.max(writer.length, stream.length, content.length);

        line1 += stream + ' '.repeat(longest-stream.length);

        if(stream) {
            line2 += '↕' + ' '.repeat(longest-1);
        } else {
            line2 += ' '.repeat(longest);
        }

        line3 += writer + ' '.repeat(longest-writer.length);
        line4 += content + ' '.repeat(longest-content.length);

        if(i !== writers.length-1) {
            line1 += '   ';
            line2 += '   ';
            line3 += ' → ';
            line4 += '   ';
        }
    })

    if(line1 === ' '.repeat(line1.length)) line1 = null;
    if(line2 === ' '.repeat(line2.length)) line2 = null;

    return '\n' + (line1 ? line1 + '\n' : '') + (line2 ? line2 + '\n' : '') + line3 + '\n' + line4 + '\n';
}

function format(str, begin, end) {
    return '\u001b['+begin+'m' + str + '\u001b['+end+'m';
}
function red(str) {
    return format(str, 31, 39);
}
function cyan(str) {
    return format(str, 36, 39);
}
function green(str) {
    return format(str, 32, 39);
}
function grey(str) {
    return format(str, 90, 39);
}
function bold(str) {
    return format(str, 1, 22);
}
