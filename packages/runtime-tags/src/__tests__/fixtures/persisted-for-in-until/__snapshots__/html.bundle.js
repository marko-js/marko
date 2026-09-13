// template.marko
_shells({
	a: "a !a1;D%b%l ;<ul><!><!></ul><button>+</button>",
	a0: "a0;D ;<li> </li>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<ul>");
	if ($scope0_page) _for_in({
		a: input.label,
		b: count
	}, (k, v) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "a", k)}=${_text_resume($scope1_id, "b", v, 2)}</li>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 1);
	_for_until(input.on ? 2 : 1, 0, 1, (i) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_patch_text($scope2_id, "a", i, void 0, 0, 0)}</li>`);
		_scope($scope2_id, {});
	}, 0, $scope0_id, "b", 1, _source_guard($scope0_reason, 1), void 0, void 0, void 0, "a0", $scope0_reason, 1);
	_html(`</ul><button>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		f: input.label,
		h: count
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", input.label);
}, 1, 0);
