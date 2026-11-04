// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<p> </p>";
_shells({ a: `a !a3;${((_w0) => `/${_w0}& b`)($Row_content__walks)};${((_w0) => `${_w0}<button>+</button>`)($Row_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const Row = { content: _content("a1", ({ fn, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__label = _filled_guard($scope1_reason, 2);
		_html(`<p>${_text_mark($scope1_id, "a", fn() + label, 1, $scope1_reason, 0)}</p>`);
		_patch_render($scope1_id, "a2", $fg__label && "e", $scope1_reason, 0);
		_scope($scope1_id, {
			d: _write_if($scope1_reason, 2) && fn,
			e: _write_if($scope1_reason, 1) && label
		}) || $fg__label && _patch_write($scope1_id, "xe", label, !_server_guard($scope1_reason, 2));
	}, $scope0_id) };
	_set_scope_reason(14 | _updates_from($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({
		fn: _resume(() => count, "a0", $scope0_id),
		label: input.label
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		f: count,
		a: _existing_scope($childScope)
	});
}, 1);
