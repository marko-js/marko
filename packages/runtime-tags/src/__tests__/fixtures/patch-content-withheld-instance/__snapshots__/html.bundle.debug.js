// tags/frag-host.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/frag-host.marko_2*content": "__tests__/tags/frag-host.marko_2*content,",
	"__tests__/tags/frag-host.marko": "__tests__/tags/frag-host.marko !;b%;<!><!><!>",
	"__tests__/tags/frag-host.marko_1*shell": "__tests__/tags/frag-host.marko_1*shell; ;<section></section>"
});
var frag_host_default = _template("__tests__/tags/frag-host.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_note__OR__input_mode = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_for_of([0, 1], (i) => {
		const $scope1_id = _scope_id();
		const frag = { content: _content_resume("__tests__/tags/frag-host.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<em>${_patch_text($scope2_id, "#text/0", input.note, void 0, $scope0_reason, 1)}</em>`);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, _client_guard($scope0_reason, 1) ? "__tests__/tags/frag-host.marko_2_input_note#0:3/init" : "__tests__/tags/frag-host.marko_2_input_note#0:3/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope2_id, { _: $wi__input_note__OR__input_mode && _scope_with_id($scope1_id) }, "__tests__/tags/frag-host.marko", "2:4"));
		}, $scope1_id) };
		_html("<section>");
		_patch_attr_content("#section/0", $scope1_id, i || input.mode ? frag.content : null, void 0, $scope0_reason, 2);
		_html(`</section>${_el_resume($scope1_id, "#section/0", _mask_group($scope0_reason, 2))}`);
		_patch_write($scope1_id, "PatchWrite:frag_content", frag?.content, 1);
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/frag-host.marko_1_input_mode#0:4_i#2_frag_content#4/init");
		_scope($scope1_id, {
			i: _unfilled_if($scope0_reason, 2) && i,
			frag_content: _unfilled_if($scope0_reason, 2) && frag?.content,
			_: $wi__input_note__OR__input_mode && _scope_with_id($scope0_id)
		}, "__tests__/tags/frag-host.marko", "1:2", {
			i: "1:6",
			frag_content: ["frag.content", "2:11"]
		});
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/frag-host.marko_1*shell", 0, 0);
	$scope0_page ? _scope($scope0_id, {
		input_note: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.note,
		"ClosureScopes:input_note/5": _write_if($scope0_reason, 1) && $input_note__closures
	}, "__tests__/tags/frag-host.marko", 0, { input_note: ["input.note"] }) : _filled_guard($scope0_reason, 1) && _content_withheld("__tests__/tags/frag-host.marko_2*content") && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/tags/frag-host.marko_fill0", input.note, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>toggle</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let mode = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/1");
	frag_host_default({
		mode,
		note: input.note
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", mode, 1);
	$scope0_page && _scope($scope0_id, {
		mode,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { mode: "1:6" });
}, 1);
