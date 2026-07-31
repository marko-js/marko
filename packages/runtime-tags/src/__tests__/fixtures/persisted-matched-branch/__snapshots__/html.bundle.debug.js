// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason(), $si__input_err = _serialize_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.err) {
			const $scope2_id = _scope_id();
			_html("<strong>Something went wrong</strong>");
			writeScope($scope2_id, {}, "__tests__/template.marko", "2:4");
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_html(`<h1${_patch_attr($scope1_id, "#h1/0", "title", input.variant)}${_attr("title", input.variant)}>${_patch_text($scope1_id, "#text/1", input.title)}${_escape(input.title)}${_el_resume($scope1_id, "#text/1")}</h1>${_el_resume($scope1_id, "#h1/0")}`);
			writeScope($scope1_id, { _: _serialize_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4");
			return 1;
		}
	}, $scope0_id, "#div/0", 1, 1, _serialize_guard($scope0_reason, 1));
	_html(`</div>${_el_resume($scope0_id, "#div/0")}`);
	writeScope($scope0_id, {
		input_variant: $si__input_err && input.variant,
		input_title: $si__input_err && input.title
	}, "__tests__/template.marko", 0, {
		input_variant: ["input.variant"],
		input_title: ["input.title"]
	});
}, 1);
