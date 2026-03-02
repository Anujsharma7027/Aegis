import { LayoutDashboard, ScrollText, TrendingUp, Settings } from "lucide-react";
import { NavLink } from "@/components/layout/NavLink";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar, } from "@/components/ui/sidebar";
const items = [
    { title: "Dashboard", url: "/", icon: LayoutDashboard },
    { title: "Trade Logs", url: "/trade-logs", icon: ScrollText },
    { title: "Performance", url: "/performance", icon: TrendingUp },
    { title: "Settings", url: "/settings", icon: Settings },
];
export function AppSidebar() {
    const { state } = useSidebar();
    const collapsed = state === "collapsed";
    return (<Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (<SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink to={item.url} end={item.url === "/"} className="hover:bg-accent/50" activeClassName="bg-accent text-accent-foreground font-medium">
                      <item.icon className="h-4 w-4"/>
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>);
}
