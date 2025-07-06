// middleware/auth.ts

export default defineNuxtRouteMiddleware((to, from) => {
  let token = null;

  // Check if the code is running on the client-side (in the browser)
  if (process.client) {
    token = localStorage.getItem('hypervent_token');
  }

  // If there's no token (either not found or not on client-side initially),
  // redirect to the login page.
  // The client-side re-render will then pick up the redirection.
  if (!token) {
    // Make sure to only navigate on client-side, otherwise Nuxt will complain
    // about pushing during SSR. navigateTo handles this elegantly.
    return navigateTo('/login');
  }

  // If a token exists, allow access to the route.
  // No explicit return is needed if it's implicitly allowed.
});