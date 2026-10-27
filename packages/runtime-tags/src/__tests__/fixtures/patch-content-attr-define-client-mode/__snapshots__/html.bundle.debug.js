// tags/frag-host.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/frag-host.marko_1*content": "__tests__/tags/frag-host.marko_1*content;D ;<em> </em>",
	"__tests__/tags/frag-host.marko": "__tests__/tags/frag-host.marko !; ;<section></section>"
});
var frag_host_default = _template("__tests__/tags/frag-host.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_mode = _client_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const frag = { content: _content_resume("__tests__/tags/frag-host.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.note, void 0, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "__tests__/tags/frag-host.marko_1_input_note#0:3/init" : "__tests__/tags/frag-host.marko_1_input_note#0:3/subscribe");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/tags/frag-host.marko", "1:2"));
	}, $scope0_id) };
	_html("<section>");
	_patch_attr_content("#section/0", $scope0_id, input.mode ? frag.content : null, 0, void 0, $scope0_reason, 2);
	_html(`</section>${_el_resume($scope0_id, "#section/0", _mask_group($scope0_reason, 2))}`);
	$cg__input_mode && _patch_write($scope0_id, "PatchWrite:frag_content", frag?.content, 1);
	$cg__input_mode && _patch_init($scope0_id, "__tests__/tags/frag-host.marko_0_input_mode#4_frag_content#6/init");
	$scope0_page ? _scope($scope0_id, {
		input_note: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.note,
		frag_content: _unfilled_if($scope0_reason, 2) && frag?.content,
		"ClosureScopes:input_note/8": _write_if($scope0_reason, 1) && $input_note__closures
	}, "__tests__/tags/frag-host.marko", 0, {
		input_note: ["input.note"],
		frag_content: ["frag.content", "1:9"]
	}) : _filled_guard($scope0_reason, 1) && (_content_withheld("__tests__/tags/frag-host.marko_1*content", $scope0_id) || $cg__input_mode) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/frag-host.marko_fill0", input.note, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)(" b");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)(" b")};${((_w0) => `<button>toggle</button>${_w0}`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let mode = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	frag_host_default({
		mode,
		note: input.note
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		mode,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { mode: "1:6" });
}, 1);
