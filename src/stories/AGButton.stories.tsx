import { Story, Meta } from '@storybook/react/types-6-0';
import AGButton from '@shared/AGButton';
import { AGButtonProps, AGButtonType } from '@shared/AGButton/AGButton';

export default {
  title: 'Arghi Shop/Button',
  component: AGButton,
} as Meta;

const Template: Story<AGButtonProps> = (args) => <AGButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Primary',
  type: AGButtonType.Primary
};