// tags/panel/index.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
_shells({
	"__tests__/tags/panel/index.marko": "__tests__/tags/panel/index.marko !;b%;<!><!><!>",
	"__tests__/tags/panel/index.marko_1*shell": "__tests__/tags/panel/index.marko_1*shell;b%;<!><!><!>"
});
var panel_default = _template_patch("__tests__/tags/panel/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_body = _source_guard($scope0_reason, 2), $scope0_page = _page_render(), $wg__input_open = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			const $tag = input.body;
			_dynamic_tag($scope1_id, "#text/0", $tag, {}, 0, 0, $wg__input_body, void 0, _patch_dynamic_tag($scope1_id, "#text/0", $tag, 0, 0, 0, $scope0_reason, 2));
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel/index.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_open, void 0, void 0, void 0, ["__tests__/tags/panel/index.marko_1*shell"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { input_body: _unfilled_if($scope0_reason, 1) && input.body }, "__tests__/tags/panel/index.marko", 0, { input_body: ["input.body"] }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "__tests__/tags/panel/index.marko_fill0", input.body);
});

// tags/card.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=b>+</button>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
_shells({ "__tests__/tags/card.marko": /*@__PURE__*/ (() => `__tests__/tags/card.marko !__tests__/tags/card.marko_0;${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button class=b>+</button>`)($template$2)}`)() });
var card_default = _template_patch("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	panel_default({
		open: count % 2 === 0,
		body: attrTag({ content: _content_resume("__tests__/tags/card.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", $global$1.brand)}</em>`);
			_fill_global_subscribe("__tests__/tags/card.marko_1_$global_brand#2/global", $scope1_id);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:4");
		}, $scope0_id) })
	});
	_html(`<button class=b>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_value($scope0_id, "__tests__/tags/card.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/card.marko", 0, { count: "1:6" });
});

// template.marko
const $template = "<button class=a>s</button><!><!>";
const $walks = " b%c";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button class=a>s</button><!><!>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button class=a>s</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			card_default({});
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "__tests__/template.marko_fill0", show, 1);
	$scope0_page && _scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
