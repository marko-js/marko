// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input = _serialize_if($scope0_reason, 0), $sg__input = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_in(input, (name, tag) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (name !== "content") {
				const $scope2_id = _scope_id();
				_html("<div");
				_attrs_content({
					"data-name": name,
					...tag
				}, "#div/0", $scope2_id, "div");
				_html(`</div>${_el_resume($scope2_id, "#div/0")}`);
				_script($scope2_id, "__tests__/tags/child.marko_2_tag#3");
				_scope($scope2_id, { _: $si__input && _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "2:4", { "EventAttributes:#div/0": ["...tag", "2:49"] });
				return 0;
			}
		}, $scope1_id, "#text/0", $sg__input, 0, 0, 0, 1);
		$si__input && _scope($scope1_id, {}, "__tests__/tags/child.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $sg__input, $sg__input, $sg__input);
	$si__input && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	child_default({
		a: attrTag({
			onClick: _resume(function() {
				count++;
			}, "__tests__/template.marko_0/onClick", $scope0_id),
			content: _content("__tests__/template.marko_1*content", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html(`A ${_text_resume($scope1_id, "#text/0", count, 2)}`);
				_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_1_count#1/subscribe");
			}, $scope0_id)
		}),
		b: attrTag({ content: _content("__tests__/template.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html("B");
		}, $scope0_id) })
	});
	_scope($scope0_id, {
		count,
		"ClosureScopes:count/2": $count__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
