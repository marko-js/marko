// data.ts
let counter = 0;
function nextValue() {
	return `server-${++counter}`;
}

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>count <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<div${_attr("data-value", _hole_value($scope0_id, "Ndata-value:c", nextValue(), _persisted_reason()))} class=target>attribute</div>${_el_resume($scope0_id, "c")}<input${_attr("value", _hole_value($scope0_id, "Nvalue:d", nextValue(), _persisted_reason()))} class=target>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { e: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": ["<button>count <!></button><div class=target>attribute</div><input class=target>", " Db%l b b"],
	"a": ["<button>count <!></button><div class=target>attribute</div><input class=target>", " Db%l b b"]
});
