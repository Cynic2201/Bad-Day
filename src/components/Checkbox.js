const Checkbox = ({ label }) => (
      <input
        type="radio"
        name={label}
        checked={false}
      />
);

export default Checkbox;