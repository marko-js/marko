// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Rec = { content: _content("__tests__/template.marko_1*content", ({ depth, content }) => {
		const $scope1_id = _scope_id();
		const $Rec_content__label__closures = new Set();
		const $scope1_reason = _scope_reason();
		let shown = false;
		const label = shown ? "on" : "off";
		_html(`<button>${_escape(depth)}</button>${_el_mark($scope1_id, "#button/0")}`);
		_if(() => {
			if (shown) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "#text/0", content, {}, 0, 0, 0);
				_scope($scope3_id, {}, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/2");
		_if(() => {
			if (depth < 1) {
				const $scope2_id = _scope_id();
				_set_scope_reason(0);
				Rec.content({
					depth: depth + 1,
					content: _content_resume("__tests__/template.marko_4*content", () => {
						_scope_reason();
						const $scope4_id = _scope_id();
						_html(`<em>held ${_text_mark($scope4_id, "#text/0", label, 2)}</em>`);
						_subscribe($Rec_content__label__closures, _scope($scope4_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "7:6"), "__tests__/template.marko_4_label#1:9/subscribe");
					}, $scope2_id)
				});
				_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4");
				return 0;
			}
		}, $scope1_id, "#text/3", 0, 0);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			content,
			shown,
			label,
			"ClosureScopes:label/12": $Rec_content__label__closures
		}, "__tests__/template.marko", "1:2", {
			content: "1:22",
			shown: "2:8",
			label: "3:10"
		});
	}, $scope0_id) };
	Rec.content({ depth: 0 });
}, 1);
