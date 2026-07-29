// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_err = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => input.err ? 0 : 1, $scope0_id, "a", 1 | _persisted_reason() | $sg__input_err, _serialize_guard($scope0_reason, 0), $sg__input_err, void 0, void 0, "a0", [() => {
		const $scope2_id = _scope_id();
		_html("<h2>Something went wrong</h2>");
		$sg__input_err && writeScope($scope2_id, {});
	}, () => {
		const $scope1_id = _scope_id();
		_html(`<h1>${_escape(_hole_value($scope1_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope1_id, "a", _serialize_guard($scope0_reason, 2))}</h1><button>${_escape(count)}${_el_resume($scope1_id, "c")}</button>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "a2");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}], ["a4", "a3"], "a5");
	writeScope($scope0_id, {
		e: (_serialize_if($scope0_reason, 1) || _patch_reason()) && input.title,
		f: _seed_fill(_state_reason() && count)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a4": ["<h2>Something went wrong</h2>", "b"],
	"a6": ["<h2>Something went wrong</h2>", "b"],
	"a3": ["<h1> </h1><button> </button>", "D l D l"],
	"a7": ["<h1> </h1><button> </button>", "D l D l"],
	"a1": ["<!><!><!>", "b%c"],
	"a": ["<!><!><!>", "b%c"]
});
