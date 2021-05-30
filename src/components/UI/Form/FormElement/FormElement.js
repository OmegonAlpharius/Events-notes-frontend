import React from "react";
import PropTypes from "prop-types";
import {TextField, Grid} from "@material-ui/core";

const FormElement = (props) => {
    return (
        <Grid item xs={12}>
            <TextField
                variant="outlined"
                fullWidth
                required={props.required}
                id={props.name}
                type={props.type}
                multiline={props.multiline}
                rows={3}
                label={props.label}
                name={props.name}
                autoComplete={props.name}
                value={props.value}
                onChange={props.onChange}
                error={!!props.error}
                helperText={props.error}
            />
        </Grid>
    );
};

FormElement.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    required: PropTypes.bool,
    multiline: PropTypes.bool,
    error: PropTypes.string,
};

export default FormElement;