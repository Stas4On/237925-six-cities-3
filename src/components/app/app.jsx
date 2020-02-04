import React from 'react';
import Main from "../main/main";

const App = (props) => {
  return (
    <React.Fragment>
      {/* eslint-disable-next-line react/prop-types */}
      <Main numberRentalOffers={props.numberRentalOffers}/>
    </React.Fragment>
  );
};

export default App;
