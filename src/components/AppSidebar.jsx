//#region components
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  Home,
  Folder,
  Settings,
  Users,
  ChevronRight,
  FileText,
} from "lucide-react";
//#endregion

// ====== Configurazione menu ======
const menuGroups = [
  {
    label: "Dashboard",
    items: [
      {
        icon: Home,
        label: "Home",
        href: "/dashboard",
      },
      {
        icon: Users,
        label: "Users",
        href: "/users",
      },
      {
        icon: Folder,
        label: "Projects",
        collapsible: true,
        subItems: [
          { label: "Active", href: "/projects/active" },
          { label: "Archived", href: "/projects/archived" },
        ],
      },
    ],
  },
  {
    label: "Settings",
    items: [
      {
        icon: Settings,
        label: "Settings",
        collapsible: true,
        subItems: [
          { label: "Profile", href: "/settings/profile" },
          { label: "Billing", href: "/settings/billing" },
        ],
      },
      {
        icon: FileText,
        label: "Reports",
        href: "/reports",
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className={"overflow-hidden"}>
      <SidebarHeader>
        <div className="px-4 py-2 text-lg font-semibold">MyApp</div>
      </SidebarHeader>

      <SidebarContent>
        {menuGroups.map((group, i) => (
          <SidebarGroup key={i}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item, j) =>
                  item.collapsible ? (
                    <Collapsible key={j}>
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton>
                            <item.icon className="mr-2 h-5 w-5" />
                            <span>{item.label}</span>
                            <ChevronRight className="ml-auto transition-transform data-[state=open]:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.subItems?.map((sub, k) => (
                              <SidebarMenuSubItem key={k}>
                                <SidebarMenuSubButton asChild>
                                  <a href={sub.href}>
                                    <span>{sub.label}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ) : (
                    <SidebarMenuItem key={j}>
                      <SidebarMenuButton asChild>
                        <a href={item.href}>
                          <item.icon className="mr-2 h-5 w-5" />
                          <span>{item.label}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <div className="p-3 text-sm text-muted-foreground">v1.0.0</div>
      </SidebarFooter>
    </Sidebar>
  );
}
