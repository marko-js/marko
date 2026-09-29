// template.marko
const $template = "<p><!> <!></p><button>go</button>";
const $walks = "D%c%l b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%c%l ;<p><!> <!></p><button>go</button>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let out = "none";
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)} ${_text_resume($scope0_id, "#text/1", out, 2)}</p><button>go</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, { input_items: input.items }, "__tests__/template.marko", 0, { input_items: ["input.items"] }) : _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "input_items", input.items);
}, 1, 0);
