// tags/card.marko
const $template = "<p> </p>";
_shells({ b: "b;D ;<p> </p>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let o = input.opts;
	const f = o.fn;
	_html(`<p>${_text_resume($scope0_id, "a", f())}</p>`);
	_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb0", { fn: o?.fn }, 1);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const opts = { fn: _resume(function() {
		return "f:" + input.label;
	}, "a0", $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _patch_child($scope1_id, "a");
			card_default({ opts });
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		d: _write_if($scope0_reason, 1) && input.label,
		f: _unfilled_if($scope0_reason, 1) && opts
	}) : (_filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va2", opts, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wd", input.label, !_server_guard($scope0_reason, 0)));
}, 1);
