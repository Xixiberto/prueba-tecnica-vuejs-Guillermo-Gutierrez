import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Login from "@/pages/Login.vue";
import SignUp from "@/pages/Signup.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { requiresAuth: true }
        
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
        meta: { requiresAuth: true }
      },
      {
        path: "table",
        name: "Table List",
        component: TableList,
        meta: { requiresAuth: true }
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography,
        meta: { requiresAuth: true }
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
        meta: { requiresAuth: true }
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true,
          requiresAuth: true 
        },
        component: Maps,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
        meta: { requiresAuth: true }
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO,
        meta: { requiresAuth: true }
      },
      {
        path: "login",
        name: "Login",
        component: Login,
      },
      {
        path: "signup",
        name: "SignUp",
        component: SignUp,
      },
    ],
  },
];



export default routes;
