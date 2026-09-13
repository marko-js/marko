// tags/label/index.marko
_shells({ b: "b;D ;<em> </em>" });
var label_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.text, void 0, $scope0_reason, 0)}</em>`);
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a: "a !a0;D%b b ;<main><!><button>+</button><button class=t>t</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			label_default({ text: count + input.suffix });
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}<button class=t>t</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		f: input.suffix,
		g: count,
		h: show
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", input.suffix);
}, 1, () => [label_default]);
