// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let tab = 0;
	_html(`<button class=a>A</button>${_el_resume($scope0_id, "#button/0")}<button class=b>B</button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => {
		if (tab === 0) {
			const $scope1_id = _scope_id();
			_html(`<p class=a>${_escape(input.a)}${_el_resume($scope1_id, "#text/0", _serialize_guard($scope0_reason, 0))}</p>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html(`<p class=b>${_escape(input.b)}${_el_resume($scope2_id, "#text/0", _serialize_guard($scope0_reason, 1))}</p>`);
			writeScope($scope2_id, {}, "__tests__/template.marko", "7:2");
			return 1;
		}
	}, $scope0_id, "#text/2", 1 | _persisted_reason() | (1 | _persisted_reason()), 1 | _persisted_reason(), 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_a: input.a,
		input_b: input.b,
		tab: _seed_fill(_state_reason() && tab)
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		tab: "1:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button class=a>A</button><button class=b>B</button><!><!>", " b b%c"],
	"__tests__/template.marko": ["<button class=a>A</button><button class=b>B</button><!><!>", " b b%c"]
});
