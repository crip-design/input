(function (d, $) {
    'use strict';

    $.fn.cripInput = function (options) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            labelVisible: true
        }, options);

        return this.each(function () {
            var element = $(this),
                formControl = element.find('.form-control'),
                controlLabel = element.find('.control-label');

            formControl
                .on('focus', focusElement)
                .on('blur', blurElement);

            hasVal();

            function focusElement() {
                element.addClass('focused');
                controlLabel.removeClass('hidden');
            }

            function blurElement() {
                element.removeClass('focused');
                if (!hasVal() && settings.labelVisible)
                    element.removeClass('has-content');
            }

            function hasVal() {
                var hasValue = formControl.val() != "";
                if (hasValue) {
                    controlLabel.addClass('hidden');

                    if (settings.labelVisible)
                        element.addClass('has-content');
                }
                return hasValue;
            }
        });
    };
})(document, jQuery);