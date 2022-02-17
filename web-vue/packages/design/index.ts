import { App } from 'vue'
import Icon from '../icon/src/index.vue'
import Loading from '../loading/src/index.vue'
import Button from '../button/src/index.vue'
import ButtonGroup from '../button/src/button-group.vue'
import Label from '../label/src/index.vue'

const components = [
  Icon, 
  Loading,
  Button, 
  ButtonGroup,
  Label,
];
const install = (app: App): void => {
  components.forEach((component) => {
    // 注册组件
    app.component(component.name, component);
  });
};

export {
  Icon,
  Loading,
  Button,
  ButtonGroup,
  Label
}

export default install