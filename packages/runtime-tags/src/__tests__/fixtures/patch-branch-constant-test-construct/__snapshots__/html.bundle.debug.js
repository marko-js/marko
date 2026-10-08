// tags/panel.marko
const $template$2 = "<section><h2>Panel</h2><div class=aside><!></div></section>";
const $walks$2 = "DbD%m";
_shells({ "__tests__/tags/panel.marko": "__tests__/tags/panel.marko;DbD%;<section><h2>Panel</h2><div class=aside><!></div></section>" });
var panel_default = _template_patch("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_aside = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section><h2>Panel</h2><div class=aside>");
	const $tag = input.aside;
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $wg__input_aside, void 0, _patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</div></section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/panel.marko", 0);
});

// page.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const ITEMS = ["a", "b"];
_shells({
	"__tests__/page.marko_2*content": "__tests__/page.marko_2*content;D l%;<span> </span><!><!>",
	"__tests__/page.marko": "__tests__/page.marko;b%;<!><!><!>",
	"__tests__/page.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/page.marko_1*shell;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2)};${_w0}`)($template$2),
	"__tests__/page.marko_3*shell": "__tests__/page.marko_3*shell;b%;<!><!><!>",
	"__tests__/page.marko_4*shell": "__tests__/page.marko_4*shell,<p>down</p>",
	"__tests__/page.marko_5*shell": "__tests__/page.marko_5*shell,<p>up</p>"
});
var page_default = _template_patch("__tests__/page.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_down = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_down__closures = new Set();
	_for_of(ITEMS, (m) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		panel_default({ aside: attrTag({ content: _content_elide("__tests__/page.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<span>${_patch_text($scope2_id, "#text/0", m, void 0, 0, 0)}</span>`);
			_if(() => {
				if (m === "b") {
					const $scope3_id = _scope_id();
					_if(() => {
						if (input.down) {
							const $scope4_id = _scope_id();
							_html("<p>down</p>");
							$scope0_page && _scope($scope4_id, {}, "__tests__/page.marko", "7:10");
							return 0;
						} else {
							const $scope5_id = _scope_id();
							_html("<p>up</p>");
							$scope0_page && _scope($scope5_id, {}, "__tests__/page.marko", "10:10");
							return 1;
						}
					}, $scope3_id, "#text/0", 1, $wg__input_down, void 0, void 0, void 0, ["__tests__/page.marko_4*shell", "__tests__/page.marko_5*shell"], $scope0_reason, 0);
					_client_guard($scope0_reason, 0) && _patch_init($scope3_id, "__tests__/page.marko_3_input_down#0:3/init");
					$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_down__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/page.marko", "6:8"));
					return 0;
				}
			}, $scope2_id, "#text/1", 1, 0, void 0, void 0, void 0, ["__tests__/page.marko_3*shell"], 0, 0);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/page.marko", "4:6");
		}, $scope1_id) }) });
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/page.marko", "2:2");
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/page.marko_1*shell", 0, 0);
	$scope0_page && _scope($scope0_id, { "ClosureScopes:input_down/4": $input_down__closures }, "__tests__/page.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			page_default({ down: input.down });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { input_down: input.down }, "__tests__/template.marko", 0, { input_down: ["input.down"] }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "__tests__/template.marko_fill0", input.down);
}, 1);
