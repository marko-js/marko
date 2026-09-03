// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", input.format(count))}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		d: input,
		e: count
	});
});

// template.marko
const formatNumber = _resume((n) => {
	return "$" + n.toFixed(2);
}, "a0");
function formatNumber2(n) {
	return "$" + n.toFixed(2);
}
_resume(formatNumber2, "a1");
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	counter_default({ format: formatNumber });
	counter_default({ format: formatNumber2 });
}, 1);
