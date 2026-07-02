// tags/tree/index.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_depth = _serialize_guard($scope0_reason, 0), $si__input_depth = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>d${_sep($sg__input_depth)}${_escape(input.depth)}${_el_resume($scope0_id, "#text/0", $sg__input_depth)}`);
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_set_serialize_reason($sg__input_depth);
			$content({ depth: input.depth - 1 });
			$si__input_depth && writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/tree/index.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/1", $sg__input_depth, $sg__input_depth, $sg__input_depth, 0, 1);
	_html("</div>");
	$si__input_depth && writeScope($scope0_id, { input_depth: input.depth }, "__tests__/tags/tree/index.marko", 0, { input_depth: ["input.depth"] });
};
var tree_default = _template("__tests__/tags/tree/index.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 2;
	_html(`<button>inc <!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	tree_default({ depth: n });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		n,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 1);
