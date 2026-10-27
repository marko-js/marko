// tags/field.marko
const $template = "<label> </label><input>";
const $walks = " D l b";
const $setup = [[], []];
_shells({ b: "b; D l ;<label> </label><input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const uid = _id("A");
	_html(`<label${_patch_attr($scope0_id, "aa$for", "for", uid, 0, 0)}>${_patch_text($scope0_id, "b", input.name, void 0, $scope0_reason, 0)}</label>${_el_resume($scope0_id, "a", 0)}<input${_patch_attr($scope0_id, "ac$id", "id", uid, 0, 0)}${_patch_attr($scope0_id, "ac$aria-describedby", "aria-describedby", input.headingId, $scope0_reason, 1)}>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 1))}`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a !; b%;<h2>Fields</h2><!><!>",
	a1: "a1;b%;<!><!><!>",
	a0: /*@__PURE__*/ (() => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup], ["b>", $setup]))};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks, $walks)};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template, $template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_visible__OR__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const headingId = _id("A");
	_html(`<h2${_patch_attr($scope0_id, "aa$id", "id", headingId, 0, 0)}>Fields</h2>${_el_resume($scope0_id, "a", 0)}`);
	_if(() => {
		if (input.visible !== false) {
			const $scope1_id = _scope_id();
			_for_of(input.items, (item) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(0);
				const $childScope = _patch_child($scope2_id, "a", 0);
				field_default({
					name: item.key,
					headingId
				});
				_patch_child_end();
				_set_scope_reason(0);
				const $childScope2 = _patch_child($scope2_id, "b", 1);
				field_default({
					name: item.key,
					headingId
				});
				_patch_child_end();
				$scope0_page && _scope($scope2_id, {
					_: $wi__input_visible__OR__input_items && _scope_with_id($scope1_id),
					a: _existing_scope($childScope),
					b: _existing_scope($childScope2)
				});
			}, "key", $scope1_id, "a", 1, void 0, void 0, void 0, void 0, "a0", $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a2");
			$scope0_page && _scope($scope1_id, { _: $wi__input_visible__OR__input_items && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a1"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.items,
		g: _unfilled_if($scope0_reason, 0) && headingId
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.items, !_server_guard($scope0_reason, 2));
}, 1);
