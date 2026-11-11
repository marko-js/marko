// tags/card/index.marko
const $template = "<section><h2> </h2><!></section>";
const $walks = "E l%l";
const $setup$1 = [[], []];
_shells({ b: "b;E l%;<section><h2> </h2><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h2>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)($walks)};${((_w0) => `<main>${_w0}</main>`)($template)}`,
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 2), $wi__input_show__OR__input_note = _write_if($scope0_reason, 0), $ui__input_note = _unfilled_if($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		title: input.title,
		content: _content("a3", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<em>${_text_mark($scope2_id, "a", input.note, 1, $scope0_reason, 3)}</em>`);
					$cg__input_note && _patch_render($scope2_id, "a0");
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_note__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_note && _scope_with_id($scope1_id) }), $cg__input_note && "a0");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 2);
			$wi__input_show__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_show && "a2", $wg__input_show);
			$wg__input_show || $wi__input_show__OR__input_note && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, {
		f: ($ui__input_show || $ui__input_note) && input.note,
		h: _write_if($scope0_reason, 3) && ($ui__input_note || $ui__input_show) && $input_note__closures,
		g: _write_if($scope0_reason, 2) && $ui__input_show && $input_show__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 3) && $ui__input_show && _patch_write($scope0_id, "xf", input.note, !_server_guard($scope0_reason, 3)) && $cg__input_show && _patch_subscribers($scope0_id, "a4", "f");
}, 1);
