// tags/my-menu/index.marko
const $for_content__item__script = _script("b0", ($scope) => _attrs_script($scope, "a"));

// template.marko
const $item_content = _content_resume("a1", "Click");
function $onClick($locals) {
	return function(ev) {
		ev.target.textContent = $locals.e;
	};
}
_resume("a0", $onClick);
