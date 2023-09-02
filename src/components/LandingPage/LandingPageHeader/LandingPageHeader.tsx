import Image from "next/image";
import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";

const LandingPageHeader = () => {
  const { userId } = auth();
  return (
    <div className="landing-page-header-container">
      <div className="landing-page-header-block1">
        <Image
          className="landing-logo"
          src="/assets/landingPageLogo.jpeg"
          height={58}
          width={42}
          alt="logo"
        />
        <p>Trumpet.ai</p>
      </div>

      <div className="landing-page-header-block2">
        <span>Features</span>
        <span>Blog</span>
        <span>Pricing</span>
      </div>

      <div className="landing-page-header-block3">
        {!userId && (
          <>
            <Link href="/sign-in">Log in</Link>
            <Link href="/sign-up" className="Sign-up">
              Sign up
            </Link>
          </>
        )}
        {userId && <UserButton afterSignOutUrl="/" />}
      </div>
    </div>
  );
};

export default LandingPageHeader;