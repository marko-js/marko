// template.marko
_enable_catch();
const $placeholder_content__setup__script = _script("a0", ($scope) => {
	console.log("ph script ran");
	$signal($scope, 0).onabort = () => console.log("ph aborted");
});
const $placeholder_content__setup = ($scope) => {
	$signalReset($scope, 0);
	$placeholder_content__setup__script($scope);
};
const $placeholder_content = _content_resume("a1", "<div>loading</div>", "b", $placeholder_content__setup);
