// tags/widget/tags/inner/index.marko
_shells({ c: "c !c0; ;<button class=bump>+</button>" });
var inner_default = _template_persisted("c", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button class=bump>+</button>${_el_resume($scope0_id, "a")}`);
	const $return = n;
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "c0", n, 1);
	$scope0_reason && _scope($scope0_id, { b: n });
	_resume_branch($scope0_id);
	return $return;
}, 0, 0);

// tags/widget/index.marko
var widget_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let v = inner_default({});
	_var($scope0_id, "b", $childScope, "b0");
	_html(`<em>${_text_resume($scope0_id, "c", v)}</em>`);
	$scope0_reason && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 0, () => [inner_default]);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button class=toggle>t</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			widget_default({});
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && _scope($scope0_id, { c: show });
	_resume_branch($scope0_id);
}, 1, () => [widget_default]);
