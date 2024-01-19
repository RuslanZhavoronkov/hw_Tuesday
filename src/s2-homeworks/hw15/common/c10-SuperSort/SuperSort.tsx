import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import HeightSharpIcon from '@mui/icons-material/HeightSharp';

// добавить в проект иконки и импортировать
const downIcon = <ArrowDropDownIcon fontSize={'small'}/>
const upIcon = <ArrowDropUpIcon fontSize={'small'}/>
const noneIcon = <HeightSharpIcon fontSize={'small'}/>

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return sort === '' ? down : sort === down ? up : sort === up ? '' : down
}

const SuperSort: React.FC<SuperSortPropsType> = (
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
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}

            {icon} {/*а это убрать*/}
        </span>
    )
}

export default SuperSort
//________________________________________________________________________________________________________________________________________
// import React from "react";
// import s from "./../../HW15.module.css";

// // добавить в проект иконки и импортировать
// const downIcon = "[\\/]";
// const upIcon = "[/\\]";
// const noneIcon = "[--]";

// export type SuperSortPropsType = {
//   id?: string;
//   sort: string;
//   value: string;
//   onChange: (newSort: string) => void;
// };

// export const pureChange = (sort: string, down: string, up: string) => {
//   // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
//   if (sort === "" || sort === down) {
//     return up;
//   } else if (sort === up) {
//     return "";
//   } else {
//     return down;
//   }
// };

// const SuperSort: React.FC<SuperSortPropsType> = ({
//   sort,
//   value,
//   onChange,
//   id = "hw15",
// }) => {
//   const up = "0" + value;
//   const down = "1" + value;

//   const onChangeCallback = () => {
//     onChange(pureChange(sort, down, up));
//   };

//   const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

//   return (
//     <span id={id + "-sort-" + value} onClick={onChangeCallback}>
//         <div >
//         <img 
//         className = {s.icon}
//         id={id + '-icon-' + sort}
//         src='https://e7.pngegg.com/pngimages/351/361/png-clipart-computer-icons-bubble-sort-sorting-algorithm-arrow-arrow-angle-text.png' />
//         </div>
      
//       {/*сделать иконку*/}
//       {/*<img*/}
//       {/*    id={id + '-icon-' + sort}*/}
//       {/*    src={icon}*/}
//       {/*/>*/}
//       { /*{icon} а это убрать*/}
//     </span>
//   );
// };

// export default SuperSort;