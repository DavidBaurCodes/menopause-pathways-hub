import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  Home, 
  BookOpen, 
  GraduationCap, 
  PenTool, 
  Lightbulb, 
  Video, 
  Users, 
  Building2, 
  Shield,
  ClipboardList,
  Search,
  Phone
} from "lucide-react";

const navigationGroups = [
  {
    label: "Navigation",
    items: [
      { title: "Übersicht", url: "/", icon: Home },
    ]
  },
  {
    label: "Wissen & Tools",
    items: [
      { title: "Assessment", url: "/assessment", icon: ClipboardList },
      { title: "Lexikon", url: "/lexicon", icon: BookOpen },
      { title: "Wissen", url: "/knowledge", icon: GraduationCap },
    ]
  },
  {
    label: "Content & Community", 
    items: [
      { title: "Blog", url: "/blog", icon: PenTool },
      { title: "Lifehacks", url: "/lifehacks", icon: Lightbulb },
      { title: "Medien", url: "/podcasts", icon: Video },
      { title: "Community", url: "/community", icon: Users },
    ]
  },
  {
    label: "Services",
    items: [
      { title: "Arbeitsplatz", url: "/workplace", icon: Building2 },
      { title: "Leistungen", url: "/benefits", icon: Shield },
      { title: "Informationskanäle", url: "/channels", icon: Phone },
    ]
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = (isActive: boolean) =>
    isActive ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  const isGroupActive = (items: typeof navigationGroups[0]['items']) =>
    items.some(item => isActive(item.url));

  return (
    <Sidebar className={state === "collapsed" ? "w-14" : "w-60"} collapsible="icon">
      <SidebarContent className="py-4">
        {navigationGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 py-2">
              {state === "expanded" && group.label}
            </SidebarGroupLabel>
            
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        end 
                        className={({ isActive }) => getNavCls(isActive)}
                      >
                        <item.icon className="h-4 w-4 flex-shrink-0" />
                        {state === "expanded" && <span className="ml-3">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}