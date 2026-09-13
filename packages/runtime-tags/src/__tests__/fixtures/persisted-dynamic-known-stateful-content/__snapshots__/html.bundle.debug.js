// card.marko
const $template$1 = "<button>+</button><!><!>";
const $walks$1 = " b%c";
_shells({ "__tests__/card.marko": "__tests__/card.marko !__tests__/card.marko_0; b%;<button>+</button><!><!>" });
var card_default = _template_persisted("__tests__/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
			_html("</section>");
			_scope($scope1_id, {}, "__tests__/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/card.marko_0");
	_patch_value($scope0_id, "__tests__/card.marko1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/card.marko0", input.content);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	card_default({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(_text_resume($scope1_id, "#text/0", input.label));
		_subscribe(_source_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
	}, $scope0_id) });
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label": $input_label__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.label);
}, 1, () => [card_default]);
