import type { Meta, StoryObj } from "@storybook/react";
import { TaskList } from "./task-list";

import { TaskListProvider } from "./task-list-context";

const meta = {
  title: "Decorators Lesson/TaskList",
  component: TaskList,

  // decorator
  decorators: [
    (PartialStory, ctx) => {
      return (
        <TaskListProvider
          // after we set up loader we can pass this
          tasks={ctx.loaded.tasks}
          /* tasks={[
            { id: "1", title: "Task 1", completed: false },
            { id: "2", title: "Task 2", completed: true },
            { id: "3", title: "Task 3", completed: false },
          ]} */
        >
          <PartialStory {...ctx} />
        </TaskListProvider>
      );
    },
  ],
  // loader
  loaders: [
    async (ctx) => {
      const tasks = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      ).then((response) => response.json());

      return { tasks };
    },
  ],
} as Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
