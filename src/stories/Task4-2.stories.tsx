import { ComponentStory, ComponentMeta } from '@storybook/react';
import Task4 from './Task4';

export default {
  component: Task4,
  title: 'Task/Task4-2 TS'
} as ComponentMeta<typeof Task4>;

const Template: ComponentStory<typeof Task4> = (args) => <Task4 {...args} />;

export const Default = Template.bind({});

// Default.args = {
//   task: {
//     id: '1',
//     title: 'Test Task',
//     state: 'TASK_INBOX'
//   }
// };

const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX'
};

Default.args = {
  task
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    // ...Default.args.task,
    ...task,
    state: 'TASK_PINNED'
  }
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    // ...Default.args.task,
    ...task,
    state: 'TASK_ARCHIVED'
  }
};
