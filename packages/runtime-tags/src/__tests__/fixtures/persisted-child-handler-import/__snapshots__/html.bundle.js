// tags/widget/index.marko
_shells({ b: "b !b0;D%b%l ;<p><!><!></p><button class=run>run</button>" });
var widget_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let last = "";
	_html(`<p>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_owned, 0)}${_text_resume($scope0_id, "b", last, 2)}</p><button class=run>run</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b0", last, 1);
	$scope0_reason ? _scope($scope0_id, { f: input.label }) : _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "f", input.label);
}, 0, 0);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button class=outer>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a");
	_html(`<button class=outer>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		e: input.label,
		f: show
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.label);
}, 1, () => [widget_default]);
