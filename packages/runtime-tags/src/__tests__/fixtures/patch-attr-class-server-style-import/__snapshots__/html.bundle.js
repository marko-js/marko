// template.marko
_shells({
	a: "a !a1; b%b D ;<div></div><!><button> </button>",
	a0: "a0; ;<span></span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div${_attr_class("box", $scope0_id, "aa$class", 0, 0)}></div>${_el_resume($scope0_id, "a", 0)}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span${_attr_class("box", $scope1_id, "aa$class", 0, 0)}></span>${_el_resume($scope1_id, "a", 0)}`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	_html(`<button>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { h: count });
}, 1);
