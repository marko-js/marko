// tags/widget/index.marko
_shells({ b: "b !;D%c%;<p><!>:<!></p>" });
var widget_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let mounted = 0;
	_html(`<p>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_owned, 0)}:${_text_resume($scope0_id, "b", mounted, 2)}</p>`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b0", mounted, 1);
	$scope0_reason && _scope($scope0_id, { f: mounted });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button class=outer>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button class=outer>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		e: input.label,
		f: show
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.label);
	_resume_branch($scope0_id);
}, 1, () => [widget_default]);
