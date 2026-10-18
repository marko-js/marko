// tags/card.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
_shells({ b: "b !b0; D ;<button> </button>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let f = input.fn;
	_html(`<button>${_text_resume($scope0_id, "b", f())}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb1", f, 1);
	$scope0_page && _scope($scope0_id, {});
});

// tags/outer.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
_shells({ c: /*@__PURE__*/ ((_w0) => `c;${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1) });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	card_default({ fn: input.fn });
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(($scope0_page ? _mask_group($scope0_reason, 1) : 0) << 1);
			const $childScope = _patch_child($scope1_id, "a");
			outer_default({ fn: _resume(function() {
				return "f:" + input.label;
			}, "a0", $scope1_id) });
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: _write_if($scope0_reason, 0) && input.label }) : _filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 0) ? _patch_value($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 1)) : _patch_write($scope0_id, "we", input.label, !_server_guard($scope0_reason, 1)));
}, 1);
