// template.marko
const $Card_content__walks = "b%c";
const $Card_content__template = "<!><!><!>";
_shells({
	a0: "a0;D ;<p> </p>",
	a: "a !;b%;<!><!><!>",
	a1: /*@__PURE__*/ (() => `a1;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Card = { content: _content("a2", ({ promise }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_await($scope2_id, "a", promise, (x) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_text_resume($scope3_id, "a", x, 1, $scope2_reason, 0)}</p>`);
			_scope($scope3_id, {});
		}, 1, "a0", _unfilled_if($scope2_reason, 0) && 2);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Card.content({ promise: input.p });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a3");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.p }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.p, !_server_guard($scope0_reason, 1));
}, 1);
