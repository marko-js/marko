// tags/card.marko
const $template$2 = "<button id=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $setup$2 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button id=toggle>toggle</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			$scope0_page && _scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// tags/heading.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/heading.marko_1*content": "__tests__/tags/heading.marko_1*content;b%;depth <!>",
	"__tests__/tags/heading.marko": "__tests__/tags/heading.marko !;b%;<!><!><!>"
});
var heading_default = _template("__tests__/tags/heading.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_type = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_depth__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.type, {}, 2, _content_resume("__tests__/tags/heading.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`depth ${_patch_text($scope1_id, "#text/0", input.depth, 2, $scope0_reason, 2)}`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "__tests__/tags/heading.marko_1_input_depth#0:4/init" : "__tests__/tags/heading.marko_1_input_depth#0:4/subscribe");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_depth__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/tags/heading.marko", "1:4"));
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_depth: input.depth }] : []), 0, $wg__input_type, $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		input_depth: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.depth,
		"ClosureScopes:input_depth/5": _write_if($scope0_reason, 2) && $input_depth__closures
	}, "__tests__/tags/heading.marko", 0, { input_depth: ["input.depth"] }) : _filled_guard($scope0_reason, 2) && _content_withheld("__tests__/tags/heading.marko_1*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/heading.marko_fill0", input.depth, !_server_guard($scope0_reason, 2));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	heading_default({
		type: card_default,
		depth: input.depth
	});
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
