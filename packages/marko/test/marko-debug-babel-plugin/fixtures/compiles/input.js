var Or = 'MARKO_DEBUG' || 'or'
var And = 'MARKO_DEBUG' && 'and'
var NegateOr = !'MARKO_DEBUG' || 'negate or'
var NegateAnd = !'MARKO_DEBUG' && 'negate and'

if ('MARKO_DEBUG') {
    'if'
}

if ('MARKO_DEBUG') 'if';
else 'else';

if ('MARKO_DEBUG') {
    'if'
} else {
    'else'
}

if ('MARKO_DEBUG') {
    'if'
} else if (true) {
    'else if'
} else {
    'else'
}

if (!'MARKO_DEBUG') {
    'negated if'
}

if (!'MARKO_DEBUG') 'negated if';
else 'negated else';

if (!'MARKO_DEBUG') {
    'negated if'
} else {
    'negated else'
}

if (true) {
    'negated if'
} else if (!'MARKO_DEBUG') {
    'negated else if'
} else {
    'negated else'
}

'MARKO_DEBUG' ? 'consequent' : 'alternate'
!'MARKO_DEBUG' ? 'negated consequent' : 'negated alternate'
