// tags/tree.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $wg__input_depth = _write_guard($scope0_reason, 2), $wg__input_content__OR__input_depth = _write_guard($scope0_reason, 0), $wi__input_content__OR__input_depth = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_content__OR__input_depth << 1 | $wg__input_content << 3 | $wg__input_depth << 5);
			const $childScope = _peek_scope_id();
			$content({
				depth: input.depth - 1,
				content: input.content
			});
			$wi__input_content__OR__input_depth && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/tree.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_content__OR__input_depth, $wg__input_depth);
	$wi__input_content__OR__input_depth && _scope($scope0_id, { input_content: _write_if($scope0_reason, 2) && input.content }, "__tests__/tags/tree.marko", 0, { input_content: ["input.content"] });
};
var tree_default = _template("__tests__/tags/tree.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	_html("<div>");
	tree_default({
		depth: 1,
		content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_text_mark($scope1_id, "#text/0", n, 2)}!`);
			_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:7"), "__tests__/template.marko_1_n#0:2/subscribe");
		}, $scope0_id)
	});
	_html(`</div><button>inc</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"ClosureScopes:n/3": $n__closures
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
