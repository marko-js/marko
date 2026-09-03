// tags/price.marko
var price_default = _template("__tests__/tags/price.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.format(input.value), $sg__input)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/price.marko", 0);
});

// template.marko
const formatNumber = (n) => {
	return "$" + n.toFixed(2);
};
function formatNumber2(n) {
	return "$" + n.toFixed(2);
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	price_default({
		value: 1,
		format: formatNumber
	});
	price_default({
		value: 1.1111,
		format: formatNumber2
	});
}, 1);
