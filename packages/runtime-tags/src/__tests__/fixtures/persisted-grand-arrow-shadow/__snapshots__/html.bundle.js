// tags/widget/index.marko
_shells({ b: "b !b0;D l ;<p> </p><button>run</button>" });
var widget_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const label = () => "t:" + input.title;
	_html(`<p>${_patch_text($scope0_id, "a", label(), void 0, $scope0_reason, 0)}</p><button>run</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	$scope0_page ? _scope($scope0_id, { e: input.title }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "e", input.title);
}, 0, 0);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button class=outer>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a");
	_html(`<button class=outer>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: show
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", input.title);
}, 1, () => [widget_default]);
