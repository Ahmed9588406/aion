import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes:
  [
   "/",
   "/api/lead-magnet",
   "/api/lead-magnet/publish",
   "/api/lead-magnet/unpublish",
   "/lead-magnets",
   "/api/openai",
   "/api/uploadthing",
   "/api/account" ]
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};