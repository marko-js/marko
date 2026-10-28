// tags/card.marko
const $template$2 = "<button id=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $setup$2 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button id=toggle>toggle</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, { class: "x" }, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill1", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// tags/holder.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/holder.marko_1*content": "__tests__/tags/holder.marko_1*content,<em>held</em>",
	"__tests__/tags/holder.marko": "__tests__/tags/holder.marko; ;<section></section>"
});
var holder_default = _template("__tests__/tags/holder.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_mode = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const frag = { content: _content_resume("__tests__/tags/holder.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html("<em>held</em>");
	}, $scope0_id) };
	_html("<section>");
	_attr_content("#section/0", $scope0_id, input.mode ? frag.content : null, 0, void 0, $scope0_reason, 0);
	_html(`</section>${_el_resume($scope0_id, "#section/0", _mask_group($scope0_reason, 0))}`);
	$cg__input_mode && _patch_write($scope0_id, "PatchWrite:frag_content", frag?.content, 1);
	$cg__input_mode && _patch_init($scope0_id, "__tests__/tags/holder.marko_0_input_mode#3_frag_content#5/init");
	_scope($scope0_id, { frag_content: _unfilled_if($scope0_reason, 0) && frag?.content }, "__tests__/tags/holder.marko", 0, { frag_content: ["frag.content", "1:9"] });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<main><!></main><button class=m>m</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D%l b`)(" b");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&D%l b`)(" b")};${((_w0) => `${_w0}<main><!></main><button class=m>m</button>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	let m = false;
	_set_scope_reason(6);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	holder_default({ mode: m || input.mode });
	_patch_child_end();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/1", input.on ? card_default : "div", {}, 10, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.note, void 0, $scope0_reason, 3)}</em>`);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, _client_guard($scope0_reason, 3) ? "__tests__/template.marko_1_input_note#0:7/init" : "__tests__/template.marko_1_input_note#0:7/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:6"));
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_note: input.note }] : []), 0, _write_guard($scope0_reason, 2), $scope0_reason, 2);
	_html(`</main><button class=m>m</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_mode: input.mode,
		input_note: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.note,
		m,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:input_note/10": _write_if($scope0_reason, 3) && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_mode: ["input.mode"],
		input_note: ["input.note"],
		m: "3:6"
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.mode, !_server_guard($scope0_reason, 1)), _content_withhold(input.mode), _filled_guard($scope0_reason, 3) && _content_withheld("__tests__/template.marko_1*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.note, !_server_guard($scope0_reason, 3)));
}, 1);
