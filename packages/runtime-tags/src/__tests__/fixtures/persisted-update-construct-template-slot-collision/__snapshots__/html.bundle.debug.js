// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of($global().childItems, (item) => {
		const $scope1_id = _scope_id();
		_html(`<p${_attr("data-child", item.id)}>child ${_sep(_persisted_reason())}${_escape(item.id)}${_el_resume($scope1_id, "#text/1", _persisted_reason())}</p>${_el_resume($scope1_id, "#p/0", _persisted_reason())}`);
		_persisted_reason() && writeScope($scope1_id, {}, "__tests__/tags/child.marko", "1:2");
	}, "id", $scope0_id, "#text/0", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1);
	_persisted_reason() && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});
_renderer_shells({ "__tests__/tags/child.marko_0_update": ["<!><!><!>", "b%c"] });

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_region(() => {
		forOf($global().parentItems, (item) => {
			const $scope1_id = _scope_id();
			_html(`<p>parent ${_sep(_persisted_reason())}${_escape(item.id)}${_el_resume($scope1_id, "#text/0", _persisted_reason())}</p>`);
			_persisted_reason() && writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
		});
	}, $scope0_id, "#text/2", "__tests__/template.marko_r0");
	const $childScope = _peek_scope_id();
	_region(() => {
		child_default({});
	}, $scope0_id, "#text/4", "__tests__/template.marko_r1");
	_dynamic_tag($scope0_id, "#text/5", $global().nativeTag, {}, _content_resume("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("dynamic");
	}, $scope0_id), 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/5");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _seed_fill(_state_reason() && count),
		"#childScope/3": _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button> </button><!><!><!><!>", " D l%b/&%b%c"],
	"__tests__/template.marko": ["<button> </button><!><!><!><!>", " D l%b/&%b%c"]
});
