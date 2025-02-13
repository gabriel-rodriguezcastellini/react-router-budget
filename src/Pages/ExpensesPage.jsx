import React from "react";
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

export function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}

const ExpensesPage = () => {
  const expenses = useLoaderData();
  return <div>ExpensesPage</div>;
};

export default ExpensesPage;
