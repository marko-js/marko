// data.ts
let counter = 0;
function nextValue() {
	return `server-${++counter}`;
}

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>count <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<div${_attr("data-value", _hole_value($scope0_id, "PatchAttr:data-value:#div/2", nextValue(), _persisted_reason()))} class=target>attribute</div>${_el_resume($scope0_id, "#div/2")}<input${_attr("value", _hole_value($scope0_id, "PatchAttr:value:#input/3", nextValue(), _persisted_reason()))} class=target>${_el_resume($scope0_id, "#input/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button>count <!></button><div class=target>attribute</div><input class=target>", " Db%l b b"],
	"__tests__/template.marko": ["<button>count <!></button><div class=target>attribute</div><input class=target>", " Db%l b b"]
});
