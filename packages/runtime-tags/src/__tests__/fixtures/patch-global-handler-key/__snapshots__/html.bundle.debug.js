// template.marko
const $template = "<button>run</button>";
const $walks = " b";
const handlers = {
	a() {
		document.body.dataset.ran = "a";
	},
	b() {
		document.body.dataset.ran = "b";
	}
};
const $setup = [[], ["__tests__/template.marko_0_$global_mode#4"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_$global_mode#4; ;<button>run</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<button>run</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_$global_mode#4");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
