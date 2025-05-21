export type User = {
  id: string;
  avatar: string;
  name: string;
};

export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export type NewTask = Omit<Task, 'id' | 'userId'>;
