function AsyncFragment(asyncWriter) {
    this.asyncWriter = asyncWriter;
    this.finished = false;
    logChangesToNextAndPrev(this);
}

AsyncFragment.prototype = {
    end: function () {
        if (!this.finished) {
            // Make sure end is only called once by the user
            this.finished = true;
            this.flush();
        }
    },
    flush: function (flusher) {
        if (!this.finished || this.asyncWriter.writer != this.asyncWriter._stream) {
            debug('(skipflush)', this.asyncWriter.name, this.asyncWriter.writer.id, this.asyncWriter._stream.id);
            return;
        }
        debug('(af-'+this.asyncWriter.name+').flush()', this.asyncWriter.writer.id);
        var writer = this.asyncWriter.writer;
        this.writer = this.asyncWriter.writer = voidWriter; // Prevent additional out-of-order writes
        flushNext(this, writer, flusher || this);
    }
};

function BufferedFragment(asyncWriter, buffer) {
    this.asyncWriter = asyncWriter;
    this.buffer = buffer;
    this.buffer.fragment = this;
    logChangesToNextAndPrev(this);
}

BufferedFragment.prototype = {
    flush: function (flusher) {
        var writer = this.asyncWriter.writer;
        var bufferedString = this.buffer.toString();

        debug('(bf-'+this.buffer.id+').flush('+bufferedString+') to '+writer.id);

        if (bufferedString.length !== 0) {
            writer.write(bufferedString);
        }

        flushNext(this, writer, flusher);
    }
};

var voidWriter = {
    id:'void',
    write: function() {}
};

function logChangesToNextAndPrev(fragment) {
    Object.defineProperty(fragment, "next", {
        get: function () { return fragment.__nextFragment; },
        set: function (f) {
            var message = ''
            if (fragment instanceof BufferedFragment) {
                message += '(bf-'+fragment.buffer.id+')';
            } else {
                message += '(af-'+fragment.asyncWriter.name+')';
            }

            message += '.next: ';

            if (f) {
                if (f instanceof BufferedFragment) {
                    message += '(bf-'+f.buffer.id+')';
                } else {
                    message += '(af-'+f.asyncWriter.name+')';
                }
            } else {
                message += 'null'
            }

            if (fragment.__nextFragment) {
                message += '; was '
                if (fragment.__nextFragment instanceof BufferedFragment) {
                    message += '(bf-'+fragment.__nextFragment.buffer.id+')';
                } else {
                    message += '(af-'+fragment.__nextFragment.asyncWriter.name+')';
                }
            }

            debug(message);
            fragment.__nextFragment = f;
        },
    });
    Object.defineProperty(fragment, "prev", {
        get: function () { return fragment.__prevFragment; },
        set: function (f) {
            var message = ''
            if (fragment instanceof BufferedFragment) {
                message += '(bf-'+fragment.buffer.id+')';
            } else {
                message += '(af-'+fragment.asyncWriter.name+')';
            }

            message += '.prev: ';

            if (f) {
                if (f instanceof BufferedFragment) {
                    message += '(bf-'+f.buffer.id+')';
                } else {
                    message += '(af-'+f.asyncWriter.name+')';
                }
            } else {
                message += 'null'
            }

            if (fragment.__prevFragment) {
                message += '; was '
                if (fragment.__prevFragment instanceof BufferedFragment) {
                    message += '(bf-'+fragment.__prevFragment.buffer.id+')';
                } else {
                    message += '(af-'+fragment.__prevFragment.asyncWriter.name+')';
                }
            }

            debug(message);
            fragment.__prevFragment = f;
        },
    });
}

function flushNext(fragment, writer, flusher) {
    var next = fragment.next;
    if (next && fragment.asyncWriter.finished) {
        next.asyncWriter.writer = writer;
        // Update the next fragment to use the original writer
        next.flush(flusher);
        // Now flush the next fragment (if it is not finish then it will just do nothing)
    } else if (flusher.prev) {
        // Splice out what we've just flushed over
        flusher.prev.next = next;
        if (next) next.prev = flusher.prev
    }
}

exports.AsyncFragment = AsyncFragment;
exports.BufferedFragment = BufferedFragment;