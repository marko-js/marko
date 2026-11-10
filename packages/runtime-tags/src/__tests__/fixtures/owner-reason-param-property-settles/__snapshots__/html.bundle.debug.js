// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_obj_list = _write_guard($scope0_reason, 2), $wg__input_obj_show = _write_guard($scope0_reason, 3), $wg__input_obj_list__OR__input_obj_show = _write_guard($scope0_reason, 0), $wi__input_obj = _write_if($scope0_reason, 1), $wi__input_count = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_obj__closures = new Set();
	const $input_count__closures = new Set();
	_for_of(input.obj.list, (item) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.obj.show) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_mark($scope2_id, "#text/0", item, $wg__input_obj_list)}</span>`);
				_script($scope2_id, "__tests__/tags/child.marko_2_input_obj#0:3_input_count#0:6_item#1:2", $wg__input_obj_list);
				const $scope2_write = _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "2:4");
				_subscribe($wi__input_obj && $input_obj__closures, $scope2_write, "__tests__/tags/child.marko_2_input_obj#0:3/subscribe", $wg__input_obj_list);
				_subscribe($wi__input_count && $input_count__closures, $scope2_write, "__tests__/tags/child.marko_2_input_count#0:6/subscribe", $wg__input_obj_list);
				$wg__input_obj_list || (_write_guard($scope0_reason, 1) || _write_guard($scope0_reason, 4)) && _resume_branch($scope2_id);
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__input_obj_list__OR__input_obj_show, $wg__input_obj_show, 0, 0, 1);
		_scope($scope1_id, {
			item,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/child.marko", "1:2", { item: "1:6" });
	}, 0, $scope0_id, "#text/0", $wg__input_obj_list__OR__input_obj_show, $wg__input_obj_list);
	_scope($scope0_id, {
		input_obj: input.obj,
		input_obj_show: _write_if($scope0_reason, 2) && input.obj?.show,
		input_count: input.count,
		"ClosureScopes:input_obj/7": $wi__input_obj && $input_obj__closures,
		"ClosureScopes:input_count/9": $wi__input_count && $input_count__closures
	}, "__tests__/tags/child.marko", 0, {
		input_obj: ["input.obj"],
		input_obj_show: ["input.obj.show"],
		input_count: ["input.count"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = {
		list: ["a", "b"],
		show: true,
		name: "first"
	};
	let count = 1;
	_html(`<button>update</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(682);
	const $childScope = _peek_scope_id();
	child_default({
		obj,
		count
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "2:6" });
}, 1);
