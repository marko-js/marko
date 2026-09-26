// tags/card.marko
const $template$2 = "<button id=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button id=toggle>toggle</button><!><!>" });
var card_default = _template_patch("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_value($scope0_id, "__tests__/tags/card.marko1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/tags/card.marko0", input.content);
}, 0, 0);

// tags/heading.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({ "__tests__/tags/heading.marko": "__tests__/tags/heading.marko;b%;<!><!><!>" });
var heading_default = _template_patch("__tests__/tags/heading.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_type = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_depth__closures = new Set();
	const $tag = input.type;
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, _content_resume("__tests__/tags/heading.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`depth ${_patch_text($scope1_id, "#text/0", input.depth, 2, $scope0_reason, 2)}`);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_depth__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/heading.marko", "1:4"), _client_guard($scope0_reason, 2) && "__tests__/tags/heading.marko_1_input_depth#4/subscribe");
	}, $scope0_id, ($scope) => [{ input_depth: input.depth }]), 0, $sg__input_type, _patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, "__tests__/tags/heading.marko_1*content", 0, $scope0_reason, 1));
	$scope0_page && _scope($scope0_id, {
		input_depth: _source_if($scope0_reason, 1) && input.depth,
		"ClosureScopes:input_depth": $input_depth__closures
	}, "__tests__/tags/heading.marko", 0, { input_depth: ["input.depth"] });
}, 0, 1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `b/${_w0}&b`)("b%c"), ((_w0) => `<!>${_w0}<!>`)($template$1)) });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	heading_default({
		type: card_default,
		depth: input.depth
	});
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [heading_default]);
