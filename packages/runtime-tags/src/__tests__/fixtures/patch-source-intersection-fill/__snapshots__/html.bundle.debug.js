// template.marko
const $template = "<p> </p><p> </p><button>+</button>";
const $walks = "D lD l b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D lD l ;<p> </p><p> </p><button>+</button>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let qty = 1;
	const price = input.item.price;
	const tax = input.item.price * .1;
	_html(`<p>${_patch_text($scope0_id, "#text/0", price + tax, void 0, $scope0_reason, 0)}</p><p>${_text_resume($scope0_id, "#text/1", price * qty)}</p><button>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		qty,
		price
	}, "__tests__/template.marko", 0, {
		qty: "1:6",
		price: "2:8"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/template.marko0", price);
}, 1, 0);
