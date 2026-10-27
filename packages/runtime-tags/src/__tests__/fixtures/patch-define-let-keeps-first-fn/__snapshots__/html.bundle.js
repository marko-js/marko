// template.marko
const $Card_content__walks = "D l";
const $Card_content__template = "<p> </p>";
_shells({
	a: /*@__PURE__*/ (() => `a !;${((_w0) => `b/${_w0}&%c`)($Card_content__walks)};${((_w0) => `<!>${_w0}<!><!>`)($Card_content__template)}`)(),
	a2: /*@__PURE__*/ (() => `a2;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Card = { content: _content("a0", ({ opts }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
		_html(`<p>${_patch_text($scope2_id, "a", opts.fn(), void 0, (_mask_group($scope2_reason, 0) & 1) << 1, 0)}</p>`);
		$scope2_page && _scope($scope2_id, {});
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	Card.content({ opts: _patch_live($childScope, { fn() {
		return "root:" + input.label;
	} }, $scope0_id, "e") });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope2 = _patch_child($scope1_id, "a", 1);
			Card.content({ opts: _patch_live($childScope2, { fn() {
				return "if:" + input.label;
			} }, $scope1_id, ">e") });
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a1");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.label,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 0));
}, 1);
