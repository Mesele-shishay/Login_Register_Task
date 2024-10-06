import { Button } from "./components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Register</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Register User</SheetTitle>
            <SheetDescription>
              Add new user to our system
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fname" className="text-right">
                First Name
              </Label>
              <Input id="fname" className="col-span-3" placeholder="First Name"/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="lname" className="text-right">
                Last Name
              </Label>
              <Input id="lname" placeholder="Last Name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="address" className="text-right">
                Adress 
              </Label>
              <Input id="adress" className="col-span-3" placeholder="Mekele or Somewhere"/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input id="phone" placeholder="0912......" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
