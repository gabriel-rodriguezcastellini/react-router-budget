import React from "react";
import { getAllMatchingItems } from "../helpers";
import { useLoaderData } from "react-router-dom";

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
  return <div>{budget.name}</div>;
};

export default BudgetPage;
