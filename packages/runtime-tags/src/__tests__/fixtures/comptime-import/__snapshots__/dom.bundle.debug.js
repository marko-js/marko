// util/money.ts
function formatPrice(cents) {
	return `$${(cents / 100).toFixed(2)}`;
}

// util/shout.ts
function shout(word) {
	return `${word.toUpperCase()}!`;
}

// template.marko
const $template = "<h1> </h1><p>list price <!></p><p>your price <!></p>";
const $walks = "D lDb%lDb%l";
const fmt = formatPrice;
const exclaim = shout;
function $setup($scope) {
	_text($scope["#text/0"], exclaim("logo tee"));
	_text($scope["#text/1"], fmt(2400));
}
const $input_cents = ($scope, input_cents) => _text($scope["#text/2"], formatPrice(input_cents));
const $input = ($scope, input) => $input_cents($scope, input.cents);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
