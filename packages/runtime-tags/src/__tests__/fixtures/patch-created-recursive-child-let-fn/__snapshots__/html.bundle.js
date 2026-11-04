// tags/card.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; D ;<button> </button>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fn;
	_html(`<button>${_text_mark($scope0_id, "b", f(), 1, _client_guard($scope0_reason, 0) << 1, 0, 1)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// tags/tree.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	c: "c;b%;<!><!><!>",
	c2: `c2${_shell_marker([[], []], ["a>", $setup$1], ["b>", $setup])};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$1, "b%c")};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$1, $template)}`
});
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_fn = _updates_from($scope0_reason, 2), $wg__input_depth = _write_guard($scope0_reason, 1), $ui__input_depth = _unfilled_if($scope0_reason, 1), $fg__input_fn = _filled_guard($scope0_reason, 2), $cg__input_depth = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_fn << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({ fn: input.fn });
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | $uf__input_fn << 5);
			const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
			$content({
				fn: input.fn,
				depth: input.depth - 1
			});
			_patch_child_end();
			$cg__input_depth && _patch_render($scope1_id, "c0");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "c1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_depth, 1, 0, 0, ["c2"], $scope0_reason, 1);
	$fg__input_fn && $cg__input_depth && _patch_render($scope0_id, "c1", "e");
	_scope($scope0_id, { e: _write_if($scope0_reason, 1) && ($ui__input_depth || _unfilled_if($scope0_reason, 2)) && input.fn }) || $fg__input_fn && $ui__input_depth && _patch_write($scope0_id, "xe", input.fn, !_server_guard($scope0_reason, 2));
};
var tree_default = _template("c", $content);

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: `a1${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_label << 1 | $uf__input_label << 5);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			tree_default({
				depth: 2,
				fn: function() {
					return "f:" + input.label;
				}
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, { e: _write_if($scope0_reason, 0) && input.label }) || $fg__input_label && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1));
}, 1);
