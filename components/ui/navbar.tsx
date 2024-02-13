"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from '@/components/ui/mode-toggle'
import { cn } from "@/lib/utils"
//import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "GitHub",
    href: "https://github.com/ohdy518",
    description:
      "View my GitHub page, @ohdy518",
  },
  {
    title: "Buy me a coffee",
    href: "/workinprogress",
    description:
      "Love my work? Buy me a coffee! Thanks. ",
  },
  {
    title: "Projects",
    href: "/projects",
    description:
      "View some of the projects I've done.",
  },
  {
    title: "Visit me in real life",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  
  {
    title: "Email",
    href: "mailto:ohdy518@gmail.com?subject=%5BPORTFOLIO%5D%20(write%20subject%20here)&body=(write%20content%20here)%0D%0A%0D%0A%0D%0A%3E%20(write%20nickname%20here)%20via%20the%20portfolio%20website",
    description:
      "Email me for anything, from a DMCA claim to an advertisement. ",
  },
  {
    title: "Discord",
    href: "https://discord.gg/e4njvFEj5d",
    description:
      "DM me on Discord for simple questions. ",
  },
]

export function NavigationMenuDemo() {
  return (
    <div className="flex ">
    <NavigationMenu>
      <NavigationMenuList>
      {/*<NavigationMenuItem>
          <NavigationMenuTrigger>
            Portfolio
          </NavigationMenuTrigger>
          <div className="absolute left-8 pl-30">
          <NavigationMenuContent >
            <MenubarDemo></MenubarDemo>
          </NavigationMenuContent>
          </div>
  </NavigationMenuItem>*/}
        <NavigationMenuItem>
          <NavigationMenuTrigger>About me</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/*<Icons.logo className="h-6 w-6" />*/}
                    <Image src="/profile_photo_cropped.png" width={500} height={500} alt="profile photo" />
                    
                    <div className="mb-2 mt-4 text-lg font-medium">
                      ohdy518
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      A student living in South Korea. Programming and designing hobbyist. 
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="https://github.com/ohdy518" title="GitHub" >
                View my GitHub page, @ohdy518 
              </ListItem>
              <ListItem href="/projects" title="Projects">
                View some of the projects I&apos;ve done.
              </ListItem>
              <ListItem href="mailto:ohdy518@gmail.com?subject=%5BPORTFOLIO%5D%20(write%20subject%20here)&body=(write%20content%20here)%0D%0A%0D%0A%0D%0A%3E%20(write%20nickname%20here)%20via%20the%20portfolio%20website" title="Email">
              Email me for anything, from a DMCA claim to an advertisement. 
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Contact me</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          {/*<Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle() }>
              Documentation
            </NavigationMenuLink>
              </Link>*/}
        </NavigationMenuItem>

        </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu className="absolute right-0 ">
        <NavigationMenuList className="">
        <NavigationMenuItem className="pr-8">
        
            <ModeToggle></ModeToggle>
        
        
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
