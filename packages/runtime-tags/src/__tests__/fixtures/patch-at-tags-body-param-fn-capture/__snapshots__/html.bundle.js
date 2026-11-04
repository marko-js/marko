// tags/reader.marko
_shells({ b: "b; ;<output></output>" });
var reader_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_get = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0", 1, $fg__input_get);
	_scope($scope0_id, { d: input.get }) || $fg__input_get && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// tags/wrap.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ c: "c;b%;<!><!><!>" });
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_then__OR__input_x = _write_guard($scope0_reason, 0), $ui__input_then__OR__input_x = _unfilled_if($scope0_reason, 0), $fg__input_then = _filled_guard($scope0_reason, 1), $fg__input_x = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.then, { x: input.x }, 1, 0, 0, $wg__input_then__OR__input_x, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "c0", (($fg__input_then ? " d" : "") + ($fg__input_x ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && $ui__input_then__OR__input_x && input.then,
		e: _write_if($scope0_reason, 1) && $ui__input_then__OR__input_x && input.x
	}) || ($fg__input_then && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.then, !_server_guard($scope0_reason, 1)), $fg__input_x && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.x, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_v = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_v << 1 | $uf__input_v << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	wrap_default({
		x: input.v,
		then: attrTag({ content: _content_resume("a1", ({ x }) => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_patch_write($scope1_id, "xd", x);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			reader_default({ get: _bind_resume(function() {
				return x;
			}, "a0", $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				d: x,
				a: _existing_scope($childScope)
			});
		}, $scope0_id) })
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope2) });
}, 1);
