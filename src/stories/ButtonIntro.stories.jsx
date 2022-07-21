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

export const Primary = () => <Button primary>Button</Button>;
// export const Primary = () => <Button primary label='Button' />;

export const Secondary = () => <Button backgroundColor="#ff0" label="😄👍😍💯" />;
export const Tertiary = () => <Button backgroundColor="#ff0" label="📚📕📈🤓" />;