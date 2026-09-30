// template.marko
const staticVar = "static var";
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	console.log("identifier");
	const tagVar = "tag var";
	console.log(tagVar);
	console.log(staticVar);
}, 1);
