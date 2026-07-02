// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_escape(input.format(count))}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	writeScope($scope0_id, {
		input,
		count
	}, "__tests__/tags/counter.marko", 0, {
		input: 0,
		count: "1:6"
	});
	_resume_branch($scope0_id);
});

// template.marko
const formatNumber = _resume((n) => {
	return "$" + n.toFixed(2);
}, "__tests__/template.marko_0/formatNumber");
function formatNumber2(n) {
	return "$" + n.toFixed(2);
}
_resume(formatNumber2, "__tests__/template.marko_0/formatNumber2");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	counter_default({ format: formatNumber });
	counter_default({ format: formatNumber2 });
}, 1);
