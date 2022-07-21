import React from 'react';

import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import LoginForm  from './LoginForm';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Intro/Form',
  component: LoginForm,
};

const Template = (args) => <LoginForm {...args} />;

export const EmptyForm = Template.bind({});

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
  
  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));

  // 👇 Assert DOM structure
  await expect(
    canvas.getByText(
      'Everything is perfect. Your account is ready and we should probably get you started!'
    )
  ).toBeInTheDocument();
};