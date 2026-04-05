import React, { useState, useEffect } from "react";

function BudgetGoal({ transactions }) {

  const [budget, setBudget] = useState(0);
  const [spent, setSpent] = useState(0);
  const [inputBudget, setInputBudget] = useState("");

  // Calculate total expense
  useEffect(() => {
    const totalExpense = transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, curr) => acc + Number(curr.amount), 0);

    setSpent(totalExpense);
  }, [transactions]);

  const handleSetBudget = () => {
    setBudget(Number(inputBudget));
    setInputBudget("");
  };

  const remaining = budget - spent;
  const percentage = budget ? (spent / budget) * 100 : 0;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-4">

      <h2 className="text-xl font-bold mb-4 text-gray-700">
        Budget Goal
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          type="number"
          placeholder="Enter Budget"
          value={inputBudget}
          onChange={(e) => setInputBudget(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button
          onClick={handleSetBudget}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Set
        </button>
      </div>

      <div className="space-y-2">

        <p className="text-gray-600">
          Budget Goal: <span className="font-semibold">₹{budget}</span>
        </p>

        <p className="text-gray-600">
          Total Spent: <span className="font-semibold">₹{spent}</span>
        </p>

        {remaining >= 0 ? (
          <p className="text-green-600 font-semibold">
            Remaining Budget: ₹{remaining}
          </p>
        ) : (
          <p className="text-red-600 font-semibold">
            Overspent: ₹{Math.abs(remaining)}
          </p>
        )}

      </div>

      {budget > 0 && (
        <div className="mt-4">

          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className={`h-4 rounded-full ${
                percentage > 100 ? "bg-red-500" : "bg-green-500"
              }`}
              style={{ width: `${Math.min(percentage, 100)}%` }}
            ></div>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            {percentage.toFixed(1)}% of budget used
          </p>

        </div>
      )}

    </div>
  );
}

export default BudgetGoal;