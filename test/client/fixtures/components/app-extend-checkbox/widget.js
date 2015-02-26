exports.extend = function(widget, widgetConfig) {
    var $el = widget.$();

    widget.data = widgetConfig.data;
    var checked = $el.hasClass('checked');

    function isChecked() {
        return checked;
    }

    function setChecked(newChecked) {
        if (checked === newChecked) {
            return;
        }

        checked = newChecked;

        if (checked) {
            $el.addClass('checked');
        } else {
            $el.removeClass('checked');
        }

        widget.emit('toggle', {
            checked: checked,
            data: widgetConfig.data
        });
    }

    widget.on('click', function() {
        setChecked(!checked);
    });

    widget.isChecked = isChecked;
    widget.setChecked = setChecked;
};