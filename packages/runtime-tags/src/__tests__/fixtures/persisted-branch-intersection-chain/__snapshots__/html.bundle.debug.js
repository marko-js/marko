// template.marko
_renderer_shells({
	"__tests__/template.marko_1_shell": ",`__tests__/template.marko_1_shell __tests__/template.marko_1_count/init;Db%;<p>A <!></p>`",
	"__tests__/template.marko_2_shell": ",`__tests__/template.marko_2_shell __tests__/template.marko_2_count/init;Db%;<p>B <!></p>`",
	"__tests__/template.marko_3_shell": ",`__tests__/template.marko_3_shell __tests__/template.marko_3_count/init;Db%;<p>None <!></p>`"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_kind = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><div>");
	_if(() => {
		if (input.kind === "a") {
			const $scope1_id = _scope_id();
			_html(`<p>A <!>${_escape(input.title + " #" + count)}${_el_resume($scope1_id, "#text/0")}</p>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:6");
			return 0;
		} else if (input.kind === "b") {
			const $scope2_id = _scope_id();
			_html(`<p>B <!>${_escape(input.title + " @" + count)}${_el_resume($scope2_id, "#text/0")}</p>`);
			writeScope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:6");
			return 1;
		} else {
			const $scope3_id = _scope_id();
			_html(`<p>None <!>${_escape(count)}${_el_resume($scope3_id, "#text/0")}</p>`);
			writeScope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "10:6");
			return 2;
		}
	}, $scope0_id, "#div/0", 1, $sg__input_kind, $sg__input_kind, void 0, void 0, [
		"__tests__/template.marko_1_shell",
		"__tests__/template.marko_2_shell",
		"__tests__/template.marko_3_shell"
	]);
	_html(`</div>${_el_resume($scope0_id, "#div/0", $sg__input_kind)}<span>${_escape(input.title + " root #" + count)}${_el_resume($scope0_id, "#text/1")}</span><button>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_title: input.title,
		count
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	}) : _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1);
