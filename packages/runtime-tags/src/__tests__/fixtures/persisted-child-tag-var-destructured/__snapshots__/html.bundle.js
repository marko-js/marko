// tags/counter/index.marko
_shells({ b: "b !;Db%;<span>box <!></span>" });
var counter_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<span>box ${_text_resume($scope0_id, "a", count, 2)}</span>`);
	const $return = {
		value: count,
		valueChange: _resume(function(v) {
			count = v;
		}, "b0", $scope0_id)
	};
	_patch_value($scope0_id, "b0", count, 1);
	$scope0_reason && _scope($scope0_id, {});
	_resume_branch($scope0_id);
	return $return;
}, 0, 0);

// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button class=toggle>t</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			let { valueChange: $valueChange, value } = counter_default({});
			_var($scope1_id, "b", $childScope, "a0");
			_html(`<p>${_text_resume($scope1_id, "c", value)}</p><button class=reset>r</button>${_el_resume($scope1_id, "d")}`);
			_script($scope1_id, "a1");
			_scope($scope1_id, {
				g: $valueChange,
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason && _scope($scope0_id, { c: show });
	_resume_branch($scope0_id);
}, 1, () => [counter_default]);
