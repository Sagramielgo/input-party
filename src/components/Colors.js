import React, { useState } from 'react';
import '../style/colors.scss';
const Colors = (/* props */) => {
  const [selectedNumber, setSelectedNumber] = useState('');
  const [selectedColor, setSelectedColor] = useState('white');
  const [namePalette, setNamePalette] = useState('');

  const handleChangePalette = (ev) => {
    setSelectedNumber(ev.currentTarget.value);
    setSelectedColor(ev.currentTarget.className);
    setNamePalette(ev.currentTarget.name);
  };

  const handleResetColor = () => {
    setSelectedColor('white');
    setNamePalette('');
  };

  const handleResetNumber = () => {
    setSelectedNumber('');
  };
  return (
    <div className="container">
      <h3 className="titleColor">Choose your favorite color</h3>
      <section className="container_form">
        <form className="colorForm">
          <label htmlFor="pink" className="label">
            <input
              id="pink"
              type="radio"
              name="You've chosen Pink"
              className="pink"
              value="1"
              onChange={handleChangePalette}
              checked={selectedNumber === '1'}
            />
            <p className="textColor">Color 1: Pink</p>
          </label>

          <label className="label">
            <input
              type="radio"
              name="You've chosen Blue"
              className="blue"
              value="2"
              onChange={handleChangePalette}
              checked={selectedNumber === '2'}
            />
            <p className="textColor">Color 2: Blue</p>
          </label>
          <label className="label">
            <input
              type="radio"
              name="You've chosen Green"
              className="green"
              value="3"
              onChange={handleChangePalette}
              checked={selectedNumber === '3'}
            />
            <p className="textColor">Color 3: Green</p>
          </label>
        </form>
        <section className="results">
          <div className={`resultColor ${selectedColor}`}>{selectedNumber}</div>
          <p className="namePalette">{namePalette}</p>
        </section>
        <div>
          <button
            className="resetColors"
            type="button"
            onClick={handleResetColor}
          >
            Reset Color
          </button>
          <button
            className="resetColors"
            type="button"
            onClick={handleResetNumber}
          >
            Reset Number
          </button>
        </div>
      </section>
    </div>
  );
};

export default Colors;
