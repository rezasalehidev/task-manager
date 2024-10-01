"use client";

import { useContext } from "react";
import { useRouter, useParams } from "next/navigation";
import { TaskContext } from "@/context";
import { Task } from "@/types";
import { Header, TaskForm } from "@/components";

const TaskDetails = () => {
  const { tasks, updateTask } = useContext(TaskContext)!;
  const { id } = useParams();
  const router = useRouter();

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return <div>Task not found</div>;
  }

  const handleUpdate = (updatedTask: Task) => {
    updateTask({ ...updatedTask, id: id as string });
    router.push("/");
  };

  return (
    <div>
      <Header title="Edit Task" />
      <TaskForm task={task} onSubmit={handleUpdate} />
    </div>
  );
};

export default TaskDetails;
