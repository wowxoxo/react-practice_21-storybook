import React from 'react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Intro/Button',
  component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const PrimaryWithArgs = Template.bind({});
PrimaryWithArgs.args = {
   primary: true,
   label: 'Button',
};

export const SecondaryWithArgs = Template.bind({});
SecondaryWithArgs.args = { ...PrimaryWithArgs.args, label: '😄👍😍💯' };