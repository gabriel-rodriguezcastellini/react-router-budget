import React from "react";
import { getAllMatchingItems } from "../helpers";

export async function budgetLoader({ params }) {
  const budget = await getAllMatchingItems(
    {
      category: "budgets",
      key: "id",
      value: params.id,
    },
    [0]
  );
}

const BudgetPage = () => {
  return <div>BudgetPage</div>;
};

export default BudgetPage;
