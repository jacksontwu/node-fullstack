import { App } from 'vue';
import 'element-plus/dist/index.css';
import { ElButton, ElMessageBox } from 'element-plus';

const components = [ElButton];
const plugins = [ElMessageBox];

const ElementPlus = {
    install: (app: App<Element>) => {
        components.forEach((component: any) => app.component(component.name, component));

        plugins.forEach((plugin) => {
            app.use(plugin);
        });

        app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 };
    },
};
export default ElementPlus;
