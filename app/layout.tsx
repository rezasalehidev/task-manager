import { TaskProvider } from "../context/TaskContext";
import "./globals.css";

export const metadata = {
  title: "Task Manager",
  description: "Manage your tasks efficiently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>{children}</TaskProvider>
      </body>
    </html>
  );
}
