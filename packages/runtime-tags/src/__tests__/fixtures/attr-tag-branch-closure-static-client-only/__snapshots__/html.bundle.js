// tags/pager.marko
var pager_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_start = _serialize_guard($scope0_reason, 0), $si__input_start = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<nav>");
	_if(() => {
		if (input.start) {
			const $scope1_id = _scope_id();
			_html("<span>");
			_dynamic_tag($scope1_id, "a", input.start.content, {}, 0, 0, _serialize_guard($scope0_reason, 1));
			_html("</span>");
			$si__input_start && writeScope($scope1_id, { _: _serialize_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $sg__input_start, $sg__input_start, $sg__input_start, "</nav>", 1);
	$si__input_start && writeScope($scope0_id, {});
});

// tags/page.marko
const items = [{ title: "First" }];
var page_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_index = _serialize_guard($scope0_reason, 0), $si__input_index = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $next_title__closures = /* @__PURE__ */ new Set();
	const next = items[input.index];
	_set_serialize_reason({
		0: $sg__input_index,
		1: $sg__input_index
	});
	let $start;
	if (next) $start = attrTag({ content: _content("b0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`${_escape(next.title)}${_el_resume($scope1_id, "a", $sg__input_index)}`);
		$si__input_index && _subscribe($next_title__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id) });
	const $childScope = _peek_scope_id();
	pager_default({ start: $start });
	$si__input_index && writeScope($scope0_id, {
		f: next?.title,
		g: $next_title__closures,
		a: _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	page_default({ index: 0 });
}, 1);
