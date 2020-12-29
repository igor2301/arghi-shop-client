import AGIcon from '@shared/AGIcon';
import { AGIconProps, AGIconType } from '@shared/AGIcon/AGIcon';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Arghi Shop/Button',
  component: AGIcon
} as Meta;

const Template: Story<AGIconProps> = (args) => <AGIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  icon: AGIconType.Envelop
};
