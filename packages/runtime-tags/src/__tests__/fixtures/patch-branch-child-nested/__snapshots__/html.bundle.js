// tags/badge.marko
_shells({ b: "b;Db%;<b class=badge>[<!>]</b>" });
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<b class=badge>[${_text_resume($scope0_id, "a", input.label, 2, $scope0_reason, 0)}]</b>`);
	_scope($scope0_id, {});
});

// tags/card.marko
const $template = "<section class=card><h2> </h2><button class=toggle>toggle</button><!></section>";
const $walks = "E l b%l";
const $setup = [[], ["c0"]];
_shells({ c: "c !c0;E l b%;<section class=card><h2> </h2><button class=toggle>toggle</button><!></section>" });
var card_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<section class=card><h2>${_text_resume($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h2><button class=toggle>toggle</button>${_el_resume($scope0_id, "b")}`);
	_if(() => {}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_html("</section>");
	_script($scope0_id, "c0");
	_patch_fill($scope0_id, "vc2", open, 1);
	_scope($scope0_id, {
		f: input.title,
		g: open
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc1", input.title, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a !; ;<main></main>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "a", 0);
			card_default({ title: input.title });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.title }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.title, !_server_guard($scope0_reason, 1));
}, 1);
