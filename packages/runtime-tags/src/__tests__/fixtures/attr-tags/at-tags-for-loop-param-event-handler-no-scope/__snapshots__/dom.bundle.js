// tags/my-menu/index.marko
const $for_content__item__script = _script("b0", ($scope) => _attrs_script($scope, "a"));

// template.marko
const $onClick = ($locals) => function(ev) {
	ev.target.textContent = $locals.e;
};
_resumed.a0 = $onClick;
