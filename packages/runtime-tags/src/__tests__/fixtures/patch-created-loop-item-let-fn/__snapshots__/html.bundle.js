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
	a1: "a1;b%;<!><!><!>",
	a2: /*@__PURE__*/ ((_w0) => `a2;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_for_of([{ fn: _resume(function() {
				return "f:" + input.label;
			}, "a0", $scope1_id) }], (item) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
				const $childScope = _patch_child($scope2_id, "a");
				card_default({ opts: item });
				_scope($scope2_id, { a: _existing_scope($childScope) });
			}, 0, $scope1_id, "a", 1, void 0, void 0, void 0, void 0, "a2", $scope0_reason, 1);
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: _write_if($scope0_reason, 0) && input.label }) : _filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 0) ? _patch_value($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 1), 1) : _patch_write($scope0_id, "we", input.label, !_server_guard($scope0_reason, 1)));
}, 1);
