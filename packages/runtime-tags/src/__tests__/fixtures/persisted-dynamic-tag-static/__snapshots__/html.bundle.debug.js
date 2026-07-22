// template.marko
const Wrapper = "em";
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>count <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/2", Wrapper, {}, _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("badge");
	}, $scope0_id), 0, 0 | _persisted_reason());
	_html(`<p>${_escape(_hole_value($scope0_id, "PatchHole:#text/3", $global().caption, _persisted_reason()))}${_el_resume($scope0_id, "#text/3", _persisted_reason())}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button>count <!></button><!><p> </p>", " Db%l%bD l"],
	"__tests__/template.marko": ["<button>count <!></button><!><p> </p>", " Db%l%bD l"]
});
