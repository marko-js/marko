// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $label__closures = new Set();
	const $shown__closures = new Set();
	let shown = false;
	const label = shown ? "on" : "off";
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	const Rec = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_if(() => {
			if (shown) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "#text/0", input.content, {}, 0, 0, 0);
				_scope($scope4_id, {}, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/0");
		_if(() => {
			if (input.depth < 1) {
				const $scope2_id = _scope_id();
				_set_scope_reason(0);
				Rec.content({
					depth: input.depth + 1,
					content: _content_resume("__tests__/template.marko_3*content", () => {
						_scope_reason();
						const $scope3_id = _scope_id();
						_html(`<em>held ${_text_mark($scope3_id, "#text/0", label, 2)}</em>`);
						_subscribe($label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "7:6"), "__tests__/template.marko_3_label#0:3/subscribe");
					}, $scope2_id)
				});
				_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4");
				return 0;
			}
		}, $scope1_id, "#text/1", 0, 0);
		_subscribe($shown__closures, _scope($scope1_id, {
			input_content: input.content,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "4:2", { input_content: ["input.content", "4:13"] }), "__tests__/template.marko_1_shown#0:2/subscribe");
	}, $scope0_id) };
	Rec.content({ depth: 0 });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		shown,
		"ClosureScopes:label/5": $label__closures,
		"ClosureScopes:shown/4": $shown__closures
	}, "__tests__/template.marko", 0, {
		shown: "1:6",
		label: "2:8"
	});
}, 1);
