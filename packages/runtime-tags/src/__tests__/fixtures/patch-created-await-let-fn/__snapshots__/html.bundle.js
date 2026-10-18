// tags/card.marko
const $template = "<button> </button>";
const $walks = " D l";
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

// template.marko
_shells({
	a1: /*@__PURE__*/ ((_w0) => `a1 a4;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a: "a;b%;<!><!><!>",
	a2: /*@__PURE__*/ ((_w0) => `a2 a4;${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", resolveAfter("v", 1), (v) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(($scope0_page ? _mask_group($scope0_reason, 2) : 0) << 1);
				const $childScope = _patch_child($scope2_id, "a");
				card_default({ fn: _resume(function() {
					return v + ":" + input.label;
				}, "a0", $scope2_id) });
				_patch_write($scope2_id, "wc", v, 1);
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {
					c: $wi__input_label && v,
					_: $wi__input_show__OR__input_label && _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				}), _client_guard($scope0_reason, 2) && "a4");
			}, 1, "a1");
			$wi__input_show__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a3"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.label,
		f: $wi__input_label && $input_label__closures
	}) : _filled_guard($scope0_reason, 2) && (_client_guard($scope0_reason, 1) ? _patch_value($scope0_id, "va5", input.label, !_server_guard($scope0_reason, 2)) : _patch_write($scope0_id, "we", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
