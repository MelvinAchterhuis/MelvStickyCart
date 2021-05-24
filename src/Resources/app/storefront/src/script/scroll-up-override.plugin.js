import ScrollUp from 'src/plugin/scroll-up/scroll-up.plugin';
import DomAccess from 'src/helper/dom-access.helper';

export default class MelvScrollUpPlugin extends ScrollUp {

    _toggleVisibility() {
        this._stickyCart = DomAccess.querySelector(document, '.sticky-cart', false);
        this._productPage = DomAccess.querySelector(document, '.is-ctl-product', false);

        if (window.scrollY > this.options.visiblePos && this._stickyCart && this._productPage) {
            this._stickyCart.classList.add(this.options.visibleCls);
        } else if (this._stickyCart && this._productPage) {
            this._stickyCart.classList.remove(this.options.visibleCls);
        }

        super._toggleVisibility();
    }
}
