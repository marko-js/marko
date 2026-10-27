// template.marko
let n = 0;
_shells({
	a5: "a5 !a0; D l ;<label> </label><button>show</button>",
	a6: "a6 !a0; D l ;<label> </label><button>show</button>",
	a: "a;b%bD ;<!><!><output> </output>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_name = _client_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_name__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let shown = "";
	_await($scope0_id, "a", Promise.resolve("u" + ++n), (uid) => {
		const $scope1_id = _scope_id();
		_patch_write($scope1_id, "we", uid);
		_html(`<label${_attr("for", `${uid}-${input.name}`, $scope1_id, "a", $scope0_reason, 0)}>${_patch_text($scope1_id, "b", input.label, void 0, $scope0_reason, 1)}</label>${_el_resume($scope1_id, "a", _mask_group($scope0_reason, 0))}<button>show</button>${_el_resume($scope1_id, "c")}`);
		_script($scope1_id, "a0");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "a1");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_label ? "a2" : "a3");
		$cg__input_name && _patch_init($scope1_id, "a4");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_name__closures, _scope($scope1_id, { e: uid }), $cg__input_name && "a1"), $cg__input_label && "a3");
	}, 1, "a5", 1);
	_html(`<output>${_text_resume($scope0_id, "b", shown)}</output>`);
	_scope($scope0_id, {
		h: _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && $input_name__closures,
		i: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_label__closures
	});
}, 1);
