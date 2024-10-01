import styled from "styled-components";
import Link from "next/link";
import { useContext } from "react";
import { TaskListProps, TaskStatusProps } from "@/types";
import { TaskContext } from "@/context";

const TaskContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const TaskTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
`;

const TaskDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

const TaskStatus = styled.p<TaskStatusProps>`
  font-size: 12px;
  color: ${(props) => (props.status === "completed" ? "green" : "orange")};
  font-weight: bold;
`;

const TaskLink = styled(Link)`
  text-decoration: none;
  color: #0070f3;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  &:hover {
    background-color: #c0392b;
  }
`;

const CustomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return <div>No tasks available</div>;
  }

  const { deleteTask } = taskContext;

  return (
    <div>
      {tasks.map((task) => (
        <TaskContainer key={task.id}>
          <TaskTitle>{task.title}</TaskTitle>
          <TaskDescription>{task.description}</TaskDescription>
          <TaskStatus status={task.status}>
            {task.status === "completed" ? "Completed" : "In Progress"}
          </TaskStatus>
          <CustomDiv>
            <TaskLink href={`/task/${task.id}`}>View Details</TaskLink>
            <DeleteButton onClick={() => deleteTask(task.id)}>
              Delete
            </DeleteButton>
          </CustomDiv>
        </TaskContainer>
      ))}
    </div>
  );
};
