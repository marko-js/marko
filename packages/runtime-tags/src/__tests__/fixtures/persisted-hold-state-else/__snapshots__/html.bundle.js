// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let tab = 0;
	_html(`<button class=a>A</button>${_el_resume($scope0_id, "a")}<button class=b>B</button>${_el_resume($scope0_id, "b")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<p class=a>${_escape(input.a)}${_el_resume($scope1_id, "a", _serialize_guard($scope0_reason, 0))}</p>`);
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1 | _persisted_reason() | (1 | _persisted_reason()), 1 | _persisted_reason(), 1, 0, 1);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		f: input.a,
		g: input.b,
		h: _seed_fill(_state_reason() && tab)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": ["<button class=a>A</button><button class=b>B</button><!><!>", " b b%c"],
	"a": ["<button class=a>A</button><button class=b>B</button><!><!>", " b b%c"]
});
