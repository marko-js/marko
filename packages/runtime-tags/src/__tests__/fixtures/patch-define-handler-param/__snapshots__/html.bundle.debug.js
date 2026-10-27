// template.marko
const $Card_content__walks = "Db%l b";
const $Card_content__template = "<h1>Product <!></h1><button>Add to cart</button>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<p>Cart: <!></p>`)($Card_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&Db%l`)($Card_content__walks);
const $setup = [[], []];
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `b/${_w0}&Db%l`)($Card_content__walks)};${((_w0) => `<!>${_w0}<p>Cart: <!></p>`)($Card_content__template)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let cart = [];
	const Card = { content: _content("__tests__/template.marko_1*content", ({ id }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<h1>Product ${_patch_text($scope1_id, "#text/0", id, 2, $scope1_reason, 0)}</h1><button>Add to cart</button>${_el_resume($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		$scope1_page ? _scope($scope1_id, {
			id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { id: "2:16" }) : _filled_guard($scope1_reason, 0) && _patch_write($scope1_id, "PatchWrite:id", id, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Card.content({ id: input.id });
	_html(`<p>Cart: ${_text_resume($scope0_id, "#text/1", cart.join(","), 2)}</p>`);
	$scope0_page && _scope($scope0_id, {
		cart,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { cart: "1:6" });
}, 1);
