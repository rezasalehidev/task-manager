"use client";

import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Link from "next/link";
import styled from "styled-components";
import { Header, TaskList } from "@/components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const AddTaskLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  background-color: #0070f3;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    background-color: #005bb5;
  }
`;

const HomePage = () => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return <div>No tasks available</div>;
  }

  const { tasks } = taskContext;

  return (
    <Container>
      <Header title="Task Manager" />
      <AddTaskLink href="/add-task">Add New Task</AddTaskLink>
      <TaskList tasks={tasks} />
    </Container>
  );
};

export default HomePage;
