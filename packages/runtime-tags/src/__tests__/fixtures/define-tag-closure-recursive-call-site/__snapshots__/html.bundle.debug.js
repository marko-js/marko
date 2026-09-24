// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $depth__closures = new Set();
	let depth = 1;
	const label = "node";
	const Tree = { content: _content("__tests__/template.marko_1*content", ({ level }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__level = _serialize_guard($scope1_reason, 0);
		_html(`<span>${_escape(label)}${_text_resume($scope1_id, "#text/1", level, $sg__level * 2)}</span>`);
		_if(() => {
			if (level < depth) {
				const $scope2_id = _scope_id();
				_set_serialize_reason($sg__level << 1);
				const $childScope = _peek_scope_id();
				Tree.content({ level: level + 1 });
				_scope($scope2_id, { "#childScope/0": _serialize_if($scope1_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/2");
		_subscribe($depth__closures, _scope($scope1_id, {
			level,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:2", { level: "3:16" }), "__tests__/template.marko_1_depth#2/subscribe");
	}, $scope0_id) };
	_html(`<button>deeper</button>${_el_resume($scope0_id, "#button/0")}`);
	Tree.content({ level: 1 });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		depth,
		label,
		"ClosureScopes:depth": $depth__closures
	}, "__tests__/template.marko", 0, {
		depth: "1:6",
		label: "2:8"
	});
}, 1);
