// tags/counter.marko
var counter_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { "countChange": $countChange, count } = input;
	let x = count;
	_html(`<button${_attr("id", input.id)}${_attr("data-internal", x)}>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html(`</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		g: _serialize_if($scope0_reason, 2) && $countChange,
		h: _serialize_if($scope0_reason, 1) && count,
		j: x,
		k: $countChange || void 0
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $x__closures = /* @__PURE__ */ new Set();
	let x = 0;
	_set_serialize_reason(8);
	const $childScope = _peek_scope_id();
	counter_default({
		count: x,
		countChange: _resume((_new_x) => {
			x = _new_x;
		}, "a0", $scope0_id),
		id: "controlled",
		content: _content("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(_text_resume($scope1_id, "a", x));
			_subscribe($x__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		}, $scope0_id)
	});
	_set_serialize_reason(8);
	const $childScope2 = _peek_scope_id();
	counter_default({
		count: x,
		id: "uncontrolled",
		content: _content("a2", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(_text_resume($scope2_id, "a", x));
			_subscribe($x__closures, _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				Cd: 1
			}));
		}, $scope0_id)
	});
	_scope($scope0_id, {
		d: $x__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
