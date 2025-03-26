import { deleteItem } from "../helpers";

export function deleteBudget({ params }) {
  deleteItem({
    key: "budgets",
    id: params.id,
  });
}
