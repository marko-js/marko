// tags/tree.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_depth = _write_guard($scope0_reason, 1), $wi__input_depth__OR__input_content = _write_if($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 2), $wi__input_depth = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1 | $wg__input_depth << 3);
			const $childScope = _peek_scope_id();
			$content({
				depth: input.depth - 1,
				content: _content_resume("__tests__/tags/tree.marko_2*content", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					_dynamic_tag($scope2_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
					$wi__input_depth__OR__input_content && _subscribe($wi__input_content && $input_content__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/tree.marko", "2:4"), "__tests__/tags/tree.marko_2_input_content#0:4/subscribe", $wg__input_content);
				}, $scope1_id)
			});
			$wi__input_depth__OR__input_content && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_depth && _existing_scope($childScope)
			}, "__tests__/tags/tree.marko", "1:2");
			return 0;
		} else {
			const $scope3_id = _scope_id();
			_dynamic_tag($scope3_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
			$wi__input_depth__OR__input_content && _scope($scope3_id, { _: $wi__input_content && _scope_with_id($scope0_id) }, "__tests__/tags/tree.marko", "6:2");
			return 1;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0) || $wg__input_depth, $wg__input_depth);
	$wi__input_depth__OR__input_content && _scope($scope0_id, {
		input_content: $wi__input_depth && input.content,
		"ClosureScopes:input_content/6": $wi__input_content && $input_content__closures
	}, "__tests__/tags/tree.marko", 0, { input_content: ["input.content"] });
};
var tree_default = _template("__tests__/tags/tree.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	_html("<div>x");
	tree_default({
		depth: 2,
		content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_text_mark($scope1_id, "#text/0", n, 2)}!`);
			_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:8"), "__tests__/template.marko_1_n#0:2/subscribe");
		}, $scope0_id)
	});
	_html(`</div><button>inc</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"ClosureScopes:n/3": $n__closures
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
