import { FC } from 'react'
import downIcon from '../../../../assets/downIcon.svg'
import upIcon from '../../../../assets/upIcon.svg'
import noneIcon from '../../../../assets/noneIcon.svg'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    switch (sort) {
        case (down):
            return up
        case (up):
            return ''
        default:
            return down
    }
}

const SuperSort: FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
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
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt="sort"
            />
        </span>
    )
}

export default SuperSort
