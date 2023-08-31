import { useState } from 'react';

function GenreSelect({genresList, defaultGenre, onSelect}) {
  const [selectedGenre, setSelectedGenre] = useState(defaultGenre);

  function handleClick(genre) {
    setSelectedGenre(genre);
    onSelect(genre);
  }

  return (
    <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
      {genresList.map(genre => {
        return (
          <li className={`${selectedGenre?.id === genre.id ? 'bg-gray-400' : ''}`} key={genre.id} onClick={() => handleClick(genre)}>
            <a className='mr-4 md:mr-6 uppercase underline' href='#'>{genre.name}</a>
          </li>
        )
      })}
    </ul>
  );
}

export default GenreSelect;
