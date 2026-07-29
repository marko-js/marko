// stamp.ts
let n = 0;
const nextStamp = () => ++n;

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const label = `label:${nextStamp()}`;
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</h1><div id=stamp>stamp:<!>${_escape(_hole_value($scope0_id, "Qb", nextStamp(), _persisted_reason()))}${_el_resume($scope0_id, "b")}</div><span id=label>${_escape(_hole_value($scope0_id, "Qc", label, _persisted_reason()))}${_el_resume($scope0_id, "c")}</span><button>${_escape(count)}${_el_resume($scope0_id, "e")}</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { i: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": ["<h1> </h1><div id=stamp>stamp:<!></div><span id=label> </span><button> </button>", "D lDb%lD l D l"],
	"a": ["<h1> </h1><div id=stamp>stamp:<!></div><span id=label> </span><button> </button>", "D lDb%lD l D l"]
});
