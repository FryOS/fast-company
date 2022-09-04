import React from "react";
import PropTypes from "prop-types";

const SelectedField = ({
    label,
    value,
    onChange,
    defaultOptions,
    options,
    error
}) => {
    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };

    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                  nama: options[optionName].name,
                  value: options[optionName]._id
              }))
            : options;

    return (
        <div className="mb-4">
            <label htmlFor="validationCustom04" className="form-label">
                {label}
            </label>
            <select
                className={getInputClasses()}
                id="validationCustom04"
                value={value}
                name="profession"
                onChange={onChange}
            >
                <option disabled value="">
                    {defaultOptions}
                </option>
                {optionsArray &&
                    optionsArray.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.name}
                        </option>
                    ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

SelectedField.propTypes = {
    label: PropTypes.string,
    defaultOptions: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.string,
    onChange: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default SelectedField;
