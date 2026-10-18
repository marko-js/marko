// tags/card.marko
const $template = "<button> </button>";
const $walks = " D l";
_shells({ b: "b !b0; D ;<button> </button>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	const g = input.fn;
	_html(`<button>${_text_resume($scope0_id, "b", g())}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "vb2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.fn,
		f: open
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb1", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_until(input.n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(($scope0_page ? _mask_group($scope0_reason, 1) : 0) << 1);
		const $childScope = _patch_child($scope1_id, "a");
		card_default({ fn: _resume(function() {
			return "f:" + input.label;
		}, "a0", $scope1_id) });
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: input.label }) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 1));
}, 1);
