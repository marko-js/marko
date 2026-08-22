// tags/tabs/index.marko
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0;Db%;<div>a <!></div>",
	b1: "b1,<span>b</span>"
});
var tabs_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_tab = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.tab) {
			const $scope1_id = _scope_id();
			_html(`<div>a <!>${_patch_text($scope1_id, "a", input.tab.on, $scope0_owned, 1)}${_el_resume($scope1_id, "a")}</div>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<span>b</span>");
			$scope0_reason && writeScope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, $sg__input_tab, $sg__input_tab, void 0, void 0, ["b0", "b1"]);
	$scope0_reason && writeScope($scope0_id, { e: input.tab?.on });
}, 0, 0);

// template.marko
_shells({ a: "a !a0;D%b b ;<main><!><button class=flip>f</button><button class=toggle>t</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let on = false;
	const o = { on };
	_html("<main>");
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			tabs_default({ tab: attrTag({ on }) });
			_set_serialize_reason(1);
			const $childScope2 = _peek_scope_id();
			tabs_default({ tab: attrTag({ ...o }) });
			_set_serialize_reason(1);
			const $childScope3 = _peek_scope_id();
			tabs_default({ tab: { on } });
			writeScope($scope1_id, {
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2),
				c: _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button class=flip>f</button>${_el_resume($scope0_id, "b")}<button class=toggle>t</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && writeScope($scope0_id, {
		d: show,
		e: on,
		f: o
	});
	_resume_branch($scope0_id);
}, 1, () => [tabs_default]);
