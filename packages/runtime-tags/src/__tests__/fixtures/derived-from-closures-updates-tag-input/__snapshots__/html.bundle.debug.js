// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_escape(input.label)}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 1))}</button>${_el_resume($scope0_id, "#button/0")}<a${_attr("href", input.hrefFor("x"))} class=${input.count % 2 ? "odd" : "even"}>x</a>${_el_resume($scope0_id, "#a/2", _serialize_guard($scope0_reason, 0))}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	writeScope($scope0_id, { input_onToggle: input.onToggle }, "__tests__/tags/child.marko", 0, { input_onToggle: ["input.onToggle"] });
});

// tags/parent.marko
var parent_default = _template("__tests__/tags/parent.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const prefix = "a";
	let shut = false;
	const hrefFor = _resume((key) => `#${key}`, "__tests__/tags/parent.marko_0/hrefFor");
	_if(() => {
		if (true) {
			const $scope1_id = _scope_id();
			const label = shut ? `${prefix}:shut` : `${prefix}:open`;
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			child_default({
				label,
				count: input.count,
				hrefFor,
				onToggle: _resume(function() {
					shut = !shut;
					input.onToggle();
				}, "__tests__/tags/parent.marko_1/onToggle", $scope1_id)
			});
			writeScope($scope1_id, {
				label: _serialize_if($scope0_reason, 0) && label,
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/parent.marko", "12:2", { label: "13:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 0, 0);
	writeScope($scope0_id, {
		input_count: input.count,
		input_onToggle: input.onToggle,
		prefix,
		shut,
		hrefFor
	}, "__tests__/tags/parent.marko", 0, {
		input_count: ["input.count"],
		input_onToggle: ["input.onToggle"],
		prefix: "9:8",
		shut: "10:6",
		hrefFor: "11:8"
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	parent_default({
		count,
		onToggle: _resume(function() {
			count++;
		}, "__tests__/template.marko_0/onToggle", $scope0_id)
	});
	writeScope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
