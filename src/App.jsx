function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        {/* Tambahan referensi Touhou - Cirno */}
        <div className="flex justify-center mb-2">
          <div className="text-center">
            <img 
              src="https://m.media-amazon.com/images/I/61CMzP-8YgL.jpg" 
              witdh="120px"
              height="90px"
              alt="Cirno" 
              className="w-16 h-16 mx-auto mb-1"
            />
            <span className="text-xs text-gray-500">Baka! (9)</span>
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-4 text-center">Welcome to Gensokyo!</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-bold text-blue-600 mb-1">Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none hover:border-blue-400 focus:border-blue-600 transition"
            placeholder="Insert Username"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold text-blue-600 mb-1">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none hover:border-blue-400 focus:border-blue-600 transition"
            placeholder="Insert Password"
          />
        </div>

        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 active:bg-blue-800 transition">
          Login
        </button>
        
        {/* Tambahan teks referensi Touhou */}
        <p className="mt-4 text-xs text-center text-gray-400">
          The strongest login page! (⑨)
        </p>
      </div>
    </div>
  );
}

export default App;