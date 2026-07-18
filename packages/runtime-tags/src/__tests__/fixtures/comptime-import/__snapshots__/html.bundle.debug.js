// util/money.ts
function formatPrice(cents) {
	return `$${(cents / 100).toFixed(2)}`;
}

// util/shout.ts
function shout(word) {
	return `${word.toUpperCase()}!`;
}

// template.marko
const fmt = formatPrice;
const exclaim = shout;
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_cents = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<h1>${_escape(exclaim("logo tee"))}</h1><p>list price ${_escape(fmt(2400))}</p><p>your price ${_sep($sg__input_cents)}${_escape(formatPrice(input.cents))}${_el_resume($scope0_id, "#text/2", $sg__input_cents)}</p>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
