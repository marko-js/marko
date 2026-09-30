// template.marko
const $template = "<button>+</button><!><!>";
const $walks = " b%c";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_count#0:6/init;D%c%;<p><!> <!></p>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>+</button><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", count)} ${_patch_text($scope2_id, "#text/1", input.label, 2, $scope0_reason, 1)}</p>`);
				_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "__tests__/template.marko_2_input_label#0:5/init");
				_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_2_input_label#0:5/subscribe"), "__tests__/template.marko_2_count#0:6/subscribe");
			}, void 0, () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_html("caught");
			}, void 0, "__tests__/template.marko_3*content", "__tests__/template.marko_2*content");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		input_label: _unfilled_if($scope0_reason, 0) && input.label,
		count,
		"ClosureScopes:input_label/7": _unfilled_if($scope0_reason, 1) && $input_label__closures,
		"ClosureScopes:count/8": $count__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	});
}, 1, 0);
