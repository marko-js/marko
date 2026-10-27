// helper.ts
let thing = false;

// tags/tabs2/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/tabs2/index.marko": "__tests__/tags/tabs2/index.marko;b%;<!><!><!>",
	"__tests__/tags/tabs2/index.marko_1*shell": "__tests__/tags/tabs2/index.marko_1*shell,<div>a</div>",
	"__tests__/tags/tabs2/index.marko_2*shell": "__tests__/tags/tabs2/index.marko_2*shell,<span>b</span>"
});
var tabs2_default = _template("__tests__/tags/tabs2/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_tab_on = _write_if($scope0_reason, 0), $wg__input_tab_on = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.tab.on) {
			const $scope1_id = _scope_id();
			_html("<div>a</div>");
			$scope0_page && $wi__input_tab_on && _scope($scope1_id, {}, "__tests__/tags/tabs2/index.marko", "1:2");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<span>b</span>");
			$scope0_page && $wi__input_tab_on && _scope($scope2_id, {}, "__tests__/tags/tabs2/index.marko", "4:2");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_tab_on, void 0, void 0, void 0, ["__tests__/tags/tabs2/index.marko_1*shell", "__tests__/tags/tabs2/index.marko_2*shell"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/tabs2/index.marko", 0);
});

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			_patch_child($scope1_id, "#childScope/0", 0);
			tabs2_default({ tab: false });
			_patch_child_end();
			$scope0_page && _scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "2:6" });
}, 1);
