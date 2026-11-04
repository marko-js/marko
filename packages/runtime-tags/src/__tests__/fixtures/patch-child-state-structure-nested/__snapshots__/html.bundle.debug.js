// tags/panel/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/panel/index.marko": "__tests__/tags/panel/index.marko;b%;<!><!><!>",
	"__tests__/tags/panel/index.marko_1*shell": "__tests__/tags/panel/index.marko_1*shell; ;<section></section>",
	"__tests__/tags/panel/index.marko_2*shell": "__tests__/tags/panel/index.marko_2*shell;D ;<em> </em>"
});
var panel_default = _template("__tests__/tags/panel/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 4), $wg__input_inner = _write_guard($scope0_reason, 3), $wi__input_show__OR__input_inner__OR__input_title = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 2), $ui__input_inner = _unfilled_if($scope0_reason, 3), $ui__input_title = _unfilled_if($scope0_reason, 4), $ui__input_show__OR__input_inner = _unfilled_if($scope0_reason, 0), $cg__input_inner = _client_guard($scope0_reason, 3), $fg__input_inner = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<em>${_text_mark($scope2_id, "#text/0", input.title, 1, $scope0_reason, 4)}</em>`);
					_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "__tests__/tags/panel/index.marko_2_input_title#0:5/subscribe", $cg__input_title);
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_title__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_inner__OR__input_title && _scope_with_id($scope1_id) }, "__tests__/tags/panel/index.marko", "3:6"), $cg__input_title && "__tests__/tags/panel/index.marko_2_input_title#0:5/subscribe");
					return 0;
				}
			}, $scope1_id, "#section/0", 1, $wg__input_inner, 1, 0, 0, ["__tests__/tags/panel/index.marko_2*shell"], $scope0_reason, 3);
			_html(`</section>${_el_mark($scope1_id, "#section/0", $wg__input_inner)}`);
			$cg__input_inner && _patch_render($scope1_id, "__tests__/tags/panel/index.marko_1_input_inner#0:4/setup");
			$wi__input_show__OR__input_inner__OR__input_title && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel/index.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/panel/index.marko_1*shell"], $scope0_reason, 2);
	$fg__input_inner && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/panel/index.marko_1_input_inner#0:4/setup", "input_inner");
	_scope($scope0_id, {
		input_inner: ($ui__input_show || $ui__input_inner) && input.inner,
		input_title: ($ui__input_show__OR__input_inner || $ui__input_title) && input.title,
		"ClosureScopes:input_title/7": _write_if($scope0_reason, 4) && ($ui__input_title || $ui__input_show || $ui__input_inner) && $input_title__closures
	}, "__tests__/tags/panel/index.marko", 0, {
		input_inner: ["input.inner"],
		input_title: ["input.title"]
	}) || ($fg__input_inner && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_inner", input.inner, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && $ui__input_show__OR__input_inner && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 4)) && ($cg__input_show || $cg__input_inner) && _patch_subscribers($scope0_id, "__tests__/tags/panel/index.marko_0_input_title#5/subscribers", "input_title"));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("b%c")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(62 | (_updates_from($scope0_reason, 0) << 7 | _updates_from($scope0_reason, 1) << 9));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	panel_default({
		show: count % 2 === 0,
		inner: input.inner,
		title: input.title
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
