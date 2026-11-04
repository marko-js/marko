// template.marko
const $Inner_content__walks = " D l";
const $Inner_content__template = "<button> </button>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Inner_content__walks);
const $Outer_content__template = $Inner_content__template;
_shells({ a: `a;${((_w0) => `/${_w0}&`)($Outer_content__walks)};${$Outer_content__template}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Inner = { content: _content("a1", ({ fn, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__fn = _filled_guard($scope1_reason, 0);
		_html(`<button>${_text_mark($scope1_id, "b", label, 1, $scope1_reason, 1)}</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a2", 1, $fg__fn);
		_scope($scope1_id, { e: fn }) || $fg__fn && _patch_write($scope1_id, "xe", fn, 1);
	}, $scope0_id) };
	const Outer = { content: _content("a3", ({ fn, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_set_scope_reason(_updates_from($scope2_reason, 1) << 3);
		const $childScope = _peek_scope_id($scope2_id, "a", 0);
		Inner.content({
			fn,
			label
		});
		_patch_child_end();
		_scope($scope2_id, { a: _existing_scope($childScope) });
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	Outer.content({
		fn: _resume(function() {
			console.log("clicked");
		}, "a0"),
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope2) });
}, 1);
