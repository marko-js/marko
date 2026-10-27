// tags/badge.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/badge.marko": "__tests__/tags/badge.marko;D ;<em> </em>" });
var badge_default = _template("__tests__/tags/badge.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_patch_text($scope0_id, "#text/0", $global$1.brand)}</em>`);
	_fill_global_subscribe("__tests__/tags/badge.marko_0_$global_brand#4", $scope0_id);
	_scope($scope0_id, {}, "__tests__/tags/badge.marko", 0);
});

// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>t</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_patch_child($scope1_id, "#childScope/0", 0);
			badge_default({});
			_patch_child_end();
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
