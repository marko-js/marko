// tags/pager.marko
var pager_default = _template("__tests__/tags/pager.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_start = _serialize_guard($scope0_reason, 0), $si__input_start = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<nav>");
	_if(() => {
		if (input.start) {
			const $scope1_id = _scope_id();
			_html("<span>");
			_dynamic_tag($scope1_id, "#text/0", input.start.content, {}, 0, 0, _serialize_guard($scope0_reason, 1));
			_html("</span>");
			$si__input_start && writeScope($scope1_id, { _: _serialize_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/pager.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#nav/0", $sg__input_start, $sg__input_start, $sg__input_start, "</nav>", 1);
	$si__input_start && writeScope($scope0_id, {}, "__tests__/tags/pager.marko", 0);
});

// tags/page.marko
const items$1 = [{ title: "First" }, { title: "Second" }];
var page_default = _template("__tests__/tags/page.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_index = _serialize_guard($scope0_reason, 0), $si__input_index = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $next_title__closures = new Set();
	const next = items$1[input.index];
	_set_serialize_reason({
		0: $sg__input_index,
		1: $sg__input_index
	});
	let $start;
	if (next) {
		$start = attrTag({ content: _content("__tests__/tags/page.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_escape(next.title)}${_el_resume($scope1_id, "#text/0", $sg__input_index)}`);
			$si__input_index && _subscribe($next_title__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/page.marko", "6:6"));
			_resume_branch($scope1_id);
		}, $scope0_id) });
	}
	const $childScope = _peek_scope_id();
	pager_default({ start: $start });
	$si__input_index && writeScope($scope0_id, {
		next_title: next?.title,
		"ClosureScopes:next_title": $next_title__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/page.marko", 0, { next_title: ["next.title", "3:8"] });
});

// template.marko
const items = [{ title: "First" }, { title: "Second" }];
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let index = 0;
	_html(`<button>next</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	page_default({ index });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		index,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { index: "2:6" });
	_resume_branch($scope0_id);
}, 1);
