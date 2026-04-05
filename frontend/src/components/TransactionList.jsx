import React from "react";
import { Trash2 } from "lucide-react";

function TransactionList({ transactions, deleteTransaction }) {

  return (
    <div className="bg-white shadow-lg rounded-xl p-4">

      <h2 className="text-lg font-bold mb-3">
        Transactions
      </h2>

      {transactions.length === 0 && (
        <p className="text-gray-500">No transactions yet</p>
      )}

      <ul className="space-y-2">

        {transactions.map((t) => (

          <li
            key={t._id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded"
          >

            <div>
              <p className="font-semibold">{t.title}</p>
              <p className="text-sm text-gray-500">
                {t.category}
              </p>
            </div>

            <div className="flex items-center gap-3">

              <span
                className={`font-bold ${
                  t.type === "income"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                ₹{t.amount}
              </span>

              <button
                onClick={() => deleteTransaction(t._id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18}/>
              </button>

            </div>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default TransactionList;