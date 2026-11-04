// tags/badge.marko
_shells({ b: "b;Db%;<b class=badge>[<!>]</b>" });
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<b class=badge>[${_text_mark($scope0_id, "a", input.label, 2, $scope0_reason, 0)}]</b>`);
	_scope($scope0_id, {});
});

// tags/card.marko
const $template = "<section class=card><h2> </h2><button class=toggle>toggle</button><!></section>";
const $walks = "E l b%l";
const $setup = [[], ["c1"]];
_shells({ c: "c !c1;E l b%;<section class=card><h2> </h2><button class=toggle>toggle</button><!></section>" });
var card_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<section class=card><h2>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h2><button class=toggle>toggle</button>${_el_mark($scope0_id, "b")}`);
	_if(() => {}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_html("</section>");
	_script($scope0_id, "c1");
	$fg__input_title && _patch_render($scope0_id, "c0", "f");
	_patch_fill($scope0_id, "vc2", open, 1);
	_scope($scope0_id, {
		f: input.title,
		g: open
	}) || $fg__input_title && _patch_write($scope0_id, "xf", input.title, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a; ;<main></main>",
	a1: `a1${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({ title: input.title });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_title && $cg__input_show && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.title }) || $fg__input_title && $cg__input_show && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 1));
}, 1);
