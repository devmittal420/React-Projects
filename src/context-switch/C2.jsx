import D2 from './D2';

const C2 = ({ uName, counter }) => {
  return (
    <div>
      <h1>I am C</h1>
      <D2 uName={uName} counter={counter} />
    </div>
  );
};

export default C2;