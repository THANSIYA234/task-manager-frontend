import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import Login from "../pages/auth/login";
import SignUp from "../pages/auth/signup";
import Welcome from "../pages/auth/welcome";
import TaskList from "../pages/tasks/task-list";
import CreateTask from "../pages/tasks/create-task";
import TaskDetail from "../pages/tasks/task-detail";

const rooteRoute = createRootRoute({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
});

const welcomeRoute = createRoute({
  getParentRoute: () => rooteRoute,
  path: "/",
  component: Welcome,
});

const loginRoute = createRoute({
  getParentRoute: () => rooteRoute,
  path: "/login",
  component: Login,
});

const registerRoute = createRoute({
  getParentRoute: () => rooteRoute,
  path: "/register",
  component: SignUp,
});

const taskListRoute = createRoute({
  getParentRoute: () => rooteRoute,
  path: "/task",
  component: TaskList,
});

const createTaskRoute = createRoute({
  getParentRoute: () => rooteRoute,
  path: "/create-task",
  component: CreateTask,
});
const taskDetailRoute = createRoute({
  getParentRoute: () => rooteRoute,
  path: "/task/$taskId",
  component: TaskDetail,
});

const routeTree = rooteRoute.addChildren([
  welcomeRoute,
  loginRoute,
  registerRoute,
  taskListRoute,
  createTaskRoute,
  taskDetailRoute,
]);

export const router = createRouter({ routeTree });
