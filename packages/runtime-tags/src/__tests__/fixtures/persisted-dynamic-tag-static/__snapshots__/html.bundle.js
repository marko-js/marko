// template.marko
const Wrapper = "em";
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>count <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "c", Wrapper, {}, _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("badge");
	}, $scope0_id), 0, 0 | _persisted_reason());
	_html(`<p>${_escape(_hole_value($scope0_id, "Qd", $global().caption, _persisted_reason()))}${_el_resume($scope0_id, "d", _persisted_reason())}</p>`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, { e: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": ["<button>count <!></button><!><p> </p>", " Db%l%bD l"],
	"a": ["<button>count <!></button><!><p> </p>", " Db%l%bD l"]
});
