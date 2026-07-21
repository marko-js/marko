// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of($global().childItems, (item) => {
		const $scope1_id = _scope_id();
		_html(`<p${_attr("data-child", _hole_value($scope1_id, "PatchAttr:data-child:#p/0", item.id, _persisted_reason()))}>child ${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "PatchHole:#text/1", item.id, _persisted_reason()))}${_el_resume($scope1_id, "#text/1", _persisted_reason())}</p>${_el_resume($scope1_id, "#p/0", _persisted_reason())}`);
		_persisted_reason() && writeScope($scope1_id, {}, "__tests__/tags/child.marko", "1:2");
	}, "id", $scope0_id, "#text/0", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "__tests__/tags/child.marko_1_update");
	_persisted_reason() && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});
_renderer_shells({
	"__tests__/tags/child.marko_1_update": ["<p>child <!></p>", " Db%l"],
	"__tests__/tags/child.marko_1_content": ["<p>child <!></p>", " Db%l"],
	"__tests__/tags/child.marko_0_update": ["<!><!><!>", "b%c"],
	"__tests__/tags/child.marko": ["<!><!><!>", "b%c"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of($global().parentItems, (item) => {
		const $scope1_id = _scope_id();
		_html(`<p>parent ${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "PatchHole:#text/0", item.id, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", _persisted_reason())}</p>`);
		_persisted_reason() && writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}, "id", $scope0_id, "#text/2", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "__tests__/template.marko_1_update");
	const $childScope = _peek_scope_id();
	child_default({});
	_dynamic_tag($scope0_id, "#text/4", $global().nativeTag, {}, _content_resume("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("dynamic");
	}, $scope0_id), 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/4");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"#childScope/3": _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": ["dynamic", "b"],
	"__tests__/template.marko_2_content": ["dynamic", "b"],
	"__tests__/template.marko_1_update": ["<p>parent <!></p>", "Db%l"],
	"__tests__/template.marko_1_content": ["<p>parent <!></p>", "Db%l"],
	"__tests__/template.marko_0_update": [[
		"<button> </button><!>",
		["__tests__/tags/child.marko"],
		"<!><!>"
	], [
		" D l%b/",
		["__tests__/tags/child.marko"],
		"&%c"
	]],
	"__tests__/template.marko": [[
		"<button> </button><!>",
		["__tests__/tags/child.marko"],
		"<!><!>"
	], [
		" D l%b/",
		["__tests__/tags/child.marko"],
		"&%c"
	]]
});
