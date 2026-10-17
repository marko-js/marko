// tags/b-tag.marko
const $template$1 = "<!><!><!>";
_shells({
	c: "c;b%;<!><!><!>",
	c0: "c0;b1bD ;<!><!><em> </em>"
});
var b_tag_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.n > 0) {
			const $scope1_id = _scope_id();
			const $atag_scope = _peek_scope_id();
			let x = _dynamic_tag($scope1_id, "a", a_tag_default, { n: input.n - 1 }, void 0, void 0, void 0, "c1", 1, $scope0_reason, 0);
			_var($scope1_id, "b", $atag_scope, "c1", void 0, 1);
			_html(`<em>${_text_resume($scope1_id, "c", x)}</em>`);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "c2");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_n, void 0, void 0, void 0, ["c0"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
});

// tags/a-tag.marko
const $template = /*@__PURE__*/ ((_w0) => `<span>a<!></span>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `Db%l/${_w0}&b`)("b%c");
_shells({ b: /*@__PURE__*/ (() => `b;${((_w0) => `Db%l/${_w0}&b`)("b%c")};${((_w0) => `<span>a<!></span>${_w0}<!>`)($template$1)}`)() });
var a_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>a${_patch_text($scope0_id, "a", input.n, 2, $scope0_reason, 0)}</span>`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "b");
	b_tag_default({ n: input.n });
	const $return = input.n * 10;
	$scope0_page && _scope($scope0_id, { b: _existing_scope($childScope) });
	return $return;
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a0: /*@__PURE__*/ (() => `a0;${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "a");
			a_tag_default({ n: input.n });
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && input.n }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "va1", input.n, !_server_guard($scope0_reason, 1));
}, 1);
