// template.marko
_shells({ a: "a !a0;D lD l ;<p> </p><p> </p><button>+</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_item_price = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let qty = 1;
	const price = input.item.price;
	const tax = input.item.price * .1;
	_html(`<p>${_text_mark($scope0_id, "a", price + tax, 1, $scope0_reason, 0)}</p><p>${_text_mark($scope0_id, "b", price * qty)}</p><button>+</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", $fg__input_item_price && "i");
	_scope($scope0_id, {
		h: qty,
		i: price
	}) || $fg__input_item_price && _patch_write($scope0_id, "xi", price, !_server_guard($scope0_reason, 0));
}, 1);
