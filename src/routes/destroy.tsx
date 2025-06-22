import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export const action = async ({ params }: any) => {
  // throw new Error("oh dang!");
  await deleteContact(params.contactId);
  return redirect("/");
}