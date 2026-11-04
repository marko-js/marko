// tags/frame.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/frame.marko": "__tests__/tags/frame.marko !; ;<section></section>" });
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html("<section>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/tags/frame.marko_1_input_content#0:3/setup");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/tags/frame.marko", "2:11");
			return 0;
		}
	}, $scope0_id, "#section/0", 1, 1, 1, "</section>");
	$fg__input_content && _patch_render($scope0_id, "__tests__/tags/frame.marko_1_input_content#0:3/setup", "input_content");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/frame.marko_fill0", open, 1);
	_scope($scope0_id, { input_content: input.content }, "__tests__/tags/frame.marko", 0, { input_content: ["input.content"] }) || $fg__input_content && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><!>${_w0}<button>interactive</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}& l`)(" b");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<b> </b>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D%b/${_w0}& l`)(" b")};${((_w0) => `<main><!>${_w0}<button>interactive</button></main>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_as__OR__input_p = _write_if($scope0_reason, 0), $cg__input_q = _client_guard($scope0_reason, 3), $fg__input_p = _filled_guard($scope0_reason, 2), $fg__input_q = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_p__closures = new Set();
	const $input_q__closures = new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.as, { class: "box" }, 1, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", input.p, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_mark($scope3_id, "#text/0", v, 1, $scope0_reason, 2)}</em>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "3:6");
		}, 1, "__tests__/template.marko_3*content", _unfilled_if($scope0_reason, 2) && 2);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_p#0:6/subscribe", 1);
		$wi__input_as__OR__input_p && _subscribe(_unfilled_if($scope0_reason, 2) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:6"));
		$wi__input_as__OR__input_p && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_p: input.p }] : []), 0, _write_guard($scope0_reason, 1), $scope0_reason, 1, 0, void 0, 0, 0, "__tests__/template.marko_1*content");
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 1);
	frame_default({ content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", input.q, (w) => {
			const $scope4_id = _scope_id();
			_html(`<b>${_text_mark($scope4_id, "#text/0", w, 1, $scope0_reason, 3)}</b>`);
			_scope($scope4_id, {}, "__tests__/template.marko", "6:6");
		}, 1, "__tests__/template.marko_4*content", _unfilled_if($scope0_reason, 3) && 2);
		$cg__input_q && _patch_render($scope2_id, "__tests__/template.marko_2_input_q#0:7/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_q__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"), $cg__input_q && "__tests__/template.marko_2_input_q#0:7/subscribe", 0);
		_resume_branch($scope2_id);
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button>interactive</button>${_el_mark($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_p && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_p#6/subscribers", "input_p");
	$fg__input_q && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_q#7/subscribers", "input_q");
	_scope($scope0_id, {
		input_p: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.p,
		input_q: input.q,
		"ClosureScopes:input_p/8": _write_if($scope0_reason, 2) && $input_p__closures,
		"ClosureScopes:input_q/9": _write_if($scope0_reason, 3) && $input_q__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_p: ["input.p"],
		input_q: ["input.q"]
	}) || ($fg__input_p && (_client_branch_if("__tests__/template.marko_1*content", $scope0_id) || _client_guard($scope0_reason, 1)) && _patch_write($scope0_id, "PatchMarkedWrite:input_p", input.p, !_server_guard($scope0_reason, 2)), $fg__input_q && _patch_write($scope0_id, "PatchMarkedWrite:input_q", input.q, !_server_guard($scope0_reason, 3)));
}, 1);
