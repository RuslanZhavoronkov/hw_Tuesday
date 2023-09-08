import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
    useState,
} from 'react'
import s from './SuperRadio.module.css'
//import { OptionType } from '../../HW7'

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: any[]//OptionType[]
    onChangeOption?: (option: number) => void

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      // console.log(e.currentTarget.value)
        if (onChangeOption){
            onChangeOption(+e.currentTarget.value) // делают студенты
        } 
        
      //  setCheck(!check)
        
    }
    


    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

   // const [check, setCheck] = useState(false)

    const mappedOptions: any[] = options
        ? options.map((o) => (
            <label key={name + '-' + o.id} className={s.label}>
                <input
                    id={id + '-input-' + o.id}
                    className={finalRadioClassName}
                    type={'radio'}
                    // name, checked, value делают студенты
                    name={name}
                    value={o.id}
                    checked={o.id === value}
                    onChange={onChangeCallback}
                    {...restProps}
                    
                />
                <span
                    id={id + '-span-' + o.id}
                    {...spanProps}
                    className={spanClassName}
                >
                    {o.value}
                </span>
            </label>
        ))
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
