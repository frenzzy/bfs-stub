/**@module form*/
modules.define('form', ['i-bem__dom'], function (provide, BEMDOM) {
    'use strict';

    /**
     * @class Form
     * @extends BEMDOM
     * @exports
     */
    provide(BEMDOM.decl(this.name, /**@lends Form.prototype*/{
        onSetMod: {
            js: {
                /**
                 * @constructs
                 * @this Form
                 */
                inited: function () {
                    this.bindTo('submit', this._onSubmit);
                }
            }
        },

        /**
         * @param {Event} event
         * @fires Form#submit
         * @private
         */
        _onSubmit: function (event) {
            event.preventDefault();
            console.log('prevented');

            /**
             * @event Form#submit
             */
            this.emit('submit');
        },

        /**
         * @returns {string}
         */
        getVal: function () {
            return this.domElem.serialize();
        }
    }));
});
