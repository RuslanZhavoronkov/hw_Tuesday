import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'
//import { OptionType } from '../../HW7'

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]//OptionType[]
    onChangeOption?: (option: any) => void
   // onChangeOption?: (option: number) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {
    const mappedOptions: any[] = options
        ? options.map((o) => (
              <option
                  id={'hw7-option-' + o.id}
                  className={s.option}
                  key={o.id}
                  value={o.id}
                  
                  
              >
                  {o.value}
              </option>
          ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
       //console.log(e.currentTarget.value)
        if (onChangeOption){
            onChangeOption(+e.currentTarget.value) // делают студенты
        }        // делают студенты
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
           value = {restProps.value}
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
