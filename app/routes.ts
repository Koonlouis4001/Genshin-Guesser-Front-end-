import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("endless", "routes/endless.tsx"),
] satisfies RouteConfig;
