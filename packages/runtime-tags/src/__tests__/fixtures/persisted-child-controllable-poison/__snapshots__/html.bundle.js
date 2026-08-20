// tags/counter/index.marko
const $template = "<!><!><!>";
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0 !b1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var counter_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen <!>${_escape(count)}${_el_resume($scope1_id, "a")}</span><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "b1");
			_patch_value($scope1_id, "b0", count, 1);
			_patch_bind($scope1_id, "d", input.onCount || void 0);
			writeScope($scope1_id, {
				c: count,
				_: _scope_with_id($scope0_id),
				d: input.onCount || void 0
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"]);
	$scope0_reason ? writeScope($scope0_id, {
		e: input.onCount,
		f: input.step
	}) : _owned_guard($scope0_owned, 2) && _patch_write($scope0_id, "f", input.step);
}, 0, 0);

// template.marko
_shells({
	a: "a;E lDb%l%;<main><h1> </h1><p>Last <!></p><!></main>",
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const onCount = _resume((next) => {
		last = next;
	}, "a0", $scope0_id);
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h1><p>Last <!>${_escape(last)}${_el_resume($scope0_id, "b")}</p>`);
	_for_of(["a", "b"], (name) => {
		const $scope1_id = _scope_id();
		_set_serialize_reason({
			0: _mask_group($scope0_owned, 1),
			1: _mask_group($scope0_owned, 1)
		});
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		counter_default({
			show: input.show,
			step: name === "a" ? 1 : 2,
			onCount
		});
		writeScope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "c", 1, _source_guard($scope0_reason, 1), 0, void 0, void 0, "a1");
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1, () => [counter_default]);
