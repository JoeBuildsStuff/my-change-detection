"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  AudioLines, Plus, Users } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { SidebarLogo } from "@/components/app-sidebar-logo"


import Link from "next/link"



export function AppSidebar() {
  const pathname = usePathname()
 
  const navigationItems = [
    {
      label: "Scape",
      href: "/workspace/scape",
      icon: Users,
      action: () => {},
      isActionLoading: false,
      actionAriaLabel: "Create new scape",
    },
  ]

  return (
    <>
      <Sidebar>
        <SidebarHeader className="border-b border-border">
          <SidebarLogo />
        </SidebarHeader>
        <SidebarContent className="flex flex-col">
          {/* Quick Actions */}
          <SidebarGroup>
            <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton className="w-full justify-start">
                      <AudioLines className="w-4 h-4 mr-2 flex-none" />
                      <span>New</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Navigation */}
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigationItems.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton 
                      asChild
                      className={cn(
                        "w-full justify-start",
                        pathname.startsWith(item.href)
                          ? "bg-muted/50 hover:bg-muted font-semibold"
                          : "hover:bg-muted"
                      )}
                    >
                      <Link href={item.href}>
                        <item.icon className="w-3.5 h-3.5 mr-2 flex-none text-muted-foreground" />
                        <span className="font-normal">{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                    {item.action && (
                      <SidebarMenuAction asChild>
                        <button
                          onClick={item.action}
                          disabled={item.isActionLoading}
                          className="disabled:cursor-not-allowed text-muted-foreground hover:text-muted-foreground"
                          aria-label={item.actionAriaLabel}
                        >
                          {item.isActionLoading ? (
                            <Spinner className="stroke-5 size-4 stroke-muted-foreground" />
                          ) : (
                            <Plus className="h-4 w-4 text-muted-foreground" />
                          )}
                        </button>
                      </SidebarMenuAction>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>


          
        </SidebarContent>
        <SidebarFooter className="border-t border-border">
          User
        </SidebarFooter>
      </Sidebar>
    </>
  )
}
