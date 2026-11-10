// layout.marko
const $template = "<html><body><main><!><!></main></body></html>";
const $walks = "F%b%n";
const $setup$1 = [[], []];
_shells({
	a: "a;F%b%;<html><body><main><!><!></main></body></html>",
	a1: "a1;D ;<p> </p>"
});
var layout_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $wg__input_content = _write_guard($scope0_reason, 7), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 2), $ui__input_show__OR__input_b = _unfilled_if($scope0_reason, 1), $ui__input_show__OR__input_a = _unfilled_if($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 5), $fg__input_b = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body><main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "a", input.a + input.b, 1, $scope0_reason, 2)}</p>`);
			_patch_render($scope1_id, "a0", ((_filled_guard($scope0_reason, 5) ? " >f" : "") + (_filled_guard($scope0_reason, 6) ? " >g" : "")).slice(1), $scope0_reason, 2);
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 4);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 7);
	_html("</main>"), _trailers("</body></html>");
	$fg__input_a && $cg__input_show && _patch_render($scope0_id, "a2", "f");
	$fg__input_b && $cg__input_show && _patch_render($scope0_id, "a3", "g");
	_scope($scope0_id, {
		f: ($ui__input_show__OR__input_b || $ui__input_a__OR__input_b) && input.a,
		g: ($ui__input_show__OR__input_a || $ui__input_a__OR__input_b) && input.b
	}) || ($fg__input_a && $ui__input_show__OR__input_b && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 5)), $fg__input_b && $ui__input_show__OR__input_a && _patch_write($scope0_id, "xg", input.b, !_server_guard($scope0_reason, 6)));
}, 1);

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ b: `b${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${$template}` });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let a = 1;
	_set_scope_reason(2534 | (_updates_from($scope0_reason, 0) << 3 | _updates_from($scope0_reason, 2) << 9 | _updates_from($scope0_reason, 1) << 13));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	layout_default({
		a,
		b: input.b,
		show: input.show,
		content: _content("b1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button>inc</button>${_el_mark($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		f: a,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
