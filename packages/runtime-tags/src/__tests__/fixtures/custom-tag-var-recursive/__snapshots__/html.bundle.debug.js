// tags/tree/index.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_depth = _serialize_guard($scope0_reason, 0), $si__input_depth = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_set_serialize_reason($sg__input_depth);
			let nested = $content({ depth: input.depth - 1 });
			_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/tags/tree/index.marko_1_nested/var");
			_html(`<div>nested ${_escape(nested)}</div>`);
			$si__input_depth && writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/tree/index.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $sg__input_depth, $sg__input_depth, $sg__input_depth);
	const $return = input.depth;
	$si__input_depth && writeScope($scope0_id, { input_depth: input.depth }, "__tests__/tags/tree/index.marko", 0, { input_depth: ["input.depth"] });
	return $return;
};
var tree_default = _template("__tests__/tags/tree/index.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 2;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	let total = tree_default({ depth: n });
	_var($scope0_id, "#scopeOffset/2", $childScope, "__tests__/template.marko_0_total/var");
	_html(`<div>total <!>${_escape(total)}${_el_resume($scope0_id, "#text/3")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		n,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 1);
