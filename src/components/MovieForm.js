import '../style/movieForm.scss';
import React, { useState } from 'react';

const MovieForm = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [age, setAge] = useState('A');
  const [genre, setGenre] = useState([]);

  const handleChange = (ev) => {
    const isCheck = ev.target.type === 'radio' ? true : false;

    const updateByName = (ev) => {
      const field = ev.target.name;
      if (field === 'title') {
        setTitle(ev.target.value);
      } else if (field === 'description') {
        setDescription(ev.target.value);
      } else if (field === 'language') {
        setLanguage(ev.target.value);
      }
    };

    const updateByChecked = (ev) => {
      const field = ev.target.checked;
      if (field) {
        setAge(ev.target.value);
      }
    };

    const updateData = isCheck ? updateByChecked : updateByName;

    updateData(ev);
  };

  const handleGenre = (ev) => {
    console.log(ev.target.name, ev.target.value, ev.target.checked);

    if (ev.target.checked && genre.length < 3) {
      setGenre([...genre, ev.target.value]);
    } else {
      setGenre(genre.filter((pepino) => ev.target.value !== pepino));
    }
  };

  const handleReset = () => {
    setTitle('');
    setDescription('');
    setLanguage('');
    setAge('');
    setGenre([]);
  };

  return (
    <>
      <h2 className="movieTitle">About your favourite movie</h2>
      <div className="movieForm">
        <form className="form" action="">
          <div className="info">
            <input
              className="inputTitle"
              type="text"
              name="title"
              placeholder="movie title"
              onChange={handleChange}
              value={title}
            />
            <textarea
              className="textArea"
              name="description"
              id="description"
              cols="30"
              rows="7"
              placeholder="movie description"
              onChange={handleChange}
              value={description}
            ></textarea>

            <select
              className="select"
              name="language"
              id="select"
              onChange={handleChange}
              value={language}
            >
              <option value="Iglés">GB</option>
              <option value="Español">ES</option>
              <option value="Euskera">EA</option>
            </select>
          </div>
          <div className="wrap">
            <div className="age">
              <label htmlFor="age-A">
                <input
                  name="age"
                  id="age-A"
                  type="radio"
                  value="A"
                  checked={age === 'A'}
                  onChange={handleChange}
                />
                A
              </label>
              <label htmlFor="age-7">
                <input
                  name="age"
                  id="age-7"
                  type="radio"
                  value="7"
                  checked={age === '7'}
                  onChange={handleChange}
                />
                7
              </label>
              <label htmlFor="age-12">
                <input
                  name="age"
                  id="age-12"
                  type="radio"
                  value="12"
                  checked={age === '12'}
                  onChange={handleChange}
                />
                12
              </label>
              <label htmlFor="age-16">
                <input
                  name="age"
                  id="age-16"
                  type="radio"
                  value="16"
                  checked={age === '16'}
                  onChange={handleChange}
                />
                16
              </label>
              <label htmlFor="age-18">
                <input
                  name="age"
                  id="age-18"
                  type="radio"
                  value="18"
                  checked={age === '18'}
                  onChange={handleChange}
                />
                18
              </label>
            </div>
            <div className="genres">
              <label htmlFor="comedy">
                <input
                  name="genre"
                  id="comedy"
                  type="checkbox"
                  value="comedy"
                  /* disabled={disabled} */
                  checked={genre.includes('comedy')}
                  onChange={handleGenre}
                />
                comedy
              </label>
              <label htmlFor="drama">
                <input
                  name="genre"
                  id="drama"
                  type="checkbox"
                  value="drama"
                  /*  disabled={disabled} */
                  checked={genre.includes('drama')}
                  onChange={handleGenre}
                />
                drama
              </label>
              <label htmlFor="fantasy">
                <input
                  name="genre"
                  id="fantasy"
                  type="checkbox"
                  value="fantasy"
                  /*  disabled={disabled} */
                  checked={genre.includes('fantasy')}
                  onChange={handleGenre}
                />
                fantasy
              </label>
              <label htmlFor="action">
                <input
                  name="genre"
                  id="action"
                  type="checkbox"
                  value="action"
                  /*   disabled={disabled} */
                  checked={genre.includes('action')}
                  onChange={handleGenre}
                />
                action
              </label>
              <label htmlFor="family">
                <input
                  name="genre"
                  id="family"
                  type="checkbox"
                  value="family"
                  /*  disabled={disabled} */
                  checked={genre.includes('family')}
                  onChange={handleGenre}
                />
                family
              </label>
              <label htmlFor="horror">
                <input
                  name="genre"
                  id="horror"
                  type="checkbox"
                  value="horror"
                  /*  disabled={disabled} */
                  checked={genre.includes('horror')}
                  onChange={handleGenre}
                />
                horror
              </label>
            </div>
          </div>
        </form>
        <article className="article">
          <button className="resetBtn" type="button" onClick={handleReset}>
            Reset Info
          </button>
          <h2 className="text">TITLE: {title}</h2>
          <p className="text">Description: {description}</p>
          <p className="text">Language: {language}</p>
          <p className="text">Rating: {age}</p>
          <ul className="text">Genres (max.3): {genre.join(', ')}</ul>
        </article>
      </div>
    </>
  );
};

export default MovieForm;
