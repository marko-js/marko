// template.marko
const $Card_content__walks = "Db%l b";
const $Card_content__template = "<h1>Product <!></h1><button>Add to cart</button>";
_shells({ a: /*@__PURE__*/ (() => `a !;${((_w0) => `b/${_w0}&Db%l`)($Card_content__walks)};${((_w0) => `<!>${_w0}<p>Cart: <!></p>`)($Card_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let cart = [];
	const Card = { content: _content("a0", ({ id }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<h1>Product ${_patch_text($scope1_id, "a", id, 2, $scope1_reason, 0)}</h1><button>Add to cart</button>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "a1");
		$scope1_page ? _scope($scope1_id, {
			e: id,
			_: _scope_with_id($scope0_id)
		}) : _filled_guard($scope1_reason, 0) && _patch_write($scope1_id, "we", id, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	Card.content({ id: input.id });
	_html(`<p>Cart: ${_text_resume($scope0_id, "b", cart.join(","), 2)}</p>`);
	_patch_value($scope0_id, "va2", cart, 1);
	$scope0_page && _scope($scope0_id, {
		f: cart,
		a: _existing_scope($childScope)
	});
}, 1);
