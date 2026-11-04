// template.marko
const $template = "<p> </p><p> </p><button>+</button>";
const $walks = "D lD l b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D lD l ;<p> </p><p> </p><button>+</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item_price = _server_guard($scope0_reason, 0), $fg__input_item_price = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let qty = 1;
	const price = input.item.price;
	const tax = input.item.price * .1;
	_html(`<p>${_text_mark($scope0_id, "#text/0", price + tax, 1, $scope0_reason, 0)}</p><p>${_text_mark($scope0_id, "#text/1", price * qty)}</p><button>+</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_qty#7_price#8/setup", $fg__input_item_price && "price");
	_scope($scope0_id, {
		qty,
		price
	}, "__tests__/template.marko", 0, {
		qty: "1:6",
		price: "2:8"
	}) || $fg__input_item_price && _patch_write($scope0_id, "PatchMarkedWrite:price", price, !$sg__input_item_price);
}, 1);
