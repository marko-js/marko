// tags/pass-on.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({ c: "c;b%;<!><!><!>" });
var pass_on_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_x = _write_guard($scope0_reason, 0), $ui__input_content__OR__input_x = _unfilled_if($scope0_reason, 0), $ui__input_x = _unfilled_if($scope0_reason, 2), $ui__input_content = _unfilled_if($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 1), $fg__input_x = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, [input.x], 1, 0, 1, $wg__input_content__OR__input_x, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "c0", [$fg__input_content && "d", $fg__input_x && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_x || $ui__input_content__OR__input_x) && input.content,
		e: ($ui__input_content || $ui__input_content__OR__input_x) && input.x
	}) || ($fg__input_content && $ui__input_x && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 1)), $fg__input_x && $ui__input_content && _patch_write($scope0_id, "xe", input.x, !_server_guard($scope0_reason, 2)));
});

// tags/owner.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], ["b3"]], ["a>", $setup$2]);
_shells({
	b2: "b2",
	b: `b${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`
});
var owner_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_a = _updates_from($scope0_reason, 2), $uf__input_x = _updates_from($scope0_reason, 1), $ui__input_x = _unfilled_if($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($uf__input_x << 1 | $uf__input_x << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	pass_on_default({
		x: input.x,
		content: _content_resume("b2", (x) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id(), $ui__input_a = _unfilled_if($scope0_reason, 2);
			$ui__input_a && _patch_write($scope1_id, "xc", x);
			_html(`<p>${_text_mark($scope1_id, "a", input.a + x, 1, (2 | $uf__input_a) << 1, 0)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "b0");
			_patch_render($scope1_id, "b1", [_filled_guard($scope0_reason, 2) && ">e", "c"], (2 | $uf__input_a) << 1, 0);
			_subscribe($ui__input_a && $input_a__closures, _scope($scope1_id, {
				c: $ui__input_a && x,
				_: (_write_if($scope0_reason, 0) || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
			}), _client_guard($scope0_reason, 2) && "b0");
		}, $scope0_id)
	});
	_patch_child_end();
	_script($scope0_id, "b3", 0);
	$fg__input_a && _patch_subscribers($scope0_id, "b4", "e");
	_scope($scope0_id, {
		e: ($ui__input_x || _unfilled_if($scope0_reason, 2)) && input.a,
		f: _write_if($scope0_reason, 2) && $input_a__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_a && $ui__input_x && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button>go</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_x = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let a = "c1";
	_set_scope_reason(38 | $uf__input_x << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	owner_default({
		a,
		x: input.x
	});
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | $uf__input_x << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	owner_default({
		a: input.a,
		x: input.x
	});
	_patch_child_end();
	_html(`<button>go</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
