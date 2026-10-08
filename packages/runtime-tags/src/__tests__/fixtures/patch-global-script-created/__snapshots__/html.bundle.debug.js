// tags/logger.marko
const $template$1 = "<div></div>";
const $walks$1 = "b";
_shells({ "__tests__/tags/logger.marko": "__tests__/tags/logger.marko !__tests__/tags/logger.marko_0_$global_brand#1,<div></div>" });
var logger_default = _template_patch("__tests__/tags/logger.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html("<div></div>");
	_fill_global_subscribe("__tests__/tags/logger.marko_0_$global_brand#1/global", $scope0_id, 1);
	_script($scope0_id, "__tests__/tags/logger.marko_0_$global_brand#1", 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/logger.marko", 0);
});

// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>t</button><!><!>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			logger_default({});
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "__tests__/template.marko_fill0", show, 1);
	$scope0_page && _scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
