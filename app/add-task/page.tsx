"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { TaskContext } from "@/context";
import { Task } from "@/types";
import { Header, TaskForm } from "@/components";

const AddTask = () => {
  const { addTask } = useContext(TaskContext)!;
  const router = useRouter();

  const handleAddTask = (task: Task) => {
    addTask({ ...task, id: Date.now().toString() });
    router.push("/");
  };

  return (
    <div>
      <Header title="Add New Task" />
      <TaskForm onSubmit={handleAddTask} />
    </div>
  );
};

export default AddTask;
