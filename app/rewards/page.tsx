export default function RewardsPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Rewards</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3>Extra 30 mins</h3>
          <p>120 pts</p>
          <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded">
            Redeem
          </button>
        </div>
      </div>
    </div>
  );
}