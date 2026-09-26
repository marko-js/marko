// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	return {
		n,
		set: _resume(function(value) {
			n = value;
		}, "b0", $scope0_id)
	};
});

// tags/forward.marko
var forward_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $inputasCounter_scope = _peek_scope_id();
	let api = _dynamic_tag($scope0_id, "a", input.as || counter_default, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "b", $inputasCounter_scope, "c0");
	const $return = api;
	_scope($scope0_id, {});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let Tag = counter_default;
	const $Tag_scope = _peek_scope_id();
	let api = _dynamic_tag($scope0_id, "a", Tag, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "b", $Tag_scope, "a0");
	_if(() => {
		if (api) {
			const $scope1_id = _scope_id();
			let clicks = 0;
			_html(`<button class=inner>${_text_resume($scope1_id, "b", clicks)}</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a1");
			_scope($scope1_id, { c: clicks });
			return 0;
		}
	}, $scope0_id, "c", 1, 1, 1, 0, 1);
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, { e: Tag });
}, 1);
