export default defineNuxtRouteMiddleware((to, from) => {
  let isAdmin = false;
  console.log("to", to);

  console.log("from", from);

  const secretValue = to.query.secret;

  if (isAdmin || secretValue === "1234") {
    return navigateTo("/admin");
  } else {
    return navigateTo("/login");
  }
});
