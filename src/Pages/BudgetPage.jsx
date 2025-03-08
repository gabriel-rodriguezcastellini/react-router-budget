import React from "react";
import { getAllMatchingItems } from "../helpers";
import { useLoaderData } from "react-router-dom";
import BudgetItem from "../components/BudgetItem";

export async function budgetLoader({ params }) {
  const budget = await getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: params.id,
  })[0];
  if (!budget) {
    throw new Error("The budget you're trying to find doesn't exist");
  }
  return { budget };
}

const BudgetPage = () => {
  const { budget } = useLoaderData();
  return (
    <div className="grid-lg">
      <h1 className="h2">
        <span className="accent">{budget.name}</span> Overview
      </h1>
      <div className="flex-lg">
        <BudgetItem budget={budget} />
      </div>
    </div>
  );
};

export default BudgetPage;
