import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '@shared/Button';
import { ButtonProps, ButtonType } from '@shared/Button/Button';

export default {
  title: 'Arghi Shop/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Primary',
  type: ButtonType.Primary
};