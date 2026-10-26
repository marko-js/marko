// tags/widget/index.marko
_shells({ b: "b;D ;<em> </em>" });
var widget_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.text, void 0, $scope0_reason, 0)}</em>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const brand = `${$global().brand}`;
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			widget_default({ text: brand });
			$scope0_page && _scope($scope1_id, { a: $scope0_page && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_fill_global_subscribe("a0", $scope0_id);
	_script($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		c: brand,
		d: show
	}) : _patch_fill($scope0_id, "va2", brand);
}, 1);
