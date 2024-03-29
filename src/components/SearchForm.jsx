import { useState } from 'react';

function SearchForm({defaultSearchQuery, onSearch}) {
  const [query, setQuery] = useState(defaultSearchQuery);

  function handleClick(e) {
    e.preventDefault();
    onSearch(query);
  }
  
  return (
    <div>
      <h1>Find your movie</h1>
      <form>
        <div className='flex'>
          <div>
            <input
              id='search'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              type='text'
              placeholder='search some movies...'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div>
            <button
              className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
              onClick={(e) => handleClick(e)}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
