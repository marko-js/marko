// template.marko
_renderer_shells({ a1: ",`a1 a2;Db%l ;<span>Seen <!></span><button>+</button>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let last = 0;
	let handler = _resume((next) => {
		last = next;
	}, "a0", $scope0_id);
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "a")}</h1><p>Last <!>${_escape(last)}${_el_resume($scope0_id, "b")}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen <!>${_escape(count)}${_el_resume($scope1_id, "a")}</span><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a2");
			_patch_value($scope1_id, "a0", count, 1);
			_patch_bind($scope1_id, "d", handler || void 0);
			writeScope($scope1_id, {
				c: count,
				d: handler || void 0
			});
			return 0;
		}
	}, $scope0_id, "c", $sg__input_show, $sg__input_show, $sg__input_show, void 0, void 0, ["a1"]);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { i: handler });
	_resume_branch($scope0_id);
}, 1);
