import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteChinpokomon } from '../api/chinpokomonAPICalls';

// This function creates the template for each Chinpokomon card and sends it out to the rest of the program.
function ChinpokomonCard({ ChinpokomonObj, onUpdate }) {
  const deleteThisChinpokomon = () => {
    if (window.confirm(`Delete ${ChinpokomonObj.name}?`)) {
      deleteChinpokomon(ChinpokomonObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img
        variant="top"
        src={ChinpokomonObj.image} // Corrected reference to the `image` field
        alt={ChinpokomonObj.name}
        style={{ height: '400px' }}
      />
      <Card.Body>
        <Card.Title>{ChinpokomonObj.name}</Card.Title>
        <Button variant="danger" onClick={deleteThisChinpokomon} className="m-2">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

ChinpokomonCard.propTypes = {
  ChinpokomonObj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ChinpokomonCard;

// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// // import Link from 'next/link';
// import { deleteChinpokomon } from '../api/chinpokomonAPICalls';

// // This function creates the template for each Event card and sends it out to the rest of the program.
// function ChinpokomonCard({ ChinpokomonObj, onUpdate }) {
//   const deleteThisChinpokomon = () => {
//     if (window.confirm(`Delete ${Chinpokomon.name}?`)) {
//       deleteChinpokomon(ChinpokomonObj.firebaseKey).then(() => onUpdate());
//     }
//   };

//   return (
//     <Card style={{ width: '18rem', margin: '10px' }}>
//       <Card.Img variant="top" src={ChinpokomonObj.image} style={{ height: '400px' }} />
//       <Card.Body>
//         <Card.Title>{ChinpokomonObj.name}</Card.Title>
//         <Button variant="danger" onClick={deleteThisChinpokomon} className="m-2">
//           Delete
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// }

// ChinpokomonCard.propTypes = {
//   ChinpokomonObj: PropTypes.shape({
//     name: PropTypes.string,
//     image: PropTypes.string,
//     firebaseKey: PropTypes.string,
//   }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };

// export default ChinpokomonCard;
