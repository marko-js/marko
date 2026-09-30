// tags/plain-child.marko
const $template$1 = "<p>t=<!></p>";
const $walks$1 = "Db%l";
_shells({ "__tests__/tags/plain-child.marko": "__tests__/tags/plain-child.marko;Db%;<p>t=<!></p>" });
var plain_child_default = _template_patch("__tests__/tags/plain-child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p>t=${_patch_text($scope0_id, "#text/0", input.a + input.b, 2, $scope0_reason, 0)}</p>`);
	_patch_write($scope0_id, "input_a", input.a, 1);
	_patch_write($scope0_id, "input_b", input.b, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/plain-child.marko_0_input_a#3_input_b#4/init");
	$scope0_page && _scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b
	}, "__tests__/tags/plain-child.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	});
}, 0, 0);

// template.marko
const $template = "<button>+</button><!><!>";
const $walks = " b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>+</button><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell __tests__/template.marko_1_tab#0:6/init;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1)
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let tab = 0;
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(14 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			plain_child_default({
				a: tab,
				b: input.x
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_x: _source_if($scope0_reason, 0) && input.x,
		tab
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		tab: "1:6"
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "__tests__/template.marko_fill0", input.x);
}, 1, () => [plain_child_default]);
