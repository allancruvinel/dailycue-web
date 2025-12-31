import { logoutRequest } from "@/api/auth";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { api } from "@/lib/axios";
import { isAxiosError } from "axios";
import {
  Binoculars,
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  LogOut,
} from "lucide-react";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { Link, Outlet, useNavigate } from "react-router";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Chats",
    url: "/chats",
    icon: Inbox,
  },
  {
    title: "Cues",
    url: "/cues",
    icon: Calendar,
  },
  {
    title: "Schedules",
    url: "/schedules",
    icon: Search,
  },
  {
    title: "Configurações",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Assinatura",
    url: "/subscription",
    icon: Binoculars,
  },
];

export const AppLayout = () => {
  const navigate = useNavigate();

  const { mutateAsync: logout } = useMutation({
    mutationFn: logoutRequest,
    onSuccess: () => {
      navigate("/login");
    },
  });

  useEffect(() => {
    const interceptorid = api.interceptors.response.use(
      (response) => response,
      (error) => {
        //alert("Sua sessão expirou. Por favor, faça login novamente.");
        console.log("Erro de autenticação detectado:", error);
        if (isAxiosError(error)) {
          const status = error.response?.status;
          const code = error.response?.statusText;
          console.log("Status:", status, "Code:", code);
          if (status === 401 && code === "Unauthorized") {
            navigate("/login", { replace: true });
          }
        }
        return Promise.reject(error);
      },
    );

    return () => {
      api.interceptors.response.eject(interceptorid);
    };
  }, [navigate]);

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Daily Cue</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  <SidebarMenuItem key={"logout"}>
                    <SidebarMenuButton asChild>
                      <div
                        className="cursor-pointer"
                        onClick={async () => logout()}
                      >
                        <LogOut />
                        <span>Sair</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">
          <SidebarTrigger />
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
