// template.marko
let n = 0;
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_name = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_name__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let shown = "";
	_await($scope0_id, "a", Promise.resolve("u" + ++n), (uid) => {
		const $scope1_id = _scope_id();
		_html(`<label${_attr("for", `${uid}-${input.name}`)}>${_text_resume($scope1_id, "b", input.label, _write_guard($scope0_reason, 1))}</label>${_el_resume($scope1_id, "a", _write_guard($scope0_reason, 0))}<button>show</button>${_el_resume($scope1_id, "c")}`);
		_script($scope1_id, "a0");
		_subscribe($wi__input_label && $input_label__closures, _subscribe($wi__input_name && $input_name__closures, _scope($scope1_id, { e: uid }), "a1"), "a2");
	});
	_html(`<output>${_text_resume($scope0_id, "b", shown)}</output>`);
	_scope($scope0_id, {
		h: $wi__input_name && $input_name__closures,
		i: $wi__input_label && $input_label__closures
	});
}, 1);
