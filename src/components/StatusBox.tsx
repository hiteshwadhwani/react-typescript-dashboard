import React from "react"
import {RxDotFilled} from "react-icons/rx"

interface statusBoxProps{
    label:string
}

const StatusBox: React.FC<statusBoxProps> = ({label}) => {
    return(
        <div>
            <div>

            </div>
            <div>
            <button className={`rounded-md cursor-none px-1 border-transparent font-semibold text-xs ${label === 'active' ? 'bg-green-200 text-green-500' : 'bg-slate-200 text-slate-500'}`}><RxDotFilled className="inline-block" />{label.toUpperCase()}</button>

            </div>
        </div>
        
    )
}
export default StatusBox