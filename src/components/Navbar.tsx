import { ThemeToggle } from "./ui/themeToggle";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" fixed top-0 left-0 w-full flex justify-between py-6 px-32">
      <div>
        <h1>NoteMD</h1>
      </div>
      <div className=" flex items-center gap-x-6">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
