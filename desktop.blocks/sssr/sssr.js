/**@module sssr*/
modules.define('sssr', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
    'use strict';

    /**
     * @class SocialServicesSearchRobot
     * @extends BEMDOM
     * @exports
     */
    provide(BEMDOM.decl(this.name, /**@lends SocialServicesSearchRobot.prototype*/{
        onSetMod: {
            js: {
                /**
                 * @constructs
                 * @this SocialServicesSearchRobot
                 */
                inited: function () {
                    /**
                     * @type {BEMDOM}
                     * @private
                     */
                    this._form = this.findBlockInside('form');

                    /**
                     * @type {BEMDOM}
                     * @private
                     */
                    this._spin = this.findBlockInside('spin');

                    /**
                     * @type {BEMDOM}
                     * @private
                     */
                    this._content = this.findBlockInside('content');

                    this._initSocialServicesSearchRobot();
                }
            }
        },

        /**
         * @private
         */
        _initSocialServicesSearchRobot: function () {
            this._form.on('submit', this._sendRequest, this);
        },

        /**
         * @private
         */
        _sendRequest: function () {
            console.log('BEM-event');
            this._spin.setMod('progress');
            this._xhr = $.ajax({
                type: 'GET',
                dataType: 'html',
                cache: false,
                url: 'https://sssr.bem.yandex.net/search/',
                data: this._form.getVal() + '&twitter=on',
                success: this._onSuccess,
                context: this
            });
        },

        /**
         * @param {string} html
         * @private
         */
        _onSuccess: function (html) {
            console.log('ajax loaded');
            BEMDOM.update(this._content.domElem, html);
            this._spin.delMod('progress');
        }
    }));
});
