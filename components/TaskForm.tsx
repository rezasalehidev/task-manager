import { Task } from "@/types";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

interface TaskFormProps {
  task?: Task;
  onSubmit: (task: Task) => void;
}

const FormContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
`;

const SubmitButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  margin-top: 20px;
  &:hover {
    background-color: #005bb5;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

export const TaskForm: React.FC<TaskFormProps> = ({ task, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Task>({
    defaultValues: task || {
      title: "",
      description: "",
      status: "in-progress",
    },
  });

  const onFormSubmit: SubmitHandler<Task> = (data) => {
    onSubmit(data);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Input
          {...register("title", { required: "Title is required" })}
          placeholder="Task Title"
        />
        {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}

        <Textarea
          {...register("description", { required: "Description is required" })}
          placeholder="Task Description"
        />
        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}

        <Select {...register("status")}>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </Select>

        <SubmitButton type="submit">Save Task</SubmitButton>
      </form>
    </FormContainer>
  );
};
