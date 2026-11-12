// tags/fwd.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/fwd.marko_2*content": "__tests__/tags/fwd.marko_2*content !__tests__/tags/fwd.marko_2; b%;<button class=toggle>t</button><!><!>",
	"__tests__/tags/fwd.marko_1*content": "__tests__/tags/fwd.marko_1*content",
	"__tests__/tags/fwd.marko": "__tests__/tags/fwd.marko;b%;<!><!><!>"
});
var fwd_default = _template("__tests__/tags/fwd.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_content = _write_guard($scope0_reason, 0), $cg__input_content = _client_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	const $global$1 = $global();
	const Wrap = { content: _content("__tests__/tags/fwd.marko_2*content", ({ content }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__content = _write_guard($scope2_reason, 0);
		_patch_write($scope2_id, "PatchMarkedWrite:content", content);
		let open = true;
		_html(`<button class=toggle>t</button>${_el_mark($scope2_id, "#button/0")}`);
		_if(() => {
			if (open) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "#text/0", content, {}, 0, 0, 0, $wg__content);
				_scope($scope3_id, {}, "__tests__/tags/fwd.marko", "4:4");
				return 0;
			}
		}, $scope2_id, "#text/1");
		_script($scope2_id, "__tests__/tags/fwd.marko_2");
		_patch_render($scope2_id, "__tests__/tags/fwd.marko_3_content#2:4/setup", "content");
		_patch_fill($scope2_id, "PatchFill:__tests__/tags/fwd.marko_2_open#5/fill", open, 1);
		_scope($scope2_id, {
			content,
			open
		}, "__tests__/tags/fwd.marko", "1:2", {
			content: "1:16",
			open: "2:8"
		});
	}, $scope0_id, 0) };
	_dynamic_tag($scope0_id, "#text/0", $global$1.p ? "p" : Wrap, {}, 18, _content_resume("__tests__/tags/fwd.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 10, 0, 0, $wg__input_content, $scope0_reason, 0);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "__tests__/tags/fwd.marko_1_input_content#0:3/subscribe", $cg__input_content);
		$wi__input_content && _subscribe(_unfilled_if($scope0_reason, 0) && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/fwd.marko", "6:4"), $cg__input_content && "__tests__/tags/fwd.marko_1_input_content#0:3/subscribe", $wg__input_content);
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_content: input.content }] : []), 0, $scope0_page, void 0, void 0, 0, void 0, 0, 0, "__tests__/tags/fwd.marko_1*content");
	_fill_global_subscribe("__tests__/tags/fwd.marko_0_Wrap#4_$global_p#13/subscribe", $scope0_id);
	_scope($scope0_id, { "ClosureScopes:input_content/6": $wi__input_content && $input_content__closures }, "__tests__/tags/fwd.marko", 0) || _filled_guard($scope0_reason, 0) && _client_branch_if("__tests__/tags/fwd.marko_1*content", $scope0_id) && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/tags/fwd.marko_0_input_content#3/subscribers", "input_content");
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_note = _client_guard($scope0_reason, 2), $wg__input_on = _write_guard($scope0_reason, 1), $ui__input_on = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? fwd_default : "div", {}, 2, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.note, 1, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_note#0:4/subscribe", $cg__input_note);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:6"), $cg__input_note && "__tests__/template.marko_1_input_note#0:4/subscribe");
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_note: input.note }] : []), 0, $wg__input_on, $scope0_reason, 1, 0, void 0, 0, 0, "__tests__/template.marko_1*content");
	_html("</main>");
	_scope($scope0_id, {
		input_note: _write_if($scope0_reason, 1) && ($ui__input_on || _unfilled_if($scope0_reason, 2)) && input.note,
		"ClosureScopes:input_note/5": _write_if($scope0_reason, 2) && $input_note__closures
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] }) || _filled_guard($scope0_reason, 2) && (_client_branch_if("__tests__/template.marko_1*content", $scope0_id) || $ui__input_on) && _patch_write($scope0_id, "PatchMarkedWrite:input_note", input.note, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_note#4/subscribers", "input_note");
}, 1);
