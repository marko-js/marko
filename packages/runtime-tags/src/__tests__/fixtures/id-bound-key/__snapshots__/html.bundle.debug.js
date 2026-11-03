// tags/store.marko
var store_default = _template("__tests__/tags/store.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const $return = {
		last,
		set: _resume(function(next) {
			last = next;
		}, "__tests__/tags/store.marko_0/_return", $scope0_id)
	};
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 2), $wg__input_keys = _write_guard($scope0_reason, 1), $wi__input_keys__OR__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_show__closures = new Set();
	_for_of(input.keys, (name) => {
		const $scope1_id = _scope_id();
		const $for_content__store_set__closures = new Set();
		const $childScope = _peek_scope_id();
		let store = store_default({});
		_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_store#9/var");
		const uid = _id();
		_html(`<label${_attr("for", uid)}>${_escape(name)}</label><input${_attr("id", uid)}><p>${_escape(name)}:${_text_resume($scope1_id, "#text/6", store.last, 2)}</p>`);
		_for_of(input.keys.toReversed(), (other) => {
			const $scope2_id = _scope_id();
			_if(() => {
				if (input.show && other === name) {
					const $scope3_id = _scope_id();
					let count = 0;
					_html(`<span>Seen ${_text_resume($scope3_id, "#text/0", count, 2)}</span><button>+</button>${_el_resume($scope3_id, "#button/1")}`);
					_script($scope3_id, "__tests__/template.marko_3");
					_subscribe($for_content__store_set__closures, _scope($scope3_id, {
						count,
						_: _scope_with_id($scope2_id),
						"TagVariableChange:count": store.set || void 0
					}, "__tests__/template.marko", "6:6", {
						count: "7:12",
						"TagVariableChange:count": ["countChange", "7:12"]
					}));
					return 0;
				}
			}, $scope2_id, "#text/0", $wg__input_show, $wg__input_show);
			_subscribe($wi__input_show && $input_show__closures, _scope($scope2_id, {
				"#LoopKey": $wi__input_show && other,
				_: _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "5:4", { "#LoopKey": "5:8" }), "__tests__/template.marko_2_input_show#0:4/subscribe", $wg__input_show);
		}, (n) => n, $scope1_id, "#text/7", $wg__input_keys, $wg__input_keys);
		_scope($scope1_id, {
			"#LoopKey": $wi__input_show && name,
			store_set: $wi__input_keys__OR__input_show && store?.set,
			_: $wi__input_keys__OR__input_show && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope),
			"ClosureScopes:store_set/14": $for_content__store_set__closures
		}, "__tests__/template.marko", "1:2", {
			"#LoopKey": "1:6",
			store_set: ["store.set", "2:10"]
		});
	}, (n) => n, $scope0_id, "#text/0", $wg__input_keys, $wg__input_keys);
	$wi__input_keys__OR__input_show && _scope($scope0_id, {
		input_show: _write_if($scope0_reason, 1) && input.show,
		"ClosureScopes:input_show/6": $wi__input_show && $input_show__closures
	}, "__tests__/template.marko", 0, { input_show: ["input.show"] });
}, 1);
