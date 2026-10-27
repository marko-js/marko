// template.marko
const $template = "<button> </button><p> </p><!><!>";
const $walks = " D lD l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D lD l%;<button> </button><p> </p><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count + $global$1.suffix)}</button>${_el_resume($scope0_id, "#button/0")}<p>${_text_resume($scope0_id, "#text/2", count + $global$1.suffix)}</p>`);
	if ($scope0_page) _if(() => {
		if (count) {
			const $scope1_id = _scope_id();
			_html(`<b>${_text_resume($scope1_id, "#text/0", count + $global$1.suffix)}</b>`);
			_fill_global_subscribe("__tests__/template.marko_1_copy#0:4_$global_suffix#0:8", $scope1_id, 1);
			$scope0_page && _scope($scope1_id, {}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/3", 1, 1, 0, 0, 1);
	_fill_global_subscribe("__tests__/template.marko_0_count#4_$global_suffix#8", $scope0_id, 1);
	_fill_global_subscribe("__tests__/template.marko_0_alias#3_$global_suffix#8", $scope0_id, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
