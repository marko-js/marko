// stamp.ts
let n = 0;
const nextStamp = () => ++n;

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const label = `label:${nextStamp()}`;
	_html(`<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</h1><div id=stamp>stamp:<!>${_escape(_hole_value($scope0_id, "PatchHole:#text/1", nextStamp(), _persisted_reason()))}${_el_resume($scope0_id, "#text/1")}</div><span id=label>${_escape(_hole_value($scope0_id, "PatchHole:#text/2", label, _persisted_reason()))}${_el_resume($scope0_id, "#text/2")}</span><button>${_escape(count)}${_el_resume($scope0_id, "#text/4")}</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, { count: "2:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<h1> </h1><div id=stamp>stamp:<!></div><span id=label> </span><button> </button>", "D lDb%lD l D l"],
	"__tests__/template.marko": ["<h1> </h1><div id=stamp>stamp:<!></div><span id=label> </span><button> </button>", "D lDb%lD l D l"]
});
