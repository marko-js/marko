// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_err = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => input.err ? 0 : 1, $scope0_id, "#text/0", 1 | _persisted_reason() | $sg__input_err, _serialize_guard($scope0_reason, 0), $sg__input_err, void 0, void 0, "__tests__/template.marko_0/update_if_#text/0", [() => {
		const $scope2_id = _scope_id();
		_html("<h2>Something went wrong</h2>");
		$sg__input_err && writeScope($scope2_id, {}, "__tests__/template.marko", "2:2");
	}, () => {
		const $scope1_id = _scope_id();
		_html(`<h1>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", _serialize_guard($scope0_reason, 2))}</h1><button>${_escape(count)}${_el_resume($scope1_id, "#text/2")}</button>${_el_resume($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}], ["__tests__/template.marko_2_update", "__tests__/template.marko_1_update"]);
	writeScope($scope0_id, {
		input_title: (_serialize_if($scope0_reason, 1) || _patch_reason()) && input.title,
		count: _state_reason() && count
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": ["<h2>Something went wrong</h2>", "b"],
	"__tests__/template.marko_2_content": ["<h2>Something went wrong</h2>", "b"],
	"__tests__/template.marko_1_update": ["<h1> </h1><button> </button>", "D l D l"],
	"__tests__/template.marko_1_content": ["<h1> </h1><button> </button>", "D l D l"],
	"__tests__/template.marko_0_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko": ["<!><!><!>", "b%c"]
});
