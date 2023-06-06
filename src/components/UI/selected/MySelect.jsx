import React from 'react';

const MySelect = ({value, onChange, options}) => {
    return (
        <select value={value} onChange={e => onChange(e.target.value)}>
            <option disabled value=''>сортировка по</option>
            {options.map(p => <option value={p.value} key={p.value}>{p.name}</option>)}
        </select>
    );
};

export default MySelect;