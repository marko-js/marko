// legacy-greeting.js
function legacy_greeting_default(_input, out) {
	out.write("<b>legacy</b>");
}

// template.marko
legacy_greeting_default._ ??= legacy_greeting_default;
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button id=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", legacy_greeting_default, {}, _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				let inner = 0;
				_if(() => {
					if (inner) {
						const $scope3_id = _scope_id();
						_html(`<button id=inc>${_text_mark($scope3_id, "#text/1", inner)}</button>${_el_mark($scope3_id, "#button/0")}`);
						_script($scope3_id, "__tests__/template.marko_3", 0);
						_scope($scope3_id, {}, "__tests__/template.marko", "6:6");
						return 0;
					}
				}, $scope2_id, "#text/0", 1, 1, 0, 0, 1);
				_for_of([1, 2], () => {
					const $scope4_id = _scope_id();
					_html(`<span>${_text_mark($scope4_id, "#text/0", inner)}</span>`);
					_scope($scope4_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "9:6");
				}, 0, $scope2_id, "#text/1", 1, 0, 0, 0, 1);
				_scope($scope2_id, { inner }, "__tests__/template.marko", "4:4", { inner: "5:10" });
				_resume_branch($scope2_id);
			}, $scope1_id), 0, 0);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
