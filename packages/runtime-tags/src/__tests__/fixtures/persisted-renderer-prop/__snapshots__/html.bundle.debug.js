// tags/panel/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/panel/index.marko": "__tests__/tags/panel/index.marko !;b%;<!><!><!>",
	"__tests__/tags/panel/index.marko_1*shell": "__tests__/tags/panel/index.marko_1*shell;b%;<!><!><!>"
});
var panel_default = _template_persisted("__tests__/tags/panel/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_body = _source_guard($scope0_reason, 2), $scope0_page = _page_render(), $sg__input_open = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			const $tag = input.body;
			_dynamic_tag($scope1_id, "#text/0", $tag, {}, 0, 0, $sg__input_body, _patch_dynamic_tag($scope1_id, "#text/0", $tag, 0, 0, 0, $scope0_reason, 2));
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel/index.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_open, $sg__input_open, void 0, void 0, ["__tests__/tags/panel/index.marko_1*shell"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { input_body: input.body }, "__tests__/tags/panel/index.marko", 0, { input_body: ["input.body"] }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "__tests__/tags/panel/index.marko0", input.body);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)("b%c"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let count = 0;
	const extra = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"));
	}, $scope0_id) };
	_html("<main>");
	const $childScope = _peek_scope_id();
	if ($scope0_page || _must_render(panel_default)) {
		_set_serialize_reason(10);
		_patch_child($scope0_id, "#childScope/0", $childScope);
		panel_default({
			body: extra,
			open: count % 2 === 0
		});
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_title: input.title,
		count,
		"ClosureScopes:input_title": $input_title__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _content_withheld("__tests__/template.marko_1*content") && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
}, 1, () => [panel_default]);
