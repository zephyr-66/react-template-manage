import http from "~/utils/http";
import user from "./user";
export default { user: user(http) };
