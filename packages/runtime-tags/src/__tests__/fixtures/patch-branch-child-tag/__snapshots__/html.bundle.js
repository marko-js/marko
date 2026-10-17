// tags/badge.marko
const $template = "<span class=badge><!><!></span>";
const $walks = "D%b%l";
_shells({ b: "b;D%b%;<span class=badge><!><!></span>" });
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span class=badge>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}${_patch_text($scope0_id, "b", input.note ? ` (${_to_text(input.note)})` : "", 2, $scope0_reason, 1)}</span>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a !a2;D%b D ;<main><!><button> </button></main>",
	a0: /*@__PURE__*/ ((_w0) => `a0;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a1: "a1,<em>closed</em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 3) << 3);
			const $childScope = _patch_child($scope1_id, "a");
			badge_default({
				label: input.title,
				note: input.note
			});
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			_write_if($scope0_reason, 1) && _scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a0", "a1"], $scope0_reason, 1);
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_patch_value($scope0_id, "va5", count, 1);
	$scope0_page ? _scope($scope0_id, {
		g: _unfilled_if($scope0_reason, 1) && input.title,
		h: _unfilled_if($scope0_reason, 1) && input.note,
		i: count
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va3", input.title, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va4", input.note, !_server_guard($scope0_reason, 3)));
}, 1);
