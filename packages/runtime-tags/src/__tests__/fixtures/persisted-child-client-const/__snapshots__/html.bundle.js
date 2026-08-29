// tags/widget/index.marko
_shells({ c: "c !c0; D%c%;<button class=c><!>:<!></button>" });
var widget_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=c>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_owned, 0)}:${_text_resume($scope0_id, "c", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "c0", n, 1);
	$scope0_reason && _scope($scope0_id, { g: n });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button class=t>t</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			widget_default({ label: "fixed" });
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && _scope($scope0_id, { c: show });
	_resume_branch($scope0_id);
}, 1, () => [widget_default]);
