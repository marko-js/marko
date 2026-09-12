// tags/panel.marko
const $template$2 = "<section><h2>Panel</h2><div class=aside><!></div></section>";
const $walks$2 = "DbD%m";
_shells({ "__tests__/tags/panel.marko": "__tests__/tags/panel.marko;DbD%;<section><h2>Panel</h2><div class=aside><!></div></section>" });
var panel_default = _template_persisted("__tests__/tags/panel.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_aside = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section><h2>Panel</h2><div class=aside>");
	const $tag = input.aside;
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_aside, _patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, $scope0_owned, 0));
	_html("</div></section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/panel.marko", 0);
}, 0, 0);

// page.marko
const ITEMS = ["a", "b"];
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/page.marko_2*content": "__tests__/page.marko_2*content;D l%;<span> </span><!><!>",
	"__tests__/page.marko": "__tests__/page.marko;b%;<!><!><!>",
	"__tests__/page.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/page.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $template$2),
	"__tests__/page.marko_3*shell": "__tests__/page.marko_3*shell;b%;<!><!><!>",
	"__tests__/page.marko_4*shell": "__tests__/page.marko_4*shell,<p>down</p>",
	"__tests__/page.marko_5*shell": "__tests__/page.marko_5*shell,<p>up</p>"
});
var page_default = _template_persisted("__tests__/page.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_down = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_down__closures = new Set();
	_for_of(ITEMS, (m) => {
		const $scope1_id = _scope_id();
		_set_serialize_reason(0);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		panel_default({ aside: attrTag({ content: _content_elide("__tests__/page.marko_2*content", () => {
			const $scope2_reason = _persisted_reason();
			const $scope2_id = _scope_id();
			_html(`<span>${_patch_text($scope2_id, "#text/0", m)}</span>`);
			_if(() => {
				if (m === "b") {
					const $scope3_id = _scope_id();
					_if(() => {
						if (input.down) {
							const $scope4_id = _scope_id();
							_html("<p>down</p>");
							$scope0_reason && _scope($scope4_id, {}, "__tests__/page.marko", "7:10");
							return 0;
						} else {
							const $scope5_id = _scope_id();
							_html("<p>up</p>");
							$scope0_reason && _scope($scope5_id, {}, "__tests__/page.marko", "10:10");
							return 1;
						}
					}, $scope3_id, "#text/0", 1, $sg__input_down, $sg__input_down, void 0, void 0, ["__tests__/page.marko_4*shell", "__tests__/page.marko_5*shell"], $scope0_owned, 0);
					$scope0_reason && _subscribe(_unfilled_if($scope0_owned, 0) && $input_down__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/page.marko", "6:8"));
					return 0;
				}
			}, $scope2_id, "#text/1", 1, 0, 0, void 0, void 0, ["__tests__/page.marko_3*shell"]);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/page.marko", "4:6");
		}, $scope1_id) }) });
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/page.marko", "2:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 0, void 0, void 0, "__tests__/page.marko_1*shell", 0, 0);
	$scope0_reason && _scope($scope0_id, { "ClosureScopes:input_down": $input_down__closures }, "__tests__/page.marko", 0);
}, 0, () => [panel_default]);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			page_default({ down: input.down });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	$scope0_reason && _scope($scope0_id, { input_down: input.down }, "__tests__/template.marko", 0, { input_down: ["input.down"] });
}, 1, () => [page_default]);
