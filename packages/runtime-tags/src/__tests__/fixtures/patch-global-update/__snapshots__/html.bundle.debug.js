// template.marko
const $template = "<main><h1> </h1><button>read</button><p> </p></main>";
const $walks = "E l bD m";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l bD ;<main><h1> </h1><button>read</button><p> </p></main>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let read = "";
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", $global$1.brand)}</h1><button>read</button>${_el_resume($scope0_id, "#button/1")}<p>${_text_resume($scope0_id, "#text/2", read)}</p></main>`);
	_fill_global_subscribe("__tests__/template.marko_0_$global_brand#5/global", $scope0_id);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "__tests__/template.marko_fill0", read, 1);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
