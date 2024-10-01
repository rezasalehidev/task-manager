export interface Task {
    id: string;
    title: string;
    description: string;
    status: "in-progress" | "completed";
  }

  export interface TaskListProps {
    tasks: Task[];
  }
  
  export interface TaskStatusProps {
    status: "in-progress" | "completed";
  }