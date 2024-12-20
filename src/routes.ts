import { type RouteConfig, route } from "@react-router/dev/routes"

export default [
  route("/", "./pages/Home.tsx"),
  route("/contacts", "./pages/Contacts.tsx"),
  route("/photos", "./pages/Photos.tsx"),
  route("*?", "catchall.tsx"),
] satisfies RouteConfig
