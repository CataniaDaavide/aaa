import "./globals.css";

//#region components
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { AppSidebar } from "@/components/AppSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ModeToggle } from "@/components/ModeToggle";
import { Card, CardContent } from "@/components/ui/card";
//#endregion

export const metadata = {
  title: "Studio Bona",
  description: "Portale Studio Bona",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`w-screen h-screen antialiased flex`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar/>
            <div className="w-full flex-1 justify-items-center overflow-y-auto">
              <Navbar/>
              {children}
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <Card className="border-l-0 p-1 rounded-none w-full ">
      <CardContent className={"flex  justify-between py-2 px-1"}>
        <div className="flex gap-3 items-center">
          <SidebarTrigger />
          <NavbarBeadcrumbList />
        </div>
        <ModeToggle className="" />
      </CardContent>
    </Card>
  );
}

function NavbarBeadcrumbList() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/users">Users</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
