// template.marko
const $template = "<button>go</button><!><!>";
const $walks = " b%c";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;b%;<!><!><!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>go</button><!><!>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell; D ;<a> </a>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const params = $global$1.data.params;
	_html(`<button>go</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", $global$1.data.items, (items) => {
			const $scope2_id = _scope_id();
			_for_of(items, (item) => {
				const $scope3_id = _scope_id();
				_html(`<a${_patch_attr($scope3_id, "#a/0", "href", `?q=${params.q.trim()}&i=${item}`)}>${_patch_text($scope3_id, "#text/1", item)}</a>${_el_resume($scope3_id, "#a/0")}`);
				_scope($scope3_id, {}, "__tests__/template.marko", "5:6");
			}, 0, $scope2_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_3*shell");
			_scope($scope2_id, {}, "__tests__/template.marko", "4:4");
		}, 1, "__tests__/template.marko_2*content", 1);
		_fill_global_subscribe("__tests__/template.marko_1_$global_data_items#3/global", $scope1_id);
	}, () => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_html("Loading");
	}, void 0, "__tests__/template.marko_4*content", void 0, "__tests__/template.marko_1*content");
	_fill_global_subscribe("__tests__/template.marko_0_$global_data_params#6/global", $scope0_id);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
