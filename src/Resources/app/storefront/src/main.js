import MelvScrollUpPlugin from './script/scroll-up-override.plugin';

const PluginManager = window.PluginManager;

PluginManager.override('ScrollUp', MelvScrollUpPlugin, '[data-scroll-up]');

if (module.hot) {
    module.hot.accept();
}
