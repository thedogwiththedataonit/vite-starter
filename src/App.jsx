import { useState } from 'react'
import './App.css'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Combobox } from './components/Combobox'
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Car } from 'lucide-react'
import LineGraph from './graphs/LineGraph'
import SimpleAreaGraph from './graphs/SimpleAreaGraph';
import StackedAreaGraph from './graphs/StackedAreaGraph';
import StackedBarGraph from './graphs/StackedBarGraph';
import PieChartGraph from './graphs/PieChartGraph';
import { MoveLeft, Terminal, AlertCircle } from "lucide-react"

function App() {
  const [count, setCount] = useState(0)

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const pieData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];

  const height = 250;
  const width = 700;
  
  return (
    <div className="app-container">
      <Card className={"w-[380px]"}>
        <CardHeader>
          <CardTitle>Alert</CardTitle>
        </CardHeader>
        <CardContent>
        <Alert className={"mb-5"}>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
        </CardContent>
      </Card>

      <Card className={"w-[380px]"}>
        <CardHeader>
          <CardTitle>Menubar</CardTitle>
        </CardHeader>
        <CardContent>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </CardContent>
      </Card>


      <Card className={"w-[380px]"}>
        <CardHeader>
          <CardTitle>Command</CardTitle>
        </CardHeader>
        <CardContent>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>Profile</CommandItem>
                <CommandItem>Billing</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CardContent>
      </Card>


      <Card className={"w-[380px]"}>
        <CardHeader>
          <CardTitle>Alert Dialog</CardTitle>
        </CardHeader>
        <CardContent>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button variant="outline">Open</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>

      <Card className={"w-[380px]"}>
        <CardHeader>
          <CardTitle>Combobox</CardTitle>
        </CardHeader>
        <CardContent>
          <Combobox></Combobox>
        </CardContent>
      </Card>

      <Card className={"w-[380px]"}>
        <CardHeader>
          <CardTitle>Skeleton Loader</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="w-[100p] h-[20px] rounded-full my-5" />
          <Skeleton className="w-[100p] h-[20px] rounded-full my-5" />
          <Skeleton className="w-[100p] h-[20px] rounded-full my-5" />
          <Skeleton className="w-[20p] h-[20px] rounded-full my-5" />
        </CardContent>
      </Card>
      
      <Card className={"w-[380px]"}>
        <CardHeader>
          <CardTitle>Tabs</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-[100p]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className={"w-[380px]"}>
        <CardHeader>
          <CardTitle>Sheet Side Drawer</CardTitle>
        </CardHeader>
        <CardContent>
          <Sheet>
            <SheetTrigger><Button variant="secondary"><MoveLeft className="mr-2 h-4 w-4" /> Open</Button></SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </CardContent>
        <CardFooter>This is the footer</CardFooter>
      </Card>

      <Card >
        <CardHeader>
          <CardTitle>Line Graph</CardTitle>
        </CardHeader>
        <CardDescription>Graph Description</CardDescription>
        <CardContent>
          <LineGraph data={data} height={height} width={width}/>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={()=>setCount(count+1)}>Click Me</Button>
          <p className="leading-7 [&:not(:first-child)]:mt-6">{count}</p>
        </CardFooter>

      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Line Area Graph</CardTitle>
        </CardHeader>
        <CardDescription>Graph Description</CardDescription>
        <CardContent>
          <SimpleAreaGraph data={data} height={height} width={width}/>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Stacked Area Graph</CardTitle>
        </CardHeader>
        <CardDescription>Graph Description</CardDescription>
        <CardContent>
          <StackedAreaGraph data={data} height={height} width={width}/>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Stacked Bar Graph</CardTitle>
        </CardHeader>
        <CardDescription>Graph Description</CardDescription>
        <CardContent>
          <StackedBarGraph data={data} height={height} width={width}/>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Pie Graph</CardTitle>
        </CardHeader>
        <CardDescription>Graph Description</CardDescription>
        <CardContent>
          <PieChartGraph data={pieData} height={height} width={width}/>
        </CardContent>
      </Card>

    </div>
  )
}

export default App
