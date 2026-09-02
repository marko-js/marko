// tags/tabs/index.marko
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0,<div>a</div>",
	b1: "b1,<span>b</span>"
});
var tabs_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_tab_on = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.tab.on) {
			const $scope1_id = _scope_id();
			_html("<div>a</div>");
			$scope0_reason && _scope($scope1_id, {});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<span>b</span>");
			$scope0_reason && _scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, $sg__input_tab_on, $sg__input_tab_on, void 0, void 0, ["b0", "b1"], $scope0_owned, 0);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
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
			tabs_default({ tab: attrTag({ on: false }) });
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && _scope($scope0_id, { c: show });
	_resume_branch($scope0_id);
}, 1, () => [tabs_default]);
