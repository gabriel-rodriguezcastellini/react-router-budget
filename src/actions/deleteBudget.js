import { toast } from "react-toastify";
import { deleteItem } from "../helpers";

export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });
    toast.success("Budget deleted successfully!");
  } catch (error) {
    throw new Error("There was a problem deleting your budget.");
  }
}
