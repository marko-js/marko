// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<p> </p>";
_shells({ a: `a !a4;${((_w0) => `/${_w0}& b`)($Row_content__walks)};${((_w0) => `${_w0}<button>+</button>`)($Row_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.x, !_server_guard($scope0_reason, 0));
	let count = 0;
	const Row = { content: _content("a2", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__b = _filled_guard($scope1_reason, 2);
		_html(`<p>${_text_mark($scope1_id, "a", a() + b(), 1, $scope1_reason, 0)}</p>`);
		_patch_render($scope1_id, "a3", [$fg__b && "e", _filled_guard($scope0_reason, 0) && ">e"], $scope1_reason, 0);
		_scope($scope1_id, {
			d: _write_if($scope1_reason, 2) && a,
			e: _write_if($scope1_reason, 1) && b
		}) || $fg__b && _patch_write($scope1_id, "xe", b, !_server_guard($scope1_reason, 2));
	}, $scope0_id) };
	_set_scope_reason(14 | _updates_from($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({
		a: _resume(() => count, "a0", $scope0_id),
		b: _bind_resume(() => input.x, "a1", $scope0_id)
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		e: input.x,
		f: count,
		a: _existing_scope($childScope)
	});
}, 1);
