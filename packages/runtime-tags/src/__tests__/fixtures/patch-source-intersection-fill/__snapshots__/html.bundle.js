// template.marko
_shells({ a: "a !a0;D lD l ;<p> </p><p> </p><button>+</button>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let qty = 1;
	const price = input.item.price;
	_html(`<p>${_patch_text($scope0_id, "a", price + input.item.price * .1, void 0, $scope0_reason, 0)}</p><p>${_text_resume($scope0_id, "b", price * qty)}</p><button>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		h: qty,
		i: price
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", price);
}, 1, 0);
