import { type TinaField } from "tinacms";
import { description, title } from "../primitives";

export const meta: TinaField[] = [
  title,
  description,
  {
    label: "Logo",
    name: "logo",
    type: "image",
  },
  {
    label: "Favicon",
    name: "favicon",
    type: "image",
  },
  {
    label: "Social",
    name: "social",
    type: "image",
  },
];
