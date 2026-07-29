// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<ul>`);
	_region(() => {
		forOf($global().items, (item) => {
			const $scope1_id = _scope_id();
			_html(`<li>${_escape(item.id)}${_el_resume($scope1_id, "#text/0", _persisted_reason())}:${_sep(_persisted_reason())}${_escape(item.label)}${_el_resume($scope1_id, "#text/1", _persisted_reason())}</li>`);
			_persisted_reason() && writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
		});
	}, $scope0_id, "#text/2", "__tests__/template.marko_r0");
	_html("<li class=trailing>end</li></ul>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><ul><!><li class=trailing>end</li></ul>", " Db%lD%l"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><ul><!><li class=trailing>end</li></ul>", " Db%lD%l"]
});
