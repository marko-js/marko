// tags/counter/index.marko
_renderer_shells({ b0: ",`b0 b1;Db%l ;<span>Seen <!></span><button>+</button>`" });
var counter_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_show = _serialize_guard($scope0_reason, 1);
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
	}, $scope0_id, "a", _serialize_guard($scope0_reason, 0), $sg__input_show, $sg__input_show, void 0, void 0, ["b0"]);
	$scope0_reason && writeScope($scope0_id, { e: input.onCount });
});

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "a")}</h1><p>Last <!>${_escape(last)}${_el_resume($scope0_id, "b")}</p>`);
	_set_serialize_reason({
		0: $sg__input_show,
		1: $sg__input_show
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "c", $childScope);
	counter_default({
		show: input.show,
		onCount: _resume(function(next) {
			last = next;
		}, "a0", $scope0_id)
	});
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { c: _existing_scope($childScope) });
	_resume_branch($scope0_id);
}, 1);
