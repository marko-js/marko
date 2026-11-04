// template.marko
_shells({ a: "a !a0;bD l%b D ;<!><p> </p><!><button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const $show = input.on;
	_show_start($show, 0);
	_html(`<p>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 1)}</p>`);
	_show_end($scope0_id, "b", $show, 1, 0, 0, 1, 1, $scope0_reason, 0);
	_html(`<button>${_text_mark($scope0_id, "d", count)}</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { i: count });
}, 1);
