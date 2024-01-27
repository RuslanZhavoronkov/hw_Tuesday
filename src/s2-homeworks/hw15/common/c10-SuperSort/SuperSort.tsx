import React from 'react'

const downIcon = "https://img.icons8.com/material-two-tone/24/expand-arrow--v1.png"
const upIcon = "https://img.icons8.com/material-outlined/24/collapse-arrow.png"
const noneIcon = "https://img.icons8.com/material-outlined/24/000000/sort.png"

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') {
        sort = down;
    } else if (sort === down) {
        sort = up;
    } else if (sort === up) {
        sort = '';
    }
    return sort
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        const newSortValue = pureChange(sort, down, up);
        onChange(newSortValue);
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img width="18" height="18"
                 id={id + '-icon-' + sort}
                 src={icon} alt='Icons by sort'
            />
        </span>
    )
}

export default SuperSort
