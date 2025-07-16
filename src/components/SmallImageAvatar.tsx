import { Avatar } from "@visa/nova-react";

/// This is the base url for where your site is deployed. `import.meta.env.BASE_URL` is the environment variable used to import the base url for Vite. Change this import to match your build tool's base url.
// const BASE_URL = import.meta.env.BASE_URL;
const user = "Maggie Aragon";

export const SmallImageAvatar = () => {
  return (
    <Avatar alt={user} small tag="img" src={"/images/MaggieInFlowers.JPG"} />
  );
};
