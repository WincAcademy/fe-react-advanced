import PropTypes from "prop-types";
import React from "react";

function Person({ name, age, address, hobbies, pronoun }) {
  const formattedAddress = `${address.houseNumber} ${address.street}, ${address.city}`;
  return (
    <div className="person">
      <p>
        {name} (aged {age}) lives at {formattedAddress}. {pronoun} hobbies are{" "}
        {hobbies.join(", ")}. What a person!
      </p>
    </div>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string,
    houseNumber: PropTypes.number,
    city: PropTypes.string,
  }).isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  pronoun: PropTypes.string,
};

Person.defaultProps = {
  hobbies: ["coding"],
  pronoun: "Their",
};

export default Person;
