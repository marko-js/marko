// tags/one.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_attrs = _write_guard($scope0_reason, 0), $ui__input_content__OR__input_attrs = _unfilled_if($scope0_reason, 0), $ui__input_attrs = _unfilled_if($scope0_reason, 2), $ui__input_content = _unfilled_if($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 1), $fg__input_attrs = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, input.attrs, 1, 0, 0, $wg__input_content__OR__input_attrs, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "b0", (($fg__input_content ? " d" : "") + ($fg__input_attrs ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_attrs || $ui__input_content__OR__input_attrs) && input.content,
		e: ($ui__input_content || $ui__input_content__OR__input_attrs) && input.attrs
	}) || ($fg__input_content && $ui__input_attrs && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 1)), $fg__input_attrs && $ui__input_content && _patch_write($scope0_id, "xe", input.attrs, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=z>z</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_y = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let z = 0;
	_html(`<button class=z>z</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason($uf__input_y << 1 | $uf__input_y << 5);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	one_default({
		attrs: { title: input.y },
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("A");
		}, $scope0_id)
	});
	_patch_child_end();
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: z,
		b: _existing_scope($childScope)
	});
}, 1);
