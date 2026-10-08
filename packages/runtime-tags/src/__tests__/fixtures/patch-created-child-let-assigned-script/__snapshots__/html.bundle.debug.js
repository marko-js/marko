// tags/probe.marko
const $template$1 = "<button>probe</button>";
const $walks$1 = " b";
_shells({ "__tests__/tags/probe.marko": "__tests__/tags/probe.marko !__tests__/tags/probe.marko_0; ;<button>probe</button>" });
var probe_default = _template_patch("__tests__/tags/probe.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 5;
	const doubled = count * 2;
	_html(`<button>probe</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/probe.marko_0");
	_script($scope0_id, "__tests__/tags/probe.marko_0_count#1_doubled#2");
	_patch_value($scope0_id, "__tests__/tags/probe.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, {
		count,
		doubled
	}, "__tests__/tags/probe.marko", 0, {
		count: "1:6",
		doubled: "2:8"
	});
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template$1)
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			probe_default({});
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
