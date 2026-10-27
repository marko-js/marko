// tags/widget/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko;D ;<em> </em>" });
var widget_default = _template("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_patch_text($scope0_id, "#text/0", $global$1.brand)}</em>`);
	_fill_global_subscribe("__tests__/tags/widget/index.marko_0_$global_brand#4", $scope0_id);
	_scope($scope0_id, {}, "__tests__/tags/widget/index.marko", 0);
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
			_patch_child($scope1_id, "#childScope/0", 0);
			widget_default({});
			_patch_child_end();
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
