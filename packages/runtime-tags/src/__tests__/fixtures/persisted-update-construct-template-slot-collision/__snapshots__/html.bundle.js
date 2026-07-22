// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_for_of($global().childItems, (item) => {
		const $scope1_id = _scope_id();
		_html(`<p${_attr("data-child", item.id)}>child ${_sep(_persisted_reason())}${_escape(item.id)}${_el_resume($scope1_id, "b", _persisted_reason())}</p>${_el_resume($scope1_id, "a", _persisted_reason())}`);
		_persisted_reason() && writeScope($scope1_id, {});
	}, "id", $scope0_id, "a", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1);
	_persisted_reason() && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_region(() => {
		forOf($global().parentItems, (item) => {
			const $scope1_id = _scope_id();
			_html(`<p>parent ${_sep(_persisted_reason())}${_escape(item.id)}${_el_resume($scope1_id, "a", _persisted_reason())}</p>`);
			_persisted_reason() && writeScope($scope1_id, {});
		});
	}, $scope0_id, "c");
	const $childScope = _peek_scope_id();
	_region(() => {
		child_default({});
	}, $scope0_id, "d");
	_dynamic_tag($scope0_id, "e", $global().nativeTag, {}, _content_resume("a2", () => {
		_scope_id();
		_scope_reason();
		_html("dynamic");
	}, $scope0_id), 0, _persisted_reason() | _persisted_reason(), "a0");
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		f: _state_reason() && count,
		d: _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a1": [[
		"<button> </button><!>",
		["b"],
		"<!><!>"
	], [
		" D l%b/",
		["b"],
		"&%c"
	]],
	"a": [[
		"<button> </button><!>",
		["b"],
		"<!><!>"
	], [
		" D l%b/",
		["b"],
		"&%c"
	]]
});
