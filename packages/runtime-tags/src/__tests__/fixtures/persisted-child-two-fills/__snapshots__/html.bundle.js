// tags/card/index.marko
_shells({ b: "b;D lD ;<h3> </h3><p> </p>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<h3>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h3><p>${_patch_text($scope0_id, "b", input.body, void 0, $scope0_reason, 1)}</p>`);
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: input.body,
		g: show
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "a0", input.title), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "a1", input.body));
}, 1, () => [card_default]);
