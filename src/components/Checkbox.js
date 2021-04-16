const Checkbox = ({ label }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={false}
      />
      {label} :
    </label>
  </div>
);

export default Checkbox;