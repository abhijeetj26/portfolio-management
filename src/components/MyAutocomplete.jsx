import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { getSummaryList } from 'services/dashboardService';


function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

function MyAutocomplete(props) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);

    const loading = open && options.length === 0;

    const autoCompleteType = props.type === "orderRefNo" ? "orderRefNo" : props.type === "fundName" ? "fundName " : "";

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }
        if (active) {
            getList();
        }

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);



    const getList = async () => {
        try {
            const response = await getSummaryList();
            if (response) {
                (async () => {
                    await sleep(1e3); // For demo purposes.
                    let refNoList = response.map((item) => {
                        return item[autoCompleteType.trim()];
                    });
                    setOptions(refNoList);
                })();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Autocomplete
            id="asynchronousDemo"
            sx={{ width: 150, pr: 1 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            isOptionEqualToValue={(option, value) => option.title === value.title}
            getOptionLabel={(option) => option}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={autoCompleteType === "orderRefNo" ? "Order Ref No" : "Fund Name"}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}


export default MyAutocomplete;