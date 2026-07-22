// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<ul>`);
	_region(() => {
		forOf($global().items, (item) => {
			const $scope1_id = _scope_id();
			_html(`<li>${_escape(item.id)}${_el_resume($scope1_id, "a", _persisted_reason())}:${_sep(_persisted_reason())}${_escape(item.label)}${_el_resume($scope1_id, "b", _persisted_reason())}</li>`);
			_persisted_reason() && writeScope($scope1_id, {});
		});
	}, $scope0_id, "c");
	_html("<li class=trailing>end</li></ul>");
	_script($scope0_id, "a1");
	writeScope($scope0_id, { d: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": ["<button class=count>clicked <!></button><ul><!><li class=trailing>end</li></ul>", " Db%lD%l"],
	"a": ["<button class=count>clicked <!></button><ul><!><li class=trailing>end</li></ul>", " Db%lD%l"]
});
